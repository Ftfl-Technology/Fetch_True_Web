"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CiBookmark } from "react-icons/ci";

import { UnifiedService } from "@/app/MainModules/AI-Hub/[moduleId]/[categoryId]/page";

import { useAuth } from "@/src/context/AuthContext";
import { useFavourites } from "@/src/context/FavouriteContext";
import Link from "next/link";


interface Props {
  service: UnifiedService;
  categoryId: string;
  moduleId: string;
}


export default function ServiceCard({
  service,
  categoryId,
  moduleId
}: Props) {

  const router = useRouter();

  const {
    addFavourite,
    removeFavourite,
    isFavourite,
    fetchFavourites
  } = useFavourites();

  const { user } = useAuth();

  const userId = user?._id;


  /* ================= FETCH FAVOURITES ================= */

  useEffect(() => {

    if (userId) {

      fetchFavourites(userId);

    }

  }, [userId]);


  /* ================= TOGGLE FAVOURITE ================= */

  const handleToggleFavourite = async (serviceId: string) => {

    if (!userId) return;

    if (isFavourite(serviceId)) {

      await removeFavourite(userId, serviceId);

    } else {

      await addFavourite(userId, serviceId);

    }

  };


  return (

    <Link
      href={`/MainModules/AI-Hub/${moduleId}/${categoryId}/${service.id}`}
         
      className="
        snap-center
        w-[270px] md:w-[308px] lg:w-[408px]
        bg-[#F4F4F4]
        rounded-2xl
        p-4
        lg:ml-12
        mb-4
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
          className="w-full h-full object-cover rounded-xl"
        />


        {/* BOOKMARK BUTTON */}

        <button
          onClick={(e) => {

            e.preventDefault();
            e.stopPropagation();

            handleToggleFavourite(service.id);

          }}
          className={`
            absolute
            top-6
            right-6
            w-[24px]
            h-[24px]
            rounded-full
            flex
            items-center
            justify-center
            ${isFavourite(service.id)
              ? "bg-red-500"
              : "bg-black"
            }
          `}
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
            font-semibold
            text-black
            leading-snug
            line-clamp-2
            max-w-[65%]
            min-h-[40px]
            lg:min-h-[56px]
          "
        >

          {service.title}

        </h2>


        {/* CATEGORY TAG */}

        <span
          className="
            absolute
            top-[200px]
            lg:top-[250px]
            left-2
            bg-white
            text-[10px]
            lg:text-[12px]
            px-2
            py-1
            rounded-lg
            font-medium
          "
        >

          {service.category}

        </span>


        {/* RATING */}

        <div className="flex justify-end -mt-10">

          <div className="text-yellow-400 text-[22px] leading-none">

            {"★".repeat(Math.round(service.rating || 0))}

          </div>

        </div>


        {/* DISCOUNT */}

        <div className="flex justify-end -mt-1">

          <span
            className="
              bg-green-600
              text-white
              text-[8px]
              lg:text-[10px]
              px-2
              py-1
              rounded-lg
              font-semibold
            "
          >

            Earn Up to {service.discount}% 

          </span>

        </div>


        {/* SETUP TIME */}

        <div className="mt-6 space-y-1">

          <p
            className="
              font-semibold
              text-[10px]
              lg:text-[14px]
            "
          >

            Setup & Time

          </p>


          {

            service.keyValues.map((kv) => (

              <div
                key={kv._id}
                className="
                  flex
                  text-[10px]
                  lg:text-[14px]
                  text-gray-700
                  gap-1
                "
              >

                {

                  kv.icon && (

                    <img
                      src={kv.icon}
                      alt=""
                      className="w-[14px] h-[14px]"
                    />

                  )

                }

                <span className="font-medium mr-1">

                  {kv.key}:

                </span>

                <span className="text-gray-500">

                  {kv.value}

                </span>

              </div>

            ))

          }

        </div>

      </div>


      {/* PRICE */}

      <div className="absolute bottom-4 right-3 bg-white rounded-2xl px-3 lg:px-2 py-2 lg:py-1 text-center">
                            <p className="text-[10px] lg:text-[10px]">
                                Starting from
                            </p>

                            <div className="font-semibold text-[16px] lg:text-[20px] flex flex-col items-center">
                                <span>₹{service.price}</span>

                                {service.discount > 0 && (
                                    <div className="flex flex-row gap-2 text-center">
                                        <span className="line-through text-gray-400 text-[8px] md:text-[10px] lg:text-[12px]">
                                            ₹{service.originalPrice}
                                        </span>
                                        <span className="text-blue-400 text-[8px] md:text-[10px] lg:text-[12px]">
                                            ({service.discount}% off)
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

    </Link>

  );

}