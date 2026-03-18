// "use client";

// import React, {
//     createContext,
//     useContext,
//     useState,
//     ReactNode,
// } from "react";
// import axios from "axios";

// /* ---------- TYPES ---------- */

// interface Category {
//     _id: string;
//     name: string;
//     module: string;
//     image: string;
//     isDeleted: boolean;
//     createdAt: string;
//     updatedAt: string;
//     __v: number;
//     sortOrder: number;
// }

// interface Subcategory {
//     _id: string;
//     name: string;
//     image: string;
//     isDeleted: boolean;
//     category: string;
//     createdAt: string;
//     updatedAt: string;
//     __v: number;
//     sortOrder: number;
// }

// interface KeyValue {
//     _id: string;
//     key?: string;
//     value: string;
//     icon?: string;
// }

// interface InvestmentRange {
//     range: string;
//     parameters: string;
//     _id: string;
// }

// interface MonthlyEarnPotential {
//     range: string;
//     parameters: string;
//     _id: string;
// }

// interface FranchiseModel {
//     title: string;
//     agreement: string;
//     price: number;
//     discount?: number;
//     discountedPrice: number;
//     gst: number;
//     fees: number;
//     _id: string;
// }

// interface FranchiseDetails {
//     commission: string;
//     termsAndConditions?: string;
//     investmentRange?: InvestmentRange[];
//     monthlyEarnPotential?: MonthlyEarnPotential[];
//     franchiseModel?: FranchiseModel[];
// }

// interface Package {
//     _id: string;
//     name: string;
//     price: number;
//     discount: number;
//     discountedPrice: number;
//     whatYouGet?: string[];
// }

// interface ServiceDetails {
//     packages?: Package[];
//     benefits?: string[];
//     aboutUs?: string[];
//     termsAndConditions?: string[];
//     highlight?: string[];
//     assuredByFetchTrue?: { _id: string; title: string, icon: string, description: string }[];
//     // howItWorks?: any[];
//     // whyChooseUs?: any[];
//     weRequired?: { _id: string; title: string }[];
//     weDeliver?: { _id: string; title: string }[];
//     // moreInfo?: any[];
//     connectWith?: { _id: string; name: string; mobileNo: string; email: string }[];
//     faq?: { _id: string; question: string; answer: string }[];
//     counter?: { number: number; _id: string }[];
//     level?: string;
//     lessonCount?: number;
//     duration?: { weeks: number; hours: number };
//     include?: string[];
//     notInclude?: string[];
//     safetyAndAssurance?: string[];
//     emiavalable?: string[];
//     trainingDetails?: string[];
//     roi?: string[];
//     whatYouWillLearn?: string[];
//     eligibleFor?: string[];
//     courseIncludes?: string[];
//     certificateImage?: string[];
//     brochureImage?: string[];
// }

// export interface Service {
//     _id: string;
//     serviceName: string;
//     category: Category;
//     subcategory: Subcategory | null;
//     price: number;
//     discount: number;
//     gst: number;
//     includeGst: boolean;
//     gstInRupees: number;
//     totalWithGst: number;
//     discountedPrice: number;
//     thumbnailImage: string;
//     bannerImages: string[];
//     tags?: string[];
//     keyValues?: KeyValue[];
//     serviceDetails: ServiceDetails;
//     franchiseDetails: FranchiseDetails;
//     averageRating: number;
//     totalReviews: number;
//     recommendedServices: boolean;
//     isTrending: boolean;
//     isDeleted: boolean;
//     sortOrder: number;
//     createdAt: string;
//     updatedAt: string;
//     __v: number;
// }

// export interface ServicesResponse {
//     success: boolean;
//     data: Service[];
// }

// /* ---------- CONTEXT TYPE ---------- */

// interface AllServicesContextType {
//     services: Service[];
//     loading: boolean;
//     error: string | null;
//     fetchServices: () => Promise<void>;
//     getServiceById: (id: string) => Service | undefined;
//     getServicesByCategory: (categoryId: string) => Service[];
// }

// /* ---------- CONTEXT ---------- */

// const AllServicesContext = createContext<AllServicesContextType | undefined>(
//     undefined
// );

// /* ---------- HOOK ---------- */

// export const useAllServices = () => {
//     const context = useContext(AllServicesContext);
//     if (!context) {
//         throw new Error(
//             "useAllServices must be used within AllServicesProvider"
//         );
//     }
//     return context;
// };

// /* ---------- PROVIDER ---------- */

// interface Props {
//     children: ReactNode;
// }

// export const AllServicesProvider = ({ children }: Props) => {
//     const [services, setServices] = useState<Service[]>([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState<string | null>(null);

//     const fetchServices = async () => {
//         try {
//             setLoading(true);
//             setError(null);

//             const res = await axios.get<ServicesResponse>(
//                 "https://api.fetchtrue.com/api/service"
//             );

//             // if (res.data?.success) {
//             //     setServices(res.data.data);
//             // }
//             if (res.data?.success) {
//                 // Transform the data to remove large fields
//                 const transformedServices = res.data.data.map(service => ({
//                     _id: service._id,
//                     serviceName: service.serviceName,
//                     category: service.category ? {
//                         _id: service.category._id,
//                         name: service.category.name,
//                         module: service.category.module,
//                         image: service.category.image
//                     } : null,
//                     subcategory: service.subcategory ? {
//                         _id: service.subcategory._id,
//                         name: service.subcategory.name,
//                         image: service.subcategory.image
//                     } : null,
//                     price: service.price,
//                     discount: service.discount,
//                     gst: service.gst,
//                     includeGst: service.includeGst,
//                     gstInRupees: service.gstInRupees,
//                     totalWithGst: service.totalWithGst,
//                     discountedPrice: service.discountedPrice,
//                     thumbnailImage: service.thumbnailImage,
//                     bannerImages: service.bannerImages,
//                     tags: service.tags,
//                     keyValues: service.keyValues?.map(kv => ({
//                         _id: kv._id,
//                         value: kv.value,
//                         icon: kv.icon
//                     })),
//                     serviceDetails: {
//                         // Only include the fields you need
//                         benefits: service.serviceDetails?.benefits,
//                         aboutUs: service.serviceDetails?.aboutUs,
//                         highlight: service.serviceDetails?.highlight,
//                         packages: service.serviceDetails?.packages?.map(pkg => ({
//                             _id: pkg._id,
//                             name: pkg.name,
//                             price: pkg.price,
//                             discount: pkg.discount,
//                             discountedPrice: pkg.discountedPrice,
//                             whatYouGet: pkg.whatYouGet
//                         })),
//                         counter: service.serviceDetails?.counter,
//                         level: service.serviceDetails?.level,
//                         lessonCount: service.serviceDetails?.lessonCount,
//                         duration: service.serviceDetails?.duration,
//                         include: service.serviceDetails?.include,
//                         notInclude: service.serviceDetails?.notInclude,
//                         safetyAndAssurance: service.serviceDetails?.safetyAndAssurance,
//                         emiavalable: service.serviceDetails?.emiavalable,
//                         trainingDetails: service.serviceDetails?.trainingDetails,
//                         roi: service.serviceDetails?.roi,
//                         whatYouWillLearn: service.serviceDetails?.whatYouWillLearn,
//                         eligibleFor: service.serviceDetails?.eligibleFor,
//                         courseIncludes: service.serviceDetails?.courseIncludes,
//                         certificateImage: service.serviceDetails?.certificateImage,
//                         brochureImage: service.serviceDetails?.brochureImage
//                         // ❌ Excluded: termsAndConditions, assuredByFetchTrue, howItWorks, 
//                         // whyChooseUs, weRequired, weDeliver, moreInfo, connectWith, faq
//                     },
//                     franchiseDetails: {
//                         commission: service.franchiseDetails?.commission,
//                         investmentRange: service.franchiseDetails?.investmentRange,
//                         monthlyEarnPotential: service.franchiseDetails?.monthlyEarnPotential,
//                         franchiseModel: service.franchiseDetails?.franchiseModel
//                         // ❌ Excluded: termsAndConditions
//                     },
//                     averageRating: service.averageRating,
//                     totalReviews: service.totalReviews,
//                     recommendedServices: service.recommendedServices,
//                     isTrending: service.isTrending,
//                     isDeleted: service.isDeleted,
//                     sortOrder: service.sortOrder,
//                     createdAt: service.createdAt,
//                     updatedAt: service.updatedAt,
//                     __v: service.__v
//                 }));

//                 setServices(transformedServices);
//                 console.log(`Transformed ${transformedServices.length} services (reduced payload size)`);
//             }   else {
//                 setError("Failed to fetch services");
            
//         } }catch (err: unknown) {
//             if (err instanceof Error) {
//                 setError(err.message);
//             } else if (axios.isAxiosError(err)) {
//                 setError(err.response?.data?.message || "Failed to fetch services");
//             } else {
//                 setError("Something went wrong");
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     const getServiceById = (id: string) => {
//         return services.find(service => service._id === id);
//     };

//     const getServicesByCategory = (categoryId: string) => {
//         return services.filter(service => service.category?._id === categoryId);
//     };

//     return (
//         <AllServicesContext.Provider
//             value={{
//                 services,
//                 loading,
//                 error,
//                 fetchServices,
//                 getServiceById,
//                 getServicesByCategory,
//             }}
//         >
//             {children}
//         </AllServicesContext.Provider>
//     );
// };






"use client";

import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";
import axios from "axios";

/* ---------- TYPES ---------- */

// Lightweight types for the transformed data
interface LightweightCategory {
    _id: string;
    name: string;
    module: string;
    image: string;
}

interface LightweightSubcategory {
    _id: string;
    name: string;
    image: string;
}

interface LightweightKeyValue {
    _id: string;
    value: string;
    icon?: string;
}

interface LightweightPackage {
    _id: string;
    name: string;
    price: number;
    discount: number;
    discountedPrice: number;
    whatYouGet?: string[];
}

interface LightweightServiceDetails {
    benefits?: string[];
    aboutUs?: string[];
    highlight?: string[];
    packages?: LightweightPackage[];
}

interface LightweightFranchiseDetails {
    commission: string;
}

export interface LightweightService {
    _id: string;
    serviceName: string;
    category: LightweightCategory | null;
    thumbnailImage: string;
    bannerImages: string[];
    tags?: string[];
    keyValues?: LightweightKeyValue[];
    serviceDetails: LightweightServiceDetails;
    franchiseDetails: LightweightFranchiseDetails;
    averageRating: number;
    totalReviews: number;
    isTrending: boolean;
    // Add optional fields with defaults if needed
    subcategory?: LightweightSubcategory | null;
    price?: number;
    discount?: number;
    gst?: number;
    includeGst?: boolean;
    gstInRupees?: number;
    totalWithGst?: number;
    discountedPrice?: number;
    recommendedServices?: boolean;
    isDeleted?: boolean;
    sortOrder?: number;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

export interface LightweightServicesResponse {
    success: boolean;
    data: LightweightService[];
}

/* ---------- CONTEXT TYPE ---------- */

interface AllServicesContextType {
    services: LightweightService[];
    loading: boolean;
    error: string | null;
    fetchServices: () => Promise<void>;
    getServiceById: (id: string) => LightweightService | undefined;
    getServicesByCategory: (categoryId: string) => LightweightService[];
    getServicesByModule: (moduleId: string) => LightweightService[];
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
    const [services, setServices] = useState<LightweightService[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchServices = async () => {
        try {
            setLoading(true);
            setError(null);

            const res = await axios.get<{ success: boolean; data: any[] }>(
                "https://api.fetchtrue.com/api/service"
            );

            if (res.data?.success) {
                // Transform the data to remove large fields
                const transformedServices: LightweightService[] = res.data.data.map((service) => ({
                    _id: service._id,
                    serviceName: service.serviceName,
                    category: service.category ? {
                        _id: service.category._id,
                        name: service.category.name,
                        module: service.category.module,
                        image: service.category.image
                    } : null,
                    thumbnailImage: service.thumbnailImage || '',
                    bannerImages: service.bannerImages?.slice(0, 1) || [],
                    tags: service.tags,
                    keyValues: service.keyValues?.map((kv: any) => ({
                        _id: kv._id,
                        value: kv.value,
                        icon: kv.icon
                    })),
                    serviceDetails: {
                        benefits: service.serviceDetails?.benefits,
                        aboutUs: service.serviceDetails?.aboutUs,
                        highlight: service.serviceDetails?.highlight,
                        packages: service.serviceDetails?.packages?.map((pkg: any) => ({
                            _id: pkg._id,
                            name: pkg.name,
                            price: pkg.price,
                            discount: pkg.discount,
                            discountedPrice: pkg.discountedPrice,
                            whatYouGet: pkg.whatYouGet
                        }))
                    },
                    franchiseDetails: {
                        commission: service.franchiseDetails?.commission || ''
                    },
                    averageRating: service.averageRating || 0,
                    totalReviews: service.totalReviews || 0,
                    isTrending: service.isTrending || false
                }));

                setServices(transformedServices);
                console.log(`Transformed ${transformedServices.length} services (reduced payload size)`);
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

    const getServicesByModule = (moduleId: string) => {
        return services.filter(service => service.category?.module === moduleId);
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
                getServicesByModule,
            }}
        >
            {children}
        </AllServicesContext.Provider>
    );
};