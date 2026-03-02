"use client";

import { useTopTrending } from "@/src/context/TopTrendingContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import HorizontalScroll from "../ui/HorizontalScroll";

export default function LowInvestmentFranchises({moduleId,searchQuery}:{moduleId:string,searchQuery:string}) {

  const { services,loading,fetchTopTrending } = useTopTrending();

 const filteredServices =
  services?.filter((service) => {
    if (!searchQuery?.trim()) return true;

    const q = searchQuery.toLowerCase();

    return (
      service.serviceName?.toLowerCase().includes(q) ||
      service.category?.name?.toLowerCase().includes(q)
    );
  }) || [];
 

  useEffect(()=>{
        if(moduleId) {
          fetchTopTrending(moduleId)
        }
      },[moduleId])

      console.log("franchise TopTrending ModuleId :",moduleId)
  
       const { categoryId } = useParams<{
                  moduleId: string;
                  categoryId: string;
                }>();
    
      if(loading) return null;
         if (!filteredServices.length) {
  return (
    <p className="text-center py-10 text-gray-500">
      No matching recommended services
    </p>
  );
}

  return (
    <section className="max-w-[1440px] mx-auto py-6 md:py-14 bg-white">
      {/* ---------- HEADING ---------- */}
      <div className="text-center mb-8 md:mb-12 px-4">
        <h2 className="text-[20px] sm:text-[22px] md:text-[32px] font-semibold">
           Top Trending 10 Best Franchises 
        </h2>
        <p className="text-gray-500 text-[13px] sm:text-[14px] md:text-[18px] mt-2">
          Here are our Top Trending Franchise for You
        </p>
      </div>

      {/* ---------- CARDS ---------- */}
      <div className=" mx-auto gap-8 px-4 ">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth  px-1">
<HorizontalScroll>
       {filteredServices.map((service) => {

  // ✅ keyValues se Profit Margin
  const profitMargin = service.keyValues?.find(
    (item) => item.key.toLowerCase().includes("profit")
  );
  

  // ✅ keyValues se Total Outlet
  const totalOutlet = service.keyValues?.find(
    (item) => item.key.toLowerCase().includes("total outlet")
  );

  // ✅ franchiseDetails se Investment Range
  const investmentRange =
    service.franchiseDetails?.investmentRange?.[0];

   const monthlyEarning =
    service.franchiseDetails?.monthlyEarnPotential?.[0];

          return(
          <Link  href={`/MainModules/Franchise/${moduleId}/${categoryId}/${service._id}`}
            key={service._id}
            className=" bg-white
  min-w-[280px] sm:min-w-[320px] md:w-[353px]
  h-[320px]
  rounded-[20px]
  shadow-md
  overflow-hidden
  border"
          >

            {/* IMAGE */}
            <div className="relative h-[160px] sm:h-[170px] md:h-[180px]">
              <img
                src={service.thumbnailImage}
                alt={service.serviceName}
                className="w-full h-full object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* LOGO */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#FFE8E8]
  w-[60px] h-[54px] sm:w-[70px] sm:h-[64px] md:w-[82px] md:h-[76px]
  rounded-xl flex items-center justify-center">
                <img src="/image/pizzahut.png" className="w-[60px]" />
              </div>

              {/* TITLE */}
              <div className="absolute top-4 left-4 text-white">
                <h3 className="font-semibold text-[16px] md:text-[18px]">
                  {service.serviceName}
                </h3>
                <p className="text-[12px] md:text-[13px]">
                  {service.category.name}
                </p>

                {/* RATING */}
                <div className="flex gap-1 mt-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={18} 
                       className={
                            i < Math.round(service.averageRating)
                              ? "opacity-100"
                              : "opacity-30"
                          }
                    />
                  ))}
                </div>
              </div>

              {/* BADGES */}
              <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                {/* <span className="bg-green-100 text-green-700 text-[11px] px-3 py-1 rounded-full">
                  Discount {
                  service.franchiseDetails?.franchiseModel?.[0]?.discount
                    ? `${service.franchiseDetails.franchiseModel[0].discount}%`
                    : "0%"
                }
                </span> */}
                <span className="bg-blue-100 text-blue-700 text-[11px] px-3 py-1 rounded-full">
                  Earn Up to {service.franchiseDetails.commission || "N/A"}
                </span>
              </div>
            </div>

            {/* DETAILS */}
            <div className="px-4 pt-4">
              {/* <p className="text-[13px] text-[#746969] ">
                Details
              </p> */}

              {/* LOCATION + REVENUE */}
              

                <div className="items-center justify-end flex">
                  <p className="text-[#746969] text-[12px]">
                    Monthly Earning :-
                  </p>
                  <p className="font-semibold text-[13px] md:text-[14px]">
                     {monthlyEarning
        ? `${monthlyEarning.range} ${monthlyEarning.parameters}`
        : "--"}
                  </p>
              </div>

              {/* BOTTOM STATS */}
              {/* <div className="grid grid-cols-3 text-center gap-3">
                <div>
                  <p className="font-semibold text-[12px]">70%</p>
                  <p className="text-[10px] text-gray-500">
                    Profit Margin
                  </p>
                </div>

                <div className="border-x">
                  <p className="font-semibold text-[12px]">
                    10L – 20L
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Investment Range
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[12px]">100</p>
                  <p className="text-[10px] text-gray-500">
                    Total Outlet
                  </p>
                </div>
              </div> */}
              <div className="grid grid-cols-3 text-center gap-3 mt-5">

  {/* PROFIT MARGIN – keyValues */}
  <div>
    <p className="font-semibold text-[12px]">
      {profitMargin?.value ?? "--"}
    </p>
    <p className="text-[10px] text-gray-500">
      Profit Margin
    </p>
  </div>

  {/* INVESTMENT RANGE – franchiseDetails */}
  <div className="border-x">
    <p className="font-semibold text-[12px]">
      {investmentRange
        ? `${investmentRange.range} ${investmentRange.parameters}`
        : "--"}
    </p>
    <p className="text-[10px] text-gray-500">
      Investment Range
    </p>
  </div>

  {/* TOTAL OUTLET – keyValues */}
  <div>
    <p className="font-semibold text-[12px]">
      {totalOutlet?.value ?? "--"}
    </p>
    <p className="text-[10px] text-gray-500">
      Total Outlet
    </p>
  </div>

</div>



            </div>
          </Link>
          ) 
})}
</HorizontalScroll>
        </div>
      </div>
    </section>
  );
}
