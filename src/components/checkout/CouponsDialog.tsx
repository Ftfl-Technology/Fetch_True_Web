// 'use client';

// import { useCoupons } from "@/src/context/CouponsContext";
// import { X, Loader2 } from "lucide-react";
// import { useEffect } from "react";


// interface Coupon {
//   _id: string;
//   couponCode: string;
//   discountTitle: string;
//   discountAmountType: "Percentage" | "Fixed Amount";
//   amount: number;
//   maxDiscount?: number;
//   minPurchase?: number;
//   limitPerUser?: number;
 
// }

// type Props = {
//   onClose: () => void;
// };

// export default function CouponsDialog({ onClose }: Props) {
//   const { services, fetchCoupons, loading } = useCoupons();
  
//   useEffect(() => {
//     // Only fetch if services array is empty
//     if (services.length === 0) {
//       fetchCoupons();
//     }
//   }, [fetchCoupons, services.length]);

//   // Function to get the discount display text
//   const getDiscountDisplay = (coupon: Coupon): string => {
//     if (coupon.discountAmountType === "Percentage") {
//       return `${coupon.amount}% OFF`;
//     } else {
//       return `₹${coupon.amount} OFF`;
//     }
//   };

//   // Function to get the savings text
//   const getSavingsText = (coupon: Coupon): string => {
//     if (coupon.discountAmountType === "Percentage") {
//       return `You save up to ₹${coupon.maxDiscount || coupon.amount} with this coupon.`;
//     } else {
//       return `You save ₹${coupon.amount} with this coupon.`;
//     }
//   };
 
//   return (
//     <>
//       <div
//         onClick={onClose}
//         className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
//       />

//       {/* DIALOG */}
//       <div className="fixed inset-0 z-50 flex items-center justify-center">
//         <div className="w-[440px] bg-white rounded-2xl shadow-lg overflow-hidden max-h-[90vh] overflow-y-auto p-6 scrollbar-hide">

//           {/* HEADER */}
//           <div className="flex items-center justify-between px-4 py-3 border-b">
//             <h3 className="text-[14px] font-semibold">Coupons</h3>
//             <button onClick={onClose}>
//               <X className="w-4 h-4 text-gray-500 cursor-pointer" />
//             </button>
//           </div>

//           {/* BODY */}
//           <div className="p-4 space-y-4 min-h-[200px] flex flex-col items-center justify-center">
//             {loading ? (
//               <div className="flex flex-col items-center gap-3 py-8">
//                 <Loader2 className="w-8 h-8 text-green-600 animate-spin" />
//                 <p className="text-gray-500">Loading coupons...</p>
//               </div>
//             ) : services.length === 0 ? (
//               <div className="text-center py-8">
//                 <p className="text-gray-500 mb-2">No coupons available</p>
//                 <p className="text-xs text-gray-400">Check back later for exciting offers!</p>
//               </div>
//             ) : (
//               <div className="space-y-4 w-full">
//                 {services.map((coupon: Coupon) => (
//                   <div
//                     key={coupon._id}
//                     className="border border-green-300 rounded-lg p-3 space-y-1 hover:border-green-500 transition-colors"
//                   >
//                     <div className="flex justify-between items-start">
//                       <p className="text-[14px] font-semibold text-green-700">
//                         {coupon?.discountTitle}
//                       </p>
//                       {/* Discount type badge */}
//                       <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded">
//                         {coupon.discountAmountType === "Percentage" ? "%" : "₹"}
//                       </span>
//                     </div>

//                     {/* Discount amount with proper formatting */}
//                     <p className="text-[12px] font-medium text-green-600">
//                       {getDiscountDisplay(coupon)}
//                     </p>

//                     {/* Savings text with proper formatting */}
//                     <p className="text-[12px] text-gray-500">
//                       {getSavingsText(coupon)}
//                     </p>

//                     {/* Minimum purchase if exists */}
//                     {coupon?.minPurchase && coupon.minPurchase > 0 && (
//                       <p className="text-[10px] text-gray-400">
//                         Min. purchase: ₹{coupon.minPurchase}
//                       </p>
//                     )}

//                     {/* Coupon code */}
//                     <div className="flex items-center gap-2 text-green-700 font-semibold text-[13px] mt-1">
//                       <span className="text-green-500">✓</span>
//                       <span className="bg-green-50 px-2 py-0.5 rounded">
//                         {coupon?.couponCode}
//                       </span>
//                     </div>

//                     {/* Max discount info for percentage coupons */}
//                     {coupon.discountAmountType === "Percentage" && coupon.maxDiscount && coupon.maxDiscount > 0 && (
//                       <p className="text-[9px] text-gray-400 mt-1">
//                         Maximum discount: ₹{coupon.maxDiscount}
//                       </p>
//                     )}

//                     {/* Per user limit if exists */}
//                     {coupon?.limitPerUser && coupon.limitPerUser > 0 && (
//                       <p className="text-[9px] text-gray-400">
//                         Limit: {coupon.limitPerUser} per user
//                       </p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* FOOTER */}
//           <div className="px-4 py-3 border-t text-center">
//             <p className="text-[10px] text-gray-400">
//               *Terms & Conditions apply
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




'use client';

import { useCoupons } from "@/src/context/CouponsContext";
import { X, Loader2 } from "lucide-react";
import { useEffect } from "react";

interface Coupon {
  _id: string;
  couponCode: string;
  discountTitle: string;
  discountAmountType: "Percentage" | "Fixed Amount";
  amount: number;
  maxDiscount?: number;
  minPurchase?: number;
  limitPerUser?: number;
}

type Props = {
  onClose: () => void;
  onSelectCoupon: (coupon: Coupon) => void; // Add this prop
};

export default function CouponsDialog({ onClose, onSelectCoupon }: Props) {
  const { services, fetchCoupons, loading } = useCoupons();
  
  useEffect(() => {
    // Only fetch if services array is empty
    if (services.length === 0) {
      fetchCoupons();
    }
  }, [fetchCoupons, services.length]);

  // Function to get the discount display text
  const getDiscountDisplay = (coupon: Coupon): string => {
    if (coupon.discountAmountType === "Percentage") {
      return `${coupon.amount}% OFF`;
    } else {
      return `₹${coupon.amount} OFF`;
    }
  };

  // Function to get the savings text
  const getSavingsText = (coupon: Coupon): string => {
    if (coupon.discountAmountType === "Percentage") {
      return `You save up to ₹${coupon.maxDiscount || coupon.amount} with this coupon.`;
    } else {
      return `You save ₹${coupon.amount} with this coupon.`;
    }
  };

  const handleCouponClick = (coupon: Coupon) => {
    onSelectCoupon(coupon);
    onClose();
  };
 
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      />

      {/* DIALOG */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="w-[440px] bg-white rounded-2xl shadow-lg overflow-hidden max-h-[90vh] overflow-y-auto p-6 scrollbar-hide">

          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <h3 className="text-[14px] font-semibold">Coupons</h3>
            <button onClick={onClose}>
              <X className="w-4 h-4 text-gray-500 cursor-pointer" />
            </button>
          </div>

          {/* BODY */}
          <div className="p-4 space-y-4 min-h-[200px] flex flex-col items-center justify-center">
            {loading ? (
              <div className="flex flex-col items-center gap-3 py-8">
                <Loader2 className="w-8 h-8 text-green-600 animate-spin" />
                <p className="text-gray-500">Loading coupons...</p>
              </div>
            ) : services.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-2">No coupons available</p>
                <p className="text-xs text-gray-400">Check back later for exciting offers!</p>
              </div>
            ) : (
              <div className="space-y-4 w-full">
                {services.map((coupon: Coupon) => (
                  <div
                    key={coupon._id}
                    onClick={() => handleCouponClick(coupon)}
                    className="border border-green-300 rounded-lg p-3 space-y-1 hover:border-green-500 hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <p className="text-[14px] font-semibold text-green-700">
                        {coupon?.discountTitle}
                      </p>
                      {/* Discount type badge */}
                      <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded">
                        {coupon.discountAmountType === "Percentage" ? "%" : "₹"}
                      </span>
                    </div>

                    {/* Discount amount with proper formatting */}
                    <p className="text-[12px] font-medium text-green-600">
                      {getDiscountDisplay(coupon)}
                    </p>

                    {/* Savings text with proper formatting */}
                    <p className="text-[12px] text-gray-500">
                      {getSavingsText(coupon)}
                    </p>

                    {/* Minimum purchase if exists */}
                    {coupon?.minPurchase && coupon.minPurchase > 0 && (
                      <p className="text-[10px] text-gray-400">
                        Min. purchase: ₹{coupon.minPurchase}
                      </p>
                    )}

                    {/* Coupon code */}
                    <div className="flex items-center gap-2 text-green-700 font-semibold text-[13px] mt-1">
                      <span className="text-green-500">✓</span>
                      <span className="bg-green-50 px-2 py-0.5 rounded">
                        {coupon?.couponCode}
                      </span>
                    </div>

                    {/* Max discount info for percentage coupons */}
                    {coupon.discountAmountType === "Percentage" && coupon.maxDiscount && coupon.maxDiscount > 0 && (
                      <p className="text-[9px] text-gray-400 mt-1">
                        Maximum discount: ₹{coupon.maxDiscount}
                      </p>
                    )}

                    {/* Per user limit if exists */}
                    {coupon?.limitPerUser && coupon.limitPerUser > 0 && (
                      <p className="text-[9px] text-gray-400">
                        Limit: {coupon.limitPerUser} per user
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* FOOTER */}
          <div className="px-4 py-3 border-t text-center">
            <p className="text-[10px] text-gray-400">
              *Terms & Conditions apply
            </p>
          </div>
        </div>
      </div>
    </>
  );
}