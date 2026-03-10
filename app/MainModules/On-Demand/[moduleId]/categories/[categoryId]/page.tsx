'use client';
import MostPopularProvider from '@/src/components/OnDemandSubCategories/MostPopularProvider';
import RecommendedProvider from '@/src/components/OnDemandSubCategories/RecommendedProvider';
import TopTrending from '@/src/components/OnDemandSubCategories/TopTrending';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { useState } from 'react';

type BudgetOption =
    | 'All'
    | '1k-2k'
    | '2k-3k'
    | '3k-4k'
    | '4k-5k'
    | '5k-6k';

const budgets: BudgetOption[] = [
    'All',
    '1k-2k',
    '2k-3k',
    '3k-4k',
    '4k-5k',
    '5k-6k',
];


export default function BudgetFilter() {

    const [activeBudget, setActiveBudget] = useState<BudgetOption>('All');
    const [nearMe, setNearMe] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState("");

    const params = useParams();
    const searchParams = useSearchParams();


    const moduleId = params.moduleId as string;
    const categoryId = params.categoryId as string;


    const categoryName = searchParams.get("categoryName");

    return (
        <>
            <div className="w-full max-w-8xl p-2 space-y-6">
                <div className="w-full px-2 md:px-8 mt-4 md:mt-10">

                    {/* NAVBAR DESKTOP */}
                    {/* <div className="hidden md:hidden lg:block bg-[#EFFCFF] lg:bg-[#E2E9F1] flex flex-row items-center justify-between p-2 rounded-xl w-full"> */}
                    <div className="hidden md:hidden lg:flex flex-nowrap items-center justify-between p-2 rounded-xl w-full bg-[#EFFCFF] lg:bg-[#E2E9F1]">

                        {/* LEFT */}
                        <div className="flex  p-2 items-center gap-3 lg:gap-5">

                            <Link href={`/MainModules/On-Demand/${moduleId}`}>
                                <img
                                    src="/image/educationback.png"
                                    className="hidden md:block w-[16px] h-[14px] lg:w-[38.6px] lg:h-[35.02px]"
                                    alt="Back"
                                />

                            </Link>

                            <Link href="/MainModules/OnDemand">
                                <ChevronLeft className="block md:hidden w-5 h-5 lg:w-8 lg:h-8 text-black cursor-pointer" />
                            </Link>


                            <h1 className="text-[16px] lg:text-[24px] font-semibold text-[#000000] whitespace-nowrap">
                                {categoryName}
                            </h1>
                        </div>

                        {/* RIGHT */}
                        <img
                            src="/image/educationbookmark.png"
                            className="w-[18px] h-[22px] mr-5"
                            alt="Bookmark"
                        />
                    </div>


                    {/* NAVBAR MOBILE */}
                    <div
                        className="
                                block md:block lg:hidden
                                w-full -mx-4 -mt-6 w-screen md:-mx-10 md:-mt-12
                                bg-[#F6E9E5]
                                flex flex-col
                                px-4 py-8 md:px-10 md:py-10
                                rounded-t
                                gap-3
                            "
                    >
                        {/* ===== ROW 1: HEADER ===== */}
                        <div className="flex items-center justify-between">
                            {/* LEFT */}
                            <div className="flex items-center gap-3 min-w-0">
                                <Link href={`/MainModules/On-Demand/${moduleId}`}>
                                    <ChevronLeft className="w-[28px] h-[28px] text-black cursor-pointer bg-white rounded-full p-1 shrink-0" />
                                </Link>

                                <h1 className="text-[16px] font-semibold truncate">
                                    {categoryName}
                                </h1>
                            </div>

                            {/* RIGHT */}
                            <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full shrink-0">
                                <img
                                    src="/image/educationbookmark.png"
                                    className="w-[14px] h-[14px]"
                                    alt="Bookmark"
                                />
                            </div>
                        </div>

                        {/* ===== ROW 2: SEARCH ===== */}
                        <div className="relative w-full mt-6">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-full bg-white border border-gray-300 px-10 py-2 text-sm outline-none"
                            />
                            <span className="absolute left-3 top-1/2 -translate-y-1/2">
                                <img
                                    src="/image/itsearch.png"
                                    className="w-[18px] h-[16px]"
                                    alt="Search"
                                />
                            </span>
                        </div>
                    </div>




                </div>
                {/* ================= DESKTOP ================= */}
                {/* <div className="hidden md:block p-8">
                    <h2 className="text-xl font-semibold mb-4">Select Your Budget</h2>

                    <div className="flex flex-wrap gap-3">
                        {budgets.map((item) => (
                            <button
                                key={item}
                                onClick={() => setActiveBudget(item)}
                                className={`px-6 py-2 rounded-full border text-sm font-medium transition
                 ${activeBudget === item
                                        ? 'bg-orange-500 text-white border-gray'
                                        : 'bg-white text-black border-gray-400'
                                    }
                 `}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div> */}

                {/* ================= MOBILE ================= */}
                {/* <div className="md:hidden">
                    <h2 className="text-[16px] lg:text-[24px] font-semibold mb-4">Select Your Budget</h2>

                    <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                        {budgets.map((item) => (
                            <button
                                key={item}
                                onClick={() => setActiveBudget(item)}
                                className={`px-4 py-2 lg:px-6 lg:py-2 rounded-full text-sm font-medium whitespace-nowrap transition
                   ${activeBudget === item
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-200 text-gray-800'
                                    }
                  `}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div> */}

                {/* ================= NEAR MY LOCATION ================= */}
                <div className="flex items-center  pt-4 p-2 md:p-8 lg:p-8">
                    <div>
                        <h3 className="text-[16px] lg:text-[24px] font-semibold whitespace-nowrap">Near My Location</h3>
                        <p className="text-[12px] lg:text[16px] text-gray-500 whitespace-nowrap">
                            Get list of provider that are near by you
                        </p>
                    </div>

                    {/* Toggle */}
                    <button
                        onClick={() => setNearMe((prev) => !prev)}
                        aria-checked={nearMe}
                        role="switch"
                        className={`w-14 h-8 flex items-center ml-4 lg:ml-60 rounded-full p-1 transition
            ${nearMe ? 'bg-orange-500' : 'bg-gray-300'}
          `}
                    >
                        <span
                            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition
              ${nearMe ? 'translate-x-6' : 'translate-x-0'}
            `}
                        />
                    </button>
                </div>
            </div>

            <section className="w-full md:p-6 lg:p-0 mt-2 md:mt-2">
                <RecommendedProvider categoryId={categoryId} moduleId={moduleId} />
                <MostPopularProvider categoryId={categoryId} moduleId={moduleId}/>
                <TopTrending categoryId={categoryId} moduleId={moduleId} />
            </section>
        </>
    );
};


