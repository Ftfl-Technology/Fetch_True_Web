

// "use client";

// import ServiceCard from "../ui/ServiceCard";
// import { useEffect } from "react";
// import { useRecommendedServiceByCategoryIdContext } from "@/src/context/RecommendedServiceByCategoryIdContext";
// import Link from "next/link";
// import HorizontalScroll from "../ui/HorizontalScroll";

// interface Props {
//   categoryId: string;
//   moduleId: string;
// }


// export default function RecommendedForYou({ categoryId, moduleId }: Props) {

//   const { services,loading,error,fetchRecommendedServicesByCategoryId } = useRecommendedServiceByCategoryIdContext();
  
//   useEffect(()=>{
//     if(categoryId) {
//       fetchRecommendedServicesByCategoryId(categoryId)
//     }
//   },[categoryId])

//   if(loading) return null;
//   if (error) return null;

//   return (
//     <section
//           className="
//             w-full
            
//             mx-auto
//             px-4 sm:px-6 lg:px-15
//             flex flex-col
//             gap-4 sm:gap-6
//             mb-8 sm:mb-10
//             pt-8
//           "
//         >
//           {/* Title */}
//           <h2 className="font-inter font-semibold text-[18px] sm:text-[22px] lg:text-[24px]">
//             Recommended
//           </h2>
    
//           {/* Horizontal Scroll Cards */}
//           <div
//             className="
//               flex
//               gap-4 sm:gap-6 lg:gap-8
//               overflow-x-auto
//               pb-4
//               scrollbar-hide
//               snap-x snap-mandatory
//             "
//           >
//             <HorizontalScroll>
//             {services.map((service) => (

//               <Link key={service._id} 
//               href={`/MainModules/Legal-Services/${moduleId}/${categoryId}/${service._id}`}
//                className="snap-start shrink-0">
//                 <ServiceCard  
//                   key={service._id}
//               title={service.serviceName}
//               category={service.category?.name}
//               keyvalues={service.keyValues?.map(kv => kv.value)}
//               commission={service.franchiseDetails?.commission}
//               price={service.serviceDetails?.packages?.[0]?.price || 0}
//               discountedprice={service.serviceDetails?.packages?.[0]?.discountedPrice || 0}
//               discount={service.serviceDetails?.packages?.[0]?.discount || 0}
//               rating={Math.round(service.averageRating || 0)}
//               totalreviews={service.totalReviews}
//               image={
//                 service.thumbnailImage 
//               }
//               slug={service.category?.name
//                 ?.toLowerCase()
//                 .replace(/\s+/g, "-")}
//               detailslug={service._id}

//                 />
//               </Link>
//             ))}
//             </HorizontalScroll>
//           </div>
//         </section>
//   );
// }


import React from 'react'

const RecommendedForYou = () => {
  return (
    <div>
      
    </div>
  )
}

export default RecommendedForYou
