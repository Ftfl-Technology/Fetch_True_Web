// "use client";

// import { FaStar } from "react-icons/fa";
// import { CiBookmark } from "react-icons/ci";
// import { VscWorkspaceTrusted } from "react-icons/vsc";

// import Image from "next/image";

// const popularData = [
//   {
//     id: 1,
//     bg: "bg-[#E9B3A1]",
//   },
//   {
//     id: 2,
//     bg: "bg-[#B78CFF]",
//   },
//   {
//     id: 3,
//     bg: "bg-[#8EBEFF]",
//   },
//   {
//     id: 4,
//     bg: "bg-[#E9B3A1]",
//   },
//   {
//     id: 5,
//     bg: "bg-[#B78CFF]",
//   },
//   {
//     id: 6,
//     bg: "bg-[#8EBEFF]",
//   },
// ];

// export default function MostPopular() {
//   return (
//     <section className="w-full mt-8 lg:mt-14">
//       {/* HEADER */}
//       <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center mb-6">
//         <h2 className="text-[22px] font-semibold">Most Popular</h2>
        
//       </div>

//       {/* SCROLL */}
//       <div className="max-w-[1440px] mx-auto px-4 overflow-x-auto no-scrollbar">
//         <div className="flex gap-4">
//           {popularData.map((item) => (
//             <div
//               key={item.id}
//               className={`min-w-[330px] rounded-[16px] p-3 text-white ${item.bg}`}
//             >
//               {/* IMAGE */}
//               <div className="relative w-full h-[150px] rounded-[12px] overflow-hidden">
//                 <Image
//                   src="/image/thumbnailMain.jpg"
//                   alt="property"
//                   fill
//                   className="object-cover"
//                 />

//                 {/* VERIFIED */}
//                 <div className="absolute top-2 left-2 bg-white border border-[#E6E6E6] rounded-[4.26px] p-1 flex items-center">
//                             <VscWorkspaceTrusted size={10.48} color="#2164F4" />
//                           </div>

//                 {/* BOOKMARK */}
//                 <div className="absolute top-2 right-2 w-[22px] h-[22px] bg-black/70 rounded-full flex items-center justify-center">
//                   <CiBookmark size={13} />
//                 </div>
//               </div>

//               {/* CONTENT */}
//               <div className="mt-3">
//                 <div className="flex justify-between gap-2">
//                   <div>
//                 <h3 className="text-[15px] font-semibold leading-tight">
//                   Property Buying & Selling
//                 </h3>
//                 <p className="text-[12px] opacity-90">Real Estate</p>

//                 {/* RATING */}
//                 <div className="flex items-center gap-1 mt-1">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar key={i} size={12} color="#FFD700" />
//                   ))}
//                   <span className="text-[11px] ">
//                     2,400+ Reviews
//                   </span>
//                 </div>
//                 </div>

//                 {/* BADGES */}
//                 <div className="flex flex-col gap-2 mt-2">
//                   <span className="bg-[#6FA8FF] text-[11px] px-2 py-[2px] rounded">
//                     Earn Upto 5%
//                   </span>
//                   <span className="bg-[#7CFF9B] text-[11px] text-green-900 px-2 py-[2px] rounded">
//                     Discount 30%
//                   </span>
//                 </div>
//                 </div>

//                 {/* STATS */}
//                 <div className="grid grid-cols-3 gap-2 text-center text-[11px] mt-4 p-3 border-white/30  bg-[#FFFFFF30] rounded-[15px]">
//                   <div>
//                     <p className="font-semibold">₹1–3 Lak</p>
//                     <p className="opacity-80">Monthly Earning</p>
//                   </div>
//                   <div className="border-x border-white/30">
//                     <p className="font-semibold">₹10–20 Lak</p>
//                     <p className="opacity-80">Investment</p>
//                   </div>
//                   <div>
//                     <p className="font-semibold">500–1000 Sq</p>
//                     <p className="opacity-80">Area</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect } from "react";
import FranchiseMostPopularCard from "../ui/FranchiseMostPopularCard";
import { useMostPopular } from "@/src/context/MostPopularContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import HorizontalScroll from "../ui/HorizontalScroll";

const bgColors = [
  "bg-[#E9B3A1]",
  "bg-[#B78CFF]",
  "bg-[#8EBEFF]",
];

interface Props {
  moduleId: string;
  searchQuery:string
}

export default function MostPopular({ moduleId,searchQuery }: Props) {
  const { services, fetchMostPopular, loading, error } = useMostPopular();

    const { categoryId } = useParams<{
    moduleId: string;
    categoryId: string;
  }>();

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
      fetchMostPopular(moduleId);
    }
  }, [moduleId]);

  if (loading)
    return <p className="text-center py-10">Loading recommended services...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (filteredServices.length === 0)
    return <p className="text-center py-10">No recommended services found.</p>;

  return (
    <section className="w-full mt-8 lg:mt-14">
      {/* HEADER */}
      <div className="max-w-[1440px] mx-auto px-4 mb-6">
        <h2 className="text-[22px] font-semibold">Most Popular</h2>
      </div>

      {/* SCROLL */}
      <div className="max-w-[1440px] mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-4">
          <HorizontalScroll>
          {filteredServices.map((service, index) => {
            const investment =
              service.franchiseDetails.investmentRange?.[0];
            const monthly =
              service.franchiseDetails.monthlyEarnPotential?.[0];
            const discount =
              service.franchiseDetails.franchiseModel?.[0]?.discount;

            return (
                          <Link key={service.serviceId} href={`/MainModules/Franchise/${moduleId}/${categoryId}/${service.serviceId}`}>
            
              <FranchiseMostPopularCard
                key={service.serviceId}
                image={service.thumbnailImage}
                title={service.serviceName}
                category={service.category.name}
                rating={service.averageRating}
                earning={service.franchiseDetails.commission}
                discount={`${discount ?? 0}%`}
                monthly={`${monthly?.range} ${monthly?.parameters}`}
                investment={`${investment?.range} ${investment?.parameters}`}
                area="500–1000 Sq"
                bg={bgColors[index % bgColors.length]}
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

