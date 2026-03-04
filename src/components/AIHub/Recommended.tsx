'use client';

import Image from "next/image";
import { Bookmark, Brain, Settings, Zap } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useRecommendedServices } from "@/src/context/RecommendedContext";
import { useParams, useRouter } from "next/navigation";


type RecommendedProps = {
    moduleId: string;
    searchQuery: string;
};

interface Package {
    _id: string;
    name: string;
    price: number;
    discount: number;
    discountedPrice: number;
    whatYouGet: string[];
}


export default function Recommended({ moduleId, searchQuery }: RecommendedProps) {


    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const router = useRouter();

    const {
        services,
        loading,
        error, fetchRecommendedServices
    } = useRecommendedServices();

    useEffect(() => {
        if (!moduleId) return;

        fetchRecommendedServices(moduleId);
    }, [moduleId]);

    const { categoryId } = useParams<{
        moduleId: string;
        categoryId: string;
    }>();

    const getMaxScroll = () => {
        const container = containerRef.current;
        if (!container) return 0;
        return container.scrollWidth - container.clientWidth;
    };

    const handleMouseDown = (e: MouseEvent) => {
        const container = containerRef.current;
        if (!container) return;
        setIsDragging(true);
        setStartX(e.pageX - container.offsetLeft);
        setScrollLeft(container.scrollLeft);
        container.style.cursor = "grabbing";
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        const container = containerRef.current;
        if (!container) return;
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5;
        container.scrollLeft = Math.max(
            0,
            Math.min(scrollLeft - walk, getMaxScroll())
        );
    };

    const stopDrag = () => {
        const container = containerRef.current;
        if (!container) return;
        setIsDragging(false);
        container.style.cursor = "grab";
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener("mousedown", handleMouseDown);
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseup", stopDrag);
        container.addEventListener("mouseleave", stopDrag);

        return () => {
            container.removeEventListener("mousedown", handleMouseDown);
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseup", stopDrag);
            container.removeEventListener("mouseleave", stopDrag);
        };
    }, [isDragging, startX, scrollLeft]);

    const getStartingPackage = (packages: Package[] = []) => {
        if (!packages.length) return null;

        return packages.reduce((min, pkg) =>
            pkg.discountedPrice < min.discountedPrice ? pkg : min
        );
    };

    const FIXED_ICONS = ['⚡', '🧠', '🛠 '];

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

        return {
            id: service._id,
            title: service.serviceName,
            category: service.category?.name || "Unknown",
            image: service.thumbnailImage || "/image/placeholder.png",

            rating: service.averageRating ?? 0,
            reviews: service.totalReviews ?? 0,

            price: startingPackage?.discountedPrice ?? 0,
            originalPrice: startingPackage?.price ?? 0,
            discount: startingPackage?.discount ?? 0,

            keyValues:
                service.keyValues?.map((item) => ({
                    id: item._id,
                    key: item.key,
                    label: item.value,
                })) || [],

            commission: service.franchiseDetails.commission
        };
    });



    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;


    return (
      <div className="w-full mb-6">
    <h1 className="text-[16px] md:text-[24px] font-semibold mb-4 ml-4">
        Recommended Service
    </h1>

    <div
        ref={containerRef}
        className="flex gap-6 w-full p-4 overflow-x-auto snap-x snap-mandatory no-scrollbar cursor-grab"
    >
        {mappedServices.length > 0 ? (
            mappedServices.map((p) => (
                <div
                    key={p.id}
                    className="
                        snap-center
                        w-[290px] md:w-[308px] lg:w-[408px] lg:h-[373.99px]
                        bg-[#F4F4F4] 
                        rounded-2xl
                        p-4
                        flex-shrink-0
                        overflow-hidden
                        relative"
                    onClick={() => {
                        router.push(`/MainModules/AI-Hub/${moduleId}/${categoryId}/${p.id}`);
                    }}
                >
                    {/* IMAGE */}
                    <div className="relative w-full h-40 rounded-xl overflow-hidden">
                        <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            className="object-fit rounded-xl pointer-events-none w-[286px] h-[132px] lg:w-[398px] lg:h-[183px]"
                        />
                        <button className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full">
                            <Bookmark size={18} className="text-white" />
                        </button>
                    </div>

                    {/* CONTENT */}
                    <div className="mt-3 space-y-1">
                        <h2
                            className="
                                text-[14px] lg:text-[20px]
                                font-semibold
                                text-black -mt-1 lg:-mt-2
                                leading-snug
                                line-clamp-2 max-w-[65%]
                                min-h-[40px] lg:min-h-[56px]
                            "
                        >
                            {p.title}
                        </h2>

                        <span className="inline-block text-[10px] lg:text-[12px] bg-white px-2 py-1 rounded-lg">
                            {p.category}
                        </span>

                        <div className="flex -mt-12 md:-mt-18">
                            <div className="items-end ml-auto gap-1 text-yellow-400 text-[22px] mb-4">
                                {"★".repeat(p.rating)}
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 -mt-4">
                            <span className="bg-green-600 text-white text-[8px] lg:text-[10px] px-1 py-1 rounded-lg font-semibold">
                                Earn Up to {p.commission}
                            </span>
                        </div>

                        <div className="space-y-1 text-black mt-8">
                            <p className="font-semibold text-[10px] lg:text-[14px] lg:-mt-5">
                                Setup & Time
                            </p>
                            {p.keyValues.map((kv, index) => (
                                <div
                                    key={kv.id}
                                    className="flex flex-col text-[10px] lg:text-[14px] text-gray-700 leading-snug"
                                >
                                    <div className="flex flex-row space-x-1">
                                        <span className="text-base w-5 text-center -mt-1">
                                            {FIXED_ICONS[index] || '•'}  
                                        </span>
                                        <span className="font-medium">{kv.key}:</span>
                                        <span className="text-gray-500">{kv.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* PRICE */}
                    <div className="absolute bottom-4 right-3 bg-white rounded-2xl px-3 lg:px-2 py-2 lg:py-1 text-center">
                        <p className="text-[10px] lg:text-[10px]">
                            Starting from
                        </p>
                        <div className="font-semibold text-[16px] lg:text-[20px] flex flex-col items-center">
                            <span>₹{p.price}</span>
                            {p.discount > 0 && (
                                <div className="flex flex-row gap-2 text-center">
                                    <span className="line-through text-gray-400 text-[8px] md:text-[10px] lg:text-[12px]">
                                        ₹{p.originalPrice}
                                    </span>
                                    <span className="text-blue-400 text-[8px] md:text-[10px] lg:text-[12px]">
                                        ({p.discount}% off)
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))
        ) : (
            // ✅ NO SERVICES FOUND CARD
            <div className="
                snap-center
                w-[290px] md:w-[308px] lg:w-[408px] lg:h-[373.99px]
                bg-[#F4F4F4] 
                rounded-2xl
                p-8
                flex-shrink-0
                overflow-hidden
                flex flex-col items-center justify-center
                text-center
            ">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    No Services Found
                </h3>
                <p className="text-sm text-gray-500">
                    There are no recommended services available at the moment.
                </p>
                <p className="text-xs text-gray-400 mt-4">
                    Please check back later
                </p>
            </div>
        )}
    </div>
</div>
    );
}
