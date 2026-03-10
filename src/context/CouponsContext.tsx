"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";
import axios from "axios";

/* ---------- TYPES ---------- */


export interface CouponsService {
 _id: string;
    couponCode: string;
    discountTitle: string;
    discountAmountType: "Percentage" | "Fixed Amount";
    amount: number;
    maxDiscount?: number;
    minPurchase?: number;
    limitPerUser?: number;
}


/* ---------- CONTEXT TYPE ---------- */

interface CouponsContextType {
    services: CouponsService[] | [];
    loading: boolean;
    error: string | null;
    fetchCoupons: () => Promise<void>;
}

/* ---------- CONTEXT ---------- */

const CouponsContext = createContext<CouponsContextType | undefined>(
    undefined
);

/* ---------- HOOK ---------- */

export const useCoupons = () => {
    const context = useContext(CouponsContext);
    if (!context) {
        throw new Error(
            "useCoupons must be used within CouponProvider"
        );
    }
    return context;
};

/* ---------- PROVIDER ---------- */

interface Props {
    children: ReactNode;
}

export const CouponProvider = ({ children }: Props) => {
    const [services, setServices] = useState<CouponsService[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchCoupons = async () => {
        try {
            setLoading(true);
            setError(null);

            const res = await axios.get(
                `https://api.fetchtrue.com/api/coupon`
            );

            if (res.data?.success) {
                setServices(res.data.data);
            } else {
                setError("Failed to fetch Coupons");
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <CouponsContext.Provider
            value={{ services, loading, error, fetchCoupons }}
        >
            {children}
        </CouponsContext.Provider>
    );
};
