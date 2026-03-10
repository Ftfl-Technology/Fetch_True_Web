"use client";

import { ChevronLeft, Info, Clock } from "lucide-react";
import { FaWallet } from "react-icons/fa";

export default function Benefits() {
    return (
        <div className="min-h-screen bg-white p-4">

            {/* Header */}
            <div className="flex items-center gap-3 mb-6 lg:ml-10">
                <button onClick={() => window.history.back()}>
                    <ChevronLeft className="w-6 h-6 text-gray-700 cursor-pointer" />
                </button>
                <h1 className="text-[20px] font-semibold text-blue-600">Benefits</h1>
            </div>

            {/* Top Icons */}
            <div className="flex justify-between lg:w-[1200px] mx-auto text-center mb-6">

                <div className="flex flex-col items-center gap-2">
                    <div className="bg-blue-100 p-3 rounded-full">
                        <FaWallet className="text-blue-600 w-5 h-5" />
                    </div>
                    <p className="text-sm text-gray-600">
                        Up to 15% <br /> Revenue Share
                    </p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className="bg-blue-100 p-3 rounded-full">
                        <Info className="text-blue-600 w-5 h-5" />
                    </div>
                    <p className="text-sm text-gray-600">
                        Standard <br /> Template
                    </p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className="bg-blue-100 p-3 rounded-full">
                        <Clock className="text-blue-600 w-5 h-5" />
                    </div>
                    <p className="text-sm text-gray-600">
                        Support <br /> Within 3-6 hrs
                    </p>
                </div>

            </div>

            {/* Card */}
            <div className="border rounded-xl p-5 space-y-5 lg:w-[1200px] mx-auto">

                {/* Check Points */}
                <div className="space-y-3 text-[16px]">
                    <p>✅ Upto 15% Revenue Share</p>
                    <p>✅ Standard Template</p>
                    <p>✅ Support Within 3–6 hrs</p>
                </div>

                {/* Earnings */}
                <div>
                    <h3 className="font-semibold text-[17px] mb-1">
                        Assured Earnings Opportunity
                    </h3>

                    <p>*Earn ₹30,000 - ₹50,000</p>
                    <p>
                        *Scalable income - the more leads you convert, the higher your
                        earnings.
                    </p>
                </div>

                {/* Revenue Section */}
                <div>
                    <h3 className="font-semibold text-[17px] mb-2">
                        Revenue & Commission Structure
                    </h3>

                    <p className="mb-2">
                        Earn ₹5,000 for every franchise you successfully on-board.
                    </p>

                    <p className="mb-2">
                        Earn ₹3,000 when a franchise you onboarded brings in another
                        franchise.
                    </p>

                    <p>
                        Earn 5% to 15% revenue share on every successful lead conversion.
                    </p>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-semibold text-[17px] mb-2">Support:</h3>

                    <p className="mb-2">
                        3 – 6 hours response time for quick issue resolution
                    </p>

                    <p className="mb-2">
                        Full support system to help you succeed
                    </p>

                    <p>
                        Never feel stuck! Get expert guidance whenever you need it
                    </p>
                </div>

                {/* Why Choose */}
                <div>
                    <h3 className="font-semibold text-[17px] mb-3">Why choose ?</h3>

                    <div className="space-y-2">
                        <p>✅ High earnings potential</p>
                        <p>✅ Smart tools</p>
                        <p>✅ Wider business reach</p>
                        <p>✅ Revenue-based income</p>
                    </div>
                </div>

            </div>

        </div>
    );
}