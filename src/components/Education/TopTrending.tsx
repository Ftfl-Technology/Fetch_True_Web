

'use client';

import { Bookmark } from "lucide-react";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";
import { useTopTrending } from "@/src/context/TopTrendingContext";
import { CiBookmark } from "react-icons/ci";
import { useAuth } from "@/src/context/AuthContext";
import { useFavourites } from "@/src/context/FavouriteContext";






/*  COMPONENT  */

type SectionProps = {
    moduleId: string,
    selectedRange?: string;
    selectedCategory?: string;
    searchQuery?: string;
    contextTitle?: string;
};

interface Package {
    _id: string;
    name: string;
    price: number;
    discount: number;
    discountedPrice: number;
    whatYouGet: string[];
}


export default function TopTrending({ moduleId, searchQuery }: SectionProps) {



    const containerRef = useRef<HTMLDivElement | null>(null);
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
        services,
        loading,
        error, fetchTopTrending
    } = useTopTrending();

    useEffect(() => {
        if (!moduleId) return;

        fetchTopTrending(moduleId);
    }, [moduleId]);

    const handleToggleFavourite = async (serviceId: string) => {
        if (!userId) return;
        if (isFavourite(serviceId)) {
            await removeFavourite(userId, serviceId);
        } else {
            await addFavourite(userId, serviceId);
        }
    };

    const getStartingPackage = (packages: Package[] = []) => {
        if (!packages.length) return null;

        return packages.reduce((min, pkg) =>
            pkg.discountedPrice < min.discountedPrice ? pkg : min
        );
    };


    const filteredServices =
        services?.filter((service) => {
            if (!searchQuery?.trim()) return true;

            const q = searchQuery.toLowerCase();

            return (
                service.serviceName?.toLowerCase().includes(q) ||
                service.category?.name?.toLowerCase().includes(q)
            );
        }) || [];

    const mappedServices = filteredServices.map((service) => {
        const packages = service.serviceDetails?.packages || [];
        const startingPackage = getStartingPackage(packages);
        return ({
            id: service._id,
            title: service.serviceName,
            category: service.category?.name || "Unknown",
            image: service.thumbnailImage || "/image/placeholder.png",
            rating: service.averageRating ?? 0,
            reviews: service.totalReviews,
            price: startingPackage?.discountedPrice ?? 0,
            originalPrice: startingPackage?.price ?? 0,
            discount: startingPackage?.discount ?? 0,
            keyValues: service.keyValues?.map((item) => ({
                id: item._id,
                label: item.value,
                icon: item.icon || null
            })) || [],
            commission: service.franchiseDetails.commission

        })
    });


    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;





    return (
        <div className="w-full p-4 md:ml-15 ">
            {/* TITLE */}
            <h2 className="text-[18px] md:text-[24px] font-semibold mb-4">
                Top Trending
            </h2>

            {/* SWIPEABLE CARDS */}
            <div
                ref={containerRef}
                className="flex gap-4 md:gap-6 overflow-x-auto  snap-x snap-mandatory no-scrollbar"
            >
                {mappedServices.length > 0 ? (
                    mappedServices.map((item) => (
                        <>
                            <div
                                key={item.id}
                                onClick={() =>
                                    router.push(`/MainModules/Education/ServiceDetails/${item.id}?service=${encodeURIComponent(item.title)}`)
                                }
                                className="
                                relative snap-center flex-shrink-0
                                w-[285px] min-h-[271px]
                                sm:w-[70vw] h-[330px]
                                md:w-[331px] md:h-[392px] lg:h-[361px] lg:w-[352px]
                                overflow-hidden cursor-pointer
                                "
                            >

                                {/* CONTENT */}
                                <div className="relative z-10 md:h-[362px] lg:h-[361px] bg-[#FFFFFF] border border-gray-300 rounded-xl flex flex-col">
                                    {/* IMAGE SECTION */}
                                    <div className="relative md:h-[170px] w-full p-4 h-[156px]">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-[378px] h-[126px] object-fit
                                    rounded-xl"
                                        />
                                        <div className="">
                                            <span className="absolute top-5 left-5 bg-white text-blue-600 text-[10px] font-semibold px-3 py-1 rounded-lg flex items-start gap-1">
                                                <img src="/image/security.png" alt="security" width={14} height={14} />
                                                Trusted
                                            </span>

                                            {/* Bookmark */}
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    handleToggleFavourite(item.id);
                                                }}
                                                className={`absolute top-6 right-6 w-[24px] h-[24px] rounded-full flex items-center justify-center
                                                                                                                            ${isFavourite(item.id) ? "bg-red-500" : "bg-black"}`}
                                            >
                                                <CiBookmark size={14} color="#fff" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* CONTENT SECTION */}
                                    {/* <div className="relative p-2 lg:-mt-4 -mt-2 text-black flex-1"> */}
                                    <div className="relative p-2 lg:-mt-4 md:-mt-8 -mt-4 text-black flex flex-col h-full">


                                        <div className="flex items-center justify-between mb-2 md:mb-6">
                                            <span className="inline-block font-semibold text-[12px] md:text-[16px] px-3 py-1 md:mt-2 mt-0 lg:mt-0
                                         leading-snug
                        line-clamp-2 max-w-[65%]
                        min-h-[40px] lg:min-h-[40px]">
                                                {item.title}
                                            </span>

                                            <span className="text-[8px] md:text-[10px] text-white lg:mr-2 mr-2 px-1 py-1 bg-[#548AFE] rounded-lg whitespace-nowrap shrink-0">
                                                {/* {item?.earn} */}
                                                Earn upto {item.commission}
                                            </span>
                                        </div>

                                        <div className="flex items-center lg:-mt-2 mb-2 gap-2">
                                            <div className="inline-flex items-center gap-2 text-[9px] bg-[#F4F4F4] rounded-xl md:text-[12px] px-3 py-1 whitespace-nowrap shrink-0">
                                                {item.category}
                                            </div>

                                            <span className="inline-flex items-center gap-2 text-[9px] bg-[#F4F4F4] rounded-xl md:text-[12px] px-3 py-1 whitespace-nowrap shrink-0">

                                                <div className="w-[7px] h-[7px] rounded-full bg-green-500" />Online mode
                                            </span>
                                        </div>


                                        <div className="flex items-center mb-2">
                                            <div className="inline-flex items-center gap-4 text-[9px] md:text-[12px] px-3 py-1 -ml-2 whitespace-nowrap shrink-0">
                                                {item.keyValues.map((kv, index) => (
                                                    <span
                                                        key={index}
                                                        className="flex items-center gap-1 text-[11px] text-gray-700"
                                                    >
                                                        {kv.icon && (
                                                            <img
                                                                src={kv.icon}
                                                                alt={kv.label || "icon"}
                                                                className="w-3 h-3 object-contain inline-block"
                                                            />
                                                        )}
                                                        {kv.label}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>


                                        <div className="space-y-1">
                                            <div>
                                                <div className="flex items-center text-yellow-400 text-[20px] mt-4 md:text-[25px] gap-1 md:ml-2 ml-2 lg:ml-1 leading-none">
                                                    {/* {"★".repeat(item.rating)}
                                                {"☆".repeat(5 - item.rating)} */}
                                                    {/* <div className="flex items-center gap-1 mt-4 md:ml-2 lg:ml-2"> */}
                                                    {(() => {
                                                        const rating = Math.max(0, Math.min(5, item.rating));
                                                        const rounded = Math.round(rating * 2) / 2;
                                                        const fullStars = Math.floor(rounded);
                                                        const hasHalfStar = rounded % 1 !== 0;
                                                        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

                                                        return (
                                                            <div className="flex items-center gap-0 text-[20px] md:text-[25px] leading-none">
                                                                {/* Full stars */}
                                                                {[...Array(fullStars)].map((_, i) => (
                                                                    <span key={`full-${i}`} className="text-yellow-400">
                                                                        ★
                                                                    </span>
                                                                ))}

                                                                {/* Half star */}
                                                                {hasHalfStar && (
                                                                    <span className="relative inline-block w-[1em]">
                                                                        <span className="absolute overflow-hidden w-1/2 text-yellow-400">
                                                                            ★
                                                                        </span>
                                                                        <span className="text-gray-300">★</span>
                                                                    </span>
                                                                )}

                                                                {/* Empty stars */}
                                                                {[...Array(emptyStars)].map((_, i) => (
                                                                    <span key={`empty-${i}`} className="text-gray-300">
                                                                        ★
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        );
                                                    })()}

                                                    {/* </div> */}


                                                </div>
                                                <div className="lg:text-[10px] md:text-[10px] text-[9px] flex items-center gap-1 text-gray-700 md:ml-2 ml-2 lg:ml-2">
                                                    <User className="inline-block w-[12px] h-[12px] flex-shrink-0" />{item.reviews} {item.reviews <= 1 ? 'review' : 'reviews'}
                                                </div>
                                            </div>
                                        </div>

                                        {/* PRICE */}
                                        {/* <div
                                        className="
                                            absolute lg:bottom-4 right-4 md:bottom-1 bottom-1
                                            bg-white text-black font-semibold
                                            text-[12.71px] md:text-[15px] lg:text-[20px] 
                                            lg:px-4 lg:py-1 md:px-4 md:py-2
                                            rounded-2xl shadow-md px-2 py-2
                                            flex flex-col items-center
                                            max-w-[85%]
                                            truncate 
                                            whitespace-nowrap
                                        "
                                    >
                                        <span className="lg:text-[10px] md:text-[10px] text-gray-500 ">Starting from</span>
                                        ₹ {item.price}
                                    </div> */}
                                        <div className="absolute bottom-0 right-3 bg-[#F7F7F7] rounded-2xl mb-1 px-3 lg:px-2 py-1 lg:py-1 text-center">
                                            <p className="text-[10px] lg:text-[10px]">
                                                Starting from
                                            </p>

                                            <div className="font-semibold text-[16px] lg:text-[20px] flex flex-col items-center">
                                                <span>₹{item.price}</span>

                                                {item.discount > 0 && (
                                                    <div className="flex flex-row gap-2 text-center">
                                                        <span className="line-through text-gray-400 text-[8px] md:text-[10px] lg:text-[12px]">
                                                            ₹{item.originalPrice}
                                                        </span>
                                                        <span className="text-blue-400 text-[8px] md:text-[10px] lg:text-[12px]">
                                                            ({item.discount}% off)
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SPACER AT THE END - outside the cards */}
                            <div className="flex-shrink-0 w-2 md:w-2" aria-hidden="true" />
                        </>
                    ))
                ) : (
                    <div className="w-full bg-gray-500 flex items-center justify-center">
                        <div className="bg-white rounded-2xl p-6 text-center w-full">
                            <p className="text-lg font-semibold text-gray-800">
                                No Services Found
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                Try another price range
                            </p>
                        </div>
                    </div>

                )}

                {/* MOBILE SPACER */}
                <div className="md:hidden min-w-4" />
            </div >
        </div>
    );

}
