"use client";

import { useEffect, useState } from "react";
import FranchiseMostPopularCard from "../ui/FranchiseMostPopularCard";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useModulewiseServices } from "@/src/context/ModulewiseServiceContext";
import HorizontalScroll from "../ui/HorizontalScroll";
import { useAuth } from "@/src/context/AuthContext";
import { useFavourites } from "@/src/context/FavouriteContext";

const bgColors = ["bg-[#E9B3A1]", "bg-[#B78CFF]", "bg-[#8EBEFF]"];

interface Props {
  moduleId: string;
}

export default function AllServices({ moduleId }: Props) {
  const { services, fetchServicesByModule, loading, error } =
    useModulewiseServices();

  // ✅ DEFINE STATE HERE
  const [viewAll, setViewAll] = useState(false);

  const { categoryId } = useParams<{ categoryId: string }>();

  useEffect(() => {
    if (moduleId) fetchServicesByModule(moduleId);
  }, [moduleId]);

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

  if (loading) return <p className="text-center py-10">Loading services...</p>;
  if (error)
    return <p className="text-center py-10 text-red-500">{error}</p>;
  if (!services.length)
    return <p className="text-center py-10">No services found.</p>;

  return (
    <section className="w-full mt-8 lg:mt-14">
      {/* HEADER */}
      <div className="max-w-[1440px] mx-auto px-4 mb-6 flex justify-between">
        
        
  {viewAll ? (
          <button
            onClick={() => setViewAll(false)}
            className="text-sm text-gray-600 hover:underline"
          >
            Back
          </button>
        ) : (
          <button
            onClick={() => setViewAll(true)}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View All
          </button>
        )}
        
      </div>

      {/* CONTENT */}
      <div className="max-w-[1440px] mx-auto px-4">
        <div
          className={
            viewAll
              ? "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6"
              : "flex gap-4"
          }
        >
          {viewAll ? (
            services.map((service, index) => {
              const fav = isFavourite(service._id);

              return(
              <Link
                key={service._id}
                href={`/MainModules/Franchise/${moduleId}/${categoryId}/${service._id}`}
              >
                <FranchiseMostPopularCard
                  image={service.thumbnailImage}
                  title={service.serviceName}
                  category={service.category.name}
                  rating={service.averageRating}
                  earning={service.franchiseDetails?.commission}
                  discount={`${
                    service.franchiseDetails?.franchiseModel?.[0]?.discount ?? 0
                  }%`}
                  monthly={`${service.franchiseDetails?.monthlyEarnPotential?.[0]?.range ?? ""}`}
                  investment={`${service.franchiseDetails?.investmentRange?.[0]?.range ?? ""}`}
                  area="500–1000 Sq"
                  bg={bgColors[index % bgColors.length]}
                   isFavourite={isFavourite(service._id)}

                   onToggleFavourite={() =>
                   handleToggleFavourite(service._id)
                   }
                />
              </Link>
              )
})
          ) : (
            <HorizontalScroll>
              {services.map((service, index) => {
                  const fav = isFavourite(service._id);

                return(

                <Link
                  key={service._id}
                  href={`/MainModules/Franchise/${moduleId}/${categoryId}/${service._id}`}
                >
                  <FranchiseMostPopularCard
                    image={service.thumbnailImage}
                    title={service.serviceName}
                    category={service.category.name}
                    rating={service.averageRating}
                    earning={service.franchiseDetails?.commission}
                    discount={`${
                      service.franchiseDetails?.franchiseModel?.[0]?.discount ??
                      0
                    }%`}
                    monthly={`${service.franchiseDetails?.monthlyEarnPotential?.[0]?.range ?? ""}`}
                    investment={`${service.franchiseDetails?.investmentRange?.[0]?.range ?? ""}`}
                    area="500–1000 Sq"
                    bg={bgColors[index % bgColors.length]}
                     isFavourite={isFavourite(service._id)}

                   onToggleFavourite={() =>
                   handleToggleFavourite(service._id)
                   }
                  />
                </Link>
                )
              })}
            </HorizontalScroll>
          )}
        </div>
      </div>
    </section>
  );
}
