"use client";

import Image from "next/image";
import { Bookmark, Strikethrough } from "lucide-react";
import Link from "next/link";
import { CiBookmark } from "react-icons/ci";


export default function ServiceCard({
  title,
  category,
  price,
  keyvalues,
  rating,
  image,
  totalreviews,
  discount,
  discountedprice,
  commission,
  slug,
  detailslug,
  isFavourite,
  onToggleFavourite,
}:any ) {
  return (
    <div
      // href={`/MainModules/Legal-Service/${slug}/${detailslug}`}
      className="block"
    >
      <div className="w-[350px] bg-[#F9F5EE] rounded-[12px] p-3 relative">

        {/* IMAGE */}
        <div className="relative h-[170px] rounded-[14px] overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />

          {/* Trusted Badge */}
          <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-md flex items-center gap-1 text-[11px] font-medium text-[#2164F4]">
            <img src="/image/security.png" alt="" className="w-[12px]" />
            Trusted
          </div>

          {/* Bookmark */}
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
          <h3 className="font-semibold text-[16px] leading-tight">
            {title}
          </h3>

          {/* TAGS */}
          <div className="flex gap-2 mt-2 justify-between">
            <span className="bg-white px-3 py-[3px] rounded-full text-[11px] text-[#868686]">
              {category}
            </span>
            <span className="bg-[#548AFE] px-3 py-[3px] rounded-full text-[11px] text-white">
              Earn Up to {commission}
            </span>
            {/* <span className="bg-[#6FFF84] px-3 py-[3px] rounded-full text-[11px] text-black">
              Discount 30%
            </span> */}
          </div>

          {/* FEATURES */}
          <div className="flex gap-4 text-[12px] text-[#232323] mt-3 justify-between">
            {keyvalues && keyvalues.length > 0 && (
  <ul className="flex flex-wrap gap-2 text-[12px] ">
    {keyvalues.slice(0, 3).map((item: any, index: number) => (
      <li key={index} className=" px-2 py-1 rounded flex items-center gap-1">
        <img src={item.icon} className="w-3 h-3" />

        {item.value}
      </li>
    ))}
  </ul>
)}

          </div>

          {/* RATING + PRICE */}
          <div className="flex justify-between mt-2 leading-6">
            <div>
              <p className="text-[10px] text-[#232323]">Reviews</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-[21px] ${
                      star <= rating ? "text-[#FBBD1D]" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-[#919191]">{totalreviews}+ Reviews</p>
            </div>

            <div className="  justify-items-end me-2">
              <p className="bg-[#BC9958] text-[#FFFFFF]  font-normal p-[2px] rounded-[3px]">{discount}% OFF</p>
              <p className="text-[11px] text-[#393737]">Starting from</p>
              <p className="font-semibold flex  text-[20px] gap-1 text-[#232323]">
                {/* <div> */}
                <span className="text-[16px] text-[#868686] me-2"><s>{price}</s></span>
                 <span>{discountedprice}</span>
                 {/* </div> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
