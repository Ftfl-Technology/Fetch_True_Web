'use client';

import { Bookmark } from "lucide-react";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";
import { useRecommendedServices } from "@/src/context/RecommendedContext";


/* ---------------- CATEGORY TABS ---------------- */
const CATEGORY_TABS = [
    { label: "All", value: "all" },
    { label: "300", value: "0-300" },
    { label: "300 - 400 Rs", value: "300-400" },
    { label: "400 - 600 Rs", value: "400-600" },
    { label: "600 - 800 Rs", value: "600-800" },
    { label: "800 - 1000 Rs", value: "800-1000" },
];


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


export default function Recommendation({ moduleId,searchQuery }: SectionProps) {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();
    const toSlug = (text: string) =>
        text.toLowerCase().replace(/\s+/g, "-");

    const {
        services,
        loading,
        error, fetchRecommendedServices
    } = useRecommendedServices();

    useEffect(() => {
        if (!moduleId) return;

        fetchRecommendedServices(moduleId);
    }, [moduleId]);


  const filteredServices =
  services?.filter((service) => {
    if (!searchQuery?.trim()) return true;

    const q = searchQuery.toLowerCase();

    return (
      service.serviceName?.toLowerCase().includes(q) ||
      service.category?.name?.toLowerCase().includes(q)
    );
  }) || [];       

  

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



    const mappedServices = filteredServices.map((service) => {
        const packages = service.serviceDetails?.packages || [];
        const startingPackage = getStartingPackage(packages);
        return ({
            id: service._id,
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
                Recommended for You
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
                                sm:w-[70vw] h-[350px] cursor-pointer
                                md:w-[331px] md:h-[372px] lg:h-[372.04px] lg:w-[331px]
                                overflow-hidden 
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
                                                {"☆".repeat(5 - item.rating)} */}
                                                {(() => {
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
                                                <User className="inline-block w-[12px] h-[12px] flex-shrink-0" />{item.reviews} {item.reviews <= 1 ? 'Review' : 'Reviews'}
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
