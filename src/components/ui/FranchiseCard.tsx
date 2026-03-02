"use client";

import { FaStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import Image from "next/image";

interface RecommendedCardProps {
  image: string;
  title: string;
  category: string;
  rating: number;
  earning: string;
  discount: string;
  monthly: string;
  parameter:string;
  investment: string;
  area: string;
  bgImage?: string; 

  // isFavourite: boolean;
  // onToggleFavourite: () => void;
}

export default function RecommendedCard({
  image,
  title,
  category,
  rating,
  earning,
  discount,
  monthly,
  parameter,
  investment,
  area,
  bgImage = "/image/recommendedrealestate.png",

  // isFavourite,
  // onToggleFavourite,
}: RecommendedCardProps) {
  return (
    <div
      className="relative w-[300px] h-[300px] rounded-[13px] border border-[#E6E6E6] shadow-sm overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage}) `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
      {/* OVERLAY */}
      {/* <div className="absolute inset-0 opacity-20"></div> */}

      {/* CONTENT WRAPPER */}
      <div className="relative p-3 bg-transparent">
        {/* IMAGE */}
        <div className="relative w-full h-[150px] rounded-[10px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />

          <div className="absolute top-2 left-2 bg-white border border-[#E6E6E6] rounded-[4.26px] p-1 flex items-center">
            <VscWorkspaceTrusted size={10.48} color="#2164F4" />
          </div>

          {/* BOOKMARK/Favourite */}
          <div className="absolute top-2 right-2 w-[24px] h-[24px] bg-black rounded-full flex items-center justify-center">
            <CiBookmark size={14} color="#fff" />
          </div>
          <button
            // onClick={(e) => {
            //   e.preventDefault(); // prevent Link navigation
            //   onToggleFavourite();
            // }}
            // className={`absolute top-2 right-2 w-[24px] h-[24px] rounded-full flex items-center justify-center transition
            //   ${isFavourite ? "bg-red-500" : "bg-black"}`}
          >
            <CiBookmark size={14} color="#fff" />
          </button>

          {/* RATING */}
          <div className="absolute bottom-0 right-0 flex items-center gap-1 bg-white px-2 py-[2px] rounded-md">
            <FaStar size={17} color="#FBBF24" />
            <span className="text-[14px] font-medium">{rating}</span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-[15px] font-semibold leading-tight">
                {title}
              </h3>
              <p className="text-[12px] text-gray-400">{category}</p>
            </div>

            {/* BADGES */}
            <div className="flex flex-col items-end gap-1 text-[10px] ">
              <span className="text-white bg-[#548AFE] rounded-[4px] w-[75px] h-[19px] text-center py-0.5">
                Earn Upto {earning}
              </span>
              {/* <span className="bg-[#76FF8B] text-[#232323] px-2 py-[2px] rounded">
                Discount {discount}
              </span> */}
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 text-center mt-2">
            <div>
              <p className="text-[14px] font-semibold">{monthly} {parameter}</p>
              <p className="text-[12px] text-gray-400">Monthly Earning</p>
            </div>

            <div className="border-x border-[#BBBBBB]">
              <p className="text-[14px] font-semibold">{investment} {parameter}</p>
              <p className="text-[12px] text-gray-400">Investment Range</p>
            </div>

            <div>
              <p className="text-[14px] font-semibold">{area}</p>
              <p className="text-[11px] text-gray-400">Area Required</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
