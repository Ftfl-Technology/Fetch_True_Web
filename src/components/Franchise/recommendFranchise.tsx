"use client";

import Link from "next/link";
import FranchiseCard from "../ui/FranchiseCard";
import { useEffect } from "react";
import { useRecommendedServices } from "@/src/context/RecommendedContext";
import { useParams } from "next/navigation";
import HorizontalScroll from "../ui/HorizontalScroll";
import { useFavourites } from "@/src/context/FavouriteContext";
import { useAuth } from "@/src/context/AuthContext";

interface Props {
  moduleId: string;
  subCategoryId?: string | null;
  searchQuery:string
}

export default function RecommendedSection({ moduleId,searchQuery }: Props) {
  const { services, loading, error, fetchRecommendedServices } =
    useRecommendedServices();

  const { addFavourite, removeFavourite, isFavourite } = useFavourites();
  const { user } = useAuth();

  const userId = user?._id;

  const { categoryId } = useParams<{
    moduleId: string;
    categoryId: string;
  }>();

  /* ✅ SAFE toggle handler (NO event needed) */
  const handleToggleFavourite = async (serviceId: string) => {
    if (!user) {
      alert("Please login first");
      return;
    }

    try {
      if (isFavourite(serviceId)) {
        await removeFavourite(serviceId, userId);
      } else {
        await addFavourite(serviceId, userId);
      }
    } catch (err) {
      console.error("Favourite toggle failed", err);
    }
  };

const filteredServices =
  services?.filter((service) => {
    if (!searchQuery?.trim()) return true;

    const q = searchQuery.toLowerCase();

    return (
      service.serviceName?.toLowerCase().includes(q) ||
      service.category?.name?.toLowerCase().includes(q)
    );
  }) || [];

  useEffect(() => {
    if (moduleId) {
      fetchRecommendedServices(moduleId);
    }
  }, [moduleId]);

  if (loading)
    return <p className="text-center py-10">Loading recommended services...</p>;

  if (error)
    return (
      <p className="text-center py-10 text-red-500">
        {error}
      </p>
    );

    if (!filteredServices.length) {
  return (
    <p className="text-center py-10 text-gray-500">
      No matching recommended services
    </p>
  );
}

  return (
    <section className="w-full mt-8 lg:mt-18">
      <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center mb-6">
        <h2 className="text-[24px] font-semibold">Recommended For You</h2>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 pb-4">
          <HorizontalScroll>
            {filteredServices.map((service) => {
              // const fav = isFavourite(service._id);

              return (
                <Link
                  key={service._id}
                  href={`/MainModules/Franchise/${moduleId}/${categoryId}/${service._id}`}
                >
                  <FranchiseCard
                    image={service.thumbnailImage || "/default-service.png"}
                    title={service.serviceName}
                    category={service.category?.name || "Unknown"}
                    rating={service.averageRating || 0}
                    earning={service.franchiseDetails.commission || "N/A"}
                    discount={
                      service.franchiseDetails?.franchiseModel?.[0]?.discount
                        ? `${service.franchiseDetails.franchiseModel[0].discount}%`
                        : "0%"
                    }
                    monthly={
                      service.franchiseDetails?.monthlyEarnPotential?.[0]?.range
                    }
                    parameter={
                      service.franchiseDetails?.monthlyEarnPotential?.[0]?.parameters
                    }
                    investment={
                      service.franchiseDetails?.investmentRange?.[0]?.range ||
                      "N/A"
                    }
                    area={
                      service.keyValues?.find((kv) => kv.key === "Area")
                        ?.value || "N/A"
                    }
                    // isFavourite={fav}
                    // onToggleFavourite={() =>
                    //   handleToggleFavourite(service._id)
                    // }
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