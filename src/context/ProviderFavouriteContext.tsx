// context/ProviderFavouriteContext.tsx
"use client";

import axios from "axios";
import React, { createContext, useContext, useState, ReactNode } from "react";

/* ================= TYPES ================= */

interface ProviderStoreInfo {
  storeName: string;
  logo?: string;
  cover?: string;
  aboutUs?: string;
  address?: string;
  city?: string;
  state?: string;
  tags?: string[];
  totalExperience?: string;
}

interface FavouriteProvider {
  _id: string;
  fullName: string;
  phoneNo: string;
  email: string;
  storeInfo?: ProviderStoreInfo;
  category_list: string[];
  isStoreOpen: boolean;
  averageRating: number;
  totalReviews: number;
}

interface ProviderFavouriteContextType {
  favourites: FavouriteProvider[];
  loading: boolean;
  error: string | null;

  fetchFavourites: (userId: string) => Promise<void>;
  addFavourite: (userId: string, providerId: string) => Promise<void>;
  removeFavourite: (userId: string, providerId: string) => Promise<void>;
  isFavourite: (providerId: string) => boolean;
}

/* ================= CONTEXT ================= */

const ProviderFavouriteContext = createContext<ProviderFavouriteContextType | undefined>(
  undefined
);

/* ================= PROVIDER ================= */

export const ProviderFavouriteProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<FavouriteProvider[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ================= FETCH ================= */

  const fetchFavourites = async (userId: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.fetchtrue.com/api/users/favourite-providers/${userId}`
      );

      if (!res.data.success) {
        throw new Error(res.data.message || "Failed to fetch provider favourites");
      }

      setFavourites(res.data.data || []);
      console.log("Provider favourites fetched:", res.data.data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      console.error("Fetch provider favourites error:", err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= ADD FAVOURITE ================= */

  const addFavourite = async (userId: string, providerId: string) => {
    try {
      console.log("ADD PROVIDER FAV CALLED", userId, providerId);

      await axios.put(
        `https://api.fetchtrue.com/api/users/favourite-providers/${userId}/${providerId}`
      );

      await fetchFavourites(userId);
    } catch (err: any) {
      console.error("Add provider favourite error", err);
      setError(err.message || "Failed to add provider favourite");
    }
  };

  /* ================= REMOVE FAVOURITE ================= */

  const removeFavourite = async (userId: string, providerId: string) => {
    try {
      setError(null);

      await axios.delete(
        `https://api.fetchtrue.com/api/users/favourite-providers/${userId}/${providerId}`
      );

      await fetchFavourites(userId);
    } catch (err: any) {
      console.error("Remove provider favourite error", err);
      setError(err.message || "Failed to remove provider favourite");
    }
  };

  /* ================= CHECK ================= */

  const isFavourite = (providerId: string) =>
    favourites.some((fav) => fav._id === providerId);

  return (
    <ProviderFavouriteContext.Provider
      value={{
        favourites,
        loading,
        error,
        fetchFavourites,
        addFavourite,
        removeFavourite,
        isFavourite,
      }}
    >
      {children}
    </ProviderFavouriteContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useProviderFavourites = () => {
  const context = useContext(ProviderFavouriteContext);

  if (!context) {
    throw new Error("useProviderFavourites must be used within ProviderFavouriteProvider");
  }

  return context;
};