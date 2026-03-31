"use client";
import { useEffect, useMemo, useState } from "react";
import SubCategoryStrip from "@/src/components/Business/Subcategory";
import { useParams } from "next/navigation";
import { SubCategoryProvider, useSubCategory } from "@/src/context/SubCategoriesContext";
import { useCategorywiseServices } from "@/src/context/CategorywiseServiceContext";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import AllServices from "@/src/components/BusinessCategories/AllServices";
import { useModule } from "@/src/context/CategoriesContext";
import Link from "next/link";







export default function BusinessCategoryDetailPage() {

     const [active, setActive] = useState("All");


 const { moduleId, categoryId } = useParams<{
  moduleId: string;
  categoryId: string;
}>();

const { services,loading,fetchServicesByCategory } = useCategorywiseServices();

    const { fetchServiceDetails,service } = useServiceDetails();
    const [currentCategory, setCurrentCategory] = useState<any>(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");


    const {
      subCategories,
      error,
      fetchSubCategories,
    } = useSubCategory();



  console.log("Category ID IN CLIENT in business:", categoryId);
      const [roiMap, setRoiMap ] = useState<Record<string,string>>({});

    const { categories,fetchCategoriesByModule } = useModule();

    // const { moduleId} = useParams();
      console.log(moduleId, categoryId);

      useEffect(() => {
  if (categoryId) {
    fetchSubCategories(categoryId);
  }
}, [categoryId]);

      useEffect(()=>{
        if (categoryId){
          fetchServicesByCategory(categoryId)
        }
      },[categoryId]);

         useEffect(() => {
    const fetchAllROIs = async () => {
      const map: Record<string, string> = {};

      for (const s of services) {
        try {
          const res = await fetch(
            `https://api.fetchtrue.com/api/service/${s._id}`
          );
          const json = await res.json();

          map[s._id] =
            json?.data?.serviceDetails?.roi?.[0] || "—";
        } catch {
          map[s._id] = "—";
        }
      }

      setRoiMap(map);
    };

    if (services.length) {
      fetchAllROIs();
    }
  }, [services]);

   useEffect(() => {
  if (moduleId) {
    fetchCategoriesByModule(moduleId);
  }
}, [moduleId]);

useEffect(() => {
  if (subCategories?.length && !selectedSubCategory) {
    setSelectedSubCategory(subCategories[0]._id);
  }
}, [subCategories]);

  useEffect(() => {
  if (categories?.length && categoryId) {
    const cat = categories.find(
      (c: any) => c._id === categoryId
    );
    setCurrentCategory(cat);
  }
}, [categories, categoryId]);




const mappedServices = useMemo(() => {
  return services.map((service) => ({
    image:
      service.thumbnailImage ||
      service.category?.image ||
      "/image/placeholder.png",

    title: service.serviceName,
    category: service.category?.name || "",

    earnPercent: service.franchiseDetails?.commission || "—",
    investment:
      service.franchiseDetails?.investmentRange?.[0]?.range || "—",
    earnings:
      service.franchiseDetails?.monthlyEarnPotential?.[0]?.range || "—",
    roi: roiMap[service._id] || "—",

    rating: service.averageRating || 0,
    trusted: true,

    
  }));
}, [services, roiMap]);


    return (
        <>
        
<div className="max-w-[1440px] mx-auto px-4 pt-3">
  <div className="flex items-center justify-between h-[72px]">

    {/* LEFT SECTION */}
    <div className="flex items-center gap-3 relative">
      
      {/* HOME ICON */}
      <Link href={`/MainModules/Business/${moduleId}`}>
      <img
        src="/image/Group 2.png"
        alt="home"
        className="w-[25px] h-[25px]"
      />
      </Link>

      {/* TITLE */}
      <h2 className="text-[18px] font-medium text-[#6A6A6A]">
          {currentCategory?.name}
      </h2>

    </div>

     {/* Bookmark Icon */}
          <Link href="/Account/MyAccount?section=Favorite">
          <img
            src="/image/Vector (2).png"
            alt="Bookmark"
            className="w-[18.6px] h-[27.2px]"
          />
          </Link>
        </div>
  </div>




<SubCategoryProvider initialCategoryId={categoryId}>
  <SubCategoryStrip  selectedSubCategory={selectedSubCategory}
  onSelect={setSelectedSubCategory}/>
</SubCategoryProvider>


<AllServices moduleId={moduleId} categoryId={categoryId} selectedSubCategory={selectedSubCategory} searchQuery={searchQuery} />



        </>
    )
}