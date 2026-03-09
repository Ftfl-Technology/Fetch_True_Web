'use client';

import { Bookmark, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { UnifiedService } from "@/app/MainModules/Education/[moduleId]/[categoryId]/page";
import { useEffect } from "react";
import { useAuth } from "@/src/context/AuthContext";
import { useFavourites } from "@/src/context/FavouriteContext";
import { CiBookmark } from "react-icons/ci";

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
    <>
      <div className="w-full p-4 ">
        <div
          onClick={() =>
            router.push(
              `/MainModules/Education/ServiceDetails/${service.id}?service=${encodeURIComponent(service.title)}`
            )
          }
          className="
                                relative snap-center flex-shrink-0 bg-white
                                border border-gray-200 rounded-xl
                                w-[285px] min-h-[275px] cursor-pointer
                                sm:w-[70vw] h-[351px] lg:ml-12 -ml-5
                                md:w-[300px] md:h-[352px] lg:h-[361px] lg:w-[352px]
                                overflow-hidden 
                                "
        >
          {/*  IMAGE SECTION  */}
          <div className="relative h-[160px] p-3">
            <img
              src={service.image || "/image/placeholder.png"}
              alt={service.title}
              className="w-full h-full object-cover rounded-xl"
            />

            {/* Trusted */}
            <span className="absolute top-5 left-5 bg-white text-blue-600 text-[10px] font-semibold px-3 py-1 rounded-lg flex items-center gap-1">
              <img src="/image/security.png" alt="security" width={14} height={14} />
              Trusted
            </span>

            {/* Discount */}
            {/* {service.discount > 0 && (
              <span className="absolute top-5 right-14 bg-white text-black text-[10px] font-semibold px-2 py-1 rounded-lg">
                Discount {service.discount}%

              </span>
            )} */}

            {/* Bookmark */}
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

          {/* ================= CONTENT ================= */}
          <div className="relative p-3 flex flex-col flex-1">
            {/* TITLE + EARN */}
            <div className="flex justify-between gap-2 mb-2 -mt-4">
              <h3 className="font-semibold text-[14px] lg:text-[16px] line-clamp-2 min-h-[40px]">
                {service.title}
              </h3>

              <span className="text-[10px] lg:text-[10px] text-white px-2 py-1 bg-[#548AFE] rounded-lg h-fit whitespace-nowrap">
                Earn upto 5%
              </span>
            </div>

            {/* TAGS */}
            <div className="flex gap-2 mb-2 flex-wrap">
              <span className="text-[10px] lg:text-[12px] bg-[#F4F4F4] rounded-xl px-3 py-1">
                {service.category}
              </span>

              <span className="text-[10px] lg:text-[12px] bg-[#F4F4F4] rounded-xl px-3 py-1 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Online
              </span>
            </div>

            <div className="flex items-center mb-2">
              <div className="inline-flex items-center gap-6 text-[9px] md:text-[12px] px-1 py-1 whitespace-nowrap shrink-0">
                {service.keyValues.map((kv, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1"
                  >
                    {kv.icon && (
                      <img src={kv.icon} alt="icon" className="w-[16px] h-[16px] object-cover flex-shrink-0" />
                    )}
                    <span className="text-[11px] text-gray-700 leading-snug"> {kv.value}</span>
                  </div>
                ))}

              </div>


            </div>

            {/* RATING */}

            <div className="space-y-1">
              <div>
                <div className="flex items-center text-yellow-400 text-[20px] mt-4 md:text-[25px] gap-1 ml-2 md:ml-2 lg:ml-1 leading-none">
                  {/* {"★".repeat(item.rating)}
                                                {"☆".repeat(5 - item.rating)} */}
                  {/* <div className="flex items-center gap-1 mt-4 md:ml-2 lg:ml-2"> */}
                  {(() => {
                    const rating = Math.max(0, Math.min(5, service.rating));
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
                <div className="lg:text-[10px] md:text-[10px] text-[9px] flex items-center gap-1  text-gray-700 md:ml-2 ml-2 lg:ml-2">
                  <User className="inline-block w-[12px] h-[12px] flex-shrink-0" />{service.reviews} {service.reviews <= 1 ? 'review' : 'reviews'}
                </div>
              </div>
            </div>

            {/* PRICE */}
            <div className="absolute -bottom-2 right-3 bg-[#F7F7F7] rounded-2xl px-3 py-2 text-center">
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
    </>
  );
}
