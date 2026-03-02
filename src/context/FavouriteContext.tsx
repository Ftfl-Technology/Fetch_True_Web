// "use client";

// import axios from "axios";
// import React, {
//   createContext,
//   useContext,
//   useState,
//   ReactNode,
// } from "react";

// /* ================= TYPES ================= */

// interface KeyValue {
//   key: string;
//   value: string;
//   icon?: string;
//   _id: string;
// }

// interface FranchiseModel {
//   title: string;
//   agreement: string;
//   price: number;
//   discount?: number;
//   discountedPrice:number;
//   gst: number;
//   fees: number;
//   _id: string;
// }

// interface InvestmentRange {
//   range: string;
//   parameters: string;
//   _id: string;
// }

// interface MonthlyEarnPotential {
//   range: string;
//   parameters: string;
//   _id: string;
// }

// interface FranchiseDetails {
//   commission: string;
//   investmentRange: InvestmentRange[];
//   monthlyEarnPotential: MonthlyEarnPotential[];
//   franchiseModel: FranchiseModel[];
// }



// interface serviceDetails {
//   packages:Package[];
// }

// interface Category {
//   _id: string;
//   name: string;
//   image: string;
// }

// interface Package {
//   _id: string;
//   name: string;
//   price: number;
//   discount: number;
//   discountedPrice: number;
//   whatYouGet: string[];
// }




// interface FavouriteService {
//   _id: string;
//   serviceName: string;
//   category: Category;
//   thumbnailImage?: string;
//   keyValues: KeyValue[];
//   serviceDetails: serviceDetails; 
//   franchiseDetails: FranchiseDetails;
//   averageRating: number;
//   totalReviews: number;
//   recommendedServices: boolean;
// }

// interface FavouriteContextType {
//   favourites: FavouriteService[];
//   loading: boolean;
//   error: string | null;
//   fetchFavourites: (userId: string) => Promise<void>;
//   clearFavourites: () => void;

//   toggleFavourite: (serviceId: string, userId: string) => Promise<void>;
//   isFavourite: (serviceId: string) => boolean;
// }

// /* ================= CONTEXT ================= */

// const FavouriteContext = createContext<FavouriteContextType | undefined>(
//   undefined
// );

// /* ================= PROVIDER ================= */

// export const FavouriteProvider = ({
//   children,
// }: {
//   children: ReactNode;
// }) => {
//   const [favourites, setFavourites] = useState<FavouriteService[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   /* ================= FETCH ================= */

//   const fetchFavourites = async (userId: string) => {
//     try {
//       setLoading(true);
//       setError(null);

//       const res = await axios.get(
//         `https://api.fetchtrue.com/api/users/favourite-services/${userId}`
//       );

//       if (!res.data.success) {
//         throw new Error(res.data.message || "Failed to fetch favourites");
//       }

//       setFavourites(res.data.data || []);
//     } catch (err: any) {
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= CLEAR ================= */

//   const clearFavourites = () => {
//     setFavourites([]);
//     setError(null);
//   };

//   const toggleFavourite = async (serviceId: string, userId: string) => {
//   try {
//     await axios.post(
//       "https://api.fetchtrue.com/api/users/toggle-favourite",
//       { serviceId, userId }
//     );

//     // Refresh favourites after toggle
//     fetchFavourites(userId);
//   } catch (err) {
//     console.error("Toggle favourite failed", err);
//   }
// };

// const isFavourite = (serviceId: string) => {
//   return favourites.some((fav) => fav._id === serviceId);
// };


//   return (
//     <FavouriteContext.Provider
//       value={{
//   favourites,
//   loading,
//   error,
//   fetchFavourites,
//   clearFavourites,
//   toggleFavourite,
//   isFavourite,
// }}

//     >
//       {children}
//     </FavouriteContext.Provider>
//   );
// };

// /* ================= HOOK ================= */

// export const useFavourites = () => {
//   const context = useContext(FavouriteContext);

//   if (!context) {
//     throw new Error("useFavourites must be used within FavouriteProvider");
//   }

//   return context;
// };




// "use client";

// import axios from "axios";
// import React, {
//   createContext,
//   useContext,
//   useState,
//   ReactNode,
// } from "react";

// /* ================= TYPES ================= */

// interface KeyValue {
//   key: string;
//   value: string;
//   icon?: string;
//   _id: string;
// }

// interface FranchiseModel {
//   title: string;
//   agreement: string;
//   price: number;
//   discount?: number;
//   discountedPrice: number;
//   gst: number;
//   fees: number;
//   _id: string;
// }

// interface InvestmentRange {
//   range: string;
//   parameters: string;
//   _id: string;
// }

// interface MonthlyEarnPotential {
//   range: string;
//   parameters: string;
//   _id: string;
// }

// interface FranchiseDetails {
//   commission: string;
//   investmentRange: InvestmentRange[];
//   monthlyEarnPotential: MonthlyEarnPotential[];
//   franchiseModel: FranchiseModel[];
// }

// interface ServiceDetails {
//   packages: Package[];
// }

// interface Category {
//   _id: string;
//   name: string;
//   image: string;
// }

// interface Package {
//   _id: string;
//   name: string;
//   price: number;
//   discount: number;
//   discountedPrice: number;
//   whatYouGet: string[];
// }

// interface FavouriteService {
//   _id: string;
//   serviceName: string;
//   category: Category;
//   thumbnailImage?: string;
//   keyValues: KeyValue[];
//   serviceDetails: ServiceDetails;
//   franchiseDetails: FranchiseDetails;
//   averageRating: number;
//   totalReviews: number;
//   recommendedServices: boolean;
// }

// interface FavouriteContextType {
//   favourites: FavouriteService[];
//   loading: boolean;
//   error: string | null;

//   fetchFavourites: (userId: string) => Promise<void>;
//   clearFavourites: () => void;

//   addFavourite: (serviceId: string, userId: string) => Promise<void>;
//   toggleFavourite: (serviceId: string, userId: string) => Promise<void>;
//   isFavourite: (serviceId: string) => boolean;
// }

// /* ================= CONTEXT ================= */

// const FavouriteContext = createContext<FavouriteContextType | undefined>(
//   undefined
// );

// /* ================= PROVIDER ================= */

// export const FavouriteProvider = ({
//   children,
// }: {
//   children: ReactNode;
// }) => {
//   const [favourites, setFavourites] = useState<FavouriteService[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   /* ================= FETCH FAVOURITES ================= */

//   const fetchFavourites = async (userId: string) => {
//     try {
//       setLoading(true);
//       setError(null);

//       const res = await axios.get(
//         `https://api.fetchtrue.com/api/users/favourite-services/${userId}`
//       );

//       if (!res.data.success) {
//         throw new Error(res.data.message || "Failed to fetch favourites");
//       }

//       setFavourites(res.data.data || []);
//     } catch (err: any) {
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= CLEAR ================= */

//   const clearFavourites = () => {
//     setFavourites([]);
//     setError(null);
//   };

//   /* ================= ADD FAVOURITE ================= */

//   const addFavourite = async (serviceId: string, userId: string) => {
//     try {
//       setError(null);

//       await axios.post(
//         `https://api.fetchtrue.com/api/users/favourite-services/${userId}/${serviceId}`
//       );

//       await fetchFavourites(userId);
//     } catch (err: any) {
//       console.error("Add favourite failed", err);
//       setError(err.message || "Failed to add favourite");
//     }
//   };

//   /* ================= TOGGLE FAVOURITE ================= */

//   const toggleFavourite = async (serviceId: string, userId: string) => {
//     try {
//       setError(null);

//       await axios.post(
//         "https://api.fetchtrue.com/api/users/toggle-favourite",
//         { serviceId, userId }
//       );

//       await fetchFavourites(userId);
//     } catch (err: any) {
//       console.error("Toggle favourite failed", err);
//       setError(err.message || "Failed to toggle favourite");
//     }
//   };

//   /* ================= CHECK ================= */

//   const isFavourite = (serviceId: string) => {
//     return favourites.some((fav) => fav._id === serviceId);
//   };

//   return (
//     <FavouriteContext.Provider
//       value={{
//         favourites,
//         loading,
//         error,
//         fetchFavourites,
//         clearFavourites,
//         addFavourite,
//         toggleFavourite,
//         isFavourite,
//       }}
//     >
//       {children}
//     </FavouriteContext.Provider>
//   );
// };

// /* ================= HOOK ================= */

// export const useFavourites = () => {
//   const context = useContext(FavouriteContext);

//   if (!context) {
//     throw new Error("useFavourites must be used within FavouriteProvider");
//   }

//   return context;
// };




"use client";

import axios from "axios";
import React, { createContext, useContext, useState, ReactNode } from "react";

/* ================= TYPES ================= */

interface KeyValue {
  key: string;
  value: string;
  icon?: string;
  _id: string;
}

interface FranchiseModel {
  title: string;
  agreement: string;
  price: number;
  discount?: number;
  discountedPrice: number;
  gst: number;
  fees: number;
  _id: string;
}

interface InvestmentRange {
  range: string;
  parameters: string;
  _id: string;
}

interface MonthlyEarnPotential {
  range: string;
  parameters: string;
  _id: string;
}

interface FranchiseDetails {
  commission: string;
  investmentRange: InvestmentRange[];
  monthlyEarnPotential: MonthlyEarnPotential[];
  franchiseModel: FranchiseModel[];
}

interface ServiceDetails {
  packages: Package[];
}

interface Category {
  _id: string;
  name: string;
  image: string;
}

interface Package {
  _id: string;
  name: string;
  price: number;
  discount: number;
  discountedPrice: number;
  whatYouGet: string[];
}

interface FavouriteService {
  _id: string;
  serviceName: string;
  category: Category;
  thumbnailImage?: string;
  keyValues: KeyValue[];
  serviceDetails: ServiceDetails;
  franchiseDetails: FranchiseDetails;
  averageRating: number;
  totalReviews: number;
  recommendedServices: boolean;
}

interface FavouriteContextType {
  favourites: FavouriteService[];
  loading: boolean;
  error: string | null;

  fetchFavourites: (userId: string) => Promise<void>;
  clearFavourites: () => void;

  addFavourite: (serviceId: string, userId: string) => Promise<void>;
  removeFavourite: (serviceId: string, userId: string) => Promise<void>;
  isFavourite: (serviceId: string) => boolean;
}

/* ================= CONTEXT ================= */

const FavouriteContext = createContext<FavouriteContextType | undefined>(
  undefined
);

/* ================= PROVIDER ================= */

export const FavouriteProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<FavouriteService[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ================= FETCH ================= */

  const fetchFavourites = async (userId: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.fetchtrue.com/api/users/favourite-services/${userId}`
      );

      if (!res.data.success) {
        throw new Error(res.data.message || "Failed to fetch favourites");
      }

      setFavourites(res.data.data || []);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /* ================= CLEAR ================= */

  const clearFavourites = () => {
    setFavourites([]);
    setError(null);
  };

  /* ================= ADD ================= */

  const addFavourite = async (serviceId: string, userId: string) => {
    try {
      await axios.post(
        `https://api.fetchtrue.com/api/users/favourite-services/${userId}/${serviceId}`
      );

      await fetchFavourites(userId);
    } catch (err: any) {
      console.error("Add favourite failed", err);
      setError(err.message || "Failed to add favourite");
    }
  };

  /* ================= REMOVE ================= */

  const removeFavourite = async (serviceId: string, userId: string) => {
    try {
      await axios.delete(
        `https://api.fetchtrue.com/api/users/favourite-services/${userId}/${serviceId}`
      );

      await fetchFavourites(userId);
    } catch (err: any) {
      console.error("Remove favourite failed", err);
      setError(err.message || "Failed to remove favourite");
    }
  };

  /* ================= CHECK ================= */

  const isFavourite = (serviceId: string) =>
    favourites.some((fav) => fav._id === serviceId);

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        loading,
        error,
        fetchFavourites,
        clearFavourites,
        addFavourite,
        removeFavourite,
        isFavourite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useFavourites = () => {
  const context = useContext(FavouriteContext);

  if (!context) {
    throw new Error("useFavourites must be used within FavouriteProvider");
  }

  return context;
};

