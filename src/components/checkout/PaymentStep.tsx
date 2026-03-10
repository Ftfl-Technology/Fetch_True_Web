// import { useCheckout } from "@/src/context/CheckoutContext";
// import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

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

// const cashfreeOptions = [
//   { id: "full", label: "Full Payment", amount: 974 },
//   { id: "partial", label: "Partial Payment", amount: 487 },
// ];

// export default function PaymentStep({ data, onNext, onBack }: PaymentStepProps) {
//   const [useWallet, setUseWallet] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState("cashfree");
//   const [cashfreeOption, setCashfreeOption] = useState("full");
//   const { service, fetchServiceDetails } = useServiceDetails();
//   const params = useParams();
//   const serviceId = params.id as string;

//   useEffect(() => {
//     if (!serviceId) return;

//     fetchServiceDetails(serviceId);
//   }, [serviceId]);
//   const { selectedPackage } = useCheckout();

//   const basicPackage = service?.serviceDetails.packages?.[0];

//   const packageToUse = selectedPackage ?? basicPackage;

//   const totalPrice = 974;
//   const walletBalance = 1200;

//   return (
//     <section className="w-full flex flex-col items-center gap-8 md:gap-10 py-6 md:py-10 px-4 md:px-0">
//       {/* ===== TOP CARDS ===== */}
//       <div className="flex flex-col md:flex-row gap-6 md:gap-10">
//         {/* LEFT: WALLET CARD */}
//         {/* <div className="w-full md:w-[320px] border rounded-xl p-5 md:p-6 space-y-4">
//           <div className="lg:text-[20px] text-gray-500">Total Price</div>

//           <div className="text-lg md:text-[20px] font-semibold">
          
//             ₹ {packageToUse?.price}
//           </div> */}

//         {/* <div className="flex items-center justify-between border rounded-lg px-4 py-3">
//             <div>
//               <div className="text-blue-600 text-[12px] md:text-[16px] font-semibold">
//                 ₹ {walletBalance}.00
//               </div>
//               <div className="text-xs text-gray-400">Wallet Balance</div>
//             </div>

//             <input
//               type="checkbox"
//               checked={useWallet}
//               onChange={() => setUseWallet(!useWallet)}
//               className="w-4 h-4"
//             />
//           </div> */}
//         {/* </div> */}

//         {/* RIGHT: PAYMENT METHOD */}
//         <div className="w-full md:w-[320px] border rounded-xl p-5 md:p-6 space-y-4">
//           <div className="lg:text-[20px] font-semibold">
//             Choose Payment Method
//           </div>

//           {/* <label className="flex items-center justify-between text-[12px] md:text-[16px] cursor-pointer">
//             <div className="lg:text-[20px] text-gray-500 whitespace-nowrap">Total Price</div>

//             <div className="text-lg md:text-[20px] font-semibold">
             
//               ₹ {packageToUse?.price}
//             </div>
//             <div>Cash Free Pay</div>
//             <input
//               type="radio"
//               name="payment"
//               value="cashfree"
//               checked={paymentMethod === "cashfree"}
//               onChange={() => setPaymentMethod("cashfree")}
//             />
//           </label> */}
//           <div className="space-y-4">
//             {/* Total Price Row */}
//             <div className="flex items-center justify-between">
//               <span className="lg:text-[20px] text-gray-500 whitespace-nowrap">Total Price</span>
//               <span className="text-lg md:text-[20px] font-semibold">₹ {packageToUse?.price}</span>
//             </div>

//             {/* Cash Free Payment Option */}
//             {/* <label className="flex items-center justify-between text-[12px] md:text-[16px] cursor-pointer border rounded-lg p-3 hover:bg-gray-50">
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
//           </div>

//           {paymentMethod === "cashfree" && (
//             <div className="mt-3 space-y-3">
//               {cashfreeOptions.map((option) => (
//                 <label
//                   key={option.id}
//                   className={`
//                     flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer
//                     ${cashfreeOption === option.id
//                       ? "border-blue-600 bg-blue-50"
//                       : ""
//                     }
//                   `}
//                 >
//                   <div className="flex items-center gap-3">
//                     <input
//                       type="radio"
//                       name="cashfreeOption"
//                       checked={cashfreeOption === option.id}
//                       onChange={() => setCashfreeOption(option.id)}
//                     />

//                     <div>
//                       <div className="text-sm font-semibold">
//                         ₹ {option.amount}
//                       </div>
//                       <div className="text-xs text-gray-500">
//                         {option.label}
//                       </div>
//                     </div>
//                   </div>
//                 </label>
//               ))}
//             </div>
//           )} */}

//           // Define your cashfree options
//             const cashfreeOptions = [
//             {
//               id: "full",
//             amount: packageToUse?.price || 0,
//             label: "Full Payment" 
//   },
//             {
//               id: "partial",
//             amount: Math.floor((packageToUse?.price || 0) / 2), // 50% partial payment
//             label: "Partial Payment (50%)" 
//   },
//             ];

//             // In your JSX
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

//             {paymentMethod === "cashfree" && (
//               <div className="mt-3 space-y-3">
//                 {cashfreeOptions.map((option) => (
//                   <label
//                     key={option.id}
//                     className={`
//           flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer
//           ${cashfreeOption === option.id
//                         ? "border-blue-600 bg-blue-50"
//                         : "border-gray-200 hover:border-gray-300"
//                       }
//         `}
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
//                   </label>
//                 ))}



//               </div>
//             )}

//             <label className="flex items-center justify-between text-[12px] md:text-[16px] cursor-pointer">
//               <span>Payment after Consultation</span>
//               <input
//                 type="radio"
//                 name="payment"
//                 value="after"
//                 checked={paymentMethod === "after"}
//                 onChange={() => setPaymentMethod("after")}
//               />
//             </label>
//           </div>
//         </div>

//         {/* ===== BOTTOM BAR ===== */}
//         <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 md:w-auto">
//           <div className="md:text-[24px] text-gray-500">
//             Total Price
//             <span className="ml-2 text-black font-semibold">
//               ₹ 00
//             </span>
//           </div>

//           <button
//             className="w-full md:w-auto bg-blue-600 text-white px-8 md:px-10 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
//             onClick={onNext}
//           >
//             Proceed To Pay
//           </button>
//         </div>
//     </section>
//   );
// }



import { useCheckout } from "@/src/context/CheckoutContext";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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

type PaymentStepProps = {
  data: CheckoutData;
  onNext: () => void;
  onBack: () => void;
};

export default function PaymentStep({ data, onNext, onBack }: PaymentStepProps) {
  const [useWallet, setUseWallet] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cashfree");
  const [cashfreeOption, setCashfreeOption] = useState("full");
  
  const { service, fetchServiceDetails } = useServiceDetails();
  const params = useParams();
  const serviceId = params.id as string;
  const { selectedPackage } = useCheckout();

  useEffect(() => {
    if (!serviceId) return;
    fetchServiceDetails(serviceId);
  }, [serviceId, fetchServiceDetails]);

  const basicPackage = service?.serviceDetails?.packages?.[0];
  const packageToUse = selectedPackage ?? basicPackage;

  // Use the grand total from props instead of package price
  const grandTotal = data?.paymentData?.grandTotal || packageToUse?.price || 0;

  // Define cashfree options using grand total
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

  // Log to verify data is received
  console.log("PaymentStep received data:", data);

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
                    {option.id === "full" && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        Recommended
                      </span>
                    )}
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
                value="after"
                checked={paymentMethod === "after"}
                onChange={() => setPaymentMethod("after")}
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
          >
            Back
          </button>
          <button
            className="bg-blue-600 text-white px-8 md:px-10 py-3 rounded-lg font-medium hover:bg-blue-700 transition whitespace-nowrap"
            onClick={onNext}
          >
            Pay ₹ {cashfreeOption === "full" 
              ? grandTotal.toFixed(2) 
              : Math.floor(grandTotal / 2).toFixed(2)}
          </button>
        </div>
      </div>
    </section>
  );
}