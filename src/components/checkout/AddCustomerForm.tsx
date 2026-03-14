
// import { useState } from 'react';
// import { User, Phone, Mail, MapPin } from 'lucide-react';

// export default function AddCustomerForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     description: '',
//     address: '',
//     city: '',
//     state: '',
//     country: 'India',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Add your save logic here
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-md">
//       <button className="flex items-center gap-2 text-gray-600 mb-4">
//         &#8592; My Account
//       </button>
//       <h2 className="text-xl font-semibold mb-6">Add New Customer</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Name */}
//         <div>
//           <label className="block text-sm font-medium mb-1">
//             <User className="inline mr-1" /> Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter Name"
//             className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Phone */}
//         <div>
//           <label className="block text-sm font-medium mb-1">
//             <Phone className="inline mr-1" /> Phone <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Enter Phone No"
//             className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block text-sm font-medium mb-1">
//             <Mail className="inline mr-1" /> Email <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="mail@gmail.com"
//             className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Description */}
//         <div>
//           <label className="block text-sm font-medium mb-1">Description (Optional)</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="write down details here"
//             className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           ></textarea>
//         </div>

//         {/* Address */}
//         <div>
//           <label className="block text-sm font-medium mb-1">
//             <MapPin className="inline mr-1" /> Address <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             placeholder="Address"
//             className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* City, State, Country */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">City <span className="text-red-500">*</span></label>
//             <select
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             >
//               <option value="">Select City</option>
//               <option value="Mumbai">Mumbai</option>
//               <option value="Delhi">Delhi</option>
//               <option value="Bangalore">Bangalore</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">State <span className="text-red-500">*</span></label>
//             <select
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             >
//               <option value="">Select State</option>
//               <option value="Maharashtra">Maharashtra</option>
//               <option value="Delhi">Delhi</option>
//               <option value="Karnataka">Karnataka</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Country <span className="text-red-500">*</span></label>
//             <input
//               type="text"
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//               readOnly
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-md text-lg font-medium hover:bg-blue-700 transition"
//         >
//           Save Data
//         </button>
//       </form>
//     </div>
//   );
// }




'use client';

import { useState } from 'react';
import { User, Phone, Mail, MapPin, X } from 'lucide-react';
import { useAuth } from '@/src/context/AuthContext';
import axios from 'axios';

type Props = {
  onClose: () => void;
};

export default function AddCustomerDialog({ onClose }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    description: '',
    address: '',
    city: '',
    state: '',
    country: 'India',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
        // Create FormData object
        const formDataObj = new FormData();
        formDataObj.append('fullName', formData.fullName);
        formDataObj.append('phone', formData.phone);
        formDataObj.append('email', formData.email);
        formDataObj.append('description', formData.description);
        formDataObj.append('address', formData.address);
        formDataObj.append('city', formData.city);
        formDataObj.append('state', formData.state);
        formDataObj.append('country', formData.country);
        formDataObj.append('user', user._id)

        console.log('Sending customer data as FormData');

        // Make API call with multipart/form-data content type
        const response = await axios.post(
            'https://api.fetchtrue.com/api/service-customer',
            formDataObj,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        console.log('API Response:', response.data);

        if (response.status === 200 || response.status === 201) {
           
            alert('Customer added successfully!');
            onClose();
        }

    } catch (error: unknown) {
         if(error instanceof Error) {
            setError(error.message);
        }
        else {           
           setError('An unexpected error occurred');
        }
    } finally {
        setLoading(false);
    }
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative bg-white w-[90%] max-w-2xl mx-auto rounded-xl shadow-lg max-h-[90vh] overflow-y-auto p-6 z-10 scrollbar-hide">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Add New Customer</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-600 cursor-pointer" />
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm font-medium mb-2">
              <User className="inline mr-1" /> Full Name *
            </label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              <Phone className="inline mr-1" /> Phone *
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              <Mail className="inline mr-1" /> Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Description (Optional)
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              <MapPin className="inline mr-1" /> Address *
            </label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="border rounded-md px-3 py-2"
              required
            >
              <option value="">City</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
            </select>

            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="border rounded-md px-3 py-2"
              required
            >
              <option value="">State</option>
              <option>Maharashtra</option>
              <option>Karnataka</option>
            </select>

            <input
              name="country"
              value={formData.country}
              readOnly
              className="border rounded-md px-3 py-2 bg-gray-100"
            />
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 border rounded-md py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 bg-blue-600 text-white rounded-md py-2"
            >
              Save Data
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
