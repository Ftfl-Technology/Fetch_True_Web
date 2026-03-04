"use client";

import { useOffers } from "@/src/context/OfferContext";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

type FAQProps = {
    serviceId: string;
}

type FAQItem = {
    question: string;
    answer: string;
}

export default function FAQ({ serviceId }: FAQProps) {
    const { offers, loading } = useOffers();
    const [faqs, setFaqs] = useState<FAQItem[]>([]);
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default
    const [offerTitle, setOfferTitle] = useState<string>("");

    useEffect(() => {
        if (!offers.length || !serviceId) return;

        // Find the offer that matches the serviceId
        const matchedOffer = offers.find(
            (offer) => offer._id === serviceId || offer.service?._id === serviceId
        );

        if (matchedOffer?.faq && matchedOffer.faq.length > 0) {
            setOfferTitle(matchedOffer.service?.serviceName || 'Special Offer');
            setFaqs(matchedOffer.faq);
        }
    }, [offers, serviceId]);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (loading) return (
        <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-md border border-indigo-100 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-48 mb-4"></div>
            <div className="space-y-3">
                {[1, 2, 3].map(i => (
                    <div key={i} className="h-12 bg-gray-200 rounded w-full"></div>
                ))}
            </div>
        </div>
    );

    if (faqs.length === 0) return null;

    return (
        <div className="rounded-xl mx-auto w-[300px] md:w-[700px] lg:w-[1440px] p-6 mt-5 shadow-md border border-indigo-100">
            <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="w-6 h-6 text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h3>
            </div>
            
            <div className="space-y-3">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className="border border-indigo-200 rounded-lg overflow-hidden bg-white"
                    >
                        {/* Question Button */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-indigo-50 transition-colors"
                        >
                            <span className="font-medium text-gray-900 text-sm md:text-base pr-4">
                                {faq.question}
                            </span>
                            {openIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                            )}
                        </button>
                        
                        {/* Answer Panel - Accordion Style */}
                        {openIndex === index && (
                            <div className="p-4 bg-indigo-50/50 border-t border-indigo-200">
                                <div 
                                    className="text-gray-700 text-sm md:text-base prose prose-sm max-w-none"
                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
        </div>
    );
}