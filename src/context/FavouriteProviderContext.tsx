"use client";

import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { ProviderId } from "firebase/auth";

/* ================= TYPES ================= */

interface StoreInfo {
  storeName: string;
  storePhone: string;
  storeEmail: string;
  module: string;
  zone: string;
  logo: string;
  cover: string;
  address: string;
  city: string;
  state: string;
  country: string;
  aboutUs: string;
  tags: string[];
  totalProjects: number;
  totalExperience: string;
}

interface Provider {
  _id: string;
  fullName: string;
  phoneNo: string;
  email: string;
  galleryImages: string[];
  subscribedServices: string[];
  averageRating: number;
  totalReviews: number;
  isStoreOpen: boolean;
  isRecommended: boolean;
  isTrending: boolean;
  providerId: string;
  storeInfo: StoreInfo;
  topRated: boolean;
  isPromoted: boolean;
}

/* ================= CONTEXT TYPE ================= */

interface FavouriteProvidersContextType {
  favouriteProviders: Provider[];
  loading: boolean;
  getFavouriteProviders: (userId: string) => Promise<void>;
   addFavouriteProviders: (userId: string, serviceId: string) => Promise<void>;
  removeFavouriteProviders: (userId: string,serviceId: string) => Promise<void>;

  isFavourite: (serviceId: string) => boolean;
}

/* ================= CONTEXT ================= */

const FavouriteProvidersContext = createContext<
  FavouriteProvidersContextType | undefined
>(undefined);

/* ================= PROVIDER ================= */

export const FavouriteProvidersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favouriteProviders, setFavouriteProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  

  const getFavouriteProviders = async (userId: string) => {
    try {
      setLoading(true);

      const res = await axios.get(
        `http://api.fetchtrue.com/api/users/favourite-providers/${userId}`
      );

      if (res.data.success) {
        setFavouriteProviders(res.data.data);
      }
    } catch (error) {
      console.error("Favourite Providers Error:", error);
    } finally {
      setLoading(false);
    }
  };

    /* ================= ADD FAVOURITE ================= */

const addFavouriteProviders = async (userId: string, providerId: string) => {
  try {
    console.log("ADD FAV CALLED", userId, providerId);

    await axios.put(
      `https://api.fetchtrue.com/api/users/favourite-providers/${userId}/${providerId}`
    );

    await getFavouriteProviders(userId);
  } catch (err: any) {
    console.error("Add favourite error", err);
    setError(err.message || "Failed to add favourite");
  }
};

  /* ================= REMOVE FAVOURITE ================= */

const removeFavouriteProviders = async (userId: string, providerId: string) => {
  try {
    setError(null);

    await axios.delete(
      `https://api.fetchtrue.com/api/users/favourite-providers/${userId}/${providerId}`
    );

    await getFavouriteProviders(userId);
  } catch (err: any) {
    setError(err.message || "Failed to remove favourite");
  }
};

  /* ================= CHECK ================= */

  const isFavourite = (providerId: string) =>
    favouriteProviders.some((fav) => fav._id === providerId);

  return (
    <FavouriteProvidersContext.Provider
      value={{
        favouriteProviders,
        loading,
        getFavouriteProviders,
        addFavouriteProviders,
        removeFavouriteProviders,
        isFavourite
      }}
    >
      {children}
    </FavouriteProvidersContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useFavouriteProviders = () => {
  const context = useContext(FavouriteProvidersContext);

  if (!context) {
    throw new Error(
      "useFavouriteProviders must be used within FavouriteProvidersProvider"
    );
  }

  return context;
};