"use client";

import CategorySection from "@/src/components/Legal/CategorySection";
import LegalServiceSpotlight from "@/src/components/Legal/LegalServiceSpotlight";
import RecommendedSection from "@/src/components/Section/RecommendedSection";
import TopLegalServicesSection from "@/src/components/Section/TopLegalServicesSection";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Search,Bookmark } from "lucide-react";
import MostlyUsedService from "@/src/components/Legal/MostlyUsedService";
import TopTrending from "@/src/components/Legal/TopTrending";
import RecommendedForYou from "@/src/components/Legal/RecommendForYou";
import { useParams, useRouter } from "next/navigation";
import AllServices from "@/src/components/Legal/AllServices";
import { useCategoryBanner } from "@/src/context/CategoryBannerContext";
import { Banner, useBanner } from "@/src/context/CarouselBannerContext";
import SearchBar from "@/src/components/SearchBar/Search";

export default function LegalPageClient({ searchQuery,setSearchQuery }:any) {
const { banners, loading, error, fetchBanners } = useCategoryBanner();
const { getBannersByPage} = useBanner();
const router = useRouter();
const { moduleId } = useParams<{ moduleId: string }>();

const heroBanners = getBannersByPage("category").filter(
  (banner) =>
    banner.module &&
    banner.module._id === moduleId &&
    !banner.isDeleted
);


  console.log("MODULE ID IN CLIENT:", moduleId);

  const scrollRef = useRef<HTMLDivElement>(null);

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
    router.push(`/MainModules/Legal-Services/${moduleId}/${banner.subcategory?._id}`);
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
      <section className="flex justify-center">
      {/* NAVBAR */}
      <div
        className="
          w-full
          h-[60px]
          bg-[#F9F5EE]
          flex
          items-center
          justify-between
          px-10
        "
      >
        {/* LEFT SIDE */}
        <div className="flex items-center gap-6">
          {/* Home Icon */}
          <Link href="/">
          <img
            src="/image/Group 3.png"
            alt="Home Icon"
            className="text-#A3623A"
            style={{ width: "34.36px", height: "42.95px" }}
          />
          </Link>

          {/* Title */}
          <h1
            className="
              font-inter
              font-semibold
              text-[24px]
              leading-[36px]
              text-black
            "
            style={{ width: "157px", height: "36px" }}
          >
            Legal Service
          </h1>
        </div>
         
        <div className="flex items-center gap-8">
            {/* SEARCH */}
            <div className="">
              {/* <Search className="w-4 h-4 opacity-80" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none
                           placeholder:text-[#00000078]
                           text-sm w-full"
              /> */}
              <SearchBar
                                value={searchQuery}
                                onChange={setSearchQuery}
                                placeholder="Search" 
                              />
            </div>
            <Link href="../../Account/favorite">
            <Bookmark  className="w-8 h-8" color="#A3623A"/>
            </Link>
          </div>
      </div>
      </section>

      {/* Hero Section */}
   <section className="relative max-w-[1440px] mx-auto px-4 py-12 overflow-hidden">

  {/* BACKGROUND CARD */}
  <div className="relative w-full h-[260px] lg:h-[280px] rounded-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F9F5EE]" />

  {/* CONTENT WRAPPER */}
  <div className="absolute inset-0 flex items-center justify-between px-12">

    {/* LEFT TEXT */}
    <div className="max-w-[520px] -mt-15">
      <h1 className="text-[32px] font-semibold text-[#524225] mb-3">
        Legal Service
      </h1>
      <p className="text-[18px] text-[#414141] leading-relaxed">
        Get instant access to verified lawyers, legal advisors, and
        documentation experts—all in one place.
      </p>
    </div>

    {/* RIGHT IMAGE STACK */}
    <div className="relative w-[520px] h-[260px]">

      {/* BACK IMAGE */}
      <div className="absolute left-1/2 -translate-x-1/2 top-5 w-[226px] h-[140px] z-0">
        <Image
          src={banners[0]?.image}
          alt="back"
          fill
          className="object-cover rounded-[18px]"
        />
      </div>

      {/* LEFT IMAGE */}
      {/* <div className="absolute left-11 bottom-6 w-[100px] h-[160px] z-10">
        <Image
          src="/image/leftImage.jpg"
          alt="Left"
          fill
          className="object-cover rounded-[20px]"
        />
      </div> */}

      {/* RIGHT IMAGE */}
      {/* <div className="absolute right-11 bottom-6 w-[100px] h-[160px] z-10">
        <Image
          src="/image/rightimage.jpg"
          alt="Right"
          fill
          className="object-cover rounded-[20px]"
        />
      </div> */}

      {/* CENTER IMAGE */}
      {/* <div className="absolute left-1/2 -translate-x-1/2 top-1 w-[450px] h-[340px] z-20">
        <Image
          src="/image/centerImage.png"
          alt="Center"
          fill
          className="object-cover rounded-[28px]"
        />
      </div> */}

    </div>
  </div>
</section>



 <section className="relative z-10 w-full flex justify-center my-20 lg:my-10 px-4">
      <div className="w-full">

        {/* ================= CAROUSEL ================= */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="
              flex
              gap-8
              px-[12%]
              sm:px-[10%]
              lg:px-[8%]
              overflow-hidden
            "
          >
            {heroBanners.map((banner) => (
              <div
                key={banner._id}
                onClick={()=>handleBannerClick(banner)}
                className="
                  relative
                  snap-start
                  w-[505px]
                  h-[265px]
                  bg-[#D9D9D9]
                  overflow-hidden
                  flex-shrink-0
                "
              >
                <Image
                  src={banner.file}
                  alt={banner.page}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

      
<CategorySection />
{/* <AllServices moduleId={moduleId}/> */}
<RecommendedForYou moduleId={moduleId} searchQuery={searchQuery}/>
<MostlyUsedService moduleId={moduleId} searchQuery={searchQuery}/>
<TopTrending moduleId={moduleId} searchQuery={searchQuery}/>
<LegalServiceSpotlight />

    </div>
  );
}



