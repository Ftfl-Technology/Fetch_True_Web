"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ChooseProvider({
  title,
  buttonColor = "bg-[#5B3527]",
  providers = [],
}: any) {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // ✅ Select first provider by default
  useEffect(() => {
    if (providers?.length) {
      setSelectedIndex(0);
    }
  }, [providers]);

  const visibleProviders = showAll
    ? providers
    : providers.slice(0, 1);

  return (
    <section className="w-full py-16">
      <div className="max-w-[1200px] mx-auto px-4">

        

        {/* ✅ If NO providers */}
        {providers.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4  rounded-[10px] p-6 bg-white">

            <Image
              src="/image/logo.png"   
              alt="FetchTrue"
              width={90}
              height={90}
            />

            <p className="text-[15px] lg:text-[18px] text-[#555] font-medium text-center">
              This service is provided by <span className="font-semibold text-blue-700">FetchTrue</span>
            </p>

          </div>
        ) : (
          <>
            {/* ✅ Provider list */}
            <div className="space-y-6">
              <h2 className="text-center text-[26px] md:text-[28px] font-semibold text-[#5A3A1B] mb-3">
          {title}
        </h2>

        <p className="text-center text-[14px] md:text-[16px] text-[#777] mb-10">
          Pick the right expert for your service
        </p>
              {visibleProviders.map((provider: any, index: number) => (
                <div
                  key={index}
                  className="bg-white border border-[#E2E2E2] rounded-[10px] p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
                >
                  
                  <div className="flex items-center gap-4">
                    <div className="relative shrink-0">
                      <Image
                        src={provider.logo}
                        alt={provider.name}
                        width={56}
                        height={56}
                        className="rounded-full mb-3"
                      />

                      {provider.promoted && (
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] bg-green-500 text-white px-2 py-[1px] rounded">
                          Promoted
                        </span>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-[16px] md:text-[18px] font-semibold">
                          {provider.name}
                        </h3>

                        {provider.available && (
                          <span className="text-[11px] bg-[#F1F1F1] px-2 py-[2px] rounded">
                            Available
                          </span>
                        )}
                      </div>

                      <p className="text-[13px] md:text-[14px] text-[#777] mt-1">
                        ⭐ {provider.rating} ({provider.reviews} reviews)
                      </p>
                    </div>
                  </div>

                  {/* ✅ Selection checkbox */}
                  <div
                    onClick={() =>
                      setSelectedIndex(
                        selectedIndex === index ? null : index
                      )
                    }
                    className={`cursor-pointer rounded w-6 h-6 flex items-center justify-center shrink-0 border
                    ${
                      selectedIndex === index
                        ? "bg-green-500 border-green-500 text-white"
                        : "border-gray-400 text-transparent"
                    }`}
                  >
                    ✓
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ Show button ONLY if more than 1 provider */}
            {providers.length > 1 && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setShowAll((prev) => !prev)}
                  className={`${buttonColor} text-white px-6 py-3 rounded-[8px] text-[15px] md:text-[16px] font-medium w-full sm:w-auto`}
                >
                  {showAll ? "Show Less" : "See all Providers"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}