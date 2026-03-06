// "use client";

// import Image from "next/image";
// import {
//   FiArrowLeft,
//   FiUser,
//   FiHeart,
//   FiCreditCard,
//   FiGift,
//   FiHelpCircle,
//   FiBell,
//   FiFileText,
//   FiTrash2,
//   FiEdit2,
//   FiPlus,
// } from "react-icons/fi";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import FavouritePage from "@/app/Account/favorite/page";
// import { useUser } from "@/src/context/UserContext";

// export default function MyAccountPage() {
//   const { userId } = useParams<{ userId: string }>();
//   const { user, loading, error, fetchUser } = useUser();

//   const [selectedSection, setSelectedSection] = useState("Profile");
//   const [openAccordion, setOpenAccordion] = useState<string | null>(null);

//   const [showModal, setShowModal] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(false);

//   const accountHub = [
//     { name: "Profile", icon: FiUser },
//     { name: "Favorite", icon: FiHeart },
//     { name: "Wallet", icon: FiCreditCard },
//     { name: "5X Guarantee", icon: FiGift },
//     { name: "Coupon", icon: FiCreditCard },
//     { name: "Provider", icon: FiGift },
//     { name: "Customer", icon: FiGift },
//   ];

//   const appInfo = [
//     { name: "About Us", icon: FiFileText },
//     { name: "Notification", icon: FiBell },
//     { name: "Help & Support", icon: FiHelpCircle },
//     { name: "Privacy & Policy", icon: FiFileText },
//     { name: "Terms & Conditions", icon: FiBell },
//     { name: "Refund Policy", icon: FiHelpCircle },
//     { name: "Delete Account", icon: FiTrash2, danger: true },
//   ];

//   const accordions = [
//     "Complete Profile",
//     "Add Your Address",
//     "Bank KYC",
//   ];

//   useEffect(() => {
//     if (userId) fetchUser(userId);
//   }, [userId, fetchUser]);

//   console.log("User Data:", userId)

//   const renderContent = () => {
//     switch (selectedSection) {
//       case "Favorite":
//         return <FavouritePage />;

//       case "Wallet":
//         return <div className="p-6">Wallet Page</div>;

//       case "Delete Account":
//         return <div className="p-6">Delete Account Page</div>;

//       default:
//         return (
//           <main className="flex-1 px-4 md:px-10 py-10 md:py-16">
//             {/* Error */}
//             {error && (
//               <div className="text-red-500 text-sm mb-4">{error}</div>
//             )}

//             {/* Header */}
//             <div className="flex flex-col lg:flex-row justify-between gap-6">
//               <div className="flex justify-between items-start w-full lg:w-[683px]">
//                 <div className="flex gap-6">
//                   <div className="relative w-[90px] h-[90px] md:w-[100px] md:h-[100px]">
//                     <Image
//                       src="/image/partnerreviewprofile.jpg"
//                       alt="profile"
//                       fill
//                       className="rounded-full object-cover"
//                     />
//                     <button className="absolute bottom-0 right-0 bg-white border rounded-full p-1">
//                       <FiPlus size={14} />
//                     </button>
//                   </div>

//                   <div className="space-y-2">
//                     <h2 className="text-xl font-semibold text-[#232323]">
//                       {loading ? "Loading..." : user?.fullName || "--"}
//                     </h2>

//                     <p className="text-[#606060] text-sm">
//                       {loading ? "Loading..." : user?.email || "--"}
//                     </p>

//                     <p className="text-xs text-[#606060]">
//                       ID: {loading ? "Loading..." : user?.userId || "--"}
//                     </p>

//                     {/* Stats */}
//                     <div className="flex flex-wrap gap-6 mt-3 text-sm text-center">
//                       <div>
//                         <p className="text-blue-600 text-[18px] font-semibold">
//                           {user?.createdAt
//                             ? new Date(user.createdAt).toLocaleDateString()
//                             : "--"}
//                         </p>
//                         <p className="text-[#232323] text-[14px]">
//                           Joining Date
//                         </p>
//                       </div>

//                       <div>
//                         <p className="text-blue-600 text-[18px] font-semibold">
//                           0
//                         </p>
//                         <p className="text-[#232323] text-[14px]">
//                           Lead Completed
//                         </p>
//                       </div>

//                       <div>
//                         <p className="text-blue-600 text-[18px] font-semibold">
//                           0
//                         </p>
//                         <p className="text-[#232323] text-[14px]">
//                           Total Earning
//                         </p>
//                       </div>
//                     </div>

//                     <button className="mt-3 w-full md:w-[525px] bg-blue-600 text-white px-6 py-2 rounded-md text-sm">
//                       Track Packages
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => setShowModal(true)}
//                   className="border rounded-full p-2"
//                 >
//                   <FiEdit2 />
//                 </button>
//               </div>

//               {/* Right Cards */}
//               <div className="flex flex-row lg:flex-col gap-4">
//                 <div className="bg-blue-600 text-white rounded-lg px-5 py-4 w-[200px]">
//                   <p className="text-sm">Access your</p>
//                   <p className="font-semibold">package</p>
//                 </div>

//                 <div className="bg-yellow-400 rounded-lg px-5 py-4 w-[200px]">
//                   <p className="text-sm">Earn with</p>
//                   <p className="font-semibold">referrals</p>
//                 </div>
//               </div>
//             </div>

//             {/* Accordions */}
//             <div className="mt-10 space-y-4">
//               {accordions.map((item) => {
//                 const isOpen = openAccordion === item;

//                 return (
//                   <div key={item} className="rounded-lg border">
//                     <button
//                       onClick={() =>
//                         setOpenAccordion(isOpen ? null : item)
//                       }
//                       className="w-full px-5 py-4 flex justify-between items-center"
//                     >
//                       <span className="text-[16px] text-[#232323] font-medium">
//                         {item}
//                       </span>

//                       <FiPlus
//                         className={`transition-transform ${
//                           isOpen ? "rotate-45" : ""
//                         }`}
//                       />
//                     </button>

//                     {isOpen && (
//                       <div className="px-5 pb-4 text-sm text-gray-500">
//                         Content for {item}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </main>
//         );
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen w-full bg-white">
//       {/* Mobile Topbar */}
//       <div className="md:hidden flex items-center justify-between p-4 border-b">
//         <h1 className="font-semibold text-lg">My Account</h1>
//         <button onClick={() => setShowSidebar(!showSidebar)}>☰</button>
//       </div>

//       {/* Sidebar */}
//       <aside
//         className={`fixed md:static top-0 left-0 h-full bg-white z-40
//         w-[280px] px-5 py-6 transition-transform duration-300
//         ${showSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
//       >
//         <div className="flex items-center gap-2 mb-8">
//           <FiArrowLeft />
//           <h1 className="font-semibold text-lg">My Account</h1>
//         </div>

//         <nav className="space-y-8 text-sm">
//           {/* Account Hub */}
//           <div>
//             <p className="text-[#232323] mb-4 text-[20px] font-medium">
//               Account Hub
//             </p>

//             <ul className="space-y-5">
//               {accountHub.map((item) => {
//                 const isActive = selectedSection === item.name;

//                 return (
//                   <li
//                     key={item.name}
//                     onClick={() => {
//                       setSelectedSection(item.name);
//                       setShowSidebar(false);
//                     }}
//                     className={`flex items-center gap-2 text-[16px] cursor-pointer
//                       ${
//                         isActive
//                           ? "text-blue-600 font-medium"
//                           : "text-[#868686]"
//                       }`}
//                   >
//                     <item.icon />
//                     {item.name}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>

//           {/* App Info */}
//           <div>
//             <p className="text-[#232323] mb-4 text-[20px] font-medium">
//               App Info
//             </p>

//             <ul className="space-y-5">
//               {appInfo.map((item) => {
//                 const isActive = selectedSection === item.name;

//                 return (
//                   <li
//                     key={item.name}
//                     onClick={() => {
//                       setSelectedSection(item.name);
//                       setShowSidebar(false);
//                     }}
//                     className={`flex items-center gap-2 text-[16px] cursor-pointer
//                       ${
//                         isActive
//                           ? "text-blue-600 font-medium"
//                           : "text-[#868686]"
//                       }`}
//                   >
//                     <item.icon />
//                     {item.name}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </nav>
//       </aside>

//       {/* Overlay */}
//       {showSidebar && (
//         <div
//           className="fixed inset-0 bg-black/30 md:hidden"
//           onClick={() => setShowSidebar(false)}
//         />
//       )}

//       {/* Main */}
//       <main className="flex-1">{renderContent()}</main>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl w-[90%] max-w-[400px] p-6">
//             <h3 className="text-lg font-semibold mb-4">
//               Edit Profile
//             </h3>

//             <div className="space-y-3">
//               <input
//                 className="w-full border rounded-md px-3 py-2"
//                 placeholder="Full Name"
//               />
//               <input
//                 className="w-full border rounded-md px-3 py-2"
//                 placeholder="Email"
//               />
//             </div>

//             <div className="flex justify-end gap-3 mt-5">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-4 py-2 text-gray-500"
//               >
//                 Cancel
//               </button>

//               <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { FiEdit2, FiPlus } from "react-icons/fi";
import { useState } from "react";
import { useUser } from "@/src/context/UserContext";
import CompleteProfile from "@/src/components/Account/Profile/CompleteProfile";
import AddAddress from "@/src/components/Account/Profile/AddAddress";
import BankKYC from "@/src/components/Account/Profile/BankKYC";
import { useLeads } from "@/src/context/LeadsContext";
import { useWallet } from "@/src/context/WalletContext";

// function CompleteProfile() {
//   return <div className="p-5">Complete Profile Page</div>;
// }

// function AddressSection() {
//   return <div className="p-5">Add Your Address Page</div>;
// }

// function BankKYC() {
//   return <div className="p-5">Bank KYC Page</div>;
// }

export default function ProfileSection() {
  const { user, loading, error } = useUser();
    const { leads, loading: leadsLoading } = useLeads();
    const { wallet, loading: walletLoading } = useWallet();
  
    const [activeSection, setActiveSection] = useState<string | null>(null);


  const totalEarnings = wallet?.totalCredits || 0;
  const completedLeads =
  leads?.filter((lead) => lead.isCompleted).length || 0;


  const accordions = [
    "Complete Profile",
    "Add Your Address",
    "Bank KYC",
  ];

    const renderSection = () => {
    switch (activeSection) {
      case "Complete Profile":
        return <CompleteProfile />;
      case "Add Your Address":
        return <AddAddress />;
      case "Bank KYC":
        return <BankKYC />;
      default:
        return null;
    }
  };

  return (
    <main className="flex-1 px-4 md:px-10 py-10 md:py-16">
      {/* Error */}
      {error && (
        <div className="text-red-500 text-sm mb-4">{error}</div>
      )}

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex justify-between items-start w-full lg:w-[683px]">
          <div className="flex gap-6">
            {/* Profile Image */}
            <div className="relative w-[90px] h-[90px] md:w-[100px] md:h-[100px] ">
              <img
                src={user?.profilePhoto || "/image/profile1.jpg"}
                alt={user?.fullName }  
                className="rounded-full object-cover w-full h-full"
              />
              <button className="absolute bottom-0 right-0 bg-white border rounded-full p-1">
                <FiPlus size={14} />
              </button>
            </div>

            {/* User Info */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-[#232323]">
                {user?.fullName}
              </h2>

              <p className="text-[#606060] text-sm">
                { user?.email || "--"}
              </p>

              <p className="text-xs text-[#606060]">
                ID: { user?.userId || "--"}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mt-3 text-sm text-center">
                <div>
                  <p className="text-blue-600 text-[18px] font-semibold">
                    {user?.createdAt
                      ? new Date(user.createdAt).toLocaleDateString("en-GB")
                      : "--"}
                  </p>
                  <p className="text-[#232323] text-[14px]">
                    Joining Date
                  </p>
                </div>

                <div>
                  <p className="text-blue-600 text-[18px] font-semibold">
                    {completedLeads}
                  </p>
                  <p className="text-[#232323] text-[14px]">
                    Lead Completed
                  </p>
                </div>

                <div>
                  <p className="text-blue-600 text-[18px] font-semibold">
                    {totalEarnings}
                  </p>
                  <p className="text-[#232323] text-[14px]">
                    Total Earning
                  </p>
                </div>
              </div>

              <button className="mt-3 w-full md:w-[525px] bg-blue-600 text-white px-6 py-2 rounded-md text-sm">
                Track Packages
              </button>
            </div>
          </div>

          {/* Edit Button */}
          <button className="border rounded-full p-2">
            <FiEdit2 />
          </button>
        </div>

        {/* Right Cards */}
        <div className="flex flex-row lg:flex-col gap-4">
          <div className="bg-blue-600 text-white rounded-lg px-5 py-4 w-[200px]">
            <p className="text-sm">Access your</p>
            <p className="font-semibold">package</p>
          </div>

          <div className="bg-yellow-400 rounded-lg px-5 py-4 w-[200px]">
            <p className="text-sm">Earn with</p>
            <p className="font-semibold">referrals</p>
          </div>
        </div>
      </div>

      {/* Accordions */}
      <div className="mt-10 space-y-4">
        {accordions.map((item) => {
          const isActive = activeSection === item;

          return (
            <div key={item} className="rounded-lg">
              <button
                onClick={() =>
                  setActiveSection(isActive ? null : item)
                }
                className="w-full px-5 py-4 flex justify-between items-center"
              >
                <span className="text-[16px] text-[#232323] font-medium">
                  {item}
                </span>

                <FiPlus
                  className={`transition-transform ${
                    isActive ? "rotate-45" : ""
                  }`}
                />
              </button>

              {isActive && (
                <div className="px-5 pb-4 text-sm text-gray-500">
                  {renderSection()}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}

// "use client";

// import { FiEdit2, FiPlus } from "react-icons/fi";
// import { useState } from "react";
// import { useUser } from "@/src/context/UserContext";

// export default function ProfileSection() {
//   const { user, loading, error } = useUser();
//   const [openAccordion, setOpenAccordion] = useState<string | null>(null);

//   const accordions = [
//     "Complete Profile",
//     "Add Your Address",
//     "Bank KYC",
//   ];

//   if (loading) {
//     return <div className="p-10">Loading profile...</div>;
//   }

//   if (!user) {
//     return <div className="p-10 text-gray-500">No user data found</div>;
//   }

//   return (
//     <main className="flex-1  py-10 md:py-16">
//       {error && (
//         <div className="text-red-500 text-sm mb-4">{error}</div>
//       )}

//       <div className="flex flex-col lg:flex-row justify-between gap-6">
//         <div className="flex justify-between items-start w-full lg:w-[683px]">
//           <div className="flex gap-6">
//             <div className="relative w-[100px] h-[100px]">
//               <img
//                 src={user.profilePhoto || "/default-avatar.png"}
//                 alt={user.fullName}
//                 className="rounded-full object-cover w-full h-full"
//               />
//               <button className="absolute bottom-0 right-0 bg-white border rounded-full p-1">
//                 <FiPlus size={14} />
//               </button>
//             </div>

//             <div className="space-y-2">
//               <h2 className="text-xl font-semibold">
//                 {user.fullName}
//               </h2>

//               <p className="text-sm text-gray-600">
//                 {user.email || "--"}
//               </p>

//               <p className="text-xs text-gray-500">
//                 ID: {user.userId}
//               </p>

//               <div className="flex gap-6 mt-3 text-sm text-center">
//                 <div>
//                   <p className="text-blue-600 text-lg font-semibold">
//                     {new Date(user.createdAt).toLocaleDateString()}
//                   </p>
//                   <p>Joining Date</p>
//                 </div>
//               </div>

//               <button className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-md text-sm">
//                 Track Packages
//               </button>
//             </div>
//           </div>

//           <button className="border rounded-full p-2">
//             <FiEdit2 />
//           </button>
//         </div>
//       </div>

//       <div className="mt-10 space-y-4">
//         {accordions.map((item) => {
//           const isOpen = openAccordion === item;

//           return (
//             <div key={item} className="rounded-lg border">
//               <button
//                 onClick={() =>
//                   setOpenAccordion(isOpen ? null : item)
//                 }
//                 className="w-full px-5 py-4 flex justify-between items-center"
//               >
//                 <span className="font-medium">{item}</span>
//                 <FiPlus
//                   className={`transition-transform ${
//                     isOpen ? "rotate-45" : ""
//                   }`}
//                 />
//               </button>

//               {isOpen && (
//                 <div className="px-5 pb-4 text-sm text-gray-500">
//                   Content for {item}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </main>
//   );
// }



// "use client";

// import Image from "next/image";
// import { FiEdit2, FiPlus } from "react-icons/fi";
// import { useState, useEffect } from "react";
// import { useUser } from "@/src/context/UserContext";

// export default function ProfileSection() {
//   const { user, loading, error, fetchUser } = useUser();
//   const [openAccordion, setOpenAccordion] = useState<string | null>(null);

//   const accordions = [
//     "Complete Profile",
//     "Add Your Address",
//     "Bank KYC",
//   ];

//   /* ✅ Fetch user if not available */
//   useEffect(() => {
//     if (!user) {
//       const storedUserId = localStorage.getItem("userId"); // adjust if needed
//       if (storedUserId) {
//         fetchUser(storedUserId);
//       }
//     }
//   }, [user, fetchUser]);

//   /* ✅ Simple skeleton loader */
//   if (loading && !user) {
//     return (
//       <main className="flex-1 px-4 md:px-10 py-10 md:py-16">
//         <div className="animate-pulse flex gap-6">
//           <div className="w-[100px] h-[100px] bg-gray-200 rounded-full" />
//           <div className="flex-1 space-y-3">
//             <div className="h-5 bg-gray-200 rounded w-40" />
//             <div className="h-4 bg-gray-200 rounded w-60" />
//             <div className="h-4 bg-gray-200 rounded w-32" />
//           </div>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="flex-1 px-4 md:px-10 py-10 md:py-16">
//       {/* ✅ Error */}
//       {error && (
//         <div className="text-red-500 text-sm mb-4">{error}</div>
//       )}

//       {/* ================= HEADER ================= */}
//       <div className="flex flex-col lg:flex-row justify-between gap-6">
//         <div className="flex justify-between items-start w-full lg:w-[683px]">
//           <div className="flex gap-6">
//             {/* ✅ Profile Image */}
//             <div className="relative w-[90px] h-[90px] md:w-[100px] md:h-[100px]">
//               <Image
//                 src={
//                   user?.profilePhoto ||
//                   "/image/default-avatar.png"
//                 }
//                 alt="profile"
//                 fill
//                 className="rounded-full object-cover"
//               />
//               <button className="absolute bottom-0 right-0 bg-white border rounded-full p-1 shadow-sm">
//                 <FiPlus size={14} />
//               </button>
//             </div>

//             {/* ✅ User Info */}
//             <div className="space-y-2">
//               <h2 className="text-xl font-semibold text-[#232323]">
//                 {user?.fullName || "--"}
//               </h2>

//               <p className="text-[#606060] text-sm">
//                 {user?.email || "--"}
//               </p>

//               <p className="text-xs text-[#606060]">
//                 ID: {user?.userId || "--"}
//               </p>

//               {/* ✅ Stats */}
//               <div className="flex flex-wrap gap-6 mt-3 text-sm text-center">
//                 <div>
//                   <p className="text-blue-600 text-[18px] font-semibold">
//                     {user?.createdAt
//                       ? new Date(user.createdAt).toLocaleDateString("en-IN")
//                       : "--"}
//                   </p>
//                   <p className="text-[#232323] text-[14px]">
//                     Joining Date
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-blue-600 text-[18px] font-semibold">
//                     0
//                   </p>
//                   <p className="text-[#232323] text-[14px]">
//                     Lead Completed
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-blue-600 text-[18px] font-semibold">
//                     ₹0
//                   </p>
//                   <p className="text-[#232323] text-[14px]">
//                     Total Earning
//                   </p>
//                 </div>
//               </div>

//               {/* ✅ Button */}
//               <button
//                 disabled={loading}
//                 className="mt-3 w-full md:w-[525px] bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-md text-sm disabled:opacity-50"
//               >
//                 Track Packages
//               </button>
//             </div>
//           </div>

//           {/* ✅ Edit Button */}
//           <button className="border rounded-full p-2 hover:bg-gray-100 transition">
//             <FiEdit2 />
//           </button>
//         </div>

//         {/* ================= RIGHT CARDS ================= */}
//         <div className="flex flex-row lg:flex-col gap-4">
//           <div className="bg-blue-600 text-white rounded-lg px-5 py-4 w-[200px] shadow-sm">
//             <p className="text-sm">Access your</p>
//             <p className="font-semibold">Package</p>
//           </div>

//           <div className="bg-yellow-400 rounded-lg px-5 py-4 w-[200px] shadow-sm">
//             <p className="text-sm">Earn with</p>
//             <p className="font-semibold">Referrals</p>
//           </div>
//         </div>
//       </div>

//       {/* ================= ACCORDIONS ================= */}
//       <div className="mt-10 space-y-4">
//         {accordions.map((item) => {
//           const isOpen = openAccordion === item;

//           return (
//             <div key={item} className="rounded-lg border">
//               <button
//                 onClick={() =>
//                   setOpenAccordion(isOpen ? null : item)
//                 }
//                 className="w-full px-5 py-4 flex justify-between items-center"
//               >
//                 <span className="text-[16px] text-[#232323] font-medium">
//                   {item}
//                 </span>

//                 <FiPlus
//                   className={`transition-transform duration-300 ${
//                     isOpen ? "rotate-45" : ""
//                   }`}
//                 />
//               </button>

//               {isOpen && (
//                 <div className="px-5 pb-4 text-sm text-gray-500">
//                   Content for <b>{item}</b>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </main>
//   );
// }


