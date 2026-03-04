// 'use client';

// import { Bookmark } from "lucide-react";
// import { useRef } from "react";
// import { useRouter } from "next/navigation";
// import { Zap, Clock, User } from "lucide-react";


// /* ---------------- CATEGORY TABS ---------------- */
// const CATEGORY_TABS = [
//     { label: "All", value: "all" },
//     { label: "300", value: "0-300" },
//     { label: "300 - 400 Rs", value: "300-400" },
//     { label: "400 - 600 Rs", value: "400-600" },
//     { label: "600 - 800 Rs", value: "600-800" },
//     { label: "800 - 1000 Rs", value: "800-1000" },
// ];

// /* ---------------- SERVICES DATA ---------------- */
// const SERVICES = [
//     {
//         id: 1,
//         title: "Cyber Security",
//         subtitle: "Develop your future website",
//         category: "Digital Marketing",
//         users: "2400+ users",
//         rating: 4,
//         price: 450,
//         discount: "30%",
//         trusted: true,
//         earn: "Earn Up to 5%",
//         image: "/image/ItServicecardbg1.png",
//     },
//     {
//         id: 2,
//         title: "IT Consulting",
//         subtitle: "Develop your future website",
//         category: "UI / UX",
//         users: "1800+ users",
//         rating: 5,
//         price: 380,
//         discount: "25%",
//         trusted: true,
//         earn: "Earn Up to 4%",
//         image: "/image/ItServicecardbg1.png",

//     },
//     {
//         id: 3,
//         title: "App Development",
//         subtitle: "Develop your future website",
//         category: "Graphic Design",
//         users: "1200+ users",
//         rating: 4,
//         price: 280,
//         discount: "20%",
//         trusted: true,
//         earn: "Earn Up to 3%",
//         image: "/image/ItServicecardbg1.png",
//     },
//     {
//         id: 4,
//         title: "Cyber Security",
//         subtitle: "Develop your future website",
//         category: "Print Design",
//         users: "950+ users",
//         rating: 4,
//         price: 220,
//         discount: "15%",
//         trusted: true,
//         earn: "Earn Up to 2%",
//         image: "/image/ItServicecardbg1.png",
//     },
//     {
//         id: 5,
//         title: "IT Consulting",
//         subtitle: "Develop your future website",
//         category: "Digital Marketing",
//         users: "2100+ users",
//         rating: 5,
//         price: 320,
//         discount: "35%",
//         trusted: true,
//         earn: "Earn Up to 5%",
//         image: "/image/ItServicecardbg1.png",
//     },
//     {
//         id: 6,
//         title: "Web Development",
//         subtitle: "Develop your future website",
//         category: "UI / UX",
//         users: "1600+ users",
//         rating: 5,
//         price: 520,
//         discount: "20%",
//         trusted: true,
//         earn: "Earn Up to 6%",
//         image: "/image/ItServicecardbg1.png",
//     },
//     {
//         id: 7,
//         title: "Cyber Security",
//         subtitle: "Develop your future website",
//         category: "Print Design",
//         users: "1100+ users",
//         rating: 4,
//         price: 480,
//         discount: "18%",
//         trusted: true,
//         earn: "Earn Up to 3%",
//          image: "/image/ItServicecardbg1.png",
//     },
//     {
//         id: 8,
//         title: "Web Development",
//         subtitle: "Develop your future website",
//         category: "Graphic Design",
//         users: "1400+ users",
//         rating: 4,
//         price: 260,
//         discount: "22%",
//         trusted: true,
//         earn: "Earn Up to 3%",
//         image: "/image/ItServicecardbg1.png",
//     },
//     {
//         id: 9,
//         title: "App Development",
//         subtitle: "Develop your future website",
//         category: "Branding",
//         users: "900+ users",
//         rating: 5,
//         price: 750,
//         discount: "40%",
//         trusted: true,
//         earn: "Earn Up to 7%",
//         image: "/image/ItServicecardbg1.png",
//     },
// ];

// /* ---------------- COMPONENT ---------------- */
// // type RecommendationProps = {
// //     selectedRange: string;
// //     selectedCategory: string;
// //     searchQuery: string;
// // };

// type SectionProps = {
//     selectedRange?: string;
//     selectedCategory?: string;
//     searchQuery?: string;
//     contextTitle?: string; // ← from slug
// };



// export default function MostlyUsed({ selectedRange, selectedCategory, searchQuery = "", contextTitle }: SectionProps) {

//     const containerRef = useRef<HTMLDivElement | null>(null);
//     const router = useRouter();
//     const toSlug = (text: string) =>
//         text.toLowerCase().replace(/\s+/g, "-");



//     const CARD_CLASSES = `
//     snap-center flex-shrink-0
//     w-[88vw] sm:w-[70vw] md:w-[390px] md:h-[362.04px]
//     rounded-3xl p-3
//     shadow-lg
//     `;



//     const filteredServices = SERVICES.filter((item) => {
//         // PRICE FILTER
//         const rangeMatch =
//             selectedRange === "all" ||
//             (selectedRange === "0-300" && item.price < 300) ||
//             (selectedRange === "300-400" && item.price >= 300 && item.price < 400) ||
//             (selectedRange === "400-600" && item.price >= 400 && item.price <= 600) ||
//             (selectedRange === "600-800" && item.price >= 600 && item.price <= 800) ||
//             (selectedRange === "800-1000" && item.price > 800);

//         // CATEGORY FILTER
//         const categoryMatch =
//             selectedCategory === "all" ||
//             item.title === selectedCategory;

//         // CONTEXT (from slug)
//         // const contextMatch =
//         //     !contextTitle ||
//         //     item.title.toLowerCase() === contextTitle.toLowerCase();
//         const normalizedTitle = item.title.toLowerCase();
//         const normalizedContext = contextTitle?.toLowerCase();



//         const contextMatch =
//             !contextTitle ||
//             normalizedTitle === normalizedContext;

//         // SEARCH
//         const searchMatch =
//             searchQuery === "" ||
//             item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             item.category.toLowerCase().includes(searchQuery.toLowerCase());

//         return rangeMatch && categoryMatch && searchMatch && contextMatch;
//     });


//     type CardBgProps = {
//         active?: boolean;
//     };

//     const CardBg: React.FC<CardBgProps> = ({ active = false }) => (
//         <svg
//             viewBox="0 0 300 200"
//             preserveAspectRatio="none"
//             className="absolute inset-0 w-full h-full pointer-events-none"
//         >
//             <path
//                 d="
//         M 20 0
//         H 280
//         L 300 0
//         V 70
//         Q 350 230 220 200
//         H 0
//         V 30
//         Q 0 0 20 0
//         Z
//       "
//                 fill="#E2E9F1"
//             />
//         </svg>
//     );



//     return (
//         <div className="w-full p-4 md:ml-6 md:p-6">
//             {/* TITLE */}
//             <h2 className="text-xl md:text-3xl font-semibold mb-4">
//                Most Popular
//             </h2>

//             {/* SWIPEABLE CARDS */}
//             <div
//                 ref={containerRef}
//                 className="flex gap-4 md:gap-10 overflow-x-auto  snap-x snap-mandatory no-scrollbar"
//             >
//                 {filteredServices.length > 0 ? (
//                     filteredServices.map((item) => (
//                         <div
//                             key={item.id}
//                             onClick={() =>
//                                 router.push(`/MainModules/ITService/ServiceDetails`)
//                             }
//                             className="
//                                 relative snap-center flex-shrink-0
//                                 w-[290px] min-h-[271px]
//                                 sm:w-[70vw] h-[300px]
//                                 md:w-[331px] md:h-[372px] lg:h-[362.04px]
//                                 overflow-hidden 
//                                 "
//                         >
//                             {/* SVG BACKGROUND */}
//                             <CardBg />

//                             {/* CONTENT */}
//                             <div className="relative z-10 h-[336px] flex flex-col ">
//                                 {/* IMAGE SECTION */}
//                                 <div className="relative md:h-[200px] w-full p-4 h-[156px]">
//                                     <img
//                                         src={item.image}
//                                         alt={item.title}
//                                         className="w-[299px] h-full object-cover
//                                     rounded-tl-lg
//                                     rounded-br-lg
//                                     rounded-tr-none
//                                     rounded-bl-none"
//                                     />

//                                     {/* Discount */}
//                                     <span className="absolute top-6 right-18 bg-green-400 text-black text-xs font-semibold px-2 py-1 rounded-lg">
//                                         Discount {item.discount}
//                                     </span>

//                                     {/* Bookmark */}
//                                     <button className="absolute top-5 right-6 bg-black/70 p-2 rounded-full">
//                                         <Bookmark size={16} className="text-white" />
//                                     </button>
//                                 </div>

//                                 {/* CONTENT SECTION */}
//                                 <div className="relative p-2 text-black flex-1">
//                                     <span className="text-[16px] md:ml-2 font-semibold leading-snug line-clamp-2 max-w-[65%]">
//                                         {item.title}
//                                     </span>
//                                     <div className="flex items-center justify-between mb-2 md:mb-6">
//                                         <span className="inline-block bg-[#FFFFFF] text-[9px] md:text-[12px] px-3 py-1 rounded-full">
//                                             {item.category}
//                                         </span>

//                                         <span className="text-[8px] md:text-[10px] px-3 py-1 bg-[#548AFE] rounded-full whitespace-nowrap shrink-0">
//                                             {item.earn}
//                                         </span>
//                                     </div>

//                                     <div className="flex items-center lg:-mt-2 mb-2">
//                                         <div className="inline-flex items-center gap-2 text-[9px] md:text-[12px] px-3 py-1 whitespace-nowrap shrink-0">
//                                             <Zap className="inline-block w-[12px] h-[12px] flex-shrink-0" />
//                                             Faster project delivery
//                                         </div>

//                                         <span className="inline-flex items-center gap-2 text-[9px] md:text-[12px] px-3 py-1 whitespace-nowrap shrink-0">
//                                             <Clock className="inline-block w-[12px] h-[12px] flex-shrink-0" />
//                                             24×7 technical support
//                                         </span>
//                                     </div>


//                                     <div className="space-y-1">
//                                         <div>
//                                             {/* <h4 className="text-xs leading-none">Reviews</h4> */}
//                                             <div className="flex items-center text-yellow-400 text-[20px] mt-4 md:text-[25px] gap-1 md:ml-2 lg:ml-2 leading-none">
//                                                 {"★".repeat(item.rating)}
//                                                 {"☆".repeat(5 - item.rating)}
//                                             </div>
//                                             <div className="lg:text-[10px] md:text-[10px] text-[9px] text-gray-700 md:ml-2 lg:ml-2"> 
//                                           <User className="inline-block w-[12px] h-[12px] flex-shrink-0" /> 2,400+ reviews
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* PRICE */}
//                                     <div
//                                         className="
//                                             absolute lg:bottom-1 right-4 md:bottom-1 bottom-10
//                                             bg-white text-black font-semibold
//                                             text-[12.71px] md:text-[15px] lg:text-[20px] 
//                                             lg:px-4 lg:py-1 md:px-4 md:py-2
//                                             rounded-2xl shadow-md px-2 py-2
//                                             flex flex-col items-center
//                                             max-w-[85%]
//                                             truncate 
//                                             whitespace-nowrap
//                                         "
//                                     > 
//                                   <span className="lg:text-[10px] md:text-[10px] text-gray-500 ">Starting from</span>  
//                                         ₹ {item.price}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <div className="w-full bg-gray-500 flex items-center justify-center">
//                         <div className="bg-white rounded-2xl p-6 text-center w-full">
//                             <p className="text-lg font-semibold text-gray-800">
//                                 No Services Found
//                             </p>
//                             <p className="text-sm text-gray-500 mt-2">
//                                 Try another price range
//                             </p>
//                         </div>
//                     </div>
//                 )}

//                 {/* MOBILE SPACER */}
//                 <div className="md:hidden min-w-4" />
//             </div>
//         </div>
//     );

// }






'use client';

import { Bookmark } from "lucide-react";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";
import { useRecommendedServices } from "@/src/context/RecommendedContext";
import { useMostPopular } from "@/src/context/MostPopularContext"

/* ---------------- CATEGORY TABS ---------------- */
const CATEGORY_TABS = [
    { label: "All", value: "all" },
    { label: "300", value: "0-300" },
    { label: "300 - 400 Rs", value: "300-400" },
    { label: "400 - 600 Rs", value: "400-600" },
    { label: "600 - 800 Rs", value: "600-800" },
    { label: "800 - 1000 Rs", value: "800-1000" },
];

/* ---------------- SERVICES DATA ---------------- */
// const SERVICES = [
//     {
//         id: 1,
//         title: "Cyber Security",
//         subtitle: "Develop your future website",
//         category: "Digital Marketing",
//         users: "2400+ users",
//         rating: 4,
//         price: 450,
//         discount: "30%",
//         trusted: true,
//         earn: "Earn Up to 5%",
//         image: "/image/ItServicecardbg1.png",
//     },
//     {
//         id: 2,
//         title: "IT Consulting",
//         subtitle: "Develop your future website",
//         category: "UI / UX",
//         users: "1800+ users",
//         rating: 5,
//         price: 380,
//         discount: "25%",
//         trusted: true,
//         earn: "Earn Up to 4%",
//         image: "/image/ItServicecardbg1.png",

//     },
//     {
//         id: 3,
//         title: "App Development",
//         subtitle: "Develop your future website",
//         category: "Graphic Design",
//         users: "1200+ users",
//         rating: 4,
//         price: 280,
//         discount: "20%",
//         trusted: true,
//         earn: "Earn Up to 3%",
//         image: "/image/ItServicecardbg1.png",
//     },
//     {
//         id: 4,
//         title: "Cyber Security",
//         subtitle: "Develop your future website",
//         category: "Print Design",
//         users: "950+ users",
//         rating: 4,
//         price: 220,
//         discount: "15%",
//         trusted: true,
//         earn: "Earn Up to 2%",
//         image: "/image/ItServicecardbg1.png",
//     },
//     {
//         id: 5,
//         title: "IT Consulting",
//         subtitle: "Develop your future website",
//         category: "Digital Marketing",
//         users: "2100+ users",
//         rating: 5,
//         price: 320,
//         discount: "35%",
//         trusted: true,
//         earn: "Earn Up to 5%",
//         image: "/image/ItServicecardbg1.png",
//     },
//     {
//         id: 6,
//         title: "Web Development",
//         subtitle: "Develop your future website",
//         category: "UI / UX",
//         users: "1600+ users",
//         rating: 5,
//         price: 520,
//         discount: "20%",
//         trusted: true,
//         earn: "Earn Up to 6%",
//         image: "/image/ItServicecardbg1.png",
//     },
//     {
//         id: 7,
//         title: "Cyber Security",
//         subtitle: "Develop your future website",
//         category: "Print Design",
//         users: "1100+ users",
//         rating: 4,
//         price: 480,
//         discount: "18%",
//         trusted: true,
//         earn: "Earn Up to 3%",
//         image: "/image/ItServicecardbg1.png",
//     },
//     {
//         id: 8,
//         title: "Web Development",
//         subtitle: "Develop your future website",
//         category: "Graphic Design",
//         users: "1400+ users",
//         rating: 4,
//         price: 260,
//         discount: "22%",
//         trusted: true,
//         earn: "Earn Up to 3%",
//         image: "/image/ItServicecardbg1.png",
//     },
//     {
//         id: 9,
//         title: "App Development",
//         subtitle: "Develop your future website",
//         category: "Branding",
//         users: "900+ users",
//         rating: 5,
//         price: 750,
//         discount: "40%",
//         trusted: true,
//         earn: "Earn Up to 7%",
//         image: "/image/ItServicecardbg1.png",
//     },
// ];

/* ---------------- COMPONENT ---------------- */
// type RecommendationProps = {
//     selectedRange: string;
//     selectedCategory: string;
//     searchQuery: string;
// };

type SectionProps = {
    moduleId?: string;
    selectedRange?: string;
    selectedCategory?: string;
    searchQuery?: string;
    contextTitle?: string; // ← from slug
};

interface Package {
    _id: string;
    name: string;
    price: number;
    discount: number;
    discountedPrice: number;
    whatYouGet: string[];
}

export default function MostlyUsed({ moduleId, searchQuery }: SectionProps) {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();
    const toSlug = (text: string) =>
        text.toLowerCase().replace(/\s+/g, "-");

    const {
        services, loading, error, fetchMostPopular
    } = useMostPopular();

    useEffect(() => {
        if (!moduleId) return;

        fetchMostPopular(moduleId);
    }, [moduleId]);


    type CardBgProps = {
        active?: boolean;
    };

    const CardBg: React.FC<CardBgProps> = ({ active = false }) => (
        <svg
            viewBox="0 0 300 200"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
        >
            <path
                d="
        M 20 0
        H 280
        L 300 0
        V 70
        Q 350 230 220 200
        H 0
        V 30
        Q 0 0 20 0
        Z
      "
                fill="#E2E9F1"
            />
        </svg>
    );

    const getStartingPackage = (packages: Package[] = []) => {
        if (!packages.length) return null;

        return packages.reduce((min, pkg) =>
            pkg.discountedPrice < min.discountedPrice ? pkg : min
        );
    };

    const filteredServices =
  services?.filter((service) => {
    if (!searchQuery?.trim()) return true;

    const q = searchQuery.toLowerCase();

    return (
      service.serviceName?.toLowerCase().includes(q) ||
      service.category?.name?.toLowerCase().includes(q)
    );
  }) || [];     


    const mappedServices = filteredServices.map((service) => {
        const packages = service.serviceDetails?.packages || [];
        const startingPackage = getStartingPackage(packages);
        return ({
            id: service.serviceId,
            title: service.serviceName,
            category: service.category?.name || "Unknown",
            image: service.thumbnailImage || "/image/placeholder.png",
            rating: service.averageRating ?? 0,
            reviews: service.totalReviews,
            price: startingPackage?.discountedPrice ?? 0,
            originalPrice: startingPackage?.price ?? 0,
            discount: startingPackage?.discount ?? 0,
            keyValues: service.keyValues?.map((item) => ({
                id: item._id,
                label: item.value,
            })) || [],
            commission: service.franchiseDetails.commission
        })
        });


        if (loading) return <p>Loading...</p>;
        if (error) return <p>{error}</p>;



        return (
            <div className="w-full p-4 md:ml-6 md:p-6">
                {/* TITLE */}
                <h2 className="text-xl md:text-3xl font-semibold mb-4">
                    Mostly Popular
                </h2>

                {/* SWIPEABLE CARDS */}
                <div
                    ref={containerRef}
                    className="flex gap-4 md:gap-10 overflow-x-auto  snap-x snap-mandatory no-scrollbar"
                >
                    {mappedServices.length > 0 ? (
                        mappedServices.map((item) => (
                            <div
                                key={item.id}
                                onClick={() =>
                                    router.push(`/MainModules/It-Services/ServiceDetails/${item.id}?service=${encodeURIComponent(item.title)}`)
                                }
                                className="
                                relative snap-center flex-shrink-0
                                w-[290px] min-h-[271px]
                                sm:w-[70vw] h-[350px]
                                md:w-[331px] md:h-[372px] lg:h-[372.04px] lg:w-[331px]
                                overflow-hidden cursor-pointer
                                "
                            >
                                {/* SVG BACKGROUND */}
                                <CardBg />

                                {/* CONTENT */}
                                <div className="relative z-10 h-[336px] flex flex-col ">
                                    {/* IMAGE SECTION */}
                                    <div className="relative md:h-[200px] w-full p-4 h-[156px]">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-[299px] h-[156px] object-cover
                                    rounded-tl-lg
                                    rounded-br-lg
                                    rounded-tr-none
                                    rounded-bl-none"
                                        />

                                  <span className="absolute top-6 left-8 bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-lg flex items-center gap-1">
                                        <img src="/image/security.png" width={14} height={14} />
                                        Trusted
                                    </span>

                                        {/* Bookmark */}
                                        <button className="absolute top-5 right-6 bg-black/70 p-2 rounded-full">
                                            <Bookmark size={16} className="text-white" />
                                        </button>
                                    </div>

                                    {/* CONTENT SECTION */}
                                    <div className="relative p-2 text-black flex-1 mt-6 md:-mt-2 lg:-mt-4">
                                        <span className="text-[16px] md:ml-2 ml-2 font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                                            {item.title}
                                        </span>
                                        <div className="flex items-center justify-between mb-2 md:mb-6">
                                            <span className="inline-block bg-[#FFFFFF] text-[9px] md:text-[12px] ml-2 px-3 py-1 rounded-full">
                                                {item.category}
                                            </span>

                                            <span className="text-[8px] md:text-[10px] text-white px-1 py-1 bg-green-400 rounded-lg whitespace-nowrap shrink-0">
                                                Earn Up to {item.commission}
                                                {/* {item.earn} */}
                                            </span>
                                        </div>

                                        <div className="flex items-center lg:-mt-2 mb-2">
                                            <div className="inline-flex items-center gap-2 text-[9px] md:text-[12px] px-1 py-1 whitespace-nowrap shrink-0">
                                                {/* <Zap className="inline-block w-[12px] h-[12px] flex-shrink-0" />
                                            Faster project delivery */}
                                                {item.keyValues.map((kv) => (
                                                    <span
                                                        key={kv.id}
                                                        className="text-[11px] text-gray-700 leading-snug"
                                                    >
                                                        {kv.label}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* <span className="inline-flex items-center gap-2 text-[9px] md:text-[12px] px-3 py-1 whitespace-nowrap shrink-0">
                                            <Clock className="inline-block w-[12px] h-[12px] flex-shrink-0" />
                                            24×7 technical support
                                        </span> */}
                                        </div>


                                        <div className="space-y-1">
                                            <div>
                                                {/* <h4 className="text-xs leading-none">Reviews</h4> */}
                                                <div className="flex items-center text-yellow-400 text-[20px] mt-6 md:text-[25px] gap-1 ml-2 md:ml-2 lg:ml-2 leading-none">
                                                    {/* {"★".repeat(item.rating)}
                                                {"☆".repeat(5 - item.rating)} */}      {(() => {
                                                        const rating = Math.max(0, Math.min(5, item.rating));
                                                        const rounded = Math.round(rating * 2) / 2;
                                                        const fullStars = Math.floor(rounded);
                                                        const hasHalfStar = rounded % 1 !== 0;
                                                        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

                                                        return (
                                                            <div className="flex items-center gap-0 text-[20px] md:text-[25px] leading-none">
                                                                {/* Full stars */}
                                                                {[...Array(fullStars)].map((_, i) => (
                                                                    <span key={`full-${i}`} className="text-yellow-400">
                                                                        ★
                                                                    </span>
                                                                ))}

                                                                {/* Half star */}
                                                                {hasHalfStar && (
                                                                    <span className="relative inline-block w-[1em]">
                                                                        <span className="absolute overflow-hidden w-1/2 text-yellow-400">
                                                                            ★
                                                                        </span>
                                                                        <span className="text-gray-300">★</span>
                                                                    </span>
                                                                )}

                                                                {/* Empty stars */}
                                                                {[...Array(emptyStars)].map((_, i) => (
                                                                    <span key={`empty-${i}`} className="text-gray-300">
                                                                        ★
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        );
                                                    })()}
                                                </div>
                                                <div className="lg:text-[10px] md:text-[10px] text-[9px] text-gray-700 ml-2 md:ml-2 lg:ml-2">
                                                    <User className="inline-block w-[12px] h-[12px] flex-shrink-0" /> {item.reviews} {item.reviews <=1 ? 'Review' : 'Reviews'}
                                                </div>
                                            </div>
                                        </div>

                                        {/* PRICE */}
                                        <div
                                            className="
                                            absolute lg:-bottom-6 right-4 md:-bottom-3 -bottom-4
                                             text-black font-semibold
                                            text-[12.71px] md:text-[12px] lg:text-[14px] 
                                            lg:px-4 lg:py-1 md:px-4 md:py-2
                                            rounded-2xl  px-2 py-2
                                            flex flex-col items-center
                                            max-w-[85%] -mr-4
                                            truncate 
                                            whitespace-nowrap"
                                        >
                                            <div className="text-[10px] md:text-[12px] lg:text-[12px] text-white bg-black rounded-md px-1 py-1 mb-2">{item.discount}% OFF</div>
                                            <span className="lg:text-[10px] md:text-[10px] lg:text-[12px] text-gray-500 ">Starting from</span>
                                            {/* ₹ {item.price} */}
                                            <div className="flex flex-row items-center gap-2">
                                                <span className="text-gray-400 line-through">₹ {item.originalPrice}</span>₹ {item.price}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="w-full bg-gray-500 flex items-center justify-center">
                            <div className="bg-white rounded-2xl p-6 text-center w-full">
                                <p className="text-lg font-semibold text-gray-800">
                                    No Services Found
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                    Try another price range
                                </p>
                            </div>
                        </div>
                    )}

                    {/* MOBILE SPACER */}
                    <div className="md:hidden min-w-4" />
                </div>
            </div>
        );

    }
