"use client";

import HeaderSection from "@/src/components/Header/Header";
import Modules from "@/src/components/Modules/Modules";
import BestOffers from "@/src/components/Modules/BestOffers";
import Navbar from "@/src/components/Navbar/Navbar";
import MostlyUsed from "@/src/components/Modules/MostPopular";
import Recommendation from "@/src/components/Modules/Recommendation";
import LuckyDraw from "@/src/components/Modules/LuckyDraw";
import ReferandEarn from "@/src/components/Modules/ReferandEarn";
import PartnersReview from "@/src/components/Modules/PartnersReview";
import TopTrendingCard from "@/src/components/Modules/TopTrendingCard";
import TeamBuild from "@/src/components/Modules/TeamBuild";
import TopRatedProvider from "@/src/components/Modules/TopRatedProvider";
import { useState } from "react";




export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        />
      <HeaderSection />
      <Modules/>
      <BestOffers />
      <Recommendation searchQuery={searchQuery}/>
      <TopTrendingCard searchQuery={searchQuery}/>
      <ReferandEarn />
      <MostlyUsed searchQuery={searchQuery}/>
      <TeamBuild />
      <TopRatedProvider />
      <LuckyDraw />
      <PartnersReview />
   

    </>
  );
}
