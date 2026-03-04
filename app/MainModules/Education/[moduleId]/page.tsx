'use client';


import Recommendation from '@/src/components/Education/Recommended';
import TopPicks from '@/src/components/Education/TopTrending';
import MostPopular from '@/src/components/Education/MostPopular';
import { useState, useRef, useEffect } from 'react';
import WhyChooseUs from '@/src/components/Education/WhyChooseUs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useModule } from '@/src/context/CategoriesContext';
import { useBannerCategorySelection } from "@/src/context/BannerContext"
import SearchBar from '@/src/components/SearchBar/Search';

type BannerCategorySelection = {
    _id: string;
    file: string;
    page: string;
    selectionType: string;
    screenCategory: string;
    module: {
        _id: string;
        name: string;
    };
    subcategory?: {
        _id: string;
        name: string;
    };
};



export default function EducationModulePage() {


    const sliderRef = useRef<HTMLDivElement>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const { categories, loading, error, fetchCategoriesByModule } = useModule();
    const { data, fetchBannerCategorySelections } = useBannerCategorySelection();

    const BannerData =
        data?.map((item: BannerCategorySelection, index: number) => ({
            label: `Image ${index + 1}`,
            path: item.file,
        })) || [];



    const router = useRouter();
    const params = useParams();


    const moduleId = params.moduleId as string;

    useEffect(() => {
        if (!moduleId) return;

        fetchCategoriesByModule(moduleId);
        fetchBannerCategorySelections(moduleId)
    }, [moduleId]);

    const chunkArray = <T,>(arr: T[], size: number): T[][] => {
        const chunks: T[][] = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    };

    const slides = chunkArray(categories, 8); // adjust count if needed

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = sliderRef.current.offsetWidth;
        }
    }, []);



    const toSlug = (text: string) =>
        text.toLowerCase().trim().replace(/\s+/g, "-");

    const bannerRef = useRef<HTMLDivElement>(null);
    const [bannerIndex, setBannerIndex] = useState(0);

    const banners = [...BannerData, ...BannerData];

    useEffect(() => {
        const interval = setInterval(() => {
            setBannerIndex((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!bannerRef.current) return;

        bannerRef.current.style.transition = "transform 0.7s ease-in-out";
        bannerRef.current.style.transform = `translateX(-${bannerIndex * 50}%)`;

        // RESET WITHOUT WHITE GAP
        if (bannerIndex === BannerData.length) {
            setTimeout(() => {
                if (!bannerRef.current) return;

                bannerRef.current.style.transition = "none";
                bannerRef.current.style.transform = "translateX(0%)";
                setBannerIndex(0);
            }, 700);
        }
    }, [bannerIndex]);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // lg breakpoint
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const CARD_WIDTH = isMobile
        ? window.innerWidth
        : 665;


    if (loading) {
        return (
            <div className="lg:w-[1400px] mx-auto p-6 animate-pulse">

                {/* Title Skeleton */}
                <div className="h-8 w-64 bg-gray-200 rounded-md mb-6" />

                {/* Tabs Skeleton */}
                <div className="flex gap-3 mb-8">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            className="h-10 w-28 bg-gray-200 rounded-full"
                        />
                    ))}
                </div>

                {/* Content Cards Skeleton */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className="h-48 bg-gray-200 rounded-xl"
                        />
                    ))}
                </div>

            </div>
        );
    }

    if (error) return <p>{error}</p>;

    return (
        <>
            <section className="relative w-full">
                {/* ===== NAVBAR ===== */}
                <div className="hidden md:hidden lg:block w-screen">
                    <div className="bg-[#E2E9F1] flex items-center justify-between p-6 rounded-xl">
                        <div className="flex items-center gap-4 ml-10">
                            <Link href="/">
                                <img src="/image/it-service-subcategories-home.png" className="w-[30px] cursor-pointer" />
                            </Link>
                            <h1 className="text-lg md:text-2xl font-semibold">Education Service</h1>
                        </div>

                        {/* SEARCH */}
                        <div className="flex items-center gap-4 mr-10">
                            {/* SEARCH */}
                            <div className="hidden md:block relative w-[260px] lg:w-[307px]">
                                {/* <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="
                                                      w-full
                                                      rounded-lg bg-white
                                                      border border-gray-300
                                                      px-10 py-2
                                                      text-sm
                                                      outline-none
                                                      focus:border-blue-500
                                                  "
                                /> */}
                                <SearchBar
                                    value={searchQuery}
                                    onChange={setSearchQuery}
                                    placeholder="Search"
                                />

                                {/* search icon */}
                                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                                    <img
                                        src="/image/itsearch.png"
                                        alt="searchicon"
                                        className="w-[18px] h-[18px]"
                                    />
                                </span>
                            </div>

                            {/* BOOKMARK / LOCATION ICON */}
                            <img
                                src="/image/EducationServicebookmark.png"
                                className="w-[20px] cursor-pointer"
                            />
                        </div>


                    </div>

                </div>
            </section>

            {/* ================= NAVBAR MOBILE ================= */}
            <section>
                <div
                    className="
                                block md:block lg:hidden
                                w-full -mt-6 w-screen md:-mx-0 md:-mt-12
                                bg-[#E2E9F1]
                                flex flex-col
                                px-4 py-8 md:px-10 md:py-10
                                rounded-t
                                gap-3
                            "
                >
                    {/* ===== ROW 1: HEADER ===== */}
                    <div className="flex items-center justify-between">
                        {/* LEFT */}
                        <div className="flex items-center gap-3 p-8 min-w-0">
                            <Link href={`/MainModules/Education/${moduleId}`}>
                                <ChevronLeft className="w-[28px] h-[28px] text-black cursor-pointer bg-white rounded-full p-1 shrink-0 -ml-2" />
                            </Link>

                            <h1 className="text-[16px] font-semibold truncate">
                                {/* {formatSlugToTitle(slug)} */} Education Service
                            </h1>
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full shrink-0">
                            <img
                                src="/image/EducationServicebookmark.png"
                                className="w-[14px] h-[14px]"
                                alt="Bookmark"
                            />
                        </div>
                    </div>

                    {/* ===== ROW 2: SEARCH ===== */}
                    <div className="relative w-[90%] md:w-[95%] mx-auto ml-6">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-full bg-white border border-gray-300 px-10 py-2 text-sm outline-none"
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2">
                            <img
                                src="/image/itsearch.png"
                                className="w-[18px] h-[16px]"
                                alt="Search"
                            />
                        </span>
                    </div>
                </div>
            </section>


            <section className="relative w-full mt-10 md:mt-20 px-5 md:px-8">



                {/* ================= DESKTOP LAYOUT ================= */}
                <div className="hidden md:flex w-full justify-center mb-10">
                    <div className="w-full max-w-6xl text-center">
                        <p className="font-semibold text-[32px] text-[#1C3D85] leading-tight">
                            Empowering Learners. Connecting You to <br /> Trusted Education Services.
                        </p>

                        <p className="lg:text-[24px] mt-6 leading-snug">
                            Find the right courses, tutors,
                            institutes, skills programs, and
                            educational support —
                        </p>
                    </div>
                </div>


                <div className="w-full overflow-hidden">
                    <div
                        ref={bannerRef}
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${bannerIndex * CARD_WIDTH}px)`
                        }}
                    >
                        {banners.map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 px-2"
                                style={{
                                    width: isMobile ? "100vw" : "649px"
                                }}
                            >
                                <img
                                    src={item.path}
                                    alt={item.label}
                                    className={`
            object-cover rounded-2xl
            w-full
            h-[180px] md:h-[265px]
          `}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </section>


            <section className="relative w-full mt-2 p-22 bg-[#F8F9FA]">
                <h1 className="text-[18px] font-semibold md:text-[24px] mb-5 -ml-18 md:-ml-0">Category</h1>

                {/* ================= DESKTOP ================= */}
                <div
                    className="hidden md:grid md:grid-cols-4
                                lg:flex lg:flex-wrap
                                gap-10
                                rounded-lg
                                "
                >

                    {categories.map((item, index) => (
                        <div
                            key={index}
                            onClick={() =>
                                // router.push(`/MainModules/Education/${moduleId}/${toSlug(item.name)}`)
                                router.push(`/MainModules/Education/${moduleId}/${item._id}`)
                            }
                            className="flex flex-col items-center p-3 bg-white rounded-lg cursor-pointer"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-[170px] h-[150px] object-contain"
                            />

                            <span className="-mt-8 text-[12px] font-semibold text-center leading-tight break-words">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>



                {/* ================= MOBILE CATEGORY SWIPE ================= */}
                <section className="md:hidden w-[300px] -ml-18 mt-6">
                    <div
                        ref={sliderRef}
                        className="flex overflow-x-scroll snap-x snap-mandatory no-scrollbar scroll-smooth"
                        onScroll={() => {
                            const el = sliderRef.current;
                            if (!el) return;

                            const slideWidth = el.offsetWidth;
                            const index = Math.round(el.scrollLeft / slideWidth);
                            setActiveIndex(index);
                        }}
                    >
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                className="min-w-full snap-center px-4"
                            >
                                <div className="grid grid-cols-3 gap-4">
                                    {slide.map((item, i) => (
                                        <div
                                            key={i}
                                            onClick={() =>
                                                router.push(`/MainModules/Education/${toSlug(item.name)}`)
                                            }
                                            className="flex flex-col items-center bg-gray-100 rounded-lg p-4"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-[93px] h-[93px] object-cover"
                                            />
                                            <span className="-mt-5 text-[8px] text-center">
                                                {item.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* INDICATORS */}
                    <div className="flex justify-center gap-2 mt-4">
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                className={`h-[3px] rounded-full transition-all duration-300 ${activeIndex === i
                                    ? "w-8 bg-[#FA9131]"
                                    : "w-4 bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </section>



            </section>

            <section className='relative w-full bg-[#F8F9FA]'>
                <Recommendation moduleId={moduleId} searchQuery={searchQuery}/>
                <MostPopular moduleId={moduleId} searchQuery={searchQuery}/>
                <TopPicks moduleId={moduleId} searchQuery={searchQuery}/>
                <WhyChooseUs moduleId={moduleId} />
            </section>

        </>
    )
}
