// 'use client';


// import Image from 'next/image';
// import Link from 'next/link';
// import Recommended from "@/src/components/MarketingCategories/Recommended";
// import MostlyPopular from "@/src/components/MarketingCategories/MostPopular";
// import TopTrending from '@/src/components/MarketingCategories/TopTrending';
// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import { useSubCategory } from '@/src/context/SubCategoriesContext';
// import { useRecommendedServiceByCategoryIdContext } from '@/src/context/RecommendedServiceByCategoryIdContext';
// import { useMostPopularServiceByCategory } from '@/src/context/MostPopularServiceByCategoryIdContext';
// import { useTopTrendingServiceByCategoryIdContext } from '@/src/context/TopTrendingServiceByCategoryIdContext';
// import ServiceCard from '@/src/components/MarketingCategories/ServiceCard';


// type keyValuesItem = {
//     value: string,
//     icon?: string,
//     _id: string
// }[]

// export type UnifiedService = {
//     id: string;
//     title: string;
//     category: string;
//     image: string;
//     rating: number;
//     reviews: number;
//     price: number;
//     keyValues: keyValuesItem;
//     originalPrice: number;
//     discount: number;
//     source: "recommended" | "popular" | "trending";
// };

// type BackendService = {
//     _id: string;
//     serviceName: string;
//     thumbnailImage?: string;
//     averageRating?: number;
//     totalReviews?: number;
//     category?: {
//         _id: string;
//         name: string;
//     };
//     keyValues?: keyValuesItem;
//     serviceDetails?: {
//         packages?: {
//             price: number;
//             discountedPrice: number;
//             discount: number;
//         }[];
//     };
// };


// export default function DesignStudioPage() {

//     const { moduleId, categoryId } = useParams<{
//         moduleId: string;
//         categoryId: string;
//     }>();

//     const {
//         subCategories,
//         loading,
//         error,
//         fetchSubCategories,
//     } = useSubCategory();

//     const [currentCategory, setCurrentCategory] = useState<any>(null);
//     const [selectedRange, setSelectedRange] = useState("all");

//     useEffect(() => {
//         if (subCategories.length) {
//             //   setActive(subCategories[0]._id);

//             const subCat = subCategories.find(sc => sc._id === categoryId);
//             setTimeout(() => {
//                 if (subCat) {
//                     setCurrentCategory(subCat.category);
//                 } else {
//                     setCurrentCategory(subCategories[0].category);
//                 }
//             }, 0);
//         }
//     }, [subCategories]);



//     useEffect(() => {
//         if (categoryId) {
//             fetchSubCategories(categoryId);
//         }
//     }, []);

//     /* ---------- DERIVED CATEGORY ---------- */
//     const {
//         services: recommendedServices,
//         loading: recommendedLoading,
//         fetchRecommendedServicesByCategoryId,
//     } = useRecommendedServiceByCategoryIdContext();

//     const {
//         services: popularServices,
//         loading: popularLoading,
//         fetchMostPopularServiceByCategory
//     } = useMostPopularServiceByCategory();

//     const {
//         services: trendingServices,
//         loading: trendingLoading,
//         fetchTopTrendingServicesByCategoryId
//     } = useTopTrendingServiceByCategoryIdContext();

//     useEffect(() => {
//         if (categoryId) {
//             fetchSubCategories(categoryId);
//             fetchRecommendedServicesByCategoryId(categoryId);
//             fetchMostPopularServiceByCategory(categoryId);
//             fetchTopTrendingServicesByCategoryId(categoryId);
//         }
//     }, [categoryId]);




//     /* ---------- FILTER STATE ---------- */
//     const FILTERS = [
//         { label: "All", value: "all" },
//         { label: "High to Low", value: "high-to-low" },
//         { label: "Low to High", value: "low-to-high" },
//         { label: "Recommended", value: "recommended" },
//         { label: "Most Popular", value: "most-popular" },
//         { label: "Top Trending", value: "top-trending" },
//     ];

//     const mapService = (
//         service: BackendService,
//         source: UnifiedService["source"]
//     ): UnifiedService => {
//         const packages = service.serviceDetails?.packages ?? [];

//         const cheapest =
//             packages.length > 0
//                 ? packages.reduce((min, p) =>
//                     p.discountedPrice < min.discountedPrice ? p : min
//                 )
//                 : null;

//         return {
//             id: service._id,
//             title: service.serviceName,
//             category: service.category?.name ?? "Unknown",
//             image: service.thumbnailImage ?? "",
//             rating: service.averageRating ?? 0,
//             reviews: service.totalReviews ?? 0,
//             price: cheapest?.discountedPrice ?? 0,
//             originalPrice: cheapest?.price ?? 0,
//             discount: cheapest?.discount ?? 0,
//             keyValues: service?.keyValues ?? [],
//             source,
//         };
//     };




//     const allServices: UnifiedService[] = [
//         ...recommendedServices.map(s => mapService(s, "recommended")),
//         ...popularServices.map(s => mapService(s, "popular")),
//         ...trendingServices.map(s => mapService(s, "trending")),
//     ];




//     const filteredServices = allServices.filter(service => {
//         switch (selectedRange) {
//             case "recommended":
//                 return service.source === "recommended";

//             case "most-popular":
//                 return service.source === "popular";

//             case "top-trending":
//                 return service.source === "trending";

//             default:
//                 return true;
//         }
//     });

//     const filteredAndSorted = [...filteredServices].sort((a, b) => {
//         switch (selectedRange) {
//             case "high-to-low":
//                 return b.price - a.price;

//             case "low-to-high":
//                 return a.price - b.price;

//             default:
//                 return 0;
//         }
//     });



//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//         <>
//             {/* ---------------- NAVBAR / HERO SECTION ---------------- */}
//             <section className="relative w-full bg-[#2563EB]">
//                 {/* Background Image */}
//                 <div className="absolute inset-0">
//                     <Image
//                         src="/image/marketingbgdesign.png"
//                         alt="Marketingnavbarbg"
//                         fill
//                         priority
//                         className="object-cover"
//                     />
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10 min-h-[260px] md:min-h-[336px]">
//                     {/* Header */}
//                     <div className="border-b-2 border-white">
//                         <div className="flex items-center gap-6 px-4 md:px-6 py-4 md:ml-8">
//                             <div className="flex items-center gap-3 mt-5">
//                                 <Link href={`/MainModules/Marketing/${moduleId}`}>
//                                     <img
//                                         src="/image/designvector.png"
//                                         className="w-[16px] h-[14px] lg:w-[22px] lg:h-[20px]"
//                                         alt="Back"
//                                     />
//                                 </Link>
//                                 <h1 className="text-white font-semibold text-base md:text-lg leading-none">
//                                     {currentCategory?.name}
//                                 </h1>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Nav Icons */}
//                     <div
//                         className="
//               flex justify-start
//               px-4 md:px-8 gap-6 md:gap-8
//               py-6 md:py-8
//               md:ml-8
//             "
//                     >
//                         {subCategories.map((item) => (

//                             <div
//                                 key={item._id}
//                                 className="flex flex-col items-center text-white cursor-pointer"
//                             >
//                                 <div className="w-[42px] h-[42px] md:w-[89.52px] md:h-[89.52px] rounded-full bg-white flex items-center justify-center shadow-md">
//                                     <div className="relative w-[18px] h-[18px] md:w-[34px] md:h-[34px]">
//                                         <Image
//                                             src={item.image}
//                                             alt={item.name}
//                                             fill
//                                             className="object-contain"
//                                         />
//                                     </div>
//                                 </div>

//                                 <p className="mt-2 text-[11px] md:text-sm font-medium text-center whitespace-pre-line leading-tight">
//                                     {item.name}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//             </section>


//             {/* FILTER PILLS */}
//             <div className="w-full px-4 md:px-8 mt-15 lg:ml-12">
//                 <div className="mt-6 flex gap-3 overflow-x-auto no-scrollbar">
//                     {FILTERS.map((item) => (
//                         <button
//                             key={item.value}
//                             onClick={() => setSelectedRange(item.value)}
//                             className={`rounded-full px-5 py-2 text-sm border whitespace-nowrap ${selectedRange === item.value
//                                 ? "bg-black text-white border-black"
//                                 : "bg-white text-black border"
//                                 }`}
//                         >
//                             {item.label}
//                         </button>
//                     ))}
//                 </div>
//             </div>


//             {/* <section className="w-full mt-6 md:mb-10">


//                 <Recommended categoryId={categoryId} moduleId={moduleId} />
//                 <MostlyPopular categoryId={categoryId} moduleId={moduleId} />
//                 <TopTrending categoryId={categoryId} moduleId={moduleId} />
//             </section> */}

//             <section className="px-6 mt-10">
//                 <div
//                     className="
//                               grid
//                               grid-cols-1
//                               sm:grid-cols-2
//                               md:grid-cols-2
//                               lg:grid-cols-4
//                               gap-2
//                             "
//                 >
//                     {filteredAndSorted.map(service => (
//                         <ServiceCard
//                             key={`${service.source}-${service.id}`}
//                             service={service}
//                         />

//                     ))}
//                 </div>
//             </section>
//         </>
//     );
// }

"use client";

import SearchBar from "@/src/components/SearchBar/Search";
import { useModule } from "@/src/context/CategoriesContext";
import { useSubCategory } from "@/src/context/SubCategoriesContext";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";
import AllServices from "@/src/components/MarketingCategories/AllServices";

export default function EducationCategoriesDetailsPage() {
      const { categories,fetchCategoriesByModule } = useModule();

  const [currentCategory, setCurrentCategory] = useState<any>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const { moduleId, categoryId } = useParams<{
    moduleId: string;
    categoryId: string;
  }>();

     useEffect(() => {
  if (moduleId) {
    fetchCategoriesByModule(moduleId);
  }
}, [moduleId]);

  const { subCategories, error, fetchSubCategories } = useSubCategory();

  useEffect(() => {
    if (categories?.length && categoryId) {
      const cat = categories.find((c: any) => c._id === categoryId);
      setCurrentCategory(cat);
    }
  }, [categories, categoryId]);

  useEffect(() => {
    if (categoryId) {
      fetchSubCategories(categoryId);
    }
  }, [categoryId]);

  useEffect(() => {
    if (subCategories?.length && !selectedSubCategory) {
      setSelectedSubCategory(subCategories[0]._id);
    }
  }, [subCategories]);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full">

        {/* Background */}
        {/* <div className="absolute inset-0">
          <Image
            src="/image/marketingbgdesign.png"
            alt="Marketingnavbarbg"
            fill
            priority
            className="object-cover"
          />
        </div> */}

        {/* CONTENT */}
        <div className="relative z-10 min-h-[220px] md:min-h-[200px]">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-white px-4 md:px-10 py-4 gap-4">

            {/* LEFT SIDE */}
            <div className="flex items-center gap-3">

              <Link href={`/MainModules/Education/${moduleId}`}>
                <img
                  src="/image/Vector (1).png"
                  className="w-[18px] h-[16px] md:w-[22px] md:h-[20px]"
                  alt="Back"
                />
              </Link>

              <h1 className=" font-semibold text-base md:text-lg">
                {currentCategory?.name}
              </h1>

            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">

              {/* SEARCH */}
              <div className="flex-1 md:flex-none md:w-[280px]">
                <SearchBar
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder="Search"
                />
              </div>

              {/* BOOKMARK */}
              <Link href="/Account/MyAccount?section=Favorite">
                <Bookmark className="w-6 h-6 md:w-7 md:h-7 text-black" />
              </Link>

            </div>
          </div>

          {/* SUBCATEGORY SCROLL NAV */}
          {error && <p className="ml-6 text-red-500">{error}</p>}

          <div className="flex overflow-x-auto no-scrollbar px-4 md:px-10 gap-6 py-6">

            {subCategories.map((item) => (
              <div
                key={item._id}
                onClick={() => setSelectedSubCategory(item._id)}
                className="flex flex-col items-center text-white cursor-pointer min-w-[70px]"
              >

                {/* ICON */}
                <div
                  className={`relative flex items-center justify-center
                  w-[48px] h-[48px]
                  md:w-[90px] md:h-[90px]
                   transition-all duration-200
                  ${
                    selectedSubCategory === item._id
                      ? "bg-gray-300"
                      : "bg-gray-200 hover:bg-gray-100"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* NAME */}
                <p className="mt-2 text-[11px] md:text-sm font-medium text-black text-center ">
                  {item.name}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

            <AllServices categoryId={categoryId} moduleId={moduleId} selectedSubCategory={selectedSubCategory} searchQuery={searchQuery}/>
      
    </>
  );
}

