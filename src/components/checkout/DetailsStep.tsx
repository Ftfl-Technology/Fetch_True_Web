



'use client';

import { Phone, PlusCircle } from "lucide-react";
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
import { useAuth } from "@/src/context/AuthContext";
import { useServiceProviders } from "@/src/context/ServicewiseProviderContext";

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
    serviceCustomer: string | null;
    paymentData: PaymentData;
};

type DetailsStepProps = {
    serviceId: string;
    packageId: string;
    data: CheckoutData | null;
    onNext: (data: CheckoutData) => void;
};

/* ================= PAYMENT SUMMARY ================= */

function PaymentSummary({
    packageToUse,
    service,
    platformFee,
    assuranceFee,
    selectedCoupon,
    couponDiscount,
    serviceDiscountAmount,
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
    serviceDiscountAmount: number;
    selectedCoupon: any;
    grandTotal: number;
    isTermsAccepted: boolean;
    setIsTermsAccepted: (v: boolean) => void;
    showError: boolean;
    setShowError: (v: boolean) => void;
    handleProceed: () => void;
    containerClass?: string;
}) {

    const getCouponLabel = () => {
        if (!selectedCoupon) return "Coupon Discount";

        if (selectedCoupon.discountAmountType === "Percentage") {
            return `Coupon Discount (${selectedCoupon.amount}%)`;
        } else {
            return `Coupon Discount (₹${selectedCoupon.amount})`;
        }
    };
    return (
        <section className={`bg-white rounded-xl border border-gray-200 mb-10 p-6 space-y-6 ${containerClass}`}>
            <div className="space-y-4">
                <h3 className="md:text-[12px] lg:text-[16px] font-semibold text-black">Payment Details</h3>
                <div className="space-y-3 md:text-[12px] lg:text-[16px]">
                    <Row label="Listing Price" value={`₹ ${packageToUse.price.toFixed(2)}`} />
                    <Row label={`Service Discount (${packageToUse.discount}%)`} value={`- ₹ ${serviceDiscountAmount.toFixed(2)}`}
                        valueClass="text-red-500" />
                    <Row label="Price After Discount" value={`₹ ${packageToUse.discountedPrice.toFixed(2)}`} />
                    <Row
                        label={getCouponLabel()}
                        value={`- ₹ ${couponDiscount.toFixed(2)}`}
                        valueClass="text-red-500"
                    />
                    <Row
                        label={`Service GST (${service?.gst ?? 18}%)`}
                        value={`+ ₹ ${(((packageToUse.discountedPrice) * (service?.gst ?? 18)) / 100).toFixed(2)}`}
                        valueClass="text-green-600"
                    />
                    <Row label="Platform Fee" value={`+ ₹ ${platformFee.toFixed(2)}`} valueClass="text-green-600" />
                    <Row label="Fetch True Assurity Charges" value={`+ ₹ ${assuranceFee.toFixed(2)}`} valueClass="text-green-600" />
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

export default function DetailsStep({ serviceId, packageId, onNext }: DetailsStepProps){
    const { service, loading, error, fetchServiceDetails } = useServiceDetails();
    const { reviewServices, fetchReviews } = useReview();
    const { providers, fetchProvidersByService } = useServiceProviders();
    const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
    const [customerNote, setCustomerNote] = useState("");

    const [selectedCoupon, setSelectedCoupon] = useState<any>(null);
    const [couponDiscount, setCouponDiscount] = useState(0);

    const searchParams = useSearchParams();
const providerId = searchParams.get("providerId");


    const [selected, setSelected] = useState<"me" | "customer">("me");
    const [openSidebar, setOpenSidebar] = useState(false);
    const [openCoupons, setOpenCoupons] = useState(false);
    const [openAddCustomers, setOpenAddCustomers] = useState(false);
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);
    const [showError, setShowError] = useState(false);

    const { selectedPackage, loadPackage, hydrated } = useCheckout();
    const { services, fetchCommission } = useCommission();
    const { user } = useAuth();

    console.log("providerId:", providerId);
console.log("providers:", providers);


    const imageUrl = service?.thumbnailImage;

   useEffect(() => {
    if (!serviceId) return;

    const init = async () => {
        await fetchServiceDetails(serviceId);
        await fetchProvidersByService(serviceId);
        await fetchReviews(serviceId);
        await fetchCommission();
    };

    init();
}, [serviceId]);

useEffect(() => {
    if (!service || !packageId) return;

    const packages = service?.serviceDetails?.packages || [];

    const matched = packages.find(
        (pkg: any) => String(pkg._id) === String(packageId)
    );

    if (matched) {
    loadPackage(serviceId); // or setSelectedPackage(matched)
}
}, [service, packageId]);


const selectedProvider =
  providers.find((p) => String(p._id) === String(providerId)) ||
  providers[0] ||   // fallback if providerId missing
  null;    console.log("Selected Provider:", selectedProvider);

    const commission = services?.[0];
    const packages = service?.serviceDetails?.packages || [];

    const packageToUse =
        selectedPackage ??
        packages.find((pkg: any) => String(pkg._id) === String(packageId)) ??
        packages[0] ??
        null;

    console.log("selectedPackage:", selectedPackage);
    console.log("packageToUse:", packageToUse);


    const calculateCouponDiscount = (coupon: any, priceAfterServiceDiscount: number) => {
        if (!coupon) return 0;

        if (coupon.discountAmountType === "Percentage") {
            const discountAmount = (priceAfterServiceDiscount * coupon.amount) / 100;
            return discountAmount;
        } else {
            return coupon.amount;
        }
    };

    const handleCouponSelect = (coupon: any) => {
        setSelectedCoupon(coupon);
        if (packageToUse) {
            const serviceDiscountAmount = (packageToUse.price * packageToUse.discount) / 100;
            const priceAfterServiceDiscount = packageToUse.price - serviceDiscountAmount;

            const discount = calculateCouponDiscount(coupon, priceAfterServiceDiscount);
            setCouponDiscount(discount);
        }
    };

    const computedPayment = packageToUse
        ? (() => {
            const serviceDiscountAmount = (packageToUse.price * packageToUse.discount) / 100;
            const priceAfterServiceDiscount = packageToUse.price - serviceDiscountAmount;
            const priceAfterCoupon = priceAfterServiceDiscount - couponDiscount;
            const gstPercent = service?.gst ?? 18;
            const gstAmount = (priceAfterServiceDiscount * gstPercent) / 100;
            const platformFee = commission?.platformFee ?? 0;
            const assuranceFee = commission?.assurityfee ?? 0;
            const grandTotal = priceAfterCoupon + gstAmount + platformFee + assuranceFee;
            return { serviceDiscountAmount, priceAfterServiceDiscount, priceAfterCoupon, gstAmount, platformFee, assuranceFee, grandTotal };
        })()
        : null;

    const handleProceed = () => {
        if (!isTermsAccepted) { setShowError(true); return; }
        if (!packageToUse || !computedPayment) return;
        onNext({
            selectedUser: selected,
            serviceCustomer: selected === "customer" ? selectedCustomer?._id : user?._id,
            paymentData: {
                listingPrice: packageToUse.price,
                serviceDiscount: computedPayment.serviceDiscountAmount,
                couponDiscount,
                gst: computedPayment.gstAmount,
                platformFee: computedPayment.platformFee,
                assuranceFee: computedPayment.assuranceFee,
                grandTotal: computedPayment.grandTotal,
            },
        });
    };



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
        selectedCoupon,
        serviceDiscountAmount: computedPayment.serviceDiscountAmount,
        grandTotal: computedPayment.grandTotal,
        isTermsAccepted,
        setIsTermsAccepted,
        showError,
        setShowError,
        handleProceed,
    };
    const couponLabel = !selectedCoupon
        ? "Coupon Discount"
        : selectedCoupon.discountAmountType === "Percentage"
            ? `Coupon Discount (${selectedCoupon.amount}%)`
            : `Coupon Discount (₹${selectedCoupon.amount})`;
    return (
        <>
            {/* 
                DESKTOP VIEW (lg+)
             */}
            <section className="max-w-[1400px] hidden lg:block mx-auto">
                <div className="grid grid-cols-12 gap-12 mb-10">

                    {/* LEFT CARD */}
                    <div className="col-span-4">
                        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm lg:w-[479px] lg:h-[456px] p-2">
                            <div className="relative">
                                <img src={imageUrl} alt="Service" className="lg:w-[455px] lg:h-[295px] object-fit" />
                                {serviceCardData.trusted && (
                                    <span className="absolute top-2 left-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md">✔ Trusted</span>
                                )}
                                <div className="absolute bottom-1 right-2 flex items-center justify-center bg-blue-600 lg:w-[67px] lg:h-[43px] text-white lg:text-[14px] px-2 py-1 rounded-md">
                                    ⭐ {service?.averageRating ?? "—"}
                                </div>
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold lg:text-[20px]">{service?.serviceName}</h3>
                                        <p className="lg:text-[16px] text-gray-500">{service?.category.name}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="lg:text-[12px] text-[#4A2E82] font-medium">-EARN UP TO-</p>
                                        <span className="text-[#2CB140] lg:text-[15px] text-center">{service?.franchiseDetails.commission}</span>
                                    </div>
                                </div>
                            
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-[25px]">
                                        ₹{packageToUse?.discountedPrice ?? "—"}
                                    </span>
                                    <span className="line-through text-gray-400 text-[18px]">
                                        ₹ {packageToUse?.price ?? "—"}
                                    </span>
                                    <span className="text-[#D56839] text-[18px] font-medium">
                                        {packageToUse?.discount ?? 0}% OFF
                                    </span>
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
                            {selected === "me" && user && (
                                <div className="pl-6 lg:text-[16px] space-y-2">
                                    <div className="flex items-center gap-2">
                                        <p><strong>Name:</strong> {user?.fullName}</p>
                                        {/* <div className="lg:ml-22 flex flex-row gap-2">
                                            <Phone size={14} />
                                            <FaWhatsapp className="text-green-500" />
                                        </div> */}
                                    </div>
                                    <p><strong>Phone:</strong> {user?.mobileNumber}</p>
                                    {/* <p className="flex items-center gap-1">
                                        <MapPin size={14} /> {userData.address}
                                    </p>
                                    <p className="text-gray-500 lg:text-[14px]">Note: {userData.note}</p> */}
                                </div>
                            )}
                        </div>

                      
                        {/* FOR CUSTOMER */}
                        <div className="border border-gray-300 rounded-xl p-4 space-y-4">
                            <label className="flex items-center gap-2 lg:text-[16px] font-medium cursor-pointer">
                                <input
                                    type="radio"
                                    name="serviceFor"
                                    checked={selected === "customer"}
                                    onChange={() => setSelected("customer")}
                                />
                                This Service is for my Customer
                            </label>

                            <div className="flex gap-4 lg:pl-6">
                                <button
                                    className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg lg:text-[14px] whitespace-nowrap hover:bg-blue-50 transition-colors"
                                    onClick={() => setOpenSidebar(true)}
                                >
                                    My Customer
                                </button>
                                <button
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer lg:text-[14px] flex flex-row items-center gap-2 hover:bg-blue-700 transition-colors"
                                    onClick={() => setOpenAddCustomers(true)}
                                >
                                    <PlusCircle className="w-4 h-4 shrink-0" /> Add New Customer
                                </button>
                            </div>


                            {selected === "customer" && selectedCustomer && (
                                <div className="lg:pl-6 mt-2">
                                    <div className="border border-gray-200 inline-flex rounded-xl p-4 bg-gray-50 space-y-2 text-sm relative">
                                        {/* Remove button */}
                                        <button
                                            onClick={() => { setSelectedCustomer(null); setCustomerNote(""); }}
                                            className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xs"
                                        >
                                            ✕
                                        </button>

                                        <div className="flex items-center gap-3 w-fit">
                                            <img
                                                src="/image/reviewcontact.jpg"
                                                alt={selectedCustomer.fullName}
                                                className="w-10 h-10 rounded-full object-fit"
                                            />
                                            <div>
                                                <p className="font-semibold">{selectedCustomer.fullName}</p>
                                                <p><span className="font-medium">Phone:</span> {selectedCustomer.phone}</p>
                                            </div>
                                        </div>



                                        {customerNote && (
                                            <p className="text-gray-500 italic">
                                                <span className="font-medium not-italic text-gray-700">Note:</span> {customerNote}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                       
                        {/* COUPON */}
                        <div className="w-full max-w-[520px] bg-white rounded-xl border border-gray-200 p-4 space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="lg:text-[16px] font-semibold text-black">
                                    {selectedCoupon ? 'Applied Coupon' : 'Best Coupon For You'}
                                </h3>
                                <button onClick={() => setOpenCoupons(true)} className="flex items-center gap-1 text-[14px] text-blue-600 font-medium cursor-pointer hover:underline">
                                    {selectedCoupon ? 'Change' : 'All Coupons'} <span className="text-[18px] leading-none">›</span>
                                </button>
                            </div>

                            {selectedCoupon ? (
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center justify-between h-[48px] flex-1 border border-green-300 bg-green-50 rounded-lg px-4">
                                        <span className="font-semibold text-green-700">{selectedCoupon.couponCode}</span>
                                        <span className="text-green-600 text-sm">
                                            {selectedCoupon.discountAmountType === "Percentage"
                                                ? `${selectedCoupon.amount}% off`
                                                : `₹${selectedCoupon.amount} off`}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setSelectedCoupon(null);
                                            setCouponDiscount(0);
                                        }}
                                        className="h-[48px] px-6 rounded-lg border border-red-500 text-red-500 font-medium hover:bg-red-50 transition-colors"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center justify-center h-[48px] w-[160px] border border-dashed border-gray-300 rounded-lg text-gray-500 font-semibold tracking-widest">
                                        XXXXXX
                                    </div>
                                    <button disabled className="h-[48px] px-8 rounded-lg bg-gray-200 text-gray-500 font-medium cursor-not-allowed">Apply</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Service Provider */}
                {selectedProvider && (
  <>
    <h2 className="text-[20px] font-semibold">Service Provider</h2>

    <div className="border rounded-xl p-4 space-y-3 inline-flex mb-10">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <img
            src={selectedProvider?.storeInfo?.logo || "/image/default-provider.png"}
            alt={selectedProvider?.storeInfo?.storeName || "Provider"}
            className="w-15 h-15 rounded-full object-cover border border-gray-200"
            onError={(e) => {
              e.currentTarget.src = "/image/default-provider.png";
            }}
          />
        </div>

        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-gray-600">Name:</span>
            <p className="text-lg font-semibold text-gray-800">
              {selectedProvider?.storeInfo?.storeName || selectedProvider?.fullName}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-gray-600">ID:</span>
            <p className="text-lg text-gray-700">{selectedProvider?.providerId}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-gray-600">Phone:</span>
            <p className="text-lg text-gray-700">
              {selectedProvider?.phoneNo || selectedProvider?.storeInfo?.storePhone}
            </p>
          </div>
        </div>

        <div className="flex flex-col ml-10 mr-4 mt-2">
          <Phone size={24} />
        </div>
      </div>
    </div>
  </>
)}

            </section>

            {/* Desktop payment summary */}
            <PaymentSummary {...paymentSummaryProps} containerClass="hidden lg:block max-w-[1400px] mx-auto" />

            {/* 
                TABLET VIEW (md only)
             */}
            <section className="hidden md:block lg:hidden px-6">
                {/* Service Provider - TOP */}
                {selectedProvider && (
  <>
    <h2 className="text-[20px] font-semibold">Service Provider</h2>

    <div className="border rounded-xl p-4 space-y-3 inline-flex mb-10">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <img
            src={selectedProvider?.storeInfo?.logo || "/image/default-provider.png"}
            alt={selectedProvider?.storeInfo?.storeName || "Provider"}
            className="w-15 h-15 rounded-full object-cover border border-gray-200"
            onError={(e) => {
              e.currentTarget.src = "/image/default-provider.png";
            }}
          />
        </div>

        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-gray-600">Name:</span>
            <p className="text-lg font-semibold text-gray-800">
              {selectedProvider?.storeInfo?.storeName || selectedProvider?.fullName}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-gray-600">ID:</span>
            <p className="text-lg text-gray-700">{selectedProvider?.providerId}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-gray-600">Phone:</span>
            <p className="text-lg text-gray-700">
              {selectedProvider?.phoneNo || selectedProvider?.storeInfo?.storePhone}
            </p>
          </div>
        </div>

        <div className="flex flex-col ml-10 mr-4 mt-2">
          <Phone size={24} />
        </div>
      </div>
    </div>
  </>
)}

                {/* Main Content Row - Card + Form */}
                <div className="flex flex-row gap-6">
                    {/* LEFT: SERVICE CARD */}
                    <div className="flex-shrink-0">
                        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm w-[300px] p-2">
                            <div className="relative">
                                <img src={imageUrl} alt="Service" className="w-[300px] h-[200px] object-fit" />
                                {serviceCardData.trusted && (
                                    <span className="absolute top-2 left-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md">✔ Trusted</span>
                                )}
                                <div className="absolute bottom-2 right-2 whitespace-nowrap flex items-center justify-center bg-blue-600 w-[35px] h-[31px] text-white text-[10px] px-2 py-1 rounded-md">
                                    ⭐ {service?.averageRating ?? "—"}
                                </div>
                            </div>
                            <div className="p-3 space-y-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold text-[15px]">{service?.serviceName}</h3>
                                        <p className="text-[12px] text-gray-500">{service?.category.name}</p>
                                    </div>
                                    <div className="flex flex-col text-right">
                                        <p className="text-[8px] text-[#4A2E82] font-medium whitespace-nowrap">-EARN UP TO-</p>
                                        <span className="text-[#2CB140] text-[10px] text-center">{service?.franchiseDetails.commission}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-[25px]">
                                        ₹{packageToUse?.discountedPrice ?? "—"}
                                    </span>
                                    <span className="line-through text-gray-400 text-[18px]">
                                        ₹ {packageToUse?.price ?? "—"}
                                    </span>
                                    <span className="text-[#D56839] text-[18px] font-medium">
                                        {packageToUse?.discount ?? 0}% OFF
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: WHO IS THIS SERVICE FOR + COUPON */}
                    <div className="flex-1 space-y-6">
                        {/* WHO IS THIS SERVICE FOR */}
                        <div className="space-y-4">
                            <h2 className="text-[16px] font-semibold">Who is this service for?</h2>

                            <div className="border border-gray-300 rounded-xl p-4 space-y-3">
                                <label className="flex items-center gap-2 text-[12px] font-medium cursor-pointer">
                                    <input type="radio" name="serviceForTablet" checked={selected === "me"} onChange={() => setSelected("me")} />
                                    This Service is for me
                                </label>
                                {selected === "me" && (
                                    <div className="pl-6 text-[12px] space-y-2">
                                        <p><strong>Name:</strong> {user?.fullName}</p>
                                        <p><strong>Phone:</strong> {user?.mobileNumber}</p>
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

                        {/* COUPON */}
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
                </div>
            </section>

            {/* Tablet payment summary */}
            <PaymentSummary {...paymentSummaryProps} containerClass="hidden md:block lg:hidden w-[650px] mx-auto" />

            {/* 
                MOBILE VIEW (< md)
             */}
            <section className="block md:hidden px-4 pb-28 space-y-6">

                {/* SERVICE CARD - mobile */}
                <div className="border border-gray-400 rounded-xl p-3 shadow-sm relative">
                    <img src={imageUrl} className="w-full h-[200px] object-fit" alt="Service" />
                    {serviceCardData.trusted && (
                        <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md">✔ Trusted</span>
                    )}
                    <div className="absolute top-45 right-5 flex items-center justify-center whitespace-nowrap bg-blue-600 w-[38px] h-[25px] text-white text-[10px] px-1 py-1 rounded-md">
                        ⭐ {service?.averageRating ?? "—"}
                    </div>
                    <div className="mt-3 flex justify-between">
                        <div>
                            <h3 className="font-semibold text-[16px]">{service?.serviceName ?? serviceCardData.category}</h3>
                            <p className="text-gray-500 text-sm">{serviceCardData.category}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] text-[#4A2E82] whitespace-nowrap">-EARN UP TO-</p>
                            <p className="text-[#2CB140] text-sm font-semibold">{serviceCardData.rewardText}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-[25px]">
                            ₹{packageToUse?.discountedPrice ?? "—"}
                        </span>
                        <span className="line-through text-gray-400 text-[18px]">
                            ₹ {packageToUse?.price ?? "—"}
                        </span>
                        <span className="text-[#D56839] text-[18px] font-medium">
                            {packageToUse?.discount ?? 0}% OFF
                        </span>
                    </div>
                </div>

                 {/* Service Provider */}
                {selectedProvider && (
  <>
    <h2 className="text-[20px] font-semibold">Service Provider</h2>

    <div className="border rounded-xl p-4 space-y-3 inline-flex mb-10">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <img
            src={selectedProvider?.storeInfo?.logo || "/image/default-provider.png"}
            alt={selectedProvider?.storeInfo?.storeName || "Provider"}
            className="w-15 h-15 rounded-full object-cover border border-gray-200"
            onError={(e) => {
              e.currentTarget.src = "/image/default-provider.png";
            }}
          />
        </div>

        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-gray-600">Name:</span>
            <p className="text-lg font-semibold text-gray-800">
              {selectedProvider?.storeInfo?.storeName || selectedProvider?.fullName}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-gray-600">ID:</span>
            <p className="text-lg text-gray-700">{selectedProvider?.providerId}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-gray-600">Phone:</span>
            <p className="text-lg text-gray-700">
              {selectedProvider?.phoneNo || selectedProvider?.storeInfo?.storePhone}
            </p>
          </div>
        </div>

        <div className="flex flex-col ml-10 mr-4 mt-2">
          <Phone size={24} />
        </div>
      </div>
    </div>
  </>
)}

                {/* WHO IS SERVICE FOR - mobile */}
                <div className="space-y-4">
                    <h2 className="font-semibold text-[16px]">Who is this service for?</h2>

                    <div className="border border-gray-400 rounded-xl p-4">
                        <label className="flex gap-2 font-medium cursor-pointer">
                            <input type="radio" name="serviceForMobile" checked={selected === "me"} onChange={() => setSelected("me")} />
                            This Service is for me
                        </label>
                        {selected === "me" && (
                            <div className="mt-3 space-y-2 text-sm">
                                <p><strong>Name:</strong> {user?.fullName}</p>
                                <p className="flex items-center gap-2">
                                    <Phone size={14} /> {user?.mobileNumber} <FaWhatsapp className="text-green-500" />
                                </p>
                                {/* <p className="flex items-center gap-1"><MapPin size={14} /> {user?.address}</p>
                                <p className="text-gray-500">Note: {user?.note}</p> */}
                            </div>
                        )}
                    </div>

                    <div className="border border-gray-400 rounded-xl p-4 space-y-3">
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
                <div className="border border-gray-400 rounded-xl p-4 space-y-3">
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
                <div className="border border-gray-400 rounded-xl p-4 space-y-3 text-sm">
                    <h3 className="font-semibold">Payment Details</h3>
                    <Row label="Listing Price" value={`₹ ${packageToUse.price.toFixed(2)}`} />
                    <Row
                        label={`Service Discount (${packageToUse.discount}%)`}
                        value={`- ₹ ${computedPayment.serviceDiscountAmount.toFixed(2)}`}
                        valueClass="text-red-500"
                    />
                    <Row label="Price After Discount" value={`₹ ${packageToUse.discountedPrice.toFixed(2)}`} />
                    {/* <Row label="Coupon Discount" value={`- ₹ ${couponDiscount.toFixed(2)}`} valueClass="text-red-500" /> */}
                    <Row
                        label={couponLabel}
                        value={`- ₹ ${couponDiscount.toFixed(2)}`}
                        valueClass="text-red-500"
                    />
                    <Row label={`GST (${service?.gst ?? 18}%)`} value={`+ ₹ ${(((packageToUse.discountedPrice) * (service?.gst ?? 18)) / 100).toFixed(2)}`} valueClass="text-green-600" />
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
            {/* {openCoupons && <CouponsDialog onClose={() => setOpenCoupons(false)} />} */}
            {openCoupons && (
                <CouponsDialog
                    onClose={() => setOpenCoupons(false)}
                    onSelectCoupon={handleCouponSelect}
                />
            )}
            {openAddCustomers && <AddCustomerDialog onClose={() => setOpenAddCustomers(false)} />}
            {openSidebar && <div onClick={() => setOpenSidebar(false)} className="fixed inset-0 bg-black/40 z-40" />}

            <div className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${openSidebar ? "translate-x-0" : "translate-x-full"}`}>
                {/* <CustomerList onClose={() => setOpenSidebar(false)} /> */}
                <CustomerList
                    onClose={() => setOpenSidebar(false)}
                    onSelect={(customer, note) => {
                        setSelectedCustomer(customer);
                        setCustomerNote(note);
                        setOpenSidebar(false);
                    }}
                />
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