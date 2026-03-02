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

// export default function MostlyUsed() {
//   return (
//     <section className="w-full max-w-[1440px] mx-auto px-4 ">
//       <div className=" flex items-center justify-between mb-4">
//         <h2 className="text-[24px] font-semibold">
//           Mostly Used
//         </h2>
//       </div>

//       <div className="flex gap-4 overflow-x-auto scrollbar-hide">
//         {recommendedData.map((item, index) => (
//           <MarketingCard key={index} {...item} />
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect } from "react";
import MarketingCard from "../ui/MarketingCard";
import { useMostPopular } from "@/src/context/MostPopularContext";

interface Props {
  moduleId: string;
    searchQuery:string

}

export default function MostlyUsed({ moduleId,searchQuery }: Props) {
  const {
    services,
    loading,
    error,
    fetchMostPopular,
  } = useMostPopular();

  useEffect(() => {
    if (moduleId) {
      fetchMostPopular(moduleId);
    }
  }, [moduleId]);

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
      <section className="w-full max-w-[1440px] mx-auto px-4">
        <p className="text-center text-gray-500">
          Loading most used services...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full max-w-[1440px] mx-auto px-4">
        <p className="text-center text-red-500">{error}</p>
      </section>
    );
  }

  if (!filteredServices.length) return null;

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[24px] font-semibold">
          Mostly Used
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {filteredServices.map((service) => {
          const firstPackage =
            service.serviceDetails?.packages?.[0] ||
            service.packages?.[0];

          return (
            <MarketingCard
              key={service.serviceId}
              image={service.thumbnailImage || "/image/marketingbanner.jpg"}
              title={service.serviceName}
              category={service.category?.name}
              mode={service.franchiseDetails?.commission}
              price={
                firstPackage?.discountedPrice ??
                firstPackage?.price ??
                service.price ??
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
