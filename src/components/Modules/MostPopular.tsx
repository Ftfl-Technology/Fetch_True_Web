// "use client";

// import { FaStar } from "react-icons/fa";
// import { CiBookmark } from "react-icons/ci";
// import Image from "next/image";
// import { User } from "lucide-react";
// import { useMostPopular } from "@/src/context/HomeMostPopularContext";



// export default function MostPopular() {
//     const { services,loading,error } = useMostPopular();

//     if (loading) {
//     return <div className="text-center py-20">Loading services...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-20 text-red-500">{error}</div>;
//   }

//   return (
//     <section className="w-full py-10 bg-white">
//       <div className="max-w-[1440px] mx-auto px-6">

//         {/* Heading */}
//         <h2 className="text-[24px] font-semibold mb-6">
//           Most Popular
//         </h2>

//         {/* Cards Row */}
//         <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">

//           {services.map((item) => (
//             <div
//               key={item.serviceId}
//               className="min-w-[352px] bg-[#FFFFFF] border border-[#D2D2D2] rounded-[12px] py-2 shadow-sm"
//             >
//               {/* Image */}
//               <div className="relative mx-auto  w-[328px] h-[170px] rounded-[8px] overflow-hidden">
//                 <Image
//                   src={item.thumbnailImage}
//                   alt={item.serviceName}
//                   fill
//                   className="object-cover"
//                 />

//                   <span className="absolute top-3 left-3 bg-white text-[#2164F4] text-[11px] font-medium px-2 py-[2px] rounded-[7px] flex items-center gap-1">
//                     <img src="/image/security.png" alt="" className="w-[12px]" />Trusted
//                   </span>
              

//                 <span className="absolute top-3 right-12 bg-[#F9F5EE] text-[11px] px-2 py-[2px] rounded-full">
//                   Discount 5%
//                 </span>

//                 <div className="absolute top-3 right-3 w-[28px] h-[28px] bg-black/80 rounded-full flex items-center justify-center">
//                   <CiBookmark size={16} color="white" />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-4">
//                 <div className="flex justify-between items-center">
//                 <h3 className="text-[16px] font-semibold mb-2">
//                   {item.serviceName}
//                 </h3>
//                 <span className="ml-auto text-[11px] bg-[#548AFE] text-[#FFFFFF] px-2 py-[2px] rounded-full">
//                    Earn {item.franchiseDetails?.commission}
//                   </span>
//                 </div>
//                 {/* Tags */}
//                 <div className="flex items-center gap-2 mb-3">
//                   <span className="text-[11px] bg-[#F4F4F4] px-2 py-[2px] rounded-[12px]">
//                     {item.category?.name}
//                   </span>
                  
//                   {/* <span className="text-[11px] bg-[#F4F4F4] px-2 py-[2px] rounded-[12px] flex items-center gap-1">
//                     <span className="w-[6px] h-[6px] bg-green-500  rounded-full"></span>
//                     {item.mode}
//                   </span> */}

                  
//                 </div>

//                                 {/* Key Values */}
//                 {/* {item.keyValues?.length > 0 && (
//                   <div className="flex gap-4 text-[12px] text-gray-600 mb-3">
//                     {item.keyValues.slice(0, 2).map((kv, i) => (
//                       <p key={i}>{kv.value}</p>
//                     ))}
//                   </div>
//                 )} */}


//                 {/* Features */}
//                 {/* <div className="flex  gap-4 text-[12px] text-gray-600 space-y-1 mb-3">
//                   <p>✏️ Create & Practice</p>
//                   <p>👁 Design with empathy</p>
//                 </div> */}

//                 {/* Rating + Price */}
//                 <div className="flex justify-between items-end">
//                   <div>
//                     <div className="flex gap-1 mb-1">
//                       {[1, 2, 3, 4, 5].map(i => (
//                         <FaStar
//                           key={i}
//                           size={18}
//                           color={i <= Math.round(item.averageRating) ? "#FFC107" : "#E0E0E0"}
//                         />
//                       ))}
//                     </div>
//                     <p className="text-[11px] text-[#919191] flex gap-1">
//                       <User size={12}/> {item.totalReviews} Reviews
//                     </p>
//                   </div>

//                   <div className="text-right bg-[#FFFFFF]">
//                     <p className="text-[11px] text-[#9F9F9F]">
//                       Starting from
//                     </p>
//                     <p className="text-[18px] font-semibold">
//                       ₹ {item.price || "0000"} /-
//                     </p>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }







// "use client";

// import { useHomeMostPopular } from "@/src/context/HomeMostPopularContext";
// import MostPopularHomeCard from "../ui/MostPopularHomeCard";

// type NormalizedService = {
//   id: string;
//   title: string;
//   image: string;
//   type: string;
//   moduleName: string;
//   rating?: number;
//   reviews?: number;
//   investmentRange?: { _id: string; range: string; parameters: string };
//   monthlyEarnPotential?: { _id: string; range: string; parameters: string };
//   roi?: string;
//   price?: number;
//   oldPrice?: number;
//   discount?: string;
//   features: { title: string; key?: string; icon?: string }[];
//   franchiseDetails?: {
//     commission?: string;
//     areaRequired?: string;
//     investmentRange?: { _id: string; range: string; parameters: string };
//     monthlyEarnPotential?: { _id: string; range: string; parameters: string };
//     franchiseModel?: {
//       _id: string;
//       title: string;
//       agreement: string;
//       price: number;
//       discount: number;
//       gst: number;
//       fees: number;
//     };
//   };
// };

// export default function MostPopularHome() {
//   const { services, loading, error } = useHomeMostPopular();

//   // Normalize the data for the card component
//   const normalizedServices: NormalizedService[] = services.map((item) => {
//     const service = item.service;
//     const pkg = service.packages?.[0]; 

//     return {
//       id: service._id,
//       title: service.serviceName,
//       image: service.thumbnailImage || "",
//       type: service.category?.name || "Service",
//       moduleName: service.moduleName || service.category?.module?.name || "Unknown",
//       rating: service.averageRating,
//       reviews: service.totalReviews,
//       price: pkg?.discountedPrice ?? pkg?.price,
//       oldPrice: pkg?.price,
//       discount: pkg?.discount ? `${pkg.discount}% OFF` : undefined,
//       roi: undefined, 
//       investmentRange: item.franchiseDetails?.investmentRange,
//       monthlyEarnPotential: item.franchiseDetails?.monthlyEarnPotential,
//       franchiseDetails: item.franchiseDetails,
//       features: service.keyValues?.slice(0, 4).map((kv) => ({
//         key: kv.key || "",
//         title: kv.value,
//         icon: kv.icon,
//       })) || [],
//     };
//   });

//   /* ================= UI STATES ================= */

//   if (loading) {
//     return (
//       <div className="p-18 flex items-center justify-center gap-4">
//         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-18 text-center">
//         <p className="text-red-500 font-medium">{error}</p>
//         <p className="text-sm text-gray-500 mt-2">Please try again later</p>
//       </div>
//     );
//   }

//   if (!normalizedServices.length) {
//     return (
//       <div className="p-18 text-center text-gray-500">
//         No popular services found
//       </div>
//     );
//   }

//   /* ================= RENDER ================= */

//   return (
//     <div className="p-4 lg:p-18">
//       <h2 className="text-xl font-semibold mb-6">Most Popular</h2>

//       <div className="relative w-full">
//         <div
//           data-scroll
//           className="
//             flex gap-6 px-4
//             overflow-x-auto
//             scroll-smooth
//             snap-x snap-mandatory
//             touch-pan-x
//             overscroll-x-contain cursor-grab
//           "
//         >
//           {normalizedServices.map((item) => (
//             <div
//               key={item.id}
//               className="flex-shrink-0 snap-center min-w-[345px] lg:min-w-[424px]"
//             >
//               <MostPopularHomeCard {...item} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import { useHomeMostPopular } from "@/src/context/HomeMostPopularContext";
import MostPopularHomeCard from "../ui/MostPopularHomeCard";
import { useRef, useState, useEffect, useCallback } from "react";

type NormalizedService = {
  id: string;
  title: string;
  image: string;
  type: string;
  moduleName: string;
  rating?: number;
  reviews?: number;
  investmentRange?: { _id: string; range: string; parameters: string };
  monthlyEarnPotential?: { _id: string; range: string; parameters: string };
  roi?: string;
  price?: number;
  oldPrice?: number;
  discount?: string;
  features: { title: string; key?: string; icon?: string }[];
  franchiseDetails?: {
    commission?: string;
    areaRequired?: string;
    investmentRange?: { _id: string; range: string; parameters: string };
    monthlyEarnPotential?: { _id: string; range: string; parameters: string };
    franchiseModel?: {
      _id: string;
      title: string;
      agreement: string;
      price: number;
      discount: number;
      gst: number;
      fees: number;
    };
  };
};

export default function MostPopularHome() {
  const { services, loading, error } = useHomeMostPopular();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);


  const normalizedServices: NormalizedService[] = services.map((item) => {
    const service = item.service;
    const pkg = service.packages?.[0];

    return {
      id: service._id,
      title: service.serviceName,
      image: service.thumbnailImage || "",
      type: service.category?.name || "Service",
      moduleName: service.moduleName || service.category?.module?.name || "Unknown",
      rating: service.averageRating,
      reviews: service.totalReviews,
      price: pkg?.discountedPrice ?? pkg?.price,
      oldPrice: pkg?.price,
      discount: pkg?.discount ? `${pkg.discount}% OFF` : undefined,
      roi: undefined,
      investmentRange: item.franchiseDetails?.investmentRange,
      monthlyEarnPotential: item.franchiseDetails?.monthlyEarnPotential,
      franchiseDetails: item.franchiseDetails,
      features: service.keyValues?.slice(0, 4).map((kv) => ({
        key: kv.key || "",
        title: kv.value,
        icon: kv.icon,
      })) || [],
    };
  });

  // Calculate max scroll
  const getMaxScroll = useCallback(() => {
    if (!containerRef.current) return 0;
    return containerRef.current.scrollWidth - containerRef.current.clientWidth;
  }, []);

  // Handle mouse/touch drag with boundary checks
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    setStartX(e.pageX - rect.left);
    setScrollLeft(container.scrollLeft);
    container.style.cursor = 'grabbing';
    container.style.userSelect = 'none';
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (isDragging && containerRef.current) {
      setIsDragging(false);
      const container = containerRef.current;
      container.style.cursor = 'grab';
      container.style.removeProperty('user-select');
    }
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    if (!containerRef.current) return;
    setIsDragging(false);
    const container = containerRef.current;
    container.style.cursor = 'grab';
    container.style.removeProperty('user-select');

    // Snap to nearest card
    const cardWidth = container.querySelector('.snap-center')?.clientWidth || 345;
    const gap = 24; // gap-6 = 24px
    const scrollPos = container.scrollLeft;
    const cardCount = Math.round(scrollPos / (cardWidth + gap));

    container.scrollTo({
      left: cardCount * (cardWidth + gap),
      behavior: 'smooth'
    });
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = e.pageX - rect.left;
    const walk = (x - startX) * 1.5;

    let newScrollLeft = scrollLeft - walk;
    const maxScroll = getMaxScroll();
    newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScroll));

    container.scrollLeft = newScrollLeft;
  }, [isDragging, startX, scrollLeft, getMaxScroll]);

  // Touch events for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    setStartX(e.touches[0].pageX - rect.left);
    setScrollLeft(container.scrollLeft);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = e.touches[0].pageX - rect.left;
    const walk = (x - startX) * 1.5;

    let newScrollLeft = scrollLeft - walk;
    const maxScroll = getMaxScroll();
    newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScroll));

    container.scrollLeft = newScrollLeft;
  }, [isDragging, startX, scrollLeft, getMaxScroll]);

  // Add event listeners for mouse move and up (attached to document)
  useEffect(() => {
    const handleDocumentMouseMove = (e: MouseEvent) => handleMouseMove(e);
    const handleDocumentMouseUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener('mousemove', handleDocumentMouseMove);
      document.addEventListener('mouseup', handleDocumentMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);



  if (loading) {
    return (
      <div className="p-18 flex items-center justify-center gap-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-18 text-center">
        <p className="text-red-500 font-medium">{error}</p>
        <p className="text-sm text-gray-500 mt-2">Please try again later</p>
      </div>
    );
  }

  if (!normalizedServices.length) {
    return (
      <div className="p-18 text-center text-gray-500">
        No popular services found
      </div>
    );
  }



  return (
    <div className="p-4 lg:p-8 lg:ml-2">
      <h2 className="text-xl font-semibold mb-6 lg:ml-2">Most Popular</h2>

      <div className="relative w-full">
        <div
          ref={containerRef}
          className="
            flex gap-6 px-4
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            touch-pan-x scrollbar-hide
            overscroll-x-contain cursor-grab
            select-none
          "
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {normalizedServices.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 snap-center min-w-[345px] lg:min-w-[424px]"
            >
              <MostPopularHomeCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}