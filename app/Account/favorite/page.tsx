// "use client";

// import FavouriteCard from "@/src/components/ui/FavouriteCard";


// export default function FavouritePage() {
//   const favourites = [
//     {
//       image: "/images/chatbot.jpg",
//       title: "AI Chatbot & Automation Service",
//       category: "AI Chatbot",
//       type: "AI Hub",
//       earnUpto: "Earn Up to 5%",
//       rating: 4.8,
//       reviews: "2,400 Reviews",
//       features: [
//         { title: "Setup 1–3 days" },
//         { title: "AI Training Included" },
//         { title: "Maintenance Auto-managed" },
//       ],
//       oldPrice: 5999,
//       price: 3999,
//       discount: "12% OFF",
//     },
//     {
//       image: "/images/loan.jpg",
//       title: "Personal Loan",
//       category: "Personal Loan",
//       type: "Finance",
//       earnUpto: "Earn Up to 5%",
//       rating: 4.6,
//       reviews: "2,400 Reviews",
//       features: [
//         { title: "Loan Amount Up to 20 Lac" },
//         { title: "Approval Time 24 Hrs" },
//         { title: "Duration 12–60 months" },
//         { title: "Interest starting 10.99%" },
//       ],
//     },
//   ];

//   return (
//     <div className="p-4 lg:p-6">
      
//       {/* Header */}
//       <div className="flex justify-between items-center mb-5">
//         <h1 className="text-lg lg:text-xl font-semibold">
//           My Favourites
//         </h1>

//         <button className="text-sm text-blue-600 font-medium hover:underline">
//           View All
//         </button>
//       </div>

//       {/* Grid Layout */}
//       {favourites.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
//           {favourites.map((item, index) => (
//             <FavouriteCard key={index} {...item} />
//           ))}
//         </div>
//       ) : (
//         <div className="bg-white rounded-xl shadow-sm p-10 text-center">
//           <p className="text-gray-500">No favourites yet</p>
//         </div>
//       )}
//     </div>
//   );
// }



// "use client";

// import { useEffect } from "react";
// import { useFavourites } from "@/src/context/FavouriteContext";
// import FavouriteCard from "@/src/components/ui/FavouriteCard";

// export default function FavouriteServices({ userId }: { userId: string }) {
//   const { favourites, loading, error, fetchFavourites } = useFavourites();


//   useEffect(() => {
//     if (userId) {
//       fetchFavourites(userId);
//     }
//   }, [userId,fetchFavourites]);

//   // if (loading) return <p>Loading favourites...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   if (!favourites.length) {
//     return <p>No favourite services yet.</p>;
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {favourites.map((service) => (
//         <FavouriteCard
//           key={service._id}
//           id={service._id}
//           title={service.serviceName}
//           image={service.thumbnailImage || service.category?.image}
//           moduleName={service.category?.name}
//           rating={service.averageRating}
//           reviews={service.totalReviews}
//           features={service.keyValues}
//           franchiseDetails={service.franchiseDetails}
//           packages={service.serviceDetails?.packages}
//         />
//       ))}
//     </div>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import { useFavourites } from "@/src/context/FavouriteContext";
// import FavouriteCard from "@/src/components/ui/FavouriteCard";

// export default function FavouriteServices({ userId }: { userId: string }) {
//   const { favourites, loading, error, fetchFavourites } = useFavourites();

//   useEffect(() => {
//     if (userId) {
//       fetchFavourites(userId);
//     }
//   }, [userId, fetchFavourites]);

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <div>
//       {/* ✅ Soft loading (no UI replace) */}
//       {/* {loading && (
//         <p className="text-sm text-gray-500 mb-3">
//           Updating favourites...
//         </p>
//       )} */}

//       {/* ✅ Empty state only when NOT loading */}
//       {!favourites.length && !loading ? (
//         <p>No favourite services yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {favourites.map((service) => (
//             <FavouriteCard
//               key={service._id}
//               id={service._id}
//               title={service.serviceName}
//               image={service.thumbnailImage || service.category?.image}
//               moduleName={service.category?.name}
//               rating={service.averageRating}
//               reviews={service.totalReviews}
//               features={service.keyValues}
//               franchiseDetails={service.franchiseDetails}
//               packages={service.serviceDetails?.packages}
//               isFavourite={true} 
//               onToggleFavourite={() => removeFavourite(userId, service._id)}  
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useEffect } from "react";
import { useFavourites } from "@/src/context/FavouriteContext";
import FavouriteCard from "@/src/components/ui/FavouriteCard";

export default function FavouriteServices({ userId }: { userId: string }) {
  const {
    favourites,
    loading,
    error,
    fetchFavourites,
    removeFavourite,
  } = useFavourites();

  useEffect(() => {
    if (userId) {
      fetchFavourites(userId);
    }
  }, [userId, fetchFavourites]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  const handleRemove = async (serviceId: string) => {
    await removeFavourite(userId, serviceId);
  };

  return (
    <div>
      {!favourites.length && !loading ? (
        <p>No favourite services yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favourites.map((service) => (
            <FavouriteCard
              key={service._id}
              id={service._id}
              title={service.serviceName}
              image={service.thumbnailImage || service.category?.image}
              moduleName={service.category?.name}
              rating={service.averageRating}
              reviews={service.totalReviews}
              features={service.keyValues}
              franchiseDetails={service.franchiseDetails}
              packages={service.serviceDetails?.packages}
              isFavourite={true} 
              onToggleFavourite={() => handleRemove(service._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}