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
import { useEffect, useMemo, useRef, useState } from "react";
import { useServiceProviders } from "@/src/context/ServicewiseProviderContext";
import Link from "next/link";
import { useCheckout } from "@/src/context/CheckoutContext";
import TermsConditionsModal from "@/src/components/Section/termsandconditionPopup";




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

export default function MarketingDetailsPage() {

   const { moduleId, serviceId } = useParams<{
      moduleId: string;
      serviceId: string;
    }>();
        const { providers,fetchProvidersByService } = useServiceProviders();

          const handleSocialShare = (platform: string) => {
  const shareUrl = `${window.location.origin}/MainModules/Franchise/${moduleId}/${serviceId}`;

  const text = `Check this amazing franchise opportunity: ${service?.serviceName}`;

  let url = "";

  switch (platform) {
    case "whatsapp":
      url = `https://wa.me/?text=${encodeURIComponent(
        text + " " + shareUrl
      )}`;
      break;

    case "facebook":
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`;
      break;

    case "twitter":
      url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(shareUrl)}`;
      break;

    case "linkedin":
      url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`;
      break;

    default:
      return;
  }

  window.open(url, "_blank");
};


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
        const [openTC, setOpenTC] = useState(false);
        

    
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

     <section className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/90 border-b">

  <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 px-4 sm:px-6 lg:px-12 py-3">

    {/* LEFT : Back Navigation */}

    <Link href={`/MainModules/Marketing/${moduleId}`}>
      <span className="flex items-center gap-2 text-[#1a0b05] font-medium text-[16px] sm:text-[18px] hover:underline">

        <ChevronLeft size={20} className="cursor-pointer" />

        Service Details

      </span>
    </Link>


    {/* RIGHT : Actions */}

    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 w-full lg:w-auto">

      <p className="bg-gray-200 text-gray-700 px-3 py-2 rounded text-[13px] sm:text-[14px] whitespace-nowrap">

        Selected Package :-
        ₹{Math.floor(selectedPackageData?.discountedPrice || 0).toLocaleString("en-IN")}

      </p>


      <Link
        href={
          selectedPackage?._id
            ? `/MainModules/Checkout?serviceId=${serviceId}&packageId=${selectedPackage._id}`
            : "#"
        }
      >

        <button
          className="bg-green-500 hover:bg-green-600 text-white
                     px-4 sm:px-5 py-2 rounded
                     flex items-center gap-2 text-[13px] sm:text-[14px] whitespace-nowrap"
        >

          Check out

        </button>

      </Link>


      <button
        onClick={() => handleSocialShare("whatsapp")}
        className="bg-blue-600 hover:bg-blue-700 text-white
                   px-4 sm:px-5 py-2 rounded
                   flex items-center gap-2 text-[13px] sm:text-[14px]"
      >

        <Share2 size={16} />

        Share

      </button>

    </div>

  </div>

</section>

        <section className="py-10 sm:py-8 lg:pt-25 lg:pb-15 lg:px-10">
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

          {/* Price */}
      <div className="flex flex-wrap items-center  gap-6  rounded-lg px-4 py-3 mb-5">
        <p className="text-[16px] sm:text-[18px] text-[#868686] gap-5 flex items-center">
          Starting{" "} 
          <span className="font-medium text-[20px] lg:text-[28px] text-[#232323]">
             ₹{selectedPackage
  ? Math.floor(Number(selectedPackage.discountedPrice)).toLocaleString("en-IN")
  : 0}/
          </span>
          <span className="font-medium text-[20px] sm:text-[22px] text-[#868686] line-through">
             ₹{selectedPackage
  ? Math.floor(Number(selectedPackage.price)).toLocaleString("en-IN")
  : 0}/
          </span>
          <span className="text-[16px] text-[#2164F4]">{selectedPackage?.discount}% OFF</span>
        </p>
      </div>

          {/* Key Values */}
          <div className="grid grid-cols-3 gap-4 mb-6">
        {service?.keyValues?.map((item) => (
          <div key={item._id} className="flex items-center gap-2 bg-[#2164F41A] p-2 rounded-[15px]">
            <img src={item.icon} className="w-4 h-4" />
            <div className="">
              <p className="text-[13px] text-[#8B8B8B]">{item.key}</p>
              <p className="text-[14px] font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </div>


          {/* Franchise Commission */}
          <div className="w-full lg:w-[614px] border-t-4 bg-[#F0F1F3] border-[#2164F4] rounded-[12px] px-4 py-4 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <p className="text-[22px] lg:text-[28px] font-semibold text-[#1E1E1E]">
                Franchise Commission
              </p>
              <p className="text-[26px] lg:text-[32px] font-medium text-[#2CB140] mt-1">
                Earn Up to {service?.franchiseDetails?.commission}
              </p>
            </div>

             <span
  className="cursor-pointer text-[#5B3527]"
  onClick={() => setOpenTC(true)}
>
  T&C &gt;
</span>
          </div>

        </div>
      </div>
        </section>

         {/* BENEFITS */}
                  <section className="">
                    <div className=" flex flex-col gap-5">
                      <div className="rounded-xl ">
                      <h2 className="text-[36px] text-[#2164F4] text-center font-medium">
                        Benefits
                      </h2>
        
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-5 max-w-[1440px]  mx-auto bg-white rounded-[24px] p-4  lg:p-8 border-t-4 border-[#2164F4] ps-4 ">
                        {extractBenefits(service?.serviceDetails?.benefits || []).map((item, index) => (
                          <div key={index} className="flex items-center gap-3 lg:ms-10">
                          
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
                  <section className=" mx-auto px-4 sm:px-6 mt-12">
  {/* Title */}
  <h2 className="text-[#2164F4] text-[28px] sm:text-[32px] font-medium mb-4 text-center">
    About Us
  </h2>

  {/* Paragraph */}
  {service?.serviceDetails?.aboutUs && (
            <div className="text-[#868686] text-[18px] lg:text-[22px] max-w-[1440px]  mx-auto bg-white rounded-[24px] p-4  lg:p-8 border-t-4 border-[#2164F4] ps-4"
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
        <h2 className="text-center text-[28px] md:text-[32px] font-medium text-[#2164F4] mb-12">
          Why Choose Us?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {service?.serviceDetails?.whyChooseUs?.map((item, index) => (
            <div key={item._id} className=" border-t-4 border-[#2164F4] bg-white rounded-[10px] p-6 text-center ">
              <div className="mx-auto mb-4">
                <img src={item.icon} alt={item.title} className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-[20px] lg:text-[24px] font-semibold text-[#606060] mb-4">
                {item.title}
              </h3>
              
              <p className="text-[#606060] text-[18px] leading-[24px]">
                {item.description}
              </p>
            </div>
          ))}
          

        </div>
      </div>
                   </section>

    <section className="py-14 bg-[#f7f9fc]">
  <div className="max-w-4xl mx-auto px-4">

    {/* Heading */}
    <h2 className="text-center text-[28px] font-semibold text-[#2b5fd9] mb-12">
      How It Works?
    </h2>

    <div className="relative">

      {/* Vertical Line */}
      <div className="absolute left-[38px] top-0 bottom-0 w-[2px] bg-blue-200"></div>

      {/* Steps */}
      <div className="space-y-12">

        {service?.serviceDetails?.howItWorks?.map((item, index) => {
          return (
            <div
              key={item._id}
              className="flex items-start gap-6 relative"
            >

              {/* Icon Circle */}
              <div className="relative z-10 flex items-center justify-center w-[76px] h-[76px] rounded-full border-2 border-blue-400 bg-white shadow-sm">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">

                {/* Header Row */}
                <div className="flex items-center justify-between">

                  <h3 className="text-[18px] font-semibold text-[#2d3748]">
                    {item.title}
                  </h3>

                  <span className="text-[11px] bg-blue-500 text-white px-3 py-1 rounded-sm">
                    STEP {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* Description */}
                <p className="text-[14px] text-gray-500 mt-2 leading-relaxed">
                  {item.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>

  </div>
</section>







<section className="w-full bg-[#EEEFF3] py-16 relative">

  {/* Inner Shadow */}
  <div className="absolute inset-0 pointer-events-none shadow-[inset_2px_4px_24px_rgba(0,0,0,0.25)]" />

  <div className="relative max-w-[1100px] mx-auto px-4">

    {/* Heading */}
    <h2 className="text-center text-[#2B5FD9] text-[28px] font-semibold mb-20">
      Assured By Fetch True
    </h2>


    {/* CENTER TIMELINE LINE */}
    {/* <div className="absolute left-1/2 top-[120px] bottom-0 w-[2px] bg-[#D6DCEB] -translate-x-1/2" /> */}


    <div className="relative flex flex-col gap-8">

      {service?.serviceDetails?.assuredByFetchTrue?.map((item, index) => {

        const isLeft = index % 2 === 0;

        return (
          <div
            key={index}
            className="relative flex w-full"
          >

            {/* LEFT SIDE CARD */}
            {isLeft && (
              <div className="relative w-1/2 flex justify-end">

                <div className="relative bg-[#FAF7F3] border-t-4 border-[#2164F4] rounded-md shadow-md w-[420px] px-6 py-8">

                  {/* DIAMOND */}
                  <div className="absolute top-1/2 -translate-y-1/2 right-[-40px]
                  w-[80px] h-[80px]
                  bg-gradient-to-br from-[#FFFCF9] to-[#D8DEEE]
                  rotate-45 flex items-center justify-center shadow-md z-10">

                    <img
                      src={item.icon}
                      alt={item.title}
                      className="rotate-[-45deg] w-[30px]"
                    />

                  </div>


                  <h4 className="text-[18px] text-left font-semibold">
                    {item.title}
                  </h4>

                  <p className="text-[14px] mt-2 text-left text-gray-600">
                    {item.description}
                  </p>

                </div>

              </div>
            )}


            {/* RIGHT SIDE CARD */}
            {!isLeft && (
              <div className="relative w-1/2 ml-auto flex justify-start">

                <div className="relative bg-[#FAF7F3] border-t-4 border-[#2164F4] rounded-md shadow-md w-[420px] px-6 py-6">

                  {/* DIAMOND */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-[-40px]
                  w-[80px] h-[80px]
                  bg-gradient-to-br from-[#FFFCF9] to-[#D8DEEE]
                  rotate-45 flex items-center justify-center shadow-md z-10">

                    <img
                      src={item.icon}
                      alt={item.title}
                      className="rotate-[-45deg] w-[30px]"
                    />

                  </div>


                  <h4 className="text-[18px] text-right font-semibold">
                    {item.title}
                  </h4>

                  <p className="text-[14px] mt-2 text-right text-gray-600">
                    {item.description}
                  </p>

                </div>

              </div>
            )}

          </div>
        );
      })}

    </div>

  </div>
</section>

{/* packages */}
<section className="w-full py-10 bg-[#f7f7f7]">
  <div className="max-w-[1400px] mx-auto px-4">

    {/* Title */}
    <h2 className="text-center text-[28px] sm:text-[32px] font-semibold text-[#2B5FD9] mb-12">
      Packages
    </h2>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {service?.serviceDetails?.packages.map((pkg, index) => {
        const isPopular = index === 1;
        const isSelected = selectedPackage?._id === pkg._id;

        return (
          <div
            key={pkg._id}
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
            className={`relative cursor-pointer bg-white rounded-xl shadow-md p-6 flex flex-col border-t-4 transition ${
              isSelected ? "border-[#2B5FD9]" : "border-transparent"
            }`}
          >

            {/* Most Popular
            {isPopular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A36A] text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>
            )} */}

            {/* Plan Name */}
            <h3 className="text-lg font-semibold text-[#868686] text-center mb-4">
              {pkg.name}
            </h3>

            {/* Price Box */}
            <div className="border border-[#E5C9A8] rounded-md pt-3 text-center mb-6 w-[214px] mx-auto">
              <p className="text-gray-400 text-sm line-through">
                ₹{pkg.price} <span className="text-[#2164F4]">({pkg.discount}% Off)</span>
              </p>

              <h2 className="text-2xl font-bold text-[#232323]">
                ₹{Math.floor(pkg.discountedPrice)}
              </h2>

              <p className="text-gray-400 text-sm mt-1">Onwards</p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <p className="font-semibold text-gray-700 mb-3 text-center">
                What You Get -
              </p>

              <ul className="space-y-2 text-sm text-gray-600 ">
                {pkg.whatYouGet?.map((item, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <span className="text-green-500">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            {/* <button className="mt-auto w-full bg-[#5A3A1B] text-white py-2 rounded-md text-sm hover:opacity-90">
              Get Started
            </button> */}
          </div>
        );
      })}
    </div>
  </div>
</section>


<section className="w-full bg-[#f3f3f3] py-10">
  <div className="max-w-[1400px] mx-auto px-4">

    {/* Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* LEFT CARD */}
      <div>

        {/* Heading */}
        <div className="bg-[#2164F4] 
        text-white text-center text-[22px] font-semibold 
        py-3 rounded-xl shadow-md">
          We Required
        </div>

        {/* Content Box */}
        <div className="bg-white mt-3 rounded-xl shadow-md border-t-4 border-[#2164F4] p-6 space-y-5">

          {service?.serviceDetails?.weRequired?.map((item, index) => (
            <div key={index} className="flex items-start gap-3 text-gray-600 text-[17px]">
              <span className="text-green-500 text-lg mt-[2px]">
                ✓
              </span>
            {item.title}

            </div>
          ))}

        </div>
      </div>


      {/* RIGHT CARD */}
      <div>

        {/* Heading */}
        <div className="bg-[#2164F4] 
        text-white text-center text-[22px] font-semibold 
        py-3 rounded-xl shadow-md">
          We Deliver
        </div>

        {/* Content Box */}
        <div className="bg-white mt-3 rounded-xl shadow-md border-t-4 border-[#2164F4] p-6 space-y-5">

          {service?.serviceDetails?.weDeliver?.map((item, index) => (
            <div key={index} className="flex items-start gap-3 text-gray-600 text-[17px]">

              {/* Check Icon */}
              <span className="text-green-500 text-lg mt-[2px]">
                ✓
              </span>

              {item.title}

            </div>
          ))}

        </div>
      </div>

    </div>

  </div>
</section>


<MoreInformation
  cards={service?.serviceDetails?.moreInfo?.map((item) => ({
    title:item.title,
    description:item.description,
    image:item.image,
    
  }))}
/>

<ChooseProvider
  title="Choose Provider"
  buttonColor="bg-[#2164F4]"
  providers={mappedProviders}
/>

<div className="max-w-[1400px] bg-white border-t-4 border-[#2164F4] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  rounded-[12px] mt-8">
<TermsConditions
  heading="Terms & Conditions"
  html={service?.serviceDetails?.termsAndConditions?.join("") || ""}
/>
</div>

<div className="max-w-[1400px]  border-t-4 border-[#2164F4] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  rounded-[12px] mt-8">
<FAQs
  title="FAQs"
      items={service?.serviceDetails?.faq?.map((item) => ({
        question: item.question,
        answer: item.answer,
      }))}
/>
</div>


{reviewServices && (
  <div className="max-w-[1400px]  mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  rounded-[12px] mt-8 border-t-4 border-[#2164F4]">
    <RatingsReviews
      title="Ratings & Reviews"
      subtitle="Complete overview of service experience."
      averageRating={reviewServices.averageRating}
      // totalRatings={reviewServices.totalReviews}
      primaryColor="#2164F4"
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

{openTC && (
  <TermsConditionsModal
    onClose={() => setOpenTC(false)}
    html={
      service?.franchiseDetails?.termsAndConditions ||
      "<p>No Terms & Conditions available</p>"
    }
  />
)}

                   
    </div>
  );
}


