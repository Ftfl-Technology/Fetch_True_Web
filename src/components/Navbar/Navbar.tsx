// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Bell, Users, Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useParams, usePathname } from "next/navigation";
// import { useUser } from "@/src/context/UserContext";

// export default function Navbar() {
//   const { userId } = useParams<{ userId: string }>();
//   const { user, fetchUser } = useUser();

//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     if (userId && user?.userId !== userId) {
//       fetchUser(userId);
//     }
//   }, [userId, user, fetchUser]);

//   const navItems = [
//     { label: "Home", href: "/" },
//     { label: "Offers", href: "/Offers" },
//     { label: "Academy", href: "/Academy" },
//     {
//       label: "Account",
//       href: "/Account"
//     },
//     { label: "Packages", href: "/packages" },
//   ];

//   return (
//     <header className="w-full bg-white border-b sticky top-0 z-50">
//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-[80px] lg:h-[100px] flex items-center justify-between">

//         {/* LEFT */}
//         <div className="flex items-center gap-4 lg:gap-6">
//           <Link href="/">
//             <Image
//               src="/image/logo.png"
//               alt="Fetch True"
//               width={74}
//               height={51}
//               className="w-[60px] lg:w-[74px]"
//             />
//           </Link>

//           <div className="relative hidden md:block">
//             <input
//               type="text"
//               placeholder="Service name"
//               className="w-[229px] h-[40px] pl-10 pr-4 rounded-full border border-[#E5E5E5] text-sm outline-none"
//             />
//           </div>
//         </div>

//         {/* CENTER */}
//         <nav className="hidden lg:flex items-center gap-8 text-[16px] font-medium">
//           {navItems.map((item) => {
//             const isActive =
//               item.href === "/"
//                 ? pathname === "/"
//                 : pathname.startsWith(item.href);

//             return (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className={`relative ${
//                   isActive
//                     ? "text-[#2164F4] font-semibold"
//                     : "text-[#6B6969]"
//                 }`}
//               >
//                 {item.label}
//                 {isActive && (
//                   <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#2164F4]" />
//                 )}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* RIGHT */}
//         <div className="flex items-center gap-3 sm:gap-4">
//           <Link
//             href="/Login"
//             className="hidden sm:flex items-center justify-center px-6 w-[108px] h-[36px] bg-[#262627] text-white rounded-full text-sm"
//           >
//             Login
//           </Link>

//           <Users size={18} className="cursor-pointer" />
//           <Bell size={18} className="cursor-pointer" />

//           <button className="lg:hidden" onClick={() => setOpen(!open)}>
//             {open ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  Users,
  Menu,
  X,
  Home,
  Tag,
  GraduationCap,
  User,
  Package
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { useUser } from "@/src/context/UserContext";
import { useAuth } from "@/src/context/AuthContext";
import { ServiceCustomerProvider } from "@/src/context/ServiceCustomerContext";
import SearchBar from "../SearchBar/Search";

export default function Navbar({ searchQuery,setSearchQuery }:any) {
  // const { userId } = useParams<{ userId: string }>();
const { user, logout} = useAuth();

  const [open, setOpen] = useState(false);
  const pathname = usePathname();
 


  // useEffect(() => {
  //   if (userId && user?.userId !== userId) {
  //     fetchUser(userId);
  //   }
  // }, [userId, user, fetchUser]);

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Offers", href: "/Offers", icon: Tag },
    { label: "Academy", href: "/Academy", icon: GraduationCap },
    { label: "Account", href: "/Account", icon: User },
    { label: "Packages", href: "/Packages/", icon: Package },
  ];

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-[70px] lg:h-[90px] flex items-center justify-between">
        
        {/* LEFT */}
        <div className="flex items-center gap-3 lg:gap-6">
          <Link href="/">
            <Image
              src="/image/logo.png"
              alt="Fetch True"
              width={74}
              height={51}
              className="w-[52px] lg:w-[70px]"
            />
          </Link>

          {/* Search */}
          <div className="relative hidden md:block">
            {/* <input
              type="text"
              placeholder="Service name"
              className="w-[200px] lg:w-[230px] h-[38px] pl-10 pr-4 rounded-full border border-gray-200 text-sm outline-none"
            /> */}
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search services" 
              />
          </div>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative ${
                  isActive
                    ? "text-[#2164F4] font-semibold"
                    : "text-gray-600"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#2164F4]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Login / Logout (Desktop) */}
          {user ? (
            <button
              onClick={logout}
              className="hidden sm:flex items-center justify-center px-5 h-[34px] bg-red-500 text-white rounded-full text-sm"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/Login"
              className="hidden sm:flex items-center justify-center px-5 h-[34px] bg-black text-white rounded-full text-sm"
            >
              Login
            </Link>
          )}

          <Users size={18} className="cursor-pointer" />
          <Bell size={18} className="cursor-pointer" />

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* ✅ BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* ✅ RIGHT DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[260px] bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-4 h-[70px] border-b">
          <span className="font-semibold text-gray-800">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* Drawer Menu */}
        <nav className="flex flex-col px-4 py-4 space-y-2">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 h-[42px] rounded-lg text-sm transition ${
                  isActive
                    ? "bg-[#2164F4]/10 text-[#2164F4] font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}

          {/* Login / Logout (Mobile) */}
          {user ? (
            <button
              onClick={() => {
                logout();
                setOpen(false);
              }}
              className="mt-4 flex items-center justify-center h-[38px] bg-red-500 text-white rounded-full text-sm"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/Login"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center h-[38px] bg-black text-white rounded-full text-sm"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}


