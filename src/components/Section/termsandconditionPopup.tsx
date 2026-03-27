"use client";

import { useEffect } from "react";

interface TermsConditionsModalProps {
  onClose: () => void;
  heading?: string;
  html: string;
}

export default function TermsConditionsModal({
  onClose,
  heading = "Terms & Conditions",
  html,
}: TermsConditionsModalProps) {
  /* Close modal using ESC key */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white w-[95%] max-w-[900px] max-h-[90vh] rounded-xl shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-[22px] font-semibold text-[#2164F4]">
            {heading}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto max-h-[75vh]">
          <div
            className="text-[#6B6B6B] text-[15px] leading-[24px]"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  );
}