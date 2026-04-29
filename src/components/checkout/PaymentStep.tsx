// import { useCheckout } from "@/src/context/CheckoutContext";
// import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
// import axios from "@/src/lib/axios";
// import { useParams, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useAuth } from "@/src/context/AuthContext"; // Make sure to import this

// type PaymentData = {
//   listingPrice: number;
//   serviceDiscount: number;
//   couponDiscount: number;
//   gst: number;
//   platformFee: number;
//   assuranceFee: number;
//   grandTotal: number;
// };

// type CheckoutData = {
//   selectedUser: string;
//   paymentData: PaymentData;
// };

// type PaymentStepProps = {
//   data: CheckoutData;
//   onNext: () => void;
//   onBack: () => void;
// };

// export default function PaymentStep({ data, onNext, onBack }: PaymentStepProps) {
//   const [useWallet, setUseWallet] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState("cashfree");
//   const [cashfreeOption, setCashfreeOption] = useState("full");
//   const [loading, setLoading] = useState(false);

//   const { service, fetchServiceDetails } = useServiceDetails();
//   const params = useParams();
//   const serviceId = params.id as string;
//   const searchParams = useSearchParams();
//   const checkoutServiceId = searchParams.get("id");
//   const { selectedPackage } = useCheckout();
//   const { user } = useAuth();

//   useEffect(() => {
//     if (!serviceId) return;
//     fetchServiceDetails(serviceId);
//   }, [serviceId, fetchServiceDetails]);

//   const basicPackage = service?.serviceDetails?.packages?.[0];
//   const packageToUse = selectedPackage ?? basicPackage;


//   const grandTotal = data?.paymentData?.grandTotal || packageToUse?.price || 0;


//   const cashfreeOptions = [
//     {
//       id: "full",
//       amount: grandTotal,
//       label: "Full Payment"
//     },
//     {
//       id: "partial",
//       amount: Math.floor(grandTotal / 2),
//       label: "Partial Payment (50%)"
//     },
//   ];

//   const totalPrice = grandTotal;
//   const walletBalance = 1200;

//   const paymentClickRupees = async () => {
//     try {
//       setLoading(true);

//       // Calculate amount in rupees
//       const amount = cashfreeOption === "full"
//         ? grandTotal
//         : Math.floor(grandTotal / 2);

//       // Generate order ID with current date and time
//       const now = new Date();
//       const dateStr = now.toISOString().slice(0, 10).replace(/-/g, "");
//       const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, "");
//       const orderId = `orderId_${dateStr}_${timeStr}`;

//       // Get customer details
//       const customerId = user?._id;
//       const customerName = user?.fullName;
//       const customerEmail = user?.email;
//       const customerPhone = user?.mobileNumber;

//       const checkoutId = checkoutServiceId;

//       const payload = {
//         subAmount: amount,
//         isPartialPaymentAllowed: cashfreeOption === "partial",
//         description: "Fetch True Payment",
//         orderId: orderId,
//         customer: {
//           customer_id: customerId,
//           customer_name: customerName,
//           customer_email: customerEmail,
//           customer_phone: customerPhone
//         },
//         udf: {
//           udf1: orderId,
//           udf2: customerId,
//           udf3: checkoutId
//         }
//       };

//       const response = await axios.post(
//         "https://api.fetchtrue.com/api/pay-u/create-payment-link",
//         payload
//       );

//       if (response.data?.result?.paymentLink) {
//         // Open payment link in a new tab
//         window.open(response.data.result.paymentLink, '_blank');

//       } else {
//         console.error("Payment link not received:", response.data);
//       }
//     } catch (error) {
//       console.error("Payment error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="w-full flex flex-col items-center gap-8 md:gap-10 py-6 md:py-5 px-4 md:px-0">

//       {/* ===== TOP CARDS ===== */}
//       <div className="flex flex-col md:flex-row gap-6 md:gap-10">
//         {/* RIGHT: PAYMENT METHOD */}
//         <div className="w-full md:w-[320px] border rounded-xl p-5 md:p-6 space-y-4">
//           <div className="lg:text-[20px] font-semibold">
//             Choose Payment Method
//           </div>

//           <div className="space-y-4">
//             {/* Total Price Row - Now shows grand total */}
//             <div className="flex items-center justify-between pb-2 border-b">
//               <span className="lg:text-[20px] text-gray-500 whitespace-nowrap">Grand Total</span>
//               <span className="text-lg md:text-[20px] font-semibold text-blue-600">₹ {totalPrice.toFixed(2)}</span>
//             </div>



//             {/* Cash Free Payment Option */}
//             <label className="flex items-center justify-between text-[12px] md:text-[16px] cursor-pointer border rounded-lg p-3 hover:bg-gray-50">
//               <div className="flex items-center gap-2">
//                 <span className="font-medium">Cash Free Pay</span>
//               </div>
//               <input
//                 type="radio"
//                 name="payment"
//                 value="cashfree"
//                 checked={paymentMethod === "cashfree"}
//                 onChange={() => setPaymentMethod("cashfree")}
//                 className="w-4 h-4 text-blue-600"
//               />
//             </label>

//             {/* Cash Free Options */}
//             {paymentMethod === "cashfree" && (
//               <div className="mt-3 space-y-3 pl-2">
//                 {cashfreeOptions.map((option) => (
//                   <label
//                     key={option.id}
//                     className={`
//                       flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer
//                       ${cashfreeOption === option.id
//                         ? "border-blue-600 bg-blue-50"
//                         : "border-gray-200 hover:border-gray-300"
//                       }
//                     `}
//                   >
//                     <div className="flex items-center gap-3">
//                       <input
//                         type="radio"
//                         name="cashfreeOption"
//                         checked={cashfreeOption === option.id}
//                         onChange={() => setCashfreeOption(option.id)}
//                         className="w-4 h-4 text-blue-600"
//                       />
//                       <div>
//                         <div className="text-sm font-semibold">
//                           ₹ {option.amount.toFixed(2)}
//                         </div>
//                         <div className="text-xs text-gray-500">
//                           {option.label}
//                         </div>
//                       </div>
//                     </div>
//                     {/* {option.id === "full" && (
//                       <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
//                         Recommended
//                       </span>
//                     )} */}
//                   </label>
//                 ))}
//               </div>
//             )}

//             {/* Payment after Consultation */}
//             <label className="flex items-center justify-between text-[12px] md:text-[16px] cursor-pointer border rounded-lg p-3 hover:bg-gray-50">
//               <span className="font-medium">Payment after Consultation</span>
//               <input
//                 type="radio"
//                 name="payment"
//                 value="pac"
//                 checked={paymentMethod === "pac"}
//                 onChange={() => setPaymentMethod("pac")}
//                 className="w-4 h-4 text-blue-600"
//               />
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* ===== BOTTOM BAR ===== */}
//       <div className="lg:w-[1220px] flex flex-col md:flex-row mx-auto items-center justify-center gap-4 md:gap-8 pt-6">
//         <div className="flex gap-4">
//           <button
//             className="px-8 md:px-10 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition"
//             onClick={onBack}
//             disabled={loading}
//           >
//             Back
//           </button>
//           <button
//             className={`bg-blue-600 text-white px-8 md:px-10 py-3 rounded-lg font-medium transition whitespace-nowrap ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
//               }`}
//             onClick={paymentClickRupees}
//             disabled={loading}
//           >
//             {loading ? "Processing..." : `Pay ₹ ${cashfreeOption === "full"
//               ? grandTotal.toFixed(2)
//               : Math.floor(grandTotal / 2).toFixed(2)}`}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }










import { useCheckout } from "@/src/context/CheckoutContext";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import axios from "@/src/lib/axios";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/src/context/AuthContext"; // Make sure to import this

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

type PaymentStepProps = {
  data: CheckoutData;
  onNext: (bookingData: { bookingId: string; createdAt: string }) => void;
  onBack: () => void;
};

export default function PaymentStep({ data, onNext, onBack }: PaymentStepProps) {
  const [useWallet, setUseWallet] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cashfree");
  const [cashfreeOption, setCashfreeOption] = useState("full");
  const [loading, setLoading] = useState(false);

  const { service, fetchServiceDetails } = useServiceDetails();
  const params = useParams();
  const serviceId = params.id as string;
  const searchParams = useSearchParams();
  const checkoutServiceId = searchParams.get("id");
  const { selectedPackage } = useCheckout();
  const { user } = useAuth();

  useEffect(() => {
    if (!serviceId) return;
    fetchServiceDetails(serviceId);
  }, [serviceId, fetchServiceDetails]);

  const basicPackage = service?.serviceDetails?.packages?.[0];
  const packageToUse = selectedPackage ?? basicPackage;


  const grandTotal = data?.paymentData?.grandTotal || packageToUse?.price || 0;


  const cashfreeOptions = [
    {
      id: "full",
      amount: grandTotal,
      label: "Full Payment"
    },
    {
      id: "partial",
      amount: Math.floor(grandTotal / 2),
      label: "Partial Payment (50%)"
    },
  ];

  const totalPrice = grandTotal;
  const walletBalance = 1200;

  const handlePay = async () => {
    try {
      setLoading(true);

      const now = new Date();
      const dateStr = now.toISOString().slice(0, 10).replace(/-/g, "");
      const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, "");
      const orderId = `orderId_${dateStr}_${timeStr}`;

      const amount = cashfreeOption === "full"
        ? grandTotal
        : Math.floor(grandTotal / 2);

      const checkoutPayload = {
        user: user?._id,
        service: checkoutServiceId,
        serviceCustomer: data.serviceCustomer,
        provider: searchParams.get("providerId"),
        serviceMan: null,
        coupon: null,
        subtotal: data.paymentData.listingPrice,
        serviceDiscount: data.paymentData.serviceDiscount,
        couponDiscount: data.paymentData.couponDiscount,
        couponDiscountType: "₹",
        champaignDiscount: 0,
        gst: data.paymentData.gst,
        platformFee: data.paymentData.platformFee,
        assurityfee: data.paymentData.assuranceFee,
        listingPrice: data.paymentData.listingPrice,
        serviceDiscountPrice: data.paymentData.serviceDiscount,
        priceAfterDiscount: data.paymentData.listingPrice - data.paymentData.serviceDiscount,
        couponDiscountPrice: data.paymentData.couponDiscount,
        serviceGSTPrice: data.paymentData.gst,
        platformFeePrice: data.paymentData.platformFee,
        assurityChargesPrice: data.paymentData.assuranceFee,
        extraServicePrice: 0,
        commission: "15%",
        totalAmount: grandTotal,
        grandTotal: grandTotal,
        paymentMethod: [paymentMethod],   // ["cashfree"] or ["pac"]
        walletAmount: 0,
        otherAmount: 0,
        paidAmount: paymentMethod === "pac" ? 0 : amount,
        isPartialPayment: cashfreeOption === "partial",
        remainingAmount: cashfreeOption === "partial" ? Math.ceil(grandTotal / 2) : 0,
        cashfreeMethod: paymentMethod === "cashfree" ? cashfreeOption : null,
        paymentStatus: "pending",
        orderStatus: "processing",
        cashInHand: false,
        cashInHandAmount: 0,
        notes: paymentMethod === "pac" ? "Payment after consultation" : "",
        termsCondition: true,
        isVerified: false,
        isAccepted: false,
        acceptedDate: null,
        isOtpVerified: false,
        isCompleted: false,
        isSkip: false,
        commissionDistributed: false,
        isCanceled: false,
        isDeleted: false,
      };

      const response = await axios.post(
        "https://api.fetchtrue.com/api/checkout",
        checkoutPayload
      );

console.log("Payload:", checkoutPayload);
      console.log("Checkout Response:", response.data);
      const bookingData = {
        bookingId: response.data?.data?.bookingId,
        createdAt: response.data?.data?.createdAt,
      };

      if (paymentMethod === "cashfree") {
        await paymentClickRupees();
        onNext(bookingData);
      } else {
        onNext(bookingData);
      }

    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setLoading(false);
    }
  };

  const paymentClickRupees = async () => {
    try {
      setLoading(true);

      // Calculate amount in rupees
      const amount = cashfreeOption === "full"
        ? grandTotal
        : Math.floor(grandTotal / 2);

      // Generate order ID with current date and time
      const now = new Date();
      const dateStr = now.toISOString().slice(0, 10).replace(/-/g, "");
      const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, "");
      const orderId = `orderId_${dateStr}_${timeStr}`;

      // Get customer details
      const customerId = user?._id;
      const customerName = user?.fullName;
      const customerEmail = user?.email;
      const customerPhone = user?.mobileNumber;

      const checkoutId = checkoutServiceId;

      const payload = {
        subAmount: amount,
        isPartialPaymentAllowed: cashfreeOption === "partial",
        description: "Fetch True Payment",
        orderId: orderId,
        customer: {
          customer_id: customerId,
          customer_name: customerName,
          customer_email: customerEmail,
          customer_phone: customerPhone
        },
        udf: {
          udf1: orderId,
          udf2: customerId,
          udf3: checkoutId
        }
      };

      const response = await axios.post(
        "https://api.fetchtrue.com/api/pay-u/create-payment-link",
        payload
      );

      if (response.data?.result?.paymentLink) {
        // Open payment link in a new tab
        window.open(response.data.result.paymentLink, '_blank');

      } else {
        console.error("Payment link not received:", response.data);
      }
    } catch (error) {
      console.error("Payment error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full flex flex-col items-center gap-8 md:gap-10 py-6 md:py-5 px-4 md:px-0">

      {/* ===== TOP CARDS ===== */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* RIGHT: PAYMENT METHOD */}
        <div className="w-full md:w-[320px] border rounded-xl p-5 md:p-6 space-y-4">
          <div className="lg:text-[20px] font-semibold">
            Choose Payment Method
          </div>

          <div className="space-y-4">
            {/* Total Price Row - Now shows grand total */}
            <div className="flex items-center justify-between pb-2 border-b">
              <span className="lg:text-[20px] text-gray-500 whitespace-nowrap">Grand Total</span>
              <span className="text-lg md:text-[20px] font-semibold text-blue-600">₹ {totalPrice.toFixed(2)}</span>
            </div>



            {/* Cash Free Payment Option */}
            <label className="flex items-center justify-between text-[12px] md:text-[16px] cursor-pointer border rounded-lg p-3 hover:bg-gray-50">
              <div className="flex items-center gap-2">
                <span className="font-medium">Cash Free Pay</span>
              </div>
              <input
                type="radio"
                name="payment"
                value="cashfree"
                checked={paymentMethod === "cashfree"}
                onChange={() => setPaymentMethod("cashfree")}
                className="w-4 h-4 text-blue-600"
              />
            </label>

            {/* Cash Free Options */}
            {paymentMethod === "cashfree" && (
              <div className="mt-3 space-y-3 pl-2">
                {cashfreeOptions.map((option) => (
                  <label
                    key={option.id}
                    className={`
                      flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer
                      ${cashfreeOption === option.id
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="cashfreeOption"
                        checked={cashfreeOption === option.id}
                        onChange={() => setCashfreeOption(option.id)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <div>
                        <div className="text-sm font-semibold">
                          ₹ {option.amount.toFixed(2)}
                        </div>
                        <div className="text-xs text-gray-500">
                          {option.label}
                        </div>
                      </div>
                    </div>
                    {/* {option.id === "full" && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        Recommended
                      </span>
                    )} */}
                  </label>
                ))}
              </div>
            )}

            {/* Payment after Consultation */}
            <label className="flex items-center justify-between text-[12px] md:text-[16px] cursor-pointer border rounded-lg p-3 hover:bg-gray-50">
              <span className="font-medium">Payment after Consultation</span>
              <input
                type="radio"
                name="payment"
                value="pac"
                checked={paymentMethod === "pac"}
                onChange={() => setPaymentMethod("pac")}
                className="w-4 h-4 text-blue-600"
              />
            </label>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="lg:w-[1220px] flex flex-col md:flex-row mx-auto items-center justify-center gap-4 md:gap-8 pt-6">
        <div className="flex gap-4">
          <button
            className="px-8 md:px-10 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition"
            onClick={onBack}
            disabled={loading}
          >
            Back
          </button>
          <button
            className={`bg-blue-600 text-white px-8 md:px-10 py-3 rounded-lg font-medium transition whitespace-nowrap ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
              }`}
            onClick={handlePay}
            disabled={loading}
          >
            {loading ? "Processing..." : `Pay ₹ ${cashfreeOption === "full"
              ? grandTotal.toFixed(2)
              : Math.floor(grandTotal / 2).toFixed(2)}`}
          </button>
        </div>
      </div>
    </section>
  );
}