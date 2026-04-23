"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, SearchCheckIcon } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";

import { useSubCategory } from "@/src/context/SubCategoriesContext";
import { useCategorywiseServices } from "@/src/context/CategorywiseServiceContext";

import ServiceCard from "@/src/components/AIHubSubCategories/ServiceCard";
import SearchBar from "@/src/components/SearchBar/Search";


type keyValuesItem = {
    value: string;
    icon?: string;
    key: string;
    _id: string;
};

export type UnifiedService = {
    id: string;
    title: string;
    category: string;
    image: string;
    rating: number;
    reviews: number;
    price: number;
    originalPrice: number;
    discount: number;
    keyValues: keyValuesItem[];
};


export default function SubCategoryPage() {

    const params = useParams();
    const searchParams = useSearchParams();

    const moduleId = params.moduleId as string;
    const categoryId = params.categoryId as string;
    const categoryName = searchParams.get("categoryName");


    const { fetchSubCategories } = useSubCategory();

    const {
        services,
        loading,
        fetchServicesByCategory
    } = useCategorywiseServices();


    const [searchQuery, setSearchQuery] = useState("");


    /* ================= FETCH DATA ================= */

    useEffect(() => {

        if (!categoryId) return;

        fetchSubCategories(categoryId);
        fetchServicesByCategory(categoryId);

    }, [categoryId]);


    /* ================= MAP SERVICES ================= */

    const mappedServices: UnifiedService[] = services.map(service => ({

        id: service._id,
        title: service.serviceName,
        category: service.category?.name || "Unknown",
        image: service.thumbnailImage,
        rating: service.averageRating,
        reviews: service.totalReviews,
        price: service.discountedPrice,
        originalPrice: service.price,
        discount: service.discount,
        keyValues: service.keyValues

    }));


    /* ================= SEARCH FILTER ================= */

    const filteredServices = mappedServices.filter(service =>

        service.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase())

    );


    return (

        <>

            {/* ================= HEADER ================= */}

            <section className="relative w-full">

                <div className="w-full px-4 md:px-8 mt-4 md:mt-10">

                    <div className="bg-[#EFFCFF] lg:bg-[#E2E9F1] flex items-center justify-between p-2 rounded-xl">

                        <div className="flex p-2 items-center gap-3 lg:gap-5">

                            <Link href={`/MainModules/AI-Hub/${moduleId}`}>

                                <img
                                    src="/image/AIHubback.png"
                                    className="hidden md:block w-[16px] h-[14px] lg:w-[38px] lg:h-[35px]"
                                />

                            </Link>
{/* 
                            <Link href="/MainModules/AIHub">

                                <ChevronLeft className="block md:hidden w-5 h-5 text-black" />

                            </Link> */}


                            <h1 className="text-[18px] lg:text-[24px] font-semibold">

                                {categoryName}

                            </h1>

                        </div>


                      <div className=' flex'>
                                                      <div className="relative w-full md:w-[330px] lg:w-[520px]">
                                                    
                                                          <SearchBar
                                                                                          value={searchQuery}
                                                                                          onChange={setSearchQuery}
                                                                                          placeholder="Search"
                                                                                      />
                                                       
                                                      </div>
                      
                                                      <div className='bg-white rounded-full justify-center md:p-2'>
                                                          <img
                                                              src="/image/AIBookmark.png"
                                                              className="w-[18px] h-[22px] md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] lg:p-1 object-fit"
                                                              alt="Bookmark"
                                                          />
                                                      </div>
                                                  </div>

                    </div>

                </div>



                {/* ================= MOBILE SEARCH ================= */}

                <div className="mt-4 block md:hidden">

                    <div className="max-w-4xl mx-auto px-8">

                        <div className="relative">

                            <SearchCheckIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 p-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
                            />

                        </div>

                    </div>

                </div>

            </section>



            {/* ================= SERVICES GRID ================= */}

            <section className="px-6 mt-10">

                {

                    loading ? (

                        <div className="text-center py-24 text-gray-500 text-lg">

                            Loading services...

                        </div>

                    ) :

                        filteredServices.length === 0 ? (

                            <div className="flex justify-center py-24">

                                <div
                                    className="
                                    w-[320px]
                                    h-[220px]
                                    rounded-xl
                                    border border-dashed
                                    flex items-center justify-center
                                    text-gray-400
                                "
                                >

                                    🚫 Service not available

                                </div>

                            </div>

                        ) :

                            (

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">

                                    {

                                        filteredServices.map(service => (

                                            <ServiceCard
   key={service.id}
   service={service}
   moduleId={moduleId}
   categoryId={categoryId}
/>

                                        ))

                                    }

                                </div>

                            )

                }

            </section>

        </>

    );

}