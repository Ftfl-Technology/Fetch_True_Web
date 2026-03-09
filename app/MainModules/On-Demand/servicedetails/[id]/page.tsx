"use client";


import AboutSection from "@/src/components/OnDemand/About";
import AssuredByFetchTrue from "@/src/components/OnDemand/AssuredByFetchTrue";
import Benefits from "@/src/components/OnDemand/Benefits";
import ConnectWith from "@/src/components/OnDemand/ConnectWith";
import Documents from "@/src/components/OnDemand/Documents";
import FAQs from "@/src/components/OnDemand/Faqs";
import HowItWorksSteps from "@/src/components/OnDemand/HowItWorks";
import Included from "@/src/components/OnDemand/Included";
import MoreInformation from "@/src/components/OnDemand/MoreInformation";
import SelectPackage from "@/src/components/OnDemand/Packages";
import RatingsReviews from "@/src/components/OnDemand/Reviews";
import SafetyandAssurance from "@/src/components/OnDemand/Safety&Assurance";
import TermsAndConditions from "@/src/components/OnDemand/TermsandConditions";
import WhyChooseUs from "@/src/components/OnDemand/WhyChooseUs";
import { useCheckout } from "@/src/context/CheckoutContext";
import { useReview } from "@/src/context/ReviewContext";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import { ChevronLeft, ClockIcon, Eye, Share2, ShoppingCart, ZapIcon } from "lucide-react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type CourseInfo = {
    title: string;
    subtitle: string;
    rating: number;
    reviews: string;
    price: string;
    originalPrice: number;
    discount: string;
    emi: number;
    level: string;
    lessons: number;
    commission: string;
};

// const DATA: CourseInfo = {
//     title: "Kitchen Deep Cleaning",
//     subtitle: "On Demand Service",
//     rating: 4.8,
//     reviews: "2,400+ reviews",
//     price: "3,999",
//     originalPrice: 3499,
//     discount: "12% Off",
//     emi: 199,
//     level: "Beginner",
//     lessons: 72,
//     commission: "Earn Up to 7%",
// };

export default function ServiceDetails() {


    const { service, loading, error, fetchServiceDetails } = useServiceDetails();
    const { reviewServices, fetchReviews } = useReview();

    const params = useParams();
    const serviceId = params.id as string;
    const { selectedPackage } = useCheckout();

    const basicPackage = service?.serviceDetails?.packages?.[0];

    const displayPackage = selectedPackage ?? basicPackage;

    useEffect(() => {
        if (!serviceId) return;

        fetchServiceDetails(serviceId);
        fetchReviews(serviceId)
    }, [serviceId]);

    const searchParams = useSearchParams();

    const serviceName = searchParams.get("service");


    if (loading) return <p className="text-[12px] md:text-[24px] text-center mt-15">Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <section className="w-full bg-white">
                {/* ================= DESKTOP ================= */}
                <div className="hidden lg:block w-full bg-white">

                    {/* ===== HEADER BAR ===== */}
                    <div className="w-screen fixed top-0 z-50 -ml-2 bg-white mx-auto flex items-center justify-between px-8 py-4">

                        {/* LEFT */}
                        <div className="flex items-center gap-3 mt-4 ml-28">
                            <button onClick={() => window.history.back()}>
                                <ChevronLeft size={24} className="cursor-pointer" />
                            </button>
                            <h1 className="md:text-[18px] lg:text-[24px] font-semibold">Service Details</h1>
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center gap-3 mt-4">

                            {/* Package Selected Price */}
                            <div>
                                {displayPackage && (
                                    <div className="text-right flex flex-row gap-4 items-center mr-6 rounded-lg px-4 py-3 bg-gray-300">
                                        <p className="text-md text-gray-500 font-medium">
                                            {selectedPackage ? "Selected Package" : "Starting From"}
                                        </p>
                                        <p className="text-md font-semibold text-black">
                                            ₹{displayPackage.discountedPrice.toLocaleString()}
                                        </p>
                                    </div>
                                )}

                            </div>



                            <Link href={`/MainModules/Checkout?id=${serviceId}`}>
                                <button className="flex items-center gap-2 bg-green-500 cursor-pointer hover:bg-green-600 text-white px-4 py-2 rounded-md lg:text-[20px] font-medium">
                                    <ShoppingCart className="w-[29px] h-[29px]" />
                                    Check out
                                </button>
                            </Link>

                            <button className="flex items-center gap-2 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-md lg:text-[20px] font-medium">
                                <Share2 className="w-[29px] h-[29px]" />
                                Share
                            </button>
                        </div>

                    </div>

                    {/* ===== MAIN CONTENT ===== */}
                    <div className="max-w-[1400px] mx-auto flex gap-8 p-8">

                        {/* LEFT IMAGE */}
                        <div className="w-[652px] h-[503px] mt-20 border rounded-xl overflow-hidden">
                            <img
                                src={service?.bannerImages?.[0]}
                                alt="Marketing"
                                className="w-full h-full  object-fit"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                       <div className="flex-1 space-y-4 mt-15 flex flex-col justify-center">
                          

                            <p className="text-black font-semibold text-[24px]">
                               {service?.serviceName}
                            </p>
                             <p className="text-gray-500 text-[24px]">
                               {service?.category.name}
                            </p>

                            <div className="flex items-center gap-2 text-[20px]">
                                <span className="text-yellow-500">★</span>
                                <span className="font-medium text-black">{service?.averageRating}</span>
                                <span> ({service?.totalReviews ?? 0} {service?.totalReviews === 1 ? 'review' : 'reviews'})</span>
                            </div>

                            <div className="p-4 -mt-6 w-full">
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-500 text-[24px]">Starting from</span>
                                    <span className="text-[36px] font-semibold"> ₹{service?.serviceDetails.packages[0]?.discountedPrice}</span>
                                    <span className="line-through text-[20px] text-gray-400">
                                        ₹{service?.serviceDetails.packages[0]?.price}
                                    </span>
                                    <span className="text-[16px] text-white bg-black font-semibold px-3 py-1 rounded whitespace-nowrap">
                                        {service?.serviceDetails.packages[0]?.discount}% OFF
                                    </span>
                                </div>
                            </div>

                            
                                {/* Key values */}
                                <div className="flex gap-2  flex-wrap">
                                    {service?.keyValues?.map((item, index) => (
                                        <div key={item._id || index} className="flex items-center bg-gray-200 p-3 rounded-3xl gap-1">
                                            {item.icon ? (
                                                <img
                                                    src={item.icon}
                                                    alt={item.value}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            ) : (
                                                <Eye size={16} className="text-gray-600" />
                                            )}
                                            <span className="text-[20px] whitespace-nowrap">
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                            {/* COMMISSION */}
                            <div className="rounded-xl p-5 border flex justify-between items-center">
                                <div className="space-y-2">
                                    <p className="font-semibold text-[24px]">
                                        Franchise Commission
                                    </p>
                                    <p className="text-green-600 text-[32px] font-semibold">
                                       Earn upto {service?.franchiseDetails?.commission}
                                    </p>
                                </div>

                                <button className="text-[#281A83] text-[24px] flex items-center gap-1">
                                    T&amp;C <span>›</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* ================= MOBILE VERSION ================= */}
                <div className="lg:hidden">

                    {/* ===== MOBILE HEADER BAR ===== */}
                    <div className="w-screen fixed top-0 z-50 bg-white px-4 py-3 flex items-center justify-between">

                        {/* LEFT */}
                        <div className="flex items-center gap-2">
                            <Link href="/MainModules/Education">
                                <ChevronLeft size={22} className="cursor-pointer" />
                            </Link>
                            <h1 className="text-[16px] font-semibold">Service Details</h1>
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center gap-2">
                            <Link href={`/MainModules/Checkout?id=${serviceId}`}>
                                <button className="flex items-center gap-1 bg-green-500 text-white px-3 py-1.5 rounded-md text-xs font-medium">
                                    <ShoppingCart className="w-4 h-4" />
                                    Checkout
                                </button>
                            </Link>

                            <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-medium">
                                <Share2 className="w-4 h-4" />
                                Share
                            </button>
                        </div>
                    </div>

                    {/* ===== IMAGE ===== */}
                    <div className="mx-4 mt-22 rounded-xl overflow-hidden">
                        <img
                            src={service?.bannerImages?.[0]}
                            alt="Marketing Service"
                            className="w-full h-[220px] object-fit"
                        />
                    </div>

                    {/* ===== CONTENT ===== */}
                    <div className="px-4 mt-4 space-y-3">

                        {/* TITLE + RATING */}
                        <div className="flex justify-between items-start">
                            <h2 className="text-[16px] font-semibold leading-tight">
                                {service?.serviceName}
                            </h2>

                            <div className="flex flex-col items-end text-xs">
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-500">★</span>
                                    <span>{service?.averageRating}</span>
                                </div>
                                <span className="text-gray-400 whitespace-nowrap">
                                   ({service?.totalReviews ?? 0} {service?.totalReviews === 1 ? 'review' : 'reviews'})
                                </span>
                            </div>
                        </div>

                        {/* SUBTITLE */}
                        <p className="text-[13px] text-gray-500">
                            {service?.category.name}
                        </p>

                        {/* PRICE */}
                        <div className="flex items-center gap-2">
                            <span className="text-[12px] text-gray-500">Starting from</span>
                            <span className="font-semibold text-[16px]">
                               ₹{service?.serviceDetails.packages[0]?.discountedPrice}
                            </span>
                            <span className="line-through text-gray-400 text-[12px]">
                                ₹ {service?.serviceDetails.packages[0]?.price}
                            </span>
                            <span className="text-[#D56839] text-[12px] font-medium">
                                {service?.serviceDetails.packages[0]?.discount} % OFF
                            </span>
                        </div>

                               {/* Key values */}
                                <div className="flex gap-2  flex-wrap">
                                    {service?.keyValues?.map((item, index) => (
                                        <div key={item._id || index} className="flex items-center bg-gray-200 p-2 md:p-3 rounded-3xl gap-1">
                                            {item.icon ? (
                                                <img
                                                    src={item.icon}
                                                    alt={item.value}
                                                    className="w-5 h-5 object-contain"
                                                />
                                            ) : (
                                                <Eye size={16} className="text-gray-600" />
                                            )}
                                            <span className="text-[12px] md:text-[15px] whitespace-nowrap">
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                        {/* COMMISSION CARD */}
                        <div className="mt-4 bg-white rounded-xl p-4 mb-4 shadow border flex justify-between items-center">
                            <div>
                                <p className="text-[13px] font-medium">
                                    Franchise Commission
                                </p>
                                <p className="text-green-600 font-semibold">
                                   Earn upto {service?.franchiseDetails?.commission}
                                </p>
                            </div>

                            <button className="flex items-center gap-1 text-[13px] text-[#281A83]">
                                T&amp;C <span className="text-lg">›</span>
                            </button>
                        </div>

                    </div>
                </div>

            </section>

            <section>
                <Benefits benefits={service?.serviceDetails?.benefits || []} />
                <AboutSection aboutUs={service?.serviceDetails?.aboutUs || []} />
                <WhyChooseUs whyChooseUs={service?.serviceDetails?.whyChooseUs || []} />
                <HowItWorksSteps howItWorks={service?.serviceDetails?.howItWorks || []} />
                <SafetyandAssurance safetyAndAssurance={service?.serviceDetails?.safetyAndAssurance || []} />
                <Documents weRequired={service?.serviceDetails?.weRequired || []} weDeliver={service?.serviceDetails?.weDeliver || []} />
                <SelectPackage packages={service?.serviceDetails?.packages || []} />
                <Included notInclude={service?.serviceDetails?.notInclude || []} include={service?.serviceDetails?.include || []} highlight={service?.serviceDetails?.highlight || []} />
                <AssuredByFetchTrue assuredByFetchTrue={service?.serviceDetails?.assuredByFetchTrue || []} />
                <MoreInformation moreInfo={service?.serviceDetails?.moreInfo || []} />
                <TermsAndConditions termsAndConditions={service?.serviceDetails?.termsAndConditions || []} />
                <FAQs faq={service?.serviceDetails?.faq || []} />
                <RatingsReviews reviews={reviewServices} />
                <ConnectWith connectWith={service?.serviceDetails?.connectWith || []} />
            </section>
        </>

    );
}
