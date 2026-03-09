"use client";

import { BsBookmark, BsGraphUpArrow } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaBookmark  } from "react-icons/fa";


interface Props {
  provider: any;
  isFavourite: boolean;
  onToggleFavourite: (id: string) => void;
}

export default function ProviderCard({
  provider,
  isFavourite,
  onToggleFavourite,
}: Props) {
  return (
    <div className="bg-white border border-[#BEBEBE] rounded-[12px] p-4 relative">

      {/* BOOKMARK */}
      <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavourite?.(provider._id);
                }}
                className="absolute top-2 right-2 bg-white  rounded-full p-1 shadow"
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

      {/* HEADER */}
      <div className="flex gap-3 mt-5">
        <img
          src={provider.storeInfo?.logo || "/image/profile.jpg"}
          alt="provider"
          className="w-14 h-14 rounded-full object-cover"
        />

        <div className="flex-1">
          <h3 className="font-semibold text-[16px]">
            {provider.storeInfo?.storeName || provider.fullName}
          </h3>

          <p className="text-[12px] text-[#868686]">
            {provider.storeInfo?.aboutUs}
          </p>

          <div className="mt-3 text-[11px] text-[#606060] space-y-1">
            <div className="flex justify-between">
              <p className="flex items-center gap-2">
                <FiPhone size={13} color="#2164F4" />
                {provider.phoneNo}
              </p>

              <p className="flex items-center gap-2">
                <FiMail size={13} color="#2164F4" />
                {provider.email}
              </p>
            </div>

            <p className="flex items-center gap-2">
              <MdLocationOn size={13} color="#2164F4" />
              {provider.storeInfo?.address}, {provider.storeInfo?.city}
            </p>
          </div>
        </div>
      </div>

      {/* CATEGORY */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-[12px] text-[#606060]">Services Category</p>

        <span
          className={`text-[12px] text-white px-3 py-1 rounded-full ${
            provider.isStoreOpen ? "bg-[#56B264]" : "bg-red-500"
          }`}
        >
          {provider.isStoreOpen ? "Available" : "Closed"}
        </span>
      </div>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2 mt-2">
        {provider.category_list?.map((service: string, index: number) => (
          <span
            key={index}
            className="text-[12px] bg-[#F0F5FF] px-3 py-1 rounded-full"
          >
            {service}
          </span>
        ))}
      </div>

      {/* ABOUT */}
      <div className="mt-4 text-[12px] text-[#606060]">
        <p>About Service</p>

        <div className="flex flex-wrap items-center gap-2">
          <CiClock2 size={12} color="#2164F4" />
          {provider.storeInfo?.totalExperience || 0}+ Years
          <span className="text-[10px]">- Experience</span>

          <span className="flex items-center gap-1">
            <FaStar className="text-[#D56839]" />
            {provider.averageRating} Rating
          </span>

          <span className="text-[10px]">
            - by {provider.totalReviews} reviews
          </span>
        </div>
      </div>

      {/* DETAILS */}
      <div className="mt-3">
        <p className="text-[12px] text-[#606060]">Services Details -</p>

        <div className="flex justify-between items-center text-xs text-gray-600 mt-1">
          <span className="flex items-center gap-1">
            <CiClock2 size={12} color="#2164F4" /> On Time
          </span>

          <span className="flex items-center gap-1">
            <BsGraphUpArrow size={12} color="#2164F4" /> Consistent
          </span>

          <span className="flex items-center gap-1">
            <VscWorkspaceTrusted size={12} color="#2164F4" /> Trusted
          </span>
        </div>
      </div>
    </div>
  );
}