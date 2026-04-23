"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";

import ServiceCard from "@/src/components/ITModulesSubCategories/ServiceCard";
import { useCategorywiseServices } from "@/src/context/CategorywiseServiceContext";


type keyValuesItem = {
  value: string;
  icon?: string;
  _id: string;
}[];


export type UnifiedService = {
  id: string;
  title: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  discount: number;
  keyValues: keyValuesItem;
};


export default function SubCategoryPage() {

  const params = useParams();
  const searchParams = useSearchParams();

  const moduleId = params.moduleId as string;
  const categoryId = params.categoryId as string;

  const categoryName = searchParams.get("categoryName");


  /* ================= CONTEXT ================= */

  const {
    services,
    loading,
    fetchServicesByCategory
  } = useCategorywiseServices();


  /* ================= SEARCH STATE ================= */

  const [searchQuery, setSearchQuery] = useState("");


  /* ================= FETCH SERVICES ================= */

  useEffect(() => {

    if (!categoryId) return;

    fetchServicesByCategory(categoryId);

  }, [categoryId]);


  /* ================= MAP SERVICES ================= */

  const mappedServices: UnifiedService[] = services.map(service => {

    const packages = service.serviceDetails?.packages ?? [];

    const cheapest =
      packages.length > 0
        ? packages.reduce((min, p) =>
          p.discountedPrice < min.discountedPrice ? p : min
        )
        : null;

    return {
      id: service._id,
      title: service.serviceName,
      category: service.category?.name ?? "Unknown",
      image: service.thumbnailImage ?? "",
      rating: service.averageRating ?? 0,
      reviews: service.totalReviews ?? 0,
      price: cheapest?.discountedPrice ?? service.discountedPrice ?? 0,
      originalPrice: cheapest?.price ?? service.price ?? 0,
      discount: cheapest?.discount ?? service.discount ?? 0,
      keyValues: service.keyValues ?? []
    };

  });


  /* ================= SEARCH FILTER ================= */

  const filteredServices = mappedServices.filter(service =>
    service.title.toLowerCase().includes(
      searchQuery.toLowerCase()
    )
  );


  /* ================= UI ================= */

  return (

    <>

      {/* ================= HEADER ================= */}

      <section className="relative w-full">

        <div className="hidden lg:block w-full px-4 md:px-8 mt-10">

          <div className="bg-[#E2E9F1] flex items-center justify-between p-4 rounded-xl">

            <div className="flex items-center gap-4">

              <Link href={`/MainModules/It-Services/${moduleId}`}>

                <img
                  src="/image/Vector (1).png"
                  className="w-[23px] h-[20px]"
                />

              </Link>

              <h1 className="text-2xl font-semibold">
                {categoryName}
              </h1>

            </div>


            {/* SEARCH BAR */}

            <div className="relative w-[260px] lg:w-[307px]">

              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                className="
                  w-full
                  rounded-full
                  bg-white
                  border
                  border-gray-300
                  px-10
                  py-2
                  text-sm
                  outline-none
                  focus:border-blue-500
                "
              />

              <span className="absolute left-3 top-1/2 -translate-y-1/2">

                <img
                  src="/image/itsearch.png"
                  className="w-[18px]"
                />

              </span>

            </div>

          </div>

        </div>


        {/* ================= MOBILE HEADER ================= */}

        <div
          className="
          block lg:hidden
          w-full
          bg-[#E2E9F1]
          flex flex-col
          px-4 py-8
          gap-3
        "
        >

          <div className="flex items-center gap-3">

            <Link href={`/MainModules/It-Services/${moduleId}`}>

              <ChevronLeft
                className="
                w-[28px]
                h-[28px]
                bg-white
                rounded-full
                p-1
              "
              />

            </Link>

            <h1 className="text-[16px] font-semibold">

              {categoryName}

            </h1>

          </div>


          {/* MOBILE SEARCH */}

          <div className="relative w-full">

            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              className="
                w-full
                rounded-full
                bg-white
                border
                border-gray-300
                px-10
                py-2
                text-sm
              "
            />

            <span className="absolute left-4 top-1/2 -translate-y-1/2">

              <img
                src="/image/itsearch.png"
                className="w-[18px]"
              />

            </span>

          </div>

        </div>

      </section>


      {/* ================= SERVICES GRID ================= */}

      <section className="px-6 mt-10">

        {

          loading ? (

            <div className="text-center py-24 text-gray-500 text-lg">

              Loading services...

            </div>

          ) :

          filteredServices.length === 0 ? (

            <div className="flex justify-center py-24">

              <div
                className="
                w-[320px]
                h-[220px]
                rounded-xl
                border
                border-dashed
                flex
                items-center
                justify-center
                text-gray-400
              "
              >

                🚫 Service not available

              </div>

            </div>

          ) :

          (

            <div
              className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-2
              lg:grid-cols-4
              gap-4
            "
            >

              {

                filteredServices.map(service => (

                  <ServiceCard
                    key={service.id}
                    service={service}
                  />

                ))

              }

            </div>

          )

        }

      </section>

    </>

  );

}