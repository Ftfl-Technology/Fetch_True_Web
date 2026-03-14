
'use client';

import Benefits from "@/src/components/Packages/BenefitsComponent";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { PackageDescription } from "@/src/context/PackageContext";



export default function BenefitsPage() {
    const searchParams = useSearchParams();
    const activeTab = (searchParams.get("tab") || "GP") as "GP" | "SGP" | "PGP";
    const [description, setDescription] = useState<PackageDescription | null>(null);

    useEffect(() => {
        axios.get("/api/packages")
            .then(res => setDescription(res.data?.data?.description || res.data?.description));
    }, []);

    if (!description) return <p className="text-center mt-10">Loading...</p>;

    return <Benefits activeTab={activeTab} description={description} />;
}