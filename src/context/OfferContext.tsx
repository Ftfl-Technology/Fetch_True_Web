"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

/* =======================
   TYPES
======================= */

interface OfferFAQ {
  question: string;
  answer: string;
}

export interface Offer {
  _id: string;
  id?: string;

  bannerImage: string;
  thumbnailImage: string;

  offerStartTime: string;
  offerEndTime: string;

  galleryImages: string[];

  eligibilityCriteria: string;
  howToParticipate: string;
  termsAndConditions: string;

  faq: OfferFAQ[];

  service: {
    _id: string;
    serviceName: string;
  } | null;  
  isActive: boolean;

  createdAt: string;
  updatedAt: string;
}

interface OfferContextType {
  offers: Offer[];
  loading: boolean;
  error: string | null;
  refreshOffers: () => Promise<void>;
}

/*   CONTEXT */

const OfferContext = createContext<OfferContextType | undefined>(undefined);

/*  PROVIDER */

export const OfferProvider = ({ children }: { children: ReactNode }) => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOffers = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("https://api.fetchtrue.com/api/offer");
      const result = await response.json();

      if (!result?.success) {
        throw new Error("Failed to fetch offers");
      }

      setOffers(result.data);
    } catch (err: unknown) {
      if(err instanceof Error){
          setError(err.message);
      }
      else{
         setError("Something went wrong");
      }
     
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <OfferContext.Provider
      value={{
        offers,
        loading,
        error,
        refreshOffers: fetchOffers,
      }}
    >
      {children}
    </OfferContext.Provider>
  );
};

/* =======================
   HOOK
======================= */

export const useOffers = (): OfferContextType => {
  const context = useContext(OfferContext);

  if (!context) {
    throw new Error("useOffers must be used within an OfferProvider");
  }

  return context;
};
