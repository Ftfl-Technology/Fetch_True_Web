// "use client";

// import { Tag } from "lucide-react";

// const coupons = [
//   { id: 1, title: "Diwali Coupon", discount: "Save an extra 30% with coupon", code: "#FDF2323", applied: false },
//   { id: 2, title: "Diwali Coupon", discount: "Save an extra 30% with coupon", code: "#FDF2323", applied: true },
//   { id: 3, title: "Diwali Coupon", discount: "Save an extra 30% with coupon", code: "#FDF2323", applied: false },
//   { id: 4, title: "Diwali Coupon", discount: "Save an extra 50% with coupon", code: "#FDF2323", applied: false },
// ];

// export default function CouponsPage() {
//   return (
//     <div className="p-6 bg-white min-h-screen">
//       {/* Header */}
//       <h1 className="text-lg font-semibold text-gray-800 mb-4">
//         Coupons
//       </h1>

//       {/* Coupons List */}
//       <div className="space-y-4">
//         {coupons.map((coupon) => (
//           <div
//             key={coupon.id}
//             className="flex items-center justify-between bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition"
//           >
//             {/* Left Section */}
//             <div className="flex items-start gap-3">
//               <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
//                 <Tag className="w-4 h-4 text-gray-600" />
//               </div>

//               <div>
//                 <p className="text-sm font-medium text-gray-800">
//                   {coupon.title}
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   {coupon.discount}
//                 </p>
//                 <p className="text-xs text-gray-500 mt-1">
//                   Referral Code:{" "}
//                   <span className="font-medium text-gray-700">
//                     {coupon.code}
//                   </span>
//                 </p>
//               </div>
//             </div>

//             {/* Right Section */}
//             <button
//               className={`px-4 py-1.5 text-sm font-medium rounded-lg transition
//                 ${
//                   coupon.applied
//                     ? "bg-green-500 text-white cursor-default"
//                     : "bg-blue-600 text-white hover:bg-blue-700"
//                 }`}
//               disabled={coupon.applied}
//             >
//               {coupon.applied ? "Applied" : "Apply Now"}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";

import { useAuth } from "@/src/context/AuthContext";
import { useCoupons } from "@/src/context/CoupanContext";
import { Tag } from "lucide-react";

export default function CouponsPage() {
  const { coupons, loading, error } = useCoupons();

  const { user } = useAuth();

if (!user?._id) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-lg font-semibold text-gray-700">
        Please login to view coupons
      </h2>
      <p className="text-sm text-gray-500 mt-2">
        Sign in to access and apply available coupons.
      </p>
    </div>
  );
}

  if (loading) return <p className="p-6 text-gray-700">Loading coupons...</p>;
  if (error) return <p className="p-6 text-red-500">Error: {error}</p>;
  if (!coupons.length) return <p className="p-6 text-gray-700">No coupons available</p>;

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header */}
      <h1 className="text-lg font-semibold text-gray-800 mb-4">Coupons</h1>

      {/* Coupons List */}
      <div className="space-y-4">
        {coupons.map((coupon) => (
          <div
            key={coupon._id}
            className="flex items-center justify-between bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            {/* Left Section */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                <Tag className="w-4 h-4 text-gray-600" />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-800">
                  {coupon.discountTitle}
                </p>
                <p className="text-sm text-gray-600">
                  {coupon.discountAmountType === "Percentage"
                    ? `Save an extra ${coupon.amount}% with coupon `
                    : `Save ₹${coupon.amount}`}
                </p>
               
              </div>
            </div>

            {/* Right Section */}
            <button
              className={`px-4 py-1.5 text-sm font-medium rounded-lg transition
                ${
                  !coupon.isActive
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              disabled={!coupon.isActive}
            >
              {coupon.isActive ? "Apply Now" : "Inactive"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
