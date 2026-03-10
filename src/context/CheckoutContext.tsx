

// "use client";

// import { createContext, useContext, useState, useEffect } from "react";

// type SelectedPackage = {
//   _id: string;
//   name: string;
//   price: number;
//   discount: number;
//   discountedPrice: number;
// };

// type CheckoutContextType = {
//   selectedPackage: SelectedPackage | null;
//   setSelectedPackage: (pkg: SelectedPackage | null) => void;
// };

// const CheckoutContext = createContext<CheckoutContextType | null>(null);

// export function CheckoutProvider({ children }: { children: React.ReactNode }) {
 
//   const [selectedPackage, setSelectedPackageState] = useState<SelectedPackage | null>(null);


//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const savedPackage = localStorage.getItem('selectedPackage');
//       if (savedPackage) {
//         try {
//           setTimeout(() => {
//             setSelectedPackageState(JSON.parse(savedPackage));
//           }, 0);
//         } catch (error) {
//           console.error('Error parsing saved package:', error);
//           localStorage.removeItem('selectedPackage');
//         }
//       }
//     }
//   }, []);

//   // Custom setter that also saves to localStorage
//   const setSelectedPackage = (pkg: SelectedPackage | null) => {
//     setSelectedPackageState(pkg);
    
//     if (typeof window !== 'undefined') {
//       if (pkg) {
//         localStorage.setItem('selectedPackage', JSON.stringify(pkg));
//       } else {
//         localStorage.removeItem('selectedPackage');
//       }
//     }
//   };

//   return (
//     <CheckoutContext.Provider value={{ selectedPackage, setSelectedPackage }}>
//       {children}
//     </CheckoutContext.Provider>
//   );
// }

// export const useCheckout = () => {
//   const ctx = useContext(CheckoutContext);
//   if (!ctx) throw new Error("useCheckout must be inside CheckoutProvider");
//   return ctx;
// };
















// "use client";

// import { createContext, useContext, useState, useEffect } from "react";
// import { useParams } from "next/navigation";

// type SelectedPackage = {
//   _id: string;
//   name: string;
//   price: number;
//   discount: number;
//   discountedPrice: number;
// };

// type CheckoutContextType = {
//   selectedPackage: SelectedPackage | null;
//   setSelectedPackage: (pkg: SelectedPackage | null) => void;
// };

// const CheckoutContext = createContext<CheckoutContextType | null>(null);

// export function CheckoutProvider({ children }: { children: React.ReactNode }) {
//   const params = useParams();
//   const serviceId = params.id as string; // Get current service ID
  
//   const [selectedPackage, setSelectedPackageState] = useState<SelectedPackage | null>(null);

//   // Load from localStorage only for current service
//   useEffect(() => {
//     if (typeof window !== 'undefined' && serviceId) {
//       const storageKey = `selectedPackage_${serviceId}`;
//       const savedPackage = localStorage.getItem(storageKey);
      
//       if (savedPackage) {
//         try {
//           setSelectedPackageState(JSON.parse(savedPackage));
//         } catch (error) {
//           console.error('Error parsing saved package:', error);
//           localStorage.removeItem(storageKey);
//         }
//       } else {
//         // No saved package for this service, ensure it's null
//         setSelectedPackageState(null);
//       }
//     }
//   }, [serviceId]); // Re-run when serviceId changes

//   // Custom setter that saves to localStorage with service-specific key
//   const setSelectedPackage = (pkg: SelectedPackage | null) => {
//     setSelectedPackageState(pkg);
    
//     if (typeof window !== 'undefined' && serviceId) {
//       const storageKey = `selectedPackage_${serviceId}`;
//       if (pkg) {
//         localStorage.setItem(storageKey, JSON.stringify(pkg));
//       } else {
//         localStorage.removeItem(storageKey);
//       }
//     }
//   };

//   return (
//     <CheckoutContext.Provider value={{ selectedPackage, setSelectedPackage }}>
//       {children}
//     </CheckoutContext.Provider>
//   );
// }

// export const useCheckout = () => {
//   const ctx = useContext(CheckoutContext);
//   if (!ctx) throw new Error("useCheckout must be inside CheckoutProvider");
//   return ctx;
// };




"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

/* ================= TYPES ================= */

export type SelectedPackage = {
  _id: string;
  name: string;
  price: number;
  discount: number;
  discountedPrice: number;
};

// Stored shape includes serviceId so we can validate on load
type StoredPackage = SelectedPackage & { serviceId: string };

type CheckoutContextType = {
  selectedPackage: SelectedPackage | null;
  hydrated: boolean;
  setSelectedPackage: (pkg: SelectedPackage | null, serviceId: string) => void;
  clearPackage: () => void;
  loadPackage: (serviceId: string) => void;
};

/* ================= CONSTANTS ================= */

const STORAGE_KEY = "checkout_selected_package";

/* ================= CONTEXT ================= */

const CheckoutContext = createContext<CheckoutContextType | null>(null);

/* ================= PROVIDER ================= */

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [selectedPackage, setSelectedPackageState] = useState<SelectedPackage | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  // Save package + serviceId together under one key
  const setSelectedPackage = (pkg: SelectedPackage | null, serviceId: string) => {
    setSelectedPackageState(pkg);
    try {
      if (pkg && serviceId) {
        const toStore: StoredPackage = { ...pkg, serviceId };
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
      } else {
        sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch { /* sessionStorage unavailable */ }
  };

  // Called on mount in DetailsStep — reads storage and validates serviceId matches
 // checkout context
const loadPackage = (serviceId: string) => {
  if (!serviceId) return;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const stored: StoredPackage = JSON.parse(raw);
    if (stored.serviceId === serviceId) {
      const { serviceId: _drop, ...pkg } = stored;
      setSelectedPackageState(pkg); // safe
    } else {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    sessionStorage.removeItem(STORAGE_KEY);
  }
};

  const clearPackage = () => {
    setSelectedPackageState(null);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch { /* ignore */ }
  };

  return (
    <CheckoutContext.Provider value={{ selectedPackage, hydrated, setSelectedPackage, clearPackage, loadPackage }}>
      {children}
    </CheckoutContext.Provider>
  );
}

/* ================= HOOK ================= */

export const useCheckout = () => {
  const ctx = useContext(CheckoutContext);
  if (!ctx) throw new Error("useCheckout must be inside CheckoutProvider");
  return ctx;
};