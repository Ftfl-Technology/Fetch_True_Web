


'use client';

import { useState, useEffect, useMemo } from "react";
import { useParams } from 'next/navigation'; // Removed unused Link, ChevronLeft, router
import { useSubCategory } from '@/src/context/SubCategoriesContext';
import ServiceCard from '@/src/components/EducationSubCategories/ServiceCard';
import { useRecommendedServiceByCategoryIdContext }
    from "@/src/context/RecommendedServiceByCategoryIdContext";
import { useMostPopularServiceByCategory }
    from "@/src/context/MostPopularServiceByCategoryIdContext";
import { useTopTrendingServiceByCategoryIdContext }
    from "@/src/context/TopTrendingServiceByCategoryIdContext";
import axios from "axios";
import Image from "next/image"; 
import Link from "next/link";
import { Bookmark, ChevronLeft } from "lucide-react";
import SearchBar from "@/src/components/SearchBar/Search";

/*  TYPES  */
type Category = {
    _id: string;
    name: string;
};

type SubCategory = {
    _id: string;
    name: string;
    image: string;
    category: Category;
};

type KeyValueItem = {
    value: string;
    icon?: string;
    _id: string;
};


interface BaseService {
    _id: string;
    serviceName: string;
    thumbnailImage?: string;
    averageRating?: number;
    totalReviews?: number;
    category?: {
        _id: string;
        name: string;
    };
    keyValues?: KeyValueItem[];
    serviceDetails?: {
        packages?: {
            price: number;
            discountedPrice: number;
            discount: number;
        }[];
    };
}


interface RecommendedService extends BaseService {
    subcategory?: {
        _id: string;
        name: string;
    } | null;
}

interface PopularService extends BaseService {
    subcategory?: {
        _id: string;
        name: string;
    } | null;
}

interface TrendingService extends BaseService {
    subcategory?: {
        _id: string;
        name: string;
    } | null;
}

// Main BackendService type
type BackendService = {
    _id: string;
    serviceName: string;
    thumbnailImage?: string;
    averageRating?: number;
    totalReviews?: number;
    category?: {
        _id: string;
        name: string;
    };
    subcategory?: {
        _id: string;
        name: string;
    } | null;
    keyValues?: KeyValueItem[];
    serviceDetails?: {
        packages?: {
            price: number;
            discountedPrice: number;
            discount: number;
        }[];
    };
};

export type UnifiedService = {
    id: string;
    title: string;
    category: string;
    image: string;
    rating: number;
    reviews: number;
    price: number;
    keyValues: KeyValueItem[];
    originalPrice: number;
    discount: number;
    source: "recommended" | "popular" | "trending";
    subCategoryId?: string;
    serviceId?: string;
};

export default function CategoryPage() {
    const params = useParams();
   
    const categoryId = params.categoryId as string;

    // ---------- CONTEXTS ----------
    const {
        subCategories,
        loading: subCategoriesLoading,
        error: subCategoriesError,
        fetchSubCategories,
    } = useSubCategory();

    const {
        services: recommendedServices,
        fetchRecommendedServicesByCategoryId,
    } = useRecommendedServiceByCategoryIdContext();

    const {
        services: popularServices,
        fetchMostPopularServiceByCategory
    } = useMostPopularServiceByCategory();

    const {
        services: trendingServices,
        fetchTopTrendingServicesByCategoryId
    } = useTopTrendingServiceByCategoryIdContext();

    // ---------- LOCAL STATE ----------
    const [allServices, setAllServices] = useState<BackendService[]>([]);
    const [servicesLoading, setServicesLoading] = useState(false);
    const [servicesError, setServicesError] = useState<string>("");

    const [selectedRange, setSelectedRange] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<string | null>(null);

    const moduleId = params.moduleId as string;
    // ---------- FILTERS ----------
    const FILTERS = [
        { label: "All", value: "all" },
        { label: "High to Low", value: "high-to-low" },
        { label: "Low to High", value: "low-to-high" },
        { label: "Recommended", value: "recommended" },
        { label: "Most Popular", value: "most-popular" },
        { label: "Top Trending", value: "top-trending" },
    ];

    // ---------- FETCH ALL DATA ----------
    useEffect(() => {
        if (categoryId) {
            fetchSubCategories(categoryId);
            fetchRecommendedServicesByCategoryId(categoryId);
            fetchMostPopularServiceByCategory(categoryId);
            fetchTopTrendingServicesByCategoryId(categoryId);
        }
    }, [
        categoryId, 
        fetchSubCategories, 
        fetchRecommendedServicesByCategoryId, 
        fetchMostPopularServiceByCategory, 
        fetchTopTrendingServicesByCategoryId
    ]); // ✅ FIXED: Added missing dependencies

    // ---------- FETCH ALL SERVICES ----------
    useEffect(() => {
        if (!categoryId) return;
        
        const fetchAllServices = async () => {
            try {
                setServicesLoading(true);
                const response = await axios.get('https://api.fetchtrue.com/api/service');
                setAllServices(response.data.data || []);
                setServicesError("");
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setServicesError(err.message);
                } else {
                    setServicesError("Failed to fetch services");
                }
            } finally {
                setServicesLoading(false);
            }
        };

        fetchAllServices();
    }, [categoryId]);

    // ---------- SET FIRST SUBCATEGORY AS ACTIVE ----------
    useEffect(() => {
        if (subCategories?.length > 0 && !selectedSubCategoryId) {
            setSelectedSubCategoryId(subCategories[0]._id);
        }
    }, [subCategories, selectedSubCategoryId]);

    // ---------- RESET WHEN CATEGORY CHANGES ----------
    useEffect(() => {
        setSelectedSubCategoryId(null);
        setSelectedRange("all");
        setSearchQuery("");
    }, [categoryId]);

    // ---------- MAPPER FUNCTION ----------
    const mapService = (
        service: BackendService,
        source: UnifiedService["source"]
    ): UnifiedService => {
        const packages = service.serviceDetails?.packages ?? [];
        const cheapest = packages.length > 0
            ? packages.reduce((min, p) =>
                p.discountedPrice < min.discountedPrice ? p : min
            )
            : null;

        return {
            id: service._id,
            title: service.serviceName,
            category: service.category?.name ?? "Unknown",
            image: service.thumbnailImage ?? "",
            rating: service.averageRating ?? 0,
            reviews: service.totalReviews ?? 0,
            price: cheapest?.discountedPrice ?? 0,
            originalPrice: cheapest?.price ?? 0,
            discount: cheapest?.discount ?? 0,
            keyValues: service.keyValues ?? [],
            source,
            subCategoryId: service.subcategory?._id,
            serviceId: service._id
        };
    };

    // ---------- FILTER SERVICES BY SELECTED SUBCATEGORY ----------
    const filteredBySubCategory = useMemo(() => {
        if (!selectedSubCategoryId) return [];
        
        return allServices.filter(service => 
            service.subcategory?._id === selectedSubCategoryId
        );
    }, [allServices, selectedSubCategoryId]);

    // ---------- MERGE ALL SERVICES ----------
    const allMergedServices: UnifiedService[] = useMemo(() => {
        if (!selectedSubCategoryId) return [];
        
        const subCategoryMapped = filteredBySubCategory.map(s => 
            mapService(s, "recommended")
        );

        // ✅ FIXED: Type assertion for context services
        const otherSources = [
            ...(Array.isArray(recommendedServices)
                ? (recommendedServices as RecommendedService[])
                    .filter(s => s.subcategory?._id === selectedSubCategoryId)
                    .map(s => mapService(s as BackendService, "recommended"))
                : []),
            ...(Array.isArray(popularServices)
                ? (popularServices as PopularService[])
                    .filter(s => s.subcategory?._id === selectedSubCategoryId)
                    .map(s => mapService(s as BackendService, "popular"))
                : []),
            ...(Array.isArray(trendingServices)
                ? (trendingServices as TrendingService[])
                    .filter(s => s.subcategory?._id === selectedSubCategoryId)
                    .map(s => mapService(s as BackendService, "trending"))
                : []),
        ];

        const allServicesMap = new Map<string, UnifiedService>();
        
        [...subCategoryMapped, ...otherSources].forEach(service => {
            allServicesMap.set(service.id, service);
        });

        return Array.from(allServicesMap.values());
    }, [filteredBySubCategory, recommendedServices, popularServices, trendingServices, selectedSubCategoryId]);

    // ---------- APPLY FILTERS & SORT ----------
    const filteredServices = useMemo(() => {
        let services = [...allMergedServices];

        // Source filter
        if (selectedRange === "recommended") {
            services = services.filter(s => s.source === "recommended");
        } else if (selectedRange === "most-popular") {
            services = services.filter(s => s.source === "popular");
        } else if (selectedRange === "top-trending") {
            services = services.filter(s => s.source === "trending");
        }

        // Search filter
        if (searchQuery.trim()) {
            services = services.filter(s =>
                s.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Sort
        if (selectedRange === "high-to-low") {
            services.sort((a, b) => b.price - a.price);
        } else if (selectedRange === "low-to-high") {
            services.sort((a, b) => a.price - b.price);
        }

        return services;
    }, [allMergedServices, selectedRange, searchQuery]);

    // ---------- LOADING STATE ----------
    if (subCategoriesLoading || servicesLoading) {
        return (
            <div className="max-w-8xl mx-auto px-4 py-8">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-48 mb-8"></div>
                    <div className="flex gap-4 overflow-x-auto">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="min-w-[160px] h-20 bg-gray-200 rounded-2xl"></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // ---------- ERROR STATE ----------
    if (subCategoriesError || servicesError) {
        return (
            <div className="max-w-8xl mx-auto px-4 py-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-red-800 font-semibold">Error Loading Data</h3>
                    <p className="text-red-600 mt-2">{subCategoriesError || servicesError}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    const activeSubCategory = subCategories.find(s => s._id === selectedSubCategoryId);

    return (
        <>

         <section className="relative w-full">
                        {/* ===== NAVBAR ===== */}
                        <div className="hidden md:hidden lg:block w-screen">
                            <div className="bg-[#E2E9F1] flex items-center justify-between p-6 rounded-xl">
                                <div className="flex items-center gap-4 ml-10">
                                   {/* Back Icon */}
                                             <Link href={`/MainModules/Education/${moduleId}`}>
                                             <img
                                               src="/image/Vector (1).png"
                                               alt="Back Icon"
                                               className="text-black hidden lg:block"    
                                             />
                                             </Link>
                                    <h1 className="text-lg md:text-2xl font-semibold">Education Service</h1>
                                </div>
        
                                {/* SEARCH */}
                                <div className="flex items-center gap-4 mr-10">
                                    {/* SEARCH */}
                                    <div className="hidden md:block relative w-[260px] lg:w-[307px]">
                                    
        
                                        {/* search icon */}
                                        <SearchBar
                                                                    value={searchQuery}
                                                                    onChange={setSearchQuery}
                                                                    placeholder="Search" 
                                                                  />
                                    </div>
        
                                    {/* BOOKMARK / LOCATION ICON */}
                                    <Link href="/Account/MyAccount?section=Favorite">
            <Bookmark  className="w-8 h-8" color="#2818A3"/>
            </Link>
                                </div>
        
        
                            </div>
        
                        </div>
                    </section>
        
                    {/*  NAVBAR MOBILE  */}
                    <section>
                        <div
                            className="
                                        block md:block lg:hidden
                                        w-full -mt-6 w-screen md:-mx-0 md:-mt-12
                                        bg-[#E2E9F1]
                                        flex flex-col
                                        px-4 py-8 md:px-10 md:py-10
                                        rounded-t
                                        gap-3
                                    "
                        >
                            {/*  ROW 1: HEADER  */}
                            <div className="flex items-center justify-between">
                                {/* LEFT */}
                                <div className="flex items-center gap-3 p-8 min-w-0">
                                    <Link href={`/MainModules/Education/${moduleId}`}>
          <img
            src="/image/Vector (1).png"
            alt="Back Icon"
            className="text-black lg:hidden block"    
          />
          </Link>
        
                                    <h1 className="text-[16px] font-semibold truncate">
                                        {/* {formatSlugToTitle(slug)} */} Education Service
                                    </h1>
                                </div>
        
                                {/* RIGHT */}
                                <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0">
                                    <Link href="/Account/MyAccount?section=Favorite">
            <Bookmark  className="w-8 h-8" color="#A3623A"/>
            </Link>
                                </div>
                            </div>
        
                            {/* ===== ROW 2: SEARCH ===== */}
                            <div className="relative w-[90%] md:w-[95%] mx-auto ml-6">
                                <SearchBar
                                                            value={searchQuery}
                                                            onChange={setSearchQuery}
                                                            placeholder="Search" 
                                                          />
                            </div>
                        </div>
                    </section>

            {/* SUBCATEGORY LIST */}
            <section className="relative max-w-8xl mt-15 px-4 ml-1 lg:ml-15">
                <h1 className="text-[16px] md:text-[24px] mb-5">Category</h1>

                <div className="flex gap-4 overflow-x-auto no-scrollbar md:flex-wrap">
                    {(subCategories as SubCategory[]).map((item) => (
                        <div
                            key={item._id}
                            onClick={() => {
                                setSelectedSubCategoryId(item._id);
                            }}
                            className={`cursor-pointer flex items-center gap-3 justify-center border rounded-2xl min-w-[160px] md:w-[180px] p-3
                                ${selectedSubCategoryId === item._id
                                    ? "bg-[#2818A3] text-white border-[#2818A3] shadow-md"
                                    : "bg-white hover:bg-gray-50 border-gray-200"
                                }`}
                        >
                           
                            <div className="relative w-[28px] h-[28px]">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className={`object-contain ${
                                        selectedSubCategoryId === item._id ? "" : ""
                                    }`}
                                />
                            </div>
                            <span className="text-[12px] md:text-[16px] font-medium">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* FILTER PILLS */}
            {allMergedServices.length > 0 && (
                <div className="w-full px-4 md:px-8 mt-8 lg:ml-12">
                    <div className="mt-6 flex gap-3 overflow-x-auto no-scrollbar">
                        {FILTERS.map((item) => (
                            <button
                                key={item.value}
                                onClick={() => setSelectedRange(item.value)}
                                className={`rounded-full px-5 py-2 text-sm border whitespace-nowrap ${
                                    selectedRange === item.value
                                        ? "bg-[#2818A3] text-white border-[#2818A3]"
                                        : "bg-white text-black border hover:bg-gray-50"
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

           

            {/* SERVICES GRID */}
            <section className="px-6 mt-10">
                {filteredServices.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No services found</p>
                        <p className="text-gray-400 text-sm mt-2">
                            {activeSubCategory 
                                ? `No services available for ${activeSubCategory.name}`
                                : "Select a subcategory to view services"}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredServices.map(service => (
                            <ServiceCard
                                key={`${service.source}-${service.id}`}
                                service={service}
                            />
                        ))}
                    </div>
                )}
            </section>
        </>
    );
}