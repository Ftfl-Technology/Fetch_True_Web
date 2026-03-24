// function CompleteProfile() {

    
//   return (
//     <div className="p-6">
//       <h3 className="text-lg font-semibold text-[#232323] mb-6">
//         Complete Profile
//       </h3>

//       <div className="space-y-5">
//         {/* Name */}
//         <div>
//           <label className="block text-sm text-[#232323] mb-1">
//             Name
//           </label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Phone Number */}
//         <div>
//           <label className="block text-sm text-[#232323] mb-1">
//             Phone number
//           </label>
//           <input
//             type="text"
//             placeholder="Enter phone number"
//             className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block text-sm text-[#232323] mb-1">
//             Email ID
//           </label>
//           <input
//             type="email"
//             placeholder="Enter email"
//             className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Save Button */}
//         <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700 transition">
//           Save Changes
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CompleteProfile;



// "use client";

// import { useEffect, useState } from "react";
// import { useUser } from "@/src/context/UserContext";

// function CompleteProfile() {
//   const { user, fetchUser, loading } = useUser();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     mobileNumber: "",
//     email: "",
//   });

//   /* ================= FETCH USER ================= */
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");

//     if (storedUser) {
//       const parsed = JSON.parse(storedUser);

//       if (parsed?._id) {
//         fetchUser(parsed._id); // 👈 backend call
//       }
//     }
//   }, []);

//   /* ================= PREFILL FORM ================= */
//   useEffect(() => {
//     if (user) {
//       setFormData({
//         fullName: user.fullName || "",
//         mobileNumber: user.mobileNumber || "",
//         email: user.email || "",
//       });
//     }
//   }, [user]);

//   /* ================= HANDLE CHANGE ================= */
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };



//   if (loading) return <p>Loading profile...</p>;

//   return (
//     <div className="p-6">
//       <h3 className="text-lg font-semibold text-[#232323] mb-6">
//         Complete Profile
//       </h3>

//       <div className="space-y-5">
//         {/* Name */}
//         <div>
//           <label className="block text-sm text-[#232323] mb-1">
//             Name
//           </label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Phone Number */}
//         <div>
//           <label className="block text-sm text-[#232323] mb-1">
//             Phone number
//           </label>
//           <input
//             type="text"
//             name="mobileNumber"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//             className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block text-sm text-[#232323] mb-1">
//             Email ID
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border border-[#E6E6E6] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Save Button */}
//         <button
//           className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700 transition"
//         >
//           Save Changes
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CompleteProfile;


"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/src/context/UserContext";

function CompleteProfile() {
  const { user, fetchUser, updateUser, loading } = useUser();

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
  });

  /* ================= FETCH USER ================= */
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsed = JSON.parse(storedUser);

      if (parsed?._id) {
        fetchUser(parsed._id);
      }
    }
  }, []);

  /* ================= PREFILL FORM ================= */
  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || "",
        mobileNumber: user.mobileNumber || "",
        email: user.email || "",
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

  /* ================= HANDLE UPDATE ================= */
  const handleSubmit = async () => {
    if (!user?._id) return;

    await updateUser(user._id, formData);

    alert("Profile updated successfully ✅");
  };

  if (loading) return <p>Loading profile...</p>;

  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-[#232323] mb-6">
        Complete Profile
      </h3>

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm text-[#232323] mb-1">
            Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-[#E6E6E6] rounded-md px-3 py-2"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm text-[#232323] mb-1">
            Phone number
          </label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full border border-[#E6E6E6] rounded-md px-3 py-2"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-[#232323] mb-1">
            Email ID
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-[#E6E6E6] rounded-md px-3 py-2"
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default CompleteProfile;
