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
    module: string;
    image: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
    sortOrder: number;
}

interface Subcategory {
    _id: string;
    name: string;
    image: string;
    isDeleted: boolean;
    category: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    sortOrder: number;
}

interface KeyValue {
    _id: string;
    key?: string;
    value: string;
    icon?: string;
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
    discount?: number;
    discountedPrice: number;
    gst: number;
    fees: number;
    _id: string;
}

interface FranchiseDetails {
    commission: string;
    termsAndConditions?: string;
    investmentRange?: InvestmentRange[];
    monthlyEarnPotential?: MonthlyEarnPotential[];
    franchiseModel?: FranchiseModel[];
}

interface Package {
    _id: string;
    name: string;
    price: number;
    discount: number;
    discountedPrice: number;
    whatYouGet?: string[];
}

interface ServiceDetails {
    packages?: Package[];
    benefits?: string[];
    aboutUs?: string[];
    termsAndConditions?: string[];
    highlight?: string[];
    assuredByFetchTrue?: { _id: string; title: string, icon: string, description: string }[];
    // howItWorks?: any[];
    // whyChooseUs?: any[];
    weRequired?: { _id: string; title: string }[];
    weDeliver?: { _id: string; title: string }[];
    // moreInfo?: any[];
    connectWith?: { _id: string; name: string; mobileNo: string; email: string }[];
    faq?: { _id: string; question: string; answer: string }[];
    counter?: { number: number; _id: string }[];
    level?: string;
    lessonCount?: number;
    duration?: { weeks: number; hours: number };
    include?: string[];
    notInclude?: string[];
    safetyAndAssurance?: string[];
    emiavalable?: string[];
    trainingDetails?: string[];
    roi?: string[];
    whatYouWillLearn?: string[];
    eligibleFor?: string[];
    courseIncludes?: string[];
    certificateImage?: string[];
    brochureImage?: string[];
}

export interface Service {
    _id: string;
    serviceName: string;
    category: Category;
    subcategory: Subcategory | null;
    price: number;
    discount: number;
    gst: number;
    includeGst: boolean;
    gstInRupees: number;
    totalWithGst: number;
    discountedPrice: number;
    thumbnailImage: string;
    bannerImages: string[];
    tags?: string[];
    keyValues?: KeyValue[];
    serviceDetails: ServiceDetails;
    franchiseDetails: FranchiseDetails;
    averageRating: number;
    totalReviews: number;
    recommendedServices: boolean;
    isTrending: boolean;
    isDeleted: boolean;
    sortOrder: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface ServicesResponse {
    success: boolean;
    data: Service[];
}

/* ---------- CONTEXT TYPE ---------- */

interface AllServicesContextType {
    services: Service[];
    loading: boolean;
    error: string | null;
    fetchServices: () => Promise<void>;
    getServiceById: (id: string) => Service | undefined;
    getServicesByCategory: (categoryId: string) => Service[];
}

/* ---------- CONTEXT ---------- */

const AllServicesContext = createContext<AllServicesContextType | undefined>(
    undefined
);

/* ---------- HOOK ---------- */

export const useAllServices = () => {
    const context = useContext(AllServicesContext);
    if (!context) {
        throw new Error(
            "useAllServices must be used within AllServicesProvider"
        );
    }
    return context;
};

/* ---------- PROVIDER ---------- */

interface Props {
    children: ReactNode;
}

export const AllServicesProvider = ({ children }: Props) => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchServices = async () => {
        try {
            setLoading(true);
            setError(null);

            const res = await axios.get<ServicesResponse>(
                "https://api.fetchtrue.com/api/service"
            );

            if (res.data?.success) {
                setServices(res.data.data);
            } else {
                setError("Failed to fetch services");
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || "Failed to fetch services");
            } else {
                setError("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    };

    const getServiceById = (id: string) => {
        return services.find(service => service._id === id);
    };

    const getServicesByCategory = (categoryId: string) => {
        return services.filter(service => service.category?._id === categoryId);
    };

    return (
        <AllServicesContext.Provider
            value={{
                services,
                loading,
                error,
                fetchServices,
                getServiceById,
                getServicesByCategory,
            }}
        >
            {children}
        </AllServicesContext.Provider>
    );
};