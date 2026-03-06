// "use client";

// import { useState } from "react";
// import { FiHome, FiBriefcase, FiMapPin } from "react-icons/fi";

// export default function AddAddress() {
//   const [addressType, setAddressType] = useState("Home");

//   const types = [
//     { label: "Home", icon: FiHome },
//     { label: "Work", icon: FiBriefcase },
//     { label: "Other", icon: FiMapPin },
//   ];

//   return (
//     <div className="p-6">
//       <h3 className="text-lg font-semibold text-[#232323] mb-6">
//         Add Address
//       </h3>

//       <div className="space-y-5">
//         {/* House / Flat */}
//         <div>
//           <label className="block text-sm text-[#232323] mb-1">
//             House/Flat/Floor Number <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
//           />
//         </div>

//         {/* Landmark */}
//         <div>
//           <label className="block text-sm text-[#232323] mb-1">
//             Landmark <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
//           />
//         </div>

//         {/* Address Type */}
//         <div>
//           <label className="block text-sm text-[#232323] mb-2">
//             Save address as
//           </label>

//           <div className="flex gap-3">
//             {types.map(({ label, icon: Icon }) => {
//               const isActive = addressType === label;

//               return (
//                 <button
//                   key={label}
//                   onClick={() => setAddressType(label)}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-md border text-sm transition
//                     ${
//                       isActive
//                         ? "border-blue-600 text-blue-600 bg-blue-50"
//                         : "border-gray-300 text-gray-600"
//                     }`}
//                 >
//                   <Icon size={16} />
//                   {label}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* City / State / Country / Pincode */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <div>
//             <label className="block text-sm text-[#232323] mb-1">
//               City <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-[#232323] mb-1">
//               State <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-[#232323] mb-1">
//               Country <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-[#232323] mb-1">
//               Pincode <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
//             />
//           </div>
//         </div>

//         {/* Save Button */}
//         <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700 transition">
//           Save Address
//         </button>
//       </div>
//     </div>
//   );
// }





"use client";

import { useState, useEffect } from "react";
import { FiHome, FiBriefcase, FiMapPin } from "react-icons/fi";
import { useUser } from "@/src/context/UserContext";

export default function AddAddress() {
  const { user, fetchUser, loading } = useUser();

  const [addressType, setAddressType] = useState("Home");

  const [formData, setFormData] = useState({
    houseNumber: "",
    landmark: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const types = [
    { label: "Home", icon: FiHome },
    { label: "Work", icon: FiBriefcase },
    { label: "Other", icon: FiMapPin },
  ];

  /* ================= FETCH USER ON LOAD ================= */
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsed = JSON.parse(storedUser);

      if (parsed?._id) {
        fetchUser(parsed._id);
      }
    }
  }, []);

  /* ================= PREFILL ADDRESS ================= */
  useEffect(() => {
    if (user?.homeAddress) {
      setFormData({
        houseNumber: user.homeAddress.houseNumber || "",
        landmark: user.homeAddress.landmark || "",
        city: user.homeAddress.city || "",
        state: user.homeAddress.state || "",
        country: user.homeAddress.country || "",
        pinCode: user.homeAddress.pinCode || "",
      });
    }
  }, [user]);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) return <p>Loading address...</p>;

  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-[#232323] mb-6">
        Add Address
      </h3>

      <div className="space-y-5">
        {/* House */}
        <div>
          <label className="block text-sm mb-1">
            House/Flat/Floor Number *
          </label>
          <input
            type="text"
            name="houseNumber"
            value={formData.houseNumber}
            onChange={handleChange}
            className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
          />
        </div>

        {/* Landmark */}
        <div>
          <label className="block text-sm mb-1">
            Landmark *
          </label>
          <input
            type="text"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
          />
        </div>

        {/* Address Type */}
        <div>
          <label className="block text-sm mb-2">
            Save address as
          </label>

          <div className="flex gap-3">
            {types.map(({ label, icon: Icon }) => {
              const isActive = addressType === label;

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setAddressType(label)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md border text-sm
                    ${
                      isActive
                        ? "border-blue-600 text-blue-600 bg-blue-50"
                        : "border-gray-300 text-gray-600"
                    }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "City", name: "city" },
            { label: "State", name: "state" },
            { label: "Country", name: "country" },
            { label: "Pincode", name: "pinCode" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm mb-1">
                {field.label} *
              </label>
              <input
                type="text"
                name={field.name}
                value={(formData as any)[field.name]}
                onChange={handleChange}
                className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
              />
            </div>
          ))}
        </div>

        {/* Save */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700 transition">
          Save Address
        </button>
      </div>
    </div>
  );
}
