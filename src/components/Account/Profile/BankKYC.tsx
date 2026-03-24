// "use client";

// export default function BankKYC() {
//   return (
//     <div className="p-6">
//       <h3 className="text-lg font-semibold text-[#232323]">
//         Add KYC
//       </h3>
//       <p className="text-sm text-gray-500 mb-6">
//         Fill your bank details
//       </p>

//       <div className="space-y-5">
//         {/* Account Number */}
//         <div>
//           <label className="block text-sm text-[#232323] mb-1">
//             Account Number <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
//           />
//         </div>

//         {/* IFSC Code */}
//         <div>
//           <label className="block text-sm text-[#232323] mb-1">
//             IFSC Code <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
//           />
//         </div>

//         {/* Bank Name */}
//         <div>
//           <label className="block text-sm text-[#232323] mb-1">
//             Bank Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
//           />
//         </div>

//         {/* Branch Name */}
//         <div>
//           <label className="block text-sm text-[#232323] mb-1">
//             Branch Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
//           />
//         </div>

//         {/* Save Button */}
//         <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700 transition">
//           Save KYC Details
//         </button>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useUser } from "@/src/context/UserContext";

// export default function BankKYC() {
//   const { user, fetchUser, loading } = useUser();

//   const [formData, setFormData] = useState({
//     accountNumber: "",
//     ifscCode: "",
//     bankName: "",
//     branchName: "",
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});

//   /* ================= FETCH USER ================= */
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");

//     if (storedUser) {
//       const parsed = JSON.parse(storedUser);

//       if (parsed?._id) {
//         fetchUser(parsed._id);
//       }
//     }
//   }, []);

//   /* ================= PREFILL ================= */
//   useEffect(() => {
//     if ((user as any)?.bankKYC) {
//       const kyc = (user as any).bankKYC;

//       setFormData({
//         accountNumber: kyc.accountNumber || "",
//         ifscCode: kyc.ifscCode || "",
//         bankName: kyc.bankName || "",
//         branchName: kyc.branchName || "",
//       });
//     }
//   }, [user]);

//   /* ================= HANDLE CHANGE ================= */
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//     setErrors({
//       ...errors,
//       [e.target.name]: "",
//     });
//   };

//   /* ================= VALIDATION ================= */
//   const validate = () => {
//     const newErrors: Record<string, string> = {};

//     if (!formData.accountNumber.trim())
//       newErrors.accountNumber = "Account number is required";

//     if (!formData.ifscCode.trim())
//       newErrors.ifscCode = "IFSC code is required";

//     if (!formData.bankName.trim())
//       newErrors.bankName = "Bank name is required";

//     if (!formData.branchName.trim())
//       newErrors.branchName = "Branch name is required";

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   /* ================= SAVE ================= */
// //   const handleSave = async () => {
// //     if (!validate()) return;

// //     if (!user?._id) {
// //       alert("User not loaded");
// //       return;
// //     }

// //     try {
// //       const res = await axios.put(
// //         `https://api.fetchtrue.com/api/users/${user._id}/bank-kyc`,
// //         formData
// //       );

// //       if (res.data.success) {
// //         alert("KYC details saved ✅");
// //         fetchUser(user._id); // refresh
// //       } else {
// //         alert(res.data.message);
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to save KYC ❌");
// //     }
// //   };

//   if (loading) return <p>Loading KYC...</p>;

//   const hasKYC = (user as any)?.bankKYC;

//   return (
//     <div className="p-6">
//       <h3 className="text-lg font-semibold text-[#232323]">
//         {hasKYC ? "Edit KYC" : "Add KYC"}
//       </h3>
//       <p className="text-sm text-gray-500 mb-6">
//         Fill your bank details
//       </p>

//       <div className="space-y-5">
//         {/* Account Number */}
//         <div>
//           <label className="block text-sm mb-1">
//             Account Number *
//           </label>
//           <input
//             type="text"
//             name="accountNumber"
//             value={formData.accountNumber}
//             onChange={handleChange}
//             className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
//           />
//           {errors.accountNumber && (
//             <p className="text-red-500 text-xs">
//               {errors.accountNumber}
//             </p>
//           )}
//         </div>

//         {/* IFSC */}
//         <div>
//           <label className="block text-sm mb-1">
//             IFSC Code *
//           </label>
//           <input
//             type="text"
//             name="ifscCode"
//             value={formData.ifscCode}
//             onChange={handleChange}
//             className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm uppercase"
//           />
//           {errors.ifscCode && (
//             <p className="text-red-500 text-xs">
//               {errors.ifscCode}
//             </p>
//           )}
//         </div>

//         {/* Bank Name */}
//         <div>
//           <label className="block text-sm mb-1">
//             Bank Name *
//           </label>
//           <input
//             type="text"
//             name="bankName"
//             value={formData.bankName}
//             onChange={handleChange}
//             className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
//           />
//           {errors.bankName && (
//             <p className="text-red-500 text-xs">
//               {errors.bankName}
//             </p>
//           )}
//         </div>

//         {/* Branch */}
//         <div>
//           <label className="block text-sm mb-1">
//             Branch Name *
//           </label>
//           <input
//             type="text"
//             name="branchName"
//             value={formData.branchName}
//             onChange={handleChange}
//             className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
//           />
//           {errors.branchName && (
//             <p className="text-red-500 text-xs">
//               {errors.branchName}
//             </p>
//           )}
//         </div>

//         {/* Save */}
//         {/* <button
//           onClick={handleSave}
//           className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700 transition"
//         >
//           {hasKYC ? "Update KYC Details" : "Save KYC Details"}
//         </button> */}
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@/src/context/UserContext";

export default function BankKYC() {
  const { user } = useUser();

  const [formData, setFormData] = useState({
    accountNumber: "",
    ifscCode: "",
    bankName: "",
    branchName: "",
  });

  const [loadingKYC, setLoadingKYC] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  /* ================= FETCH BANK DETAILS ================= */
  useEffect(() => {
    if (!user?._id) return;

    const fetchBankDetails = async () => {
      try {
        const res = await axios.get(
          `https://api.fetchtrue.com/api/users/bank-details/${user._id}`
        );

        if (res.data.success && res.data.data) {
          const kyc = res.data.data;

          setFormData({
            accountNumber: kyc.accountNumber || "",
            ifscCode: kyc.ifsc || "",
            bankName: kyc.bankName || "",
            branchName: kyc.branchName || "",
          });
        }
      } catch (err) {
        console.error("No bank details found");
      } finally {
        setLoadingKYC(false);
      }
    };

    fetchBankDetails();
  }, [user?._id]);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  /* ================= VALIDATION ================= */
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.accountNumber.trim())
      newErrors.accountNumber = "Account number is required";

    if (!formData.ifscCode.trim())
      newErrors.ifscCode = "IFSC code is required";

    if (!formData.bankName.trim())
      newErrors.bankName = "Bank name is required";

    if (!formData.branchName.trim())
      newErrors.branchName = "Branch name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ================= SAVE / UPDATE ================= */
  const handleSave = async () => {
    if (!validate()) return;

    if (!user?._id) {
      alert("User not loaded");
      return;
    }

    try {
      const res = await axios.post(
        `https://api.fetchtrue.com/api/wallet/add-beneficiary/${user._id}`,
        {
          accountNumber: formData.accountNumber,
          ifsc: formData.ifscCode,
          bankName: formData.bankName,
          branchName: formData.branchName,
        }
      );

      if (res.data.success) {
        alert("KYC details saved ✅");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to save KYC ❌");
    }
  };

  if (loadingKYC) return <p>Loading KYC...</p>;

  const hasKYC = !!formData.accountNumber;

  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-[#232323]">
        {hasKYC ? "Edit KYC" : "Add KYC"}
      </h3>

      <p className="text-sm text-gray-500 mb-6">
        Fill your bank details
      </p>

      <div className="space-y-5">
        {/* Account Number */}
        <div>
          <label className="block text-sm mb-1">
            Account Number *
          </label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
          />
          {errors.accountNumber && (
            <p className="text-red-500 text-xs">{errors.accountNumber}</p>
          )}
        </div>

        {/* IFSC */}
        <div>
          <label className="block text-sm mb-1">
            IFSC Code *
          </label>
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm uppercase"
          />
          {errors.ifscCode && (
            <p className="text-red-500 text-xs">{errors.ifscCode}</p>
          )}
        </div>

        {/* Bank Name */}
        <div>
          <label className="block text-sm mb-1">
            Bank Name *
          </label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
          />
          {errors.bankName && (
            <p className="text-red-500 text-xs">{errors.bankName}</p>
          )}
        </div>

        {/* Branch */}
        <div>
          <label className="block text-sm mb-1">
            Branch Name *
          </label>
          <input
            type="text"
            name="branchName"
            value={formData.branchName}
            onChange={handleChange}
            className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm"
          />
          {errors.branchName && (
            <p className="text-red-500 text-xs">{errors.branchName}</p>
          )}
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700 transition"
        >
          {hasKYC ? "Update KYC Details" : "Save KYC Details"}
        </button>
      </div>
    </div>
  );
}
