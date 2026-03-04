// "use client";

// import React from "react";
// import HomeCard from "../ui/HomeCard";

// const recommendedServices = [
//   {
//     image: "/image/legalMainImage.png",
//     title: "Personal Loan",
//     type: "Finance",
//     category: "Personal Loan",
//     earnUpto: "Earn Up to 5%",
//     rating: 4,
//     reviews: "2,400+ Reviews",
//     features: [
//       { title: "Up To 20 Lac Loan Amount" },
//       { title: "24 Hrs Approval Time" },
//       { title: "12-60 Duration in months" },
//     ],
//   },
//   {
//     image: "/image/legalMainImage.png",
//     title: "LLP Registration",
//     type: "Legal Service",
//     category: "Business Registration",
//     earnUpto: "Earn Up to 5%",
//     rating: 4,
//     reviews: "2,400+ Reviews",
//     features: [
//       { title: "Experts Lawyers" },
//       { title: "Affordable Lawyers" },
//     ],
//     oldPrice: 4000,
//     price: 2999,
//     discount: "25% OFF",
//   },
//   {
//     image: "/image/legalMainImage.png",
//     title: "Figma UI UX Design",
//     type: "Education",
//     category: "IT & Software",
//     earnUpto: "Earn Up to 5%",
//     rating: 4,
//     reviews: "2,400+ Reviews",
//     features: [
//       { title: "Online Mode" },
//       { title: "Faster project delivery" },
//       { title: "24x7 technical support" },
//     ],
//     oldPrice: 4000,
//     price: 2999,
//     discount: "25% OFF",
//   },
// ];

// export default function RecommendedSection() {
//   return (
//     <div className="flex gap-4 overflow-x-auto py-4 scrollbar-hide">
//       {recommendedServices.map((service, index) => (
//         <HomeCard key={index} {...service} />
//       ))}
//     </div>
//   );
// }




// "use client";

// import { useHomeRecommended } from "@/src/context/HomeRecommendedContext";
// import HomeCard from "../ui/HomeCard";

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

// export default function RecommendedHome() {
//   const { services, loading, error } = useHomeRecommended();

//   // Normalize the data for the card component
//   const normalizedServices: NormalizedService[] = services.map((item) => {
//     const service = item.service;
//     const pkg = service.packages?.[0]; // Take the first package

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
//       roi: undefined, // Not available in new API
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
//         No trending services found
//       </div>
//     );
//   }



//   return (
//     <div className="p-4 lg:p-18">
//       <h2 className="text-xl font-semibold mb-6">Recommended</h2>

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
//               <HomeCard {...item} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import { useHomeRecommended } from "@/src/context/HomeRecommendedContext";
import HomeCard from "../ui/HomeCard";
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

export default function RecommendedHome({ searchQuery }: any) {
  const { services, loading, error } = useHomeRecommended();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Normalize the data for the card component
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
      roi: undefined, // Not available in new API
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

  const filteredServices = normalizedServices.filter((service) => {
  if (!searchQuery?.trim()) return true;

  const q = searchQuery.toLowerCase();

  return (
    service.title.toLowerCase().includes(q) ||
    service.type.toLowerCase().includes(q) ||
    service.moduleName.toLowerCase().includes(q)
  );
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

    // Snap to nearest card and update active index
    const cardWidth = container.querySelector('.snap-center')?.clientWidth || 345;
    const gap = 24; // gap-6 = 24px
    const scrollPos = container.scrollLeft;
    const cardCount = Math.round(scrollPos / (cardWidth + gap));
    setActiveIndex(cardCount);

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

  // Handle indicator click
  const handleIndicatorClick = useCallback((index: number) => {
    if (!containerRef.current) return;
    const cardWidth = containerRef.current.querySelector('.snap-center')?.clientWidth || 345;
    const gap = 24;
    containerRef.current.scrollTo({
      left: index * (cardWidth + gap),
      behavior: 'smooth'
    });
    setActiveIndex(index);
  }, []);

  // Update active index on scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = container.querySelector('.snap-center')?.clientWidth || 345;
      const gap = 24;
      const scrollPos = container.scrollLeft;
      const newIndex = Math.round(scrollPos / (cardWidth + gap));
      setActiveIndex(newIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
  if (containerRef.current) {
    containerRef.current.scrollTo({ left: 0 });
  }
}, [searchQuery]);

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

  if (!filteredServices.length) {
    return (
      <div className="p-18 text-center text-gray-500">
        No recommended services found
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-4 lg:ml-12">
      <h2 className="text-xl font-semibold mb-6">Recommended</h2>

      <div className="relative w-full">
        <div
          ref={containerRef}
          className="
            flex gap-6 px-4
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            touch-pan-x
            overscroll-x-contain cursor-grab
            select-none
            no-scrollbar
            pb-2
          "
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {filteredServices.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 snap-center min-w-[345px] lg:min-w-[424px]"
            >
              <HomeCard {...item} />
            </div>
          ))}
          
          {/* Add right padding for better scrolling on mobile */}
          <div className="flex-shrink-0 min-w-4 lg:hidden"></div>
        </div>


      </div>
    </div>
  );
}