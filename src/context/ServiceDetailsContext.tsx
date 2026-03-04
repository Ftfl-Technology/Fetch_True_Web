"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import axios from "axios";

/* =====================================================
   TYPES (API ke exact according)
===================================================== */

interface ImageTitleDescription {
  _id: string;
  title: string;
  description: string;
  icon?: string;
}

interface Counter {
  _id: string;
  number: number;
  title: string;
}

interface CourseCurriculum {
  _id: string;
  title: string;
  lists: string[];
  model: string[];
}

interface KeyValue {
  key: string;
  value: string;
  icon?: string;
  _id: string;
}

interface RangeWithParam {
  _id: string;
  range: string;
  parameters: string;
}

interface FranchiseModel {
  _id: string;
  title: string;
  agreement: string;
  price: number;
  discount: number;
  gst: number;
  fees: number;
}

interface FranchiseDetails {
  commission: string;
  termsAndConditions: string; 
  investmentRange: RangeWithParam[];
  monthlyEarnPotential: RangeWithParam[];
  franchiseModel: FranchiseModel[];
  areaRequired: string;
}

interface FranchiseFeature {
  _id: string;
  icon: string;
  subtitle: string;
  subDescription: string;
}

interface FranchiseOperatingModel {
  _id: string;
  info: string;
  title: string;
  description: string;
  features: FranchiseFeature[];
  tags: string[];
  example: string;
}
interface BusinessFundamentalPoint {
  _id: string;
  subtitle: string;
  subDescription: string;
}

interface BusinessFundamental {
  description: string;
  points: BusinessFundamentalPoint[];
}
interface Category{
  _id:string;
  name:string;
}



interface ServiceDetails {
  benefits: string[];

  aboutUs: string[];
  termsAndConditions: string[];
  whatYouWillLearn: string[];
  eligibleFor: string[];
  highlight: string[];
  whyChooseUs: ImageTitleDescription[];
  courseCurriculum: CourseCurriculum[];
  courseIncludes: string[];
  certificateImage: string[];
  franchiseOperatingModel: FranchiseOperatingModel[];
    keyAdvantages: {
    _id: string;
    icon: string;
    title: string;
    description: string;
  }[];
  packages:{
    _id: string;
    name: string;
    price: number;
    discount: number;
    discountedPrice: number;
    whatYouGet: string[];
  }[];
  weRequired: {
    _id: string;
    title: string;
    description?: string;
  }[];
  weDeliver: {
    _id: string;
    title: string;
    description?: string;
  }[];
  moreInfo: {
  _id: string;
  title: string;
  description: string;
  image: string;
}[];
  assuredByFetchTrue: {
    _id: string;
    title: string;
    description: string;
    icon: string;
  }[];
   completeSupportSystem: {
    _id: string;
    icon: string;
    title: string;
    lists: string[];
  }[];
  whomToSell:{
    _id: string;
    icon: string;
    lists: string[];
  }[];
  timeRequired:{
    _id: string;
    range: string;
    parameters: string;
  }[];
    trainingDetails: string[];
  agreementDetails: string[];
    companyDetails: {
    _id: string;
    name: string;
    location: string;
    profile: string;
    details: {
      _id: string;
      title: string;
      description: string;
    }[];
  }[];
  connectWith: {
    _id: string;
    name: string;
    mobileNo: string;
    email: string;
  }[];
  faq: {
    _id: string;
    question: string;
    answer: string;
  }[];
  howItWorks: {
   _id: string;
   title: string;
   description: string;
   icon?: string;
  }[];
  goodThings: string[];

  compareAndChoose: string[];
    businessFundamental: BusinessFundamental;
  notInclude: string[];
  include: string[];
  safetyAndAssurance: string[];
  roi:string[];
  brochureImage: string[];
  emiavalable: string[];
  counter: Counter[];
  level: string;
  lessonCount: number;
  duration: {
    weeks: number;
    hours: number;
  };
}

export interface ServiceData {
  _id: string;
  serviceName: string;
  category:Category;
  price: number;
  discount: number;
  gst: number;
  includeGst: boolean;
  gstInRupees: number;
  totalWithGst: number;
  discountedPrice: number;
  thumbnailImage: string;
  bannerImages: string[];
  keyValues: KeyValue[];
  tags: string[];
  serviceDetails: ServiceDetails;
  averageRating: number;
  totalReviews: number;
  isTrending: boolean;
  franchiseDetails: FranchiseDetails;

}

/* =====================================================
   CONTEXT
===================================================== */

interface ServiceDetailsContextType {
  service: ServiceData | null;
  loading: boolean;
  error: string | null;
  fetchServiceDetails: (serviceId: string) => Promise<void>;
}

const ServiceDetailsContext =
  createContext<ServiceDetailsContextType | undefined>(undefined);

/* =====================================================
   PROVIDER
===================================================== */

export const ServiceDetailsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [service, setService] = useState<ServiceData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // const fetchServiceDetails = async (serviceId: string) => {
  //   try {
  //     setLoading(true);
  //     setError(null);

  //     const res = await axios.get(
  //       `https://api.fetchtrue.com/api/service/${serviceId}`
  //     );

  //     setService(res.data.data);
  //   } catch (err: unknown) {
  //     if(err instanceof Error)
  //     setError(err.message || "Failed to fetch service details");
  //   else 
  //     setError("Failed to fetch service details");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchServiceDetails = useCallback(async (serviceId: string) => {
    try {
        setLoading(true);
        setError(null);
        const res = await axios.get(
            `https://api.fetchtrue.com/api/service/${serviceId}`
        );
        setService(res.data.data);
    } catch (err: unknown) {
        if (err instanceof Error)
            setError(err.message || "Failed to fetch service details");
        else
            setError("Failed to fetch service details");
    } finally {
        setLoading(false);
    }
}, []);


  return (
    <ServiceDetailsContext.Provider
      value={{ service, loading, error, fetchServiceDetails }}
    >
      {children}
    </ServiceDetailsContext.Provider>
  );
};

/* =====================================================
   HOOK
===================================================== */

export const useServiceDetails = () => {
  const context = useContext(ServiceDetailsContext);
  if (!context) {
    throw new Error(
      "useServiceDetails must be used within ServiceDetailsProvider"
    );
  }
  return context;
};
