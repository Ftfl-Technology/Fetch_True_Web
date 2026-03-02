"use client";
import BenefitsSection from "@/src/components/Franchise/BenefitSection";
import HighDemands from "@/src/components/Franchise/HighDemands";
import LowInvestmentFranchises from "@/src/components/Franchise/LowInvestment";
import Recommended from "@/src/components/Franchise/recommendFranchise";
import TopGrowingFranchises from "@/src/components/Franchise/TopGrowing";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import WhyOurFranchise from "@/src/components/Franchise/WhyourFranchise";
import Categories from "@/src/components/Franchise/Categories";
import { useParams } from "next/navigation";
import AllServices from "@/src/components/Franchise/AllServices";
import { useCategoryBanner } from "@/src/context/CategoryBannerContext";
import { useEffect } from "react";
import SearchBar from "@/src/components/SearchBar/Search";


export default function FranchisePageClient({ searchQuery,setSearchQuery }:any)  {

  const { moduleId } = useParams<{ moduleId: string }>();
  const { banners, loading, error, fetchBanners } = useCategoryBanner();


  useEffect(() => {
  if (moduleId) {
    fetchBanners(moduleId);
  }
}, [moduleId]);

  console.log("MODULE ID IN CLIENT:", moduleId);

  return (
    <>
      {/* MAIN WRAPPER */}
      <section
        style={{
          backgroundImage: banners?.[0]?.image
        ? `url(${banners[0].image})`
        : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="
          w-full h-auto rounded-[15px]
          px-4 lg:px-10 py-6 lg:py-14
          bg-gradient-to-r from-[#EFE3FE] to-[#F7F7FF]
        "
      >
        {/* ---------------- NAVBAR ---------------- */}
        <div
          className="
            w-full mx-auto h-auto
            flex items-center justify-between
            pb-4
          "
        >
          {/* LEFT SIDE */}
          <div className="flex items-center gap-3 lg:gap-5">
            <Link href="/">
            <img
              src="/image/Group 2.png"
              className="w-[26px] h-[30px] lg:w-[36px] lg:h-[45px]"
              alt="Home"
            />
            </Link>


            <h1 className="text-[18px] lg:text-[26px] font-semibold text-black">
              Franchise Service
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Desktop Search Bar */}
            <div
              className="
                 hidden lg:flex 
              "
            >
              {/* <CiSearch className="w-[18px] h-[18px] text-black" />
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none text-[16px] ml-4"
              /> */}
              <SearchBar
               value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search" 
              />
            </div>

            <Link href="../../Account/favorite">
            <img
              src="/image/Vector (2).png"
              className="w-[18px] h-[22px]"
              alt="Bookmark"
            />
            </Link>
          </div>
        </div>

        {/* ---------------- HERO SECTION ---------------- */}
        <div className="w-full mt-10">
          {/* MOBILE LAYOUT */}
          <div className="lg:hidden flex flex-col items-start gap-4 px-1">
            <h1
              className="text-black font-[500] text-[28px] leading-[32px]"
              style={{ fontFamily: "Golos Text" }}
            >
              Sell Earn Repeat
            </h1>

            <p
              className="text-black text-[14px] leading-[18px] w-[90%]"
              style={{ fontFamily: "Golos Text" }}
            >
              how you can earn and earn up to maximum values. don’t wait start
              your new journey with us
            </p>

            <div
              className="bg-[#9747FF] px-6 py-2 rounded-[15px]"
            >
              <span
                className="text-white text-[18px] font-semibold"
                style={{ fontFamily: "Inter" }}
              >
                1,00,000/-
              </span>
            </div>

            <img
              src="/image/franchiseHero.png"
              alt="Franchise Visual"
              className="w-full max-w-[330px] mx-auto  object-contain"
            />
          </div>

          {/* DESKTOP LAYOUT */}
          <div className="hidden lg:flex w-full   items-center justify-between">
            {/* LEFT TEXT */}
            <div>
              <h1
                className="text-black font-[500] text-[50px] leading-[52px]"
                style={{ fontFamily: "Golos Text" }}
              >
                Sell Earn Repeat
              </h1>

              <p
                className="
                  mt-4 text-black text-[20px] leading-[28px]
                  w-[520px]
                "
                style={{ fontFamily: "Golos Text" }}
              >
                how you can earn and earn up to maximum values. don’t wait start
                your new journey with us
              </p>

              <div
                className="
                  mt-10 bg-[#9747FF]
                  w-[230px] h-[59px]
                  rounded-[24px]
                  flex items-center justify-center
                "
              >
                <span
                  className="text-white text-[34px] font-semibold"
                  style={{ fontFamily: "Inter" }}
                >
                  1,00,000/-
                </span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <img
              src="/image/franchiseHero.png"
              alt="Franchise Visual"
              className="w-[450px] h-auto object-contain"
            />
          </div>
        </div>

        {/* ---------------- MOBILE SEARCH BAR ---------------- */}
        <div className="lg:hidden w-full mt-6">
          <div
            className="
              w-full h-[50px]
             
            "
          >
            {/* <CiSearch className="w-[18px] h-[18px] text-black" />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none text-[16px] ml-4"
            /> */}
            <SearchBar
               value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search" 
              />
          </div>
        </div>
      </section>

{/* -------- FLOW GRID SECTION -------- */}


<Categories/>
{/* <AllServices moduleId={moduleId}/> */}
<Recommended  moduleId={moduleId} searchQuery={searchQuery}/>
<HighDemands moduleId={moduleId} searchQuery={searchQuery}/>
{/* <TopGrowingFranchises /> */}
{/* <BenefitsSection /> */}
{/* <InvestmentOfferSection /> */}
<LowInvestmentFranchises moduleId={moduleId} searchQuery={searchQuery}/>
<WhyOurFranchise />





    </>
  );
}


