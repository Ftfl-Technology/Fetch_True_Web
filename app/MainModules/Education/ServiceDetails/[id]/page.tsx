"use client";

import AboutUs from "@/src/components/EducationServiceDetails/About";
import Benefits from "@/src/components/EducationServiceDetails/Benefits";
import Certification from "@/src/components/EducationServiceDetails/Certification";
import ConnectWith from "@/src/components/EducationServiceDetails/ConnectWith";
import CourseCurriculum from "@/src/components/EducationServiceDetails/CourseCurriculum";
import CourseIncludes from "@/src/components/EducationServiceDetails/CourseIncludes";
import CourseOffers from "@/src/components/EducationServiceDetails/CourseOffers";
import FAQs from "@/src/components/EducationServiceDetails/Faq";
import InstructorSection from "@/src/components/EducationServiceDetails/InstructorSection";
import LearnAndEligible from "@/src/components/EducationServiceDetails/LearnandEligible";
import MoreInformation from "@/src/components/EducationServiceDetails/MoreInformation";
import RatingsReviews from "@/src/components/EducationServiceDetails/Reviews";
import TermsAndConditions from "@/src/components/EducationServiceDetails/TermsandConditions";
import WhyChooseUs from "@/src/components/EducationServiceDetails/WhyChooseUs";
import { ChevronLeft, Share2, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Eye, Pencil } from "lucide-react";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import { useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useReview } from "@/src/context/ReviewContext";
import { useCheckout } from "@/src/context/CheckoutContext";
import { useModule } from "@/src/context/ModuleContext";


type CourseInfo = {
    title: string;
    subtitle: string;
    rating: number;
    reviews: string;
    price: number;
    originalPrice: number;
    discount: string;
    emi: number;
    level: string;
    lessons: number;
    commission: string;
};

interface Module {
    _id: string;
    name: string;
    [key: string]: unknown;
}


export default function ServiceDetails() {

    const { service, loading, error, fetchServiceDetails } = useServiceDetails();
    const { reviewServices, fetchReviews } = useReview();
    const params = useParams();
    const router = useRouter();
    const { modules } = useModule();
    const serviceId = params.id as string;


    useEffect(() => {
        if (!serviceId) return;

        fetchServiceDetails(serviceId);
        fetchReviews(serviceId)
    }, [serviceId]);

    const searchParams = useSearchParams();

    const serviceName = searchParams.get("service");

    const educationModule = modules?.find(
        (module: Module) => module.name === "Education"
    );

    const educationId = educationModule?._id;



    if (loading) return <p className="text-[12px] md:text-[24px] text-center mt-15">Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <section className="w-full bg-white">
                {/*  DESKTOP  */}
                <div className="hidden lg:block w-full bg-white pt-8">

                    {/*  HEADER BAR  */}
                    <div className="w-screen fixed top-0 z-50 bg-white mx-auto flex items-center justify-between px-8 py-4">
                        {/* LEFT */}
                        <div className="flex items-center gap-3 ml-20">
                            <button
                                onClick={() => router.push(`/MainModules/Education/${educationId}`)}>
                                <ChevronLeft size={28} className="cursor-pointer" />
                            </button>
                            <h1 className="text-[24px] font-semibold">Service Details</h1>
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center gap-3 mr-15 mt-2">
                            <Link href="/MainModules/Checkout">
                                <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-[20px] font-medium">
                                    <ShoppingCart className="w-[29px] h-[29px]" />
                                    Check out
                                </button>
                            </Link>

                            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-[20px] font-medium">
                                <Share2 className="w-[29px] h-[29px]" />
                                Share
                            </button>
                        </div>
                    </div>

                    {/*  CONTENT BELOW HEADER  */}
                    <div className="flex gap-8 p-8 max-w-[1400px] mx-auto mt-4">

                        {/*  LEFT IMAGE  */}
                        <div className="flex flex-col gap-3">
                            <div className="relative w-[652px] h-[503px] rounded-lg overflow-hidden">
                                <img
                                    src={service?.bannerImages?.[0] || "/image/eduserbg.png"}
                                    alt="Education Service"
                                    className="w-full h-full object-fit rounded-lg mt-4"
                                />

                                {/* BADGES */}
                                <div className="absolute bottom-4 left-3 right-3 flex justify-between">
                                    {/* <div className="bg-white px-4 py-1 rounded-full text-[20px] shadow">
                                        • Online Mode
                                    </div> */}
                                    <div className="bg-white px-4 py-1 rounded-full text-[20px] shadow flex whitespace-nowrap items-center gap-1">
                                        <span className="text-green-500 text-lg leading-none">•</span>
                                        Online Mode
                                    </div>

                                    <div className="bg-white px-4 py-1 rounded-full text-[20px] shadow">
                                        Duration {service?.serviceDetails?.duration.weeks} Weeks {service?.serviceDetails?.duration.hours} Hours
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ===== RIGHT CONTENT ===== */}
                        <div className="flex-1 space-y-2">

                            <h1 className="text-[40px] font-semibold whitespace-nowrap">
                                {serviceName}
                            </h1>

                            <p className="text-xl text-gray-500">{service?.category.name}</p>

                            {/* RATING */}
                            <div className="flex items-center gap-2 text-[20px]">
                                <span className="text-yellow-500">★</span>
                                <span className="font-medium text-black">{reviewServices?.averageRating}</span>
                                <span> ({reviewServices?.totalReviews ?? 0} {reviewServices?.totalReviews === 1 ? 'review' : 'reviews'})</span>
                            </div>

                            {/* PRICE */}
                            {/* <div className="border flex flex-row items-center rounded-lg p-2 mt-4 w-[50%]">
                                <div className="lg:text-[20px]">Starting price from</div>
                                <div className="flex items-center gap-4">
                                    <span className="text-[36px] font-semibold"> ₹{service?.serviceDetails.packages[0]?.discountedPrice}</span>
                                    <span className="line-through text-[20px] text-gray-400">
                                        ₹{service?.serviceDetails.packages[0]?.price}
                                    </span>
                                    <span className="bg-black text-white text-[16px] px-3 py-1 rounded">
                                        {service?.serviceDetails.packages[0]?.discount}% OFF
                                    </span>
                                </div>
                            </div> */}
                            <div className="border flex flex-row rounded-lg p-2 items-center gap-2 mt-6 inline-flex">
                                <div className="lg:text-[20px]">Starting Form</div>
                                <div className="flex items-center gap-4">
                                    <span className="text-[36px] font-semibold"> ₹{service?.serviceDetails.packages[0]?.discountedPrice}</span>
                                    <span className="line-through text-[20px] text-gray-400">
                                        ₹{service?.serviceDetails.packages[0]?.price}
                                    </span>
                                    <span className="bg-black text-white text-[16px] px-3 py-1 rounded">
                                        {service?.serviceDetails.packages[0]?.discount}% OFF
                                    </span>
                                </div>
                            </div>

                            <p className="text-[20px]">EMI Option Available</p>

                            {/* META INFO */}
                            <div className="flex gap-4">
                                <div className="border rounded-full px-4 py-2">
                                    🎓 Level: {service?.serviceDetails.level}
                                </div>
                                <div className="border rounded-full px-4 py-2">
                                    📘 Lessons: {service?.serviceDetails.lessonCount}
                                </div>
                            </div>

                            {/* TAGS */}
                            {/* <div className="flex gap-4">
                                <div className="flex items-center bg-gray-200 px-4 py-2 rounded-3xl gap-2">
                                    <Eye size={24} className="text-gray-600" />
                                    <span className="text-[20px]">Design with empathy</span>
                                </div>

                                <div className="flex items-center bg-gray-200 px-4 py-2 rounded-3xl gap-2">
                                    <Pencil size={24} className="text-gray-600" />
                                    <span className="text-[20px]">Create and practice</span>
                                </div>
                            </div> */}
                            <div className="flex gap-2 flex-wrap">
                                {service?.keyValues?.map((item, index) => (
                                    <div key={item._id || index} className="flex items-center bg-gray-200 p-2 rounded-3xl gap-1">
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
                            <div className="border rounded-xl p-5 flex justify-between items-center">
                                <div>
                                    <p className="font-semibold text-[20px]">
                                        Franchise Commission
                                    </p>
                                    <p className="text-green-600 text-[28px] font-semibold">
                                        {service?.franchiseDetails?.commission}
                                    </p>
                                </div>

                                <button className="text-[#281A83] text-[20px] flex items-center gap-1">
                                    T&amp;C <span className="text-[24px]">›</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>


                {/* ================= MOBILE ================= */}
                <div className="lg:hidden">
                    <div className="relative flex flex-col mx-4 mt-12 rounded-xl overflow-hidden">

                        {/* ===== HEADER ===== */}
                        <div className="flex w-screen -ml-4 items-center justify-between fixed top-0 z-50 bg-white gap-3  mb-3">

                            {/* LEFT */}
                            <div className="flex items-center gap-1 md:ml-8 mt-4">
                                <Link href="/MainModules/Education">
                                    <ChevronLeft size={24} className="cursor-pointer" />
                                </Link>
                                <h1 className="text-[14px] md:text-[18px] font-semibold">Service Details</h1>
                            </div>

                            {/* RIGHT (Checkout + Share) */}
                            <div className="flex items-center gap-2 mr-5 mt-2 md:mr-8 md:mt-6 md:mb-2">
                                <Link href="/MainModules/Checkout">
                                    <button className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-2 py-2 md:px-3 md:py-2 rounded-md text-xs font-medium">
                                        <ShoppingCart className="w-4 h-4" />
                                        Checkout
                                    </button>
                                </Link>

                                <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-2 md:px-3 md:py-2 rounded-md text-xs font-medium">
                                    <Share2 className="w-4 h-4" />
                                    Share
                                </button>
                            </div>
                        </div>

                        {/* ===== IMAGE ===== */}
                        <img
                            src={service?.bannerImages?.[0] || "/image/eduserbg.png"}
                            alt="course"
                            className="w-full h-[220px] object-fit rounded-lg mt-8"
                        />

                        {/* ===== DURATION BADGES ===== */}
                        <div className="absolute -bottom-2 left-3 right-3 gap-1 flex justify-between">
                            <div className="bg-white px-4 py-1 rounded-full text-xs shadow flex whitespace-nowrap items-center gap-1">
                                <span className="text-green-500 text-lg leading-none">•</span>
                                Online Mode
                            </div>

                            <div className="bg-white px-2 py-1 rounded-full text-xs shadow whitespace-nowrap">
                                Duration {service?.serviceDetails?.duration.weeks} Weeks {service?.serviceDetails?.duration.hours} Hours
                            </div>
                        </div>
                    </div>

                    {/* ===== CONTENT ===== */}
                    <div className="px-4 mt-4 space-y-3">

                        <div className="flex justify-between items-start">
                            <h2 className="text-[16px] font-semibold">{service?.serviceName}</h2>

                            <div className="flex flex-col items-center gap-1 text-sm">
                                <div>
                                    <span className="text-yellow-500">★</span>
                                    <span className="font-medium">{reviewServices?.averageRating}</span>
                                </div>
                                <p className="text-xs text-gray-400 whitespace-nowrap">
                                    <p className="text-xs text-gray-500">({reviewServices?.totalReviews ?? 0} {reviewServices?.totalReviews === 1 ? 'review' : 'reviews'})</p>
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500">{service?.category.name}</p>

                        {/* PRICE */}
                        <div className="border rounded-lg inline-block p-1">
                            <div className="flex flex-row">
                                Starting price from
                            </div>
                            <div className="flex items-center gap-2 text-sm mt-2">
                                <span className="font-semibold">₹{service?.serviceDetails?.packages[0]?.discountedPrice}</span>
                                <span className="line-through text-gray-400">
                                    ₹{service?.serviceDetails?.packages[0]?.price}
                                </span>
                                <span className="bg-black text-white text-[10px] px-3 py-1 rounded">{service?.serviceDetails?.packages[0]?.discount}%OFF</span>
                            </div>
                        </div>

                        <p className="text-[12px]">EMI Option available</p>

                        {/* FEATURES */}
                        <div className="flex gap-2 flex-wrap">
                            {service?.keyValues?.map((item, index) => (
                                <div key={item._id || index} className="flex items-center bg-gray-200 p-2 rounded-3xl gap-1">
                                    {item.icon ? (
                                        <img
                                            src={item.icon}
                                            alt={item.value}
                                            className="w-4 h-4 object-contain"
                                        />
                                    ) : (
                                        <Eye size={16} className="text-gray-600" />
                                    )}
                                    <span className="text-[12px] whitespace-nowrap">
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* TAGS */}
                        <div className="flex gap-3 mt-3">
                            <div className="border rounded-full px-3 py-1 text-xs">
                                🎓 Level:  {service?.serviceDetails.level}
                            </div>
                            <div className="border rounded-full px-3 py-1 text-xs">
                                📘 Lessons: {service?.serviceDetails.lessonCount}
                            </div>
                        </div>

                        {/* COMMISSION */}
                        <div className="mt-4 bg-white rounded-xl p-4 mb-2 border shadow flex justify-between items-center">
                            <div>
                                <p className="text-sm font-medium">Franchise Commission</p>
                                <p className="text-green-600 font-semibold">
                                    {service?.franchiseDetails?.commission}
                                </p>
                            </div>
                            <button className="flex items-center gap-1 text-sm">
                                T&amp;C <span className="text-lg">›</span>
                            </button>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <Benefits benefits={service?.serviceDetails?.benefits || []} />
                <AboutUs aboutUs={service?.serviceDetails?.aboutUs || []} />
                <WhyChooseUs whyChooseUs={service?.serviceDetails?.whyChooseUs || []} />
                <LearnAndEligible whatYouWillLearn={service?.serviceDetails?.whatYouWillLearn || []} eligibleFor={service?.serviceDetails?.eligibleFor || []} />
                <CourseCurriculum courseCurriculum={service?.serviceDetails?.courseCurriculum || []} />
                <CourseIncludes courseIncludes={service?.serviceDetails?.courseIncludes || []} />
                <Certification certificateImage={service?.serviceDetails?.certificateImage} />
                <InstructorSection />
                <CourseOffers assuredByFetchTrue={service?.serviceDetails?.assuredByFetchTrue || []} />
                <MoreInformation moreInfo={service?.serviceDetails?.moreInfo || []} />
                <TermsAndConditions termsAndConditions={service?.serviceDetails?.termsAndConditions || []} />
                <FAQs faq={service?.serviceDetails?.faq || []} />
                <RatingsReviews reviews={reviewServices} />
                <ConnectWith connectWith={service?.serviceDetails?.connectWith || []} />
            </section>
        </>

    );
}
