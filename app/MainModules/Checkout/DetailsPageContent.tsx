'use client'

import CompleteStep from "@/src/components/checkout/CompleteStep";
import DetailsStep from "@/src/components/checkout/DetailsStep";
import PaymentStep from "@/src/components/checkout/PaymentStep";
import Stepper from "@/src/components/checkout/Stepper";
import { ChevronLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export type PaymentData = {
    listingPrice: number;
    serviceDiscount: number;
    couponDiscount: number;
    gst: number;
    platformFee: number;
    assuranceFee: number;
    grandTotal: number;
};

export type CheckoutData = {
    selectedUser: string;
    serviceCustomer: string | null;
    paymentData: PaymentData;
};

export type BookingData = {
    bookingId: string;
    createdAt: string;
};

export default function DetailsPageContent() {
    const [step, setStep] = useState(1);
    const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null);
    const [bookingData, setBookingData] = useState<BookingData | null>(null);

    const searchParams = useSearchParams();
    const serviceId =
  searchParams.get("serviceId") ||
  searchParams.get("id") ||
  "";

const packageId =
  searchParams.get("packageId") ||
  "";

    /* ==============================
       🔥 LOAD FROM LOCAL STORAGE
    ============================== */
    useEffect(() => {
        const savedStep = localStorage.getItem("checkoutStep");
        const savedCheckout = localStorage.getItem("checkoutData");
        const savedBooking = localStorage.getItem("bookingData");

        if (savedStep) setStep(Number(savedStep));
        if (savedCheckout) setCheckoutData(JSON.parse(savedCheckout));
        if (savedBooking) setBookingData(JSON.parse(savedBooking));
    }, []);

    /* ==============================
       🔥 SAVE TO LOCAL STORAGE
    ============================== */
    useEffect(() => {
        localStorage.setItem("checkoutStep", String(step));
    }, [step]);

    useEffect(() => {
        if (checkoutData) {
            localStorage.setItem("checkoutData", JSON.stringify(checkoutData));
        }
    }, [checkoutData]);

    useEffect(() => {
        if (bookingData) {
            localStorage.setItem("bookingData", JSON.stringify(bookingData));
        }
    }, [bookingData]);

    /* ==============================
       🔥 CLEAR AFTER COMPLETE
    ============================== */
    useEffect(() => {
        if (step === 3) {
            localStorage.removeItem("checkoutStep");
            localStorage.removeItem("checkoutData");
            localStorage.removeItem("bookingData");
        }
    }, [step]);

    return (
        <>
            {/* DESKTOP NAVBAR */}
            <section className="relative w-full">
                <div className="hidden lg:block w-screen">
                    <div className="bg-[#E2E9F1] flex items-center justify-between p-6 rounded-xl">
                        <div className="flex items-center gap-4 ml-10">
                            <button onClick={() => window.history.back()}>
                                <img src="/image/Checkoutback.png" className="w-[30px] cursor-pointer" />
                            </button>
                            <h1 className="text-2xl font-semibold">Details</h1>
                        </div>
                        <div className="flex items-center gap-4 mr-10 bg-[#BEBEBE] rounded-3xl px-4 py-2 text-white">
                            Package Active
                        </div>
                    </div>
                </div>
            </section>

            {/* MOBILE NAVBAR */}
            <section>
                <div className="lg:hidden w-full -mt-6 bg-[#E2E9F1] flex flex-col px-4 py-8 gap-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 p-8 min-w-0">
                            <button onClick={() => window.history.back()}>
                                <ChevronLeft className="w-[28px] h-[28px] bg-white rounded-full p-1" />
                            </button>
                            <h1 className="text-[16px] font-semibold truncate">Details</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* STEPPER */}
            <Stepper currentStep={step} />

            {/* STEP 1 */}
            {step === 1 && (
                <DetailsStep
                    serviceId={serviceId}
                    packageId={packageId}
                    data={checkoutData}
                    onNext={(data: CheckoutData) => {
                        setCheckoutData(data);
                        setStep(2);
                    }}
                />
            )}

            {/* STEP 2 */}
            {step === 2 && checkoutData && (
                <PaymentStep
                    data={checkoutData}
                    onNext={(data: BookingData) => {
                        setBookingData(data);
                        setStep(3);
                    }}
                    onBack={() => setStep(1)}
                />
            )}

            {/* STEP 3 */}
            {step === 3 && (
                <CompleteStep
                    bookingId={bookingData?.bookingId}
                    createdAt={bookingData?.createdAt}
                />
            )}
        </>
    );
}