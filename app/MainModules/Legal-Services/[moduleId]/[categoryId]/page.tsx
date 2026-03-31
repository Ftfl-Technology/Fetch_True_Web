"use client";

import ExploreAllServices from "@/src/components/Legal/ExploreAllServices";

import Image from "next/image";
import { useRef,useEffect, useState } from "react";
import { Search,Bookmark } from "lucide-react";
import Link from "next/link";
import RecommendedForYou from "@/src/components/LegalCategories/RecommendedForYou";
import { useParams } from "next/navigation";
import { useModule } from "@/src/context/CategoriesContext";
import MostlyPopularService from "@/src/components/LegalCategories/MostPopular";
import TopTrending from "@/src/components/LegalCategories/TopTrending";
import AllServices from "@/src/components/LegalCategories/AllServices";
import {  useSubCategory } from "@/src/context/SubCategoriesContext";
import SearchBar from "@/src/components/SearchBar/Search";


export default function LegalSubCategoryServiceDetailPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);
const { categories,fetchCategoriesByModule } = useModule();
const [currentCategory, setCurrentCategory] = useState<any>(null);
const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

 

  const { moduleId,categoryId } = useParams<{
    moduleId:string;
    categoryId:string;
  }>();

   const {
        subCategories,
        error,
        fetchSubCategories,
      } = useSubCategory();

  
      /* 🔥 FETCH SUB-CATEGORIES */

     useEffect(() => {
  if (moduleId) {
    fetchCategoriesByModule(moduleId);
  }
}, [moduleId]);

  console.log("Category ID IN CLIENT subcategoryPage:", categoryId);

    // const { moduleId} = useParams();
      console.log(moduleId, categoryId);


    useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      slider.scrollLeft += 1;

      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  if (categories?.length && categoryId) {
    const cat = categories.find(
      (c: any) => c._id === categoryId
    );
    setCurrentCategory(cat);
  }
}, [categories, categoryId]);

  useEffect(() => {
  if (categoryId) {
    fetchSubCategories(categoryId);
  }
}, [categoryId]);


useEffect(() => {
  if (subCategories?.length && !selectedSubCategory) {
    setSelectedSubCategory(subCategories[0]._id);
  }
}, [subCategories]);




 


  return (
    <>
      <section className="flex justify-center ">
      {/* NAVBAR */}
      <div
        className="
          w-full
          h-[60px]
          bg-[#F9F5EE]
          flex
          items-center
          justify-between
          px-4 sm:px-6
          lg:px-10
        "
      >
        {/* LEFT SIDE */}
        <div className="flex items-center gap-6">
        

          {/* Back Icon */}
          <Link href={`/MainModules/Legal-Services/${moduleId}`}>
          <img
            src="/image/Vector (1).png"
            alt="Back Icon"
            className="text-black hidden lg:block"    
          />
          </Link>

          {/* Title */}
          <h1
            className="
              font-inter
              font-semibold
              lg:text-[22px]
              text-black
            "
          > 
            {currentCategory?.name}
          </h1>
        </div>

        {/* RIGHT SIDE */}
      <div className="flex items-center gap-8">
            {/* SEARCH */}
            <SearchBar
                            value={searchQuery}
                            onChange={setSearchQuery}
                            placeholder="Search" 
                          />

            <Link href="/Account/MyAccount?section=Favorite">
            <Bookmark  className="w-8 h-8" color="#A3623A"/>
            </Link>
          </div>
      </div>

      
      </section>
      
      <div className="">
                      {error && <p className="ml-6 text-red-500">{error}</p>}
                      <div
                         
                          className="flex gap-6 px-6 py-6 overflow-x-auto no-scrollbar cursor-grab"
                      >
                         {subCategories.map((item, index) => (
                                     <div key={item._id} className="flex items-center gap-[24px]">
                                       <button
                                         onClick={() => setSelectedSubCategory(item._id)}
                         
                                         className={`
                                           flex flex-col items-center justify-center
                                           min-w-[140px] h-[120px] ml-5
                                           rounded-[8px] transition
                                           ${
                           selectedSubCategory === item._id
                             ? "bg-[#EDEEEF]"
                             : "bg-transparent hover:bg-[#EAEBED]"
                         }
                         
                                         `}
                                       >
                                         <Image
                                           src={item.image}
                                           alt={item.name}
                                           width={81}
                                           height={60}
                                           className="object-contain ml-14"
                                         />
                         
                                         <p className="mt-2 mr-10 text-[16px] font-medium text-[#232323] leading-tight text-left whitespace-pre-line">
                                           {item.name}
                                         </p>
                                       </button>
                         
                                       {index !== subCategories.length - 1 && (
                                         <div className="h-[60px] w-[1px] bg-[#D9D9D9]" />
                                       )}
                                     </div>
                                   ))}
                      </div>
                  </div>
  

      <AllServices categoryId={categoryId} moduleId={moduleId} selectedSubCategory={selectedSubCategory} searchQuery={searchQuery}/>
      {/* <RecommendedForYou categoryId={categoryId} moduleId={moduleId}/>
      <MostlyPopularService categoryId={categoryId} moduleId={moduleId}/>
      <TopTrending categoryId={categoryId} moduleId={moduleId}/> */}
    </>
  );
};

