"use client";

import { useOffers } from "@/src/context/OfferContext";
import { useEffect, useState } from "react";
import { ScrollText, Info } from "lucide-react";

type TermsAndConditionsProps = {
    serviceId: string;
}

export default function TermsAndConditions({ serviceId }: TermsAndConditionsProps) {
    const { offers, loading } = useOffers();
    const [terms, setTerms] = useState<string[]>([]);

    useEffect(() => {
        if (!offers.length || !serviceId) return;

        const matchedOffer = offers.find(
            (offer) => offer._id === serviceId || offer.service?._id === serviceId
        );

        if (matchedOffer?.termsAndConditions) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(matchedOffer.termsAndConditions, 'text/html');
            const listItems = doc.querySelectorAll('li');
            const termsList = Array.from(listItems).map(li => li.textContent?.trim() || '');
            
            if (termsList.length === 0) {
                const text = doc.body.textContent || '';
                const lines = text.split('\n')
                    .map(line => line.trim())
                    .filter(line => line.length > 0);
                setTerms(lines);
            } else {
                setTerms(termsList);
            }
        }
    }, [offers, serviceId]);

    if (loading) return (
        <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-md border border-amber-100 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-48 mb-4"></div>
            <div className="space-y-3">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
                ))}
            </div>
        </div>
    );

    if (terms.length === 0) return null;

    return (
        <div className="rounded-xl mx-auto w-[300px] md:w-[700px] lg:w-[1440px] p-6 mt-5 shadow-md">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-400 pb-3">
                <ScrollText className="w-6 h-6 text-amber-600" />
                <h3 className="text-xl font-bold text-gray-900">Terms & Conditions</h3>
            </div>
            
            <ul className="space-y-4">
                {terms.map((term, index) => (
                    <li key={index} className="flex items-start gap-3 lg:ml-8">
                            <span className="text-black font-bold text-lg mt-0">•</span>
                        <span className="text-gray-700 text-sm md:text-base flex-1">{term}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}