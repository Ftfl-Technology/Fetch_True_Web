import { useAllServices } from "@/src/context/AllServicesContext";
import { useAuth } from "@/src/context/AuthContext";
import { useFavourites } from "@/src/context/FavouriteContext";
import { useModule } from "@/src/context/ModuleContext";
import { User } from "lucide-react";
import Image from "next/image"; // ✅ fix no-img-element
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react"; // ✅ removed useState
import { CiBookmark } from "react-icons/ci";

interface Service {
    _id: string;
    serviceName: string;
    thumbnailImage?: string;
    averageRating?: number;
    totalReviews?: number;
    category?: {
        _id: string;
        name: string;
        module: string;
    };
    franchiseDetails?: {
        commission?: string;
    };
    serviceDetails?: {
        packages?: Array<{
            discountedPrice: number;
            price: number;
            discount: number;
        }>;
    };
    keyValues?: Array<{
        _id: string;
        value: string;
        icon?: string;
    }>;
}

export default function OnDemandService() {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  
    const filteredServices = useMemo<Service[]>(() => {
        if (!services?.length || !modules?.length) return [];
        const onDemandModule = modules.find((m: { name: string }) => m.name === "On-Demand");
        const onDemandModuleId = onDemandModule?._id;
        return services.filter((service: Service) =>
            service.category?.module === onDemandModuleId
        );
    }, [services, modules]);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredServices.map((service: Service) => {
                const startingPackage = service.serviceDetails?.packages?.[0];
                const displayCommission = service.franchiseDetails?.commission || "0%";
                const rating = service.averageRating || 0;
                const reviews = service.totalReviews || 0;
                const filteredFeatures = service.keyValues?.slice(0, 3) || [];

                return (
                    <div
                        key={service._id}
                        className="w-[345px] h-[360px] md:w-[400px] md:h-[380px] lg:w-[424px] lg:h-[400px] flex-shrink-0 bg-gradient-to-b 
                        from-white to-[#D8E0F099] rounded-[14px] border border-[#E7E7E7] 
                        shadow p-1 flex flex-col gap-4 cursor-pointer"
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
                                className="w-full h-[152px] lg:h-[170px] object-cover rounded-lg"
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
                        <div className="flex items-start justify-between">
                            <div className="min-w-0 flex-1">
                                <h2 className="text-[14px] lg:text-[16px] font-medium line-clamp-2 break-words">
                                    {service.serviceName}
                                </h2>
                                <div className="mt-2 flex items-center gap-2">
                                    {/* <span className="text-[12px] lg:text-[14px] px-2 py-[2px] rounded text-white bg-[#2164F4] whitespace-nowrap">
                                        {service.category?.name || "Service"}
                                    </span> */}
                                    <p className="text-gray-600 px-2 py-1 text-[8px] lg:text-[12px] bg-green-100 rounded-lg font-medium whitespace-nowrap mb-1 border border-green-200">
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
                        <div className="flex items-center justify-between h-[56px] w-full">
                            <div className="space-y-2 p-2 flex-1">
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

                            <div className="text-right shrink-0 ml-2 p-2">
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
        </div>
    );
}