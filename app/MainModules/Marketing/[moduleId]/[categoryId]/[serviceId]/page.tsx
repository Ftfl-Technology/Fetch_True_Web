// "use client";

// import AboutUs from "@/src/components/MarketingServiceDetails/About";
// import Benefits from "@/src/components/MarketingServiceDetails/Benefits";
// import MoreInformation from "@/src/components/MarketingServiceDetails/MoreInformation";
// import TermsAndConditions from "@/src/components/MarketingServiceDetails/TermsandConditions";
// import WhyChooseUs from "@/src/components/MarketingServiceDetails/WhyChooseUs";
// import { ChevronLeft, ClockIcon, Eye, Share2, ShoppingCart, ZapIcon } from "lucide-react";
// import Link from "next/link";
// import HowItWorks from "@/src/components/MarketingServiceDetails/HowItWorks";
// import ChooseProvider from "@/src/components/MarketingServiceDetails/ChooseProvider";
// import FAQs from "@/src/components/MarketingServiceDetails/Faq";
// import RatingsReviews from "@/src/components/MarketingServiceDetails/Reviews";
// import ConnectWith from "@/src/components/MarketingServiceDetails/ConnectWith";
// import Documents from "@/src/components/MarketingServiceDetails/Documents";
// import Packages from "@/src/components/MarketingServiceDetails/Packages";
// import AssuredByFetchTrue from "@/src/components/MarketingServiceDetails/AssuredFetchTrue";
// import { useEffect } from "react";
// import { useParams, useSearchParams } from "next/navigation";
// import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
// import { useReview } from "@/src/context/ReviewContext";
// import { useCheckout } from "@/src/context/CheckoutContext";

// type CourseInfo = {
//     title: string;
//     subtitle: string;
//     rating: number;
//     reviews: string;
//     price: string;
//     originalPrice: number;
//     discount: string;
//     emi: number;
//     level: string;
//     lessons: number;
//     commission: string;
// };



// export default function ServiceDetails() {
//     const { service, loading, error, fetchServiceDetails } = useServiceDetails();
//     const { reviewServices, fetchReviews } = useReview();
//     const params = useParams();
//     const serviceId = params.id as string;

//     const { selectedPackage } = useCheckout();

//     const basicPackage = service?.serviceDetails?.packages?.[0];

//     const displayPackage = selectedPackage ?? basicPackage;

//     const searchParams = useSearchParams();

//     const serviceName = searchParams.get("service");

//     useEffect(() => {
//         if (!serviceId) return;

//         fetchServiceDetails(serviceId);
//         fetchReviews(serviceId)
//     }, [serviceId]);


//     if (loading) return <p className="text-[12px] md:text-[24px] text-center mt-15">Loading...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//         <>
//             <section className="w-full bg-white">
//                 {/*  DESKTOP  */}
//                 <div className="hidden lg:flex gap-8 p-8 max-w-[1400px] mx-auto">
//                     <div className="flex flex-col gap-3">


//                         {/*  HEADER BAR  */}
//                         <div className="hidden lg:block">
//                             <div className="w-screen fixed top-0 z-50 -ml-32 bg-white mx-auto flex items-center justify-between px-8 py-4">

//                                 {/* LEFT */}
//                                 <div className="flex items-center gap-3 mt-4 ml-28">
//                                     <button onClick={() => window.history.back()}>
//                                         <ChevronLeft size={24} className="cursor-pointer" />
//                                     </button>
//                                     <h1 className="md:text-[18px] lg:text-[24px] font-semibold">Service Details</h1>
//                                 </div>

//                                 {/* RIGHT */}
//                                 <div className="flex items-center gap-3 mt-4">

//                                     {/* Package Selected Price */}
//                                     <div>
//                                         {displayPackage && (
//                                             <div className="text-right flex flex-row gap-4 items-center mr-6 rounded-lg px-4 py-3 bg-gray-300">
//                                                 <p className="text-md text-gray-500 font-medium">
//                                                     {selectedPackage ? "Selected Package" : "Starting From"}
//                                                 </p>
//                                                 <p className="text-md font-semibold text-black">
//                                                     ₹{displayPackage.discountedPrice.toLocaleString()}
//                                                 </p>
//                                             </div>
//                                         )}

//                                     </div>


//                                     <Link href={`/MainModules/Checkout?id=${serviceId}`}>
//                                         <button className="flex items-center gap-2 bg-green-500 cursor-pointer hover:bg-green-600 text-white px-4 py-2 rounded-md lg:text-[20px] font-medium">
//                                             <ShoppingCart className="w-[29px] h-[29px]" />
//                                             Check out
//                                         </button>
//                                     </Link>

//                                     <button className="flex items-center gap-2 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-md lg:text-[20px] font-medium">
//                                         <Share2 className="w-[29px] h-[29px]" />
//                                         Share
//                                     </button>
//                                 </div>

//                             </div>
//                         </div>

//                         <section className="bg-white">
//                             <div className="hidden lg:flex gap-8 p-8 max-w-[1400px] mx-auto mt-6">

//                                 {/* LEFT IMAGE */}
//                                 <div className="md:w-[652px] md:h-[555px] rounded-xl overflow-hidden">
//                                     <img
//                                         src={service?.bannerImages?.[0]}
//                                         alt="Marketing"
//                                         className="w-full h-full object-fit"
//                                     />
//                                 </div>

//                                 {/* RIGHT CONTENT */}
//                                 <div className="flex-1 space-y-4 my-auto">
//                                     <div className="flex-1 space-y-4">
//                                         <h1 className="text-[40px] font-semibold whitespace-nowrap">{serviceName}</h1>
//                                         <p className="text-gray-500 text-[24px]">Digital Marketing</p>

//                                         <div className="flex items-center gap-2 text-[20px]">
//                                             <span className="text-yellow-500">★</span>
//                                             <span className="font-semibold">{service?.averageRating}</span>
//                                             <span className="text-gray-500">({service?.totalReviews ?? 0} {service?.totalReviews === 1 ? 'review' : 'reviews'})</span>
//                                         </div>

//                                         {/* <div className="gap-4 p-2 flex items-center">
//                                             <p className="md:text-[24px]">Starting -</p>
//                                             <span className="md:text-[36px] font-semibold">₹{DATA.price}</span>
//                                             <p className="text-[24px] text-[#2164F4]">View Packages</p>
//                                         </div> */}
//                                         <div className="p-4 mt-2 w-full">
//                                             <div className="flex items-center gap-4">
//                                                 <span className="text-gray-500 text-[24px]">Starting from</span>
//                                                 <span className="text-[36px] font-semibold">₹{service?.serviceDetails?.packages?.[0]?.discountedPrice}</span>
//                                                 <span className="line-through text-[20px] text-gray-400">
//                                                     ₹{service?.serviceDetails?.packages?.[0]?.price}
//                                                 </span>
//                                                 <span className="text-[16px] text-blue-600 font-semibold px-3 py-1 rounded">
//                                                     {service?.serviceDetails?.packages?.[0]?.discount}% OFF
//                                                 </span>
//                                             </div>
//                                         </div>

//                                         {/* Key values */}
//                                         <div className="flex gap-2  flex-wrap">
//                                             {service?.keyValues?.map((item, index) => (
//                                                 <div key={item._id || index} className="flex items-center bg-gray-200 p-3 rounded-3xl gap-1">
//                                                     {item.icon ? (
//                                                         <img
//                                                             src={item.icon}
//                                                             alt={item.value}
//                                                             className="w-8 h-8 object-contain"
//                                                         />
//                                                     ) : (
//                                                         <Eye size={16} className="text-gray-600" />
//                                                     )}
//                                                     <span className="text-[20px] whitespace-nowrap">
//                                                         {item.value}
//                                                     </span>
//                                                 </div>
//                                             ))}
//                                         </div>

//                                         <div className="rounded-xl p-5 border-t-4 border-blue-500 bg-gray-200 flex justify-between items-center">
//                                             <div className="space-y-4">
//                                                 <p className="font-semibold text-[24px]">Franchise Commission</p>
//                                                 <p className="text-green-600 text-[32px] font-semibold">
//                                                    Earn upto {service?.franchiseDetails?.commission}
//                                                 </p>
//                                             </div>
//                                             <button className="text-[#281A83] text-[24px] mt-10 flex items-center gap-1">
//                                                 T&amp;C <span className="text-[24px]">›</span>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </section>

//                     </div>

//                 </div>

//                 {/*  MOBILE  */}
//                 <div className="lg:hidden">
//                     <div className="mt-4 px-4 py-3 flex items-center justify-between">

//                         {/* LEFT */}
//                         <div className="flex items-center gap-2">
//                             <Link href="/MainModules/Education">
//                                 <ChevronLeft size={22} className="cursor-pointer" />
//                             </Link>
//                             <h1 className="text-[16px] font-semibold">Service Details</h1>
//                         </div>

//                         {/* RIGHT */}
//                         <div className="flex items-center gap-2">
//                             <Link href={`/MainModules/Checkout?id=${serviceId}`}>
//                                 <button className="flex items-center gap-1 bg-green-500 text-white px-3 py-1.5 rounded-md text-xs font-medium">
//                                     <ShoppingCart className="w-4 h-4" />
//                                     Checkout
//                                 </button>
//                             </Link>

//                             <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-medium">
//                                 <Share2 className="w-4 h-4" />
//                                 Share
//                             </button>
//                         </div>
//                     </div>

//                     {/* IMAGE */}
//                     <div className="mx-4 mt-4 rounded-xl overflow-hidden">
//                         <img
//                             src={service?.bannerImages?.[0]}
//                             alt="service"
//                             className="w-full h-[220px] object-fit"
//                         />
//                     </div>

//                     {/*  CONTENT = */}
//                     <div className="px-4 mt-4 space-y-3">

//                         {/* TITLE + RATING */}
//                         <div className="flex justify-between items-start">
//                             <h2 className="text-[16px] font-semibold leading-tight">
//                                 {service?.serviceName}
//                             </h2>

//                             <div className="flex flex-col items-end text-xs">
//                                 <div className="flex items-center gap-1">
//                                     <span className="text-yellow-500">★</span>
//                                     <span>{reviewServices?.averageRating}</span>
//                                 </div>
//                                 <span className="text-gray-400 whitespace-nowrap">
//                                     ({reviewServices?.totalReviews} reviews) 
//                                 </span>
//                             </div>
//                         </div>

//                         <p className="text-[13px] text-gray-500">{service?.category?.name}</p>

//                         {/* PRICE */}
//                         <div className="p-4 -mt-6 w-full">
//                             <span className="text-gray-500 text-[12px] ">Starting from</span>
//                             <div className="flex items-center gap-4">

//                                 <span className="text-[20px] font-semibold">₹ {service?.serviceDetails?.packages?.[0]?.discountedPrice}</span>
//                                 <span className="line-through text-[12px] text-gray-400">
//                                     ₹ {service?.serviceDetails?.packages?.[0]?.price}
//                                 </span>
//                                 <span className="text-[10px] text-blue-600 font-semibold px-3 py-1 rounded whitespace-nowrap">
//                                     {service?.serviceDetails?.packages?.[0]?.discount}% OFF
//                                 </span>
//                             </div>
//                         </div>

//                        {/* Key values */}
//                                 <div className="flex gap-2  flex-wrap">
//                                     {service?.keyValues?.map((item, index) => (
//                                         <div key={item._id || index} className="flex items-center bg-gray-200 p-2 md:p-3 rounded-3xl gap-1">
//                                             {item.icon ? (
//                                                 <img
//                                                     src={item.icon}
//                                                     alt={item.value}
//                                                     className="w-5 h-5 object-contain"
//                                                 />
//                                             ) : (
//                                                 <Eye size={16} className="text-gray-600" />
//                                             )}
//                                             <span className="text-[12px] md:text-[15px] whitespace-nowrap">
//                                                 {item.value}
//                                             </span>
//                                         </div>
//                                     ))}
//                                 </div>

//                         {/* COMMISSION CARD */}
//                         <div className="mt-4 bg-white rounded-xl p-4 shadow border-t-4 border-blue-500 flex justify-between items-center">
//                             <div>
//                                 <p className="text-[13px] font-medium">Franchise Commission</p>
//                                 <p className="text-green-600 font-semibold">
//                                     {service?.franchiseDetails?.commission}
//                                 </p>
//                             </div>

//                             <button className="flex items-center gap-1 text-[13px] text-[#281A83]">
//                                 T&amp;C <span className="text-lg">›</span>
//                             </button>
//                         </div>

//                     </div>
//                 </div>

//             </section>

//             <section>
//                 <Benefits benefits={service?.serviceDetails?.benefits || []} />
//                 <AboutUs aboutUs={service?.serviceDetails.aboutUs || []} highlight={service?.serviceDetails.highlight || []} />
//                 <WhyChooseUs whyChooseUs={service?.serviceDetails.whyChooseUs || []} />
//                 <HowItWorks howItWorks={service?.serviceDetails.howItWorks || []} />
//                 <AssuredByFetchTrue assuredByFetchTrue={service?.serviceDetails.assuredByFetchTrue || []} />
//                 <Packages packages={service?.serviceDetails.packages || []} />
//                 <Documents weRequired={service?.serviceDetails.weRequired || []} weDeliver={service?.serviceDetails.weDeliver || []} />
//                 <MoreInformation moreInfo={service?.serviceDetails.moreInfo || []} />
//                 <ChooseProvider />
//                 <TermsAndConditions termsAndConditions={service?.serviceDetails.termsAndConditions || []} />
//                 <FAQs faq={service?.serviceDetails?.faq || []} />
//                 <RatingsReviews reviews={reviewServices} />
//                 <ConnectWith connectWith={service?.serviceDetails?.connectWith || []} />
//             </section>
//         </>

//     );
// }


"use client";

import Image from "next/image";
import {
  FiTarget,
  FiEye,
  FiZap,
  FiStar,
  FiSmartphone,
  FiLayers,
} from "react-icons/fi";
import { Scale, Timer, Wallet, MapPin, Share2, ChevronLeft } from "lucide-react";
import FAQs from "@/src/components/Section/FAQ";
import TermsConditions from "@/src/components/Section/TermsandCondition";
import MoreInformation from "@/src/components/Section/MoreInformationSection";
import ChooseProvider from "@/src/components/Section/ChooseProvider";
import RatingsReviews from "@/src/components/Section/RatingReviews";
import ConnectBar from "@/src/components/Section/ConnectBar"
import { useParams } from "next/navigation";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import { useFranchiseModel } from "@/src/context/FranchiseContext";
import { useReview } from "@/src/context/ReviewContext";
import { useEffect, useMemo, useRef } from "react";
import { useServiceProviders } from "@/src/context/ServicewiseProviderContext";
import Link from "next/link";
import { useCheckout } from "@/src/context/CheckoutContext";

 const extractBenefits = (benefits: string[]): string[] => {
   if (!benefits?.length) return [];
 
   // SSR safety
   if (typeof window === "undefined") return [];
 
   const temp = document.createElement("div");
 
   return benefits.flatMap((html) => {
     temp.innerHTML = html;
 
     return Array.from(temp.querySelectorAll("p, li"))
       .map((el) => el.textContent?.trim())
       .filter(Boolean);
   });
 };
 
type RatingDistribution = {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
};

const buildRatingBreakdown = (
  dist?: RatingDistribution,
  total?: number
) => {
  if (!dist || !total) return [];

  const percent = (value: number) =>
    Math.round((value / total) * 100);

  return [
    { label: "Excellent", value: percent(dist["5"]), color: "#2FA84F" },
    { label: "Very Good", value: percent(dist["4"]), color: "#2FA84F" },
    { label: "Good", value: percent(dist["3"]), color: "#FF9F43" },
    { label: "Average", value: percent(dist["2"]), color: "#FF9F43" },
    { label: "Poor", value: percent(dist["1"]), color: "#E74C3C" },
  ];
};

 
 const getColor = (rating: number): string => {
   if (rating >= 5) return "#16A34A";
   if (rating >= 4) return "#22C55E";
   if (rating >= 3) return "#FACC15";
   return "#EF4444";
 };

export default function LegalDetailsPage() {

   const { moduleId, serviceId } = useParams<{
      moduleId: string;
      serviceId: string;
    }>();
        const { providers,fetchProvidersByService } = useServiceProviders();


const mappedProviders = providers.map((p) => ({
  logo: p.storeInfo?.logo || "/image/default-provider.png",
  name: p.storeInfo?.storeName || p.fullName,
  rating: p.averageRating || 0,
  reviews: p.totalReviews || 0,
  promoted: Boolean(p.isPromoted),
  available: p.isStoreOpen,
}));

const initialized = useRef(false);
const { selectedPackage, setSelectedPackage } = useCheckout();
      const { service, loading, error, fetchServiceDetails } = useServiceDetails();
        const { models, fetchFranchiseModels, franchiseloading } = useFranchiseModel();
        const { reviewServices, fetchReviews } = useReview();

    
           useEffect(() => {
          if (!serviceId) return;
        
          fetchServiceDetails(serviceId);
          fetchFranchiseModels(serviceId);
          fetchReviews(serviceId)
          fetchProvidersByService(serviceId);
        }, [serviceId]);

const franchiseCards = useMemo(() => {
  return (
    service?.serviceDetails?.packages?.map((pkg) => ({
      serviceModel: pkg,
    })) || []
  );
}, [service]);

useEffect(() => {
  if (!initialized.current && franchiseCards.length > 0) {
    const firstPackage = franchiseCards[0].serviceModel;

    setSelectedPackage(
      {
        _id: firstPackage._id,
        name: firstPackage.name,
        price: firstPackage.price,
        discount: firstPackage.discount,
        discountedPrice: firstPackage.discountedPrice,
      },
      serviceId
    );

    initialized.current = true;
  }
}, [franchiseCards, serviceId]);

const selectedPackageData = franchiseCards.find(
  (item) => item.serviceModel._id === selectedPackage?._id
)?.serviceModel;

  const splitText = (text: string) => {
    const [label, ...rest] = text.split(":");
    return {
      label: label?.trim(),
      value: rest.join(":").trim(),
    };
  };


if (loading || franchiseloading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p className="text-red-500">{error}</p>;
}

if (!service) {
  return <p>No service data found</p>;
}

const images = service.bannerImages;
    const { serviceName, serviceDetails } = service;

      const aboutHtml = service?.serviceDetails?.aboutUs?.[0];

  return (
    <div className="bg-[#F4F4F4] w-full ">
     <section className="">
       <div className="w-full flex fixed justify-between px-12 pt-5 z-20 bg-white/10">
    <Link
      href={`/MainModules/Legal-Services/${moduleId}`}
      
    >
      {/* <FiLayers size={20} /> */}
      <span className="flex items-center gap-2 text-[#1b110d] font-medium text-[18px] hover:underline "><ChevronLeft size={20} className="cursor-pointer" />Service Details</span>
    </Link>

     {/* RIGHT : Actions */}
    <div className="flex items-center gap-3 mb-5 ">
<p className="bg-gray-300 p-2 rounded">Selected Package :-
  ₹{selectedPackageData
    ? Math.floor(Number(selectedPackageData.discountedPrice)).toLocaleString("en-IN")
    : 0}
</p>
      <Link
        href={selectedPackage?._id
    ? `/MainModules/Checkout?serviceId=${serviceId}&packageId=${selectedPackage._id}`
    : "#"}>
       <button className="bg-green-500 hover:bg-green-600 text-white
                   px-4 sm:px-5 py-2 rounded
                   flex items-center gap-2 text-[14px]"
      >
        Check out</button>
      </Link>

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white
                   px-4 sm:px-5 py-2 rounded
                   flex items-center gap-2 text-[14px]"
      >
        <Share2 size={16} />
        Share
      </button>
    </div>
    
    </div>

</section>

        <section className="py-6 sm:py-8 lg:py-10 lg:px-10">
      <div className=" w-full  mx-auto bg-white rounded-[4px] p-4  lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
        
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-[652px] h-[220px] sm:h-[360px] lg:h-[503px] rounded-[6px] overflow-hidden ">
          <Image
            src={service?.bannerImages?.[0]}
            alt={serviceName}
            width={652}
            height={503}
            className="object-cover w-full h-full"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 w-full lg:w-[614px]">
          
          {/* Title */}
          
          <h1 className="text-[26px] sm:text-[32px] lg:text-[40px] font-semibold text-[#1E1E1E] mb-1">
            {serviceName}
          </h1>

          <p className="text-[20px] sm:text-[24px] lg:text-[26px] text-[#868686] mb-3">
                                {service.category?.name}

          </p>

          {/* Rating */}
          <div className="flex flex-wrap items-center gap-2 mb-6 text-[#868686]">
            <span className="text-[#FDC700] text-[20px] lg:text-[24px]">★</span>
            <span className="text-[18px] lg:text-[24px] font-semibold">{service.averageRating?.toFixed(1)}</span>
            <span className="text-[18px] lg:text-[24px] font-semibold">
              ({service.totalReviews}+ reviews)
            </span>
          </div>

          {/* Key Values */}
          <div className="grid grid-cols-3 gap-4 mb-6">
        {service?.keyValues?.map((item) => (
          <div key={item._id} className="flex items-center gap-3">
            <img src={item.icon} className="w-4 h-4" />
            <div>
              <p className="text-[13px] text-[#8B8B8B]">{item.key}</p>
              <p className="text-[14px] font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

          {/* Cost + Time */}
          <div className="flex  sm:flex-row gap-4 lg:gap-6 mb-6">
            
            {/* Cost */}
            <div className="border border-[#BEBEBE] rounded-[8px] p-4 w-full sm:w-1/2 lg:w-[299px]">
              <p className="text-[18px] lg:text-[20px] text-[#7A7A7A] mb-1">
                Total Cost
              </p>

              <p className="text-[22px] lg:text-[26px] font-semibold text-[#1E1E1E]">
                {/* ₹{service?.serviceDetails?.packages?.[0]?.discountedPrice} */}
                ₹{selectedPackage
  ? Math.floor(Number(selectedPackage.discountedPrice)).toLocaleString("en-IN")
  : 0}
              </p>

              {/* <div className="flex items-center gap-2 mt-1">
                <span className="line-through text-[#9E9E9E] text-[16px] lg:text-[18px]">
                  ₹{service?.serviceDetails?.packages?.[0]?.price}
                </span>
                <span className="text-[12px] lg:text-[14px] text-white bg-[#BC9958] px-2 py-[2px] rounded">
                  {service?.serviceDetails?.packages?.[0]?.discount}% OFF
                </span>
              </div> */}
              {selectedPackage && (
    <div className="flex items-center gap-2 mt-1">
      <span className="line-through text-[#9E9E9E] text-[16px] lg:text-[18px]">
        ₹{selectedPackage.price}
      </span>
      <span className="text-[12px] lg:text-[14px] text-white bg-[#BC9958] px-2 py-[2px] rounded">
        {selectedPackage.discount}% OFF
      </span>
    </div>
  )}
            </div>

            {/* Time */}
            <div className="border border-[#D9D9D9] rounded-[6px] p-4 w-full sm:w-1/2 lg:w-[299px]">
              <p className="text-[18px] lg:text-[20px] text-[#7A7A7A] mb-1">
                Time Required
              </p>

              <p className="text-[22px] lg:text-[26px] font-semibold text-[#1E1E1E]">
                {service?.serviceDetails?.timeRequired?.[0]?.range}
              </p>

              <p className="text-[14px] lg:text-[16px] text-[#7A7A7A]">
                {service?.serviceDetails?.timeRequired?.[0]?.parameters}
              </p>
            </div>
          </div>

          {/* Franchise Commission */}
          <div className="w-full lg:w-[614px] border-2 border-[#5B3527] rounded-[12px] px-4 py-4 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <p className="text-[22px] lg:text-[28px] font-semibold text-[#1E1E1E]">
                Franchise Commission
              </p>
              <p className="text-[26px] lg:text-[32px] font-medium text-[#2CB140] mt-1">
                Earn Up to {service?.franchiseDetails?.commission}
              </p>
            </div>

            <button className="text-[#BC9958] text-[16px] lg:text-[20px] font-medium self-end">
              T&C →
            </button>
          </div>

        </div>
      </div>
        </section>

         {/* BENEFITS */}
                  <section className="w-full  mt-8 ps-4">
                    <div className=" max-w-[1400px] flex flex-col gap-5">
                      <div className="rounded-xl p-6 sm:p-8">
                      <h2 className="text-[36px] text-[#5B3527] text-center font-medium">
                        Benefits
                      </h2>
        
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-15 gap-y-5 lg:ms-10">
                        {extractBenefits(service?.serviceDetails?.benefits || []).map((item, index) => (
                          <div key={index} className="flex items-center gap-3 lg:ms-15">
                          
                            <p className="text-[20px] lg:text-[22px] text-[#606060] font-medium">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                      </div>
                    </div>
                  </section>
        
                  {/* ABOUT */}
                  <section className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-12">
  {/* Title */}
  <h2 className="text-[#5B3527] text-[28px] sm:text-[32px] font-medium mb-4 text-center">
    About Us
  </h2>

  {/* Paragraph */}
  {service?.serviceDetails?.aboutUs && (
            <div className="text-[#868686] text-[18px] lg:text-[22px]"
            dangerouslySetInnerHTML={{ __html: aboutHtml }}>
          
            </div>
            )}

  {/* Image */}
  <div className="w-full max-w-[1440px] h-auto mx-auto my-12">
    {service?.serviceDetails?.highlight?.[0] && (
    <img
      src={service.serviceDetails.highlight[0]}
      alt="highlight"
      className="w-full rounded-[12px] object-cover"
    />
  )}

  </div>
</section>


                   <section className="w-full  pb-10">
      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-center text-[28px] md:text-[32px] font-medium text-[#5B3527] mb-12">
          Why Choose Us?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service?.serviceDetails?.whyChooseUs?.map((item, index) => (
            <div key={item._id} className="border border-[#5B3527] rounded-[6px] p-6 text-center ">
              <h3 className="text-[20px] font-medium mb-4">
                {item.title}
              </h3>
              <div className="mx-auto mb-4">
                <img src={item.icon} alt={item.title} className="w-12 h-12 mx-auto" />
              </div>
              <p className="text-[#8A8A8A] text-[18px] leading-[24px]">
                {item.description}
              </p>
            </div>
          ))}
          

        </div>
      </div>
                   </section>

<section className="w-full py-10 ">
  <div className="max-w-[760px] mx-auto px-4">

    {/* Heading */}
    <h2 className="text-center text-[26px] font-semibold text-[#5B3527] mb-2">
      How it works?
    </h2>

    <p className="text-center text-[18px] text-[#868686]  mx-auto mb-12 leading-relaxed">
      Follow our streamlined 7-step process to register your Limited Liability Partnership.
      We handle everything from consultation to certificate delivery with complete transparency.
    </p>

    {/* Steps */}
    <div className="relative pl-16 lg:pl-60 flex flex-col gap-10">

      {/* Vertical Line */}
      <span className="absolute left-[24px] lg:left-[200px] top-1 bottom-1 w-px bg-[#D6D6D6]" />

      {/* Step */}
      {service?.serviceDetails?.howItWorks?.map((item) => (
        <div key={item._id} className="relative flex gap-8">

          {/* Dot on line */}
          <span className="absolute left-[-46px] top-[6px] w-3 h-3 rounded-full bg-[#C9A46A]" />

          {/* Content */}
          <div>
            {/* Icon */}
            <div className="w-7 h-7 mb-2 flex items-center justify-center text-[#BC9958] text-[16px]">
              <img src={item.icon} alt={item.title} />
            </div>

            {/* Title */}
            <p className="text-[18px] font-medium text-[#868686] mb-1">
              {item.title}
            </p>

            {/* Description */}
            <p className="text-[14px] text-[#9A9A9A] max-w-[420px]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>







                   <section className="w-full lg:w-[1440px] py-12 ms-0  lg:ms-12 mb-10 md:py-16 bg-[#5B3527] relative">
  {/* INNER SHADOW */}
  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_6px_12px_rgba(0,0,0,0.25)]" />

  <div className="relative max-w-[1347px] mx-auto px-4 text-white">
    
    {/* Title */}
    <h2 className="text-center text-[22px] sm:text-[24px] md:text-[28px] font-semibold mb-10 md:mb-12">
      Assured By Fetch True
    </h2>

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 md:gap-y-10">

      {/* Left Column */}
        {service?.serviceDetails?.assuredByFetchTrue?.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <img
              src={item.icon}
              className="w-[36px] h-[38px] sm:w-[42px] sm:h-[45px] md:w-[47px] md:h-[50px] text-[#BC9958]"
              alt={item.title}
            />
            <div>
              <h4 className="font-semibold text-[18px] sm:text-[20px] md:text-[24px]">
                {item.title}
              </h4>
              <p className="text-[15px] sm:text-[16px] md:text-[20px] text-[#BEBEBE]">
                {item.description}
              </p>
            </div>
          </div>
        ))}

   

    </div>
  </div>
</section>

{/* packages */}
<section className="w-full py-8 lg:py-10 ">
  <div className="max-w-[1200px] mx-auto px-4">
    
    {/* Title */}
    <h2 className="text-center text-[28px] sm:text-[32px] font-semibold text-[#5A3A1B] mb-12">
      Packages
    </h2>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {service?.serviceDetails?.packages.map((pkg, index) => {
        const isPopular = index === 1;
        const isSelected = selectedPackage?._id === pkg._id;
        return (
          
          <div key={pkg._id}
        onClick={() =>
          setSelectedPackage(
            {
              _id: pkg._id,
              name: pkg.name,
              price: pkg.price,
              discount: pkg.discount,
              discountedPrice: pkg.discountedPrice,
            },
            serviceId
          )
        }
        className={`cursor-pointer bg-white rounded-[12px] shadow-md p-6 sm:p-8 flex flex-col justify-between border-2 ${
          isSelected ? "border-[#BC9958]" : "border-transparent"
        }`}>
            {isPopular && (
                  <span className="absolute -mt-10 left-1/2 -translate-x-1/2 z-10  w-[90px] bg-[#C9A36A] text-white text-[12px] px-2  py-[2px] rounded-full">
                    Most Popular
                  </span>
                )}
        <div className="relative text-[#C9A36A] flex justify-items-start gap-2 text-[20px] font-semibold mb-1">
          <span className="">₹{Math.floor(pkg.discountedPrice)} /</span>
          <span className="text-[#868686] text-[16px]"><s>₹{pkg.price}</s></span>
          <p className="bg-[#BC9958] text-[#FFFFFF] text-[14px]  font-normal p-[2px] rounded-[3px]">{pkg.discount}% OFF</p>
        </div>

        <h3 className="text-[18px] font-semibold text-[#5A3A1B] mb-2 text-start">
          {pkg.name}
        </h3>

        <p className="text-[14px] text-[#777] mb-6">
          Perfect for individuals and small businesses
        </p>

        {pkg.whatYouGet?.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      ✅ {item}
                    </li>
                  ))}

        <button className="w-full bg-[#5A3A1B] text-white py-2 rounded-[6px] text-[14px] mt-5">
          Get Started
        </button>
      </div>
        )
      })}


    </div>
  </div>
</section>


<section className="w-full py-8 md:py-10">
  <div className="max-w-[1200px] mx-auto px-4">

    {/* Title */}
    <h2 className="text-center text-[26px] sm:text-[26px] md:text-[32px] font-semibold text-[#5A3A1B] mb-8 md:mb-12">
      Documents We Required
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">

          {service?.serviceDetails?.weRequired?.map((item) => (
            <li key={item._id}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium">{item.title}</span>
                <span className="text-[11px] bg-[#F5E9D6] text-[#9B7B4A] px-2 py-[2px] rounded">
                  Required
                </span>
              </div>
              <p className="text-[14px] md:text-[16px] text-[#777] mt-1">
                {item.description}
              </p>
            </li>
          ))}

      </div>
  </div>
</section>


<section className="w-full py-8 md:py-10">
  <div className="max-w-[1200px] mx-auto px-4">

    {/* Title */}
    <h2 className="text-center text-[26px] sm:text-[26px] md:text-[32px] font-semibold text-[#5A3A1B] mb-6 md:mb-12">
      We Deliver
    </h2>


    {/* Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

      {service?.serviceDetails?.weDeliver?.map((item) => (
            <li key={item._id}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium">{item.title}</span>
                <span className="text-[11px] bg-[#F5E9D6] text-[#9B7B4A] px-2 py-[2px] rounded">
                  Required
                </span>
              </div>
              <p className="text-[14px] md:text-[16px] text-[#777] mt-1">
                {item.description}
              </p>
            </li>
          ))}

    </div>
  </div>
</section>


<MoreInformation
  cards={service?.serviceDetails?.moreInfo?.map((item) => ({
    title:item.title,
    description:item.description,
    image:item.image
  }))}
/>

<ChooseProvider
  title="Choose Provider"
  buttonColor="bg-[#5B3527]"
  providers={mappedProviders}
/>


<TermsConditions
  heading="Terms & Conditions"
  html={service?.serviceDetails?.termsAndConditions?.join("") || ""}
/>


<FAQs
  title="FAQs"
      items={service?.serviceDetails?.faq?.map((item) => ({
        question: item.question,
        answer: item.answer,
      }))}
/>

{reviewServices && (
  <div className="max-w-[1400px]  mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  rounded-[12px] mt-8">
    <RatingsReviews
      title="Ratings & Reviews"
      subtitle="Complete overview of service experience."
      averageRating={reviewServices.averageRating}
      // totalRatings={reviewServices.totalReviews}
      primaryColor="#BC9958"
      breakdown={buildRatingBreakdown(
        reviewServices.ratingDistribution,
        reviewServices.totalReviews
      )}
      features={[
        { label: "Monthly Business", score: 4 },
        { label: "ROI", score: 5 },
        { label: "Marketing", score: 4 },
        { label: "Service Quality", score: 4 },
      ]}
    />
  </div>
)}


<ConnectBar
  title={service?.serviceDetails?.connectWith?.[0]?.name}
      phoneLink={`tel:${service?.serviceDetails?.connectWith?.[0]?.mobileNo}`}
      emailLink={`mailto:${service?.serviceDetails?.connectWith?.[0]?.email}`}
      checkoutLink={`/checkout/${service?._id}`}
      shareLink={`/service/${service?._id}`}
/>



                   
    </div>
  );
}