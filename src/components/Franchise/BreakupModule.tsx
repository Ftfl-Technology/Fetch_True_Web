


// "use client";

// import { FaWhatsapp } from "react-icons/fa";

// /* ================= TYPES ================= */

// interface BreakupModalUIProps {
//   onClose: () => void;
// }

// /* ================= COMPONENT ================= */

// export default function BreakupModalUI({
//   onClose,
// }: BreakupModalUIProps) {
//   return (
//     <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[999]">

//       {/* Container */}
//       <div className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-lg">

//         {/* Header */}
//         <div className="flex items-center gap-2 px-4 py-3 border-b">
//           <button onClick={onClose} className="text-xl">
//             ←
//           </button>
//           <p className="font-medium text-gray-700">
//             View Breakup
//           </p>
//         </div>

//         {/* Content */}
//         <div className="p-4 space-y-4">

//           {/* Title */}
//           <div className="flex gap-3 items-center">
//             <img
//               src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200"
//               alt="property"
//               className="w-12 h-12 rounded-lg object-cover"
//             />
//             <div>
//               <p className="text-xs text-gray-500">
//                 Final Price
//               </p>
//               <p className="font-semibold text-gray-800">
//                 Property Buying & Selling
//               </p>
//             </div>
//           </div>

//           {/* Tags */}
//           <div className="flex gap-2 text-xs">
//             <span className="bg-gray-100 px-3 py-1 rounded-lg">
//               Real Estate
//             </span>
//             <span className="bg-gray-100 px-3 py-1 rounded-lg">
//               Brokerage
//             </span>
//             <span className="bg-gray-100 px-3 py-1 rounded-lg">
//               Pune
//             </span>
//           </div>

//           {/* Franchise Model */}
//           <div>
//             <div className="flex justify-between items-center">
//               <p className="font-semibold text-gray-700">
//                 Franchise Model
//               </p>
//               <button className="text-blue-500 text-sm">
//                 Apply Offers
//               </button>
//             </div>

//             {/* Tabs */}
//             <div className="flex bg-gray-100 rounded-lg mt-2 text-sm overflow-hidden">
//               <button className="flex-1 py-2 bg-white text-blue-600 font-medium">
//                 Small
//               </button>
//               <button className="flex-1 py-2 text-gray-500">
//                 Medium
//               </button>
//               <button className="flex-1 py-2 text-gray-500">
//                 Large
//               </button>
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
//                 <span className="font-medium text-gray-800">
//                   {value}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Total */}
//           <div className="flex justify-between items-center border-t pt-3">
//             <p className="text-gray-600 text-sm">
//               Total Investment
//             </p>

//             <div className="text-right">
//               <p className="text-lg font-bold text-purple-600">
//                 ₹17,00,000
//               </p>

//               <p className="text-xs text-gray-400">
//                 +GST
//               </p>
//             </div>
//           </div>

//           {/* WhatsApp CTA */}
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

import { useEffect, useState } from "react";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";

/* ================= TYPES ================= */

interface InvestmentItem {
  _id: string;
  franchiseSize: string;
  franchiseType: string;
  city: string;

  franchiseFee: number;
  businessLicenses: number;
  insurance: number;
  legalAndAccountingFee: number;
  inventoryFee: number;
  officeSetup: number;
  initialStartupEquipmentAndMarketing: number;
  staffAndManagementTrainingExpense: number;
  otherExpense: number;

  totalInvestment: number;
  gstIncluded: boolean;
  gst: number;
  tokenAmount: number;
}

interface Props {
  onClose: () => void;
  serviceId: string;
}

/* ================= COMPONENT ================= */

export default function BreakupModalUI({
  onClose,
  serviceId,
}: Props) {
  const { service } = useServiceDetails();

  const [investments, setInvestments] =
    useState<InvestmentItem[]>([]);

  const [activeTab, setActiveTab] =
    useState<string>("small");

  /* ================= FETCH INVESTMENT ================= */

  useEffect(() => {
    const fetchInvestment = async () => {
      try {
        const res = await axios.get(
          `https://api.fetchtrue.com/api/service/franchise/investment?serviceId=${serviceId}`
        );

        const data = res.data.data.investment;

        setInvestments(data);

        if (data.length > 0) {
          setActiveTab(data[0].franchiseSize.trim());
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchInvestment();
  }, [serviceId]);

  /* ================= CURRENT TAB DATA ================= */

  const selectedInvestment =
    investments.find(
      (item) =>
        item.franchiseSize.trim().toLowerCase() ===
        activeTab.toLowerCase()
    ) || investments[0];

  if (!selectedInvestment) return null;

  /* ================= UI ================= */

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[999]">

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

          {/* SERVICE INFO (Context se aa raha hai) */}

          <div className="flex gap-3 items-center">

            <img
              src={service?.thumbnailImage}
              alt="service"
              className="w-12 h-12 rounded-lg object-cover"
            />

            <div>

              <p className="text-xs text-gray-500">
                Final Price
              </p>

              <p className="font-semibold text-gray-800">
                {service?.serviceName}
              </p>

            </div>
          </div>

          {/* TAGS */}

          <div className="flex gap-2 text-xs flex-wrap">

            <span className="bg-gray-100 px-3 py-1 rounded-lg">
              {service?.category?.name}
            </span>

            <span className="bg-gray-100 px-3 py-1 rounded-lg">
              {selectedInvestment.franchiseType}
            </span>

            <span className="bg-gray-100 px-3 py-1 rounded-lg">
              {selectedInvestment.city}
            </span>

          </div>

          {/* TABS */}

          <div>

            <div className="flex justify-between items-center">

              <p className="font-semibold text-gray-700">
                Franchise Model
              </p>

              <button className="text-blue-500 text-sm">
                Apply Offers
              </button>

            </div>

            <div className="flex bg-gray-100 rounded-lg mt-2 text-sm overflow-hidden">

              {investments.map((item) => (

                <button
                  key={item._id}
                  onClick={() =>
                    setActiveTab(item.franchiseSize.trim())
                  }
                  className={`flex-1 py-2 capitalize ${
                    activeTab ===
                    item.franchiseSize.trim()
                      ? "bg-white text-blue-600 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {item.franchiseSize}
                </button>

              ))}

            </div>

          </div>

          {/* BREAKDOWN */}

          <div className="space-y-2 text-sm text-gray-600">

            {[
              ["Franchise Fee", selectedInvestment.franchiseFee],
              ["Business Licenses", selectedInvestment.businessLicenses],
              ["Insurance", selectedInvestment.insurance],
              ["Legal & Accounting Fee", selectedInvestment.legalAndAccountingFee],
              ["Inventory Fee", selectedInvestment.inventoryFee],
              ["Office Setup", selectedInvestment.officeSetup],
              ["Initial Startup Equipment & Marketing", selectedInvestment.initialStartupEquipmentAndMarketing],
              ["Staff & Management Training Expense", selectedInvestment.staffAndManagementTrainingExpense],
              ["Other Expense", selectedInvestment.otherExpense],
            ].map(([label, value], i) => (

              <div key={i} className="flex justify-between">

                <span>{label}</span>

                <span className="font-medium text-gray-800">
                  ₹{Number(value).toLocaleString()}
                </span>

              </div>

            ))}

          </div>

          {/* TOTAL */}

          <div className="flex justify-between items-center border-t pt-3">

            <p className="text-gray-600 text-sm">
              Total Investment
            </p>

            <div className="text-right">

              <p className="text-lg font-bold text-purple-600">
                ₹{selectedInvestment.totalInvestment.toLocaleString()}
              </p>

              <p className="text-xs text-gray-400">
                {selectedInvestment.gstIncluded
                  ? "GST Included"
                  : "+GST"}
              </p>

            </div>

          </div>

          {/* WHATSAPP */}

          <button className="w-full border border-green-500 text-green-600 flex items-center justify-center gap-2 py-2 rounded-lg text-sm">

            <FaWhatsapp />

            Get price details on WhatsApp

          </button>

        </div>

        {/* TOKEN CTA */}

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-3 font-medium">

          Secure your spot at just ₹
          {selectedInvestment.tokenAmount.toLocaleString()}

        </div>

      </div>
    </div>
  );
}
