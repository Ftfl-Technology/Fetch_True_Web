'use client';

import { Bookmark } from "lucide-react";
import { useRouter } from "next/navigation";
import { UnifiedService } from "@/app/MainModules/AI-Hub/[moduleId]/[categoryId]/page";
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
    <div
      onClick={() =>
        router.push(
          `/MainModules/Education/ServiceDetails/${service.id}?service=${encodeURIComponent(
            service.title
          )}`
        )
      }
      className="
        snap-center
        w-[270px] md:w-[308px] lg:w-[408px]
        bg-[#F4F4F4]
        rounded-2xl ml-0
        p-4 lg:ml-12 mb-4
        flex-shrink-0
        overflow-hidden
        relative
        cursor-pointer
      "
    >
      {/* IMAGE */}
      <div className="relative w-full h-[132px] lg:h-[183px] rounded-xl overflow-hidden">
        <img
          src={service.image || "/image/placeholder.png"}
          alt={service.title}
          className="w-full h-full object-fit rounded-xl"
        />

        {/* <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full"
        >
          <Bookmark size={18} className="text-white" />
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

      {/* CONTENT */}
      <div className="mt-3 space-y-2">
        {/* TITLE */}
        <h2
          className="
            text-[14px] lg:text-[20px]
            font-semibold text-black
            leading-snug
            line-clamp-2
            max-w-[65%]
            min-h-[40px] lg:min-h-[56px]
          "
        >
          {service.title}
        </h2>

        {/* CATEGORY */}
        {/* <span className="inline-flex mb-5 -mt-25 text-[10px] lg:text-[12px] bg-white px-2 py-1 rounded-lg">
          {service.category}
        </span> */}
        <span className="absolute top-50 lg:top-62 left-2 bg-white text-[10px] lg:text-[12px] px-2 py-1 rounded-lg font-medium">
          {service.category}
        </span>


        {/* RATING */}
        <div className="flex justify-end -mt-10">
          <div className="text-yellow-400 text-[22px] leading-none">
            {"★".repeat(Math.round(service.rating))}
          </div>
        </div>

        {/* EARN */}
        <div className="flex justify-end -mt-1">
          <span className="bg-green-600 text-white text-[8px] lg:text-[10px] px-2 py-1 rounded-lg font-semibold">
            Earn Up to {service.discount} %
          </span>
        </div>

        {/* SETUP & TIME */}
        <div className="mt-6 -ml-2 md:-ml-0 space-y-1">
          <p className="font-semibold text-[10px] lg:text-[14px]">
            Setup & Time
          </p>

          {service.keyValues.map((kv, index) => (
            <div
              key={index}
              className="flex text-[10px] lg:text-[14px] text-gray-700 leading-snug gap-1"
            >
              {kv.icon && (
                <img
                  src={kv.icon}
                  alt=""
                  className="w-[14px] h-[14px] items-center"
                />
              )}
              <span className="font-medium mr-1">{kv.key}:</span>
              <span className="text-gray-500">{kv.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="absolute bottom-4 right-3 bg-white rounded-2xl px-3 py-2 text-center">
        <p className="text-[10px] text-gray-500">Starting from</p>

        <div className="font-semibold text-[16px] lg:text-[20px]">
          ₹{service.price}
        </div>

        {service.discount > 0 && (
          <div className="flex gap-2 justify-center text-[8px] lg:text-[12px]">
            <span className="line-through text-gray-400">
              ₹{service.originalPrice}
            </span>
            <span className="text-blue-400">
              ({service.discount}% off)
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
