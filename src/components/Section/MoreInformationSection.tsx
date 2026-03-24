"use client";

import { useState } from "react";
import Image from "next/image";

interface CardData {
  title: string;
  description: string;
  image: string;
}

interface MoreInformationProps {
  title?: string;
  cards: CardData[];
}

export default function MoreInformation({
  title = "More Information",
  cards,
}: MoreInformationProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-0 lg:py-8">
      <div className="max-w-[1347px] mx-auto px-3 md:px-12">
        {/* Title */}
        <h2 className="text-center text-[28px] md:text-[36px] font-medium text-[#2164F4] mb-10">
          {title}
        </h2>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-5">
          {cards?.map((card, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  relative rounded-[18px] overflow-hidden
                  transition-all duration-500 ease-in-out
                  
                  /* Desktop */
                  md:h-[470px]
                  ${isActive ? "md:w-[640px]" : "md:w-[180px]"}
                  
                  /* Mobile */
                  w-full
                  ${isActive ? "h-[300px]" : "h-[120px]"}
                `}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div
                  className={`
                    absolute inset-0 transition-all duration-500
                    ${isActive ? "bg-black/55" : "bg-black/45"}
                  `}
                />

                {/* Content */}
                <div
                  className={`
                    absolute inset-0 p-6 md:p-8 text-left
                    transition-all duration-500
                    ${isActive ? "opacity-100" : "opacity-0"}
                  `}
                >
                  <h3 className="text-white text-[26px] md:text-[38px] font-medium mb-3">
                    {card.title}
                  </h3>
                  <p className="text-white text-[16px] md:text-[22px] leading-[26px] md:leading-[34px] max-w-[450px]">
                    {card.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
