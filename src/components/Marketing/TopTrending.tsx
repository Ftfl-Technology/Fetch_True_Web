// import MarketingCard from "../ui/MarketingCard";


// const recommendedData = [
//   {
//     image: "/image/marketingbanner.jpg",
//     title: "Logo Designing",
//     category: "Digital Marketing",
//     price: "3,999",
//   },
//   {
//     image: "/image/marketingbanner.jpg",
//     title: "Logo Designing",
//     category: "Digital Marketing",
//     price: "3,999",
//   },
//    {
//     image: "/image/marketingbanner.jpg",
//     title: "Logo Designing",
//     category: "Digital Marketing",
//     price: "3,999",
//   },
//   {
//     image: "/image/marketingbanner.jpg",
//     title: "Logo Designing",
//     category: "Digital Marketing",
//     price: "3,999",
//   },
//    {
//     image: "/image/marketingbanner.jpg",
//     title: "Logo Designing",
//     category: "Digital Marketing",
//     price: "3,999",
//   },
//   {
//     image: "/image/marketingbanner.jpg",
//     title: "Logo Designing",
//     category: "Digital Marketing",
//     price: "3,999",
//   },
// ];

// export default function TopTrending() {
//   return (
//     <>
//     <section className="w-full max-w-[1440px] mx-auto px-4 pt-8 lg:pt-15">
//       <div className=" flex items-center justify-between mb-4">
//         <h2 className="text-[24px] font-semibold">
//           Top Trending
//         </h2>
//       </div>

//       <div className="flex gap-4 overflow-x-auto scrollbar-hide">
//         {recommendedData.map((item, index) => (
//           <MarketingCard key={index} {...item} />
//         ))}
//       </div>
//     </section>

//     </>
//   );
// }



"use client";

import { useEffect } from "react";
import MarketingCard from "../ui/MarketingCard";
import { useTopTrending } from "@/src/context/TopTrendingContext";
import { useFavourites } from "@/src/context/FavouriteContext";
import { useAuth } from "@/src/context/AuthContext";
import HorizontalScroll from "../ui/HorizontalScroll";
import Link from "next/link";

interface Props {
  moduleId: string;
    searchQuery:string
    categoryId:string;

}

export default function TopTrending({ moduleId,searchQuery,categoryId }: Props) {
  const {
    services,
    loading,
    error,
    fetchTopTrending,
  } = useTopTrending();

  useEffect(() => {
    if (moduleId) {
      fetchTopTrending(moduleId);
    }
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

  const filteredServices =
  services?.filter((service) => {
    if (!searchQuery?.trim()) return true;

    const q = searchQuery.toLowerCase();

    return (
      service.serviceName?.toLowerCase().includes(q) ||
      service.category?.name?.toLowerCase().includes(q)
    );
  }) || [];

  if (loading) {
    return (
      <section className="w-full max-w-[1440px] mx-auto px-4 pt-8">
        <p className="text-center text-gray-500">
          Loading trending services...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full max-w-[1440px] mx-auto px-4 pt-8">
        <p className="text-center text-red-500">{error}</p>
      </section>
    );
  }

  if (!filteredServices.length) return null;

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 pt-8 lg:pt-15">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[24px] font-semibold">
          Top Trending
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        <HorizontalScroll>
          {filteredServices.map((service) => {
                  const firstPackage = service.serviceDetails?.packages?.[0];
                      const fav = isFavourite(service._id);
        
        
                  return (
                   <Link key={service._id} href={`/MainModules/Marketing/${moduleId}/${categoryId}/${service._id}`}>
            <MarketingCard
               
              title={service.serviceName}
              category={service.category?.name}
              keyvalues={service.keyValues}
              commission={service.franchiseDetails?.commission}
              price={Math.round(service.serviceDetails?.packages?.[0]?.price || 0)}
              discountedprice={Math.round(service.serviceDetails?.packages?.[0]?.discountedPrice || 0)}
              discount={Math.round(service.serviceDetails?.packages?.[0]?.discount || 0)}
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
                  );
                })}
                </HorizontalScroll>
      </div>
    </section>
  );
}
