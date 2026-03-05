"use client";

import Link from "next/link";
import FranchiseCard from "../ui/FranchiseCard";
import { useEffect } from "react";
import { useRecommendedServices } from "@/src/context/RecommendedContext";
import { useParams } from "next/navigation";
import HorizontalScroll from "../ui/HorizontalScroll";
import { useAuth } from "@/src/context/AuthContext";
import { useFavourites } from "@/src/context/FavouriteContext";

interface Props {
  moduleId: string;
  subCategoryId?: string | null;
  searchQuery:string
}

export default function RecommendedSection({ moduleId,searchQuery }: Props) {
  const { services, loading, error, fetchRecommendedServices } =
    useRecommendedServices();



  const { categoryId } = useParams<{
    moduleId: string;
    categoryId: string;
  }>();

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
                  const fav = isFavourite(service._id);


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