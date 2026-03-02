

"use client";

import { useTopTrending } from "@/src/context/TopTrendingContext";
import ServiceCard from "../ui/ServiceCard";
import { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import HorizontalScroll from "../ui/HorizontalScroll";



export default function TopTrending({moduleId,searchQuery}:{moduleId:string,searchQuery:string}) {
   const { services,loading,error,fetchTopTrending } = useTopTrending();
    
    useEffect(()=>{
      if(moduleId) {
        fetchTopTrending(moduleId)
      }
    },[moduleId])

     const { categoryId } = useParams<{
                moduleId: string;
                categoryId: string;
              }>();

           const filteredServices =
  services?.filter((service) => {
    if (!searchQuery?.trim()) return true;

    const q = searchQuery.toLowerCase();

    return (
      service.serviceName?.toLowerCase().includes(q) ||
      service.category?.name?.toLowerCase().includes(q)
    );
  }) || [];          
  
    if(loading) return null;
    if (error) return null;
  return (
    <section
          className="
            w-full
            mx-auto
            px-4 sm:px-6 lg:px-15
            flex flex-col
            gap-4 sm:gap-6
            mb-8 sm:mb-10
          "
        >
          {/* Title */}
          <h2 className="font-inter font-semibold text-[18px] sm:text-[22px] lg:text-[24px]">
            Top Trending
          </h2>
    
          {/* Horizontal Scroll Cards */}
          <div
            className="
              flex
              gap-4 sm:gap-6 lg:gap-8
              overflow-x-auto
              pb-4
              scrollbar-hide
              snap-x snap-mandatory
            "
          >
            <HorizontalScroll>
            {filteredServices.map((service) => (
               <Link href={`/MainModules/Legal-Services/${moduleId}/${categoryId}/${service._id}`}
                key={service._id} className="snap-start shrink-0">
                              <ServiceCard  
                                key={service._id}
                            title={service.serviceName}
                            category={service.category?.name}
                            keyvalues={service.keyValues}
                            commission={service.franchiseDetails?.commission}
                            price={service.serviceDetails?.packages?.[0]?.price || 0}
                            discountedprice={service.serviceDetails?.packages?.[0]?.discountedPrice || 0}
                            discount={service.serviceDetails?.packages?.[0]?.discount || 0}
                            rating={Math.round(service.averageRating || 0)}
                            totalreviews={service.totalReviews}
                            image={
                              service.thumbnailImage ||
                              service.category?.image ||
                              "/image/defaultService.jpg"
                            }
                            slug={service.category?.name
                              ?.toLowerCase()
                              .replace(/\s+/g, "-")}
                            detailslug={service._id}
              
                              />
                            </Link>
            ))}
            </HorizontalScroll>
          </div>
        </section>
  );
}
