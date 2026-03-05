


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BusinessCard from "../ui/BusinessCard";
import { useMostPopularServiceByCategory } from "@/src/context/MostPopularServiceByCategoryIdContext";
import HorizontalScroll from "../ui/HorizontalScroll";
import { useFavourites } from "@/src/context/FavouriteContext";
import { useAuth } from "@/src/context/AuthContext";

interface Props {
  categoryId: string;
  moduleId: string;
}

export default function MostPopular({ categoryId, moduleId }: Props) {
  const { services, fetchMostPopularServiceByCategory, loading, error } =
    useMostPopularServiceByCategory();

    const [roiMap, setRoiMap ] = useState<Record<string,string>>({});

  /* ================= FETCH Category SERVICES ================= */

  useEffect(() => {
    if (categoryId) {
      fetchMostPopularServiceByCategory(categoryId);
    }
  }, [categoryId]);

      const { addFavourite, removeFavourite, isFavourite, fetchFavourites } =
      useFavourites();
    
      const { user } = useAuth();
    
      const userId = user?._id;
    
      useEffect(() => {
      if (userId) {
        fetchFavourites(userId);
      }
    }, [userId]);
    
    const handleToggleFavourite = async (serviceId: string) => {
      if (!userId) return;
    
      if (isFavourite(serviceId)) {
        await removeFavourite(userId, serviceId);
      } else {
        await addFavourite(userId, serviceId);
      }
    };

  console.log("Recommended API categoryId:", categoryId);

   useEffect(() => {
    const fetchAllROIs = async () => {
      const map: Record<string, string> = {};

      for (const s of services) {
        try {
          const res = await fetch(
            `https://api.fetchtrue.com/api/service/${s.serviceId}`
          );
          const json = await res.json();

          map[s.serviceId] =
            json?.data?.serviceDetails?.roi?.[0] || "—";
        } catch {
          map[s.serviceId] = "—";
        }
      }

      setRoiMap(map);
    };

    if (services.length) {
      fetchAllROIs();
    }
  }, [services]);

  const createSlug = (text: string) =>
    text?.toLowerCase().replace(/\s+/g, "-");

  /* ================= STATES ================= */

  if (loading)
    return <p className="text-center py-10">Loading Popular services...</p>;

  if (error)
    return <p className="text-center py-10 text-red-500">{error}</p>;

  if (!services.length)
    return <p className="text-center py-10">No services found.</p>;

  return (
    <section className="w-full mt-8 lg:mt-14">
      {/* HEADER */}
      <div className="max-w-[1440px] mx-auto px-4 mb-6">
        <h2 className="text-[22px] font-semibold">Most Popular</h2>
      </div>

      {/* SCROLL */}
      <div className="lg:ms-10 lg:me-10 mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-4">
          <HorizontalScroll>
          {services.map((service) => {
                                      const fav = isFavourite(service._id);

            const investment =
              service.franchiseDetails?.investmentRange?.[0]?.range || "—";

            const earnings =
              service.franchiseDetails?.monthlyEarnPotential?.[0]?.range || "—";

              const roi = roiMap[service.serviceId || "-"]

            const earnpercent =
              service.franchiseDetails?.commission || "—";

            return (
              <Link
                key={service.serviceId}
                href={`/MainModules/Business/${moduleId}/${categoryId}/${service.serviceId}`}
              >
                <BusinessCard
                  image={
                    service.thumbnailImage ||
                    
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
                  slug={createSlug(service.category?.name)}
                  detailslug={createSlug(service.serviceName)}
                   isFavourite={isFavourite(service._id)}

                   onToggleFavourite={() =>
                   handleToggleFavourite(service._id)
                   }
                />
              </Link>
            );
          })}
          </HorizontalScroll>
        </div>
      </div>
    </section>
  );
}
