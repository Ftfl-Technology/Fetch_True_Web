"use client";

import { useRecommendedServices } from "@/src/context/RecommendedContext";
import FinanceCard from "../ui/FinanceCard";
import { useEffect, useRef } from "react";
import { useTopTrending } from "@/src/context/TopTrendingContext";
import { useParams } from "next/navigation";
import Link from "next/link";



const TopTrendingSection = ({ moduleId,searchQuery }:{ moduleId:string,searchQuery:string}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    
      const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!scrollRef.current) return;
    
        const scrollAmount = 320;
    
        if (e.key === "ArrowRight") {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    
        if (e.key === "ArrowLeft") {
          scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
      };

       const { services,loading,error,fetchTopTrending } = useTopTrending();

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

        const { categoryId } = useParams<{
                  moduleId: string;
                  categoryId: string;
                }>();

        console.log("finance Module Id:",moduleId)
      
        if(loading) return null;
        if (error) return null;
                    if (!filteredServices.length) {
  return (
    <p className="text-center py-10 text-gray-500">
      No matching top trending services
    </p>
  );
}

  return (
    <section className="w-full py-14 bg-[#F6FBF7]">
      <div className="max-w-[1440px] mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-[24px] font-Medium text-[#1A1A1A] mb-6">
          Top Trending
        </h2>

        {/* HORIZONTAL SCROLL */}
        <div
        ref={scrollRef}
          tabIndex={0}                     
          onKeyDown={handleKeyDown}
          className="
            flex
            gap-4 lg:gap-6
            overflow-x-auto
            scrollbar-hide
            scroll-smooth
            pb-4
          "
        >
          {filteredServices.map((service) => (
            <Link href={`/MainModules/Finance/${moduleId}/${categoryId}/${service._id}`}
            key={service._id} className="snap-start shrink-0">
                            <FinanceCard  
                              key={service._id}
                          title={service.serviceName}
                          category={service.category?.name}
                          keyvalues={service.keyValues}
                          earnUpto={service.franchiseDetails?.commission}
                          
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
        </div>

      </div>
    </section>
  );
};

export default TopTrendingSection;
