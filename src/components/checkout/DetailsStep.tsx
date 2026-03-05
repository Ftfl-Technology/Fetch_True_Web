// 'use client';

// import { MapPin, Phone, PlusCircle } from "lucide-react";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";
// import CustomerList from "./CustomerList";
// import CouponsDialog from "./CouponsDialog";
// import { useCheckout } from "@/src/context/CheckoutContext";
// import { useParams, useSearchParams } from "next/navigation";
// import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
// import AddCustomerDialog from "./AddCustomerForm";
// import { useCommission } from "@/src/context/PlatformFeeContext";
// import { useReview } from "@/src/context/ReviewContext";

// /* ================= MOCK DATA ================= */

// const serviceCardData = {
//     image: "/image/checkoutcard.png",
//     trusted: true,
//     rating: "4.9",
//     title: "Property Buying & Selling",
//     category: "Agricultural",
//     stats: [
//         { label: "Investment", value: "₹ 10L-5L" },
//         { label: "Earnings", value: "1.5-3L/M" },
//         { label: "ROI", value: "25-30%" }
//     ],
//     rewardText: "₹15%"
// };

// const userData = {
//     name: "Suhani Shaha",
//     phone: "789578990",
//     address: "Flat no.3, Sky Building, Pune",
//     note: "Customer Requested urgent Service"
// };

// type PaymentData = {
//     listingPrice: number;
//     serviceDiscount: number;
//     couponDiscount: number;
//     gst: number;
//     platformFee: number;
//     assuranceFee: number;
//     grandTotal: number;
// };

// type CheckoutData = {
//     selectedUser: string;
//     paymentData: PaymentData;
// };


// type DetailsStepProps = {
//     data: CheckoutData | null;
//     onNext: (data: CheckoutData) => void;
// };

// export default function DetailsStep({ onNext }: DetailsStepProps) {

//     const { service, loading, error, fetchServiceDetails } = useServiceDetails();
//     const { reviewServices, fetchReviews } = useReview();
//     const params = useParams();
//     const serviceId = params.id as string;

//     const [selected, setSelected] = useState("me");
//     const [openSidebar, setOpenSidebar] = useState(false);
//     const [openCoupons, setOpenCoupons] = useState(false);
//     const [openAddCustomers, setOpenAddCustomers] = useState(false);
//     const [isTermsAccepted, setIsTermsAccepted] = useState(false);
//     const [showError, setShowError] = useState(false);

//     const { selectedPackage } = useCheckout();
//     const { services, fetchCommission } = useCommission()
//     const basicPackage = service?.serviceDetails.packages?.[0];

//     const packageToUse = selectedPackage ?? basicPackage;

//     // const searchParams = useSearchParams();
//     // const servicesId = searchParams.get('id'); 
//     const param = useParams();
//     const servicesId = param.id as string;

//     useEffect(() => {
//         if (!servicesId) return;
//         fetchServiceDetails(servicesId);
//         fetchReviews(serviceId)
//     }, [servicesId]);



//     useEffect(() => {
//         if (!serviceId) return;

//         fetchServiceDetails(serviceId);
//     }, [serviceId]);

//     useEffect(() => {
//         fetchCommission()
//     }, [])

//     const commission = services?.[0];




//     const paymentData = {
//         listingPrice: 1000,
//         serviceDiscount: 99.45,
//         couponDiscount: 800,
//         gst: 144,
//         platformFee: 20,
//         assuranceFee: 10,
//         grandTotal: 974
//     };



//     const handleProceed = () => {
//         if (!isTermsAccepted) {
//             setShowError(true);
//             return;
//         }
//         onNext({
//             selectedUser: selected,
//             paymentData,
//         });
//     };

//     if (!packageToUse) return null;

//     if (loading) return <p className="text-[12px] md:text-[24px] text-center mt-15">Loading...</p>;
//     if (error) return <p>{error}</p>;


//     // ===== PAYMENT CALCULATION =====
//     const listingPrice = packageToUse.price;

//     const serviceDiscount = packageToUse.discount;
//     const priceAfterServiceDiscount = listingPrice - serviceDiscount;

//     const couponDiscount = paymentData.couponDiscount;

//     const priceAfterCoupon =
//         priceAfterServiceDiscount - couponDiscount;

//     // GST (18%)
//     const gstPercent = service?.gst ?? 18;
//     const gstAmount = (priceAfterCoupon * gstPercent) / 100;

//     // Platform fee (API)
//     const platformFee = commission?.platformFee ?? 0;

//     // Assurity fee (10%)
//     const ASSURITY_PERCENT = 10;
//     // const assuranceFee = (priceAfterCoupon * ASSURITY_PERCENT) / 100;


//     const assuranceFee = commission?.assurityfee ?? 0;


//     // ✅ FINAL GRAND TOTAL
//     const grandTotal =
//         priceAfterCoupon + gstAmount + platformFee + assuranceFee;


//     return (
//         <>
//             {/* DESKTOP VIEW */}
//             <section className="max-w-[1400px] hidden md:block lg:block mx-auto">
//                 {/*  MAIN GRID  */}
//                 <div className="grid grid-cols-12 gap-12 mb-15">

//                     {/*  LEFT CARD  */}
//                     <div className="col-span-4">
//                         <div className="border border-gray-200 rounded-xl overflow-hidden  shadow-sm md:w-[300px] md:h-[350px] lg:w-[479px] lg:h-[456px] p-2 lg:ml-0 md:ml-10">

//                             <div className="relative">
//                                 <img src={serviceCardData.image} className="md:w-[300px] md:h-[200px] lg:w-[455px] lg:h-[295px] object-fit" />

//                                 {serviceCardData.trusted && (
//                                     <span className="absolute -top-0 left-0 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md">
//                                         ✔ Trusted
//                                     </span>
//                                 )}

//                                 <div className="absolute md:-right-1 md:bottom-2 lg:bottom-1 lg:right-2 flex md:flex-row  md:items-center lg:items-center lg:justify-center bg-blue-600 md:w-[47px] md:h-[31px] lg:w-[67px] lg:h-[43px] text-white md:text-[10px] lg:text-[14px] px-2 py-1 rounded-md">
//                                     ⭐ {reviewServices?.averageRating}
//                                 </div>
//                             </div>

//                             <div className="p-4 space-y-3">
//                                 <div className="flex items-center justify-between">
//                                     <div>
//                                         <h3 className="font-semibold md:text-[15px] lg:text-[20px]">
//                                             {service?.serviceName}
//                                         </h3>

//                                         <p className="lg:text-[16px] md:text-[12px] text-gray-500">
//                                             {serviceCardData.category}
//                                         </p>
//                                     </div>

//                                     <div className="flex flex-col">
//                                         <p className="lg:text-[10px] md:text-[8px] text-[#4A2E82] font-medium whitespace-normal breakwords">
//                                             -EARN UP TO-

//                                         </p>
//                                         <span className="text-[#2CB140] lg:text-[14px] md:text-[10px] text-center"> {serviceCardData.rewardText}</span>
//                                     </div>
//                                 </div>


//                                 <div className="grid grid-cols-3 text-center md:text-[12px] lg:text-[16px] mt-4">
//                                     {serviceCardData.stats.map((item, i) => (
//                                         <div
//                                             key={i}
//                                             className="relative px-3"
//                                         >
//                                             {/* Divider */}
//                                             {i !== serviceCardData.stats.length - 1 && (
//                                                 <span className="absolute top-1/2 right-0 -translate-y-1/2 h-10 w-[2px] bg-gray-300" />
//                                             )}

//                                             <p className="text-gray-500">{item.label}</p>
//                                             <p className="text-[#1D4699] font-semibold">{item.value}</p>
//                                         </div>
//                                     ))}
//                                 </div>



//                             </div>
//                         </div>
//                     </div>

//                     {/* ===== RIGHT PANEL ===== */}
//                     <div className="col-span-6 space-y-6 md:ml-25 lg:ml-18">

//                         <h2 className="lg:text-[20px] font-semibold">
//                             Who is this service for?
//                         </h2>

//                         {/* ===== OPTION 1 ===== */}

//                         <div className="border border-gray-300 rounded-xl p-4 space-y-3">
//                             {/* RADIO */}
//                             <label className="flex items-center gap-2 md:text-[12px] lg:text-[16px] font-medium cursor-pointer">
//                                 <input
//                                     type="radio"
//                                     name="serviceFor"
//                                     checked={selected === "me"}
//                                     onChange={() => setSelected("me")}
//                                 />
//                                 This Service is for me
//                             </label>

//                             {/* REVEAL CONTENT */}
//                             {selected === "me" && (
//                                 <div className="pl-6 md:text-[12px] lg:text-[16px] space-y-2">


//                                     <div className="flex items-center whitespace-nowrap gap-2">
//                                         <p><strong>Name:</strong> {userData.name}</p>
//                                         <div className="md:ml-12 lg:ml-22 flex flex-row gap-2">
//                                             <Phone size={14} />
//                                             <FaWhatsapp className="text-green-500" />
//                                         </div>
//                                     </div>
//                                     <strong>Phone:</strong> {userData.phone}


//                                     <p className="flex items-center gap-1">
//                                         <MapPin size={14} /> {userData.address}
//                                     </p>

//                                     <p className="text-gray-500 md:text-[10px] lg:text-[14px]">
//                                         Note: {userData.note}
//                                     </p>
//                                 </div>
//                             )}
//                         </div>

//                         {/* ===== OPTION 2 ===== */}
//                         <div className="border border-gray-300  rounded-xl p-4 space-y-4">
//                             <label className="flex items-center gap-2 md:text-[12px] lg:text-[16px] font-medium">
//                                 <input type="radio" readOnly />
//                                 This Service is for my Customer
//                             </label>


//                             <div className="flex gap-4 lg:pl-6">
//                                 <button
//                                     className="
//                                     border border-blue-600 text-blue-600
//                                     px-4 py-2 rounded-lg
//                                     md:text-[12px] whitespace-nowrap
//                                     lg:text-[14px]
//                                     "
//                                     onClick={() => setOpenSidebar(true)}
//                                 >
//                                     My Customer
//                                 </button>


//                                 <button
//                                     className="
//                                             bg-blue-600 text-white
//                                             px-4 py-2 rounded-lg cursor-pointer
//                                             md:text-[12px] flex flex-row items-center
//                                             lg:text-[14px] gap-2
//                                         "
//                                     onClick={() => setOpenAddCustomers(true)}
//                                 >
//                                     <PlusCircle className="w-4 h-4 flex shrink-0" />Add New Customer
//                                 </button>

//                             </div>

//                         </div>

//                         {/* ===== COUPON ===== */}
//                         <div className="w-full max-w-[520px] bg-white rounded-xl border border-gray-200 p-4 space-y-4">
//                             {/* Header */}
//                             <div className="flex items-center justify-between">
//                                 <h3 className="md:text-[12px] lg:text-[16px] font-semibold text-black">
//                                     Best Coupon For You
//                                 </h3>

//                                 <button
//                                     onClick={() => setOpenCoupons(true)}
//                                     className="flex items-center gap-1 text-[14px] text-blue-600 font-medium cursor-pointer"
//                                 >
//                                     All Coupons
//                                     <span className="text-[18px] leading-none">›</span>
//                                 </button>

//                             </div>

//                             {/* Coupon Input Row */}
//                             <div className="flex items-center justify-between gap-4">
//                                 {/* Coupon Box */}
//                                 <div className="flex items-center justify-center h-[48px] w-[160px] border border-dashed border-gray-300 rounded-lg text-gray-500 font-semibold tracking-widest">
//                                     XXXXXX
//                                 </div>

//                                 {/* Apply Button */}
//                                 <button
//                                     disabled
//                                     className="h-[48px] px-8 rounded-lg bg-gray-200 text-gray-500 font-medium cursor-not-allowed"
//                                 >
//                                     Apply
//                                 </button>
//                             </div>
//                         </div>


//                     </div>
//                 </div>
//             </section>

//             {openCoupons && (
//                 <CouponsDialog

//                     onClose={() => setOpenCoupons(false)}
//                 />
//             )}

//             {openAddCustomers && (
//                 <AddCustomerDialog
//                     onClose={() => setOpenAddCustomers(false)}
//                 />
//             )}

//             {openSidebar && (
//                 <div
//                     onClick={() => setOpenSidebar(false)}
//                     className="fixed inset-0 bg-black/40 z-40"
//                 />
//             )}

//             {/* SIDEBAR */}
//             <div
//                 className={`
//           fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50
//           transform transition-transform duration-300 ease-in-out
//           ${openSidebar ? 'translate-x-0' : 'translate-x-full'}
//         `}
//             >
//                 <CustomerList onClose={() => setOpenSidebar(false)} />
//             </div>

//             <section className="hidden md:hidden lg:block md:w-[650px] lg:w-[1400px] mx-auto bg-white rounded-xl border border-gray-200 mb-10 p-6 space-y-6">

//                 {/* ===== PAYMENT DETAILS ===== */}
//                 <div className="space-y-4">
//                     <h3 className="md:text-[12px] lg:text-[16px] font-semibold text-black">
//                         Payment Details
//                     </h3>

//                     <div className="space-y-3 md:text-[12px] lg:text-[16px]">
//                         <Row label="Listing Price" value={`₹ ${packageToUse.price.toFixed(2)}`} />

//                         <Row
//                             label="Service Discount (0%)"
//                             value={`- ₹ ${packageToUse.discount.toFixed(2)}`}
//                             valueClass="text-red-500"
//                         />

//                         <Row label="Price After Discount" value={`- ₹ ${packageToUse.discountedPrice.toFixed(2)}`} />

//                         <Row
//                             label="Coupon Discount (50%)"
//                             value={`- ₹ ${paymentData.couponDiscount.toFixed(2)}`}
//                             valueClass="text-red-500"
//                         />

//                         <Row
//                             label="Service GST (18%)"
//                             value={`+ ₹ ${service?.gst}`}
//                             valueClass="text-green-600"
//                         />

//                         <Row
//                             label="Platform Fee (20)"
//                             value={`+ ₹ ${platformFee.toFixed(2)}`}
//                             valueClass="text-green-600"
//                         />

//                         <Row
//                             label="Fetch True Assurity Charges (10%)"
//                             value={`+ ₹ ${assuranceFee.toFixed(2)}`}
//                             valueClass="text-green-600"
//                         />
//                     </div>
//                 </div>

//                 {/* ===== GRAND TOTAL ===== */}
//                 <div className="flex items-center justify-between bg-blue-50 px-4 py-3 rounded-lg">
//                     <p className="text-blue-600 font-semibold md;text-[15px] lg:text-[20px]">
//                         Grand Total
//                     </p>
//                     <p className="text-blue-600 font-semibold md;text-[15px] lg:text-[20px]">
//                         ₹ {paymentData.grandTotal}
//                     </p>
//                 </div>

//                 {/* ===== TERMS & PAY ===== */}
//                 <div className="flex items-center justify-between pt-4">
//                     <label className="flex items-center gap-3 md:text-[15px] lg:text-[20px] text-gray-700">
//                         <input type="checkbox"
//                             className="w-5 h-5 border-gray-400 rounded"
//                             checked={isTermsAccepted}
//                             onChange={(e) => {
//                                 setIsTermsAccepted(e.target.checked);
//                                 setShowError(false);
//                             }}
//                         />
//                         I Agree with the terms & Condition.
//                     </label>

//                     {/* <button className="bg-blue-600 text-white px-10 py-3 rounded-lg md:text-[15px] lg:text-[20px] font-medium cursor-pointer"
//                         onClick={handleProceed}>
//                         Proceed To Pay
//                     </button> */}
//                     <button
//                         disabled={!isTermsAccepted}
//                         className={`px-10 py-3 rounded-lg md:text-[15px] lg:text-[20px] font-medium
//                   ${isTermsAccepted
//                                 ? "bg-blue-600 text-white cursor-pointer"
//                                 : "bg-gray-400 text-white cursor-not-allowed"}
//                   `}
//                         onClick={handleProceed}
//                     >
//                         Proceed To Pay
//                     </button>

//                 </div>


//                 {showError && (
//                     <p className="text-red-500 text-sm md:text-[13px] lg:text-[15px]">
//                         Please accept the Terms & Conditions to proceed.
//                     </p>
//                 )}
//             </section>

//             {/* ======================================================
//                 MOBILE VIEW 
//             ====================================================== */}
//             <section className="block md:hidden lg:hidden px-4 pb-28 space-y-6">

//                 {/* SERVICE CARD */}
//                 <div className="border rounded-xl p-3 shadow-sm">
//                     <img
//                         src={serviceCardData.image}
//                         className="w-full h-[200px] object-contain"
//                     />
//                     {serviceCardData.trusted && (
//                         <span className="absolute top-63 left-6 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md">
//                             ✔ Trusted
//                         </span>
//                     )}

//                     <div className="absolute bottom-55 right-6 flex md:flex-row items-center lg:justify-center bg-blue-600 w-[47px] h-[28px] text-white text-[10px]  px-2 py-1 rounded-md">
//                         ⭐ {serviceCardData.rating}
//                     </div>

//                     <div className="mt-3 flex justify-between">
//                         <div>
//                             <h3 className="font-semibold text-[16px]">
//                                 {serviceCardData.title}
//                             </h3>
//                             <p className="text-gray-500 text-sm">
//                                 {serviceCardData.category}
//                             </p>
//                         </div>

//                         <div className="text-right">
//                             <p className="text-[10px] text-[#4A2E82]">-EARN UP TO-</p>
//                             <p className="text-[#2CB140] text-sm font-semibold">
//                                 {serviceCardData.rewardText}
//                             </p>
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-3 text-center text-sm mt-4">
//                         {serviceCardData.stats.map((item, i) => (
//                             <div key={i}>
//                                 <p className="text-gray-500">{item.label}</p>
//                                 <p className="font-semibold text-[#1D4699]">
//                                     {item.value}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* WHO IS SERVICE FOR */}
//                 <div className="space-y-4">
//                     <h2 className="font-semibold text-[16px]">
//                         Who is this service for?
//                     </h2>

//                     {/* FOR ME */}
//                     <div className="border rounded-xl p-4">
//                         <label className="flex gap-2 font-medium">
//                             <input
//                                 type="radio"
//                                 checked={selected === "me"}
//                                 onChange={() => setSelected("me")}
//                             />
//                             This Service is for me
//                         </label>

//                         {selected === "me" && (
//                             <div className="mt-3 space-y-2 text-sm">
//                                 <p><strong>Name:</strong> {userData.name}</p>
//                                 <p className="flex items-center gap-2">
//                                     <Phone size={14} />
//                                     {userData.phone}
//                                     <FaWhatsapp className="text-green-500" />
//                                 </p>
//                                 <p className="flex items-center gap-1">
//                                     <MapPin size={14} /> {userData.address}
//                                 </p>
//                                 <p className="text-gray-500">
//                                     Note: {userData.note}
//                                 </p>
//                             </div>
//                         )}
//                     </div>

//                     {/* FOR CUSTOMER */}
//                     <div className="border rounded-xl p-4 space-y-3">
//                         <label className="flex gap-2 font-medium">
//                             <input type="radio" readOnly />
//                             This Service is for my Customer
//                         </label>

//                         <div className="flex flex-col gap-3">
//                             <button
//                                 onClick={() => setOpenSidebar(true)}
//                                 className="border border-blue-600 text-blue-600 py-2 rounded-lg"
//                             >
//                                 My Customer
//                             </button>

//                             <Link href="/MainModules/Checkout/AddNewCustomer">
//                                 <button className="bg-blue-600 text-white py-2 flex flex-row items-center gap-4 rounded-lg w-full">
//                                     {/* + Add New Customer */}
//                                     <PlusCircle className="w-4 h-4 ml-6" />  Add New Customer
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* COUPON */}
//                 <div className="border rounded-xl p-4 space-y-3">
//                     <div className="flex justify-between items-center">
//                         <h3 className="font-semibold text-sm">
//                             Best Coupon For You
//                         </h3>
//                         <button
//                             onClick={() => setOpenCoupons(true)}
//                             className="text-blue-600 text-sm"
//                         >
//                             All Coupons →
//                         </button>
//                     </div>

//                     <div className="flex gap-3">
//                         <div className="flex-1 h-[44px] border border-dashed rounded-lg flex items-center justify-center">
//                             XXXXXX
//                         </div>
//                         <button
//                             disabled
//                             className="px-6 bg-gray-200 rounded-lg text-gray-500"
//                         >
//                             Apply
//                         </button>
//                     </div>
//                 </div>

//                 {/* PAYMENT SUMMARY */}
//                 <div className="border rounded-xl p-4 space-y-3">
//                     <div className="flex justify-between text-sm">
//                         <span>Total</span>
//                         <span className="font-semibold">
//                             ₹ {paymentData.grandTotal}
//                         </span>
//                     </div>
//                 </div>
//             </section>


//             <section className="md:block lg:hidden md:w-[650px] lg:w-[1400px] mx-auto bg-white rounded-xl border border-gray-200 mb-10 p-6 space-y-6">

//                 {/* ===== PAYMENT DETAILS ===== */}
//                 <div className="space-y-4">
//                     <h3 className="md:text-[12px] lg:text-[16px] font-semibold text-black">
//                         Payment Details
//                     </h3>

//                     <div className="space-y-3 md:text-[12px] lg:text-[16px]">
//                         <Row label="Listing Price" value={`₹ ${paymentData.listingPrice.toFixed(2)}`} />

//                         <Row
//                             label="Service Discount (0%)"
//                             value={`- ₹ ${paymentData.serviceDiscount.toFixed(2)}`}
//                             valueClass="text-red-500"
//                         />

//                         {/* <Row label="Price After Discount" value="₹ 0.00" /> */}
//                         <Row label="Price After Discount" value={`- ₹ ${packageToUse.discountedPrice.toFixed(2)}`} />

//                         <Row
//                             label="Coupon Discount (50%)"
//                             value={`- ₹ ${paymentData.couponDiscount.toFixed(2)}`}
//                             valueClass="text-red-500"
//                         />

//                         <Row
//                             label="Service GST (18%)"
//                             // value={`+ ₹ ${paymentData.gst.toFixed(2)}`}
//                             value={`+ ₹ ${paymentData.gst.toFixed(2)}`}
//                             valueClass="text-green-600"
//                         />

//                         <Row
//                             label="Platform Fee (20)"
//                             value={`+ ₹ ${platformFee.toFixed(2)}`}
//                             valueClass="text-green-600"
//                         />

//                         <Row
//                             label="Fetch True Assurity Charges (10%)"
//                             value={`+ ₹ ${assuranceFee.toFixed(2)}`}
//                             valueClass="text-green-600"
//                         />
//                     </div>
//                 </div>

//                 {/* ===== GRAND TOTAL ===== */}
//                 <div className="flex items-center justify-between bg-blue-50 px-4 py-3 rounded-lg">
//                     <p className="text-blue-600 font-semibold md:text-[15px] lg:text-[20px]">
//                         Grand Total
//                     </p>
//                     <p className="text-blue-600 font-semibold md;text-[15px] lg:text-[20px]">
//                         ₹ {paymentData.grandTotal}
//                     </p>
//                 </div>

//                 {/* ===== TERMS & PAY ===== */}
//                 <div className="flex flex-col pt-4 gap-6">
//                     <label className="flex items-center gap-3 md:text-[15px] text-[15px] text-gray-700">
//                         <input
//                             type="checkbox"
//                             className="w-5 h-5 border-gray-400 rounded"
//                             checked={isTermsAccepted}
//                             onChange={(e) => {
//                                 setIsTermsAccepted(e.target.checked);
//                                 setShowError(false);
//                             }}
//                         />

//                         I Agree with the terms & Condition.
//                     </label>

//                     {/* <button className="bg-blue-600 text-white md:px-10 px-6 py-3 rounded-lg md:text-[15px] text-[12px] font-medium cursor-pointer whitespace-nowrap"
//                         onClick={() => handleProceed()}>
//                         Proceed To Pay
//                     </button> */}
//                     <button
//                         disabled={!isTermsAccepted}
//                         className={`px-10 py-3 rounded-lg md:text-[15px] lg:text-[20px] font-medium
//                   ${isTermsAccepted
//                                 ? "bg-blue-600 text-white cursor-pointer"
//                                 : "bg-gray-400 text-white cursor-not-allowed"}
//                   `}
//                         onClick={handleProceed}
//                     >
//                         Proceed To Pay
//                     </button>
//                 </div>
//             </section>

//             {/* ======================================================
//                 COUPONS DIALOG
//             ====================================================== */}
//             {openCoupons && (
//                 <CouponsDialog
//                     onClose={() => setOpenCoupons(false)}
//                 />
//             )}

//             {/* ======================================================
//                 CUSTOMER SIDEBAR
//             ====================================================== */}
//             {openSidebar && (
//                 <div
//                     onClick={() => setOpenSidebar(false)}
//                     className="fixed inset-0 bg-black/40 z-40"
//                 />
//             )}

//             <div
//                 className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 transition-transform
//                 ${openSidebar ? 'translate-x-0' : 'translate-x-full'}`}
//             >
//                 <CustomerList onClose={() => setOpenSidebar(false)} />
//             </div>


//         </>
//     );
// }



// function Row({
//     label,
//     value,
//     valueClass = "text-black"
// }: {
//     label: string
//     value: string
//     valueClass?: string
// }) {
//     return (
//         <>
//             <div className="relative w-full">
//                 <div className="flex items-center justify-between text-gray-500">
//                     <p>{label}</p>
//                     <p className={`font-medium ${valueClass}`}>
//                         {value}
//                     </p>
//                 </div>
//             </div>
//         </>
//     )
// }



'use client';

import { MapPin, Phone, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import CustomerList from "./CustomerList";
import CouponsDialog from "./CouponsDialog";
import { useCheckout } from "@/src/context/CheckoutContext";
import { useSearchParams } from "next/navigation";   // ← useSearchParams, NOT useParams
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import AddCustomerDialog from "./AddCustomerForm";
import { useCommission } from "@/src/context/PlatformFeeContext";
import { useReview } from "@/src/context/ReviewContext";

/* ================= MOCK DATA ================= */

const serviceCardData = {
    image: "/image/checkoutcard.png",
    trusted: true,
    category: "Agricultural",
    stats: [
        { label: "Investment", value: "₹ 10L-5L" },
        { label: "Earnings", value: "1.5-3L/M" },
        { label: "ROI", value: "25-30%" }
    ],
    rewardText: "₹15%"
};

// TODO: Replace with real user data from auth context
const userData = {
    name: "Suhani Shaha",
    phone: "789578990",
    address: "Flat no.3, Sky Building, Pune",
    note: "Customer Requested urgent Service"
};

type PaymentData = {
    listingPrice: number;
    serviceDiscount: number;
    couponDiscount: number;
    gst: number;
    platformFee: number;
    assuranceFee: number;
    grandTotal: number;
};

type CheckoutData = {
    selectedUser: string;
    paymentData: PaymentData;
};

type DetailsStepProps = {
    data: CheckoutData | null;
    onNext: (data: CheckoutData) => void;
};

/* ================= PAYMENT SUMMARY ================= */

function PaymentSummary({
    packageToUse,
    service,
    platformFee,
    assuranceFee,
    couponDiscount,
    grandTotal,
    isTermsAccepted,
    setIsTermsAccepted,
    showError,
    setShowError,
    handleProceed,
    containerClass = ""
}: {
    packageToUse: { price: number; discount: number; discountedPrice: number };
    service: { gst?: number } | null;
    platformFee: number;
    assuranceFee: number;
    couponDiscount: number;
    grandTotal: number;
    isTermsAccepted: boolean;
    setIsTermsAccepted: (v: boolean) => void;
    showError: boolean;
    setShowError: (v: boolean) => void;
    handleProceed: () => void;
    containerClass?: string;
}) {
    return (
        <section className={`bg-white rounded-xl border border-gray-200 mb-10 p-6 space-y-6 ${containerClass}`}>
            <div className="space-y-4">
                <h3 className="md:text-[12px] lg:text-[16px] font-semibold text-black">Payment Details</h3>
                <div className="space-y-3 md:text-[12px] lg:text-[16px]">
                    <Row label="Listing Price" value={`₹ ${packageToUse.price.toFixed(2)}`} />
                    <Row label="Service Discount" value={`- ₹ ${packageToUse.discount.toFixed(2)}`} valueClass="text-red-500" />
                    <Row label="Price After Discount" value={`₹ ${packageToUse.discountedPrice.toFixed(2)}`} />
                    <Row label="Coupon Discount (50%)" value={`- ₹ ${couponDiscount.toFixed(2)}`} valueClass="text-red-500" />
                    <Row
                        label={`Service GST (${service?.gst ?? 18}%)`}
                        value={`+ ₹ ${(((packageToUse.discountedPrice - couponDiscount) * (service?.gst ?? 18)) / 100).toFixed(2)}`}
                        valueClass="text-green-600"
                    />
                    <Row label="Platform Fee" value={`+ ₹ ${platformFee.toFixed(2)}`} valueClass="text-green-600" />
                    <Row label="Fetch True Assurity Charges (10%)" value={`+ ₹ ${assuranceFee.toFixed(2)}`} valueClass="text-green-600" />
                </div>
            </div>

            <div className="flex items-center justify-between bg-blue-50 px-4 py-3 rounded-lg">
                <p className="text-blue-600 font-semibold md:text-[15px] lg:text-[20px]">Grand Total</p>
                <p className="text-blue-600 font-semibold md:text-[15px] lg:text-[20px]">₹ {grandTotal.toFixed(2)}</p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-4 gap-4">
                <label className="flex items-center gap-3 md:text-[15px] lg:text-[20px] text-gray-700 cursor-pointer">
                    <input
                        type="checkbox"
                        className="w-5 h-5 border-gray-400 rounded"
                        checked={isTermsAccepted}
                        onChange={(e) => { setIsTermsAccepted(e.target.checked); setShowError(false); }}
                    />
                    I Agree with the terms &amp; Condition.
                </label>
                <button
                    disabled={!isTermsAccepted}
                    className={`px-10 py-3 rounded-lg md:text-[15px] lg:text-[20px] font-medium transition-colors
                        ${isTermsAccepted
                            ? "bg-blue-600 text-white cursor-pointer hover:bg-blue-700"
                            : "bg-gray-400 text-white cursor-not-allowed"
                        }`}
                    onClick={handleProceed}
                >
                    Proceed To Pay
                </button>
            </div>

            {showError && (
                <p className="text-red-500 text-sm md:text-[13px] lg:text-[15px]">
                    Please accept the Terms &amp; Conditions to proceed.
                </p>
            )}
        </section>
    );
}

/* ================= MAIN COMPONENT ================= */

export default function DetailsStep({ onNext }: DetailsStepProps) {

    const { service, loading, error, fetchServiceDetails } = useServiceDetails();
    const { reviewServices, fetchReviews } = useReview();

   
    const searchParams = useSearchParams();
    const serviceId = searchParams.get("id") ?? "";

    const [selected, setSelected] = useState<"me" | "customer">("me");
    const [openSidebar, setOpenSidebar] = useState(false);
    const [openCoupons, setOpenCoupons] = useState(false);
    const [openAddCustomers, setOpenAddCustomers] = useState(false);
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);
    const [showError, setShowError] = useState(false);

    const { selectedPackage, loadPackage, hydrated } = useCheckout();
    const { services, fetchCommission } = useCommission();

    useEffect(() => {
        if (!serviceId) return;
        loadPackage(serviceId);         // rehydrate from sessionStorage after refresh
        fetchServiceDetails(serviceId);
        fetchReviews(serviceId);
    }, [serviceId]);

    useEffect(() => {
        fetchCommission();
    }, []);

    const commission = services?.[0];
    const basicPackage = service?.serviceDetails?.packages?.[0];
    const packageToUse = selectedPackage ?? basicPackage;

    const couponDiscount = 800; // TODO: replace with real selected coupon value

    const computedPayment = packageToUse
        ? (() => {
            const priceAfterCoupon = packageToUse.discountedPrice - couponDiscount;
            const gstPercent = service?.gst ?? 18;
            const gstAmount = (priceAfterCoupon * gstPercent) / 100;
            const platformFee = commission?.platformFee ?? 0;
            const assuranceFee = commission?.assurityfee ?? 0;
            const grandTotal = priceAfterCoupon + gstAmount + platformFee + assuranceFee;
            return { gstAmount, platformFee, assuranceFee, grandTotal };
        })()
        : null;

    const handleProceed = () => {
        if (!isTermsAccepted) { setShowError(true); return; }
        if (!packageToUse || !computedPayment) return;
        onNext({
            selectedUser: selected,
            paymentData: {
                listingPrice: packageToUse.price,
                serviceDiscount: packageToUse.discount,
                couponDiscount,
                gst: computedPayment.gstAmount,
                platformFee: computedPayment.platformFee,
                assuranceFee: computedPayment.assuranceFee,
                grandTotal: computedPayment.grandTotal,
            },
        });
    };

    // ── GUARD 1: wait for hydration + API fetch
    if (!hydrated || loading) {
        return (
            <div className="flex flex-col items-center justify-center mt-20 gap-3">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <p className="text-gray-500 text-sm">Loading...</p>
            </div>
        );
    }

    // ── GUARD 2: API error
    if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

    // ── GUARD 3: no package data
    if (!packageToUse || !computedPayment) {
        return (
            <div className="flex flex-col items-center justify-center mt-20 gap-3 px-4 text-center">
                <p className="text-gray-600 text-sm md:text-base">
                    No package selected. Please go back and choose a package to continue.
                </p>
            </div>
        );
    }

    const paymentSummaryProps = {
        packageToUse,
        service: service ?? null,
        platformFee: computedPayment.platformFee,
        assuranceFee: computedPayment.assuranceFee,
        couponDiscount,
        grandTotal: computedPayment.grandTotal,
        isTermsAccepted,
        setIsTermsAccepted,
        showError,
        setShowError,
        handleProceed,
    };

    return (
        <>
            {/* ======================================================
                DESKTOP VIEW (lg+)
            ====================================================== */}
            <section className="max-w-[1400px] hidden lg:block mx-auto">
                <div className="grid grid-cols-12 gap-12 mb-15">

                    {/* LEFT CARD */}
                    <div className="col-span-4">
                        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm lg:w-[479px] lg:h-[456px] p-2">
                            <div className="relative">
                                <img src={serviceCardData.image} alt="Service" className="lg:w-[455px] lg:h-[295px] object-cover" />
                                {serviceCardData.trusted && (
                                    <span className="absolute top-0 left-0 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md">✔ Trusted</span>
                                )}
                                <div className="absolute bottom-1 right-2 flex items-center justify-center bg-blue-600 lg:w-[67px] lg:h-[43px] text-white lg:text-[14px] px-2 py-1 rounded-md">
                                    ⭐ {reviewServices?.averageRating ?? "—"}
                                </div>
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold lg:text-[20px]">{service?.serviceName}</h3>
                                        <p className="lg:text-[16px] text-gray-500">{serviceCardData.category}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="lg:text-[10px] text-[#4A2E82] font-medium">-EARN UP TO-</p>
                                        <span className="text-[#2CB140] lg:text-[14px] text-center">{serviceCardData.rewardText}</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 text-center lg:text-[16px] mt-4">
                                    {serviceCardData.stats.map((item, i) => (
                                        <div key={i} className="relative px-3">
                                            {i !== serviceCardData.stats.length - 1 && (
                                                <span className="absolute top-1/2 right-0 -translate-y-1/2 h-10 w-[2px] bg-gray-300" />
                                            )}
                                            <p className="text-gray-500">{item.label}</p>
                                            <p className="text-[#1D4699] font-semibold">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="col-span-6 space-y-6 lg:ml-18">
                        <h2 className="lg:text-[20px] font-semibold">Who is this service for?</h2>

                        {/* FOR ME */}
                        <div className="border border-gray-300 rounded-xl p-4 space-y-3">
                            <label className="flex items-center gap-2 lg:text-[16px] font-medium cursor-pointer">
                                <input type="radio" name="serviceFor" checked={selected === "me"} onChange={() => setSelected("me")} />
                                This Service is for me
                            </label>
                            {selected === "me" && (
                                <div className="pl-6 lg:text-[16px] space-y-2">
                                    <div className="flex items-center gap-2">
                                        <p><strong>Name:</strong> {userData.name}</p>
                                        <div className="lg:ml-22 flex flex-row gap-2">
                                            <Phone size={14} />
                                            <FaWhatsapp className="text-green-500" />
                                        </div>
                                    </div>
                                    <p><strong>Phone:</strong> {userData.phone}</p>
                                    <p className="flex items-center gap-1"><MapPin size={14} /> {userData.address}</p>
                                    <p className="text-gray-500 lg:text-[14px]">Note: {userData.note}</p>
                                </div>
                            )}
                        </div>

                        {/* FOR CUSTOMER */}
                        <div className="border border-gray-300 rounded-xl p-4 space-y-4">
                            <label className="flex items-center gap-2 lg:text-[16px] font-medium cursor-pointer">
                                <input type="radio" name="serviceFor" checked={selected === "customer"} onChange={() => setSelected("customer")} />
                                This Service is for my Customer
                            </label>
                            <div className="flex gap-4 lg:pl-6">
                                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg lg:text-[14px] whitespace-nowrap hover:bg-blue-50 transition-colors" onClick={() => setOpenSidebar(true)}>
                                    My Customer
                                </button>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer lg:text-[14px] flex flex-row items-center gap-2 hover:bg-blue-700 transition-colors" onClick={() => setOpenAddCustomers(true)}>
                                    <PlusCircle className="w-4 h-4 shrink-0" /> Add New Customer
                                </button>
                            </div>
                        </div>

                        {/* COUPON */}
                        <div className="w-full max-w-[520px] bg-white rounded-xl border border-gray-200 p-4 space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="lg:text-[16px] font-semibold text-black">Best Coupon For You</h3>
                                <button onClick={() => setOpenCoupons(true)} className="flex items-center gap-1 text-[14px] text-blue-600 font-medium cursor-pointer hover:underline">
                                    All Coupons <span className="text-[18px] leading-none">›</span>
                                </button>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center justify-center h-[48px] w-[160px] border border-dashed border-gray-300 rounded-lg text-gray-500 font-semibold tracking-widest">
                                    XXXXXX
                                </div>
                                <button disabled className="h-[48px] px-8 rounded-lg bg-gray-200 text-gray-500 font-medium cursor-not-allowed">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Desktop payment summary */}
            <PaymentSummary {...paymentSummaryProps} containerClass="hidden lg:block max-w-[1400px] mx-auto" />

            {/* ======================================================
                TABLET VIEW (md only)
            ====================================================== */}
            <section className="hidden md:block lg:hidden px-6">
                <div className="flex flex-col gap-6 mb-6">

                    {/* SERVICE CARD - tablet */}
                    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm w-[300px] mx-auto p-2">
                        <div className="relative">
                            <img src={serviceCardData.image} alt="Service" className="w-[300px] h-[200px] object-cover" />
                            {serviceCardData.trusted && (
                                <span className="absolute top-0 left-0 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md">✔ Trusted</span>
                            )}
                            <div className="absolute bottom-2 right-1 flex items-center justify-center bg-blue-600 w-[47px] h-[31px] text-white text-[10px] px-2 py-1 rounded-md">
                                ⭐ {reviewServices?.averageRating ?? "—"}
                            </div>
                        </div>
                        <div className="p-3 space-y-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold text-[15px]">{service?.serviceName}</h3>
                                    <p className="text-[12px] text-gray-500">{serviceCardData.category}</p>
                                </div>
                                <div className="flex flex-col text-right">
                                    <p className="text-[8px] text-[#4A2E82] font-medium">-EARN UP TO-</p>
                                    <span className="text-[#2CB140] text-[10px] text-center">{serviceCardData.rewardText}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 text-center text-[12px] mt-2">
                                {serviceCardData.stats.map((item, i) => (
                                    <div key={i} className="relative px-2">
                                        {i !== serviceCardData.stats.length - 1 && (
                                            <span className="absolute top-1/2 right-0 -translate-y-1/2 h-8 w-[2px] bg-gray-300" />
                                        )}
                                        <p className="text-gray-500">{item.label}</p>
                                        <p className="text-[#1D4699] font-semibold">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* WHO IS THIS SERVICE FOR - tablet */}
                    <div className="space-y-4">
                        <h2 className="text-[16px] font-semibold">Who is this service for?</h2>

                        <div className="border border-gray-300 rounded-xl p-4 space-y-3">
                            <label className="flex items-center gap-2 text-[12px] font-medium cursor-pointer">
                                <input type="radio" name="serviceForTablet" checked={selected === "me"} onChange={() => setSelected("me")} />
                                This Service is for me
                            </label>
                            {selected === "me" && (
                                <div className="pl-6 text-[12px] space-y-2">
                                    <p><strong>Name:</strong> {userData.name}</p>
                                    <p><strong>Phone:</strong> {userData.phone}</p>
                                    <p className="flex items-center gap-1"><MapPin size={12} /> {userData.address}</p>
                                    <p className="text-gray-500">Note: {userData.note}</p>
                                </div>
                            )}
                        </div>

                        <div className="border border-gray-300 rounded-xl p-4 space-y-3">
                            <label className="flex items-center gap-2 text-[12px] font-medium cursor-pointer">
                                <input type="radio" name="serviceForTablet" checked={selected === "customer"} onChange={() => setSelected("customer")} />
                                This Service is for my Customer
                            </label>
                            <div className="flex gap-3 pl-4">
                                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-[12px] whitespace-nowrap" onClick={() => setOpenSidebar(true)}>
                                    My Customer
                                </button>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-[12px] flex items-center gap-2" onClick={() => setOpenAddCustomers(true)}>
                                    <PlusCircle className="w-3 h-3" /> Add New Customer
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* COUPON - tablet */}
                    <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-3">
                        <div className="flex items-center justify-between">
                            <h3 className="text-[12px] font-semibold text-black">Best Coupon For You</h3>
                            <button onClick={() => setOpenCoupons(true)} className="text-blue-600 text-[12px] font-medium">All Coupons ›</button>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center h-[44px] flex-1 border border-dashed border-gray-300 rounded-lg text-gray-500 font-semibold tracking-widest text-[12px]">
                                XXXXXX
                            </div>
                            <button disabled className="h-[44px] px-6 bg-gray-200 rounded-lg text-gray-500 text-[12px] cursor-not-allowed">Apply</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tablet payment summary */}
            <PaymentSummary {...paymentSummaryProps} containerClass="hidden md:block lg:hidden w-[650px] mx-auto" />

            {/* ======================================================
                MOBILE VIEW (< md)
            ====================================================== */}
            <section className="block md:hidden px-4 pb-28 space-y-6">

                {/* SERVICE CARD - mobile */}
                <div className="border rounded-xl p-3 shadow-sm relative">
                    <img src={serviceCardData.image} className="w-full h-[200px] object-contain" alt="Service" />
                    {serviceCardData.trusted && (
                        <span className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md">✔ Trusted</span>
                    )}
                    <div className="absolute top-3 right-3 flex items-center justify-center bg-blue-600 w-[47px] h-[28px] text-white text-[10px] px-2 py-1 rounded-md">
                        ⭐ {reviewServices?.averageRating ?? "—"}
                    </div>
                    <div className="mt-3 flex justify-between">
                        <div>
                            <h3 className="font-semibold text-[16px]">{service?.serviceName ?? serviceCardData.category}</h3>
                            <p className="text-gray-500 text-sm">{serviceCardData.category}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] text-[#4A2E82]">-EARN UP TO-</p>
                            <p className="text-[#2CB140] text-sm font-semibold">{serviceCardData.rewardText}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 text-center text-sm mt-4">
                        {serviceCardData.stats.map((item, i) => (
                            <div key={i}>
                                <p className="text-gray-500">{item.label}</p>
                                <p className="font-semibold text-[#1D4699]">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* WHO IS SERVICE FOR - mobile */}
                <div className="space-y-4">
                    <h2 className="font-semibold text-[16px]">Who is this service for?</h2>

                    <div className="border rounded-xl p-4">
                        <label className="flex gap-2 font-medium cursor-pointer">
                            <input type="radio" name="serviceForMobile" checked={selected === "me"} onChange={() => setSelected("me")} />
                            This Service is for me
                        </label>
                        {selected === "me" && (
                            <div className="mt-3 space-y-2 text-sm">
                                <p><strong>Name:</strong> {userData.name}</p>
                                <p className="flex items-center gap-2">
                                    <Phone size={14} /> {userData.phone} <FaWhatsapp className="text-green-500" />
                                </p>
                                <p className="flex items-center gap-1"><MapPin size={14} /> {userData.address}</p>
                                <p className="text-gray-500">Note: {userData.note}</p>
                            </div>
                        )}
                    </div>

                    <div className="border rounded-xl p-4 space-y-3">
                        <label className="flex gap-2 font-medium cursor-pointer">
                            <input type="radio" name="serviceForMobile" checked={selected === "customer"} onChange={() => setSelected("customer")} />
                            This Service is for my Customer
                        </label>
                        <div className="flex flex-col gap-3">
                            <button onClick={() => setOpenSidebar(true)} className="border border-blue-600 text-blue-600 py-2 rounded-lg">
                                My Customer
                            </button>
                            <button onClick={() => setOpenAddCustomers(true)} className="bg-blue-600 text-white py-2 flex flex-row items-center justify-center gap-2 rounded-lg w-full">
                                <PlusCircle className="w-4 h-4" /> Add New Customer
                            </button>
                        </div>
                    </div>
                </div>

                {/* COUPON - mobile */}
                <div className="border rounded-xl p-4 space-y-3">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-sm">Best Coupon For You</h3>
                        <button onClick={() => setOpenCoupons(true)} className="text-blue-600 text-sm">All Coupons →</button>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex-1 h-[44px] border border-dashed rounded-lg flex items-center justify-center text-gray-500 font-semibold tracking-widest">
                            XXXXXX
                        </div>
                        <button disabled className="px-6 bg-gray-200 rounded-lg text-gray-500 cursor-not-allowed">Apply</button>
                    </div>
                </div>

                {/* PAYMENT SUMMARY - mobile inline */}
                <div className="border rounded-xl p-4 space-y-3 text-sm">
                    <h3 className="font-semibold">Payment Details</h3>
                    <Row label="Listing Price" value={`₹ ${packageToUse.price.toFixed(2)}`} />
                    <Row label="Service Discount" value={`- ₹ ${packageToUse.discount.toFixed(2)}`} valueClass="text-red-500" />
                    <Row label="Price After Discount" value={`₹ ${packageToUse.discountedPrice.toFixed(2)}`} />
                    <Row label="Coupon Discount" value={`- ₹ ${couponDiscount.toFixed(2)}`} valueClass="text-red-500" />
                    <Row label={`GST (${service?.gst ?? 18}%)`} value={`+ ₹ ${(((packageToUse.discountedPrice - couponDiscount) * (service?.gst ?? 18)) / 100).toFixed(2)}`} valueClass="text-green-600" />
                    <Row label="Platform Fee" value={`+ ₹ ${computedPayment.platformFee.toFixed(2)}`} valueClass="text-green-600" />
                    <Row label="Assurity Charges" value={`+ ₹ ${computedPayment.assuranceFee.toFixed(2)}`} valueClass="text-green-600" />

                    <div className="flex items-center justify-between bg-blue-50 px-3 py-2 rounded-lg mt-2">
                        <p className="text-blue-600 font-semibold">Grand Total</p>
                        <p className="text-blue-600 font-semibold">₹ {computedPayment.grandTotal.toFixed(2)}</p>
                    </div>

                    <label className="flex items-center gap-2 text-gray-700 cursor-pointer mt-2">
                        <input type="checkbox" className="w-4 h-4" checked={isTermsAccepted} onChange={(e) => { setIsTermsAccepted(e.target.checked); setShowError(false); }} />
                        I Agree with the terms &amp; Condition.
                    </label>

                    {showError && <p className="text-red-500 text-xs">Please accept the Terms &amp; Conditions to proceed.</p>}

                    <button
                        disabled={!isTermsAccepted}
                        className={`w-full py-3 rounded-lg font-medium transition-colors
                            ${isTermsAccepted
                                ? "bg-blue-600 text-white cursor-pointer hover:bg-blue-700"
                                : "bg-gray-400 text-white cursor-not-allowed"
                            }`}
                        onClick={handleProceed}
                    >
                        Proceed To Pay
                    </button>
                </div>
            </section>

            {/* ======================================================
                DIALOGS & OVERLAYS
            ====================================================== */}
            {openCoupons && <CouponsDialog onClose={() => setOpenCoupons(false)} />}
            {openAddCustomers && <AddCustomerDialog onClose={() => setOpenAddCustomers(false)} />}
            {openSidebar && <div onClick={() => setOpenSidebar(false)} className="fixed inset-0 bg-black/40 z-40" />}

            <div className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${openSidebar ? "translate-x-0" : "translate-x-full"}`}>
                <CustomerList onClose={() => setOpenSidebar(false)} />
            </div>
        </>
    );
}

/* ================= ROW HELPER ================= */

function Row({ label, value, valueClass = "text-black" }: { label: string; value: string; valueClass?: string }) {
    return (
        <div className="flex items-center justify-between text-gray-500">
            <p>{label}</p>
            <p className={`font-medium ${valueClass}`}>{value}</p>
        </div>
    );
}