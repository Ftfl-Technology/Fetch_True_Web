'use client';

import { Bookmark, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { UnifiedService } from "@/app/MainModules/Education/[moduleId]/[categoryId]/page";
import { useEffect } from "react";
import { useAuth } from "@/src/context/AuthContext";
import { useFavourites } from "@/src/context/FavouriteContext";
import { CiBookmark } from "react-icons/ci";

/* ---------- SVG BACKGROUND ---------- */
const CardBg = () => (
    <svg
        viewBox="0 0 300 200"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
    >
        <path
            d="
        M 20 0
        H 280
        L 300 0
        V 70
        Q 350 230 220 200
        H 0
        V 30
        Q 0 0 20 0
        Z
      "
            fill="#E2E9F1"
        />
    </svg>
);

export default function ServiceCard({ service }: { service: UnifiedService }) {
    const router = useRouter();
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
        <div
            onClick={() =>
                router.push(
                    `/MainModules/Education/ServiceDetails/${service.id}?service=${encodeURIComponent(
                        service.title
                    )}`
                )
            }
            className="
        relative snap-center flex-shrink-0
        w-[290px] h-[355px] ml-6
        md:w-[331px] md:h-[355px]
        cursor-pointer overflow-hidden mb-4
      "
        >
            {/* SVG BACKGROUND */}
            <CardBg />

            {/* CARD CONTENT */}
            <div className="relative z-10 h-full flex flex-col">
                {/* IMAGE */}
                <div className="relative h-[160px] p-4">
                    <img
                        src={service.image || "/image/placeholder.png"}
                        alt={service.title}
                        className="
              w-full h-full object-cover
              rounded-tl-lg rounded-br-lg
            "
                    />

                    {/* DISCOUNT */}
                    {/* {service.discount > 0 && (
                        <span className="absolute top-6 right-6 bg-green-400 text-black text-[10px] font-semibold px-2 py-1 rounded-lg">
                            {service.discount}% OFF
                        </span>
                    )} */}

                    {/* BOOKMARK */}
                    {/* <button
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-5 right-5 bg-black/70 p-2 rounded-full"
                    >
                        <Bookmark size={16} className="text-white" />
                    </button> */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleToggleFavourite(service.id);
                        }}
                        className={`absolute top-6 right-6 w-[24px] h-[24px] rounded-full flex items-center justify-center
                                                                                                    ${isFavourite(service.id) ? "bg-red-500" : "bg-black"}`}
                    >
                        <CiBookmark size={14} color="#fff" />
                    </button>
                </div>

                {/* DETAILS */}
                <div className="flex-1 px-3 pt-1 pb-4 relative">
                    {/* TITLE */}
                    <h3 className="text-[14px] lg:text-[16px] font-semibold truncate">
                        {service.title}
                    </h3>

                    {/* CATEGORY + EARN */}
                    <div className="flex items-center justify-between mt-2">
                        <span className="bg-white text-[10px] lg:text-[12px] px-3 py-1 rounded-full">
                            {service.category}
                        </span>

                        <span className="text-[10px] text-white bg-green-400 px-2 py-1 rounded-md">
                            Earn upto 5%
                        </span>
                    </div>

                    {/* KEY VALUES */}
                    <div className="flex flex-wrap gap-2 mt-3 text-[10px] lg:text-[12px] text-gray-700">
                        {service.keyValues.map((kv, i) => (
                            <div key={i} className="flex items-center gap-1">
                                {kv.icon && (
                                    <img
                                        src={kv.icon}
                                        alt=""
                                        className="w-[14px] h-[14px]"
                                    />
                                )}
                                <span>{kv.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* RATING */}
                    <div className="mt-6">
                        <div className="flex items-center text-yellow-400 text-[20px] leading-none">
                            {(() => {
                                const rating = Math.max(0, Math.min(5, service.rating));
                                const rounded = Math.round(rating * 2) / 2;
                                const full = Math.floor(rounded);
                                const half = rounded % 1 !== 0;
                                const empty = 5 - full - (half ? 1 : 0);

                                return (
                                    <>
                                        {[...Array(full)].map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                        {half && (
                                            <span className="relative w-[1em]">
                                                <span className="absolute w-1/2 overflow-hidden">★</span>
                                                <span className="text-gray-300">★</span>
                                            </span>
                                        )}
                                        {[...Array(empty)].map((_, i) => (
                                            <span key={i} className="text-gray-300">★</span>
                                        ))}
                                    </>
                                );
                            })()}
                        </div>

                        <div className="text-[10px] text-gray-700 flex items-center gap-1 mt-1">
                            <User size={12} /> {service.reviews} Reviews
                        </div>
                    </div>

                    {/* PRICE */}
                    <div className="absolute bottom-4 right-3 bg-[#F7F7F7] rounded-2xl px-3 py-2 text-center">
                        <p className="text-[10px] text-gray-500">Starting from</p>

                        <div className="font-semibold text-[20px] lg:text-[20px]">
                            ₹{service.price}
                        </div>

                        {service.discount > 0 && (
                            <div className="flex gap-1 justify-center text-[10px]">
                                <span className="line-through text-gray-400">
                                    ₹{service.originalPrice}
                                </span>
                                <span className="text-blue-500">
                                    ({service.discount}% off)
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
