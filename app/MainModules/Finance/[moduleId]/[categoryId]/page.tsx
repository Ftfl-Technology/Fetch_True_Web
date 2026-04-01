"use client";
import { useEffect, useState } from "react";

import BestSellingSection from "@/src/components/Finance/BestSelling";
import CostEfficientSection from "@/src/components/Finance/CostEfficient";
import MostSearches from "@/src/components/Finance/MostSearches";
import RecentlyAddedSection from "@/src/components/Finance/RecentlyAdded";
import RecommendedSection from "@/src/components/Finance/RecommendedSection";
import Recommended from "@/src/components/FinanceCategories/Recommended";
import { useParams } from "next/navigation";
import { useSubCategory } from "@/src/context/SubCategoriesContext";
import MostPopular from "@/src/components/FinanceCategories/MostPopular";
import TopTrending from "@/src/components/FinanceCategories/TopTrending";
import AllServices from "@/src/components/FinanceCategories/AllServices";
import Link from "next/link";
import { useModule } from "@/src/context/CategoriesContext";
import { Bookmark } from "lucide-react";
import SearchBar from "@/src/components/SearchBar/Search";

// const tabs = [
//   { id: "saving", label: "Saving", icon: "💰" },
//   { id: "bank", label: "Bank Account", icon: "🏦" },
//   { id: "wealth", label: "Wealth Management", icon: "📊" },
//   { id: "retirement", label: "Retirement", icon: "👴" },
// ];

export default function FinanceCategoryDetailPage() {
  const [active, setActive] = useState<string>("");
const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
const [currentCategory, setCurrentCategory] = useState<any>(null);
    const { categories,fetchCategoriesByModule } = useModule();
      const [searchQuery, setSearchQuery] = useState("");


  
   
   const { moduleId, categoryId } = useParams<{
  moduleId: string;
  categoryId: string;
}>();

  /* 🔥 FETCH SUB-CATEGORIES */

     useEffect(() => {
  if (moduleId) {
    fetchCategoriesByModule(moduleId);
  }
}, [moduleId]);


  console.log("Category ID IN CLIENT:", categoryId);

    // const { moduleId} = useParams();
      console.log(moduleId, categoryId);

      const {
        subCategories,
        loading,
        error,
        fetchSubCategories,
      } = useSubCategory();
      

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
      {/* HEADER */}
      <section className="w-full bg-[#F6FBF8] py-4">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex items-center justify-between h-[60px] bg-[#EEF2F1] rounded-[14px] px-5">
            <div className="flex items-center gap-3">
              <Link href={`/MainModules/Finance/${moduleId}`}>
              <img src="/image/vector (29).png" className="w-[25px] h-[25px]" />
              </Link>
              <h2 className="text-[24px] font-semibold text-[#1A1A1A]">
                   {currentCategory?.name}
              </h2>
            </div>
            {/* SEARCH */}
                                    <div className="flex items-center gap-4 mr-10">
                                        {/* SEARCH */}
                                        <div className="hidden md:block relative w-[260px] lg:w-[280px]">
                                             <SearchBar
                                                                        value={searchQuery}
                                                                        onChange={setSearchQuery}
                                                                        placeholder="Search" 
                                                                      />
                                        </div>
            
                                        {/* BOOKMARK / LOCATION ICON */}
                                        <Link href="/Account/MyAccount?section=Favorite">
                        <Bookmark  className="w-8 h-8" color="#000"/>
                        </Link>
                                    </div>
            {/* <img src="/image/vector (30).png" className="w-[25px] h-[25px]" /> */}
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="w-full bg-[#F4FBF7] pt-6 sticky top-0 z-10">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {subCategories.map((tab) => {
              const isActive = active === tab._id;

              return (
                <button
                  key={tab._id}
                  onClick={() => setSelectedSubCategory(tab._id)}
                  className={`
                    flex items-center gap-4 px-5 py-3 rounded-[10px] w-[223px] h-[72px]
                    border text-[14px] font-medium transition-all flex-shrink-0
                    ${
                      isActive
                        ? "bg-[#2F9E60] text-white border-[#2F9E60]"
                        : "bg-white text-[#232323] border-[#D8E6DD] hover:bg-[#F0F7F3]"
                    }
                  `}
                >
                  <img className="w-[38px] h-[38px]" src={tab.image} alt={tab.name}/>
                  <p className="">{tab.name}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>


    <AllServices moduleId={moduleId} categoryId={categoryId} selectedSubCategory={selectedSubCategory} searchQuery={searchQuery}/>
    {/* <Recommended moduleId={moduleId} categoryId={categoryId} />
    <MostPopular moduleId={moduleId} categoryId={categoryId} />
    <TopTrending moduleId={moduleId} categoryId={categoryId} /> */}
  

    </>
  );
}
