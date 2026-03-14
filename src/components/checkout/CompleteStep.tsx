



'use client';

import { Check } from "lucide-react";

type Props = {
    bookingId?: string;
    createdAt?: string;
};

export default function CompleteStep({ bookingId, createdAt }: Props) {

  console.log("CompleteStep Props:", { bookingId, createdAt });

  
    const formatDate = () => {
        const date = new Date(); // ← current browser time, always correct

        const day = date.toLocaleDateString("en-IN", { day: "2-digit", timeZone: "Asia/Kolkata" });
        const month = date.toLocaleDateString("en-IN", { month: "short", timeZone: "Asia/Kolkata" });
        const year = date.toLocaleDateString("en-IN", { year: "numeric", timeZone: "Asia/Kolkata" });
        const time = date.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            timeZone: "Asia/Kolkata",
        });

        return `${day} ${month} ${year} - ${time.toUpperCase()}`;
    };

   

    return (
        <section className="w-full flex items-center justify-center py-12">
            <div className="flex flex-col items-center text-center gap-6">

                {/* SUCCESS ICON */}
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="text-white w-7 h-7 stroke-[3]" />
                </div>

                {/* TITLE */}
                <h2 className="text-[24px] md:text-[32px] font-semibold text-blue-600">
                    Your Lead has been Successfully placed
                </h2>

                {/* SUBTITLE */}
                <p className="text-[16px] md:text-[24px] text-gray-500">
                    Thank you for your order with us
                </p>

                {/* DETAILS */}
                <div className="mt-6 space-y-3 text-gray-600">
                    <div className="flex gap-26">
                        <span className="text-[14px] md:text-[20px] w-24 text-right">Lead ID</span>
                        <span className="text-[16px] md:text-[24px] font-medium text-gray-800">
                            {bookingId ?? "—"}  
                        </span>
                    </div>

                    <div className="flex gap-10 md:gap-26 items-center">
                        <span className="text-[14px] md:text-[20px] w-24 text-right whitespace-nowrap">
                            Date & Time
                        </span>
                        <span className="text-[16px] md:text-[24px] font-medium text-gray-800">
                            {formatDate()} 
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}