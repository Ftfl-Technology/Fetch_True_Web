"use client";

import Link from "next/link";
import {
  FiArrowLeft,
  FiUser,
  FiHeart,
  FiCreditCard,
  FiGift,
  FiHelpCircle,
  FiBell,
  FiFileText,
  FiTrash2,
} from "react-icons/fi";

type Props = {
  user: any; // ✅ added
  selectedSection: string;
  setSelectedSection: (section: string) => void;
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
};

export default function AccountSidebar({
  user,
  selectedSection,
  setSelectedSection,
  showSidebar,
  setShowSidebar,
}: Props) {
  // ✅ Account Hub (restricted items hidden if no user)
  const accountHub = user
    ? [
        { name: "Profile", icon: FiUser },
        { name: "Favorite", icon: FiHeart },
        { name: "Wallet", icon: FiCreditCard },
        { name: "5X Guarantee", icon: FiGift },
        { name: "Coupon", icon: FiCreditCard },
        { name: "Provider", icon: FiGift },
        { name: "Customer", icon: FiGift },
      ]
    : [
        { name: "Profile", icon: FiUser }, // only visible when not logged in
      ];

  // ✅ App Info (filter Notification + Delete Account when not logged in)
  const appInfo = user
    ? [
        { name: "About Us", icon: FiFileText },
        { name: "Notification", icon: FiBell },
        { name: "Help & Support", icon: FiHelpCircle },
        { name: "Privacy & Policy", icon: FiFileText },
        { name: "Terms & Conditions", icon: FiBell },
        { name: "Refund Policy", icon: FiHelpCircle },
        { name: "Delete Account", icon: FiTrash2, danger: true },
      ]
    : [
        { name: "About Us", icon: FiFileText },
        { name: "Help & Support", icon: FiHelpCircle },
        { name: "Privacy & Policy", icon: FiFileText },
        { name: "Terms & Conditions", icon: FiBell },
        { name: "Refund Policy", icon: FiHelpCircle },
      ];

  return (
    <>
      <aside
        className={`fixed md:static top-0 left-0 h-full bg-white z-40
        w-[280px] px-5 py-6 transition-transform duration-300
        ${
          showSidebar
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Header */}
        <Link href="/" className="flex items-center gap-2 mb-8">
          <FiArrowLeft />
          <h1 className="font-semibold text-lg">My Account</h1>
        </Link>

        <nav className="space-y-8 text-sm">
          {/* ================= Account Hub ================= */}
          <div>
            <p className="text-[#232323] mb-4 text-[20px] font-medium">
              Account Hub
            </p>

            <ul className="space-y-5">
              {accountHub.map((item) => {
                const isActive = selectedSection === item.name;

                return (
                  <li
                    key={item.name}
                    onClick={() => {
                      setSelectedSection(item.name);
                      setShowSidebar(false);
                    }}
                    className={`flex items-center gap-2 text-[16px] cursor-pointer
                      ${
                        isActive
                          ? "text-blue-600 font-medium"
                          : "text-[#868686]"
                      }`}
                  >
                    <item.icon />
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ================= App Info ================= */}
          <div>
            <p className="text-[#232323] mb-4 text-[20px] font-medium">
              App Info
            </p>

            <ul className="space-y-5">
              {appInfo.map((item) => {
                const isActive = selectedSection === item.name;

                return (
                  <li
                    key={item.name}
                    onClick={() => {
                      setSelectedSection(item.name);
                      setShowSidebar(false);
                    }}
                    className={`flex items-center gap-2 text-[16px] cursor-pointer
                      ${
                        isActive
                          ? "text-blue-600 font-medium"
                          : item.danger
                          ? "text-red-500"
                          : "text-[#868686]"
                      }`}
                  >
                    <item.icon />
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </aside>

      {/* Overlay (Mobile) */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}
    </>
  );
}