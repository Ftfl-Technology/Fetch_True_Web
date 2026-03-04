// // "use client";


// // /* ================= TYPES ================= */
// // type PackageItem = {
// //     id: number;
// //     name: string;
// //     oldPrice?: string;
// //     price: string;
// //     discount?: string;
// //     features: string[];
// //     highlight?: boolean;
// // };

// // type PackageItemProps = {
// //     packages: PackageItem[]
// // }

// // /* ================= MOCK DATA ================= */
// // const PACKAGES: PackageItem[] = [
// //     {
// //         id: 1,
// //         name: "Basic Plan",
// //         oldPrice: "₹5,999",
// //         price: "₹3,999",
// //         discount: "12% Off",
// //         features: ["2 Logo concepts", "2 Revisions", "JPG & PNG files"],
// //     },
// //     {
// //         id: 2,
// //         name: "Standard Plan",
// //         oldPrice: "₹8,999",
// //         price: "₹6,999",
// //         discount: "12% Off",
// //         highlight: true,
// //         features: [
// //             "4 Logo concepts",
// //             "3 Revisions",
// //             "Source file (AI, PDF)",
// //             "Transparent background",
// //         ],
// //     },
// //     {
// //         id: 3,
// //         name: "Premium Plan",
// //         oldPrice: "₹12,999",
// //         price: "₹9,999",
// //         discount: "15% Off",
// //         features: [
// //             "6 Logo concepts",
// //             "Unlimited revisions",
// //             "All source files",
// //             "Brand guidelines",
// //         ],
// //     },
// // ];



// // /* ================= COMPONENT ================= */
// // export default function Packages ({packages}: PackageItemProps) {
// //     return (
// //         <section className="bg-[#F7F7F7] py-6 px-4 md:px-4">
// //             {/* TITLE */}
// //            <div className="flex items-start lg:items-center lg:justify-center mt-4 mb-4">
// //                 <h2 className="text-[#2164F4] font-semibold text-[16px] lg:text-[36px]">
// //                    Packages
// //                 </h2>
// //             </div>

// //             {/* ================= DESKTOP (UNCHANGED) ================= */}
// //             <div className="hidden lg:grid max-w-6xl mx-auto grid-cols-3 gap-20">
// //                 {PACKAGES.map((pkg) => (
// //                     <PackageCard key={pkg.id} pkg={pkg} />
// //                 ))}
// //             </div>

// //             {/* ================= TABLET (SEPARATE UI) ================= */}
// //               <div className="hidden lg:hidden md:grid max-w-6xl mx-auto grid-cols-3 gap-20">
// //                {PACKAGES.map((pkg) => (
// //                         <div key={pkg.id} className="w-[270px] flex-shrink-0">
// //                             <PackageCard pkg={pkg} />
// //                         </div>
// //                     ))}
// //             </div>

// //             {/* ================= MOBILE (SWIPE + 3 PLANS) ================= */}
// //             <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4">
// //                 <div className="flex gap-6 px-4 py-4">
// //                     {PACKAGES.map((pkg) => (
// //                         <div key={pkg.id} className="w-[170px] flex-shrink-0">
// //                             <PackageCard pkg={pkg} />
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // /* ================= CARD ================= */
// // const PackageCard = ({ pkg }: { pkg: PackageItem }) => {
// //     return (
// //         <div className="relative bg-white border-t-4 border-blue-500 rounded-2xl w-full min-h-[350px] md:w-[230px] md:min-h-[350px] lg:w-[322px] shadow-md md:p-6 p-3 lg:min-h-[449px] flex flex-col">


// //             {/* TITLE */}
// //             <h3 className="text-center text-[14px] md:text-[32px] font-semibold text-gray-700 mb-4">
// //                 {pkg.name}
// //             </h3>

// //             {/* PRICE BOX */}
// //             <div className="border border-orange-300 rounded-lg py-3 px-4 w-fit mx-auto text-center mb-6">
// //                 <p className="text-gray-400 line-through text-sm">
// //                     {pkg.oldPrice}{" "}
// //                     <span className="text-blue-500">{pkg.discount}</span>
// //                 </p>
// //                 <p className="text-2xl font-bold">{pkg.price}</p>
// //                 <p className="text-xs text-gray-400">Onwords</p>
// //             </div>

// //             {/* FEATURES */}
// //             <div className="mx-auto">
// //             <p className="font-medium text-[12px] md:text-[18px] mb-3">What You Get -</p>
// //             <ul className="space-y-2 flex-1">
// //                 {pkg.features.map((feature, index) => (
// //                     <li
// //                         key={index}
// //                         className="flex  gap-2 text-[10px] md:text-[18px] text-gray-600"
// //                     >
// //                         <span className="text-green-500">✔</span>
// //                         {feature}
// //                     </li>
// //                 ))}
// //             </ul>
// //             </div>

// //         </div>
// //     );
// // };





// "use client";

// import { useCheckout } from "@/src/context/CheckoutContext";

// /* ================= TYPES ================= */

// // API PACKAGE TYPE (FROM CONTEXT / BACKEND)
// type ApiPackage = {
//   _id: string;
//   name: string;
//   price: number;
//   discount: number;
//   discountedPrice: number;
//   whatYouGet: string[];
// };

// // UI PACKAGE TYPE (USED BY CARD)
// type PackageItem = {
//   id: number;
//   name: string;
//   oldPrice?: string;
//   price: string;
//   discount?: string;
//   features: string[];
//   highlight?: boolean;
// };

// type PackageItemProps = {
//   packages: ApiPackage[];
// };

// /* ================= COMPONENT ================= */
// export default function Packages({ packages }: PackageItemProps) {

//   // 🔹 API → UI DATA TRANSFORMATION (NO CSS CHANGE)
//   const formattedPackages: PackageItem[] = packages.map((pkg, index) => ({
//     id: index + 1,
//     name: pkg.name,
//     oldPrice: `₹${pkg.price.toLocaleString()}`,
//     price: `₹${Math.round(pkg.discountedPrice).toLocaleString()}`,
//     discount: `${pkg.discount}% Off`,
//     features: pkg.whatYouGet,
//     highlight: index === 1,
//   }));

//   return (
//     <section className="bg-[#F7F7F7] py-6 px-4 md:px-1">
//       {/* TITLE */}
//       <div className="flex items-start md:justify-center lg:items-center lg:justify-center mt-4 mb-4">
//         <h2 className="text-[#2164F4] font-semibold text-[16px] md:text-[24px] lg:text-[36px]">
//           Packages
//         </h2>
//       </div>

//       {/* ================= DESKTOP ================= */}
//       <div className="hidden lg:grid max-w-6xl mx-auto grid-cols-3 gap-20">
//         {formattedPackages.map((pkg) => (
//           <PackageCard key={pkg.id} pkg={pkg} />
//         ))}
//       </div>

//       {/* ================= TABLET ================= */}
//       <div className="hidden lg:hidden md:grid max-w-[650px] mx-auto grid-cols-3 gap-20">
//         {formattedPackages.map((pkg) => (
//           <div key={pkg.id} className="w-[370px] flex-shrink-0">
//             <PackageCard pkg={pkg} />
//           </div>
//         ))}
//       </div>

//       {/* ================= MOBILE ================= */}
//       <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 mr-2">
//         <div className="flex gap-6 px-4 py-4">
//           {formattedPackages.map((pkg) => (
//             <div key={pkg.id} className="w-[170px] flex-shrink-0">
//               <PackageCard pkg={pkg} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ================= CARD ================= */
// const PackageCard = ({ pkg }: { pkg: PackageItem }) => {

//     const { selectedPackage, setSelectedPackage } = useCheckout();

//     const isSelected = selectedPackage?._id === pkg._id;



//     const handleSelect = () => {
//       setSelectedPackage({
//         _id: pkg._id,
//         name: pkg.name,
//         price: pkg.price,
//         discount: pkg.discount,
//         discountedPrice: pkg.discountedPrice,
//       });
//     };

//   return (
//     <div className="relative bg-white border-t-4 border-blue-500 rounded-2xl w-full min-h-[350px] md:w-[200px] md:min-h-full lg:w-[322px] shadow-md md:p-6 p-3 lg:min-h-[449px] flex flex-col">

//       {/* TITLE */}
//       <h3 className="text-center text-[14px] md:text-[24px] lg:text-[32px] font-semibold text-gray-700 mb-4">
//         {pkg.name}
//       </h3>

//       {/* PRICE BOX */}
//       <div className="border border-orange-300 rounded-lg py-3 px-4 w-fit mx-auto text-center mb-6">
//         <p className="text-gray-400 line-through text-sm">
//           {pkg.oldPrice}{" "}
//           <span className="text-blue-500">{pkg.discount}</span>
//         </p>
//         <p className="text-2xl font-bold">{pkg.price}</p>
//         <p className="text-xs text-gray-400">Onwords</p>
//       </div>

//       {/* FEATURES */}
//       <div className="mx-auto">
//         <p className="font-medium text-[12px] md:text-[18px] mb-3">
//           What You Get -
//         </p>
//         <ul className="space-y-2 flex-1">
//           {pkg.features.map((feature, index) => (
//             <li
//               key={index}
//               className="flex gap-2 text-[10px] md:text-[18px] text-gray-600"
//             >
//               <span className="text-green-500">✔</span>
//               {feature}
//             </li>
//           ))}
//         </ul>
//       </div>

//        <button
//         onClick={handleSelect}
//         className={`mt-auto py-2 rounded-lg text-sm text-white
//           ${isSelected ? "bg-green-600" : "bg-blue-600"}`}
//       >
//         {isSelected ? "Selected" : "Select Package"}
//       </button>


//     </div>
//   );
// };





"use client";

import { useCheckout } from "@/src/context/CheckoutContext";
import { useParams } from "next/navigation";


/* ================= TYPES ================= */
type PackageItem = {
  _id: string;
  name: string;
  price: number;
  discount: number;
  discountedPrice: number;
  whatYouGet: string[];
};

type PackagesProps = {
  packages: PackageItem[];
};

/* ================= COMPONENT ================= */
export default function Packages({ packages = [] }: PackagesProps) {


  if (!packages.length) return null;



  return (
    <section className="bg-[#F7F7F7] py-6 px-4 md:px-4">
      
      {/* TITLE */}

      <div className="flex items-start md:justify-center lg:items-center lg:justify-center mt-4 mb-4">
        <h2 className="text-[#2164F4] font-semibold text-[16px] md:text-[24px] lg:text-[36px]">
          Packages
        </h2>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:grid max-w-6xl mx-auto grid-cols-3 gap-20">
        {packages.map((pkg) => (
          <PackageCard key={pkg._id} pkg={pkg} />
        ))}
      </div>

      {/* ================= TABLET ================= */}
      <div className="hidden md:grid lg:hidden max-w-6xl mx-auto grid-cols-3 gap-10">
        {packages.map((pkg) => (
          <div key={pkg._id} className="w-[250px] mx-auto">
            <PackageCard pkg={pkg} />
          </div>
        ))}
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4">
        <div className="flex gap-6 px-4 py-4">
          {packages.map((pkg) => (
            <div key={pkg._id} className="w-[170px] flex-shrink-0">
              <PackageCard pkg={pkg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function PackageCard({ pkg }: { pkg: PackageItem }) {
const params = useParams();
  const serviceId = params.id as string;


  const { selectedPackage, setSelectedPackage } = useCheckout();

  const isSelected = selectedPackage?._id === pkg._id;



  const handleSelect = () => {
    setSelectedPackage({
      _id: pkg._id,
      name: pkg.name,
      price: pkg.price,
      discount: pkg.discount,
      discountedPrice: pkg.discountedPrice,
    },
     serviceId 
  );
  };




  return (
    <div className="relative bg-white rounded-2xl w-full min-h-[350px] md:w-[190px] md:min-h-[350px] lg:w-[322px] lg:min-h-[449px] shadow-md md:p-6 p-3 flex flex-col">
      {/* TITLE */}
      <h3 className="flex justify-center text-center text-[14px] md:text-[24px] lg:text-[32px] font-semibold text-gray-700 mb-4 whitespace-nowrap">
        {pkg.name}
      </h3>

      {/* PRICE BOX */}
      <div className="border border-orange-300 rounded-lg py-3 px-4 w-fit mx-auto text-center mb-6">
        <p className="text-gray-400 line-through text-sm">
          ₹{pkg.price.toLocaleString()}
          <span className="text-blue-500 ml-2">
            {pkg.discount}% Off
          </span>
        </p>
        <p className="text-2xl font-bold">
          ₹{pkg.discountedPrice.toLocaleString()}
        </p>
        <p className="text-xs text-gray-400">Onwards</p>
      </div>

      {/* FEATURES */}
      <div className="mx-auto">
        <p className="font-medium text-[12px] md:text-[18px] mb-3">
          What You Get -
        </p>
        <ul className="space-y-2">
          {pkg.whatYouGet.map((feature, index) => (
            <li
              key={index}
              className="flex gap-2 text-[10px] md:text-[18px] text-gray-600 whitespace-nowrap"
            >
              <span className="text-green-500">✔</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleSelect}
        className={`mt-auto py-2 rounded-lg text-sm text-white
          ${isSelected ? "bg-green-600" : "bg-blue-600"}`}
      >
        {isSelected ? "Selected" : "Select Package"}
      </button>

    </div>
  );
}


