"use client";

import Image from "next/image";
import CategoryModule from "@/src/components/Marketing/Category";
import { Home, Bookmark, Search } from "lucide-react";
import Link from "next/link";
import RecommendedForYou from "@/src/components/Marketing/Recommend";
import { useEffect, useRef, useState } from "react";
import MostlyUsed from "@/src/components/Marketing/MostlyUsed";
import TopTrending from "@/src/components/Marketing/TopTrending";
import WhyJustOurServices from "@/src/components/Marketing/WhyOurServices";
import SuggestedProviders from "@/src/components/Marketing/Providers";
import { useParams, useRouter } from "next/navigation";
import { useCategoryBanner } from "@/src/context/CategoryBannerContext";
import { Banner, useBanner } from "@/src/context/CarouselBannerContext";
import SearchBar from "@/src/components/SearchBar/Search";

export default function MarketingHero() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { banners, loading, error, fetchBanners } = useCategoryBanner();
  const { getBannersByPage} = useBanner();
    const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();
  
     const { moduleId } = useParams<{ moduleId: string }>();

  const heroBanners = getBannersByPage("category").filter(
  (banner) =>
    banner.module &&
    banner.module._id === moduleId &&
    !banner.isDeleted
);

   
   
     console.log("MODULE ID IN CLIENT:", moduleId);

  useEffect(() => {
  const slider = scrollRef.current;
  if (!slider || !heroBanners.length) return;

  const interval = setInterval(() => {
    slider.scrollLeft += 1;

    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
      slider.scrollLeft = 0;
    }
  }, 20);

  return () => clearInterval(interval);
}, [heroBanners.length]);

  useEffect(() => {
  if (moduleId) {
    fetchBanners(moduleId);
  }
}, [moduleId]);


const handleBannerClick = (banner:Banner) => {
  

  if (banner.selectionType === "subcategory" && banner.subcategory?._id) {
    router.push(`/MainModules/Marketing/${moduleId}/${banner.subcategory?._id}`);
    return;
  }
};

if (loading) return null;

// if (!heroBanners.length) {
//   return (
//     <div className="text-center py-10 text-gray-500">
//       No banners available
//     </div>
//   );
// }

  return (
    <div className="">
      {/* ================= HERO SECTION ================= */}
      <section className="w-full relative bg-[#2A67F4] h-[360px] overflow-visible">

        {/* ---------- BACKGROUND IMAGE ---------- */}
        <div className="absolute inset-0 z-0">
          <Image
            src={banners[0]?.image}
            alt="Marketing Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#2A67F4]/20" />
        </div>

        {/* ---------- TOP BAR ---------- */}
        <div
          className="relative z-20 w-full 
                     px-4 sm:px-6 py-5
                     flex items-center justify-between
                     text-white bg-[#2164F4]"
        >
          <div className="flex items-center gap-4 max-w-[1440px] lg:mx-10">
            <Link href="/">
              <Home className="w-5 h-5" />
            </Link>

            <p className="text-sm font-medium opacity-90 hidden sm:block">
              Marketing Service
            </p>
          </div>

          <div className="flex items-center gap-8">
            {/* SEARCH */}
            <div className=" ">
              {/* <Search className="w-4 h-4 opacity-80" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none
                           placeholder:text-white/70
                           text-sm w-full"
              /> */}
               <SearchBar
                                value={searchQuery}
                                onChange={setSearchQuery}
                                placeholder="Search" 
                              />
            </div>
            
            <Link href="../../Account/favorite">
            <Bookmark className="w-8 h-8" />
            </Link>
          </div>
        </div>

        {/* ---------- HERO TEXT ---------- */}
        <div className="relative z-10 max-w-[1328px] h-[260px] mx-auto px-4 sm:px-6">
          <h1
            className="text-white text-center mt-10
                       text-[28px] sm:text-[32px]"
          >
            One Service That you need to stand out in market
          </h1>
        </div>


        {/* ================= OVERLAPPING CARD CAROUSEL ================= */}
        <section className="relative z-50 w-full -mt-[140px] pb-30">
          <div className="overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-10 w-max px-10"
            >
              {heroBanners.map((banner) => (
                <div key={banner._id}
                onClick={()=>handleBannerClick(banner)}>
                  <div className="
                    w-[300px] sm:w-[360px] lg:w-[480px]
                    h-[200px] sm:h-[240px] lg:h-[270px]
                    bg-black rounded-md overflow-hidden
                  ">
                    <img
                      src={banner.file}
                      alt={banner.page}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
          <CategoryModule/>
      <RecommendedForYou moduleId={moduleId} searchQuery={searchQuery}/>
      <MostlyUsed moduleId={moduleId} searchQuery={searchQuery}/>
    <TopTrending moduleId={moduleId} searchQuery={searchQuery}/>
    <WhyJustOurServices />
    <SuggestedProviders moduleId={moduleId}/>
    </div>
  );
}
