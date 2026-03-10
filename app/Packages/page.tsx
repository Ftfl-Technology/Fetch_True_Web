'use client';

import { useState } from "react";
import GPComponent from "@/src/components/Packages/GPComponent";
import PGPComponent from "@/src/components/Packages/PGPComponent";
import SGPComponent from "@/src/components/Packages/SGPComponent";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PackagesMain() {
    const [activeTab, setActiveTab] = useState("GP");

   const renderComponent = () => {
    switch (activeTab) {
        case "GP":
            return <GPComponent setActiveTab={setActiveTab} />;
        case "SGP":
            return <SGPComponent  />;
        case "PGP":
            return <PGPComponent />;
        default:
            return <GPComponent setActiveTab={setActiveTab} />;
    }
};


    return (
        <>
            <div className="bg-gray-50">
                <div className="min-h-screen p-4 lg:w-[1400px] mx-auto">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-4 text-gray-700 font-medium">
                        <Link href="/" className="flex items-center gap-2">
                            <ChevronLeft className="w-[28px] h-[28px] text-black cursor-pointer bg-white rounded-full p-1 shrink-0" />
                            <span className="text-black">Packages</span>
                        </Link>
                    </div>


                    {/* Tabs */}
                    <div className="bg-white rounded-xl p-1 flex mb-4 shadow-sm">
                        {["GP", "SGP", "PGP"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-1 py-2 rounded-lg text-[12px] md:text-[18px] lg:text-[24px] cursor-pointer font-semibold transition ${activeTab === tab
                                    ? "bg-green-50 text-blue-600 border border-green-200"
                                    : "text-gray-500"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Dynamic Component Render */}
                    <div>{renderComponent()}</div>
                </div>
            </div>
        </>
    );
}
