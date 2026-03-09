


// "use client";

// import { useEffect, useState } from "react";
// import FavouritePage from "@/app/Account/favorite/page";
// import AccountSidebar from "@/src/components/Account/Sidebar";
// import ProfilePage from "./profile/page";
// import NotificationSettings from "./notification/page";
// import CustomerList from "./customer/page";
// import AddCustomerForm from "./customer/add/page";
// import FiveXReturnPage from "./5xReturn/page";
// import DeleteAccountSection from "./delete/page";
// import EarningsPage from "./wallet/page";
// import CouponsPage from "./Coupon/page";
// import HelpCenter from "./helpCenter/page";
// import { useAuth } from "@/src/context/AuthContext";
// import AboutUsPage from "./aboutus/page";
//   import { useSearchParams } from "next/navigation";


// export default function MyAccountPage() {
//   const [selectedSection, setSelectedSection] = useState("Profile");
//   const [showSidebar, setShowSidebar] = useState(false);
//   const { user } = useAuth();


// const searchParams = useSearchParams();
// const section = searchParams.get("section");

// useEffect(() => {
//   if (section) setSelectedSection(section);
// }, [section]);


//   // ✅ Nested state for customer module
//   const [customerView, setCustomerView] = useState<"list" | "add">("list");

//   const renderContent = () => {
//     switch (selectedSection) {
//       case "Favorite":
//         return <FavouritePage userId={user?._id}/>;

//       case "Notification":
//         return <NotificationSettings />;

//       case "Customer":
//         return customerView === "list" ? (
//           <CustomerList onAdd={() => setCustomerView("add")} />
//         ) : (
//           <AddCustomerForm onBack={() => setCustomerView("list")} />
//         );
//       case "5X Guarantee":
//         return <FiveXReturnPage />;  
//       case "Coupon":
//         return <CouponsPage />;  
//       case "About Us":
//         return <AboutUsPage />;  
//       case "Help & Support":
//         return <HelpCenter />;
//       case "Delete Account":
//         return <DeleteAccountSection />
//       case "Wallet":
//         return <EarningsPage />;  

//       default:
//         return <ProfilePage />;
//     }
//   };

//   return (
//     <div className="flex min-h-screen w-full bg-white">
//       {/* Sidebar */}
//       <AccountSidebar
//         selectedSection={selectedSection}
//         setSelectedSection={(section) => {
//           setSelectedSection(section);

//           // ✅ Reset customer sub-view when re-opening
//           if (section === "Customer") {
//             setCustomerView("list");
//           }
//         }}
//         showSidebar={showSidebar}
//         setShowSidebar={setShowSidebar}
//       />

//       {/* Main content */}
//       <main className="flex-1 p-6">
//         {renderContent()}
//       </main>

//       {/* Mobile hamburger */}
//       <div className="md:hidden fixed top-4 left-4 z-50">
//         <button
//           className="bg-blue-600 text-white px-3 py-2 rounded-md"
//           onClick={() => setShowSidebar(!showSidebar)}
//         >
//           ☰
//         </button>
//       </div>
//     </div>
//   );
// }



import { Suspense } from "react";
import MyAccountPage from "./MyAccountClient";


export default function Page() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <MyAccountPage />
    </Suspense>
  );
}