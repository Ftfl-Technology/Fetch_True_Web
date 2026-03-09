// "use client";

// import { BsBookmark, BsGraphUpArrow } from "react-icons/bs";
// import { FaStar } from "react-icons/fa";
// import { FiPhone, FiMail } from "react-icons/fi";
// import { MdLocationOn } from "react-icons/md";
// import { CiClock2 } from "react-icons/ci";
// import { VscWorkspaceTrusted } from "react-icons/vsc";

// const providers = [
//   {
//     id: 1,
//     name: "Digital Boost Agency",
//     description: "Data-driven marketing to increase your conversions.",
//     phone: "+91 98456 26880",
//     email: "company@gmail.com",
//     location: "Plot 3, High Sky Building, Pune 415005",
//     services: ["SEO Specialist", "Logo Designing", "Brand Designing"],
//     experience: "6+ Years",
//     rating: 4,
//     reviews: 300,
//     status: "Available",
//   },
//   {
//     id: 2,
//     name: "Tech Wave Solutions",
//     description: "Custom software and scalable IT solutions.",
//     phone: "+91 99887 44556",
//     email: "techwave@gmail.com",
//     location: "Baner Road, Pune 411045",
//     services: ["Web Development", "App Development", "UI/UX Design"],
//     experience: "8+ Years",
//     rating: 5,
//     reviews: 520,
//     status: "Available",
//   },
// ];

// export default function SuggestedProviders() {
//   return (
//     <section className="w-full max-w-[1440px] mx-auto px-4 py-10 bg-white">
//       <h2 className="text-[18px] sm:text-[20px] font-semibold mb-6">
//         Suggested Providers
//       </h2>

//       <div className="flex gap-6 overflow-x-auto no-scrollbar">
//         {providers.map((item) => (
//           <div
//             key={item.id}
//             className="min-w-[350px] sm:min-w-[340px] lg:min-w-[383px] bg-white border-[1px] border-[#BEBEBE] rounded-[12px] p-4 relative "
//           >
            

//             {/* BOOKMARK */}
//             <div className="absolute top-4 right-4">
//               <BsBookmark />
//             </div>

//             {/* HEADER */}
//             <div className="flex gap-3 mt-5">
//               <img
//                 src="/image/profile.jpg"
//                 alt="provider"
//                 className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
//               />

//               <div className="flex-1">
//                 <h3 className="font-semibold text-[14px] sm:text-[16px]">
//                   {item.name}
//                 </h3>
//                 <p className="text-[11px] sm:text-[12px] text-[#868686]">
//                   {item.description}
//                 </p>

//                 {/* CONTACT */}
//                 <div className="mt-3 text-[10px] sm:text-[11px] text-[#606060] space-y-1">
//                   <div className="flex flex-col sm:flex-row sm:justify-between">
//                     <p className="flex items-center gap-2">
//                       <FiPhone size={13} color="#2164F4" />
//                       {item.phone}
//                     </p>
//                     <p className="flex items-center gap-2">
//                       <FiMail size={13} color="#2164F4" />
//                       {item.email}
//                     </p>
//                   </div>
//                   <p className="flex items-center gap-2">
//                     <MdLocationOn size={13} color="#2164F4" />
//                     {item.location}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* CATEGORY */}
//             <div className="flex justify-between items-center mt-4">
//               <p className="text-[12px] text-[#606060]">Services Category</p>
//               <span className="text-[12px] text-white bg-[#56B264] px-3 py-1 rounded-full">
//                 {item.status}
//               </span>
//             </div>

//             {/* TAGS */}
//             <div className="flex flex-wrap gap-2 mt-2">
//               {item.services.map((service, index) => (
//                 <span
//                   key={index}
//                   className="text-[12px] bg-[#F0F5FF] px-3 py-1 rounded-full"
//                 >
//                   {service}
//                 </span>
//               ))}
//             </div>

//             {/* ABOUT */}
//             <div className="mt-4 text-[12px] text-[#606060]">
//               <p>About Service</p>
//               <div className="flex flex-wrap items-center gap-2">
//                 <CiClock2 size={12} color="#2164F4" />
//                 {item.experience}
//                 <span className="text-[10px]">- Working Experience</span>
//                 <span className="flex items-center gap-1">
//                   <FaStar className="text-[#D56839]" /> {item.rating} Rating
//                 </span>
//                 <span className="text-[10px]">
//                   - by {item.reviews} review
//                 </span>
//               </div>
//             </div>

//             {/* SERVICE DETAILS */}
//             <div className="mt-3">
//               <p className="text-[12px] text-[#606060]">
//                 Services Details -
//               </p>

//               <div className="flex justify-between items-center text-xs text-gray-600 mt-1">
//                 <span className="flex items-center gap-1">
//                   <CiClock2 size={12} color="#2164F4" /> On Time
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <BsGraphUpArrow size={12} color="#2164F4" /> Consistent Work
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <VscWorkspaceTrusted size={12} color="#2164F4" /> Trusted
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect } from "react";
import { BsBookmark, BsGraphUpArrow } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { useRecommendedProviders } from "@/src/context/RecommendedProviderContext";
import { useFavouriteProviders } from "@/src/context/FavouriteProviderContext";
import { useAuth } from "@/src/context/AuthContext";
import { FaBookmark  } from "react-icons/fa";


interface Props {
  moduleId: string;
}

export default function SuggestedProviders({ moduleId }: Props) {
  const {
    providers,
    loading,
    error,
    fetchRecommendedProviders,
  } = useRecommendedProviders();

  const { getFavouriteProviders,addFavouriteProviders,removeFavouriteProviders,isFavourite } =
    useFavouriteProviders();

      const { user } = useAuth();
    
      const userId = user?._id;
    
      useEffect(() => {
      if (userId) {
        getFavouriteProviders(userId);
      }
    }, [userId]);

  useEffect(() => {
    if (moduleId) {
      fetchRecommendedProviders(moduleId);
    }
  }, [moduleId]);

  const handleToggleFavourite = async (serviceId: string) => {
  if (!userId) return;

  if (isFavourite(serviceId)) {
    await removeFavouriteProviders(userId, serviceId);
  } else {
    await addFavouriteProviders(userId, serviceId);
  }
};

  console.log("marketing provider module Id:",moduleId)

  if (loading) {
    return <p className="text-center py-10">Loading providers...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 py-10">{error}</p>;
  }

  if (!providers.length) {
    return <p className="text-center py-10">No providers found</p>;
  }

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 py-10 bg-white">
      <h2 className="text-[18px] sm:text-[20px] font-semibold mb-6">
        Suggested Providers
      </h2>

      <div className="flex gap-6 overflow-x-auto no-scrollbar">
        {providers.map((item) => (
          <div
            key={item._id}
            className="min-w-[350px] lg:min-w-[383px] bg-white border border-[#BEBEBE] rounded-[12px] p-4 relative"
          >
            {/* BOOKMARK */}
        {/* BOOKMARK */}
<button
  onClick={(e) => {
    e.stopPropagation();
    handleToggleFavourite(item._id);
  }}
  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
>
  <FaBookmark
    size={16}
    className={`transition ${
      isFavourite(item._id)
        ? "text-red-500 fill-red-500"
        : "text-gray-400"
    }`}
  />
</button>

            {/* HEADER */}
            <div className="flex gap-3 mt-5">
              <img
                src={item.storeInfo?.logo || "/image/profile.jpg"}
                alt="provider"
                className="w-14 h-14 rounded-full object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-[16px]">
                  {item.storeInfo?.storeName || item.fullName}
                </h3>

                <p className="text-[12px] text-[#868686]">
                  {item.storeInfo?.aboutUs}
                </p>

                {/* CONTACT */}
                <div className="mt-3 text-[11px] text-[#606060] space-y-1">
                  <div className="flex justify-between">
                    <p className="flex items-center gap-2">
                      <FiPhone size={13} color="#2164F4" />
                      {item.phoneNo}
                    </p>

                    <p className="flex items-center gap-2">
                      <FiMail size={13} color="#2164F4" />
                      {item.email}
                    </p>
                  </div>

                  <p className="flex items-center gap-2">
                    <MdLocationOn size={13} color="#2164F4" />
                    {item.storeInfo?.address},{" "}
                    {item.storeInfo?.city}
                  </p>
                </div>
              </div>
            </div>

            {/* CATEGORY */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-[12px] text-[#606060]">Services Category</p>
              <span
                className={`text-[12px] text-white px-3 py-1 rounded-full ${
                  item.isStoreOpen ? "bg-[#56B264]" : "bg-red-500"
                }`}
              >
                {item.isStoreOpen ? "Available" : "Closed"}
              </span>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-2">
              {item.category_list.map((service, index) => (
                <span
                  key={index}
                  className="text-[12px] bg-[#F0F5FF] px-3 py-1 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* ABOUT */}
            <div className="mt-4 text-[12px] text-[#606060]">
              <p>About Service</p>

              <div className="flex flex-wrap items-center gap-2">
                <CiClock2 size={12} color="#2164F4" />
                {item.storeInfo?.totalExperience || 0}+ Years
                <span className="text-[10px]">- Experience</span>

                <span className="flex items-center gap-1">
                  <FaStar className="text-[#D56839]" />
                  {item.averageRating} Rating
                </span>

                <span className="text-[10px]">
                  - by {item.totalReviews} reviews
                </span>
              </div>
            </div>

            {/* SERVICE DETAILS */}
            <div className="mt-3">
              <p className="text-[12px] text-[#606060]">
                Services Details -
              </p>

              <div className="flex justify-between items-center text-xs text-gray-600 mt-1">
                <span className="flex items-center gap-1">
                  <CiClock2 size={12} color="#2164F4" /> On Time
                </span>
                <span className="flex items-center gap-1">
                  <BsGraphUpArrow size={12} color="#2164F4" /> Consistent
                </span>
                <span className="flex items-center gap-1">
                  <VscWorkspaceTrusted size={12} color="#2164F4" /> Trusted
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
