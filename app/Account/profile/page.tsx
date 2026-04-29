"use client";

import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { useUser } from "@/src/context/UserContext";
import CompleteProfile from "@/src/components/Account/Profile/CompleteProfile";
import AddAddress from "@/src/components/Account/Profile/AddAddress";
import BankKYC from "@/src/components/Account/Profile/BankKYC";
import { useLeads } from "@/src/context/LeadsContext";
import { useWallet } from "@/src/context/WalletContext";
import Link from "next/link";

export default function ProfileSection() {
  const { user, loading, error } = useUser();
  const { leads } = useLeads();
  const { wallet } = useWallet();

  const [activeSection, setActiveSection] = useState<string | null>(null);

  // ✅ Stats
  const totalEarnings = wallet?.totalCredits || 0;
  const completedLeads =
    leads?.filter((lead) => lead.isCompleted).length || 0;

  // ✅ Show accordions ONLY if user exists
  const accordions = user
    ? ["Complete Profile", "Add Your Address", "Bank KYC"]
    : [];

  // ✅ Section renderer (extra safety)
  const renderSection = () => {
    if (!user) return null;

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

      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex justify-between items-start w-full lg:w-[683px]">
          <div className="flex gap-6">
            {/* Profile Image */}
            <div className="relative w-[90px] h-[90px] md:w-[100px] md:h-[100px]">
              <img
                src={user?.profilePhoto || "/image/profile1.jpg"}
                alt={user?.fullName || "User"}
                className="rounded-full object-cover w-full h-full"
              />
              {user && (
                <button className="absolute bottom-0 right-0 bg-white border rounded-full p-1">
                  <FiPlus size={14} />
                </button>
              )}
            </div>

            {/* User Info */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-[#232323]">
                {user?.fullName || "Guest User"}
              </h2>

              <p className="text-[#606060] text-sm">
                {user?.email || "--"}
              </p>

              <p className="text-xs text-[#606060]">
                ID: {user?.userId || "--"}
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
                    {user ? completedLeads : 0}
                  </p>
                  <p className="text-[#232323] text-[14px]">
                    Lead Completed
                  </p>
                </div>

                <div>
                  <p className="text-blue-600 text-[18px] font-semibold">
                    {user ? totalEarnings : 0}
                  </p>
                  <p className="text-[#232323] text-[14px]">
                    Total Earning
                  </p>
                </div>
              </div>

              {/* Button */}
              {user && (
                <Link href="/Packages">
                  <button className="mt-3 w-full md:w-[525px] bg-blue-600 text-white px-6 py-2 rounded-md text-sm">
                    Track Packages
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= NOT LOGGED IN MESSAGE ================= */}
      {!user && (
        <div className="mt-10 text-center text-gray-500">
          Please login to access profile options
        </div>
      )}

      {/* ================= ACCORDIONS ================= */}
      {user && (
        <div className="mt-10 space-y-4">
          {accordions.map((item) => {
            const isActive = activeSection === item;

            return (
              <div key={item} className="rounded-lg border">
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
      )}
    </main>
  );
}