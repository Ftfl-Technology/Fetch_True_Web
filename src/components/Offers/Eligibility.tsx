"use client";

import { useOffers } from "@/src/context/OfferContext";
import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

type EligibilityProps = {
    serviceId: string;
}

export default function Eligibility({ serviceId }: EligibilityProps) {
    const { offers, loading } = useOffers();
    const [eligibilityPoints, setEligibilityPoints] = useState<string[]>([]);
    const [, setOfferTitle] = useState<string>("");

    useEffect(() => {
        if (!offers.length || !serviceId) return;

        // Find the offer that matches the serviceId
        const matchedOffer = offers.find(
            (offer) => offer._id === serviceId || offer.service?._id === serviceId
        );

        if (matchedOffer) {
            setOfferTitle(matchedOffer.service?.serviceName || 'Special Offer');
            
            if (matchedOffer.eligibilityCriteria) {
                // Parse HTML to extract list items
                const parser = new DOMParser();
                const doc = parser.parseFromString(matchedOffer.eligibilityCriteria, 'text/html');
                
                // Get all list items
                const listItems = doc.querySelectorAll('li');
                const points = Array.from(listItems).map(li => li.textContent?.trim() || '');
                
                // If no list items found, try to get paragraphs or split by lines
                if (points.length === 0) {
                    const text = doc.body.textContent || '';
                    const lines = text.split('\n')
                        .map(line => line.trim())
                        .filter(line => line.length > 0);
                    setEligibilityPoints(lines);
                } else {
                    setEligibilityPoints(points);
                }
            }
        }
    }, [offers, serviceId]);

    if (loading) return (
        <div className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-48 mb-4"></div>
            <div className="space-y-3">
                {[1, 2, 3].map(i => (
                    <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
                ))}
            </div>
        </div>
    );

    if (eligibilityPoints.length === 0) return null;

    return (
    <div className="rounded-xl mx-auto w-[300px] md:w-[700px] lg:w-[1440px] p-6 mt-5 shadow-md border border-purple-100">
    <div className="flex items-center gap-2 mb-6 border-b border-gray-400">
        <CheckCircle className="w-6 h-6 text-green-500 mb-2" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Eligibility Criteria</h3>
    </div>
    
    <ul className="space-y-3">
        {eligibilityPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3 lg:ml-8 text-gray-700">
                <span className="text-black font-bold text-lg mt-0">•</span>
                <span 
                    className="text-sm md:text-base"
                    dangerouslySetInnerHTML={{ 
                        __html: point.replace(
                            /<strong>(.*?)<\/strong>/g, 
                            '<strong class="font-semibold text-purple-700">$1</strong>'
                        ) 
                    }}
                />
            </li>
        ))}
    </ul>
</div>
    );
}