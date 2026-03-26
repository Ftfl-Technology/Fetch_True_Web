// "use client";

// import { FaWhatsapp } from "react-icons/fa";

// export default function BreakupModalUI({ onClose }) {
//   return (
//     <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[999]">

//       {/* Container */}
//       <div className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-lg">

//         {/* Header */}
//         <div className="flex items-center gap-2 px-4 py-3 border-b">
//           <button onClick={onClose} className="text-xl">←</button>
//           <p className="font-medium text-gray-700">View Breakup</p>
//         </div>

//         {/* Content */}
//         <div className="p-4 space-y-4">

//           {/* Title */}
//           <div className="flex gap-3 items-center">
//             <img
//               src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200"
//               className="w-12 h-12 rounded-lg object-cover"
//             />
//             <div>
//               <p className="text-xs text-gray-500">Final Price</p>
//               <p className="font-semibold text-gray-800">
//                 Property Buying & Selling
//               </p>
//             </div>
//           </div>

//           {/* Tags */}
//           <div className="flex gap-2 text-xs">
//             <span className="bg-gray-100 px-3 py-1 rounded-lg">Real Estate</span>
//             <span className="bg-gray-100 px-3 py-1 rounded-lg">Brokerage</span>
//             <span className="bg-gray-100 px-3 py-1 rounded-lg">Pune</span>
//           </div>

//           {/* Franchise Model */}
//           <div>
//             <div className="flex justify-between items-center">
//               <p className="font-semibold text-gray-700">Franchise Model</p>
//               <button className="text-blue-500 text-sm">Apply Offers</button>
//             </div>

//             {/* Tabs */}
//             <div className="flex bg-gray-100 rounded-lg mt-2 text-sm overflow-hidden">
//               <button className="flex-1 py-2 bg-white text-blue-600 font-medium">
//                 Small
//               </button>
//               <button className="flex-1 py-2 text-gray-500">Medium</button>
//               <button className="flex-1 py-2 text-gray-500">Large</button>
//             </div>
//           </div>

//           {/* Breakdown List */}
//           <div className="space-y-2 text-sm text-gray-600">
//             {[
//               ["Franchise Fee", "₹5,00,000"],
//               ["Business Licenses", "₹2,00,000"],
//               ["Insurance", "₹75,000"],
//               ["Legal & Accounting Fee", "₹1,50,000"],
//               ["Inventory Fee", "₹1,00,000"],
//               ["Office Setup", "₹1,25,000"],
//               ["Initial Startup Equipment & Marketing", "₹3,00,000"],
//               ["Staff & Management Training Expense", "₹1,25,000"],
//               ["Other Expense", "₹1,00,000"],
//             ].map(([label, value], i) => (
//               <div key={i} className="flex justify-between">
//                 <span>{label}</span>
//                 <span className="font-medium text-gray-800">{value}</span>
//               </div>
//             ))}
//           </div>

//           {/* Total */}
//           <div className="flex justify-between items-center border-t pt-3">
//             <p className="text-gray-600 text-sm">Total Investment</p>
//             <div className="text-right">
//               <p className="text-lg font-bold text-purple-600">
//                 ₹17,00,000
//               </p>
//               <p className="text-xs text-gray-400">+GST</p>
//             </div>
//           </div>

//           {/* WhatsApp */}
//           <button className="w-full border border-green-500 text-green-600 flex items-center justify-center gap-2 py-2 rounded-lg text-sm">
//             <FaWhatsapp />
//             Get price details on WhatsApp
//           </button>
//         </div>

//         {/* Bottom CTA */}
//         <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-3 font-medium">
//           Secure your spot at just ₹1745/-
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { FaWhatsapp } from "react-icons/fa";

/* ================= TYPES ================= */

interface BreakupModalUIProps {
  onClose: () => void;
}

/* ================= COMPONENT ================= */

export default function BreakupModalUI({
  onClose,
}: BreakupModalUIProps) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[999]">

      {/* Container */}
      <div className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-lg">

        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b">
          <button onClick={onClose} className="text-xl">
            ←
          </button>
          <p className="font-medium text-gray-700">
            View Breakup
          </p>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">

          {/* Title */}
          <div className="flex gap-3 items-center">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200"
              alt="property"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <p className="text-xs text-gray-500">
                Final Price
              </p>
              <p className="font-semibold text-gray-800">
                Property Buying & Selling
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex gap-2 text-xs">
            <span className="bg-gray-100 px-3 py-1 rounded-lg">
              Real Estate
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-lg">
              Brokerage
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-lg">
              Pune
            </span>
          </div>

          {/* Franchise Model */}
          <div>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-gray-700">
                Franchise Model
              </p>
              <button className="text-blue-500 text-sm">
                Apply Offers
              </button>
            </div>

            {/* Tabs */}
            <div className="flex bg-gray-100 rounded-lg mt-2 text-sm overflow-hidden">
              <button className="flex-1 py-2 bg-white text-blue-600 font-medium">
                Small
              </button>
              <button className="flex-1 py-2 text-gray-500">
                Medium
              </button>
              <button className="flex-1 py-2 text-gray-500">
                Large
              </button>
            </div>
          </div>

          {/* Breakdown List */}
          <div className="space-y-2 text-sm text-gray-600">
            {[
              ["Franchise Fee", "₹5,00,000"],
              ["Business Licenses", "₹2,00,000"],
              ["Insurance", "₹75,000"],
              ["Legal & Accounting Fee", "₹1,50,000"],
              ["Inventory Fee", "₹1,00,000"],
              ["Office Setup", "₹1,25,000"],
              ["Initial Startup Equipment & Marketing", "₹3,00,000"],
              ["Staff & Management Training Expense", "₹1,25,000"],
              ["Other Expense", "₹1,00,000"],
            ].map(([label, value], i) => (
              <div key={i} className="flex justify-between">
                <span>{label}</span>
                <span className="font-medium text-gray-800">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between items-center border-t pt-3">
            <p className="text-gray-600 text-sm">
              Total Investment
            </p>

            <div className="text-right">
              <p className="text-lg font-bold text-purple-600">
                ₹17,00,000
              </p>

              <p className="text-xs text-gray-400">
                +GST
              </p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <button className="w-full border border-green-500 text-green-600 flex items-center justify-center gap-2 py-2 rounded-lg text-sm">
            <FaWhatsapp />
            Get price details on WhatsApp
          </button>

        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-3 font-medium">
          Secure your spot at just ₹1745/-
        </div>

      </div>
    </div>
  );
}