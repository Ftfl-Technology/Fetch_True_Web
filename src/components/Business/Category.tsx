"use client";

import { useModule } from "@/src/context/CategoriesContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";




export default function Category(){

      const { categories, fetchCategoriesByModule, loading, error } = useModule();
    const { moduleId } = useParams<{ moduleId: string }>();
    
    
    
     useEffect(() => {
      if (!moduleId) return;
      fetchCategoriesByModule(moduleId);
    }, [moduleId]);
    
    
    
    
      if (loading) return <p>Loading categories...</p>;
      if (error) return <p className="text-red-500">{error}</p>;

        return(
        <>
           <section className="w-full bg-white pt-10  lg:pt-12">
  <div className="max-w-[1440px] mx-auto px-4">

    {/* TITLE */}
    <h2 className="text-[30px] font-semibold text-[#1D4699] ">
      Category
    </h2>

    {/* CATEGORY LIST */}
    <div
      className="
        relative
        flex
        gap-10
        overflow-x-auto
        overflow-y-visible
        scrollbar-hide
        pb-8
        pt-12
      "
    >
      {categories.map((item) => (
        <Link 
        key={item._id}
        href={`/MainModules/Business/${moduleId}/${item._id}`} 
         className="flex-shrink-0">
        <div
          className="
            relative
            min-w-[180px]
            h-[120px]
            bg-white
            rounded-[12px]
            border
            border-[#F1F1F1]
            shadow-[0px_4px_12px_rgba(0,0,0,0.06)]
            px-4
            pt-10
            pb-4
            flex-shrink-0
            overflow-visible
          "
        >
          {/* MAIN IMAGE – TOP RIGHT (OUTSIDE CARD) */}
          <img
            src={item.image}
            alt={item.name}
            className="
              absolute
              -top-10
              -right-9
              w-[90px]
              h-[90px]
              object-contain
              z-30
              pointer-events-none
            "
          />

          {/* BOTTOM CONTENT */}
          <div className="absolute bottom-4 left-3 right-3 flex items-end justify-between">
            <p className="text-[16px] font-normal text-black leading-tight max-w-[90px]">
              {item.name}
            </p>

            <img
              src="/image/Group 1000004004 (1).png"
              alt=""
              className="w-[50px] h-[50px] "
            />
          </div>
        </div>
        </Link>
      ))}
    </div>

  </div>
</section>
          
        </>
    )
}