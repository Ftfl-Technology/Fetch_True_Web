'use client';

import Recommendation from '@/src/components/Education/Recommended';
import TopPicks from '@/src/components/Education/TopTrending';
import MostPopular from '@/src/components/Education/MostPopular';
import { useState, useRef, useEffect } from 'react';
import WhyChooseUs from '@/src/components/Education/WhyChooseUs';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { BookmarkIcon, ChevronLeft, ChevronRight } from 'lucide-react';

import { useModule } from '@/src/context/CategoriesContext';
import { useBannerCategorySelection } from "@/src/context/BannerContext"
import SearchBar from '@/src/components/SearchBar/Search';
import { useCategoryBanner } from "@/src/context/CategoryBannerContext";
import { Banner, useBanner } from "@/src/context/CarouselBannerContext";


export default function EducationModulePage() {

  const router = useRouter();
  const params = useParams();

  const moduleId = params.moduleId as string;

  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const { categories, loading, fetchCategoriesByModule } = useModule();
  const { fetchBannerCategorySelections } = useBannerCategorySelection();
  const { fetchBanners } = useCategoryBanner();
  const { getBannersByPage } = useBanner();


  /* ================= FETCH DATA ================= */

  useEffect(() => {

    if (!moduleId) return;

    fetchCategoriesByModule(moduleId);
    fetchBannerCategorySelections(moduleId);
    fetchBanners(moduleId);

  }, [moduleId]);


  /* ================= HERO BANNERS ================= */

  const heroBanners = getBannersByPage("category").filter(

    (banner) =>
      banner.module &&
      banner.module._id === moduleId &&
      !banner.isDeleted

  );


  /* ================= AUTO SLIDE ================= */

  useEffect(() => {

    if (!heroBanners.length) return;

    const interval = setInterval(() => {

      setActiveIndex((prev) =>
        prev === heroBanners.length - 1
          ? 0
          : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, [heroBanners.length]);


  /* ================= MOBILE CATEGORY SLIDER ================= */

  const chunkArray = <T,>(arr: T[], size: number): T[][] => {

    const chunks: T[][] = [];

    for (let i = 0; i < arr.length; i += size) {

      chunks.push(arr.slice(i, i + size));

    }

    return chunks;

  };

  const slides = chunkArray(categories, 8);


  /* ================= BANNER CLICK ================= */

  const handleBannerClick = (banner: Banner) => {

    if (banner.selectionType === "subcategory" && banner.subcategory?._id) {

      router.push(`/MainModules/Marketing/${moduleId}/${banner.subcategory._id}`);

    }

  };


  if (loading) return null;



  return (

    <>

      {/* ================= NAVBAR ================= */}

      <section className="hidden lg:block w-full">

        <div className="bg-[#E2E9F1] flex items-center justify-between p-6">

          <div className="flex items-center gap-4 ml-10">

            <Link href="/">

              <img
                src="/image/it-service-subcategories-home.png"
                className="w-[30px]"
              />

            </Link>

            <h1 className="text-2xl font-semibold">
              Education Service
            </h1>

          </div>


          <div className="flex items-center gap-4 mr-10">

            <div className="relative w-[307px]">

              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search"
              />

              <span className="absolute left-3 top-1/2 -translate-y-1/2">

                <img
                  src="/image/itsearch.png"
                  className="w-[18px]"
                />

              </span>

            </div>


            <Link href="/Account/MyAccount?section=Favorite">

              <BookmarkIcon className="w-8 h-8 text-[#2818A3]" />

            </Link>

          </div>

        </div>

      </section>



      {/* ================= MOBILE NAVBAR ================= */}

      <section className="lg:hidden bg-[#E2E9F1] py-4">

        <div className="flex justify-between items-center px-6">

          <div className="flex items-center gap-3">

            <Link href="/">

              <img
                src="/image/it-service-subcategories-home.png"
                className="w-[28px]"
              />

            </Link>

            <h1 className="font-semibold text-[16px]">
              Education Service
            </h1>

          </div>


          <Link href="/Account/MyAccount?section=Favorite">

            <BookmarkIcon className="w-7 h-7 text-[#2818A3]" />

          </Link>

        </div>


        <div className="px-6 mt-4">

          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search"
          />

        </div>

      </section>



      {/* ================= HERO CAROUSEL ================= */}

      <section className="relative mt-10">

        <div className="relative overflow-hidden max-w-[1440px] mx-auto">

          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`
            }}
          >

            {heroBanners.map((banner) => (

              <div
                key={banner._id}
                className="min-w-full flex justify-center px-4"
                onClick={() => handleBannerClick(banner)}
              >

                <div
                  className="
                  w-full
                  sm:w-[85%]
                  h-[180px]
                  sm:h-[240px]
                  lg:h-[300px]
                  rounded-xl
                  overflow-hidden
                  shadow-md
                  cursor-pointer
                "
                >

                  <img
                    src={banner.file}
                    className="w-full h-full object-cover"
                  />

                </div>

              </div>

            ))}

          </div>



         



          {/* DOTS */}

          <div className="flex justify-center gap-2 mt-4">

            {heroBanners.map((_, index) => (

              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-[4px] rounded-full cursor-pointer transition-all ${
                  activeIndex === index
                    ? "w-8 bg-[#FA9131]"
                    : "w-4 bg-gray-300"
                }`}
              />

            ))}

          </div>

        </div>

      </section>



      {/* ================= CATEGORY GRID ================= */}

  <section className="bg-[#F8F9FA] py-10">

  <div className="max-w-[1440px] mx-auto px-4 md:px-6">

    <h1 className="text-[18px] md:text-[24px] font-semibold mb-6">
      Category
    </h1>


    {/* ================= FIRST 3 ROW GRID (ALL SCREENS) ================= */}

    <div className="
      grid
      grid-cols-3
      sm:grid-cols-3
      md:grid-cols-4
      lg:grid-cols-6
      gap-3 md:gap-4
    ">

      {categories.slice(0, 18).map((item) => (

        <div
          key={item._id}
          onClick={() =>
            router.push(`/MainModules/Education/${moduleId}/${item._id}`)
          }
          className="
            flex flex-col items-center
            bg-white
            px-2 py-2
            rounded-lg
            border border-gray-100
            hover:shadow-md
            transition
            cursor-pointer
          "
        >

          <img
            src={item.image}
            alt={item.name}
            className="
              w-[90px]
              h-[80px]
              sm:w-[110px]
              sm:h-[100px]
              md:w-[130px]
              md:h-[110px]
              object-contain
            "
          />

          <span className="
            text-[11px]
            sm:text-[12px]
            md:text-[13px]
            font-semibold
            text-center
            leading-tight
          ">
            {item.name}
          </span>

        </div>

      ))}

    </div>



    {/* ================= REMAINING CATEGORY SLIDER ================= */}

    {categories.length > 18 && (

      <div className="
        mt-6
        flex
        gap-3
        overflow-x-auto
        pb-2
        no-scrollbar
        scroll-smooth
      ">

        {categories.slice(18).map((item) => (

          <div
            key={item._id}
            onClick={() =>
              router.push(`/MainModules/Education/${moduleId}/${item._id}`)
            }
            className="
              min-w-[110px]
              sm:min-w-[140px]
              flex flex-col items-center
              bg-white
              px-2 py-2
              rounded-lg
              border border-gray-100
              hover:shadow-md
              transition
              cursor-pointer
            "
          >

            <img
              src={item.image}
              alt={item.name}
              className="
                w-[90px]
                h-[80px]
                sm:w-[110px]
                sm:h-[100px]
                object-contain
              "
            />

            <span className="
              text-[11px]
              sm:text-[12px]
              font-semibold
              text-center
            ">
              {item.name}
            </span>

          </div>

        ))}

      </div>

    )}

  </div>

</section>



      {/* ================= CONTENT SECTIONS ================= */}

      <section className="bg-[#F8F9FA]">

        <Recommendation moduleId={moduleId} searchQuery={searchQuery} />

        <MostPopular moduleId={moduleId} searchQuery={searchQuery} />

        <TopPicks moduleId={moduleId} searchQuery={searchQuery} />

        <WhyChooseUs moduleId={moduleId} />

      </section>

    </>

  );

}