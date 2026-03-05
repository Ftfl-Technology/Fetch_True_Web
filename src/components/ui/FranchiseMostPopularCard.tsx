"use client";

import { FaStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import Image from "next/image";

interface MostPopularCardProps {
  image: string;
  title: string;
  category: string;
  rating: number;
  earning: string;
  discount: string;
  monthly: string;
  investment: string;
  area: string;
  bg: string;
  isFavourite: boolean;
onToggleFavourite: () => void;
}

export default function FranchiseMostPopularCard({
  image,
  title,
  category,
  rating,
  earning,
  discount,
  monthly,
  investment,
  area,
  bg,
  isFavourite,
  onToggleFavourite,
}: MostPopularCardProps) {
  return (
    <div className={`w-[338px] h-[340px] rounded-[16px] p-3 text-white ${bg}`}>
      {/* IMAGE */}
      <div className="relative w-full h-[150px] rounded-[12px] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />

        <div className="absolute top-2 left-2 bg-white border border-[#E6E6E6] rounded p-1">
          <VscWorkspaceTrusted size={11} color="#2164F4" />
        </div>

        <button
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavourite();
  }}
  className={`absolute top-2 right-2 w-[24px] h-[24px] rounded-full flex items-center justify-center
    ${isFavourite ? "bg-red-500" : "bg-black"}`}
>
  <CiBookmark size={14} color="#fff" />
</button>
      </div>

      {/* CONTENT */}
      <div className="mt-3">
        <div className="flex justify-between gap-2">
          <div>
            <h3 className="text-[15px] font-semibold">{title}</h3>
            <p className="text-[12px] opacity-90">{category}</p>

            {/* RATING */}
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={12}
                  color={i < rating ? "#FFD700" : "#D1D5DB"}
                />
              ))}
              <span className="text-[11px] ml-1">{rating}.0</span>
            </div>
          </div>

          {/* BADGES */}
          <div className="flex flex-col gap-2 mt-2">
            <span className="bg-[#6FA8FF] text-[11px] px-2 py-[2px] rounded">
              Earn Upto {earning}
            </span>
            {/* <span className="bg-[#7CFF9B] text-[11px] text-green-900 px-2 py-[2px] rounded">
              Discount {discount}
            </span> */}
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-2 text-center text-[11px] mt-4 p-3 bg-[#FFFFFF30] border border-white/30 rounded-[15px]">
          <div>
            <p className="font-semibold">{monthly}</p>
            <p className="opacity-80">Monthly Earning</p>
          </div>

          <div className="border-x border-white/30">
            <p className="font-semibold">{investment}</p>
            <p className="opacity-80">Investment</p>
          </div>

          <div>
            <p className="font-semibold">{area}</p>
            <p className="opacity-80">Area</p>
          </div>
        </div>
      </div>
    </div>
  );
}