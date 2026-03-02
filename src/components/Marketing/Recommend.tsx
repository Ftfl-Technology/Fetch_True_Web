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

// export default function RecommendedForYou() {
//   return (
//     <>
//     <section className="w-full max-w-[1440px] mx-auto px-4 py-8 lg:py-15">
//       <div className=" flex items-center justify-between mb-4">
//         <h2 className="text-[24px] font-semibold">
//           Recommended For You
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
import { useRecommendedServices } from "@/src/context/RecommendedContext";

interface Props {
  moduleId: string;
    searchQuery:string

}

export default function RecommendedForYou({ moduleId,searchQuery }: Props) {
  const {
    services,
    loading,
    error,
    fetchRecommendedServices,
  } = useRecommendedServices();

  useEffect(() => {
    if (moduleId) {
      fetchRecommendedServices(moduleId);
    }
  }, [moduleId]);

  if (loading) {
    return (
      <section className="w-full max-w-[1440px] mx-auto px-4 py-8">
        <p className="text-center text-gray-500">Loading recommendations...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full max-w-[1440px] mx-auto px-4 py-8">
        <p className="text-center text-red-500">{error}</p>
      </section>
    );
  }
  const filteredServices =
  services?.filter((service) => {
    if (!searchQuery?.trim()) return true;

    const q = searchQuery.toLowerCase();

    return (
      service.serviceName?.toLowerCase().includes(q) ||
      service.category?.name?.toLowerCase().includes(q)
    );
  }) || [];

  if (!filteredServices.length) return null;

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 py-8 lg:py-15">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[24px] font-semibold">
          Recommended For You
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {filteredServices.map((service) => {
          const firstPackage = service.serviceDetails?.packages?.[0];

          return (
            <MarketingCard
              key={service._id}
              image={service.thumbnailImage || "/image/marketingbanner.jpg"}
              title={service.serviceName}
              category={service.category?.name}
              mode={service.franchiseDetails?.commission}
              price={
                firstPackage?.discountedPrice ??
                firstPackage?.price ??
                "N/A"
              }
              rating={Math.round(service.averageRating || 4)}
              reviews={`${service.totalReviews || 0}+ Reviews`}
              discount={
                firstPackage?.discount
                  ? `Discount ${firstPackage.discount}%`
                  : undefined
              }
              earnLabel={
                service.keyValues?.find(k => k.key === "earn")?.value ||
                "Earn Up to 5%"
              }
            />
          );
        })}
      </div>
    </section>
  );
}
