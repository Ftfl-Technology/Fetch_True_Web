// 'use client';

// import HighInDemand from '@/src/components/ITModules/HighInDemand';
// import MostlyUsed from '@/src/components/ITModules/MostlyUsed';
// import Recommendation from '@/src/components/ITModules/Recommendation';
// import WhyChooseUs from '@/src/components/ITModules/WhyChooseUs';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// export default function ITModulesPage() {

//     const categories = [{ label: "Cyber Security", path: "/image/cybersecurity.png" },
//     { label: "IT Consulting", path: "/image/itconsulting.png" },
//     { label: "Web Development", path: "/image/webdevelopment.png" },
//     { label: "App Development", path: "/image/appdevelopment.png" },]

// const [selectedRange, setSelectedRange] = useState("all");
// const [selectedCategory, setSelectedCategory] = useState("all");
// const [searchQuery, setSearchQuery] = useState("");

//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prev) =>
//                 prev === BannerData.length - 2 ? 0 : prev + 1
//             );
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     const valueRange = [
//         { label: "All", value: "all" },
//         { label: "300", value: "0-300" },
//         { label: "300-400 Rs", value: "300-400" },
//         { label: "400-600 Rs", value: "400-600" },
//         { label: "600-800 Rs", value: "600-800" },
//         { label: "800-1000 Rs", value: "800-1000" },
//     ];

//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         const checkScreen = () => {
//             setIsMobile(window.innerWidth < 768);
//         };

//         checkScreen();
//         window.addEventListener("resize", checkScreen);

//         return () => window.removeEventListener("resize", checkScreen);
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prev) => {
//                 if (isMobile) {
//                     return prev >= BannerData.length - 1 ? 0 : prev + 1;
//                 } else {
//                     return prev >= BannerData.length - 2 ? 0 : prev + 2;
//                 }
//             });
//         }, 3000);

//         return () => clearInterval(interval);
//     }, [isMobile]);



//     const BannerData = [
//         { title: "Smart IT Services", subTitle: "From daily tech support to advanced digital transformation", bgpath: "/image/ITModulebg.png", path: "/image/decode.png" },
//         { title: "Smart IT Services", subTitle: "From daily tech support to advanced digital transformation", bgpath: "/image/ITModulebg.png", path: "/image/decode.png" },
//         { title: "Smart IT Services", subTitle: "From daily tech support to advanced digital transformation", bgpath: "/image/ITModulebg.png", path: "/image/decode.png" },
//         { title: "Smart IT Services", subTitle: "From daily tech support to advanced digital transformation", bgpath: "/image/ITModulebg.png", path: "/image/decode.png" },
//     ];

//     type CategoryBgProps = {
//         active: boolean;
//     };

//     const CategoryBg: React.FC<CategoryBgProps> = ({ active }) => (
//         <svg
//             viewBox="0 0 300 80"
//             preserveAspectRatio="none"
//             className="absolute inset-0 w-full h-full pointer-events-none"
//         >
//             <path
//                 d="
//         M 20 0
//         H 280
//         L 300 0
//         V 30
//         Q 300 80 230 80
//         H 0
//         V 20
//         Q 0 0 20 0
//         Z
//       "
//                 fill={active ? '#000000' : '#E9EEF5'}
//             />
//         </svg>
//     );

//     const router = useRouter();
//     const toSlug = (text: string) =>
//         text.toLowerCase().replace(/\s+/g, "-");


//     return (
//         <>
//             <section className="relative w-full">
//                 {/* ===== NAVBAR ===== */}
//                 <div className="w-full px-4 md:px-8 mt-4 md:mt-10">
//                     <div className="bg-[#E2E9F1] flex items-center justify-between p-4 rounded-xl w-full">
//                         {/* LEFT */}
//                         <div className="flex items-center gap-3 lg:gap-5">
//                             <img
//                                 src="/image/Group 2.png"
//                                 className="w-[26px] h-[30px] lg:w-[36px] lg:h-[45px]"
//                                 alt="Home"
//                             />

//                             <Link href="/" >
//                                 <img
//                                     src="/image/Vector (1).png"
//                                     className="w-[16px] h-[14px] lg:w-[22px] lg:h-[20px]"
//                                     alt="Back"
//                                 />
//                             </Link>

//                             <h1 className="text-[18px] lg:text-[24px] font-semibold text-[#000000] ">
//                                 IT Services
//                             </h1>
//                         </div>

//                         {/* RIGHT */}
//                         <img
//                             src="/image/Vector (2).png"
//                             className="w-[18px] h-[22px]"
//                             alt="Bookmark"
//                         />
//                     </div>
//                 </div>

//                 {/* ===== HERO / BELOW CONTENT (SAME WIDTH) ===== */}
//                 <div className="w-full px-4 md:px-8 mt-20 overflow-hidden">
//                     <div className="relative w-full">
//                         <div
//                             className="flex transition-transform duration-700 ease-in-out"
//                             style={{
//                                 transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)`,
//                             }}
//                         >
//                             {BannerData.map((item, index) => (
//                                 <div
//                                     key={index}
//                                     className="w-full md:w-[50%] shrink-0 px-2 md:px-3"
//                                 >
//                                     <div className="relative h-[350px] rounded-2xl overflow-hidden">
//                                         {/* Background */}
//                                         <img
//                                             src={item.bgpath}
//                                             alt="ITModulebg"
//                                             className="w-full h-[200px] md:h-[317px] object-cover rounded-2xl"
//                                         />

//                                         {/* Content */}
//                                         <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
//                                             <div>
//                                                 <h2 className="text-[18px] md:text-[32px] font-semibold text-[#42566D]">
//                                                     {item.title}
//                                                 </h2>

//                                                 <p className="mt-2 text-[14px] md:text-[24px] text-[#5A5A5A] max-w-md">
//                                                     {item.subTitle}
//                                                 </p>
//                                             </div>

//                                             <h1 className="text-[40px] md:text-[61px] mx-auto font-bold text-white opacity-80 whitespace-nowrap">
//                                                 IT SERVICES
//                                             </h1>

//                                             <img
//                                                 src={item.path}
//                                                 alt="Service"
//                                                 className="absolute bottom-28 right-18 md:right-16 w-[120px] md:w-[219px] object-contain"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>






//                 {/* ================= SEARCH ACCORDING TO YOU ================= */}
//                 <div className="w-full px-4 md:px-8 mt-5">
//                     {/* Header Row */}
//                     <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">

//                         <h2 className="text-xl md:text-3xl font-semibold mb-4">
//                             Search According to you
//                         </h2>


//                         {/* Search Box */}
//                         <div className="relative w-full md:w-[320px]">
//                             <input
//                                 type="text"
//                                 placeholder="Search"
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}

//                                 className="
//                                 w-full
//                                 rounded-full
//                                 border border-gray-300
//                                 px-10 py-2
//                                 text-sm
//                                 outline-none
//                                 focus:border-blue-500
//                                 "
//                             />
//                             {/* search icon */}
//                             <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                                 <img src="/image/itsearch.png" alt="searchicon" className='w-[20.66px] h-[20.66px]' />
//                             </span>
//                         </div>

//                     </div>





//                     {/* ===== SEARCH & FILTER ===== */}
//                     <div className="w-full px-4 md:px-8 mt-12">

//                         {/* FILTER PILLS */}
//                         <div className="mt-6 flex gap-3 overflow-x-auto no-scrollbar">
//                             {valueRange.map((item) => (
//                                 <button
//                                     key={item.value}
//                                     onClick={() => setSelectedRange(item.value)}
//                                     className={`
//                                     whitespace-nowrap rounded-full px-5 py-2 text-sm border transition
//                                     ${selectedRange === item.value
//                                             ? "bg-black text-white border-black"
//                                             : "bg-white text-black border-black"}
//                                       `}
//                                 >
//                                     {item.label}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>


//                     {/* CATEGORY */}
//                     <div className="mt-10">
//                         <h2 className="text-xl md:text-3xl font-semibold mb-4">
//                             Category
//                         </h2>

//                         {/* <div className="flex gap-4 overflow-x-auto no-scrollbar">
//                             {categories.map((cat, index) => {
//                                 const active = selectedCategory === cat.label;

//                                 return (
//                                     <button
//                                         key={index}
//                                         onClick={() => setSelectedCategory(cat.label)}
//                                         className="relative min-w-[200px] h-[60px]"
//                                     >
//                                         <CategoryBg active={active} />

//                                         <div className="relative z-10 flex items-center justify-between px-4">
//                                             <span
//                                                 className={`text-sm font-medium ${active ? "text-white" : "text-black"
//                                                     }`}
//                                                      onClick={() =>
//                                 router.push(`/MainModules/ITService/${toSlug(cat.label)}`)
//                             }
//                                              >
//                                                 {cat.label}
//                                             </span>

//                                             <img
//                                                 src={cat.path}
//                                                 alt="categoryicon"
//                                                 className="w-6 h-6"
//                                             />
//                                         </div>
//                                     </button>
//                                 );
//                             })}
//                         </div> */}
//                         <div className="flex gap-4 overflow-x-auto no-scrollbar">
//                             {categories.map((cat, index) => {
//                                 return (
//                                     <button
//                                         key={index}
//                                         onClick={() =>
//                                             router.push(`/MainModules/ITService/${toSlug(cat.label)}`)
//                                         }
//                                         className="relative min-w-[200px] h-[60px] cursor-pointer"
//                                     >
//                                         {/* background (inactive always, since no filter here) */}
//                                         <CategoryBg active={false} />

//                                         <div className="relative z-10 flex items-center justify-between px-4">
//                                             <span className="text-sm font-medium text-black">
//                                                 {cat.label}
//                                             </span>

//                                             <img
//                                                 src={cat.path}
//                                                 alt="categoryicon"
//                                                 className="w-6 h-6"
//                                             />
//                                         </div>
//                                     </button>
//                                 );
//                             })}
//                         </div>

//                     </div>


//                 </div>

//             </section>

// <section className="w-full mt-6 md:mt-10">
//     <Recommendation selectedRange={selectedRange} selectedCategory={selectedCategory} searchQuery={searchQuery} />
//     <MostlyUsed selectedRange={selectedRange} selectedCategory={selectedCategory} searchQuery={searchQuery} />
//     <HighInDemand selectedRange={selectedRange} selectedCategory={selectedCategory} searchQuery={searchQuery} />
//     <WhyChooseUs />
// </section>
//         </>
//     );
// }






'use client';

import HighInDemand from '@/src/components/ITModules/HighInDemand';
import MostlyUsed from '@/src/components/ITModules/MostlyUsed';
import Recommendation from '@/src/components/ITModules/Recommendation';
import WhyChooseUs from '@/src/components/ITModules/WhyChooseUs';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
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


export default function ITModulesPage() {
    const router = useRouter();
    const { categories, loading, error, fetchCategoriesByModule } = useModule();
    const { data, fetchBannerCategorySelections } = useBannerCategorySelection();

    const BannerData =
        data?.map((item: BannerCategorySelection, index: number) => ({
            label: `Image ${index + 1}`,
            bgpath: item.file,
            // path: '/image/ITModulebg.png'
        })) || [];


    // const BannerData = [
    //     { title: 'Smart IT Services', subTitle: 'From daily tech support to advanced digital transformation', bgpath: '/image/ITModulebg.png', path: '/image/decode.png' },
    //     { title: 'Smart IT Services', subTitle: 'From daily tech support to advanced digital transformation', bgpath: '/image/ITModulebg.png', path: '/image/decode.png' },
    //     { title: 'Smart IT Services', subTitle: 'From daily tech support to advanced digital transformation', bgpath: '/image/ITModulebg.png', path: '/image/decode.png' },
    //     { title: 'Smart IT Services', subTitle: 'From daily tech support to advanced digital transformation', bgpath: '/image/ITModulebg.png', path: '/image/decode.png' },
    // ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedRange, setSelectedRange] = useState("all");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");


    const params = useParams();


    const moduleId = params.moduleId as string;

    useEffect(() => {
        if (!moduleId) return;

        fetchCategoriesByModule(moduleId);
        fetchBannerCategorySelections(moduleId)
    }, [moduleId]);

    /* ---------- screen check ---------- */
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    /* ---------- auto slider ---------- */
    useEffect(() => {
        const maxIndex = isMobile
            ? BannerData.length - 1
            : BannerData.length - 2;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [isMobile, BannerData.length]);

    const translateValue = isMobile ? 100 : 50;

    const toSlug = (text: string) =>
        text.toLowerCase().replace(/\s+/g, '-');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;


    return (
        <>
            <section className="relative w-full">
                {/*  NAVBAR  */}
                <div className="hidden md:hidden lg:block w-full px-4 md:px-8 mt-4 md:mt-10">
                    <div className="bg-[#E2E9F1] flex items-center justify-between p-4 rounded-xl">
                        <div className="flex items-center gap-4">
                            <Link href="/">
                                <img src="/image/it-service-subcategories-home.png" className="w-[30px] cursor-pointer" />
                            </Link>
                            <h1 className="text-lg md:text-2xl font-semibold">IT Services</h1>
                        </div>

                        {/* SEARCH */}
                        <div className="flex items-center gap-4">
                            {/* SEARCH */}
                            <div className="hidden md:block relative w-[260px] lg:w-[307px]">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="
                                        w-full
                                        rounded-full bg-white
                                        border border-gray-300
                                        px-10 py-2
                                        text-sm
                                        outline-none
                                        focus:border-blue-500
                                    "
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
                                src="/image/it-service-bookmark.png"
                                className="w-[20px] cursor-pointer"
                            />
                        </div>


                    </div>

                </div>

                {/*  NAVBAR MOBILE  */}
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
                                <Link href="/MainModules/OnDemand">
                                    <ChevronLeft className="w-[28px] h-[28px] text-black cursor-pointer bg-white rounded-full p-1 shrink-0" />
                                </Link>

                                <h1 className="text-[16px] font-semibold truncate">
                                    {/* {formatSlugToTitle(slug)} */} IT Service
                                </h1>
                            </div>

                            {/* RIGHT */}
                            <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full shrink-0">
                                <img
                                    src="/image/it-service-bookmark.png"
                                    className="w-[14px] h-[14px]"
                                    alt="Bookmark"
                                />
                            </div>
                        </div>

                        {/* ===== ROW 2: SEARCH ===== */}
                        <div className="relative w-[90%] md:w-[95%] mx-auto ml-6">
                            {/* <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-full bg-white border border-gray-300 px-10 py-2 text-sm outline-none"
                            /> */}
                            <SearchBar
                                value={searchQuery}
                                onChange={setSearchQuery}
                                placeholder="Search"
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

                {/* ===== HERO SLIDER ===== */}
                <div className="w-full px-4 md:px-8 mt-20 overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * translateValue}%)`,
                        }}
                    >
                        {BannerData.map((item, index) => (
                            <div
                                key={index}
                                className="w-full md:w-1/2 shrink-0 px-2"
                            >
                                <div className="relative h-[320px] md:h-[380px] rounded-2xl overflow-hidden">
                                    <img
                                        src={item.bgpath}
                                        className="w-full h-[200px] md:h-[317px] object-cover rounded-2xl"
                                    />

                                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                        {/* <div>
                                            <h2 className="text-lg md:text-3xl font-semibold text-[#42566D]">
                                                {item.title}
                                            </h2>
                                            <p className="mt-2 text-sm md:text-xl text-[#5A5A5A] max-w-md">
                                                {item.subTitle}
                                            </p>
                                        </div> */}

                                        {/* <h1 className="text-4xl md:text-6xl mx-auto md:-mt-24 font-bold text-white opacity-80 whitespace-nowrap">
                                            IT SERVICES
                                        </h1> */}
                                        <h1
                                            className="
                                            absolute
                                            top-30 md:top-55  lg:top-55 
                                            left-1/2
                                            -translate-x-1/2
                                            text-4xl md:text-[50px] lg:text-[61.14px]
                                            font-bold
                                            text-white
                                            opacity-80
                                            whitespace-nowrap
                                        "
                                        >
                                            IT SERVICES
                                        </h1>


                                        {/* <img
                                            src={item.path}
                                            className="absolute bottom-22 right-20 md:bottom-5 lg:-bottom-4 lg:right-70 w-[120px] md:w-[180px] lg:w-[220px]"
                                        /> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== CATEGORY ===== */}
                <div className="w-full px-4 md:px-8 mt-10">
                    <h2 className="text-xl md:text-3xl font-semibold p-8">
                        Category
                    </h2>

                    <div className="flex gap-16 p-8 overflow-x-auto no-scrollbar ">
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                onClick={() =>
                                    router.push(`/MainModules/It-Services/${moduleId}/${cat._id}?categoryName=${encodeURIComponent(cat.name)}`)
                                }
                                className="
                            max-w-[120px]
                            md:min-w-0
                            h-[120px]                    
                            rounded-2xl
                            flex 
                            flex-col
                            items-center
                            gap-1
                            transition cursor-pointer
                        "
                            >
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-[85px] h-[85px] bg-[#EEF3F8] p-2 rounded-xl object-contain"
                                />

                                <span className="text-sm font-medium text-center text-[#000]">
                                    {cat.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

            </section>

            {/* ===== LIST SECTIONS ===== */}
            <section className="w-full mt-6 md:mt-10">
                <Recommendation moduleId={moduleId}  searchQuery={searchQuery}/>
                <MostlyUsed moduleId={moduleId}  searchQuery={searchQuery}/>
                <HighInDemand moduleId={moduleId}  searchQuery={searchQuery}/>
                <WhyChooseUs moduleId={moduleId} />
            </section>
        </>
    );
}
