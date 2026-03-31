"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import axios from "axios";

/* ================= TYPES ================= */

export interface Category {
  _id: string;
  name: string;
  module: string;
  image: string;
  sortOrder: number;
}

export interface SubCategory{
  _id:string;
  name:string;
}

export interface KeyValue {
  key: string;
  value: string;
  icon?: string;
  _id: string;
}

export interface FranchiseModel {
  title: string;
  agreement: string;
  price: number;
  discount?: number;
  gst: number;
  fees: number;
  _id: string;
}

export interface InvestmentRange {
  range: string;
  parameters: string;
  _id: string;
}

export interface MonthlyEarnPotential {
  range: string;
  parameters: string;
  _id: string;
}

export interface FranchiseDetails {
  commission: string;
  termsAndConditions: string;
  investmentRange: InvestmentRange[];
  monthlyEarnPotential: MonthlyEarnPotential[];
  franchiseModel: FranchiseModel[];
  extraSections?: any[];
  extraImages?: string[];
    areaRequired:string;

}

export interface ServiceDetails {
  businessFundamental?: {
    description: string;
    points: string[];
  };
  duration?: {
    weeks: number | null;
    hours: number | null;
  };
  benefits?: string[];
  aboutUs?: string[];
  highlight?: string[];
  document?: string[];
  assuredByFetchTrue?: {
    title: string;
    icon: string;
    description: string;
    _id: string;
  }[];
  howItWorks?: string[];
  termsAndConditions?: string[];
  faq?: {
    question: string;
    answer: string;
    _id: string;
  }[];
  extraSections?: any[];
  whyChooseUs?: {
    title: string;
    icon: string;
    description: string;
    _id: string;
  }[];
  packages?: any[];
  weRequired?: {
    title: string;
    description: string;
    _id: string;
  }[];
  weDeliver?: {
    title: string;
    description: string;
    _id: string;
  }[];
  moreInfo?: {
    title: string;
    image: string;
    description: string;
    _id: string;
  }[];
  connectWith?: {
    name: string;
    mobileNo: string;
    email: string;
    _id: string;
  }[];
  timeRequired?: string[];
  extraImages?: string[];
  operatingCities?: string[];
  brochureImage?: string[];
  emiAvailable?: string[];
  counter?: any[];
  franchiseOperatingModel?: any[];
  keyAdvantages?: any[];
  completeSupportSystem?: {
    icon: string;
    title: string;
    lists: string[];
    _id: string;
  }[];
  trainingDetails?: string[];
  agreementDetails?: any[];
  goodThings?: any[];
  compareAndChoose?: any[];
  companyDetails?: any[];
  roi?: string[];
  level?: string;
  lessonCount?: number | null;
  whatYouWillLearn?: any[];
  eligibleFor?: any[];
  courseCurriculum?: any[];
  courseIncludes?: any[];
  certificateImage?: string[];
  whomToSell?: any[];
  include?: any[];
  notInclude?: any[];
  safetyAndAssurance?: any[];
}

export interface Service {
  _id: string;
  serviceName: string;
  category: Category;
  subcategory: SubCategory;
  price: number;
  discount: number;
  gst: number;
  includeGst: boolean;
  gstInRupees?: number;
  totalWithGst: number;
  discountedPrice: number;
  providerPrices?:[];
  thumbnailImage: string;
  bannerImages: string[];
  tags: string[];
  averageRating: number;
  totalReviews: number;
  recommendedServices: boolean;
  isTrending: boolean;
  createdAt: string;
  updatedAt: string;
  keyValues: KeyValue[];
  franchiseDetails: FranchiseDetails;
  serviceDetails?: ServiceDetails;
}

/* ================= CONTEXT TYPE ================= */

interface CategorywiseServiceContextType {
  services: Service[];
  loading: boolean;
  error: string | null;
  fetchServicesByCategory: (categoryId: string) => Promise<void>;
}

/* ================= CONTEXT ================= */

const CategorywiseServiceContext =
  createContext<CategorywiseServiceContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export const CategorywiseServiceProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchServicesByCategory = useCallback(async (categoryId: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.fetchtrue.com/api/service/category-wise/${categoryId}`
      );

      const mappedServices: Service[] = res.data?.data.map((item: any) => ({
        _id: item._id,
        serviceName: item.serviceName,
        category: item.category,
        subcategory: item.subcategory,
        price: item.price,
        discount: item.discount,
        gst: item.gst,
        includeGst: item.includeGst,
        gstInRupees: item.gstInRupees,
        totalWithGst: item.totalWithGst,
        discountedPrice: item.discountedPrice,
        providerPrices: item.providerPrices,
        thumbnailImage: item.thumbnailImage,
        bannerImages: item.bannerImages,
        tags: item.tags,
        averageRating: item.averageRating,
        totalReviews: item.totalReviews,
        recommendedServices: item.recommendedServices,
        isTrending: item.isTrending,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        keyValues: item.keyValues || [],
        franchiseDetails: item.franchiseDetails,
        serviceDetails: item.serviceDetails,
      }));

      setServices(mappedServices);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to load services");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <CategorywiseServiceContext.Provider
      value={{ services, loading, error, fetchServicesByCategory }}
    >
      {children}
    </CategorywiseServiceContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useCategorywiseServices = () => {
  const context = useContext(CategorywiseServiceContext);
  if (!context) {
    throw new Error(
      "useCategorywiseServices must be used within CategorywiseServiceProvider"
    );
  }
  return context;
};
