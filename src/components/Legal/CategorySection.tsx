"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useModule } from "@/src/context/CategoriesContext";
import { useEffect } from "react";


export default function CategorySection() {

  const { categories, fetchCategoriesByModule, loading, error } = useModule();
  const { moduleId } = useParams<{ moduleId: string }>();

  useEffect(()=>{
    if(!moduleId) return;
    fetchCategoriesByModule(moduleId);
  },[moduleId]);


    if (loading) return <p>Loading categories...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="w-full bg-[#F9F5EE] rounded-[15px] mx-auto">

      {/* INNER CONTAINER */}
      <section
        className="
          w-full
          max-w-[1440px]
          mx-auto
          p-4 sm:p-6
          
          mb-10
          flex flex-col gap-5
        "
      >
        {/* HEADING */}
        <h2 className="font-inter font-semibold text-[20px] sm:text-[22px] lg:text-[24px] leading-[36px] text-black">
          Category
        </h2>

        {/* CARD ROW */}
        <div
          className="
            flex gap-4 sm:gap-5
            overflow-x-auto
            scrollbar-hide
            snap-x snap-mandatory
            touch-pan-x
          "
        >
          {categories.map((item) => (
            <Link
              key={item._id}
                href={`/MainModules/Legal-Services/${moduleId}/${item._id}`}
              className="snap-start"
            >
              <div
  className="
    w-[140px] sm:w-[146px]
    h-[160px] sm:h-[166px]
    rounded-[14.65px]
    bg-white
    flex flex-col
    items-center
    justify-between
    py-4
    flex-shrink-0
    cursor-pointer
    hover:shadow-md
    transition
  "
>
  {/* IMAGE */}
  <div className="flex items-center justify-center h-[90px] mt-4">
    <Image
      src={item.image}
      alt={item.name}
      width={120}
      height={80}
      className="object-contain"
    />
  </div>

  {/* TITLE */}
  <h3 className="text-center text-[14px] sm:text-[15px] lg:text-[16px] font-medium px-2 leading-tight">
    {item.name}
  </h3>
</div>

            </Link>
          ))}
        </div>
      </section>

      {/* LEGAL EXPERTS */}
      {/* <LegalExpertsSection /> */}
    </div>
  );
}
