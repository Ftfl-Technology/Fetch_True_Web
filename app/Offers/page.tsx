
"use client";

import { useOffers } from "@/src/context/OfferContext";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function TodaysBestOffer() {
    const { offers, loading } = useOffers();
    const router = useRouter();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    if (loading || !offers.length) return null;

    const handleScroll = () => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;
        const cardWidth = container.firstElementChild?.clientWidth || 1;
        const index = Math.round(container.scrollLeft / cardWidth);

        setActiveIndex(index);
    };

    const scrollToIndex = (index: number) => {
        if (!scrollRef.current) return;

        const cardWidth =
            scrollRef.current.firstElementChild?.clientWidth || 0;

        scrollRef.current.scrollTo({
            left: index * cardWidth,
            behavior: "smooth",
        });
    };

    return (
        <section className="w-full bg-white py-10">
             <button onClick={() => router.back()}>
                    <div className="flex flex-row items-center cursor-pointer ml-4 md:ml-10 lg:ml-24 -mt-20">
                        <ChevronLeft />
                        <span className="text-lg">Offers</span>
                    </div>

                </button>
            <div className="max-w-[1440px] mx-auto px-6">

                {/* Heading */}
                <div className="w-full bg-[#F5F5F5] py-4 px-6 flex items-center justify-center flex-wrap gap-4">

                    {/* LEFT SIDE */}
                    <div>
                        <h2 className="text-[18px] font-semibold text-gray-800">
                            Trending This Week
                        </h2>
                        <p className="text-[13px] text-gray-500">
                            Most popular offers among users
                        </p>
                    </div>

                    {/* RIGHT SIDE PILLS */}
                    {/* <div className="flex md:whitespace-nowrap items-center gap-4">

                        // PILL 1 
                        <div className="flex items-center gap-3 border border-blue-400 rounded-full px-4 py-2 bg-white hover:shadow-sm transition cursor-pointer">

                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-blue-600 text-sm">⚖️</span>
                            </div>

                            <div className="leading-tight">
                                <p className="text-[13px] font-medium text-gray-800">
                                    Legal Document
                                </p>
                                <p className="text-[11px] text-gray-500">
                                    Flat ₹400 Off
                                </p>
                            </div>

                            <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center ml-2 text-xs">
                                →
                            </div>
                        </div>

                        // PILL 2
                        <div className="flex items-center gap-3 border border-pink-400 rounded-full px-4 py-2 bg-white hover:shadow-sm transition cursor-pointer">

                            <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                                <span className="text-pink-600 text-sm">📊</span>
                            </div>

                            <div className="leading-tight">
                                <p className="text-[13px] font-medium text-gray-800">
                                    Marketing Service
                                </p>
                                <p className="text-[11px] text-gray-500">
                                    Flat ₹200 Off
                                </p>
                            </div>

                            <div className="w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center ml-2 text-xs">
                                →
                            </div>
                        </div>

                        // PILL 3 
                        <div className="flex items-center gap-3 border border-orange-400 rounded-full px-4 py-2 bg-white hover:shadow-sm transition cursor-pointer">

                            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                                <span className="text-orange-600 text-sm">🤖</span>
                            </div>

                            <div className="leading-tight">
                                <p className="text-[13px] font-medium text-gray-800">
                                    AI Hub Access
                                </p>
                                <p className="text-[11px] text-gray-500">
                                    Flat ₹400 Off
                                </p>
                            </div>

                            <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center ml-2 text-xs">
                                →
                            </div>
                        </div>

                    </div> */}

                </div>

                {/* Cards */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex flex-col gap-6 overflow-x-auto scroll-smooth no-scrollbar"
                >
                    {offers.map((offer, index) => (
                        <div
                            key={index}
                            className="shrink-0 mx-auto w-[260px] md:w-[700px] lg:w-[1400px] bg-[#F6F0FF] rounded-[18px]"
                            onClick={() => router.push(`/Offers/${offer._id}`)}
                        >

                            <img
                                src={offer.thumbnailImage}
                                alt="Offer Thumbnail"
                                className="w-full h-[250px] rounded-[18px] object-fill cursor-pointer"
                            />

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}




