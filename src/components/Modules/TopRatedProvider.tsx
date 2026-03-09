// 'use client';

// import { useEffect, useRef, useState } from "react";
// import { Bookmark, Clock, Phone, MailIcon } from "lucide-react";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { useTopRatedProviders } from "@/src/context/HomeTopRatedProvider";
// import { useRouter } from "next/navigation";
// import { useFavourites } from "@/src/context/FavouriteContext";
// import { useRecommendedServices } from "@/src/context/RecommendedContext";
// import { useAuth } from "@/src/context/AuthContext";
// import { CiBookmark } from "react-icons/ci";



// export default function TopRatedProvider() {
//     const scrollRef = useRef<HTMLDivElement | null>(null);
//     const [isDown, setIsDown] = useState(false);
//     const [startX, setStartX] = useState(0);
//     const [scrollLeft, setScrollLeft] = useState(0);
//     const router = useRouter();

//     const { providers, loading, error, } = useTopRatedProviders()
//     const { addFavourite, removeFavourite, isFavourite, fetchFavourites } = useFavourites();
//     const { user } = useAuth();
//     const userId = user?._id;

//     useEffect(() => {
//         if (userId) {
//             fetchFavourites(userId);
//         }
//     }, [userId]);

//     const handleToggleFavourite = async (serviceId: string) => {
//         if (!userId) return;
//         if (isFavourite(serviceId)) {
//             await removeFavourite(userId, serviceId);
//         } else {
//             await addFavourite(userId, serviceId);
//         }
//     };


//     const mappedServices = providers.map((provider) => ({
//         id: provider._id,
//         _id: provider._id,
//         name: provider.storeInfo?.storeName || "Unknown Store",
//         phone: provider.phoneNo,
//         email: provider.email,
//         status: provider.isStoreOpen ? "Available" : "Closed",
//         categories: provider.category_list || [],
//         description: provider.storeInfo?.aboutUs || "No description available",
//         providerName: provider.fullName,
//         storeName: provider.storeInfo?.storeName || "Unknown Store",
//         image:
//             provider.storeInfo?.cover ||
//             "/image/placeholder.png",
//         rating: provider.averageRating || 0,
//         reviews: provider.totalReviews || 0,
//         experience: provider.storeInfo?.totalExperience
//             ? `${provider.storeInfo.totalExperience}+ Years`
//             : "N/A",
//         isOpen: provider.isStoreOpen,
//         address: provider.storeInfo?.address || "",
//         location: `${provider.storeInfo?.city || ""}, ${provider.storeInfo?.state || ""}`,
//         tags: provider.storeInfo?.tags || [],
//         phoneNo: provider.phoneNo,
//         storeInfo: provider.storeInfo,
//         fullName: provider.fullName,
//     }));



//     if (loading) return <p className="p-18 text-center">Loading...</p>;
//     if (error) return <p className="p-18 text-center text-red-500">{error}</p>;
//     if (!providers.length) return <p className="p-18 text-center text-gray-500">No providers found</p>;

//     return (
//         <div className="relative w-full p-4 lg:p-14">
//             <h1 className="text-[16px] font-semibold md:text-[20px] lg:text-[24px] ml-4 lg:ml-6">Top Rated Providers</h1>

//             {/* SCROLL CONTAINER */}
//             <div
//                 ref={scrollRef}
//                 className="w-full overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
//                 onMouseDown={(e) => {
//                     setIsDown(true);
//                     setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
//                     setScrollLeft(scrollRef.current?.scrollLeft || 0);
//                 }}
//                 onMouseLeave={() => setIsDown(false)}
//                 onMouseUp={() => setIsDown(false)}
//                 onMouseMove={(e) => {
//                     if (!isDown || !scrollRef.current) return;
//                     e.preventDefault();
//                     const x = e.pageX - scrollRef.current.offsetLeft;
//                     const walk = (x - startX) * 1.5;
//                     scrollRef.current.scrollLeft = scrollLeft - walk;
//                 }}
//             >
//                 {/* CARD WRAPPER */}
//                 <div className="flex gap-6 min-w-max p-2 lg:p-4">
//                     {mappedServices.map((item) => (
//                         <div
//                             key={item.id}
//                             className="shrink-0 w-[300px] lg:w-[479px] bg-white border border-gray-300 rounded-xl p-4 lg:-ml-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
//                             onClick={() => {
//                                 router.push(`/MainModules/providers/${item.id}?providerName=${encodeURIComponent(item.name)}`)
//                             }}
//                         >
//                             {/* HEADER */}
//                             <div className="-mx-4 -mt-4 lg:-mt-4 p-4 max-h-[150px] bg-[#F7FAFE] rounded-t-xl">
//                                 <div className="flex items-start gap-3">
//                                     <img
//                                         src={item.image}
//                                         alt={item.name}
//                                         className="w-[55px] h-[55px] lg:w-[96px] lg:h-[96px] rounded-full object-fit"
//                                         onError={(e) => {
//                                             e.currentTarget.src = "/image/placeholder.png";
//                                         }}
//                                     />
//                                     <div className="flex-1">
//                                         <h2 className="font-semibold text-[14px] lg:text-[20px]">{item.name}</h2>
//                                         <p className="lg:text-[16px] text-[12px] text-gray-500 leading-snug line-clamp-2 max-h-[80%]">
//                                             {item.description}
//                                         </p>
//                                         <div className="flex flex-row gap-1 lg:gap-4 mt-2 text-[10px] lg:text-[14px] text-gray-600 whitespace-nowrap">
//                                             <p className="flex items-center gap-1">
//                                                 <Phone className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500" />
//                                                 <span>{item.phone}</span>
//                                             </p>
//                                             <p className="flex items-center gap-1">
//                                                 <MailIcon className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500" />
//                                                 <span>{item.email}</span>
//                                             </p>
//                                         </div>

//                                         <div className="mt-1 flex gap-1 text-[10px] lg:text-[14px] text-gray-600">
//                                             <FaMapMarkerAlt
//                                                 className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500 shrink-0 mt-[2px]"
//                                             />
//                                             <span className="break-words md:whitespace-normal lg:whitespace-nowrap lg:truncate">
//                                                 {item.address}
//                                             </span>
//                                         </div>
//                                     </div>
//                                     {/* <Bookmark className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 shrink-0 mt-1 -ml-6 hover:text-blue-500 transition-colors" /> */}

//                                     <button
//                                         onClick={(e) => {
//                                             e.preventDefault();
//                                             e.stopPropagation();
//                                             handleToggleFavourite(item._id);
//                                         }}
//                                         className={`w-4 h-4 lg:w-5 lg:h-5 text-gray-400 shrink-0 mt-1 -ml-6 hover:text-blue-500 transition-colors
//                                                                                 ${isFavourite(item._id) ? "bg-red-500" : "bg-gray-400"}`}
//                                     >
//                                         <CiBookmark size={14} color="#fff" />
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* STATUS */}
//                             <div className="flex mb-1 mt-2 lg:mt-6">
//                                 <span className={`ml-auto text-white text-[10px] lg:text-[12px] px-3 py-1 rounded-full ${item.status === 'Available' ? 'bg-green-500' : 'bg-red-500'
//                                     }`}>
//                                     {item.status}
//                                 </span>
//                             </div>

//                             {/* CATEGORIES */}
//                             <div className="h-[95px] overflow-y-auto">
//                                 <h4 className="text-[10px] lg:text-[16px] font-medium mb-2">
//                                     Services Category -
//                                 </h4>
//                                 <div className="flex flex-wrap gap-2">
//                                     {item.categories.map((cat, i) => (
//                                         <span
//                                             key={i}
//                                             className="bg-gray-100 text-[10px] lg:text-[14px] px-3 py-1 rounded-full"
//                                         >
//                                             {cat}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* ABOUT SECTION */}
//                             <div className="mt-4">
//                                 <h4 className="text-[10px] lg:text-[16px] font-medium mb-3">
//                                     About Service
//                                 </h4>
//                                 <div className="flex gap-4">
//                                     <div className="flex gap-2">
//                                         <Clock className="w-4 h-4 text-blue-500 mt-1" />
//                                         <div>
//                                             <p className="text-[10px] lg:text-[13px] font-medium">{item.experience}</p>
//                                             <p className="text-[10px] lg:text-[13px] text-gray-500">Working Experience</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <span className="text-orange-500">⭐</span>
//                                         <div>
//                                             <p className="text-[10px] lg:text-[13px] font-medium">{item.rating.toFixed(1)} Rating</p>
//                                             <p className="text-[10px] lg:text-[12px] text-gray-500">{item.reviews} Reviews</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* SERVICE DETAILS TAGS */}
//                             <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] lg:text-[16px]">
//                                 {item.tags.slice(0, 4).map((tag: string, index: number) => (
//                                     <div
//                                         key={index}
//                                         className="bg-blue-50 h-[40px] flex items-center justify-center gap-2 px-3 py-2 rounded-lg"
//                                     >
//                                         {/* {getTagIcon(index)} */}
//                                         <span className="truncate">{tag}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }







'use client';

import { useEffect, useRef, useState } from "react";
import { Clock, Phone, MailIcon } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTopRatedProviders } from "@/src/context/HomeTopRatedProvider";
import { useRouter } from "next/navigation";
import { useFavourites } from "@/src/context/FavouriteContext";
import { useAuth } from "@/src/context/AuthContext";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

export default function TopRatedProvider() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const router = useRouter();
    const { providers, loading, error } = useTopRatedProviders();
    const { addFavourite, removeFavourite, isFavourite, fetchFavourites } = useFavourites();
    const { user } = useAuth();
    const userId = user?._id;
   
    useEffect(() => {
        if (userId) {
            fetchFavourites(userId);
        }
    }, [userId, fetchFavourites]);

    // const handleToggleFavourite = async (e: React.MouseEvent, serviceId: string) => {
    //     e.preventDefault();
    //     e.stopPropagation();

    //     if (!userId) {
    //         // Optional: Show login prompt
    //         alert("Please login to add favorites");
    //         return;
    //     }

    //     try {
    //         if (isFavourite(serviceId)) {
    //             await removeFavourite(userId, serviceId);
    //         } else {
    //             await addFavourite(userId, serviceId);
    //         }
    //     } catch (error) {
    //         console.error("Error toggling favourite:", error);
    //     }
    // };

    const mappedServices = providers.map((provider) => ({
        id: provider._id,
        // _id: provider._id,
        name: provider.storeInfo?.storeName || "Unknown Store",
        phone: provider.phoneNo,
        email: provider.email,
        status: provider.isStoreOpen ? "Available" : "Closed",
        categories: provider.category_list || [],
        description: provider.storeInfo?.aboutUs || "No description available",
        providerName: provider.fullName,
        storeName: provider.storeInfo?.storeName || "Unknown Store",
        image: provider.storeInfo?.cover || "/image/placeholder.png",
        rating: provider.averageRating || 0,
        reviews: provider.totalReviews || 0,
        experience: provider.storeInfo?.totalExperience
            ? `${provider.storeInfo.totalExperience}+ Years`
            : "N/A",
        isOpen: provider.isStoreOpen,
        address: provider.storeInfo?.address || "",
        location: `${provider.storeInfo?.city || ""}, ${provider.storeInfo?.state || ""}`,
        tags: provider.storeInfo?.tags || [],
        phoneNo: provider.phoneNo,
        storeInfo: provider.storeInfo,
        fullName: provider.fullName,
    }));


   const handleToggleFavourite = async (e: React.MouseEvent, serviceId: string) => {
    e.preventDefault();
    e.stopPropagation();

    if (!userId) {
        alert("Please login to add favorites");
        return;
    }

    try {
        if (isFavourite(serviceId)) {
            await removeFavourite(userId, serviceId);
        } else {
            await addFavourite(userId, serviceId);
        }

        // 🔥 REFRESH favourites after update
        await fetchFavourites(userId);

    } catch (err) {
        console.error("Error toggling favourite:", err);
    }
};

    if (loading) return <p className="p-18 text-center">Loading...</p>;
    if (error) return <p className="p-18 text-center text-red-500">{error}</p>;
    if (!providers.length) return <p className="p-18 text-center text-gray-500">No providers found</p>;

    return (
        <div className="relative w-full p-4 lg:p-14">
            <h1 className="text-[16px] font-semibold md:text-[20px] lg:text-[24px] ml-4 lg:ml-6">Top Rated Providers</h1>

            {/* SCROLL CONTAINER */}
            <div
                ref={scrollRef}
                className="w-full overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
                onMouseDown={(e) => {
                    setIsDown(true);
                    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
                    setScrollLeft(scrollRef.current?.scrollLeft || 0);
                }}
                onMouseLeave={() => setIsDown(false)}
                onMouseUp={() => setIsDown(false)}
                onMouseMove={(e) => {
                    if (!isDown || !scrollRef.current) return;
                    e.preventDefault();
                    const x = e.pageX - scrollRef.current.offsetLeft;
                    const walk = (x - startX) * 1.5;
                    scrollRef.current.scrollLeft = scrollLeft - walk;
                }}
            >
                {/* CARD WRAPPER */}
                <div className="flex gap-6 min-w-max p-2 lg:p-4">
                    {mappedServices.map((item) => (
                        <div
                            key={item.id}
                            className="shrink-0 w-[300px] lg:w-[479px] bg-white border border-gray-300 rounded-xl p-4 lg:-ml-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                            onClick={() => {
                                router.push(`/MainModules/providers/${item.id}?providerName=${encodeURIComponent(item.name)}`);
                            }}
                        >
                            {/* HEADER */}
                            <div className="-mx-4 -mt-4 lg:-mt-4 p-4 max-h-[150px] bg-[#F7FAFE] rounded-t-xl">
                                <div className="flex items-start gap-3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-[55px] h-[55px] lg:w-[96px] lg:h-[96px] rounded-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = "/image/placeholder.png";
                                        }}
                                    />
                                    <div className="flex-1">
                                        <h2 className="font-semibold text-[14px] lg:text-[20px]">{item.name}</h2>
                                        <p className="lg:text-[16px] text-[12px] text-gray-500 leading-snug line-clamp-2 max-h-[80%]">
                                            {item.description}
                                        </p>
                                        <div className="flex flex-row gap-1 lg:gap-4 mt-2 text-[10px] lg:text-[14px] text-gray-600 whitespace-nowrap">
                                            <p className="flex items-center gap-1">
                                                <Phone className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500" />
                                                <span>{item.phone}</span>
                                            </p>
                                            <p className="flex items-center gap-1">
                                                <MailIcon className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500" />
                                                <span>{item.email}</span>
                                            </p>
                                        </div>

                                        <div className="mt-1 flex gap-1 text-[10px] lg:text-[14px] text-gray-600">
                                            <FaMapMarkerAlt className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500 shrink-0 mt-[2px]" />
                                            <span className="break-words md:whitespace-normal lg:whitespace-nowrap lg:truncate">
                                                {item.address}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Fixed Bookmark Button */}
                                    <button
                                        onClick={(e) => handleToggleFavourite(e, item.id)}
                                        className={`p-1.5 rounded-full transition-colors ${isFavourite(item.id)
                                            ? "bg-red-500 hover:bg-red-600"
                                            : "bg-gray-200 hover:bg-gray-300"
                                            }`}
                                        aria-label={isFavourite(item.id) ? "Remove from favorites" : "Add to favorites"}
                                    >
                                        {isFavourite(item.id) ? (
                                            <FaBookmark className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                                        ) : (
                                            <CiBookmark className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                                        )}
                                    </button>

                                </div>
                            </div>

                            {/* STATUS */}
                            <div className="flex mb-1 mt-2 lg:mt-6">
                                <span className={`ml-auto text-white text-[10px] lg:text-[12px] px-3 py-1 rounded-full ${item.status === 'Available' ? 'bg-green-500' : 'bg-red-500'
                                    }`}>
                                    {item.status}
                                </span>
                            </div>

                            {/* CATEGORIES */}
                            <div className="h-[95px] overflow-y-auto">
                                <h4 className="text-[10px] lg:text-[16px] font-medium mb-2">
                                    Services Category -
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {item.categories.map((cat, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-100 text-[10px] lg:text-[14px] px-3 py-1 rounded-full"
                                        >
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* ABOUT SECTION */}
                            <div className="mt-4">
                                <h4 className="text-[10px] lg:text-[16px] font-medium mb-3">
                                    About Service
                                </h4>
                                <div className="flex gap-4">
                                    <div className="flex gap-2">
                                        <Clock className="w-4 h-4 text-blue-500 mt-1" />
                                        <div>
                                            <p className="text-[10px] lg:text-[13px] font-medium">{item.experience}</p>
                                            <p className="text-[10px] lg:text-[13px] text-gray-500">Working Experience</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-orange-500">⭐</span>
                                        <div>
                                            <p className="text-[10px] lg:text-[13px] font-medium">{item.rating.toFixed(1)} Rating</p>
                                            <p className="text-[10px] lg:text-[12px] text-gray-500">{item.reviews} Reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SERVICE DETAILS TAGS */}
                            <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] lg:text-[16px]">
                                {item.tags.slice(0, 4).map((tag: string, index: number) => (
                                    <div
                                        key={index}
                                        className="bg-blue-50 h-[40px] flex items-center justify-center gap-2 px-3 py-2 rounded-lg"
                                    >
                                        <span className="truncate">{tag}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}