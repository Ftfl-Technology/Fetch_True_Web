// "use client";

// import AboutSection from "@/src/components/ItServiceDetails/About";
// import AssuredByFetchTrue from "@/src/components/ItServiceDetails/AssuredByFetchTrue";
// import ChooseProvider from "@/src/components/ItServiceDetails/ChooseProvider";
// import ConnectWith from "@/src/components/ItServiceDetails/ConnectWith";
// import Documents from "@/src/components/ItServiceDetails/Documents";
// import FAQs from "@/src/components/ItServiceDetails/Faq";
// import HowItWorks from "@/src/components/ItServiceDetails/HowItWorks";
// import MoreInformation from "@/src/components/ItServiceDetails/MoreInformation";
// import Packages from "@/src/components/ItServiceDetails/Packages";
// import RatingsReviews from "@/src/components/ItServiceDetails/Reviews";
// import TermsAndConditions from "@/src/components/ItServiceDetails/TermsAndConditions";
// import WhyChooseUs from "@/src/components/ItServiceDetails/WhyChooseUs";
// import { useParams, useRouter, useSearchParams } from "next/navigation";
// import { ChevronLeft, Share2, ShoppingCart } from "lucide-react";
// import Link from "next/link";
// import { useEffect } from "react";
// import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
// import { useReview } from "@/src/context/ReviewContext";
// import { useCheckout } from "@/src/context/CheckoutContext";
// import { useModule } from "@/src/context/ModuleContext";

// const ServiceDetails = () => {

//     const { service, loading, error, fetchServiceDetails } = useServiceDetails();
//     const { reviewServices, fetchReviews } = useReview();
//     const { modules } = useModule();
//     const params = useParams();
//     const router = useRouter();
//     const serviceId = params.id as string;



//     const { selectedPackage,  setSelectedPackage} = useCheckout();

//     const basicPackage = service?.serviceDetails?.packages?.[0];

//     const displayPackage = selectedPackage ?? basicPackage;



//     useEffect(() => {
//         if (!serviceId) return;

//         fetchServiceDetails(serviceId);
//         fetchReviews(serviceId)
//     }, [serviceId]);

//     const itServicesModule = modules?.find(
//         (module: any) => module.name === "It Services"
//     );

//     const itServicesId = itServicesModule?._id;


//     const searchParams = useSearchParams();

//     const serviceName = searchParams.get("service");


//     function extractBenefits(html: string): string[] {
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, "text/html");
//         const results: string[] = [];

//         doc.querySelectorAll("li").forEach(li => {
//             const text = li.textContent?.trim();
//             if (text) results.push(text);
//         });

//         doc.querySelectorAll("p").forEach(p => {
//             if (!p.closest("li")) {
//                 const text = p.textContent?.trim();
//                 if (text) results.push(text);
//             }
//         });

//         if (results.length === 0) {
//             const text = doc.body.textContent || "";
//             text
//                 .split("\n")
//                 .map(t => t.trim())
//                 .filter(Boolean)
//                 .forEach(t => results.push(t));
//         }

//         return results;
//     }

//     const parsedBenefits = service?.serviceDetails?.benefits.flatMap(extractBenefits) || [];

//     // Split ONLY for desktop
//     const mid = Math.ceil(parsedBenefits.length / 2);
//     const left = parsedBenefits.slice(0, mid);
//     const right = parsedBenefits.slice(mid);




//     if (loading) return <p className="text-[12px] md:text-[24px] text-center mt-15">Loading...</p>;
//     if (error) return <p>{error}</p>;
//     return (
//         <>
//             <section className="relative w-full lg:p-8 p-0">
//                 <div className="flex flex-col lg:flex-row gap-6 lg:p-4 w-full">

//                     {/* ================= DESKTOP VERSION ================= */}
//                     <div className="hidden lg:block w-full bg-white">
//                         <div className="flex items-center justify-between w-screen  px-8 pt-6 fixed top-0 z-50 bg-white -ml-14">

//                             {/* SERVICE DETAILS */}
//                             <div className="flex items-center gap-3 ml-30">
//                                 <button
//                                     onClick={() => router.push(`/MainModules/It-Services/${itServicesId}`)}>
//                                     <ChevronLeft size={28} className="cursor-pointer" />
//                                 </button>
//                                 <h1 className="md:text-[18px] lg:text-[24px] font-semibold">Service Details</h1>
//                             </div>

//                             {/* RIGHT: ACTION BUTTONS */}
//                             <div className="flex items-center gap-3 mt-2 mb-4">

//                                 {/* Package Selected Price */}
//                                 <div>
//                                     {displayPackage && (
//                                         <div className="text-right flex flex-row gap-4 items-center mr-6 rounded-lg px-4 py-3 bg-gray-300">
//                                             <p className="text-md text-gray-500 font-medium">
//                                                 {selectedPackage ? "Selected Package" : "Starting From"}
//                                             </p>
//                                             <p className="text-md font-semibold text-black">
//                                                 ₹{displayPackage.discountedPrice.toLocaleString()}
//                                             </p>
//                                         </div>
//                                     )}

//                                 </div>


//                                 <Link href={`/MainModules/Checkout?id=${serviceId}`}>
//                                     <button className="flex items-center gap-2 bg-green-500 cursor-pointer hover:bg-green-600 text-white px-4 py-2 rounded-md lg:text-[20px] font-medium">
//                                         <ShoppingCart className="w-[29px] h-[29px]" />
//                                         Check out
//                                     </button>
//                                 </Link>

//                                 <button className="flex items-center gap-2 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-md lg:text-[20px] font-medium">
//                                     <Share2 className="w-[29px] h-[29px]" />
//                                     Share
//                                 </button>
//                             </div>
//                         </div>


//                         {/* ===== MAIN CONTENT ===== */}
//                         <div className="flex gap-6 p-8 max-w-[1400px] mx-auto mt-4">

//                             {/* ===== LEFT: IMAGE ===== */}
//                             <div className="w-[652px]">
//                                 <div className="w-full h-[503px] rounded-lg overflow-hidden">
//                                     <img
//                                         src={service?.bannerImages?.[0] || "/image/itservicenavbg.png"}
//                                         alt="Managed IT Service"
//                                         className="w-full h-full object-fit"
//                                     />
//                                 </div>
//                             </div>

//                             {/* ===== RIGHT: DETAILS ===== */}
//                             <div className="flex flex-col flex-1">

//                                 {/* TITLE */}
//                                 <div className="space-y-4">
//                                     <h2 className="text-[40px] font-semibold text-black">
//                                         {serviceName}
//                                     </h2>

//                                     <p className="text-gray-500 text-[32px]">IT Service</p>

//                                     <div className="flex items-center gap-2 text-[32px] text-gray-600">
//                                         <span className="text-yellow-500">★</span>
//                                         <span className="font-medium text-black">{reviewServices?.averageRating}</span>
//                                         <span>({reviewServices?.totalReviews} reviews)</span>
//                                     </div>
//                                 </div>

//                                 {/* PRICE BOX */}
//                                 <div className="border rounded-lg p-4 mt-10 w-full">
//                                     <div className="flex items-center gap-4">
//                                         <span className="text-gray-500 text-[24px]">Price</span>
//                                         <span className="text-[36px] font-semibold">{service?.price}</span>
//                                         <span className="line-through text-[20px] text-gray-400">
//                                             {service?.discountedPrice}
//                                         </span>
//                                         <span className="bg-black text-white text-[16px] px-3 py-1 rounded">
//                                             {service?.discount} OFF
//                                         </span>
//                                     </div>
//                                 </div>

//                                 {/* COMMISSION BOX */}
//                                 <div className="border border-[#8B5E3C] rounded-lg p-5 mt-8 flex justify-between items-center">
//                                     <div>
//                                         <p className="text-[32px] font-medium">
//                                             Franchise Commission
//                                         </p>
//                                         <p className="text-green-600 text-[36px] font-semibold">
//                                             Earn Up to 7%
//                                         </p>
//                                     </div>

//                                     <button className="text-[24px] font-medium flex items-center gap-2">
//                                         T&amp;C <span>{">"}</span>
//                                     </button>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>


//                     {/* ================= MOBILE VERSION ================= */}
//                     <div className="block lg:hidden w-full mb-6">

//                         {/* ===== IMAGE + HEADER ===== */}
//                         <div className="relative w-full h-[380px] overflow-hidden">

//                             {/* HEADER OVER IMAGE */}
//                             <div className="absolute fixed top-0 left-0 z-10 w-full flex items-center justify-between px-4 py-4 bg-white/80 backdrop-blur-md">

//                                 {/* LEFT */}
//                                 <div className="flex items-center gap-3">
//                                     <Link href="/MainModules/ITService">
//                                         <ChevronLeft size={26} />
//                                     </Link>
//                                     <h1 className="text-base font-semibold">Service Details</h1>
//                                 </div>

//                                 {/* RIGHT – ACTION BUTTONS */}
//                                 <div className="flex flex-col-reverse md:flex-row items-end md:items-center gap-2">

//                                     {/* PRICE */}
//                                     {displayPackage && (
//                                         <div className="w-full md:w-auto">
//                                             <div className="text-right flex flex-row gap-4 items-center md:mr-2 rounded-md p-1 bg-gray-300">
//                                                 <p className="text-xs text-gray-500">
//                                                     {selectedPackage ? "Selected Package" : "Starting From"}
//                                                 </p>
//                                                 <p className="text-sm font-semibold text-black">
//                                                     ₹{displayPackage.discountedPrice.toLocaleString()}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     )}

//                                     {/* BUTTONS */}
//                                     <div className="flex items-center gap-2">
//                                         <Link href={`/MainModules/Checkout?id=${serviceId}`}>
//                                             <button className="flex items-center gap-1 bg-green-500 text-white px-3 py-2 rounded-md text-xs font-medium">
//                                                 <ShoppingCart className="w-4 h-4" />
//                                                 Checkout
//                                             </button>
//                                         </Link>

//                                         <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-md text-xs font-medium">
//                                             <Share2 className="w-4 h-4" />
//                                             Share
//                                         </button>
//                                     </div>
//                                 </div>

//                             </div>

//                             {/* IMAGE */}
//                             <img
//                                 src={service?.bannerImages?.[0]}
//                                 alt="Service banner"
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>

//                         {/* ===== CONTENT ===== */}
//                         <div className="flex flex-col gap-4 px-4 pt-4">

//                             <h2 className="text-lg font-semibold text-black">
//                                 {serviceName || "Managed IT Service & Support"}
//                             </h2>

//                             <p className="text-gray-500 text-sm">IT Service</p>

//                             {/* PRICE + RATING */}
//                             <div className="flex justify-between items-start">

//                                 <div>
//                                     <p className="line-through text-gray-400 text-sm">₹14,000</p>
//                                     <div className="flex items-center gap-2">
//                                         <span className="text-2xl font-bold">₹10,000</span>
//                                         <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
//                                             25% OFF
//                                         </span>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center gap-1 text-sm">
//                                     <span className="text-yellow-500">★</span>
//                                     <span className="font-medium">4.8</span>
//                                 </div>
//                             </div>

//                             <p className="text-xs text-gray-500">(2,400+ reviews)</p>

//                             {/* COMMISSION BOX */}
//                             <div className="bg-[#E9EFF6] rounded-xl p-4 flex justify-between items-center">
//                                 <div>
//                                     <p className="text-sm font-medium">Franchise Commission</p>
//                                     <p className="text-green-600 text-lg font-semibold">
//                                         Earn Up to 7%
//                                     </p>
//                                 </div>

//                                 <button className="flex items-center gap-1 text-gray-700 text-sm font-medium">
//                                     T&amp;C <span className="text-lg">&gt;</span>
//                                 </button>
//                             </div>

//                         </div>
//                     </div>


//                 </div>
//             </section>

//             {/* Benefits Section */}
//             <section className="relative w-full p-8 bg-gray-100">
//                 <div className="rounded-xl w-full  mt-5">
//                     {/* Title */}
//                     <div className="flex items-start md:justify-center">
//                         <h2
//                             className="text-white bg-black px-6 py-2 text-[12px] md:text-[18px] lg:text-[32px] font-semibold mb-6 inline-block"
//                             style={{
//                                 clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)"

//                             }}
//                         >
//                             Benefits
//                         </h2>
//                     </div>

//                     {/* Benefits List */}
//                     <div className="flex flex-col mx-auto md:w-[700px] lg:w-[1320px] lg:h-[354px] md:grid md:grid-cols-2 bg-white rounded-xl md:p-12 p-2 gap-y-4 gap-x-2">
//                         {parsedBenefits.map((item, index) => (
//                             <div key={index} className="flex items-start gap-2">
//                                 {/* <img src="/image/checkmark.png" alt="check" className="w-5 h-5 w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0" /> */}
//                                 <p className="text-black md:text-[18px] lg:text-[24px]">{item}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>



//             <section className="relative w-full">
//                 <AboutSection aboutUs={service?.serviceDetails?.aboutUs || []} highlight={service?.serviceDetails?.highlight || []} />
//                 <WhyChooseUs whyChooseUs={service?.serviceDetails?.whyChooseUs || []} />
//                 <HowItWorks howItWorks={service?.serviceDetails?.howItWorks || []} />
//                 <AssuredByFetchTrue assuredByFetchTrue={service?.serviceDetails?.assuredByFetchTrue || []} />
//                 <Packages packages={service?.serviceDetails?.packages || []} />
//                 <Documents weRequired={service?.serviceDetails?.weRequired || []} weDeliver={service?.serviceDetails?.weDeliver || []} />
//                 <MoreInformation moreInfo={service?.serviceDetails?.moreInfo || []} />
//                 <ChooseProvider />
//                 <TermsAndConditions termsAndConditions={service?.serviceDetails?.termsAndConditions || []} />
//                 <FAQs faq={service?.serviceDetails?.faq || []} />
//                 <RatingsReviews reviews={reviewServices} />
//                 <ConnectWith connectWith={service?.serviceDetails?.connectWith || []} />
//             </section>
//         </>
//     );
// };

// export default ServiceDetails;

















"use client";

import AboutSection from "@/src/components/ItServiceDetails/About";
import AssuredByFetchTrue from "@/src/components/ItServiceDetails/AssuredByFetchTrue";
import ChooseProvider from "@/src/components/ItServiceDetails/ChooseProvider";
import ConnectWith from "@/src/components/ItServiceDetails/ConnectWith";
import Documents from "@/src/components/ItServiceDetails/Documents";
import FAQs from "@/src/components/ItServiceDetails/Faq";
import HowItWorks from "@/src/components/ItServiceDetails/HowItWorks";
import MoreInformation from "@/src/components/ItServiceDetails/MoreInformation";
import Packages from "@/src/components/ItServiceDetails/Packages";
import RatingsReviews from "@/src/components/ItServiceDetails/Reviews";
import TermsAndConditions from "@/src/components/ItServiceDetails/TermsAndConditions";
import WhyChooseUs from "@/src/components/ItServiceDetails/WhyChooseUs";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, Eye, Share2, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import { useReview } from "@/src/context/ReviewContext";
import { useCheckout } from "@/src/context/CheckoutContext";
import { useModule } from "@/src/context/ModuleContext";

interface Module {
    _id: string;
    name: string;
    [key: string]: unknown;
}

const ServiceDetails = () => {

    const { service, loading, error, fetchServiceDetails } = useServiceDetails();
    const { reviewServices, fetchReviews } = useReview();
    const { modules } = useModule();
    const params = useParams();
    const router = useRouter();
    const serviceId = params.id as string;

    const { selectedPackage, setSelectedPackage } = useCheckout();

    // Track previous service ID
    const prevServiceIdRef = useRef<string | null>(null);

    const basicPackage = service?.serviceDetails?.packages?.[0];

    const displayPackage = selectedPackage ?? basicPackage;

    
    useEffect(() => {
        // If service ID changed (and it's not the first load)
        if (prevServiceIdRef.current && prevServiceIdRef.current !== serviceId) {
           setSelectedPackage(null, serviceId);
        }
        
        // Update the ref
        prevServiceIdRef.current = serviceId;
    }, [serviceId, setSelectedPackage]);

    useEffect(() => {
        if (!serviceId) return;

        fetchServiceDetails(serviceId);
        fetchReviews(serviceId)
    }, [serviceId, fetchServiceDetails, fetchReviews]);

    const itServicesModule = modules?.find(
        (module: Module) => module.name === "It Services"
    );

    const itServicesId = itServicesModule?._id;

    const searchParams = useSearchParams();
    const serviceName = searchParams.get("service");

    function extractBenefits(html: string): string[] {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const results: string[] = [];

        doc.querySelectorAll("li").forEach(li => {
            const text = li.textContent?.trim();
            if (text) results.push(text);
        });

        doc.querySelectorAll("p").forEach(p => {
            if (!p.closest("li")) {
                const text = p.textContent?.trim();
                if (text) results.push(text);
            }
        });

        if (results.length === 0) {
            const text = doc.body.textContent || "";
            text
                .split("\n")
                .map(t => t.trim())
                .filter(Boolean)
                .forEach(t => results.push(t));
        }

        return results;
    }

    const parsedBenefits = service?.serviceDetails?.benefits?.flatMap(extractBenefits) || [];

    // if (loading) return <p className="text-[12px] md:text-[24px] text-center mt-15">Loading...</p>;
    // if (error) return <p>{error}</p>;
    
    return (
        <>
            <section className="relative w-full lg:p-8 p-0">
                <div className="flex flex-col lg:flex-row gap-6 lg:p-4 w-full">

                    {/*  DESKTOP VERSION  */}
                    <div className="hidden lg:block w-full bg-white">
                        <div className="flex items-center justify-between w-screen  px-8 pt-6 fixed top-0 z-50 bg-white -ml-14">

                            {/* SERVICE DETAILS */}
                            <div className="flex items-center gap-3 ml-30">
                                <button
                                    onClick={() => router.push(`/MainModules/It-Services/${itServicesId}`)}>
                                    <ChevronLeft size={28} className="cursor-pointer" />
                                </button>
                                <h1 className="md:text-[18px] lg:text-[24px] font-semibold">Service Details</h1>
                            </div>

                            {/* RIGHT: ACTION BUTTONS */}
                            <div className="flex items-center gap-3 mt-2 mb-4">

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
                        <div className="flex gap-6 p-8 max-w-[1400px] mx-auto mt-4">

                            {/* ===== LEFT: IMAGE ===== */}
                            <div className="w-[652px]">
                                <div className="w-full h-[503px] rounded-lg overflow-hidden">
                                    <img
                                        src={service?.bannerImages?.[0] || "/image/itservicenavbg.png"}
                                        alt="Managed IT Service"
                                        className="w-full h-full object-fit"
                                    />
                                </div>
                            </div>

                            {/*  RIGHT: DETAILS  */}
                            <div className="flex flex-col flex-1">

                                {/* TITLE */}
                                <div className="space-y-2">
                                    <h2 className="text-[40px] font-semibold text-black">
                                        {serviceName}
                                    </h2>

                                    <p className="text-gray-500 text-[32px]">{service?.category.name}</p>

                                    <div className="flex items-center gap-2 text-[32px] text-gray-600">
                                        <span className="text-yellow-500">★</span>
                                        <span className="font-medium text-black">{service?.averageRating}</span>
                                        <span> ({service?.totalReviews ?? 0} {service?.totalReviews === 1 ? 'review' : 'reviews'})</span>
                                    </div>
                                </div>

                                {/* PRICE BOX */}
                                <div className="border rounded-lg p-4 mt-6 w-full">
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
                               
                               {/* Key values */}
                                 <div className="flex gap-2 mt-4 flex-wrap">
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

                                {/* COMMISSION BOX */}
                                <div className="border border-[#8B5E3C] rounded-lg p-5 mt-8 flex justify-between items-center">
                                    <div>
                                        <p className="text-[32px] font-medium">
                                            Franchise Commission
                                        </p>
                                        <p className="text-green-600 text-[36px] font-semibold">
                                            Earn Up to {service?.franchiseDetails.commission}
                                        </p>
                                    </div>

                                    <button className="text-[24px] font-medium flex items-center gap-2">
                                        T&amp;C <span>{">"}</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/*  MOBILE VERSION  */}
                    <div className="block lg:hidden w-full mb-6">

                        {/* ===== IMAGE + HEADER ===== */}
                        <div className="relative w-full h-[380px] overflow-hidden">

                            {/* HEADER OVER IMAGE */}
                            <div className="absolute fixed top-0 left-0 z-10 w-full flex items-center justify-between px-4 py-4 bg-white/80 backdrop-blur-md">

                                {/* LEFT */}
                                <div className="flex items-center gap-3">
                                    <Link href="/MainModules/ITService">
                                        <ChevronLeft size={26} />
                                    </Link>
                                    <h1 className="text-base font-semibold">Service Details</h1>
                                </div>

                                {/* RIGHT – ACTION BUTTONS */}
                                <div className="flex flex-col-reverse md:flex-row items-end md:items-center gap-2">

                                    {/* PRICE */}
                                    {displayPackage && (
                                        <div className="w-full md:w-auto">
                                            <div className="text-right flex flex-row gap-4 items-center md:mr-2 rounded-md p-1 bg-gray-300">
                                                <p className="text-xs text-gray-500">
                                                    {selectedPackage ? "Selected Package" : "Starting From"}
                                                </p>
                                                <p className="text-sm font-semibold text-black">
                                                    ₹{displayPackage.discountedPrice.toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* BUTTONS */}
                                    <div className="flex items-center gap-2">
                                        <Link href={`/MainModules/Checkout?id=${serviceId}`}>
                                            <button className="flex items-center gap-1 bg-green-500 text-white px-3 py-2 rounded-md text-xs font-medium">
                                                <ShoppingCart className="w-4 h-4" />
                                                Checkout
                                            </button>
                                        </Link>

                                        <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-md text-xs font-medium">
                                            <Share2 className="w-4 h-4" />
                                            Share
                                        </button>
                                    </div>
                                </div>

                            </div>

                            {/* IMAGE */}
                            <img
                                src={service?.bannerImages?.[0]}
                                alt="Service banner"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* ===== CONTENT ===== */}
                        <div className="flex flex-col gap-4 px-4 pt-4">

                            <h2 className="text-lg font-semibold text-black">
                                {serviceName || "Managed IT Service & Support"}
                            </h2>

                            <p className="text-gray-500 text-sm">IT Service</p>

                            {/* PRICE + RATING */}
                            <div className="flex justify-between items-start">

                                <div>
                                    <div className="text-[12px] md:text-[15px]">Starting from</div>
                                    <p className="line-through text-gray-400 text-sm">₹{service?.serviceDetails?.packages[0]?.price}</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold">₹{service?.serviceDetails?.packages[0]?.discountedPrice}</span>
                                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                                            {service?.serviceDetails?.packages[0]?.discount}% OFF
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 text-sm">
                                    <span className="text-yellow-500">★</span>
                                    <span className="font-medium">{service?.averageRating}</span>
                                     <p className="text-xs text-gray-500">({service?.totalReviews ?? 0} {service?.totalReviews === 1 ? 'review' : 'reviews'})</p>
                                </div>
                            </div>

                           


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

                            {/* COMMISSION BOX */}
                            <div className="bg-[#E9EFF6] rounded-xl p-4 flex justify-between items-center">
                                <div>
                                    <p className="text-sm font-medium">Franchise Commission</p>
                                    <p className="text-green-600 text-lg font-semibold">
                                        Earn Up to {service?.franchiseDetails.commission}
                                    </p>
                                </div>

                                <button className="flex items-center gap-1 text-gray-700 text-sm font-medium">
                                    T&amp;C <span className="text-lg">&gt;</span>
                                </button>
                            </div>

                        </div>
                    </div>


                </div>
            </section>

            {/* Benefits Section */}
            <section className="relative w-full p-8 bg-gray-100">
                <div className="rounded-xl w-full  mt-5">
                    {/* Title */}
                    <div className="flex items-start md:justify-center">
                        <h2
                            className="text-white bg-black px-6 py-2 text-[12px] md:text-[18px] lg:text-[32px] font-semibold mb-6 inline-block"
                            style={{
                                clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)"

                            }}
                        >
                            Benefits
                        </h2>
                    </div>

                    {/* Benefits List */}
                    <div className="flex flex-col mx-auto md:w-[700px] lg:w-[1320px] lg:h-[354px] md:grid md:grid-cols-2 bg-white rounded-xl md:p-12 p-2 gap-y-4 gap-x-2">
                        {parsedBenefits.map((item, index) => (
                            <div key={index} className="flex items-start gap-2">
                                {/* <img src="/image/checkmark.png" alt="check" className="w-5 h-5 w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0" /> */}
                                <p className="text-black md:text-[18px] lg:text-[24px]">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            <section className="relative w-full">
                <AboutSection aboutUs={service?.serviceDetails?.aboutUs || []} highlight={service?.serviceDetails?.highlight || []} />
                <WhyChooseUs whyChooseUs={service?.serviceDetails?.whyChooseUs || []} />
                <HowItWorks howItWorks={service?.serviceDetails?.howItWorks || []} />
                <AssuredByFetchTrue assuredByFetchTrue={service?.serviceDetails?.assuredByFetchTrue || []} />
                <Packages packages={service?.serviceDetails?.packages || []} />
                <Documents weRequired={service?.serviceDetails?.weRequired || []} weDeliver={service?.serviceDetails?.weDeliver || []} />
                <MoreInformation moreInfo={service?.serviceDetails?.moreInfo || []} />
                <ChooseProvider />
                <TermsAndConditions termsAndConditions={service?.serviceDetails?.termsAndConditions || []} />
                <FAQs faq={service?.serviceDetails?.faq || []} />
                <RatingsReviews reviews={reviewServices} />
                <ConnectWith connectWith={service?.serviceDetails?.connectWith || []} />
            </section>
        </>
    );
};

export default ServiceDetails;