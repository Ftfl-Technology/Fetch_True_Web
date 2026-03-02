"use client";

import { useEffect, useState } from "react";
import BusinessCard from "../ui/BusinessCard";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import { useTopTrending } from "@/src/context/TopTrendingContext";
import HorizontalScroll from "../ui/HorizontalScroll";

interface Props {
  moduleId: string;
    searchQuery:string

}

export default function TopRated({ moduleId,searchQuery }: Props) {
  const { services, loading, fetchTopTrending } =
    useTopTrending();

    const { fetchServiceDetails,service } = useServiceDetails();

    const [roiMap, setRoiMap ] = useState<Record<string,string>>({});

     const { categoryId } = useParams<{
      moduleId: string;
      categoryId: string;
    }>();

  useEffect(() => {
    if (moduleId) {
      fetchTopTrending(moduleId);
    }
  }, [moduleId]);

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

  

  const createSlug = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "-");

  const filteredServices =
  services?.filter((service) => {
    if (!searchQuery?.trim()) return true;

    const q = searchQuery.toLowerCase();

    return (
      service.serviceName?.toLowerCase().includes(q) ||
      service.category?.name?.toLowerCase().includes(q)
    );
  }) || [];

  if (loading) return null;

  return (
    <section className="w-full lg:py-10 bg-white">
  <div className="mx-auto px-4 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">

    {/* TITLE – LEFT */}
    <div className="min-w-[220px] flex flex-col justify-center items-start">
      <h2 className="text-[28px] lg:text-[34px] font-medium text-[#1D4699] leading-tight">
        Top
        <br />
        <span className="text-[46px] font-semibold">RATED</span>
      </h2>
    </div>

    {/* SCROLL AREA – RIGHT */}
    <div
      className="
        relative
        flex
        gap-6
        bg-[#D9DDE6]
        pt-10 lg:pt-16
        pb-12 lg:pb-20
        ps-4 lg:ps-16
        overflow-x-auto
        scrollbar-hide
        scroll-smooth
        rounded-bl-[36px]
        w-full
      "
    >
      {/* FADED BACK TEXT */}
      <h2
        className="
          hidden lg:block
          absolute
          top-100
          left-70
          -translate-x-1/2
          text-[64px]
          font-semibold
          text-[#1D4699]
          opacity-5
          pointer-events-none
          whitespace-nowrap
        "
      >
        TOP RATED
      </h2>

      {/* CARDS */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
        <HorizontalScroll>
            {filteredServices.map((service) => {
              const investment =
                service.franchiseDetails?.investmentRange?.[0]?.range || "—";

              const earnings =
                service.franchiseDetails?.monthlyEarnPotential?.[0]?.range ||
                "—";

              const roi = roiMap[service._id || "-"]

              const earnpercent = service.franchiseDetails?.commission;

               
                

              return (
                            <Link key={service._id}   href={`/MainModules/Business/${moduleId}/${categoryId}/${service._id}`}>

                <BusinessCard
                  key={service._id}
                  image={
                    service.thumbnailImage ||
                    service.category?.image ||
                    "/image/placeholder.png"
                  }
                  title={service.serviceName}
                  category={service.category?.name || ""}
                  earnpercent={earnpercent}
                  investment={investment}
                  earnings={earnings}
                  roi={roi}
                  rating={service.averageRating}
                  trusted={true}
                  slug={createSlug(service.category?.name || "")}
                  detailslug={createSlug(service.serviceName)}
                />
                </Link>
              );
            })}
            </HorizontalScroll>
          </div>
    </div>

  </div>
</section>
  );
}
