'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import RecommendedProvider from '@/src/components/OnDemandHomeComponents/RecommendedProvider';
import MostPopularProvider from '@/src/components/OnDemandHomeComponents/MostPopularProvider';
import TopTrending from '@/src/components/OnDemandHomeComponents/TopTrending';
import WhyChooseUs from '@/src/components/OnDemandHomeComponents/WhyChooseUs';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useModule } from '@/src/context/CategoriesContext';
import SearchBar from '@/src/components/SearchBar/Search';
import OnDemandService from '@/src/components/OnDemandServiceComponents/OnDemandService';

export default function OnDemandModulePage() {

    const sliderRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const {
        categories, loading, error, fetchCategoriesByModule
    } = useModule();


    const params = useParams();
    const moduleId = params.moduleId as string;

    useEffect(() => {
        if (!moduleId) return;

        fetchCategoriesByModule(moduleId);
    }, [moduleId]);

    const chunkArray = <T,>(arr: T[], size: number): T[][] => {
        const chunks: T[][] = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    };



    const slides = chunkArray(categories, 9);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = sliderRef.current.offsetWidth;
        }
    }, []);

    const scrollRef = useRef<HTMLDivElement>(null);

    const isDownRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);


    const onMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;

        isDownRef.current = true;
        startXRef.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeftRef.current = scrollRef.current.scrollLeft;
    };

    const onMouseLeave = () => {
        isDownRef.current = false;
    };

    const onMouseUp = () => {
        isDownRef.current = false;
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDownRef.current || !scrollRef.current) return;

        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startXRef.current) * 1.5;
        scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
    };


    if (loading) return (
        <div className="flex items-center justify-center min-h-[200px]">
            <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
    );
    if (error) return <p>{error}</p>;



    return (
        <>
            {/*  HERO SECTION  */}
            <section
                className="relative hidden md:hidden lg:block w-screen lg:h-[662px]"
                style={{
                    backgroundImage: 'url("/image/OnDemandnavbg1.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                
                <div className="absolute inset-0 ">
                    <div className="relative h-[700px] max-w-8xl">
                        <img
                            src="/image/OnDemandnavbg4.png"
                            alt="Navbar Background"
                            className="w-full h-full object-fit"
                        />

                        <div className="absolute inset-0 mt-65 ml-18 text-[32px]">
                            On-Demand Services, <br />
                            When You Need Them

                            <div className="text-[16px] w-[350px]">
                                Book trusted professionals instantly. Fast response, transparent pricing, stress-free service.
                            </div>
                        </div>

                        <div className='absolute inset-0 flex -ml-30'>
                            <img src='/image/OnDemandgroupimage.png' alt="group image" className='object-contain ml-auto w-[580px] h-[500px] p-6 mt-40 mr-30' />
                        </div>



                        {/* NAV CONTENT */}
                        <div className="absolute inset-0 flex items-start p-12">
                            <div className="flex items-center justify-between p-4 w-full">
                                {/* LEFT */}
                                <div className="flex items-center gap-3 lg:gap-5">
                                    <Link href="/">
                                        <img
                                            src="/image/OnDemandnavhome.png"
                                            className="w-[26px] h-[30px] lg:w-[38px] lg:h-[42px] bg-white rounded-full cursor-pointer"
                                            alt="Home"
                                        />
                                    </Link>
                                    <h1 className="text-[18px] lg:text-[24px] font-semibold">
                                        On Demand Service
                                    </h1>
                                </div>

                                {/* RIGHT */}
                                <div className="flex gap-6">
                                    <div className="relative w-[220px] md:w-[330px] lg:w-[520px]">
                                        <SearchBar
                                            value={searchQuery}
                                            onChange={setSearchQuery}
                                            placeholder="Search"
                                        />
                                    </div>

                                    <div className="bg-white rounded-full p-2 flex items-center justify-center">
                                        <img
                                            src="/image/educationbookmark.png"
                                            className="w-[18px] h-[22px] lg:w-[18px] lg:h-[20px]"
                                            alt="Bookmark"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/*  NAVBAR MOBILE  */}
            <section>
                <div
                    className="
                                block md:block lg:hidden
                                w-full -mt-6 w-screen  md:-mt-12
                                bg-[#F6E9E5]
                                flex flex-col
                                px-4 py-8 md:px-10 md:py-10
                                rounded-t
                                gap-3
                            "
                >
                    {/* ROW 1: HEADER  */}
                    <div className="flex items-center justify-between">
                        {/* LEFT */}
                        <div className="flex items-center gap-3 p-8 min-w-0">
                            <Link href="/MainModules/OnDemand">
                                <ChevronLeft className="w-[28px] h-[28px] text-black cursor-pointer bg-white rounded-full p-1 shrink-0" />
                            </Link>

                            <h1 className="text-[16px] font-semibold truncate">
                                 On Demand Service
                            </h1>
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full shrink-0">
                            <img
                                src="/image/educationbookmark.png"
                                className="w-[14px] h-[14px]"
                                alt="Bookmark"
                            />
                        </div>
                    </div>

                    {/*  ROW 2: SEARCH  */}
                    <div className="relative w-[90%] md:w-[95%] mx-auto ml-6">
                        <SearchBar
                            value={searchQuery}
                            onChange={setSearchQuery}
                            placeholder="Search"
                        />
                     
                    </div>
                </div>
            </section>

            <div className="mt-5 block md:block lg:hidden">
                <img src="/image/OnDemandnavimage.png" alt="Finance Banner" className="w-[95%] mx-auto h-auto rounded-lg" />
            </div>

            <div className="flex flex-nowrap items-center justify-between p-4 lg:hidden md:flex">
                <div className="min-w-0">
                    <h1 className="text-[20px] font-semibold truncate">
                        On-Demand Services
                    </h1>
                    <p className="text-[16px] text-gray-600 truncate">
                        Book trusted professionals anytime, anywhere
                    </p>
                </div>

                <img
                    src="/image/OnDemandShock.png"
                    alt="On-Demand Services"
                    className="w-[100px] h-[100px] object-contain shrink-0"
                />
            </div>


            {/*  CATEGORY  */}
            <section className="relative w-full mt-10 p-4 lg:p-22 mb-8">
                <h1 className="text-[16px] md:text-[24px] lg:text-[32px] font-semibold mb-5">
                    Category
                </h1>

                {/* DESKTOP */}
                <div
                    ref={scrollRef}
                    className="
                        hidden md:flex
                        overflow-x-auto
                        scrollbar-hide
                        cursor-pointer active:cursor-grabbing
                        select-none
                    "
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                >
                    <div
                        className="hidden md:grid md:grid-cols-4
                                lg:flex lg:flex-wrap
                                gap-5
                                rounded-lg
                                "
                    >

                        {categories.map((item, index) => (
                            <div
                                key={index}
                                onClick={() =>
                                    router.push(`/MainModules/On-Demand/${moduleId}/categories/${item._id}?categoryName=${encodeURIComponent(item.name)}`)
                                }
                                className="flex flex-col items-center"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-[133px] h-[143px] object-contain p-3 bg-[#FFF6EF] rounded-lg"
                                />

                                <span
                                    className="
                                    mt-2
                                    w-[170px]
                                    text-[20px]
                                    font-regualr
                                    cursor-pointer
                                    text-center
                                    leading-tight
                                    whitespace-normal
                                    break-words
                                "
                                >
                                    {item.name}
                                </span>


                            </div>
                        ))}
                    </div>
                </div>

                {/* MOBILE */}
                <div
                    ref={sliderRef}
                    className="md:hidden flex overflow-x-scroll snap-x snap-mandatory scroll-smooth"
                >
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} className="min-w-full snap-center px-4">
                            <div className="grid grid-cols-3 grid-rows-3 gap-4">
                                {slide.map((item, i) => (
                                    <div
                                        key={i}
                                        onClick={() =>
                                            router.push(`/MainModules/On-Demand/${moduleId}/${item._id}?categoryName=${encodeURIComponent(item.name)}`)
                                        }
                                        className="flex flex-col items-center"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-[73px] h-[73px] object-contain bg-[#FFF6EF] rounded-lg p-2"
                                        />
                                        <span className="mt-2 text-[12px] font-medium text-center">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= OTHER SECTIONS ================= */}
            <section className="relative w-full">
                <RecommendedProvider moduleId={moduleId} searchQuery={searchQuery} />
                <MostPopularProvider moduleId={moduleId} searchQuery={searchQuery} />
                <TopTrending moduleId={moduleId} searchQuery={searchQuery} />
                <WhyChooseUs moduleId={moduleId} />
                <OnDemandService searchQuery={searchQuery}/>
            </section>
        </>
    );
}


