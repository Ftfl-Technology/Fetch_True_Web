// "use client";

// import { useState } from "react";
// import { Search, UserPlus, Phone, Mail } from "lucide-react";
// import { useRouter } from "next/navigation";

// type Customer = {
//   id: string;
//   name: string;
//   ftId: string;
//   phone: string;
//   address: string;
//   email: string;
//   image: string;
// };

// const customersData: Customer[] = Array.from({ length: 9 }).map((_, i) => ({
//   id: `${i + 1}`,
//   name: "Rakesh Yadav",
//   ftId: "FT ID: FTC0003",
//   phone: "7897578909",
//   address: "Flat no. 3, Sky Building, Pune",
//   email: "customernew123@gmail.com",
//   image: "/images/user.jpg", 
// }));

// export default function CustomerList() {
//   const [search, setSearch] = useState("");
//   const router = useRouter();

//   const filteredCustomers = customersData.filter((c) =>
//     c.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-6">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
//         <div>
//           <h1 className="text-xl font-semibold text-gray-900">
//             Customer List
//           </h1>
//           <p className="text-sm text-gray-500">
//             Customer - {filteredCustomers.length}
//           </p>
//         </div>

//         <div className="flex items-center gap-3 w-full md:w-auto">
//           {/* Search */}
//           <div className="flex items-center border rounded-lg px-3 py-2 w-full md:w-72 bg-white">
//             <Search className="w-4 h-4 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="ml-2 w-full outline-none text-sm"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           {/* Add Button */}
//          <button
//   onClick={() => router.push("/Account/customer/add")}
//   className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
// >
//   <UserPlus className="w-4 h-4" />
//   Add New Customer
// </button>

//         </div>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredCustomers.map((customer) => (
//           <div
//             key={customer.id}
//             className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition"
//           >
//             {/* Top Row */}
//             <div className="flex items-start justify-between">
//               <div className="flex items-center gap-3">
//                 <img
//                   src={customer.image}
//                   alt={customer.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <h3 className="text-sm font-semibold text-gray-900">
//                     {customer.name}
//                   </h3>
//                   <p className="text-xs text-gray-500">
//                     {customer.ftId}
//                   </p>
//                   <p className="text-xs text-gray-400">
//                     Customer description
//                   </p>
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="flex gap-2">
//                 <button className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100">
//                   <Phone className="w-4 h-4 text-blue-600" />
//                 </button>
//                 <button className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100">
//                   <Mail className="w-4 h-4 text-blue-600" />
//                 </button>
//               </div>
//             </div>

//             {/* Info */}
//             <div className="mt-3 space-y-2">
//               <div className="flex items-center text-xs text-gray-600">
//                 <Phone className="w-3.5 h-3.5 mr-2 text-gray-400" />
//                 {customer.phone}
//               </div>

//               <div className="flex items-center text-xs text-gray-600">
//                 <Search className="w-3.5 h-3.5 mr-2 text-gray-400" />
//                 {customer.address}
//               </div>

//               <div className="flex items-center text-xs text-gray-600">
//                 <Mail className="w-3.5 h-3.5 mr-2 text-gray-400" />
//                 {customer.email}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import { Search, UserPlus, Phone, Mail } from "lucide-react";

// type Props = {
//   onAdd: () => void;
// };

// type Customer = {
//   id: string;
//   name: string;
//   ftId: string;
//   phone: string;
//   address: string;
//   email: string;
//   image: string;
// };

// const customersData: Customer[] = Array.from({ length: 9 }).map((_, i) => ({
//   id: `${i + 1}`,
//   name: "Rakesh Yadav",
//   ftId: "FT ID: FTC0003",
//   phone: "7897578909",
//   address: "Flat no. 3, Sky Building, Pune",
//   email: "customernew123@gmail.com",
//   image: "/images/user.jpg",
// }));

// export default function CustomerList({ onAdd }: Props) {
//   const [search, setSearch] = useState("");

//   const filteredCustomers = customersData.filter((c) =>
//     c.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-6">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
//         <div>
//           <h1 className="text-xl font-semibold text-gray-900">
//             Customer List
//           </h1>
//           <p className="text-sm text-gray-500">
//             Customer - {filteredCustomers.length}
//           </p>
//         </div>

//         <div className="flex items-center gap-3 w-full md:w-auto">
//           {/* Search */}
//           <div className="flex items-center border  rounded-lg px-3 py-2 w-full md:w-72 bg-white">
//             <Search className="w-4 h-4 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="ml-2 w-full outline-none text-sm"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           {/* Add Button */}
//           <button
//             onClick={onAdd}
//             className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
//           >
//             <UserPlus className="w-4 h-4" />
//             Add New Customer
//           </button>
//         </div>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredCustomers.map((customer) => (
//           <div
//             key={customer.id}
//             className="bg-white border border-[#CCCCCC] rounded-xl p-4 shadow-sm hover:shadow-md transition"
//           >
//             <div className="flex items-start justify-between">
//               <div className="flex items-center gap-3">
//                 <img
//                   src={customer.image}
//                   alt={customer.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <h3 className="text-sm font-semibold text-gray-900">
//                     {customer.name}
//                   </h3>
//                   <p className="text-xs text-gray-500">
//                     {customer.ftId}
//                   </p>
//                   <p className="text-xs text-gray-400">
//                     Customer description
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-2">
//                 <button className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100">
//                   <Phone className="w-4 h-4 text-blue-600" />
//                 </button>
//                 <button className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100">
//                   <Mail className="w-4 h-4 text-blue-600" />
//                 </button>
//               </div>
//             </div>

//             <div className="mt-3 space-y-2">
//                 <div className="flex gap-5">
//               <div className="flex items-center text-xs text-gray-600">
//                 <Phone className="w-3.5 h-3.5 mr-2 text-gray-400" />
//                 {customer.phone}
//               </div>

//               <div className="flex items-center text-xs text-gray-600">
//                 <Search className="w-3.5 h-3.5 mr-2 text-gray-400" />
//                 {customer.address}
//               </div>
//               </div>

//               <div className="flex items-center text-xs text-gray-600">
//                 <Mail className="w-3.5 h-3.5 mr-2 text-gray-400" />
//                 {customer.email}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import { Search, UserPlus, Phone, Mail,MapIcon } from "lucide-react";
import { useServiceCustomers } from "@/src/context/ServiceCustomerContext";
import { RiWhatsappFill } from "react-icons/ri";

type Props = {
  onAdd: () => void;
};

export default function CustomerList({ onAdd }: Props) {
  const { customers, loading, error, fetchCustomers } =
    useServiceCustomers();

  const [search, setSearch] = useState("");

  const filteredCustomers = customers.filter((c) =>
    c.fullName.toLowerCase().includes(search.toLowerCase())
  );

  const handleCall = (phone: string) => {
  window.location.href = `tel:${phone}`;
};

const handleWhatsApp = (phone: string) => {
  window.open(`https://wa.me/91${phone}`, "_blank");
};

// const handleEmail = (email: string) => {
//   window.location.href = `mailto:${email}`;
// };

  if (loading) return <p className="p-6">Loading customers...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Customer List
          </h1>
          <p className="text-sm text-gray-500">
            Customer - {filteredCustomers.length}
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Search */}
          <div className="flex items-center border rounded-lg px-3 py-2 w-full md:w-72 bg-white">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search customer"
              className="ml-2 w-full outline-none text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Add Button */}
          <button
            onClick={onAdd}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            <UserPlus className="w-4 h-4" />
            Add New Customer
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCustomers.map((customer) => (
          <div
            key={customer._id}
            className="bg-white border border-[#CCCCCC] rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex">
                <div>
                  <img
                  src="/image/profile1.jpg" className="w-10 h-10 rounded-full object-cover" 
                     alt="customer profile"/>
                </div>
                <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {customer.fullName}
                </h3>
                <p className="text-xs text-gray-500">
                  FT ID: {customer.customerId}
                </p>
                <p className="text-xs text-gray-400">
                  {customer.description}
                </p>
              </div>
              </div>
              

              <div className="flex gap-4">
                  {/* Call */}
  <button
    onClick={() => handleCall(customer.phone)}
    className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100"
  >
    <Phone className="w-4 h-4 text-blue-600" />
  </button>

  {/* WhatsApp */}
  <button
    onClick={() => handleWhatsApp(customer.phone)}
    className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center hover:bg-green-100"
  >
    <RiWhatsappFill className="w-4 h-4 text-green-600" />
  </button>

              </div>
            </div>

            <div className="mt-3 space-y-1 text-xs text-gray-600">
              <div className="flex items-center gap-4">
                <div className="flex gap-2 items-center">
                 <Phone className="w-3 h-3 text-blue-600" /> {customer.phone}
                </div>
                <div className="flex gap-2 items-center">
                  <MapIcon className="w-3 h-3 text-blue-600" /><p>{customer.address}</p>
                </div>
              </div>
               <div className="flex gap-2 items-center">
                              <Mail className="w-3 h-3 text-blue-600" /><p>{customer.email}</p>

                </div>  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
