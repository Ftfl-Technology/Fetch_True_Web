"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCategorywiseServices } from "@/src/context/CategorywiseServiceContext";
import HorizontalScroll from "../ui/HorizontalScroll";
import ServiceCard from "../ui/ServiceCard";
import { useFavourites } from "@/src/context/FavouriteContext";
import { useAuth } from "@/src/context/AuthContext";



interface Props {
  categoryId: string;
    moduleId: string;
  selectedSubCategory?: string | null;
    searchQuery: string;

}

export default function AllServices({ categoryId, moduleId, selectedSubCategory,searchQuery }: Props) {
  const { services, fetchServicesByCategory, loading, error } = useCategorywiseServices();

  const [viewAll, setViewAll] = useState(false);

 useEffect(() => {
    if (categoryId) {
      fetchServicesByCategory(categoryId);
    }
  }, [categoryId, fetchServicesByCategory]);

  console.log("moduleId in legal category :",moduleId,categoryId)

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

    const matchSub =
      !selectedSubCategory || service.subcategory?._id === selectedSubCategory;

    const matchSearch =
      !searchQuery?.trim() ||
      service.serviceName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category?.name?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchSub && matchSearch;

  }) || [];   

  if (loading)
    return <p className="text-center py-10">Loading All Legal services...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
 if (filteredServices.length === 0)
  return (
    <p className="text-center py-10">
      No services found
    </p>
  );

  return (
    <section className="w-full mt-8 lg:mt-14">
      {/* HEADER */}
      <div className="max-w-[1440px] mx-auto px-4 pb-8 py-8 flex justify-between">
        {/* <h2 className="text-[22px] font-semibold">All Services</h2> */}

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
            filteredServices.map((service) => {
              
              return(
              <Link
                key={service._id}
                href={`/MainModules/Legal-Services/${moduleId}/${categoryId}/${service._id}`}
              >
                <ServiceCard  
                                    key={service._id}
                                title={service.serviceName}
                                category={service.category?.name}
                                keyvalues={service.keyValues}
                                commission={service.franchiseDetails?.commission}
                                price={service.serviceDetails?.packages?.[0]?.price || 0}
                                discountedprice={service.serviceDetails?.packages?.[0]?.discountedPrice || 0}
                                discount={service.serviceDetails?.packages?.[0]?.discount || 0}
                                rating={Math.round(service.averageRating || 0)}
                                totalreviews={service.totalReviews}
                                image={
                                  service.thumbnailImage ||
                                  service.category?.image ||
                                  "/image/defaultService.jpg"
                                }
                                slug={service.category?.name
                                  ?.toLowerCase()
                                  .replace(/\s+/g, "-")}
                                detailslug={service._id}
                                 isFavourite={isFavourite(service._id)}

                   onToggleFavourite={() =>
                   handleToggleFavourite(service._id)
                   }
                  
                                  />
              </Link>
            )})
          ) : (
            <HorizontalScroll>
              {filteredServices.map((service) => {
              const fav = isFavourite(service._id);
              return(
              <Link
                key={service._id}
                href={`/MainModules/Legal-Services/${moduleId}/${categoryId}/${service._id}`}
              >
                <ServiceCard  
                                    key={service._id}
                                title={service.serviceName}
                                category={service.category?.name}
                                keyvalues={service.keyValues}
                                commission={service.franchiseDetails?.commission}
                                price={service.serviceDetails?.packages?.[0]?.price || 0}
                                discountedprice={service.serviceDetails?.packages?.[0]?.discountedPrice || 0}
                                discount={service.serviceDetails?.packages?.[0]?.discount || 0}
                                rating={Math.round(service.averageRating || 0)}
                                totalreviews={service.totalReviews}
                                image={
                                  service.thumbnailImage ||
                                  service.category?.image ||
                                  "/image/defaultService.jpg"
                                }
                                slug={service.category?.name
                                  ?.toLowerCase()
                                  .replace(/\s+/g, "-")}
                                detailslug={service._id}
                                 isFavourite={isFavourite(service._id)}

                   onToggleFavourite={() =>
                   handleToggleFavourite(service._id)
                   }
                  
                                  />
              </Link>
            )})}
            </HorizontalScroll>
          )}
        </div>
      </div>
    </section>
  );
}