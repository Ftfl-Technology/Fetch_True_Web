"use client";


import { Bookmark, Clock, Wrench } from "lucide-react";
import Image from "next/image";
import type { SubscribedService } from "@/src/context/OnDemandSubscriberContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTopRatedProviders } from "@/src/context/HomeTopRatedProvider";
import { useEffect } from "react";
import { useAuth } from "@/src/context/AuthContext";
import { useFavourites } from "@/src/context/FavouriteContext";
import { CiBookmark } from "react-icons/ci";


interface ServiceCardProps {
    providerId: string;
    services: SubscribedService[];
    earnUpto?: string;

}

export default function ServiceCard({
    services = [],
}: ServiceCardProps) {
    const { addFavourite, removeFavourite, isFavourite, fetchFavourites } = useFavourites();
    const { user } = useAuth();

    const userId = user?._id;

    useEffect(() => {
        if (userId) {
            fetchFavourites(userId);
        }
    }, [userId]);

    const handleToggleFavourite = async (serviceId: string) => {
        if (!userId) return;
        if (isFavourite(serviceId)) {
            await removeFavourite(userId, serviceId);
        } else {
            await addFavourite(userId, serviceId);
        }
    };

    return (
        <div className="w-[280px] md:w-[700px] lg:w-[1200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {services.map((item, index) => (
                    <div key={index}
                        className="bg-white rounded-2xl  border border-gray-200 p-3 shadow-sm"
                    >
                        {/* Image */}
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src={item.thumbnailImage}
                                alt={item.serviceName}
                                width={500}
                                height={300}
                                className="w-full h-[220px] object-fit"
                            />


                            {/* Discount */}

                            {/* <span className="absolute top-2 left-2 bg-[#EDFBEF] text-xs px-2 py-1 rounded-full shadow">
                                Discount {item.discount}%
                            </span> */}


                            {/* Available */}
                            <span className="absolute top-2 right-10 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                Available
                            </span>


                            {/* Bookmark */}
                            {/* <button className="absolute top-2 right-2 bg-black/60 text-white p-1.5 rounded-full">
                                <Bookmark size={14} />
                            </button> */}
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleToggleFavourite(item._id);
                                }}
                                className={`absolute top-2 right-2 w-[24px] h-[24px] rounded-full flex items-center justify-center
                                                                                                            ${isFavourite(item._id) ? "bg-red-500" : "bg-black"}`}
                            >
                                <CiBookmark size={14} color="#fff" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="mt-3 space-y-2">
                            <div className="flex justify-between items-start">
                                <h3 className="text-lg font-semibold">{item.serviceName}</h3>
                                {item.franchiseDetails.commission && (
                                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                                        Earn upto {item.franchiseDetails.commission}
                                    </span>
                                )}
                            </div>

                            <div className="flex justify-between items-center">
                                {/* <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">{item.tags.map((tag, index) => (
                                    <div key={index}>
                                        <p className="text-[10px] md:text-[12px] lg:text-[14px]">{tag}</p>
                                    </div>

                                ))}</span> */}
                                <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                                    <div >
                                        <p className="text-[10px] md:text-[12px] lg:text-[14px]">{item.category.name}</p>
                                    </div>

                                </span>
                                <div className="flex">
                                    {(() => {
                                        const rating = Math.max(0, Math.min(5, item.averageRating));
                                        const rounded = Math.round(rating * 2) / 2;
                                        const fullStars = Math.floor(rounded);
                                        const hasHalfStar = rounded % 1 !== 0;
                                        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

                                        return (
                                            <div className="flex items-center gap-0 -mt-4 text-[20px] md:text-[25px] leading-none">
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
                                </div>
                            </div>


                            <div className="grid grid-cols-3 gap-2 lg:text-[16px] text-gray-600 mt-4">
                                {/* Column 1 */}
                                <div className="flex flex-col items-center">
                                    {item?.keyValues?.[0] ? (
                                        <>
                                            <div className="flex flex-row gap-2 items-center">
                                                <Wrench size={14} />
                                                <span className="text-[12px] lg:text-[14px]">All Tools</span>
                                            </div>
                                            <span className="font-medium text-[12px] text-black">{item?.keyValues?.[0]?.value}</span>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex flex-row gap-2 items-center">
                                                <Wrench size={14} />
                                                <span className="text-[12px] lg:text-[14px]">All Tools</span>
                                            </div>
                                            <span className="font-medium text-[12px] text-black">Included</span>
                                        </>
                                    )}
                                </div>

                                {/* Column 2 */}
                                <div className="flex flex-col items-center">
                                    {item?.keyValues?.[1] ? (
                                        <>
                                            <div className="flex flex-row gap-2 items-center">
                                                <Clock size={14} />
                                                <span className="text-[12px] lg:text-[14px] whitespace-nowrap">Arrival Time</span>
                                            </div>
                                            <span className="font-medium whitespace-nowrap text-[12px] text-black">{item.keyValues[1].value}</span>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex flex-row gap-2 items-center">
                                                <Clock size={14} />
                                                <span className="text-[12px] lg:text-[14px]">Arrival Time</span>
                                            </div>
                                            <span className="font-medium text-[12px] text-black">30-45 Min</span>
                                        </>
                                    )}
                                </div>

                                {/* Column 3 */}
                                <div className="flex flex-col items-center">
                                    {item?.keyValues?.[2] ? (
                                        <>
                                            <div className="flex flex-row gap-2 items-center">
                                                <Clock size={14} />
                                                <span className="text-[12px] lg:text-[14px]">Duration</span>
                                            </div>
                                            <span className="font-medium text-[12px] text-black">{item.keyValues[2].value}</span>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex flex-row gap-2 items-center">
                                                <Clock size={14} />
                                                <span className="text-[12px] lg:text-[14px]">Duration</span>
                                            </div>
                                            <span className="font-medium text-[12px] text-black">9-11 PM</span>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Price Button */}
                            <Link href={`/MainModules/On-Demand/servicedetails/${item._id}?service=${encodeURIComponent(item.serviceName)}`}>
                                <button className="mt-3 w-full bg-orange-400 hover:bg-orange-350 cursor-pointer text-white py-3 rounded-xl font-semibold transition">
                                    Starting From ₹{item.serviceDetails?.packages?.[0]?.discountedPrice || 'N/A'}
                                    <span className="ml-4 line-through">₹{item.serviceDetails?.packages?.[0]?.price || 'N/A'}</span>
                                    <span className="ml-2 text-red-500">{item.serviceDetails?.packages?.[0]?.discount || 'N/A'}% OFF</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

