// 'use client'

// import CompleteStep from "@/src/components/checkout/CompleteStep";
// import DetailsStep from "@/src/components/checkout/DetailsStep";
// import PaymentStep from "@/src/components/checkout/PaymentStep";
// import Stepper from "@/src/components/checkout/Stepper";
// import { ChevronLeft } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";

// export type PaymentData = {
//   listingPrice: number;
//   serviceDiscount: number;
//   couponDiscount: number;
//   gst: number;
//   platformFee: number;
//   assuranceFee: number;
//   grandTotal: number;
// };

// export type CheckoutData = {
//   selectedUser: string;
//   paymentData: PaymentData;
// };

// export default function DetailsPage() {
//   const [step, setStep] = useState(1);
//   const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null);

//   return (
//     <>
//       {/* DESKTOP NAVBAR */}
//       <section className="relative w-full">
//         <div className="hidden lg:block w-screen">
//           <div className="bg-[#E2E9F1] flex items-center justify-between p-6 rounded-xl">
//             <div className="flex items-center gap-4 ml-10">
//               <Link href="/">
//                 <img src="/image/Checkoutback.png" className="w-[30px] cursor-pointer" />
//               </Link>
//               <h1 className="text-2xl font-semibold">Details</h1>
//             </div>
//             <div className="flex items-center gap-4 mr-10 bg-[#BEBEBE] rounded-3xl px-4 py-2 text-white">
//               Package Active
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* MOBILE NAVBAR */}
//       <section>
//         <div className="lg:hidden w-full -mt-6 bg-[#E2E9F1] flex flex-col px-4 py-8 gap-3">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3 p-8 min-w-0">
//               <Link href="/MainModules/OnDemand">
//                 <ChevronLeft className="w-[28px] h-[28px] bg-white rounded-full p-1" />
//               </Link>
//               <h1 className="text-[16px] font-semibold truncate">Details</h1>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Stepper currentStep={step} />

//       {step === 1 && (
//         <DetailsStep
//           data={checkoutData}
//           onNext={(data: CheckoutData) => {
//             setCheckoutData(data);
//             setStep(2);
//           }}
//         />
//       )}

//       {step === 2 && checkoutData && (
//         <PaymentStep
//           data={checkoutData}
//           onNext={() => setStep(3)}
//           onBack={() => setStep(1)}
//         />
//       )}

//       {step === 3 && <CompleteStep />}
//     </>
//   );
// }



import { Suspense } from 'react';
import DetailsPageContent from './DetailsPageContent';

export default function DetailsPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="ml-2 text-gray-600">Loading checkout...</p>
      </div>
    }>
      <DetailsPageContent />
    </Suspense>
  );
}
