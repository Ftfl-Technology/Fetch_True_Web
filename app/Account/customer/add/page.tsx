// "use client";

// import { User, Phone, Mail, MapPin } from "lucide-react";
// import { useState } from "react";

// type Props = {
//   onBack: () => void;
// };

// export default function AddCustomerForm({ onBack }: Props) {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     description: "",
//     address: "",
//     city: "",
//     state: "",
//     country: "India",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form Data:", form);
//   };

//   return (
//     <div className="bg-white rounded-xl  shadow-sm p-6">
//       {/* ✅ Back Button */}
//       <button
//         onClick={onBack}
//         className="text-sm text-gray-500 hover:text-gray-700 mb-4"
//       >
//         ← Back to Customers
//       </button>

//       <h2 className="text-lg font-semibold text-gray-900 mb-6">
//         Add New Customer
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-5">
//         {/* Name */}
//         <div>
//           <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
//             <User className="w-4 h-4 text-gray-400" />
//             Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Enter Name"
//             className="mt-1 w-full border border-[#B6B6B6] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Phone */}
//         <div>
//           <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
//             <Phone className="w-4 h-4 text-gray-400" />
//             Phone <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="phone"
//             value={form.phone}
//             onChange={handleChange}
//             placeholder="Enter Phone No"
//             className="mt-1 w-full border border-[#B6B6B6] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
//             <Mail className="w-4 h-4 text-gray-400" />
//             Email <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="email"
//             type="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="mail@gmail.com"
//             className="mt-1 w-full border border-[#B6B6B6] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Description */}
//         <div>
//           <label className="text-sm font-medium text-gray-700">
//             Description <span className="text-gray-400">(Optional)</span>
//           </label>
//           <textarea
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             placeholder="write down details here"
//             rows={4}
//             className="mt-1 w-full border border-[#B6B6B6] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//           />
//         </div>

//         {/* Address */}
//         <div>
//           <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
//             <MapPin className="w-4 h-4 text-gray-400" />
//             Address <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="address"
//             value={form.address}
//             onChange={handleChange}
//             placeholder="Address"
//             className="mt-1 w-full border border-[#B6B6B6] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* City / State / Country */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//            <div>
//             <label className="text-sm font-medium text-gray-700">
//               City <span className="text-red-500">*</span>
//             </label>
//             <select
//               name="city"
//               value={form.city}
//               onChange={handleChange}
//               className="mt-1 w-full border border-[#B6B6B6] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//               required
//             >
//               <option value="">Select City</option>
//               <option>Mumbai</option>
//               <option>Delhi</option>
//               <option>Bangalore</option>
//             </select>
//           </div>

//           <div>
//             <label className="text-sm font-medium text-gray-700">
//               State <span className="text-red-500">*</span>
//             </label>
//             <select
//               name="state"
//               value={form.state}
//               onChange={handleChange}
//               className="mt-1 w-full border border-[#B6B6B6] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//               required
//             >
//               <option value="">Select State</option>
//               <option>Maharashtra</option>
//               <option>Gujarat</option>
//               <option>Karnataka</option>
//             </select>
//           </div>

//           <div>
//             <label className="text-sm font-medium text-gray-700">
//               Country <span className="text-red-500">*</span>
//             </label>
//             <input
//               name="country"
//               value={form.country}
//               onChange={handleChange}
//               className="mt-1 w-full border border-[#B6B6B6] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//         </div>

//         {/* Save Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
//         >
//           Save Data
//         </button>
//       </form>
//     </div>
//   );
// }


"use client";

import { User, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useServiceCustomers } from "@/src/context/ServiceCustomerContext";
import { State, City } from "country-state-city";


type Props = {
  onBack: () => void;
};

export default function AddCustomerForm({ onBack }: Props) {
  const { addCustomer, loading } = useServiceCustomers();
    const states = State.getStatesOfCountry("IN");


  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
    address: "",
    city: "",
    state: "",
    country: "India",
  });

  const [errors, setErrors] = useState({
  name: "",
  phone: "",
  email: "",
  address: "",
  state: "",
  city: "",
});

   const [stateCode, setStateCode] = useState("");

  const cities = City.getCitiesOfState("IN", stateCode);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;

  if (/^[a-zA-Z\s]*$/.test(value)) {
    setForm({ ...form, name: value });
  }
};

const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;

  if (/^\d*$/.test(value)) {
    setForm({ ...form, phone: value });
  }
};

   const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value;
    setStateCode(code);

    const stateName =
      states.find((s) => s.isoCode === code)?.name || "";

    setForm({
      ...form,
      state: stateName,
      city: "",
    });
  };

  const validate = () => {
  const newErrors: any = {};

  if (!form.name.trim()) {
    newErrors.name = "Name is required";
  } else if (!/^[a-zA-Z\s]+$/.test(form.name)) {
    newErrors.name = "Only characters allowed";
  }

  if (!form.phone) {
    newErrors.phone = "Phone is required";
  } else if (!/^[0-9]{10}$/.test(form.phone)) {
    newErrors.phone = "Phone must be 10 digits";
  }

  if (!form.email) {
    newErrors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    newErrors.email = "Invalid email";
  }

  if (!form.address.trim()) {
    newErrors.address = "Address is required";
  }

  if (!form.state) {
    newErrors.state = "State is required";
  }

  if (!form.city) {
    newErrors.city = "City is required";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

  const success = await addCustomer({
    fullName: form.name,
    phone: form.phone,
    email: form.email,
    description: form.description,
    address: form.address,
    city: form.city,
    state: form.state,
    country: form.country,
  });

  if (success) {
    alert("Customer Added Successfully ✅");
    onBack();
  }
};

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="text-sm text-gray-500 hover:text-gray-700 mb-4"
      >
        ← Back to Customers
      </button>

      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Add New Customer
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
            <User className="w-4 h-4 text-gray-400" />
            Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleNameChange}
            placeholder="Enter Name"
            className="mt-1 w-full border border-[#B6B6B6] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.name && (
  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
)}
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
            <Phone className="w-4 h-4 text-gray-400" />
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handlePhoneChange}
            placeholder="Enter Phone No"
            maxLength={10}
            inputMode="numeric"
            className="mt-1 w-full border border-[#B6B6B6] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {errors.phone && (
  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
)}
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
            <Mail className="w-4 h-4 text-gray-400" />
            Email <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="mail@gmail.com"
            className="mt-1 w-full border border-[#B6B6B6] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.email && (
  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
)}
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Description <span className="text-gray-400">(Optional)</span>
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="write down details here"
            rows={4}
            className="mt-1 w-full border border-[#B6B6B6] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Address */}
        <div>
          <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
            <MapPin className="w-4 h-4 text-gray-400" />
            Address <span className="text-red-500">*</span>
          </label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            className="mt-1 w-full border border-[#B6B6B6] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.address && (
  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
)}
        </div>

        {/* City / State / Country */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* <div>
            <label className="text-sm font-medium text-gray-700">
              City <span className="text-red-500">*</span>
            </label>
            <select
              name="city"
              value={form.city}
              onChange={handleChange}
              className="mt-1 w-full border border-[#B6B6B6] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              required
            >
              <option value="">Select City</option>
              <option>Pune</option>
              <option>Mumbai</option>
              <option>Delhi</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              State <span className="text-red-500">*</span>
            </label>
            <select
              name="state"
              value={form.state}
              onChange={handleChange}
              className="mt-1 w-full border border-[#B6B6B6] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              required
            >
              <option value="">Select State</option>
              <option>Maharashtra</option>
              <option>Gujarat</option>
              <option>Karnataka</option>
            </select>
          </div> */}

                    {/* State */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              State <span className="text-red-500">*</span>
            </label>

            <select
              onChange={handleStateChange}
              className="mt-1 w-full border border-[#B6B6B6] rounded-lg px-3 py-2 text-sm bg-white"
              required
            >
              <option value="">Select State</option>

              {states.map((s) => (
                <option key={s.isoCode} value={s.isoCode}>
                  {s.name}
                </option>
              ))}
            </select>
            {errors.state && (
  <p className="text-red-500 text-xs mt-1">{errors.state}</p>
)}
          </div>

          {/* City */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              City <span className="text-red-500">*</span>
            </label>

            <select
              name="city"
              value={form.city}
              onChange={handleChange}
              className="mt-1 w-full border border-[#B6B6B6] rounded-lg px-3 py-2 text-sm bg-white"
              required
            >
              <option value="">Select City</option>

              {cities.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
            {errors.city && (
  <p className="text-red-500 text-xs mt-1">{errors.city}</p>
)}
          </div>


          <div>
            <label className="text-sm font-medium text-gray-700">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              name="country"
              value={form.country}
              // onChange={handleChange}
              readOnly
              className="mt-1 w-full border border-[#B6B6B6] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {loading ? "Saving..." : "Save Data"}
        </button>
      </form>
    </div>
  );
}
