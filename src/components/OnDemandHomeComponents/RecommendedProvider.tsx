'use client';

import { useEffect, useRef, useState } from "react";
import { Bookmark, Clock, Phone, MailIcon } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRecommendedProviders } from "@/src/context/RecommendedProviderContext"
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import { useFavourites } from "@/src/context/FavouriteContext";
import { CiBookmark } from "react-icons/ci";


type SectionProps = {
    moduleId: string,
    selectedRange?: string;
    selectedCategory?: string;
    searchQuery?: string;
    contextTitle?: string;
};




export default function RecommendedProvider({ moduleId }: SectionProps) {

    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const router = useRouter();
    const { addFavourite, removeFavourite, isFavourite, fetchFavourites } = useFavourites();
    const { user } = useAuth();

    const userId = user?._id;

    useEffect(() => {
        if (userId) {
            fetchFavourites(userId);
        }
    }, [userId]);

    const {
        providers,
        loading,
        error,
        fetchRecommendedProviders,
    } = useRecommendedProviders();



    useEffect(() => {
        if (moduleId) {
            fetchRecommendedProviders(moduleId);
        }
    }, [moduleId]);


     const handleToggleFavourite = async (serviceId: string) => {
        if (!userId) return;
        if (isFavourite(serviceId)) {
            await removeFavourite(userId, serviceId);
        } else {
            await addFavourite(userId, serviceId);
        }
    };
    const mappedServices = providers.map((service) => ({
        id: service._id,
        name: service.storeInfo?.storeName || "Unknown Store",
        phone: service.phoneNo,
        email: service.email,
        status: service.isStoreOpen ? "Available" : "Closed",
        categories: service.category_list,
        description: service.storeInfo?.aboutUs || "No description available",
        // Provider / Store
        providerName: service.fullName,
        storeName: service.storeInfo?.storeName || "Unknown Store",

        // Image priority: logo → cover → placeholder
        image:
            service.storeInfo?.logo ||
            service.storeInfo?.cover ||
            "/image/placeholder.png",

        // Rating
        rating: service.averageRating ?? 0,
        reviews: service.totalReviews ?? 0,

        // Experience
        experience: service.storeInfo?.totalExperience
            ? `${service.storeInfo.totalExperience}+ Years`
            : "N/A",

        // Availability
        isOpen: service.isStoreOpen,

        // Address
        address: service.storeInfo?.address || "",
        location: `${service.storeInfo?.city || ""}, ${service.storeInfo?.state || ""}`,

        // Tags (chips / badges)
        tags: service.storeInfo?.tags || [],
    }));


    // const tagIcons = [
    //     <Clock key="clock" className="w-4 h-4 text-blue-500" />,
    //     <img key="tools" src="/image/OnDemandTools.png" className="w-4 h-4" />,
    //     <ShieldCheck key="shield" className="w-4 h-4 text-blue-500" />,
    //     <Calendar key="calendar" className="w-4 h-4 text-blue-500" />,
    // ];

    // const getTagIcon = (index: number) => {
    //     return tagIcons[index] || <Clock className="w-4 h-4 text-blue-500" />;
    // };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;


    return (
        <div className="relative w-full mt-6  lg:mt-2">
            <h1 className="text-[16px] font-semibold md:text-[20px] lg:text-[24px] ml-4 lg:ml-12">Recommended Provider</h1>
            {/* SCROLL CONTAINER */}
            <div
                ref={scrollRef}
                className="w-full overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
                onMouseDown={(e) => {
                    setIsDown(true);
                    setStartX(e.pageX - scrollRef.current!.offsetLeft);
                    setScrollLeft(scrollRef.current!.scrollLeft);
                }}
                onMouseLeave={() => setIsDown(false)}
                onMouseUp={() => setIsDown(false)}
                onMouseMove={(e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - scrollRef.current!.offsetLeft;
                    const walk = (x - startX) * 1.5;
                    scrollRef.current!.scrollLeft = scrollLeft - walk;
                }}
            >
                {/* CARD WRAPPER */}
                <div className="flex gap-6 min-w-max p-2 lg:p-12">

                    {mappedServices.map((item) => (
                        <div
                            key={item.id}
                            className="shrink-0 w-[300px] lg:w-[479px]  bg-white border border-gray-300 rounded-xl p-4 lg:-ml-0 shadow-sm"
                            onClick={() => {
                                // router.push(`/MainModules/On-Demand/${moduleId}/providers/${item.id}?providerName=${encodeURIComponent(item.name)}`)
                                router.push(`/MainModules/providers/${item.id}?providerName=${encodeURIComponent(item.name)}`)
                            }}
                        >
                            {/* HEADER */}
                            <div className="-mx-4 -mt-4 lg:-mt-4 p-4 max-h-[150px] bg-[#F7FAFE] rounded-t-xl">
                                <div className="flex items-start gap-3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-[55px] h-[55px] lg:w-[96px] lg:h-[96px] rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <h2 className="font-semibold text-[14px] lg:text-[20px]">{item.name}</h2>
                                        <p className="lg:text-[16px] text-[12px] text-gray-500 leading-snug line-clamp-2 max-h-[80%]">{item.description}</p>
                                        <div className="flex flex-row gap-1 lg:gap-4 mt-2 text-[10px] lg:text-[14px] text-gray-600 whitespace-nowrap">
                                            <p className="flex items-center gap-1">
                                                <Phone className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500" /> <span>{item.phone}</span>
                                            </p>
                                            <p className="flex items-center gap-1">
                                                <MailIcon className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500" /> <span>{item.email}</span>
                                            </p>
                                        </div>

                                        <div className="mt-1 flex gap-1 text-[10px] lg:text-[14px] text-gray-600">
                                            <FaMapMarkerAlt
                                                className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500 shrink-0 mt-[2px]"
                                            />

                                            <span className="
                                                    break-words
                                                    md:whitespace-normal
                                                    lg:whitespace-nowrap
                                                    lg:truncate
                                                ">
                                                {item.address}
                                            </span>
                                        </div>
                                    </div>
                                    {/* <Bookmark className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 shrink-0 mt-1 -ml-6" /> */}
                                    <button
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                e.stopPropagation();
                                                                                handleToggleFavourite(item.id);
                                                                            }}
                                                                            className={`w-4 h-4 lg:w-5 lg:h-5 text-gray-400 shrink-0 mt-1 -ml-6
                                                                                ${isFavourite(item.id) ? "bg-red-500" : "bg-black"}`}
                                                                        >
                                                                            <CiBookmark size={14} color="#fff" />
                                                                        </button>
                                </div>
                            </div>

                            {/* STATUS */}
                            <div className="flex mb-1 mt-2 lg:mt-6">
                                <span className="ml-auto bg-green-500 text-white text-[10px] lg:text-[12px] px-3 py-1 rounded-full">
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
                                            className="bg-gray-100 font-semibold text-[10px] lg:text-[14px] px-3 py-1 rounded-full"
                                        >
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* ABOUT DESKTOP VERSION */}
                            <div className="hidden md:block mt-4">
                                <h4 className="text-[10px] lg:text-[16px] font-medium mb-3">
                                    About Service
                                </h4>
                                <div className="flex gap-2">
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
                                            <p className="text-[10px] lg:text-[13px] font-medium">{item.rating} Rating</p>
                                            <p className="text-[10px] lg:text-[12px] text-gray-500">{item.reviews} Reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* ABOUT MOBILE VERSION */}
                            <div className="block md:hidden mt-4">
                                <h4 className="text-[10px]  font-medium mb-3">
                                    About Service
                                </h4>
                                <div className="flex gap-2">
                                    <div className="flex gap-2">
                                        <Clock className="w-4 h-4 text-blue-500 mt-1" />
                                        <div>
                                            <p className="text-[10px]  font-medium">{item.experience}</p>
                                            <p className="text-[10px] text-gray-500">Working Experience</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-orange-500">⭐</span>
                                        <div>
                                            <p className="text-[10px]  font-medium">{item.rating} Rating</p>
                                            <p className="text-[10px]  text-gray-500">{item.reviews} Reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* SERVICE DETAILS */}
                            {/* <div className="mt-4 grid grid-cols-2 gap-2  text-[10px] lg:text-[16px]">
                                <div className="bg-blue-50 h-[40px] flex items-center justify-center gap-2 px-3 py-2 rounded-lg">
                                    <Clock className="w-4 h-4 text-blue-500" /> {item.time}
                                </div>
                                <div className="bg-blue-50 h-[40px] flex items-center justify-center gap-2 px-3 py-2 rounded-lg">
                                    <img src="/image/OnDemandTools.png" className="w-4 h-4" />
                                     {item.tools} 
                                    All Tools Included
                                </div>
                                <div className="bg-blue-50 h-[40px] flex items-center justify-center gap-2 px-3 py-2 rounded-lg">
                                    <ShieldCheck className="w-4 h-4 text-blue-500" /> Trusted
                                </div>
                                <div className="bg-blue-50 h-[40px] flex items-center justify-center gap-2 px-3 py-2 rounded-lg">
                                    <Calendar className="w-4 h-4 text-blue-500" /> Monday
                                     {item.day} 
                                </div>
                            </div> */}
                            <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] lg:text-[16px]">
                                {item.tags.slice(0, 4).map((tag: string, index: number) => (
                                    <div
                                        key={index}
                                        className="bg-blue-50 h-[40px] flex items-center justify-center gap-2 px-3 py-2 rounded-lg"
                                    >
                                        {/* {getTagIcon(index)} */}
                                        <span>{tag}</span>
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
