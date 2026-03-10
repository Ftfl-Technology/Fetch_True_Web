"use client";

import { useOffers } from "@/src/context/OfferContext";
import { useParams } from "next/navigation";
import Eligibility from "@/src/components/Offers/Eligibility";
import HowToParticipate from "@/src/components/Offers/HowToParticipate";
import TermsAndConditions from "@/src/components/Offers/TermsandConditions";
import FAQ from "@/src/components/Offers/Faq";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

// Date formatting function using Intl
const formatDate = (isoString: string): string => {
    const date = new Date(isoString);

    return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }).format(date).replace(',', '');
};

export default function TodaysBestOffer() {
    const { offers, loading } = useOffers();
    const router = useRouter();
    const params = useParams();
    const serviceId = params.id as string;

    const offerData = offers.find((offer) => offer._id === serviceId) ?? null;

    if (loading) return null;
    if (!offerData) return null;

    return (
        <section className="w-full bg-white py-10">
            <div className="max-w-[1440px] mx-auto ">
                <button onClick={() => router.back()}>
                    <div className="flex flex-row items-center cursor-pointer ml-4 md:ml-10 lg:ml-10">
                        <ChevronLeft />
                        <span className="text-lg">Offers</span>
                    </div>

                </button>

                {/* Heading */}
                <div className="text-center mb-2">
                    <h2 className="text-[18px] md:text-[25px] lg:text-[26px] font-semibold text-gray-900">
                        Todays Best Offer for you
                    </h2>
                    <p className="text-[14px] text-gray-500 mt-2">
                        Grab the opportunity & win amazing offer
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-6 mx-auto w-[280px] md:w-[700px] lg:w-[1440px]">
                    <div className="w-full bg-[#F6F0FF] rounded-[18px]">
                        <img
                            src={offerData.bannerImage}
                            alt="Offer Banner Image"
                            className="w-full h-[180px] md:h-[220px] lg:h-[400px] rounded-[18px] object-fit"
                        />
                    </div>
                </div>

                <div className="mt-5 space-y-1 ml-6 md:ml-9 lg:ml-6">
                    <h1 className="lg:text-[18px] md:text-[15px] text-[12px]">
                        {offerData.service?.serviceName || 'General Offer'}
                    </h1>

                    <div className="flex items-center gap-2 text-gray-600">
                        <span className="lg:text-[18px] md:text-[12px] text-[12px]">Valid From:</span>
                        <span className="lg:text-[18px] md:text-[12px] text-[12px] font-semibold">
                            {formatDate(offerData.offerStartTime)}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 border-b">
                        <span className="lg:text-[18px] md:text-[12px] text-[12px] mb-4">Valid Till:</span>
                        <span className="lg:text-[18px] md:text-[12px] text-[12px] font-semibold mb-4">
                            {formatDate(offerData.offerEndTime)}
                        </span>
                    </div>
                </div>

                <div className="flex items-center mt-6 mb-4  ml-4 lg:ml-4 md:ml-8 gap-2">
                    <div className="text-yellow-400">(★)</div>
                    <span className="lg:text-[18px]">Grand prizes for top 50 Agents</span>
                </div>
                <div className="mt-4 w-[280px] md:w-[500px] ml-4 lg:ml-0 md:ml-8 lg:w-[800px]">
                    <div className="bg-[#F6F0FF] flex flex-row gap-6 rounded-[18px]">

                        {offerData.galleryImages.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image}
                                    alt="Offer Gallery Images"
                                    className="lg:w-[800px] h-[180px] md:h-[220px] lg:h-[350px] rounded-[18px] object-fit"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <Eligibility serviceId={serviceId} />
                    <HowToParticipate serviceId={serviceId} />
                    <TermsAndConditions serviceId={serviceId} />
                    <FAQ serviceId={serviceId} />
                </div>
            </div>
        </section>
    );
}