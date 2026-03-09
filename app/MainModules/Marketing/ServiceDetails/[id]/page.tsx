"use client";

import AboutUs from "@/src/components/MarketingServiceDetails/About";
import Benefits from "@/src/components/MarketingServiceDetails/Benefits";
import MoreInformation from "@/src/components/MarketingServiceDetails/MoreInformation";
import TermsAndConditions from "@/src/components/MarketingServiceDetails/TermsandConditions";
import WhyChooseUs from "@/src/components/MarketingServiceDetails/WhyChooseUs";
import { ChevronLeft, ClockIcon, Eye, Share2, ShoppingCart, ZapIcon } from "lucide-react";
import Link from "next/link";
import HowItWorks from "@/src/components/MarketingServiceDetails/HowItWorks";
import ChooseProvider from "@/src/components/MarketingServiceDetails/ChooseProvider";
import FAQs from "@/src/components/MarketingServiceDetails/Faq";
import RatingsReviews from "@/src/components/MarketingServiceDetails/Reviews";
import ConnectWith from "@/src/components/MarketingServiceDetails/ConnectWith";
import Documents from "@/src/components/MarketingServiceDetails/Documents";
import Packages from "@/src/components/MarketingServiceDetails/Packages";
import AssuredByFetchTrue from "@/src/components/MarketingServiceDetails/AssuredFetchTrue";
import { useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import { useReview } from "@/src/context/ReviewContext";
import { useCheckout } from "@/src/context/CheckoutContext";

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



export default function ServiceDetails() {
    const { service, loading, error, fetchServiceDetails } = useServiceDetails();
    const { reviewServices, fetchReviews } = useReview();
    const params = useParams();
    const serviceId = params.id as string;

    const { selectedPackage } = useCheckout();

    const basicPackage = service?.serviceDetails?.packages?.[0];

    const displayPackage = selectedPackage ?? basicPackage;

    const searchParams = useSearchParams();

    const serviceName = searchParams.get("service");

    useEffect(() => {
        if (!serviceId) return;

        fetchServiceDetails(serviceId);
        fetchReviews(serviceId)
    }, [serviceId]);


    if (loading) return <p className="text-[12px] md:text-[24px] text-center mt-15">Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <section className="w-full bg-white">
                {/*  DESKTOP  */}
                <div className="hidden lg:flex gap-8 p-8 max-w-[1400px] mx-auto">
                    <div className="flex flex-col gap-3">


                        {/*  HEADER BAR  */}
                        <div className="hidden lg:block">
                            <div className="w-screen fixed top-0 z-50 -ml-32 bg-white mx-auto flex items-center justify-between px-8 py-4">

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
                        </div>

                        <section className="bg-white">
                            <div className="hidden lg:flex gap-8 p-8 max-w-[1400px] mx-auto mt-6">

                                {/* LEFT IMAGE */}
                                <div className="md:w-[652px] md:h-[555px] rounded-xl overflow-hidden">
                                    <img
                                        src={service?.bannerImages?.[0]}
                                        alt="Marketing"
                                        className="w-full h-full object-fit"
                                    />
                                </div>

                                {/* RIGHT CONTENT */}
                                <div className="flex-1 space-y-4 my-auto">
                                    <div className="flex-1 space-y-4">
                                        <h1 className="text-[40px] font-semibold whitespace-nowrap">{serviceName}</h1>
                                        <p className="text-gray-500 text-[24px]">Digital Marketing</p>

                                        <div className="flex items-center gap-2 text-[20px]">
                                            <span className="text-yellow-500">★</span>
                                            <span className="font-semibold">{service?.averageRating}</span>
                                            <span className="text-gray-500">({service?.totalReviews ?? 0} {service?.totalReviews === 1 ? 'review' : 'reviews'})</span>
                                        </div>

                                        {/* <div className="gap-4 p-2 flex items-center">
                                            <p className="md:text-[24px]">Starting -</p>
                                            <span className="md:text-[36px] font-semibold">₹{DATA.price}</span>
                                            <p className="text-[24px] text-[#2164F4]">View Packages</p>
                                        </div> */}
                                        <div className="p-4 mt-2 w-full">
                                            <div className="flex items-center gap-4">
                                                <span className="text-gray-500 text-[24px]">Starting from</span>
                                                <span className="text-[36px] font-semibold">₹{service?.serviceDetails?.packages?.[0]?.discountedPrice}</span>
                                                <span className="line-through text-[20px] text-gray-400">
                                                    ₹{service?.serviceDetails?.packages?.[0]?.price}
                                                </span>
                                                <span className="text-[16px] text-blue-600 font-semibold px-3 py-1 rounded">
                                                    {service?.serviceDetails?.packages?.[0]?.discount}% OFF
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

                                        <div className="rounded-xl p-5 border-t-4 border-blue-500 bg-gray-200 flex justify-between items-center">
                                            <div className="space-y-4">
                                                <p className="font-semibold text-[24px]">Franchise Commission</p>
                                                <p className="text-green-600 text-[32px] font-semibold">
                                                   Earn upto {service?.franchiseDetails?.commission}
                                                </p>
                                            </div>
                                            <button className="text-[#281A83] text-[24px] mt-10 flex items-center gap-1">
                                                T&amp;C <span className="text-[24px]">›</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>

                    </div>

                </div>

                {/*  MOBILE  */}
                <div className="lg:hidden">
                    <div className="mt-4 px-4 py-3 flex items-center justify-between">

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

                    {/* IMAGE */}
                    <div className="mx-4 mt-4 rounded-xl overflow-hidden">
                        <img
                            src={service?.bannerImages?.[0]}
                            alt="service"
                            className="w-full h-[220px] object-fit"
                        />
                    </div>

                    {/*  CONTENT = */}
                    <div className="px-4 mt-4 space-y-3">

                        {/* TITLE + RATING */}
                        <div className="flex justify-between items-start">
                            <h2 className="text-[16px] font-semibold leading-tight">
                                {service?.serviceName}
                            </h2>

                            <div className="flex flex-col items-end text-xs">
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-500">★</span>
                                    <span>{reviewServices?.averageRating}</span>
                                </div>
                                <span className="text-gray-400 whitespace-nowrap">
                                    ({reviewServices?.totalReviews} reviews) 
                                </span>
                            </div>
                        </div>

                        <p className="text-[13px] text-gray-500">{service?.category?.name}</p>

                        {/* PRICE */}
                        <div className="p-4 -mt-6 w-full">
                            <span className="text-gray-500 text-[12px] ">Starting from</span>
                            <div className="flex items-center gap-4">

                                <span className="text-[20px] font-semibold">₹ {service?.serviceDetails?.packages?.[0]?.discountedPrice}</span>
                                <span className="line-through text-[12px] text-gray-400">
                                    ₹ {service?.serviceDetails?.packages?.[0]?.price}
                                </span>
                                <span className="text-[10px] text-blue-600 font-semibold px-3 py-1 rounded whitespace-nowrap">
                                    {service?.serviceDetails?.packages?.[0]?.discount}% OFF
                                </span>
                            </div>
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
                        <div className="mt-4 bg-white rounded-xl p-4 shadow border-t-4 border-blue-500 flex justify-between items-center">
                            <div>
                                <p className="text-[13px] font-medium">Franchise Commission</p>
                                <p className="text-green-600 font-semibold">
                                    {service?.franchiseDetails?.commission}
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
                <AboutUs aboutUs={service?.serviceDetails.aboutUs || []} highlight={service?.serviceDetails.highlight || []} />
                <WhyChooseUs whyChooseUs={service?.serviceDetails.whyChooseUs || []} />
                <HowItWorks howItWorks={service?.serviceDetails.howItWorks || []} />
                <AssuredByFetchTrue assuredByFetchTrue={service?.serviceDetails.assuredByFetchTrue || []} />
                <Packages packages={service?.serviceDetails.packages || []} />
                <Documents weRequired={service?.serviceDetails.weRequired || []} weDeliver={service?.serviceDetails.weDeliver || []} />
                <MoreInformation moreInfo={service?.serviceDetails.moreInfo || []} />
                <ChooseProvider />
                <TermsAndConditions termsAndConditions={service?.serviceDetails.termsAndConditions || []} />
                <FAQs faq={service?.serviceDetails?.faq || []} />
                <RatingsReviews reviews={reviewServices} />
                <ConnectWith connectWith={service?.serviceDetails?.connectWith || []} />
            </section>
        </>

    );
}
