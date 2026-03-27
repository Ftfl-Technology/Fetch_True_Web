"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

/* ---------- TYPES ---------- */

interface Category {
  _id: string;
  name: string;
}

interface KeyValue {
  key: string;
  value: string;
  icon?: string;
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

interface FranchiseModel {
  title: string;
  agreement: string;
  price: number;
  discount: number;
  gst: number;
  fees: number;
  _id: string;
}

interface Package {
  name: string;
  price: number;
  discount: number;
  discountedPrice: number;
  whatYouGet: string[];
  _id: string;
}

interface serviceDetails {
  packages:Package[];
}

interface FranchiseDetails {
  commission: string;
  investmentRange: InvestmentRange[];
  monthlyEarnPotential: MonthlyEarnPotential[];
  franchiseModel: FranchiseModel[];
  areaRequired:string;
}

interface Package {
  _id: string;
  name: string;
  price: number;
  discount: number;
  discountedPrice: number;
  whatYouGet: string[];
}

interface ServiceDetails {
  packages: Package[];
}

export interface PopularService {
  serviceId: string;
  serviceName: string;
  thumbnailImage: string;
  price: number;
  category: Category;
  serviceDetails: ServiceDetails;
  keyValues: KeyValue[];
  packages: Package[];
  totalReviews: number;
  franchiseDetails: FranchiseDetails;
  averageRating: number;
}

/* ---------- CONTEXT TYPE ---------- */

interface MostPopularContextType {
  services: PopularService[];
  loading: boolean;
  error: string | null;
  fetchMostPopular: (moduleId: string) => Promise<void>;
}

/* ---------- CONTEXT ---------- */

const MostPopularContext = createContext<MostPopularContextType | undefined>(
  undefined
);

/* ---------- HOOK ---------- */

export const useMostPopular = () => {
  const context = useContext(MostPopularContext);
  if (!context) {
    throw new Error(
      "useMostPopular must be used within MostPopularProvider"
    );
  }
  return context;
};

/* ---------- PROVIDER ---------- */

interface Props {
  children: ReactNode;
}

export const MostPopularProvider = ({ children }: Props) => {
  const [services, setServices] = useState<PopularService[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMostPopular = async (moduleId: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.fetchtrue.com/api/service/popular?moduleId=${moduleId}`
      );

      if (res.data?.success) {
        setServices(res.data.data);
      } else {
        setError("Failed to fetch most popular services");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
      else {
        setError("Failed to fetch Most Popular Services");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <MostPopularContext.Provider
      value={{ services, loading, error, fetchMostPopular }}
    >
      {children}
    </MostPopularContext.Provider>
  );
};
