"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";

type props = {
    providerId: string;
}

type ProviderData = {
    fullName: string;
    phoneNo: string;
    email: string;
    storeInfo: {
        storeName: string;
        storePhone: string;
        storeEmail: string;
        address: string;
        city: string;
        state: string;
        country: string;
        aboutUs: string;
        tags: string[];
        totalProjects: number;
        totalExperience: string;
    };
    averageRating: number;
    totalReviews: number;
};

export default function AboutSection({ providerId }: props) {
    const [providerData, setProviderData] = useState<ProviderData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!providerId) {
            setLoading(false);
            return;
        }

        const fetchProviderData = async () => {
            try {
                setLoading(true);
                // const response = await axios.get(
                //     `https://api.fetchtrue.com/api/provider/${providerId}`
                // );
                const response = await axios.get(`/api/provider/${providerId}`);
                setProviderData(response.data);
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

        fetchProviderData();
    }, [providerId]);

    if (loading) {
        return (
            <div className="space-y-6 animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-48"></div>
                <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
                <div className="h-32 bg-gray-200 rounded"></div>
                <div className="space-y-2">
                    <div className="h-5 bg-gray-200 rounded w-40"></div>
                    <div className="h-5 bg-gray-200 rounded w-40"></div>
                    <div className="h-5 bg-gray-200 rounded w-40"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600">Error loading about data: {error}</p>
            </div>
        );
    }

    if (!providerData) {
        return (
            <div className="p-8 text-center text-gray-500">
                No about information available
            </div>
        );
    }

    const { storeInfo, fullName, phoneNo, email } = providerData;
    const ownerName = fullName || "Not provided";
    const ownerPhone = phoneNo || storeInfo?.storePhone || "Not provided";
    const ownerEmail = email || storeInfo?.storeEmail || "Not provided";
    const address = storeInfo?.address || "";
    const city = storeInfo?.city || "";
    const state = storeInfo?.state || "";
    const country = storeInfo?.country || "";
    const fullAddress = [address, city, state, country].filter(Boolean).join(", ");
    const aboutUs = storeInfo?.aboutUs || "No description available";
   

    return (
        <div className="space-y-8">
            {/* About Us Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                <p className="text-gray-600 leading-relaxed">
                    {aboutUs}
                </p>
            </div>



            {/* Details Section */}
            <div className="border-t border-b border-gray-200 py-6">
                <h3 className="text-lg font-medium mb-4">Details</h3>

                <div className="">
                    {/* Owner Name */}
                    <div className="flex items-start gap-3 mb-4">
                        <span className="font-medium min-w-[100px] text-gray-700">Owner Name</span>
                        <span className="text-gray-900 font-semibold">{ownerName}</span>
                    </div>

                    <div className="flex flex-col md:flex-row space-y-4 space-x-6">
                        {/* Phone */}
                        <div className="flex items-center gap-3">
                            <Phone className="w-6 h-6 text-blue-400"/>
                            <span className="text-gray-900">{ownerPhone}</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-3">
                            <Mail className="w-6 h-6 text-blue-400"/>
                            <span className="text-gray-900">{ownerEmail}</span>
                        </div>

                        {/* Address */}
                        <div className="flex items-start  gap-3">
                            <MapPin className="w-14 h-14 md:w-6 md:h-6 text-blue-400 -mt-2 md:-mt-0"/>
                            <span className="text-gray-900">{fullAddress || "Address not provided"}</span>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <h3 className="text-lg font-medium mb-4">Why customers choose us</h3>
                <div className="space-y-3">
                    {/* Background-verified professionals */}
                    <div className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-green-500" />
                        <span className="text-gray-700">Background-verified professionals</span>
                    </div>

                    {/* Brings own tools & supplies */}
                    <div className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-green-500" />
                        <span className="text-gray-700">Brings own tools & supplies</span>
                    </div>

                    {/* On-time, every time */}
                    <div className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-green-500" />
                        <span className="text-gray-700">On-time, every time</span>
                    </div>


                </div>
            </div>

        </div>
    );
}