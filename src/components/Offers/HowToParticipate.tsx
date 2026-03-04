"use client";

import { useOffers } from "@/src/context/OfferContext";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

type HowToParticipateProps = {
    serviceId: string;
}

export default function HowToParticipate({ serviceId }: HowToParticipateProps) {
    const { offers, loading } = useOffers();
    const [steps, setSteps] = useState<string[]>([]);

    useEffect(() => {
        if (!offers.length || !serviceId) return;

        const matchedOffer = offers.find(
            (offer) => offer._id === serviceId || offer.service?._id === serviceId
        );

        if (matchedOffer?.howToParticipate) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(matchedOffer.howToParticipate, 'text/html');
            const listItems = doc.querySelectorAll('li');
            const stepsList = Array.from(listItems).map(li => li.textContent?.trim() || '');
            
            if (stepsList.length === 0) {
                const text = doc.body.textContent || '';
                const lines = text.split('\n')
                    .map(line => line.trim())
                    .filter(line => line.length > 0);
                setSteps(lines);
            } else {
                setSteps(stepsList);
            }
        }
    }, [offers, serviceId]);

    if (loading) return (
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-md border border-blue-100 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-48 mb-4"></div>
            <div className="space-y-3">
                {[1, 2, 3].map(i => (
                    <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
                ))}
            </div>
        </div>
    );

    if (steps.length === 0) return null;

    return (
        <div className="rounded-xl mx-auto w-[300px] md:w-[700px] lg:w-[1440px] p-6 mt-5 shadow-md border border-blue-100">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-400">
                <div className="w-6 h-6 rounded-full bg-blue-500 mb-2 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">?</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">How to Participate</h3>
            </div>
            
            <ul className="space-y-3">
                {steps.map((step, index) => (
                    <li key={index} className="flex items-start lg:ml-8 gap-3">
                        <span className="text-black font-bold text-lg mt-0">•</span>
                        <span className="text-gray-700 text-sm md:text-base">{step}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}