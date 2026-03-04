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
      <div className="flex items-start md:justify-center mb-4">
        <h2
          className="text-white bg-black px-6 md:px-12 py-2 text-[12px] md:text-[18px] lg:text-[36px] font-semibold"
          style={{
            clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
          }}
        >
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



  // const handleSelect = () => {
  //   setSelectedPackage({
  //     _id: pkg._id,
  //     name: pkg.name,
  //     price: pkg.price,
  //     discount: pkg.discount,
  //     discountedPrice: pkg.discountedPrice,
  //   });
  // };

   const handleSelect = () => {
    setSelectedPackage(
      {
        _id: pkg._id,
        name: pkg.name,
        price: pkg.price,
        discount: pkg.discount,
        discountedPrice: pkg.discountedPrice,
      },
      serviceId   // ← required by new context signature
    );
  };

  return (
    <div className="relative bg-white rounded-2xl w-full min-h-[350px] md:w-[190px] md:min-h-[350px] lg:w-[322px] lg:min-h-[449px] shadow-md md:p-6 p-3 flex flex-col">
      {/* TITLE */}
      <h3 className="text-center text-[14px] md:text-[24px] lg:text-[32px] font-semibold text-gray-700 mb-4">
        {pkg.name}
      </h3>

      {/* PRICE BOX */}
      <div className="border border-orange-300 rounded-lg py-3 px-4 w-fit mx-auto text-center mb-6">
        <div className="flex flex-row items-center">
          <p className="text-gray-400 line-through text-sm">
            ₹{pkg.price.toLocaleString()}
          </p>
          <span className="text-blue-500 text-[12px] lg:text-[15px] ml-2 lg:ml-2">
            {pkg.discount}%OFF
          </span>
        </div>
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
              className="flex gap-2 text-[10px] md:text-[18px] text-gray-600"
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


