import { useAllServices } from "@/src/context/AllServicesContext";
import { useAuth } from "@/src/context/AuthContext";
import { useFavourites } from "@/src/context/FavouriteContext";
import { useModule } from "@/src/context/ModuleContext";
import { User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { CiBookmark } from "react-icons/ci";

// Import the LightweightService type from your context
import { LightweightService } from "@/src/context/AllServicesContext";

interface OnDemandServiceProps {
    searchQuery?: string; // Add search query prop
}

export default function OnDemandService({ searchQuery = "" }: OnDemandServiceProps) {
    const { services, loading, error, fetchServices } = useAllServices();
    const router = useRouter();
    const { addFavourite, removeFavourite, isFavourite, fetchFavourites } = useFavourites();
    const { user } = useAuth();
    const { modules, refetchModules: fetchModules } = useModule();

    const userId = user?._id;

    useEffect(() => {
        if (userId) {
            fetchFavourites(userId);
        }
    }, [userId, fetchFavourites]);

    useEffect(() => {
        fetchModules();
        fetchServices();
    }, []);

    // const filteredServices = useMemo<LightweightService[]>(() => {
    //     if (!services?.length || !modules?.length) return [];
    //     const onDemandModule = modules.find((m: { name: string }) => m.name === "On-Demand");
    //     const onDemandModuleId = onDemandModule?._id;
    //     return services.filter((service: LightweightService) =>
    //         service.category?.module === onDemandModuleId
    //     );
    // }, [services, modules]);

       // FIRST FILTER: Get only On-Demand services
    const filteredServices = useMemo<LightweightService[]>(() => {
        if (!services?.length || !modules?.length) {
            console.log("No services or modules available");
            return [];
        }
        
        const onDemandModule = modules.find((m: { name: string }) => m.name === "On-Demand");
        const onDemandModuleId = onDemandModule?._id;
        
        if (!onDemandModuleId) {
            console.log("On-Demand module not found");
            return [];
        }
        
       
        
        const filtered = services.filter((service: LightweightService) =>
            service.category?.module === onDemandModuleId
        );
        
        console.log(`Found ${filtered.length} On-Demand services`);
        return filtered;
    }, [services, modules]);

    // SECOND FILTER: Apply search query on the On-Demand services
    const filteredServicesData = useMemo(() => {
        // ✅ FIX: Check filteredServices.length, not services.length
        if (!filteredServices.length) {
            console.log("No On-Demand services to filter");
            return [];
        }
        
        // If search query is empty, return all On-Demand services
        if (!searchQuery.trim()) {
            console.log(`No search query, showing all ${filteredServices.length} On-Demand services`);
            return filteredServices;
        }

        // Filter services based on search query
        const query = searchQuery.toLowerCase().trim();
        console.log(`Searching for "${query}" in ${filteredServices.length} On-Demand services`);
        
        const searched = filteredServices.filter((service: LightweightService) => {
            // Add null checks for safety
            const nameMatch = service.serviceName?.toLowerCase().includes(query) || false;
            const categoryMatch = service.category?.name?.toLowerCase().includes(query) || false;
            
            // Safely check tags
            const tagsMatch = Array.isArray(service.tags) 
                ? service.tags.some(tag => tag?.toLowerCase().includes(query))
                : false;
            
            return nameMatch || categoryMatch || tagsMatch;
        });
        
        console.log(`Found ${searched.length} matches for "${query}"`);
        return searched;
    }, [filteredServices, searchQuery]);

    // Add debug logging
    useEffect(() => {
        console.log("=== Debug Info ===");
        console.log("Total services from context:", services.length);
        console.log("On-Demand services:", filteredServices.length);
        console.log("Filtered by search:", filteredServicesData.length);
        console.log("Current search query:", searchQuery);
        console.log("=================");
    }, [services, filteredServices, filteredServicesData, searchQuery]);

   

    const handleToggleFavourite = async (serviceId: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!userId) return;
        if (isFavourite(serviceId)) {
            await removeFavourite(userId, serviceId);
        } else {
            await addFavourite(userId, serviceId);
        }
    };

    if (loading) return (
        <div className="flex items-center justify-center min-h-[200px]">
            <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
    );

    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {filteredServicesData.map((service: LightweightService) => {
                const startingPackage = service.serviceDetails?.packages?.[0];
                const displayCommission = service.franchiseDetails?.commission || "0%";
                const rating = service.averageRating || 0;
                const reviews = service.totalReviews || 0;
                const filteredFeatures = service.keyValues?.slice(0, 3) || [];

                return (
                    <div
                        key={service._id}
                        className="w-full max-w-[345px] md:max-w-[400px] lg:max-w-[424px] h-[360px] md:h-[380px] lg:h-[350px] flex-shrink-0 bg-gradient-to-b 
                        from-white to-[#D8E0F099] rounded-[14px] border border-[#E7E7E7] 
                        shadow p-1 flex flex-col gap-4 cursor-pointer mx-auto"
                        onClick={() =>
                            router.push(`/MainModules/On-Demand/ServiceDetails/${service._id}?service=${encodeURIComponent(service.serviceName)}`)
                        }
                    >
                        {/* IMAGE */}
                        <div className="relative rounded-lg">
                            <Image
                                src={service.thumbnailImage || "https://via.placeholder.com/424x170/2164F4/FFFFFF?text=Service+Image"}
                                alt={service.serviceName}
                                width={424}
                                height={170}
                                className="w-full h-[152px] lg:h-[170px] object-fit rounded-lg"
                            />

                            <button
                                onClick={(e) => handleToggleFavourite(service._id, e)}
                                className={`absolute top-2 right-2 w-[28px] h-[28px] rounded-full flex items-center justify-center
                                    ${isFavourite(service._id) ? "bg-red-500" : "bg-black/70"}`}
                            >
                                <CiBookmark size={16} color="#fff" />
                            </button>
                        </div>

                        {/* HEADER */}
                        <div className="flex items-start justify-between px-1">
                            <div className="min-w-0 flex-1">
                                <h2 className="text-[14px] lg:text-[16px] font-medium line-clamp-2 break-words">
                                    {service.serviceName}
                                </h2>
                                <div className="mt-1 flex items-center gap-2">
                                    <p className="text-gray-600 px-2 py-1 text-[8px] lg:text-[12px] bg-green-100 rounded-lg font-medium whitespace-nowrap border border-green-200">
                                        Earn Up to {displayCommission}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-end shrink-0 ml-2">
                                <div className="flex flex-col items-end">
                                    <div className="flex items-center text-yellow-400 text-[20px] md:text-[25px] leading-none">
                                        {(() => {
                                            const clampedRating = Math.max(0, Math.min(5, rating));
                                            const rounded = Math.round(clampedRating * 2) / 2;
                                            const fullStars = Math.floor(rounded);
                                            const hasHalfStar = rounded % 1 !== 0;
                                            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
                                            return (
                                                <div className="flex items-center gap-0 text-[12px] md:text-[18px] leading-none">
                                                    {[...Array(fullStars)].map((_, i) => (
                                                        <span key={`full-${i}`} className="text-yellow-400">★</span>
                                                    ))}
                                                    {hasHalfStar && (
                                                        <span className="relative inline-block w-[1em]">
                                                            <span className="absolute overflow-hidden w-1/2 text-yellow-400">★</span>
                                                            <span className="text-gray-300">★</span>
                                                        </span>
                                                    )}
                                                    {[...Array(emptyStars)].map((_, i) => (
                                                        <span key={`empty-${i}`} className="text-gray-300">★</span>
                                                    ))}
                                                </div>
                                            );
                                        })()}
                                    </div>
                                    <div className="flex items-center mt-1 text-[12px] text-gray-600">
                                        <User className="w-3 h-3 mr-1" />
                                        <span>{reviews} {reviews === 1 ? 'review' : 'reviews'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FEATURES */}
                        <div className="flex items-center justify-between h-[56px] w-full px-1">
                            <div className="space-y-2 flex-1">
                                {filteredFeatures.map((f, i) => (
                                    <div key={f._id || i} className="flex items-center gap-2 leading-tight text-[12px] lg:text-[14px]">
                                        {f.icon && (
                                            <Image
                                                src={f.icon}
                                                alt="icon"
                                                width={16}
                                                height={16}
                                                className="object-contain"
                                            />
                                        )}
                                        <span className="min-w-0 break-words leading-[1.0] whitespace-normal text-gray-600">
                                            {f.value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="text-right shrink-0 ml-2">
                                {startingPackage && startingPackage.discount > 0 && (
                                    <span className="bg-green-500 text-white text-[10px] lg:text-[12px] px-2 py-1 rounded">
                                        {startingPackage.discount}% OFF
                                    </span>
                                )}
                                {startingPackage && (
                                    <>
                                        <p className="text-[10px] text-gray-500 mt-1">Starting From</p>
                                        <div className="flex gap-1 justify-end items-center">
                                            {startingPackage.price > startingPackage.discountedPrice && (
                                                <span className="line-through text-gray-400 text-[10px] lg:text-[12px]">
                                                    ₹{startingPackage.price}
                                                </span>
                                            )}
                                            <span className="font-semibold text-[12px] lg:text-[16px]">
                                                ₹{startingPackage.discountedPrice}
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
            
            {filteredServices.length === 0 && !loading && (
                <div className="col-span-full text-center py-12">
                    <p className="text-gray-500">No On-Demand services found</p>
                </div>
            )}
        </div>
    );
}







// 'use client';

// import { useAllServices } from "@/src/context/AllServicesContext";
// import { useAuth } from "@/src/context/AuthContext";
// import { useFavourites } from "@/src/context/FavouriteContext";
// import { User } from "lucide-react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useEffect, useMemo } from "react";
// import { CiBookmark } from "react-icons/ci";
// import { LightweightService } from "@/src/context/AllServicesContext";

// interface OnDemandServiceProps {
//     searchQuery?: string; // Add search query prop
// }

// export default function OnDemandService({ searchQuery = "" }: OnDemandServiceProps) {
//     const { services, loading, error, fetchServices } = useAllServices();
//     const router = useRouter();
//     const { addFavourite, removeFavourite, isFavourite, fetchFavourites } = useFavourites();
//     const { user } = useAuth();

//     const userId = user?._id;

//     useEffect(() => {
//         if (userId) {
//             fetchFavourites(userId);
//         }
//     }, [userId, fetchFavourites]);

//     useEffect(() => {
//         fetchServices();
//     }, [fetchServices]);

//     // Filter services based on search query
//     const filteredServices = useMemo(() => {
//         if (!services.length) return [];
        
//         // If search query is empty, return all services
//         if (!searchQuery.trim()) {
//             return services;
//         }

//         // Filter services based on search query (case-insensitive)
//         const query = searchQuery.toLowerCase().trim();
//         return services.filter((service: LightweightService) => {
//             return (
//                 service.serviceName.toLowerCase().includes(query) ||
//                 service.category?.name?.toLowerCase().includes(query) ||
//                 service.tags?.some(tag => tag.toLowerCase().includes(query))
//             );
//         });
//     }, [services, searchQuery]);

//     const handleToggleFavourite = async (serviceId: string, e: React.MouseEvent) => {
//         e.preventDefault();
//         e.stopPropagation();
//         if (!userId) return;
//         if (isFavourite(serviceId)) {
//             await removeFavourite(userId, serviceId);
//         } else {
//             await addFavourite(userId, serviceId);
//         }
//     };

//     if (loading) return (
//         <div className="flex items-center justify-center min-h-[200px]">
//             <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
//         </div>
//     );

//     if (error) return <p className="text-red-500">{error}</p>;

//     return (
//         <div className="container mx-auto px-4">
//             {/* Show search result count when searching */}
//             {searchQuery && (
//                 <div className="mb-4 text-gray-600">
//                     Found {filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'} matching &quot;{searchQuery}&quot;
//                 </div>
//             )}

//             {filteredServices.length === 0 ? (
//                 <div className="text-center py-12">
//                     {searchQuery ? (
//                         <>
//                             <p className="text-gray-500 text-lg">No services found for &quot;{searchQuery}&quot;</p>
//                             <p className="text-gray-400 mt-2">Try searching with different keywords</p>
//                         </>
//                     ) : (
//                         <p className="text-gray-500">No On-Demand services available</p>
//                     )}
//                 </div>
//             ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//                     {filteredServices.map((service: LightweightService) => {
//                         const startingPackage = service.serviceDetails?.packages?.[0];
//                         const displayCommission = service.franchiseDetails?.commission || "0%";
//                         const rating = service.averageRating || 0;
//                         const reviews = service.totalReviews || 0;
//                         const filteredFeatures = service.keyValues?.slice(0, 3) || [];

//                         return (
//                             <div
//                                 key={service._id}
//                                 className="w-full max-w-[345px] md:max-w-[400px] lg:max-w-[424px] h-[360px] md:h-[380px] lg:h-[350px] bg-gradient-to-b 
//                                 from-white to-[#D8E0F099] rounded-[14px] border border-[#E7E7E7] 
//                                 shadow p-1 flex flex-col gap-4 cursor-pointer mx-auto"
//                                 onClick={() =>
//                                     router.push(`/MainModules/On-Demand/ServiceDetails/${service._id}?service=${encodeURIComponent(service.serviceName)}`)
//                                 }
//                             >
//                                 {/* IMAGE */}
//                                 <div className="relative rounded-lg">
//                                     <Image
//                                         src={service.thumbnailImage || "https://via.placeholder.com/424x170/2164F4/FFFFFF?text=Service+Image"}
//                                         alt={service.serviceName}
//                                         width={424}
//                                         height={170}
//                                         className="w-full h-[152px] lg:h-[170px] object-cover rounded-lg"
//                                     />
//                                     <button
//                                         onClick={(e) => handleToggleFavourite(service._id, e)}
//                                         className={`absolute top-2 right-2 w-[28px] h-[28px] rounded-full flex items-center justify-center
//                                             ${isFavourite(service._id) ? "bg-red-500" : "bg-black/70"}`}
//                                     >
//                                         <CiBookmark size={16} color="#fff" />
//                                     </button>
//                                 </div>

//                                 {/* HEADER */}
//                                 <div className="flex items-start justify-between px-1">
//                                     <div className="min-w-0 flex-1">
//                                         <h2 className="text-[14px] lg:text-[16px] font-medium line-clamp-2 break-words">
//                                             {service.serviceName}
//                                         </h2>
//                                         <div className="mt-1 flex items-center gap-2">
//                                             <p className="text-gray-600 px-2 py-1 text-[8px] lg:text-[12px] bg-green-100 rounded-lg font-medium whitespace-nowrap border border-green-200">
//                                                 Earn Up to {displayCommission}
//                                             </p>
//                                         </div>
//                                     </div>

//                                     <div className="flex flex-col items-end shrink-0 ml-2">
//                                         <div className="flex flex-col items-end">
//                                             <div className="flex items-center text-yellow-400 text-[20px] md:text-[25px] leading-none">
//                                                 {(() => {
//                                                     const clampedRating = Math.max(0, Math.min(5, rating));
//                                                     const rounded = Math.round(clampedRating * 2) / 2;
//                                                     const fullStars = Math.floor(rounded);
//                                                     const hasHalfStar = rounded % 1 !== 0;
//                                                     const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
//                                                     return (
//                                                         <div className="flex items-center gap-0 text-[12px] md:text-[18px] leading-none">
//                                                             {[...Array(fullStars)].map((_, i) => (
//                                                                 <span key={`full-${i}`} className="text-yellow-400">★</span>
//                                                             ))}
//                                                             {hasHalfStar && (
//                                                                 <span className="relative inline-block w-[1em]">
//                                                                     <span className="absolute overflow-hidden w-1/2 text-yellow-400">★</span>
//                                                                     <span className="text-gray-300">★</span>
//                                                                 </span>
//                                                             )}
//                                                             {[...Array(emptyStars)].map((_, i) => (
//                                                                 <span key={`empty-${i}`} className="text-gray-300">★</span>
//                                                             ))}
//                                                         </div>
//                                                     );
//                                                 })()}
//                                             </div>
//                                             <div className="flex items-center mt-1 text-[12px] text-gray-600">
//                                                 <User className="w-3 h-3 mr-1" />
//                                                 <span>{reviews} {reviews === 1 ? 'review' : 'reviews'}</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* FEATURES */}
//                                 <div className="flex items-center justify-between h-[56px] w-full px-1">
//                                     <div className="space-y-2 flex-1">
//                                         {filteredFeatures.map((f, i) => (
//                                             <div key={f._id || i} className="flex items-center gap-2 leading-tight text-[12px] lg:text-[14px]">
//                                                 {f.icon && (
//                                                     <Image
//                                                         src={f.icon}
//                                                         alt="icon"
//                                                         width={16}
//                                                         height={16}
//                                                         className="object-contain"
//                                                     />
//                                                 )}
//                                                 <span className="min-w-0 break-words leading-[1.0] whitespace-normal text-gray-600">
//                                                     {f.value}
//                                                 </span>
//                                             </div>
//                                         ))}
//                                     </div>

//                                     <div className="text-right shrink-0 ml-2">
//                                         {startingPackage && startingPackage.discount > 0 && (
//                                             <span className="bg-green-500 text-white text-[10px] lg:text-[12px] px-2 py-1 rounded">
//                                                 {startingPackage.discount}% OFF
//                                             </span>
//                                         )}
//                                         {startingPackage && (
//                                             <>
//                                                 <p className="text-[10px] text-gray-500 mt-1">Starting From</p>
//                                                 <div className="flex gap-1 justify-end items-center">
//                                                     {startingPackage.price > startingPackage.discountedPrice && (
//                                                         <span className="line-through text-gray-400 text-[10px] lg:text-[12px]">
//                                                             ₹{startingPackage.price}
//                                                         </span>
//                                                     )}
//                                                     <span className="font-semibold text-[12px] lg:text-[16px]">
//                                                         ₹{startingPackage.discountedPrice}
//                                                     </span>
//                                                 </div>
//                                             </>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             )}
//         </div>
//     );
// }