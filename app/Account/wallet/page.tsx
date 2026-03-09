// "use client";

// import { TrendingUp, Calendar, Wallet, RotateCcw } from "lucide-react";

// export default function EarningsPage() {
//   return (
//     <div className="p-6 bg-white min-h-screen">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-lg font-semibold text-gray-800">
//           My Earning
//         </h1>

//         <button className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-50">
//           <RotateCcw className="w-4 h-4 text-gray-600" />
//         </button>
//       </div>

//       {/* Banner */}
//       <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-4 text-white flex items-center justify-between shadow-sm">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
//             <Wallet className="w-5 h-5" />
//           </div>

//           <div>
//             <p className="text-sm font-medium">My Earnings</p>
//             <p className="text-xs text-blue-100">
//               ● Weekly Auto Withdraw
//             </p>
//           </div>
//         </div>

//         <div className="text-right">
//           <p className="text-lg font-semibold">₹ 0.0</p>
//           <p className="text-xs text-green-200">▲ 10% this week</p>
//         </div>
//       </div>

//       {/* Stat Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//         {/* Total Earnings */}
//         <div className="bg-white border rounded-xl p-4 shadow-sm">
//           <div className="flex items-start justify-between">
//             <TrendingUp className="w-5 h-5 text-blue-600" />
//             <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
//               + 0%
//             </span>
//           </div>

//           <p className="text-lg font-semibold mt-3">₹ 0.0</p>
//           <p className="text-xs text-gray-500">Total Earnings</p>
//         </div>

//         {/* Monthly Earnings */}
//         <div className="bg-white border rounded-xl p-4 shadow-sm">
//           <div className="flex items-start justify-between">
//             <Calendar className="w-5 h-5 text-blue-600" />
//             <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
//               + 0%
//             </span>
//           </div>

//           <p className="text-lg font-semibold mt-3">₹ 0.0</p>
//           <p className="text-xs text-gray-500">Monthly Earnings</p>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="mt-6">
//         <p className="text-sm font-medium text-gray-700 mb-3">
//           Earnings Breakdown
//         </p>

//         <div className="flex gap-3">
//           <button className="px-4 py-1.5 rounded-full border border-blue-600 text-blue-600 text-xs font-medium">
//             Self Earning
//           </button>

//           <button className="px-4 py-1.5 rounded-full border text-gray-500 text-xs font-medium hover:bg-gray-50">
//             Team Build
//           </button>

//           <button className="px-4 py-1.5 rounded-full border text-gray-500 text-xs font-medium hover:bg-gray-50">
//             Team Revenue
//           </button>
//         </div>
//       </div>

//       {/* Empty State */}
//       <div className="flex flex-col items-center justify-center text-center mt-20">
//         <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
//           <Wallet className="w-5 h-5 text-blue-600" />
//         </div>

//         <p className="text-sm font-semibold text-gray-800">
//           No Transactions Yet
//         </p>

//         <p className="text-xs text-gray-500 mt-1 leading-relaxed">
//           Start earning by referring members <br />
//           to grow together
//         </p>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { TrendingUp, Calendar, Wallet, RotateCcw } from "lucide-react";
// import { useWallet } from "@/src/context/WalletContext";

// export default function EarningsPage() {
//   const { wallet, loading, error, fetchWallet } = useWallet();

//   const handleRefresh = () => {
//     const storedUser = localStorage.getItem("user");
//     if (!storedUser) return;

//     try {
//       const parsed = JSON.parse(storedUser);
//       if (parsed?._id) {
//         fetchWallet(parsed._id);
//       }
//     } catch (err) {
//       console.error("Refresh parse error:", err);
//     }
//   };

//   /* ✅ Monthly Earnings Calculation */
//   const monthlyEarnings =
//     wallet?.transactions
//       ?.filter((t) => {
//         const txDate = new Date(t.createdAt);
//         const now = new Date();
//         return (
//           txDate.getMonth() === now.getMonth() &&
//           txDate.getFullYear() === now.getFullYear() &&
//           t.type === "credit"
//         );
//       })
//       .reduce((sum, t) => sum + t.amount, 0) ?? 0;

//   if (loading) {
//     return (
//       <div className="p-6 bg-white min-h-screen">
//         <p className="text-sm text-gray-500">Loading earnings...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-6 bg-white min-h-screen">
//         <p className="text-sm text-red-500">{error}</p>
//         <button
//           onClick={handleRefresh}
//           className="mt-3 text-xs text-blue-600"
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 bg-white min-h-screen">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-lg font-semibold text-gray-800">
//           My Earning
//         </h1>

//         <button
//           onClick={handleRefresh}
//           className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-50"
//         >
//           <RotateCcw className="w-4 h-4 text-gray-600" />
//         </button>
//       </div>

//       {/* Banner */}
//       <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-4 text-white flex items-center justify-between shadow-sm">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
//             <Wallet className="w-5 h-5" />
//           </div>

//           <div>
//             <p className="text-sm font-medium">My Earnings</p>
//             <p className="text-xs text-blue-100">
//               ● Weekly Auto Withdraw
//             </p>
//           </div>
//         </div>

//         <div className="text-right">
//           <p className="text-lg font-semibold">
//             ₹ {wallet?.balance?.toFixed(1) ?? "0.0"}
//           </p>
//           <p className="text-xs text-green-200">
//             ▲ {wallet?.selfEarnings ? "Active Income" : "Start Earning"}
//           </p>
//         </div>
//       </div>

//       {/* Stat Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//         {/* Total Earnings */}
//         <div className="bg-white border rounded-xl p-4 shadow-sm">
//           <div className="flex items-start justify-between">
//             <TrendingUp className="w-5 h-5 text-blue-600" />
//             <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
//               + 0%
//             </span>
//           </div>

//           <p className="text-lg font-semibold mt-3">
//             ₹ {(wallet?.selfEarnings ?? 0).toFixed(1)}
//           </p>
//           <p className="text-xs text-gray-500">Total Earnings</p>
//         </div>

//         {/* Monthly Earnings */}
//         <div className="bg-white border rounded-xl p-4 shadow-sm">
//           <div className="flex items-start justify-between">
//             <Calendar className="w-5 h-5 text-blue-600" />
//             <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
//               + 0%
//             </span>
//           </div>

//           <p className="text-lg font-semibold mt-3">
//             ₹ {monthlyEarnings.toFixed(1)}
//           </p>
//           <p className="text-xs text-gray-500">Monthly Earnings</p>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="mt-6">
//         <p className="text-sm font-medium text-gray-700 mb-3">
//           Earnings Breakdown
//         </p>

//         <div className="flex gap-3">
//           <button className="px-4 py-1.5 rounded-full border border-blue-600 text-blue-600 text-xs font-medium">
//             Self Earning
//           </button>

//           <button className="px-4 py-1.5 rounded-full border text-gray-500 text-xs font-medium hover:bg-gray-50">
//             Team Build
//           </button>

//           <button className="px-4 py-1.5 rounded-full border text-gray-500 text-xs font-medium hover:bg-gray-50">
//             Team Revenue
//           </button>
//         </div>
//       </div>

//       {/* Empty State */}
//       {wallet?.transactions?.length === 0 && (
//         <div className="flex flex-col items-center justify-center text-center mt-20">
//           <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
//             <Wallet className="w-5 h-5 text-blue-600" />
//           </div>

//           <p className="text-sm font-semibold text-gray-800">
//             No Transactions Yet
//           </p>

//           <p className="text-xs text-gray-500 mt-1 leading-relaxed">
//             Start earning by referring members <br />
//             to grow together
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { TrendingUp, Calendar, Wallet, RotateCcw } from "lucide-react";
// import { useWallet } from "@/src/context/WalletContext";

// type Tab = "self" | "teamBuild" | "teamRevenue";

// export default function EarningsPage() {
//   const { wallet, loading, error, fetchWallet } = useWallet();
//   const [activeTab, setActiveTab] = useState<Tab>("self");

//   const handleRefresh = () => {
//     const storedUser = localStorage.getItem("user");
//     if (!storedUser) return;

//     try {
//       const parsed = JSON.parse(storedUser);
//       if (parsed?._id) {
//         fetchWallet(parsed._id);
//       }
//     } catch (err) {
//       console.error("Refresh parse error:", err);
//     }
//   };

//   /* Monthly Earnings Calculation */
//   const monthlyEarnings = wallet?.transactions
//     ?.filter((t) => {
//       const txDate = new Date(t.createdAt);
//       const now = new Date();
//       return (
//         txDate.getMonth() === now.getMonth() &&
//         txDate.getFullYear() === now.getFullYear() &&
//         t.type === "credit"
//       );
//     })
//     .reduce((sum, t) => sum + t.amount, 0) ?? 0;

//   /* Filter Transactions based on Tab */
//   const filteredTransactions = wallet?.transactions?.filter((t) => {
//     if (activeTab === "self") return t.category === "self";
//     if (activeTab === "teamBuild") return t.category === "teamBuild";
//     if (activeTab === "teamRevenue") return t.category === "teamRevenue";
//     return true;
//   });

//   if (loading) {
//     return (
//       <div className="p-6 bg-white min-h-screen flex items-center justify-center">
//         <p className="text-sm text-gray-500">Loading earnings...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-6 bg-white min-h-screen flex flex-col items-center justify-center">
//         <p className="text-sm text-red-500">{error}</p>
//         <button
//           onClick={handleRefresh}
//           className="mt-3 text-xs text-blue-600 underline"
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 bg-white min-h-screen">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-lg font-semibold text-gray-800">My Earnings</h1>
//         <button
//           onClick={handleRefresh}
//           className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-50"
//         >
//           <RotateCcw className="w-4 h-4 text-gray-600" />
//         </button>
//       </div>

//       {/* Banner */}
//       <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-4 text-white flex items-center justify-between shadow-sm">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
//             <Wallet className="w-5 h-5" />
//           </div>
//           <div>
//             <p className="text-sm font-medium">My Earnings</p>
//             <p className="text-xs text-blue-100">● Weekly Auto Withdraw</p>
//           </div>
//         </div>
//         <div className="text-right">
//           <p className="text-lg font-semibold">
//             ₹ {wallet?.balance?.toFixed(1) ?? "0.0"}
//           </p>
//           <p className="text-xs text-green-200">
//             ▲ {wallet?.selfEarnings ? "Active Income" : "Start Earning"}
//           </p>
//         </div>
//       </div>

//       {/* Stat Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//         <div className="bg-white border rounded-xl p-4 shadow-sm">
//           <div className="flex items-start justify-between">
//             <TrendingUp className="w-5 h-5 text-blue-600" />
//             <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
//               + 0%
//             </span>
//           </div>
//           <p className="text-lg font-semibold mt-3">
//             ₹ {(wallet?.selfEarnings ?? 0).toFixed(1)}
//           </p>
//           <p className="text-xs text-gray-500">Total Earnings</p>
//         </div>

//         <div className="bg-white border rounded-xl p-4 shadow-sm">
//           <div className="flex items-start justify-between">
//             <Calendar className="w-5 h-5 text-blue-600" />
//             <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
//               + 0%
//             </span>
//           </div>
//           <p className="text-lg font-semibold mt-3">
//             ₹ {monthlyEarnings.toFixed(1)}
//           </p>
//           <p className="text-xs text-gray-500">Monthly Earnings</p>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="mt-6">
//         <p className="text-sm font-medium text-gray-700 mb-3">Earnings Breakdown</p>
//         <div className="flex gap-3 mb-4">
//           {[
//             { label: "Self Earning", key: "self" },
//             { label: "Team Build", key: "teamBuild" },
//             { label: "Team Revenue", key: "teamRevenue" },
//           ].map((tab) => (
//             <button
//               key={tab.key}
//               onClick={() => setActiveTab(tab.key as Tab)}
//               className={`px-4 py-1.5 rounded-full border text-xs font-medium ${
//                 activeTab === tab.key
//                   ? "border-blue-600 text-blue-600"
//                   : "border-gray-300 text-gray-500 hover:bg-gray-50"
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* Transactions List */}
//         {filteredTransactions?.length > 0 ? (
//           <div className="space-y-3">
//             {filteredTransactions.map((t) => (
//               <div
//                 key={t._id}
//                 className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
//               >
//                 <div>
//                   <p className="text-sm font-medium">{t.description}</p>
//                   <p className="text-xs text-gray-400">
//                     {new Date(t.createdAt).toLocaleDateString()}
//                   </p>
//                 </div>
//                 <p
//                   className={`text-sm font-semibold ${
//                     t.type === "credit" ? "text-green-600" : "text-red-600"
//                   }`}
//                 >
//                   {t.type === "credit" ? "+" : "-"} ₹ {t.amount.toFixed(1)}
//                 </p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="flex flex-col items-center justify-center text-center mt-10">
//             <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
//               <Wallet className="w-5 h-5 text-blue-600" />
//             </div>
//             <p className="text-sm font-semibold text-gray-800">No Transactions Yet</p>
//             <p className="text-xs text-gray-500 mt-1 leading-relaxed">
//               Start earning by referring members <br />
//               to grow together
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { TrendingUp, Calendar, Wallet, RotateCcw } from "lucide-react";
// import { useWallet } from "@/src/context/WalletContext";

// type Tab = "self" | "teamBuild" | "teamRevenue";

// export default function EarningsPage() {
//   const { wallet, loading, error, refreshWallet } = useWallet();
//   const [activeTab, setActiveTab] = useState<Tab>("self");

//   /* Monthly Earnings */
//   const monthlyEarnings =
//     wallet?.transactions
//       ?.filter((t) => {
//         const txDate = new Date(t.createdAt);
//         const now = new Date();

//         return (
//           txDate.getMonth() === now.getMonth() &&
//           txDate.getFullYear() === now.getFullYear() &&
//           t.type === "credit"
//         );
//       })
//       .reduce((sum, t) => sum + t.amount, 0) ?? 0;

//   /* Category Mapping (Backend → UI) */
//   const filteredTransactions = wallet?.transactions?.filter((t) => {
//     const category = (t.source || "").toUpperCase();

//     if (activeTab === "self") return category === "SELF";
//     if (activeTab === "teamBuild") return category === "TEAM_BUILD";
//     if (activeTab === "teamRevenue") return category === "TEAM_REVENUE";

//     return true;
//   });

//   if (loading) {
//     return (
//       <div className="p-6 bg-white min-h-screen flex items-center justify-center">
//         <p className="text-sm text-gray-500">Loading earnings...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-6 bg-white min-h-screen flex flex-col items-center justify-center">
//         <p className="text-sm text-red-500">{error}</p>
//         <button
//           onClick={refreshWallet}
//           className="mt-3 text-xs text-blue-600 underline"
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 bg-white min-h-screen">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-lg font-semibold text-gray-800">My Earnings</h1>
//         <button
//           onClick={refreshWallet}
//           className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-50"
//         >
//           <RotateCcw className="w-4 h-4 text-gray-600" />
//         </button>
//       </div>

//       {/* Banner */}
//       <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-4 text-white flex items-center justify-between shadow-sm">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
//             <Wallet className="w-5 h-5" />
//           </div>
//           <div>
//             <p className="text-sm font-medium">My Earnings</p>
//             <p className="text-xs text-blue-100">● Weekly Auto Withdraw</p>
//           </div>
//         </div>

//         <div className="text-right">
//           <p className="text-lg font-semibold">
//             ₹ {wallet?.balance?.toFixed(1) ?? "0.0"}
//           </p>
//           <p className="text-xs text-green-200">
//             ▲ {wallet?.selfEarnings ? "Active Income" : "Start Earning"}
//           </p>
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//         <div className="bg-white border rounded-xl p-4 shadow-sm">
//           <div className="flex items-start justify-between">
//             <TrendingUp className="w-5 h-5 text-blue-600" />
//             <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
//               + 0%
//             </span>
//           </div>
//           <p className="text-lg font-semibold mt-3">
//             ₹ {(wallet?.selfEarnings ?? 0).toFixed(1)}
//           </p>
//           <p className="text-xs text-gray-500">Total Earnings</p>
//         </div>

//         <div className="bg-white border rounded-xl p-4 shadow-sm">
//           <div className="flex items-start justify-between">
//             <Calendar className="w-5 h-5 text-blue-600" />
//             <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
//               + 0%
//             </span>
//           </div>
//           <p className="text-lg font-semibold mt-3">
//             ₹ {monthlyEarnings.toFixed(1)}
//           </p>
//           <p className="text-xs text-gray-500">Monthly Earnings</p>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="mt-6">
//         <p className="text-sm font-medium text-gray-700 mb-3">
//           Earnings Breakdown
//         </p>

//         <div className="flex gap-3 mb-4">
//           {[
//             { label: "Self Earning", key: "self" },
//             { label: "Team Build", key: "teamBuild" },
//             { label: "Team Revenue", key: "teamRevenue" },
//           ].map((tab) => (
//             <button
//               key={tab.key}
//               onClick={() => setActiveTab(tab.key as Tab)}
//               className={`px-4 py-1.5 rounded-full border text-xs font-medium ${
//                 activeTab === tab.key
//                   ? "border-blue-600 text-blue-600"
//                   : "border-gray-300 text-gray-500 hover:bg-gray-50"
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* Transactions */}
//         {filteredTransactions?.length ? (
//           <div className="space-y-3">
//             {filteredTransactions.map((t) => (
//               <div
//                 key={t._id}
//                 className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
//               >
//                 <div>
//                   <p className="text-sm font-medium">{t.description}</p>
//                   <p className="text-xs text-gray-400">
//                     {new Date(t.createdAt).toLocaleDateString()}
//                   </p>
//                 </div>

//                 <p
//                   className={`text-sm font-semibold ${
//                     t.type === "credit"
//                       ? "text-green-600"
//                       : "text-red-600"
//                   }`}
//                 >
//                   {t.type === "credit" ? "+" : "-"} ₹{" "}
//                   {t.amount.toFixed(1)}
//                 </p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="flex flex-col items-center justify-center text-center mt-10">
//             <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
//               <Wallet className="w-5 h-5 text-blue-600" />
//             </div>
//             <p className="text-sm font-semibold text-gray-800">
//               No Transactions Yet
//             </p>
//             <p className="text-xs text-gray-500 mt-1 leading-relaxed">
//               Start earning by referring members <br />
//               to grow together
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



"use client";

import { useState, useMemo } from "react";
import {
  TrendingUp,
  Calendar,
  Wallet,
  RotateCcw,
  ArrowDownLeft,
} from "lucide-react";
import { useWallet } from "@/src/context/WalletContext";
import { usePayouts } from "@/src/context/PayoutContext";

type Tab = "self" | "teamBuild" | "teamRevenue";

export default function EarningsPage() {
  const { wallet, loading, error, fetchWallet } = useWallet();
    const { payouts, fetchPayouts } = usePayouts();

  const [activeTab, setActiveTab] = useState<Tab>("self");

  /* ---------------- REFRESH HANDLER ---------------- */
  const handleRefresh = () => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) return;

    try {
      const parsed = JSON.parse(storedUser);
      if (parsed?._id) {
        fetchWallet(parsed._id);
        fetchPayouts();
      }
    } catch (err) {
      console.error("Refresh wallet error:", err);
    }
  };

  /* ---------------- MONTHLY EARNINGS ---------------- */
  const monthlyEarnings = useMemo(() => {
    if (!wallet?.transactions) return 0;

    const now = new Date();

    return wallet.transactions
      .filter((t) => {
        const txDate = new Date(t.createdAt);

        return (
          txDate.getMonth() === now.getMonth() &&
          txDate.getFullYear() === now.getFullYear() &&
          t.type === "credit"
        );
      })
      .reduce((sum, t) => sum + t.amount, 0);
  }, [wallet]);

  /* ---------------- FILTERED TRANSACTIONS ---------------- */
  const filteredTransactions = useMemo(() => {
    if (!wallet?.transactions) return [];

    const filtered = wallet.transactions.filter((t) => {
      const desc = (t.description || "").toUpperCase();

      if (activeTab === "self")
        return desc.includes("SELF");

      if (activeTab === "teamBuild")
        return desc.includes("TEAM BUILD");

      if (activeTab === "teamRevenue")
        return desc.includes("TEAM REVENUE");

      return true;
    });

    return filtered.sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  );
  }, [wallet, activeTab]);

  /* ---------------- LOADING ---------------- */
  if (loading) {
    return (
      <div className="p-6 bg-white min-h-screen flex items-center justify-center">
        <p className="text-sm text-gray-500">Loading earnings...</p>
      </div>
    );
  }

  /* ---------------- ERROR ---------------- */
  if (error) {
    return (
      <div className="p-6 bg-white min-h-screen flex flex-col items-center justify-center">
        <p className="text-sm text-red-500">{error}</p>
        <button
          onClick={handleRefresh}
          className="mt-3 text-xs text-blue-600 underline"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-5 bg-white min-h-screen">
      {/* ---------------- HEADER ---------------- */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-lg font-semibold text-gray-800">
          My Earnings
        </h1>

        <button
          onClick={handleRefresh}
          className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-50"
        >
          <RotateCcw className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* ---------------- BANNER ---------------- */}
      <div className="bg-white border rounded-xl p-4 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
            <Wallet className="w-5 h-5 text-blue-600" />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-800">
              My Earnings
            </p>
            <p className="text-xs text-gray-500">
              Weekly Auto-Withdraw
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-lg font-semibold text-green-600">
            ₹ {wallet?.balance?.toFixed(2) ?? "0.00"}
          </p>

          {/* <button className="text-xs text-blue-600 font-medium">
            History
          </button> */}
        </div>
      </div>

      {/* ---------------- STATS ---------------- */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="border rounded-xl p-3">
          <div className="flex justify-between">
            <p className="text-xs text-gray-500">Total Earnings</p>
            <p className="w-4 h-4 text-blue-600" >₹</p>
          </div>

          <p className="text-lg font-semibold text-green-600 mt-1">
            {/* ₹ {(wallet?.selfEarnings ?? 0).toFixed(2)} */}
            ₹ {(wallet?.balance?.toFixed(2))}
          </p>
        </div>

        <div className="border rounded-xl p-3">
          <div className="flex justify-between">
            <p className="text-xs text-gray-500">
              Monthly Fixed Earnings
            </p>
            <p className="w-4 h-4 text-blue-600" >₹</p>
          </div>

          <p className="text-lg font-semibold text-green-600 mt-1">
            ₹ 3000
          </p>
        </div>
      </div>

      {/* ---------------- TABS ---------------- */}
      <div className="mt-5 border-b flex justify-around text-sm">
        {[
          { label: "Self Earning", key: "self" },
          { label: "Team Build", key: "teamBuild" },
          { label: "Team Revenue", key: "teamRevenue" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as Tab)}
            className={`pb-2 relative ${
              activeTab === tab.key
                ? "text-blue-600 font-medium"
                : "text-gray-500"
            }`}
          >
            {tab.label}

            {activeTab === tab.key && (
              <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-blue-600 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* ---------------- TRANSACTIONS ---------------- */}
      <div className="mt-4">
        {filteredTransactions.length ? (
          <div className="space-y-5">
            {filteredTransactions.map((t, i) => {
              const desc = t.description.toUpperCase();
              const isTeamBuild = desc.includes("TEAM BUILD");

              return (
                <div
                  key={i}
                  className="flex items-center justify-between"
                >
                  {/* LEFT */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center">
                      <ArrowDownLeft className="w-5 h-5 text-blue-600" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {isTeamBuild
                          ? `From: ${t.commissionFrom || "—"}`
                          : `Lead Id: ${t.leadId || "—"}`}
                      </p>

                      <p className="text-xs text-gray-500">
                        {t.description}
                      </p>

                      <p className="text-xs text-gray-400 mt-0.5">
                       {new Date(t.createdAt).toLocaleString("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
})}


                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-800">
                      ₹ {t.amount?.toFixed(2)}
                    </p>

                    <p className="text-xs text-gray-400">
                      {t.type}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center mt-10">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
              <Wallet className="w-5 h-5 text-blue-600" />
            </div>

            <p className="text-sm font-semibold text-gray-800">
              No Transactions Yet
            </p>

            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Start earning by referring members <br />
              to grow together
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


