// "use client";

// import { FaRupeeSign } from "react-icons/fa";
// import { MdLocationOn } from "react-icons/md";
// import { FaUsers } from "react-icons/fa";
// import { MdOutlineScreenSearchDesktop } from "react-icons/md";

// export default function EarningModalUI({ onClose }) {
//   return (
//     <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[999]">

//       {/* Container */}
//       <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">

//         {/* Header */}
//         <div className="flex items-center gap-2 px-4 py-3 border-b">
//           <button onClick={onClose} className="text-xl">←</button>
//           <p className="font-medium text-gray-700">
//             Monthly Earning Potential
//           </p>
//         </div>

//         <div className="p-4 space-y-5">

//           {/* Top Card */}
//           <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl p-4 flex justify-between items-center shadow">
//             <div className="flex items-center gap-3">
//               <div className="bg-yellow-400 p-2 rounded-full">
//                 <FaRupeeSign className="text-white" />
//               </div>
//               <p className="font-medium text-gray-700">
//                 Monthly Earning Potential
//               </p>
//             </div>

//             <p className="text-xl font-bold text-teal-700">
//               ₹ 1L - 3L
//             </p>
//           </div>

//           {/* AREA */}
//           <div>
//             <div className="flex justify-between items-center mb-2">
//               <div className="flex items-center gap-2">
//                 <MdLocationOn className="text-purple-600" />
//                 <p className="font-medium">Area</p>
//               </div>
//               <span className="bg-gray-200 px-3 py-1 rounded text-sm">
//                 Tier 3
//               </span>
//             </div>

//             {/* Labels */}
//             <div className="flex justify-between text-xs text-gray-400 mb-1">
//               <span>Rural</span>
//               <span>Tier 2</span>
//               <span>Tier 3</span>
//               <span>Metro</span>
//             </div>

//             {/* Slider */}
//             <div className="relative h-2 bg-gray-300 rounded-full">
//               <div className="absolute h-2 bg-purple-600 rounded-full w-[70%]" />
//             </div>
//           </div>

//           {/* POPULATION */}
//           <div>
//             <div className="flex justify-between items-center mb-2">
//               <div className="flex items-center gap-2">
//                 <FaUsers className="text-purple-600" />
//                 <p className="font-medium">Population</p>
//               </div>
//               <span className="bg-gray-200 px-3 py-1 rounded text-sm">
//                 35 Lakhs
//               </span>
//             </div>

//             <div className="flex justify-between text-xs text-gray-400 mb-1">
//               <span>10,000</span>
//               <span>25,000</span>
//               <span>50,000</span>
//               <span>75,000</span>
//               <span>1,00,000</span>
//             </div>

//             <div className="relative h-2 bg-gray-300 rounded-full">
//               <div className="absolute h-2 bg-purple-600 rounded-full w-[75%]" />
//             </div>
//           </div>

//           {/* AUDIENCE */}
//           <div>
//             <div className="flex justify-between items-center mb-2">
//               <div className="flex items-center gap-2">
//                 <MdOutlineScreenSearchDesktop className="text-purple-600" />
//                 <p className="font-medium">Audience Type</p>
//               </div>
//               <span className="bg-gray-200 px-3 py-1 rounded text-sm">
//                 Middle Class
//               </span>
//             </div>

//             <div className="flex justify-between text-xs text-gray-400 mb-1">
//               <span>Budget Class</span>
//               <span>Middle Class</span>
//               <span>Premium Class</span>
//             </div>

//             <div className="relative h-2 bg-gray-300 rounded-full">
//               <div className="absolute h-2 bg-purple-600 rounded-full w-[60%]" />
//             </div>
//           </div>

//           {/* Footer Note */}
//           <p className="text-xs text-gray-500 mt-4">
//             • Figures vary based on market trends & local demands.
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { FaRupeeSign } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

/* ================= TYPES ================= */

interface EarningModalUIProps {
  onClose: () => void;
}

/* ================= COMPONENT ================= */

export default function EarningModalUI({
  onClose,
}: EarningModalUIProps) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[999]">

      {/* Container */}
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">

        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b">
          <button onClick={onClose} className="text-xl">
            ←
          </button>

          <p className="font-medium text-gray-700">
            Monthly Earning Potential
          </p>
        </div>

        <div className="p-4 space-y-5">

          {/* Top Card */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl p-4 flex justify-between items-center shadow">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-400 p-2 rounded-full">
                <FaRupeeSign className="text-white" />
              </div>

              <p className="font-medium text-gray-700">
                Monthly Earning Potential
              </p>
            </div>

            <p className="text-xl font-bold text-teal-700">
              ₹ 1L - 3L
            </p>
          </div>

          {/* AREA */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <MdLocationOn className="text-purple-600" />
                <p className="font-medium">Area</p>
              </div>

              <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                Tier 3
              </span>
            </div>

            {/* Labels */}
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Rural</span>
              <span>Tier 2</span>
              <span>Tier 3</span>
              <span>Metro</span>
            </div>

            {/* Slider */}
            <div className="relative h-2 bg-gray-300 rounded-full">
              <div className="absolute h-2 bg-purple-600 rounded-full w-[70%]" />
            </div>
          </div>

          {/* POPULATION */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <FaUsers className="text-purple-600" />
                <p className="font-medium">Population</p>
              </div>

              <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                35 Lakhs
              </span>
            </div>

            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>10,000</span>
              <span>25,000</span>
              <span>50,000</span>
              <span>75,000</span>
              <span>1,00,000</span>
            </div>

            <div className="relative h-2 bg-gray-300 rounded-full">
              <div className="absolute h-2 bg-purple-600 rounded-full w-[75%]" />
            </div>
          </div>

          {/* AUDIENCE */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <MdOutlineScreenSearchDesktop className="text-purple-600" />
                <p className="font-medium">Audience Type</p>
              </div>

              <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                Middle Class
              </span>
            </div>

            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Budget Class</span>
              <span>Middle Class</span>
              <span>Premium Class</span>
            </div>

            <div className="relative h-2 bg-gray-300 rounded-full">
              <div className="absolute h-2 bg-purple-600 rounded-full w-[60%]" />
            </div>
          </div>

          {/* Footer Note */}
          <p className="text-xs text-gray-500 mt-4">
            • Figures vary based on market trends & local demands.
          </p>

        </div>
      </div>
    </div>
  );
}


// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaRupeeSign, FaUsers } from "react-icons/fa";
// import {
//   MdLocationOn,
//   MdOutlineScreenSearchDesktop,
// } from "react-icons/md";
// import { useServiceDetails } from "@/src/context/ServiceDetailsContext";

// /* ================= TYPES ================= */

// interface FranchiseModelItem {
//   _id: string;
//   franchiseSize: string;
//   areaRequired: string;
//   returnOfInvestment: string;
//   manPower: number;
//   royaltyPercent: string;
//   grossMargin: string;
//   radiusArea: string;
// }

// interface Props {
//   onClose: () => void;
//   serviceId: string;
// }

// /* ================= COMPONENT ================= */

// export default function EarningModalUI({
//   onClose,
//   serviceId,
// }: Props) {
//   const { service } = useServiceDetails();

//   const [models, setModels] =
//     useState<FranchiseModelItem[]>([]);

//   const [activeTab, setActiveTab] =
//     useState("");

//   const [loading, setLoading] =
//     useState(true);

//   /* ================= FETCH MODEL API ================= */

//   useEffect(() => {
//     const fetchModel = async () => {
//       try {
//         const res = await axios.get(
//           `https://api.fetchtrue.com/api/service/franchise/model?serviceId=${serviceId}`
//         );

//         const data =
//           res?.data?.data?.model || [];

//         setModels(data);

//         if (data.length > 0)
//           setActiveTab(
//             data[0].franchiseSize
//               .trim()
//               .toLowerCase()
//           );
//       } catch (err) {
//         console.error(
//           "Franchise model fetch error:",
//           err
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (serviceId) fetchModel();
//   }, [serviceId]);

//   /* ================= CURRENT MODEL ================= */

//   const selectedModel =
//     models.find(
//       (item) =>
//         item.franchiseSize
//           .trim()
//           .toLowerCase() === activeTab
//     ) || models[0];

//   if (loading)
//     return (
//       <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[999]">
//         <div className="bg-white p-6 rounded-xl shadow">
//           Loading...
//         </div>
//       </div>
//     );

//   if (!selectedModel)
//     return (
//       <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[999]">
//         <div className="bg-white p-6 rounded-xl shadow">
//           No franchise model data available
//         </div>
//       </div>
//     );

//   /* ================= MONTHLY EARNING RANGE ================= */

//   const earningRange =
//     service?.serviceDetails
//       ?.monthlyEarnPotential?.[0]?.range ||
//     "N/A";

//   /* ================= UI ================= */

//   return (
//     <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[999]">
//       <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">

//         {/* HEADER */}

//         <div className="flex items-center gap-2 px-4 py-3 border-b">
//           <button
//             onClick={onClose}
//             className="text-xl"
//           >
//             ←
//           </button>

//           <p className="font-medium text-gray-700">
//             Monthly Earning Potential
//           </p>
//         </div>

//         <div className="p-4 space-y-5">

//           {/* TABS */}

//           <div className="flex bg-gray-100 rounded-lg text-sm overflow-hidden">

//             {models.map((item) => {
//               const tabValue =
//                 item.franchiseSize
//                   .trim()
//                   .toLowerCase();

//               return (
//                 <button
//                   key={item._id}
//                   onClick={() =>
//                     setActiveTab(tabValue)
//                   }
//                   className={`flex-1 py-2 capitalize transition ${
//                     activeTab === tabValue
//                       ? "bg-white text-blue-600 font-medium shadow"
//                       : "text-gray-500"
//                   }`}
//                 >
//                   {item.franchiseSize}
//                 </button>
//               );
//             })}
//           </div>

//           {/* TOP CARD */}

//           <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl p-4 flex justify-between items-center shadow">

//             <div className="flex items-center gap-3">
//               <div className="bg-yellow-400 p-2 rounded-full">
//                 <FaRupeeSign className="text-white" />
//               </div>

//               <p className="font-medium text-gray-700">
//                 Monthly Earning Potential
//               </p>
//             </div>

//             <p className="text-xl font-bold text-teal-700">
//               ₹ {earningRange}
//             </p>
//           </div>

//           {/* AREA */}

//           <InfoRow
//             icon={<MdLocationOn />}
//             label="Area Required"
//             value={
//               selectedModel.areaRequired
//             }
//           />

//           {/* MANPOWER */}

//           <InfoRow
//             icon={<FaUsers />}
//             label="Man Power"
//             value={
//               selectedModel.manPower
//             }
//           />

//           {/* ROI */}

//           <InfoRow
//             icon={
//               <MdOutlineScreenSearchDesktop />
//             }
//             label="ROI (Return)"
//             value={`${selectedModel.returnOfInvestment} Months`}
//           />

//           {/* EXTRA DATA */}

//           <div className="text-xs text-gray-500 space-y-1">
//             <p>
//               Royalty:{" "}
//               {
//                 selectedModel.royaltyPercent
//               }
//             </p>

//             <p>
//               Gross Margin:{" "}
//               {selectedModel.grossMargin}
//             </p>

//             <p>
//               Radius Area:{" "}
//               {selectedModel.radiusArea}
//             </p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= REUSABLE ROW ================= */

// function InfoRow({
//   icon,
//   label,
//   value,
// }: any) {
//   return (
//     <div className="flex justify-between items-center">
//       <div className="flex items-center gap-2 text-purple-600">
//         {icon}
//         <p className="font-medium text-black">
//           {label}
//         </p>
//       </div>

//       <span className="bg-gray-200 px-3 py-1 rounded text-sm">
//         {value}
//       </span>
//     </div>
//   );
// }


