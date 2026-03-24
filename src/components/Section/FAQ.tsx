"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQsProps {
  title?: string;
  items: FAQItem[];
}

export default function FAQs({
  title = "FAQs",
  items,
}: FAQsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-8">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Title */}
        <h2 className="text-[22px] lg:text-[36px] font-medium text-[#6E26CB] mb-6">
          {title}
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {items?.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-[#FFFFFF]  rounded-[8px] overflow-hidden transition-all"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-[15px] lg:text-[22px] font-medium text-[#606060]">
                     {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-[#7A7A7A] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-5 transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "max-h-[200px] pb-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[14px] lg:text-[18px] leading-[22px] text-[#6B6B6B]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
