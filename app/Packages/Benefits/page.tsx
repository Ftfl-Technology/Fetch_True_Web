// import Benefits from "@/src/components/Packages/BenefitsComponent";


// export default function BenefitsPage() {


//     return (
//         <>
//         <Benefits />
//         </>
//     )
// }





// 'use client';

// import Benefits from "@/src/components/Packages/BenefitsComponent";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { PackageDescription } from "@/src/context/PackageContext";



// export default function BenefitsPage() {
//     const searchParams = useSearchParams();
//     const activeTab = (searchParams.get("tab") || "GP") as "GP" | "SGP" | "PGP";
//     const [description, setDescription] = useState<PackageDescription | null>(null);

//     useEffect(() => {
//         axios.get("/api/packages")
//             .then(res => setDescription(res.data?.data?.description || res.data?.description));
//     }, []);

//     if (!description) return <p className="text-center mt-10">Loading...</p>;

//     return <Benefits activeTab={activeTab} description={description} />;
// }






import { Suspense } from 'react';
import BenefitsPage from './BenefitsPage';

export default function DetailsPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="ml-2 text-gray-600">Loading benefits...</p>
      </div>
    }>
      <BenefitsPage />
    </Suspense>
  );
}
