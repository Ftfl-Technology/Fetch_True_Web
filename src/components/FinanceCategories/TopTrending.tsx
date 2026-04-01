// "use client";

// import { useRecommendedServices } from "@/src/context/RecommendedContext";
// import FinanceCard from "../ui/FinanceCard";
// import { useEffect, useRef } from "react";
// import Link from "next/link";
// import { useRecommendedServiceByCategoryIdContext } from "@/src/context/RecommendedServiceByCategoryIdContext";
// import { useTopTrendingServiceByCategoryIdContext } from "@/src/context/TopTrendingServiceByCategoryIdContext";

// interface Props {
//   categoryId: string;
//   moduleId: string;
// }

// const TopTrending = ({ categoryId,moduleId }:Props) => {
//     const scrollRef = useRef<HTMLDivElement>(null);
    
//       const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
//         if (!scrollRef.current) return;
    
//         const scrollAmount = 320;
    
//         if (e.key === "ArrowRight") {
//           scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//         }
    
//         if (e.key === "ArrowLeft") {
//           scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//         }
//       };

//      const { services,loading,error,fetchTopTrendingServicesByCategoryId } = useTopTrendingServiceByCategoryIdContext();
       
//        useEffect(()=>{
//          if(categoryId) {
//            fetchTopTrendingServicesByCategoryId(categoryId)
//          }
//        },[categoryId])
     
//        if(loading) return null;
//        if (error) return null;

//   return (
//     <section className="w-full py-14 bg-[#F6FBF7]">
//       <div className="max-w-[1440px] mx-auto px-4">

//         {/* TITLE */}
//         <h2 className="text-[24px] font-Medium text-[#1A1A1A] mb-6">
//           Top Trending
//         </h2>

//         {/* HORIZONTAL SCROLL */}
//         <div
//         ref={scrollRef}
//           tabIndex={0}                     
//           onKeyDown={handleKeyDown}
//           className="
//             flex
//             gap-4 lg:gap-6
//             overflow-x-auto
//             scrollbar-hide
//             scroll-smooth
//             pb-4
//           "
//         >
//           {services.map((service) => (
//             <Link key={service._id} 
//                           href={`/MainModules/Franchise/${moduleId}/${categoryId}/${service._id}`}
//             className="snap-start shrink-0">
//                             <FinanceCard  
//                               key={service._id}
//                           title={service.serviceName}
//                           category={service.category?.name}
//                           keyvalues={service.keyValues}
//                           earnUpto={service.franchiseDetails?.commission}
//                           discount={service.serviceDetails?.packages?.[0]?.discount}
//                         //   discount={service.serviceDetails?.packages?.[0]?.discount || 0}
//                           rating={Math.round(service.averageRating || 0)}
//                           totalreviews={service.totalReviews}
//                           image={
//                             service.thumbnailImage ||
//                             service.category?.image ||
//                             "/image/defaultService.jpg"
//                           }
//                           slug={service.category?.name
//                             ?.toLowerCase()
//                             .replace(/\s+/g, "-")}
//                           detailslug={service._id}
            
//                             />
//                           </Link>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default TopTrending;


import React from 'react'

const TopTrending = () => {
  return (
    <div>
      
    </div>
  )
}

export default TopTrending
