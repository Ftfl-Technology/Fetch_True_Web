"use client";

import { FaStar } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";

// interface MarketingCardProps {
//   image: string;
//   title: string;
//   category: string;
//   mode?:string;
//   price: number | string;
//   rating: number;
//   reviews?: string;
//   discount: string;
//   earnLabel?: string;
//   keyvalues?:string;
//   totalreviews:string;
//   discountedprice:string;
//   commission:string;
//   isFavourite: boolean;
// onToggleFavourite: () => void;
// }

export default function MarketingCard({
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
  isFavourite,
  onToggleFavourite,
  mode
}: any) {
  return (
    <div
      className="
        min-w-[300px]
        lg:w-[350px]
        h-[390px]
        bg-white
        border
        border-[#DCDCDC]
        rounded-xl
        overflow-hidden
      "
    >
      {/* IMAGE */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="
            h-[160px]
            sm:h-[180px]
            lg:h-[193px]
            w-full
            object-cover
            p-2
            rounded-xl
          "
        />

        {/* CHECK ICON */}
        <div className="absolute top-3 left-3 bg-white border rounded w-5 h-5 flex items-center justify-center">
          <VscWorkspaceTrusted className="text-blue-600 text-xs" />
        </div>


        {/* BOOKMARK */}
        <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onToggleFavourite();
                    }}
                   className="absolute top-3 right-3 bg-white  rounded-full p-1 shadow"
                       
                   >
                     <FaBookmark 
                                 size={16}
                                 className={`transition ${
                                   isFavourite
                                     ? "text-red-500 fill-red-500"
                                     : "text-gray-400"
                                 }`}
                               />
                  </button>
      </div>

      {/* CONTENT */}
      <div className="px-3 sm:px-4">
        <div className="flex items-start justify-between">
          <div className=" ">
            <h3 className="text-[15px] sm:text-[16px] font-semibold">
              {title}
            </h3>
            <div className="flex gap-2">
            <p className="text-[11px] sm:text-[12px] text-center text-[#232323] mb-2 mt-1 bg-[#EFF4FF]  rounded-[9px] px-2 ">
              {category}
            </p>
            {/* <p className="text-[11px] sm:text-[12px] text-center text-[#232323] mb-5 mt-1 bg-[#EFF4FF]  rounded-[9px] ">
              {mode}
            </p> */}
            </div>
          </div>

          {/* EARN TAG */}
          <span className="inline-block text-[10px] sm:text-[11px] text-white bg-[#548AFE] px-2 py-1 rounded-[6px] mb-3 whitespace-nowrap">
            Earn Up to {commission}
          </span>
        </div>



        {/* FEATURES */}
          <div className="flex gap-4 text-[12px] text-[#232323]  justify-between">
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

            <div className="  justify-items-end  bg-blue-50 rounded px-2 py-1">
              {/* <p className="bg-[#ccc9c4] text-[#FFFFFF]  font-normal p-[2px] rounded-[3px]">{discount}% OFF</p> */}
              <p className="text-[11px] text-[#393737]">Starting from</p>
              <p className="font-semibold flex  text-[20px] gap-1 text-[#232323]"> ₹{discountedprice}  </p>
              
                <div className="flex gap-2">
                 <span className="text-[16px] text-[#868686] "><s>₹{price}</s></span>
                  <span className="text-[12px]"> ({discount}%off)</span>
                 </div>
            
            </div>
          </div>
      </div>
    </div>
  );
}
