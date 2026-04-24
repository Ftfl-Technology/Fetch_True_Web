// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { FaStar,FaRegCalendarAlt,FaCrown  } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdOutlineDownload } from "react-icons/md";
// import { RiFileList3Line } from "react-icons/ri";
// import { LuGraduationCap,LuCircleCheckBig  } from "react-icons/lu";
// import { CiLaptop,CiSettings  } from "react-icons/ci";
// import { PiMegaphoneLight } from "react-icons/pi";


// import {
//   FiTarget,
//   FiEye,
//   FiZap,
//   FiStar,
//   FiSmartphone,
//   FiLayers,
// } from "react-icons/fi";

// import {
//   Briefcase,
//   TrendingUp,
//   GraduationCap,
//   Megaphone,
//   Monitor,
//   Headphones,
// } from "lucide-react";
// import MoreInformation from "@/src/components/Section/MoreInformationSection";
// import TermsConditions from "@/src/components/Section/TermsandCondition";
// import FAQs from "@/src/components/Section/FAQ";

// const images = [
//   "/image/thumbnailMain.jpg",
//   "/image/thumbnail1.jpg",
//   "/image/thumbnail2.jpg",
//   "/image/thumbnail3.jpg",
//   "/image/thumbnail4.jpg",
// ];

// const benefits = [
//   { icon: <FiTarget />, label: "Strong Brand Identity" },
//   { icon: <FiEye />, label: "Professional & Trustworthy Look" },
//   { icon: <FiZap />, label: "Quick Recognition" },
//   { icon: <FiStar />, label: "Stand Out from Competitors" },
//   { icon: <FiSmartphone />, label: "Works on All Platforms" },
//   { icon: <FiLayers />, label: "Consistent Branding" },
// ];
// const advantages = [
//   {
//     title: "Proven Business Model",
//     desc: "10+ years of market tested strategies with guaranteed results",
//     icon: Briefcase,
//   },
//   {
//     title: "High Return Investment",
//     desc: "Average ROI of 25–30% within 18–24 months",
//     icon: TrendingUp,
//   },
//   {
//     title: "Complete Training Program",
//     desc: "3-week comprehensive training for you and your team",
//     icon: GraduationCap,
//   },
//   {
//     title: "Marketing Support",
//     desc: "Digital campaigns, brochures, and lead generation included",
//     icon: Megaphone,
//   },
//   {
//     title: "Technology Platform",
//     desc: "CRM, mobile app, and management software provided",
//     icon: Monitor,
//   },
//   {
//     title: "Ongoing Support",
//     desc: "24/7 helpdesk and monthly business review sessions",
//     icon: Headphones,
//   },
// ];

// export default function DetailsAllPage() {
  
//   const [activeImage, setActiveImage] = useState(images[0]);

//   return (
//     <>
//       {/* PAGE WRAPPER */}
//       <div className="bg-[#F4F4F4]">
//         <div className="bg-white px-3 sm:px-5 py-6">

//           {/* HERO */}
//           <section className="w-full flex justify-center my-6 px-2">
//             <div className="w-full max-w-[1400px] flex flex-col items-center gap-5">

//               <div className="relative w-full h-[260px] sm:h-[420px] lg:h-[710px] rounded overflow-hidden shadow">
//                 <Image
//                   src={activeImage}
//                   alt="Service Details"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>

//               {/* THUMBNAILS */}
//               <div className="lg:absolute lg:top-135  w-full lg:w-[850px] bg-white rounded p-2 flex gap-2 overflow-x-auto no-scrollbar">
//                 {images.map((img, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveImage(img)}
//                     className={`relative min-w-[160px] h-[120px] rounded overflow-hidden border ${
//                       activeImage === img
//                         ? "border-blue-600"
//                         : "border-transparent hover:border-gray-300"
//                     }`}
//                   >
//                     <Image src={img} alt="" fill className="object-cover" />
//                   </button>
//                 ))}
//               </div>

//             </div>
//           </section>

//           {/* TITLE + RATING */}
//           <section className="w-full flex justify-center px-2">
//             <div className="w-full max-w-[1400px] flex flex-col gap-6">

//               <div className="flex flex-col lg:flex-row justify-between gap-4">
//                 <div>
//                   <h1 className="text-[32px] sm:text-[40px] font-semibold">
//                     Property Buying & Selling
//                   </h1>
//                   <div className="flex items-center gap-2 mt-1">
//                     <FaLocationDot />
//                     <p className="text-[20px] sm:text-[24px]">
//                       Operating in 20+ Cities India
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <FaStar color="#F5C518" size={24} />
//                   <p className="text-[20px] sm:text-[24px]">
//                     4.8 (2,400+ reviews)
//                   </p>
//                 </div>
//               </div>

//               {/* INVESTMENT + EARNING */}
//               <div className="flex flex-col lg:flex-row gap-6">
//                 <div className="w-full lg:w-1/2 flex flex-col gap-2">
//                   <p className="text-[28px] text-[#868686]">Investment range</p>
//                   <p className="text-[32px] font-medium">₹10-20</p>
//                   <p className="text-[20px] text-[#868686]">Lakhs</p>
//                   <a className="text-[#6E26CB] text-[22px] cursor-pointer">
//                     View Breakup
//                   </a>
//                   <div className="flex items-center gap-2 mt-2 text-[22px] text-[#606060]">
//                     <RiFileList3Line size={36} /> EMI Options
//                   </div>
//                 </div>

//                 <div className="w-full lg:w-1/2 flex flex-col gap-2">
//                   <p className="text-[28px] text-[#868686]">Earning Potential</p>
//                   <p className="text-[32px] font-medium">₹25-30</p>
//                   <p className="text-[20px] text-[#868686]">Lakhs</p>
//                   <a className="text-[#6E26CB] text-[22px] cursor-pointer">
//                     View Breakup
//                   </a>

//                   <button className="mt-3 flex items-center justify-center gap-2 border border-[#C7B6FF] text-[#6E26CB] py-3 rounded">
//                     <MdOutlineDownload /> Free Brochure
//                   </button>
//                 </div>
//               </div>

//               {/* COMMISSION */}
//               <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border border-[#6E26CB] bg-[#F4F4F4] rounded px-6 py-4 mt-4">
//                 <div>
//                   <p className="text-[28px] font-semibold">
//                     Franchise Commission
//                   </p>
//                   <p className="text-[32px] text-[#2CB140]">
//                     Earn Up to 7%
//                   </p>
//                 </div>
//                 <span className="cursor-pointer">T&C &gt;</span>
//               </div>

//             </div>
//           </section>

//           {/* STATS */}
//           <section className="w-full flex justify-center mt-8 px-2">
//             <div className="flex flex-wrap gap-5 justify-center w-full max-w-[1400px]">
//               {[
//                 { value: "500+", label: "Active partners", color: "#2563EB", bg: "#EEF4FF" },
//                 { value: "20+", label: "Cities", color: "#16A34A", bg: "#ECFDF3" },
//                 { value: "10+", label: "Years", color: "#7C3AED", bg: "#F5F3FF" },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="w-full sm:w-[404px] h-[141px] rounded shadow flex flex-col justify-center items-center gap-2"
//                   style={{ background: item.bg }}
//                 >
//                   <p className="text-[28px] font-semibold" style={{ color: item.color }}>
//                     {item.value}
//                   </p>
//                   <p className="text-gray-600">{item.label}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//         </div>

//         {/* BENEFITS */}
//           <section className="w-full flex justify-center mt-8 ps-4">
//             <div className="w-full max-w-[1400px] flex flex-col gap-5">
//               <h2 className="text-[36px] text-[#6E26CB] font-medium">
//                 Benefits
//               </h2>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
//                 {benefits.map((item, index) => (
//                   <div key={index} className="flex items-center gap-3">
//                     <div className="text-[#7C3AED] text-[22px]">
//                       {item.icon}
//                     </div>
//                     <p className="text-[22px] text-[#606060] font-medium">
//                       {item.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* ABOUT */}
//           <section className="max-w-[1400px] mx-auto px-2 mt-8">
//             <h2 className="text-[#34716C] text-[32px] font-medium mb-3">
//               About Property Buying & Selling
//             </h2>
//             <p className="text-[#868686] text-[22px]">
//               India's premier property franchise network with 10+ years of excellence in real estate services. We specialize in residential and commercial property transactions, investment advisory, and wealth creation through real estate.
//             </p>

//             <div
//   className="
//     grid
//     grid-cols-1
//     sm:grid-cols-2
//     lg:grid-cols-4
//     gap-x-16
//     gap-y-8
//     py-10
//   "
// >
//   <div className="flex flex-col gap-1">
//     <div className="flex items-center gap-2">
//       <FaRegCalendarAlt size={24} color="#008B8B" />
//       <p className="text-[24px] text-[#232323]">
//         Established Date
//       </p>
//     </div>
//     <p className="text-[#BEBEBE] text-[24px]">
//       17 July 2021
//     </p>
//   </div>

//   <div className="flex flex-col gap-1">
//     <div className="flex items-center gap-2">
//       <FaRegCalendarAlt size={24} color="#008B8B" />
//       <p className="text-[24px] text-[#232323]">
//         First franchise outlet
//       </p>
//     </div>
//     <p className="text-[#BEBEBE] text-[24px]">
//       12 August 2024
//     </p>
//   </div>

//   <div className="flex flex-col gap-1">
//     <div className="flex items-center gap-2">
//       <FaRegCalendarAlt size={24} color="#008B8B" />
//       <p className="text-[24px] text-[#232323]">
//         Profit margin
//       </p>
//     </div>
//     <p className="text-[#BEBEBE] text-[24px]">
//       30%
//     </p>
//   </div>

//   <div className="flex flex-col gap-1">
//     <div className="flex items-center gap-2">
//       <FaRegCalendarAlt size={24} color="#008B8B" />
//       <p className="text-[24px] text-[#232323]">
//         Total outlet in India
//       </p>
//     </div>
//     <p className="text-[#BEBEBE] text-[24px]">
//       50+
//     </p>
//   </div>
//             </div>

//           </section>

//         <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-8">
//   {/* HEADING */}
//   <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[#232323] mb-2">
//     Franchise Operating Models
//   </h2>

//   <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#606060] mb-8 max-w-[900px]">
//     Understanding different franchise structures and how ownership,
//     operations, and profits are distributed:
//   </p>

//   {/* CARD */}
//   <section className="bg-white  rounded-[12px] p-5 sm:p-6 lg:p-8">
//     {/* TOP ROW */}
//     <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
//       {/* LEFT */}
//       <div className="flex items-start gap-4">
//         <div className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-[6px] bg-[#6E26CB] flex items-center justify-center">
//           <img
//             src="/image/Vector (4).png"
//             alt="Model Icon"
//             className="w-[18px] h-[18px]"
//           />
//         </div>

//         <div>
//           <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#6E26CB]">
//             Franchise Owned Franchise Operated
//           </h3>
//           <p className="text-[15px] sm:text-[17px] lg:text-[18px] text-[#606060] max-w-[520px]">
//             Traditional franchising where franchisee owns and operates the business
//           </p>
//         </div>
//       </div>

//       {/* RIGHT TAG */}
//       <div className="w-full lg:w-auto flex justify-start lg:justify-center">
//         <span className="w-full sm:w-[172px] h-[56px] sm:h-[72px] border border-[#2164F4] rounded-[9px] bg-[#2164F41A] font-semibold text-[18px] sm:text-[20px] flex items-center justify-center">
//           FOFO
//         </span>
//       </div>
//     </div>

//     {/* DETAILS GRID */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
//       {[
//         ["Investment", "High - Franchisee funded"],
//         ["Operations", "Franchisee controlled"],
//         ["Staff", "Franchisee owned"],
//         ["Rent", "Franchisee owned"],
//         ["Accounts", "Franchisee maintained"],
//         ["Compliance", "Franchisee responsibility"],
//       ].map(([title, desc], index) => (
//         <div key={index} className="flex flex-col items-center text-center gap-2">
//           <span className="w-[36px] h-[36px] border border-[#6E26CB] rounded-full flex items-center justify-center">
//             <img src="/image/CurrencyDollarSimple.png" className="w-[22px]" />
//           </span>
//           <p className="text-[18px] sm:text-[20px] font-medium text-[#868686]">
//             {title}
//           </p>
//           <p className="text-[18px] sm:text-[20px] font-medium text-[#232323]">
//             {desc}
//           </p>
//         </div>
//       ))}
//     </div>

//      <div>
//       <p className="text-[#2164F4] flex gap-2 items-center pt-5"><FaCrown />Example:<span className="text-[#868686]"> McDonald's, Subway</span> </p>
//      </div>
//   </section>
// </section>

// <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-8">
//   {/* HEADING */}
//   <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[#1F6D68] mb-10">
//     Why Choose This Franchise?
//   </h2>

//   {/* GRID */}
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
//     {/* CARD 1 */}
//     <div className="bg-white rounded-[10px] p-6 flex items-start gap-6 shadow-sm ">
//       <img
//         src="/image/why1.png"
//         alt="All in one"
//         className="w-[52px] h-[52px]"
//       />
//       <div>
//         <h3 className="text-[26px] font-semibold text-[#606060] mb-1">
//           All-in-one business
//         </h3>
//         <p className="text-[18px] text-[#606060]">
//           All-in-one business & franchise platform
//         </p>
//       </div>
//     </div>

//     {/* CARD 2 */}
//     <div className="bg-white rounded-[10px] p-6 flex items-start gap-6 shadow-sm ">
//       <img
//         src="/image/why2.png"
//         alt="Smart tools"
//         className="w-[52px] h-[52px]"
//       />
//       <div>
//         <h3 className="text-[26px] font-semibold text-[#606060] mb-1">
//           Smart tools
//         </h3>
//         <p className="text-[18px] text-[#606060]">
//           Smart tools for marketing & lead growth
//         </p>
//       </div>
//     </div>

//     {/* CARD 3 */}
//     <div className="bg-white rounded-[10px] p-6 flex items-start gap-6 shadow-sm ">
//       <img
//         src="/image/why3.png"
//         alt="Digital marketing"
//         className="w-[52px] h-[52px]"
//       />
//       <div>
//         <h3 className="text-[26px] font-semibold text-[#606060] mb-1">
//           Digital marketing
//         </h3>
//         <p className="text-[18px] text-[#606060]">
//           Digital marketing support and lead generation
//         </p>
//       </div>
//     </div>

//     {/* CARD 4 */}
//     <div className="bg-white rounded-[10px] p-6 flex items-start gap-6 shadow-sm ">
//       <img
//         src="/image/why4.png"
//         alt="Right protection"
//         className="w-[52px] h-[52px]"
//       />
//       <div>
//         <h3 className="text-[26px] font-semibold text-[#606060] mb-1">
//           Right Protection
//         </h3>
//         <p className="text-[18px] text-[#606060]">
//           Exclusive territory rights and protection
//         </p>
//       </div>
//     </div>

//   </div>
// </section>

// <section className="w-full  py-8">
//   <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

//     {/* HEADING */}
//     <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[#6E26CB] mb-2">
//       Business Fundamental
//     </h2>
//     <p className="text-[18px] text-[#8A8A8A] mb-10">
//       Complete overview of franchise requirements and benefits.
//     </p>

//     {/* GRID */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//       {/* CARD */}
//       {[
//         { title: "Area Required", value: "500-1000 sq.ft." },
//         { title: "Franchise Fees", value: "₹10-20 Lac" },
//         { title: "Franchise Type", value: "500-1000 sq.ft." },
//         { title: "Avg. Monthly Business", value: "₹2-18 Lac" },
//         { title: "Staff & Management", value: "Company Driven" },
//         { title: "360° Marketing", value: "Complete Support" },
//         { title: "Return Of Investment (ROI)", value: "25-30%" },
//         { title: "Royalty %", value: "8% Monthly" },
//         { title: "Gross Margin", value: "40-45%" },
//         { title: "Radius Area", value: "2-3 km" },
//         { title: "Execution Time", value: "30-45 Days" },
//       ].map((item, index) => (
//         <div
//           key={index}
//           className="bg-white rounded-[8px]  p-4 flex justify-between items-center shadow-sm"
//         >
//           <div>
//             <p className="text-[14px] text-[#8A8A8A] mb-1">
//               {item.title}
//             </p>
//             <p className="text-[18px] font-semibold text-[#232323]">
//               {item.value}
//             </p>
//           </div>

//           {/* CHECK ICON */}
//           <span className="w-[18px] h-[18px] flex items-center justify-center border border-[#22C55E] rounded-full">
//             <svg
//               width="10"
//               height="8"
//               viewBox="0 0 10 8"
//               fill="none"
//             >
//               <path
//                 d="M1 4L3.5 6.5L9 1"
//                 stroke="#22C55E"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </span>
//         </div>
//       ))}

//     </div>
//   </div>
// </section>

// <section className="w-full py-10">
//   <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

//     {/* HEADING */}
//     <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[#6E26CB] mb-10">
//       Franchise Model
//     </h2>

//     {/* GRID */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//       {/* CARD */}
//       {[
//         {
//           title: "Small",
//           price: "₹10,00,000",
//           fee: "₹5,00,000",
//         },
//         {
//           title: "Medium",
//           price: "₹20,00,000",
//           fee: "₹10,00,000",
//         },
//         {
//           title: "Large",
//           price: "₹30,00,000",
//           fee: "₹5,00,000",
//         },
//       ].map((item, index) => (
//         <div
//           key={index}
//           className="  p-6 flex flex-col justify-between"
//           style={{
//             borderRadius:"14px",
//     border: "2px solid",
//     borderImage: "linear-gradient(to bottom, #6E26CB , #E0F3F1) 1",
//   }}
//         >
//           {/* TOP */}
//           <div>
//             <h3 className="text-[22px] font-semibold text-[#6E26CB] mb-1">
//               {item.title}
//             </h3>
//             <p className="text-[14px] text-[#8A8A8A] mb-3">
//               Agreement: 20 Year
//             </p>

//             <div className="flex justify-between items-center mb-4">
//               <div>
//                 <p className="text-[22px] font-semibold text-[#6E26CB]">
//                   {item.price}
//                 </p>
//                 <p className="text-[14px] text-[#8A8A8A]">
//                   +18% GST
//                 </p>
//               </div>

//               <button className="bg-[#6E26CB] text-white text-[14px] px-5 py-2 rounded-[6px] hover:opacity-90">
//                 Enquiry Now
//               </button>
//             </div>

//             <hr className="my-4" />

//             {/* DETAILS */}
//             <div className="flex flex-col gap-3 text-[16px]">
//               <div>
//                 <p className="text-[#8A8A8A]">Franchise Fees</p>
//                 <p className="font-semibold">{item.fee}</p>
//               </div>

//               <div>
//                 <p className="text-[#8A8A8A]">Area Required</p>
//                 <p className="font-semibold">₹500-1000 sq.ft.</p>
//               </div>

//               <div>
//                 <p className="text-[#8A8A8A]">360 Marketing</p>
//                 <p className="font-semibold">Complete Support</p>
//               </div>

//               <div>
//                 <p className="text-[#8A8A8A]">Return Of Investment(ROI)</p>
//                 <p className="font-semibold">25-30%</p>
//               </div>

//               <div>
//                 <p className="text-[#8A8A8A]">Royalty %</p>
//                 <p className="font-semibold">8% Monthly</p>
//               </div>

//               <div>
//                 <p className="text-[#8A8A8A]">Gross Margin</p>
//                 <p className="font-semibold">40-45%</p>
//               </div>

//               <div>
//                 <p className="text-[#8A8A8A]">Radius Area</p>
//                 <p className="font-semibold">2-3 km</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//  <section className="w-full py-8">
//   <div className="max-w-[1400px] mx-auto px-4">
//     {/* Section Title */}
//     <h2 className="text-[28px] font-semibold text-[#34716C] mb-10">
//       Key Advantages
//     </h2>

//     {/* Cards Grid */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {advantages.map((item, idx) => {
//         const Icon = item.icon;

//         return (
//           <div
//             key={idx}
//             className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
//           >
//             {/* LEFT Gradient Border (Rounded Only on Left) */}
//             <div
//               className="
//                 absolute left-0 top-0
//                 h-full w-2
//                 bg-gradient-to-b from-[#6E26CB] via-[#6E26CB] to-[#6E26CB]
//                 rounded-l-xl
//               "
//             />

//             {/* Content */}
//             <div className="flex gap-4 items-center pl-4">
//               {/* Icon */}
//               <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#DEF5F3]">
//                 <Icon className="text-[#6E26CB]" size={24} />
//               </div>

//               {/* Text */}
//               <div>
//                 <h3 className="text-[20px] font-semibold text-[#000000]">
//                   {item.title}
//                 </h3>
//                 <p className="text-[15px] text-[#868686] mt-1 leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </div>
// </section>

// <section className="w-full py-10">
//   <div className="max-w-[1400px] mx-auto px-4">
//     {/* Title */}
//     <h2 className="text-[26px] font-semibold text-[#34716C] mb-8">
//       Complete Support System
//     </h2>

//     {/* Container */}
//     <div className="bg-white rounded-xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      
//       {/* Training & Development */}
//       <div>
//         <div className="flex items-center gap-1 mb-3">
//           <div className="w-8 h-8 flex items-center justify-center rounded-md text-[#2164F4]">
//             <LuGraduationCap size={24}/>
//           </div>
//           <h3 className="font-semibold text-[#000000] text-[20px]">
//             Training & Development
//           </h3>
//         </div>
//         <ul className="grid grid-cols-2 gap-y-2 text-[16px] text-[#6B7280] list-disc pl-5">
//           <li>3-week intensive training</li>
//           <li>Product knowledge sessions</li>
//           <li>Sales techniques</li>
//           <li>Operations management</li>
//         </ul>
//       </div>

//       {/* Technology Platform */}
//       <div>
//         <div className="flex items-center gap-1 mb-3">
//           <div className="w-8 h-8 flex items-center justify-center rounded-md text-[#9747FF]">
//             <CiLaptop size={24}/>
//           </div>
//           <h3 className="font-semibold text-[#111827] text-[20px]">
//             Technology Platform
//           </h3>
//         </div>
//         <ul className="grid grid-cols-2 gap-y-2 text-[16px] text-[#6B7280] list-disc pl-5">
//           <li>Customer management</li>
//           <li>Mobile application</li>
//           <li>Analytics dashboard</li>
//           <li>Automated reporting</li>
//         </ul>
//       </div>

//       {/* Marketing Support */}
//       <div>
//         <div className="flex items-center gap-1 mb-3">
//           <div className="w-8 h-8 flex items-center justify-center rounded-md text-[#46BB58]">
//             <PiMegaphoneLight size={24}/>
//           </div>
//           <h3 className="font-semibold text-[#111827] text-[20px]">
//             Marketing Support
//           </h3>
//         </div>
//         <ul className="grid grid-cols-2 gap-y-2 text-[16px] text-[#6B7280] list-disc pl-5">
//           <li>Digital marketing campaigns</li>
//           <li>Print marketing materials</li>
//           <li>Lead generation system</li>
//           <li>Social media templates</li>
//         </ul>
//       </div>

//       {/* Operational Support */}
//       <div>
//         <div className="flex items-center gap-1 mb-3">
//           <div className="w-8 h-8 flex items-center justify-center rounded-md text-[#FF9845]">
//             <CiSettings size={24} />
//           </div>
//           <h3 className="font-semibold text-[#111827] text-[20px]">
//             Operational Support
//           </h3>
//         </div>
//         <ul className="grid grid-cols-2 gap-y-2 text-[16px] text-[#6B7280] list-disc pl-5">
//           <li>Staff recruitment guidance</li>
//           <li>Inventory management</li>
//           <li>Quality control systems</li>
//           <li>Performance monitoring</li>
//         </ul>
//       </div>

//     </div>
//   </div>
// </section>

// <section className="w-full py-6 sm:py-8 mb-8 sm:mb-10">
//   <div className="max-w-[1400px] mx-auto px-4">
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
      
//       {/* Agreement Details */}
//       <div className="h-full">
//         <h2 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-[#34716C] mb-3 sm:mb-4">
//           Agreement Details
//         </h2>
//         <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 h-full">
//           <ul className="space-y-3 sm:space-y-4 text-[14px] sm:text-[15px]">
//             {[
//               ["Agreement Start Date", "01-Apr-2025"],
//               ["Agreement End Date", "31-Mar-2030 (5 Years)"],
//               ["Renewal Terms", "Renewable every 5 years with revised fee"],
//               ["Security Deposit", "₹2,00,000 (Refundable)"],
//               ["Franchise Fee", "₹50,000 (One-time)"],
//               ["Royalty", "10% of monthly revenue"],
//               ["Termination Notice", "60 Days prior notice required"],
//             ].map(([label, value], index) => (
//               <li key={index} className="flex gap-3">
//                 <span>•</span>
//                 <span className="font-semibold whitespace-nowrap">{label}</span>
//                 <span className="mx-1 sm:mx-2">:</span>
//                 <span className="text-[#6B7280]">{value}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Training Details */}
//       <div className="h-full">
//         <h2 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-[#34716C] mb-3 sm:mb-4">
//           Training Details
//         </h2>
//         <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 h-full">
//           <ul className="space-y-3 sm:space-y-4 text-[14px] sm:text-[15px]">
//             {[
//               ["Initial Training", "7 days onsite / online"],
//               ["Ongoing Training", "Monthly webinars and workshops"],
//               ["Training Location", "Head Office / Online"],
//               ["Training Material", "Manuals, Videos & Marketing Kit"],
//               ["Support", "Dedicated franchise manager"],
//             ].map(([label, value], index) => (
//               <li key={index} className="flex gap-3">
//                 <span>•</span>
//                 <span className="font-semibold whitespace-nowrap">{label}</span>
//                 <span className="mx-1 sm:mx-2">:</span>
//                 <span className="text-[#6B7280]">{value}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//     </div>
//   </div>
// </section>


// <section className="w-full py-6 sm:py-8">
//   <div className="max-w-[1400px] mx-auto px-4">
    
//     {/* Section Title */}
//     <h2 className="text-[22px] sm:text-[24px] md:text-[28px] font-semibold text-[#2F6F6A] mb-4 sm:mb-6">
//       We Required
//     </h2>

//     {/* Card */}
//     <div className="bg-white rounded-[12px] shadow-sm px-5 sm:px-6 md:px-8 py-5 sm:py-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 sm:gap-y-5 gap-x-8 md:gap-x-12">

//         {/* Left Column */}
//         <ul className="flex flex-col gap-3 sm:gap-4">
//           {[
//             "Brand Name & Tagline",
//             "About Business",
//             "Target Audience",
//             "Color & Style Preferences",
//           ].map((item, index) => (
//             <li
//               key={index}
//               className="flex items-start gap-3 text-[16px] sm:text-[18px] md:text-[20px] text-[#606060]"
//             >
//               <span className="text-[#22C55E] text-lg sm:text-xl mt-[2px]">
//                 <LuCircleCheckBig />
//               </span>
//               {item}
//             </li>
//           ))}
//         </ul>

//         {/* Right Column */}
//         <ul className="flex flex-col gap-3 sm:gap-4">
//           {[
//             "Reference Logos",
//             "Old Logo (if any)",
//             "Usage Needs (where logo will be used)",
//           ].map((item, index) => (
//             <li
//               key={index}
//               className="flex items-start gap-3 text-[16px] sm:text-[18px] md:text-[20px] text-[#606060]"
//             >
//               <span className="text-[#22C55E] text-lg sm:text-xl mt-[2px]">
//                 <LuCircleCheckBig />
//               </span>
//               {item}
//             </li>
//           ))}
//         </ul>

//       </div>
//     </div>

//   </div>
// </section>

// {/* compare and Choose */}
// <section className="w-full py-10 md:py-12">
//   <div className="max-w-[1347px] mx-auto px-4">

//     {/* Section Title */}
//     <h2 className="text-[22px] sm:text-[24px] md:text-[28px] font-semibold text-[#2F6F6A] mb-6 md:mb-8">
//       Compare & Choose
//     </h2>

//     {/* Table Wrapper */}
//     <div className="overflow-x-auto">
//       <table className="w-full min-w-[760px] border-collapse text-left">
        
//         {/* Table Head */}
//         <thead>
//           <tr className="border-b border-[#E5E7EB]">
//             <th className="py-3 sm:py-4 text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#606060]">
//               Franchise’s
//             </th>
//             <th className="py-3 sm:py-4 text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#606060]">
//               Property Buying & Selling
//             </th>
//             <th className="py-3 sm:py-4 text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#606060]">
//               Property Angel
//             </th>
//             <th className="py-3 sm:py-4 text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#606060]">
//               ReMAX India
//             </th>
//           </tr>
//         </thead>

//         {/* Table Body */}
//         <tbody className="text-[16px] sm:text-[18px] md:text-[20px] text-[#8A8A8A]">

//           {[
//             {
//               label: "Investment Range",
//               values: ["₹ 10-20 L", "₹ 20-22 L", "₹ 10-15 L"],
//             },
//             {
//               label: "Monthly Income",
//               values: ["₹ 1.5 - 3 L", "₹ 2 - 4 L", "₹ 2 - 3 L"],
//             },
//             {
//               label: "ROI Period",
//               values: ["12-18 M", "18-24 M", "12-24 M"],
//             },
//             {
//               label: "Target Area",
//               values: ["Tier 2/3", "Tier 1", "Metro"],
//             },
//           ].map((row, index) => (
//             <tr key={index}>
//               <td className="py-3 sm:py-4 font-medium text-[#606060]">
//                 {row.label}
//               </td>
//               {row.values.map((value, i) => (
//                 <td key={i} className="py-3 sm:py-4 text-[#868686]">
//                   {value}
//                 </td>
//               ))}
//             </tr>
//           ))}

//         </tbody>
//       </table>
//     </div>

//   </div>
// </section>



// <section className="w-full py-10 md:py-12">
//   <div className="max-w-[1347px] mx-auto px-4">
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

//       {/* LEFT – Company Card */}
//       <div className="bg-[#6E26CB] rounded-[16px] p-6 sm:p-10 lg:p-20 text-white h-full">
        
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
//           <img
//             src="/image/reviewImage.jpg"
//             alt="Company"
//             className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
//           />
//           <div>
//             <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-medium">
//               Elite Estates Pvt. Ltd.
//             </h3>
//             <p className="text-[16px] sm:text-[18px] md:text-[20px] opacity-80 font-semibold">
//               Building Trust, Creating Value
//             </p>
//           </div>
//         </div>

//         {/* Info Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 font-semibold">
//           {[
//             { label: "Business Name", value: "Luxurious Property" },
//             { label: "Company Type", value: "Private Limited" },
//             { label: "Owner Name", value: "Mr. Rahul Deshmukh" },
//             { label: "Founder Name", value: "Ms. Priya Kulkarni" },
//           ].map((item, index) => (
//             <div key={index}>
//               <p className="text-[14px] sm:text-[16px] mb-1 text-[#D9D9D9]">
//                 {item.label}
//               </p>
//               <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#F4F4F4]">
//                 {item.value}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* RIGHT – Ratings */}
//       <div>
//         <h2 className="text-[22px] sm:text-[24px] md:text-[28px] font-semibold text-[#34716C] mb-2">
//           Ratings & Reviews
//         </h2>
//         <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[#868686] mb-6">
//           Complete overview of franchise requirements and benefits.
//         </p>

//         {/* Rating Summary */}
//         <div className="flex flex-col sm:flex-row gap-6 mb-6">
//           <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1">
//             <div className="flex items-center gap-1">
//               <span className="text-[28px] sm:text-[32px] font-semibold text-[#25A249]">
//                 4.8
//               </span>
//               <span className="text-[#FDC700] text-[26px] sm:text-[29px]">★</span>
//             </div>
//             <p className="text-[14px] text-[#868686] flex sm:flex-col items-center sm:items-start">
//               <span className="text-[#6E26CB] font-semibold">2573</span>
//               Ratings
//             </p>
//           </div>

//           {/* Progress Bars */}
//           <div className="flex-1 space-y-2">
//             {[
//               { label: "Excellent", value: 80, count: 1115, color: "bg-green-500" },
//               { label: "Very Good", value: 60, count: 701, color: "bg-green-400" },
//               { label: "Good", value: 40, count: 385, color: "bg-orange-400" },
//               { label: "Average", value: 20, count: 125, color: "bg-orange-500" },
//               { label: "Poor", value: 15, count: 247, color: "bg-red-500" },
//             ].map((item, index) => (
//               <div key={index} className="flex items-center gap-3">
//                 <p className="w-[80px] text-[13px] text-[#6B6B6B]">
//                   {item.label}
//                 </p>
//                 <div className="flex-1 h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
//                   <div
//                     className={`h-full ${item.color}`}
//                     style={{ width: `${item.value}%` }}
//                   />
//                 </div>
//                 <span className="text-[13px] text-[#6B6B6B] w-[40px]">
//                   {item.count}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Ratings by Features */}
//         <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#34716C] mb-4">
//           Ratings by features
//         </h3>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
//           {[
//             { label: "Monthly Business", rating: "4/5" },
//             { label: "ROI", rating: "5/5" },
//             { label: "Marketing", rating: "4/5" },
//             { label: "Franchise Service", rating: "4/5" },
//           ].map((item, index) => (
//             <div key={index} className="flex flex-col items-center gap-2">
//               <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[4px] sm:border-[5px] border-[#25A249] flex items-center justify-center text-[13px] sm:text-[14px] font-medium">
//                 {item.rating}
//               </div>
//               <p className="text-[12px] sm:text-[13px] text-center text-[#000000]">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   </div>
// </section>


// <section className="w-full lg:w-[1440px] py-12 ms-0  lg:ms-12 mb-10 md:py-16 bg-[#6E26CB] relative">
//   {/* INNER SHADOW */}
//   <div className="absolute inset-0 pointer-events-none shadow-[inset_0_6px_12px_rgba(0,0,0,0.25)]" />

//   <div className="relative max-w-[1347px] mx-auto px-4 text-white">
    
//     {/* Title */}
//     <h2 className="text-center text-[22px] sm:text-[24px] md:text-[28px] font-semibold mb-10 md:mb-12">
//       Assured By Fetch True
//     </h2>

//     {/* Content Grid */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 md:gap-y-10">

//       {/* Left Column */}
//       <div className="space-y-8 md:space-y-10">
//         {[
//           {
//             title: "Customer Satisfaction:",
//             desc: "We provide up to 100% return if customer is not satisfied",
//           },
//           {
//             title: "Best Quality Assurance:",
//             desc: "We personally check all the project quality before final delivery",
//           },
//           {
//             title: "End-to-End Execution:",
//             desc: "From connecting customer to professional expert to completion, we handle everything under one platform.",
//           },
//           {
//             title: "Reschedule Anytime:",
//             desc: "If the customer is not satisfied with the service, we reschedule the providers for better results.",
//           },
//         ].map((item, index) => (
//           <div key={index} className="flex items-start gap-4">
//             <img
//               src="/image/Group.png"
//               className="w-[36px] h-[38px] sm:w-[42px] sm:h-[45px] md:w-[47px] md:h-[50px]"
//               alt=""
//             />
//             <div>
//               <h4 className="font-semibold text-[18px] sm:text-[20px] md:text-[24px]">
//                 {item.title}
//               </h4>
//               <p className="text-[15px] sm:text-[16px] md:text-[20px] text-[#BEBEBE]">
//                 {item.desc}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Right Column */}
//       <div className="space-y-8 md:space-y-10">
//         {[
//           {
//             title: "Transparent Workflow:",
//             desc: "Complete process visibility, transparent communication, and real-time tracking.",
//           },
//           {
//             title: "On-Time Delivery Result:",
//             desc: "We provide guaranteed on-time completion of every project, ensuring your campaigns and services are delivered exactly as scheduled.",
//           },
//           {
//             title: "Trusted Platform:",
//             desc: "Fetch True ensures secure connections between clients and genuine professionals.",
//           },
//         ].map((item, index) => (
//           <div key={index} className="flex items-start gap-4">
//             <img
//               src="/image/Group.png"
//               className="w-[36px] h-[38px] sm:w-[42px] sm:h-[45px] md:w-[47px] md:h-[50px]"
//               alt=""
//             />
//             <div>
//               <h4 className="font-semibold text-[18px] sm:text-[20px] md:text-[24px]">
//                 {item.title}
//               </h4>
//               <p className="text-[15px] sm:text-[16px] md:text-[20px] text-[#BEBEBE]">
//                 {item.desc}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   </div>
// </section>


// <MoreInformation
//   cards={[
//     {
//       title: "Brand Understanding",
//       description:
//         "We first understand your brand’s purpose, audience, and personality. This helps us design a logo that truly fits your identity and communicates your message clearly.",
//       image: "/image/moreinfo1.jpg",
//     },
//     {
//       title: "Concept & Ideation",
//       description:
//         "Creative brainstorming to generate impactful design concepts.",
//       image: "/image/moreinfo2.jpg",
//     },
//     {
//       title: "Digital Execution",
//       description:
//         "Transform ideas into polished digital experiences.",
//       image: "/image/moreinfo3.jpg",
//     },
//     {
//       title: "Creative Innovation",
//       description:
//         "Blending creativity with strategy for standout branding.",
//       image: "/image/moreinfo4.jpg",
//     },
//   ]}
// />

// <TermsConditions
//   terms={[
//     {
//       title: "Platform Compliance",
//       description:
//         "All customer communication must be completed only through Fetch True Platform to maintain service authenticity, tracking and eligibility for customer benefits.",
//     },
//     {
//       title: "Booking Services",
//       description:
//         "All service bookings must be made through the Fetch True App.",
//     },
//     {
//       title: "Direct Contract Restriction",
//       description:
//         "If a customer chooses to engage directly with a service provider outside the Fetch True platform, such off-platform transactions/contract will not be considered under Fetch True’s responsibility.",
//     },
//     {
//       title: "Termination/Cancellation of Benefits",
//       points: [
//         "Up to 100% Guarantee Return policy",
//         "Customer support and dispute resolution assistance",
//         "Transaction protection and service quality verification",
//         "Refund Policy will be terminated if direct contract has been made.",
//       ],
//     },
//     {
//       title: "Liability",
//       description:
//         "Fetch True is not liable for any loss, dispute, or claim arising from off-platform engagements or private transactions made outside its official system.",
//     },
//     {
//       title: "Refund Policy",
//       description:
//         "Refunds will only be initiated when service conditions meet refund eligibility. All refunds will be processed within the specified time frame.",
//     },
//   ]}
// />

// <FAQs
//   items={[
//     {
//       question: "What include in Managed IT Services?",
//       answer:
//         "Managed IT services include system monitoring, security, backups, helpdesk support, and infrastructure management.",
//     },
//     {
//       question:
//         "Can I customize the service according to my business size?",
//       answer:
//         "Yes, services can be tailored based on your organization size, industry, and technical requirements.",
//     },
//     {
//       question:
//         "What if a major issue occurs during business hours?",
//       answer:
//         "Our support team responds immediately during business hours to minimize downtime and resolve critical issues.",
//     },
//   ]}
// />













//       </div>
//     </>
//   );
// }





"use client";

import Image from "next/image";
import { useState,useEffect, useMemo, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { RiFileList3Line } from "react-icons/ri";
import { MdOutlineDownload } from "react-icons/md";
import { LuCircleCheckBig } from "react-icons/lu";
import MoreInformation from "@/src/components/Section/MoreInformationSection";
import TermsConditions from "@/src/components/Section/TermsandCondition";
import FAQs from "@/src/components/Section/FAQ";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import { useParams } from "next/navigation";
import { useFranchiseModel } from "@/src/context/FranchiseContext";
import { RatingDistribution, useReview } from "@/src/context/ReviewContext";
import Link from "next/link";
import { ChevronLeft, Share2, ShoppingCart } from "lucide-react";
import { useCheckout } from "@/src/context/CheckoutContext";
import BreakupModalUI from "@/src/components/Franchise/BreakupModule";
import EarningModalUI from "@/src/components/Franchise/EarningModule";
import ConnectBar from "@/src/components/Section/ConnectBar";
import { FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import TermsConditionsModal from "@/src/components/Section/termsandconditionPopup";

const extractBenefits = (benefits: string[]): string[] => {
  if (!benefits?.length) return [];

  // SSR safety
  if (typeof window === "undefined") return [];

  const temp = document.createElement("div");

  return benefits.flatMap((html) => {
    temp.innerHTML = html;

    return Array.from(temp.querySelectorAll("p, li"))
      .map((el) => el.textContent?.trim())
      .filter(Boolean);
  });
};

const ratingBars: {
  star: keyof RatingDistribution;
  color: string;
}[] = [
  { star: "5", color: "bg-[#25A249]" },
  { star: "4", color: "bg-[#8BC34A]" },
  { star: "3", color: "bg-[#FDC700]" },
  { star: "2", color: "bg-[#FF9800]" },
  { star: "1", color: "bg-[#F44336]" },
];

type RatingItem = {
  label: string;
  rating: number; // 1–5
};

const ratingFeatures: RatingItem[] = [
  { label: "Monthly Business", rating: 4 },
  { label: "ROI", rating: 5 },
  { label: "Marketing", rating: 4 },
  { label: "Franchise Service", rating: 4 },
];

const getColor = (rating: number): string => {
  if (rating >= 5) return "#16A34A";
  if (rating >= 4) return "#22C55E";
  if (rating >= 3) return "#FACC15";
  return "#EF4444";
};



export default function DetailsAllPage() {

const { moduleId, serviceId } = useParams<{
  moduleId: string;
  serviceId: string;
}>();

  
const [activeImage, setActiveImage] = useState<string>("");
const initialized = useRef(false);
const { selectedPackage, setSelectedPackage } = useCheckout();
const [openBreakup, setOpenBreakup] = useState(false);
const [openEarning, setOpenEarning] = useState(false);
const [openTC, setOpenTC] = useState(false);
const { service, loading, error, fetchServiceDetails } = useServiceDetails();
  const { models, fetchFranchiseModels, franchiseloading } = useFranchiseModel();
  const { reviewServices, fetchReviews } = useReview();

  const handleSocialShare = (platform: string) => {
  const shareUrl = `${window.location.origin}/MainModules/Franchise/${moduleId}/${serviceId}`;

  const text = `Check this amazing franchise opportunity: ${service?.serviceName}`;

  let url = "";

  switch (platform) {
    case "whatsapp":
      url = `https://wa.me/?text=${encodeURIComponent(
        text + " " + shareUrl
      )}`;
      break;

    case "facebook":
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`;
      break;

    case "twitter":
      url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(shareUrl)}`;
      break;

    case "linkedin":
      url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`;
      break;

    default:
      return;
  }

  window.open(url, "_blank");
};

  useEffect(() => {
  if (!serviceId) return;

  fetchServiceDetails(serviceId);
  fetchFranchiseModels(serviceId);
  fetchReviews(serviceId);
}, [serviceId]);


  console.log("service Id:",serviceId)

   useEffect(() => {
  if (service?.bannerImages?.length) {
    setActiveImage(service.bannerImages[0]);
  }
}, [service]);


const franchiseCards = useMemo(() => {
  return (
    service?.franchiseDetails?.franchiseModel?.map((serviceModel) => {
      const modelDetails = models.find(
        (m) =>
          m.franchiseSize.toLowerCase().trim() ===
          serviceModel.title.toLowerCase().trim()
      );

      return { serviceModel, modelDetails };
    }) || []
  );
}, [service, models]);

useEffect(() => {
  if (!initialized.current && franchiseCards.length > 0) {
    const firstPackage = franchiseCards[0].serviceModel;

    setSelectedPackage(
      {
        _id: firstPackage._id,
        name: firstPackage.title,
        price: firstPackage.price,
        discount: 0,
        discountedPrice: firstPackage.price,
      },
      serviceId
    );

    initialized.current = true;
  }
}, [franchiseCards]);

const selectedPackageData = franchiseCards.find(
  (item) => item.serviceModel._id === selectedPackage?._id
)?.serviceModel;

  const splitText = (text: string) => {
    const [label, ...rest] = text.split(":");
    return {
      label: label?.trim(),
      value: rest.join(":").trim(),
    };
  };


if (loading || franchiseloading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p className="text-red-500">{error}</p>;
}

if (!service) {
  return <p>No service data found</p>;
}





  const images = service.bannerImages;
    const { serviceName, serviceDetails } = service;

      const aboutHtml = service?.serviceDetails?.aboutUs?.[0];


  return (
    <>

   <section className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/90 border-b">

  <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 px-4 sm:px-6 lg:px-12 py-3">

    {/* LEFT : Back Navigation */}

    <Link href={`/MainModules/Franchise/${moduleId}`}>
      <span className="flex items-center gap-2 text-[#1a0b05] font-medium text-[16px] sm:text-[18px] hover:underline">

        <ChevronLeft size={20} className="cursor-pointer" />

        Service Details

      </span>
    </Link>


    {/* RIGHT : Actions */}

    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 w-full lg:w-auto">

      <p className="bg-gray-200 text-gray-700 px-3 py-2 rounded text-[13px] sm:text-[14px] whitespace-nowrap">

        Selected Package :-
        ₹{selectedPackageData?.price?.toLocaleString() || 0}

      </p>


      <Link
        href={
          selectedPackage?._id
            ? `/MainModules/Checkout?serviceId=${serviceId}&packageId=${selectedPackage._id}`
            : "#"
        }
      >

        <button className="flex items-center gap-2 bg-green-500 cursor-pointer hover:bg-green-600 text-white px-4 py-2 rounded-md lg:text-[20px] font-medium">
                                        <ShoppingCart className="w-[29px] h-[29px]" />
                                        Check out
                                    </button>

      </Link>


      <button className="flex items-center gap-2 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-md lg:text-[20px] font-medium">
                                    <Share2 className="w-[29px] h-[29px]" />
                                    Share
                                </button>

    </div>

  </div>

</section>



      {/* PAGE WRAPPER */}
      <div className="bg-[#F4F4F4]">
        <div className="bg-white px-3 sm:px-5 py-20">
          {/* <Link href={`/MainModules/Franchise/${moduleId}`}>
            <p className="text-black text-[18px] font-medium ms-3 lg:ms-12">Service Details</p>
          </Link> */}

          {/* HERO */}
          <section className="w-full flex justify-center my-6 px-2">
            <div className="w-full max-w-[1400px] flex flex-col items-center gap-5">

              <div className="relative w-full h-[260px] sm:h-[420px] lg:h-[710px] rounded overflow-hidden shadow">
               {activeImage ? (
  <img
    src={activeImage}
    alt={service.serviceName}
    className="w-full h-full object-cover"
  />
) : (
  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
    No Image Available
  </div>
)}

              </div>

              {/* THUMBNAILS */}
              <div className="lg:absolute lg:top-135  w-full lg:w-[850px] bg-white/10 rounded p-2 flex gap-2 overflow-x-auto no-scrollbar">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`relative min-w-[160px] h-[120px] rounded overflow-hidden border ${
                      activeImage === img
                        ? "border-blue-600"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image src={img} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>

            </div>
          </section>

                    {/* TITLE + RATING */}
           <section className="w-full flex justify-center px-2">
             <div className="w-full max-w-[1400px] flex flex-col gap-6">

               <div className="lg:flex lg:flex-row justify-between gap-4">
                 <div>
                   <h1 className="text-[20px] lg:text-[32px] sm:text-[40px] font-semibold">
                     {serviceName}
                   </h1>
                    <p className="text-[15px] text-gray-400">{service.category?.name}</p>

                   </div>

                 <div className="flex items-center gap-2">
                   <FaStar color="#F5C518" size={24} />
                   <p className="text-[14px] lg:text-[20px] sm:text-[24px]">
                     {service.averageRating?.toFixed(1)} ({service.totalReviews}+ reviews)
                   </p>
                 </div>
               </div>
               {/* INVESTMENT + EARNING */}
               <div className="flex lg:flex-row gap-6">
  {/* Investment */}
  <div className="w-full lg:w-1/2 flex flex-col gap-2">
    <p className="text-[18px] lg:text-[28px] text-[#868686]">
      Investment range
    </p>

    <p className="text-[24px] lg:text-[32px] font-medium">
      ₹
      {service?.franchiseDetails?.investmentRange
        ?.map((item) => item.range)
        .join(" + ") || "N/A"}
    </p>

    <p className="text-[16px] lg:text-[20px] text-[#868686]">Lakhs</p>

    <a
  onClick={() => setOpenBreakup(true)}
  className="text-[#6E26CB] text-[16px] lg:text-[20px] cursor-pointer"
>
  View Breakup
</a>

 <div className="flex items-center gap-2 text-[12px] lg:text-[22px]">
      <RiFileList3Line size={20} />
      {service?.serviceDetails?.emiavalable}
    </div>

   
  </div>

  {/* Earning */}
  <div className="w-full lg:w-1/2 flex flex-col gap-2">
  <p className="text-[18px] lg:text-[28px] text-[#868686]">
    Monthly Earning Potential
  </p>

  <p className="text-[24px] lg:text-[32px] font-medium">
    ₹
    {service?.franchiseDetails?.monthlyEarnPotential?.length
      ? service.franchiseDetails.monthlyEarnPotential
          .map((item) => item.range)
          .join(" + ")
      : "N/A"}
  </p>

  <p className="text-[16px] lg:text-[20px] text-[#868686]">Lakhs</p>

  <a
  onClick={() => setOpenEarning(true)}
  className="text-[#6E26CB] text-[16px] lg:text-[20px] cursor-pointer"
>
  View Breakup
</a>

  {service?.serviceDetails?.brochureImage?.length > 0 && (
  <a
    href={service.serviceDetails.brochureImage[0]}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-3 flex items-center justify-center gap-2 border border-[#C7B6FF] text-[#6E26CB] py-3 rounded hover:bg-[#f6f1ff]"
  >
    <MdOutlineDownload /> Free Brochure
  </a>
)}
</div>


</div>


               {/* COMMISSION */}
               <div className="flex sm:flex-row justify-between items-center gap-4 border border-[#6E26CB] bg-[#F4F4F4] rounded px-6 py-4 mt-4">
                 <div>
                   <p className="text-[20px] lg:text-[28px] font-semibold">
                     Franchise Commission
                   </p>
                   <p className="text-[24px] lg:text-[32px] text-[#2CB140]">
                     Earn Up to {service?.franchiseDetails?.commission || "N/A"}
                   </p>
                 </div>
            
 <span
  className="cursor-pointer text-blue-600"
  onClick={() => setOpenTC(true)}
>
  T&C &gt;
</span>



           
               </div>
             </div>
           </section>
         
          {/* STATS */}
          <section className="w-full flex justify-center mt-8 lg:px-2">
            <div className="flex  gap-5 justify-center w-full max-w-[1400px]">
              {serviceDetails?.counter?.map((item, i) => {
                const colors = ["#2563EB", "#16A34A", "#7C3AED"];
                const bgs = ["#EEF4FF", "#ECFDF3", "#F5F3FF"];
                return(
                <div
                  key={item._id}
                  className="w-full sm:w-[404px] h-[110px] lg:h-[141px] rounded shadow flex flex-col justify-center items-center gap-2"
                  style={{ background: bgs[i % bgs.length] }}
                >
                  <p className="text-[28px] font-semibold" style={{ color: colors[i % colors.length] }}>
                    {item.number}+
                  </p>
                  <p className="text-gray-600">{item.title}</p>
                </div>
                )
})}
            </div>
          </section>

        </div>


        {/* BENEFITS */}
          <section className="w-full flex justify-center mt-8 ps-4 mb-4">
  <div className="w-full max-w-[1400px] flex flex-col gap-6">

    {/* Title */}
    <h2 className=" text-[28px] lg:text-[34px] font-semibold text-[#7C3AED]">
      Benefits
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
  {extractBenefits(service?.serviceDetails?.benefits || []).map(
    (text, index) => (
      <div key={index} className="flex items-center gap-3 lg:ms-15">
        <p className="text-[18px] lg:text-[24px] text-[#4B5563]">
          {text}
        </p>
      </div>
    )
  )}
</div>

  </div>
</section>



          {/* ABOUT */}
          <section className="max-w-[1400px] mx-auto px-3 lg:mt-10">
            <h2 className="text-[#7C3AED] text-[24px] lg:text-[34px] font-semibold mb-3">
              About {serviceName}
            </h2>
            {service?.serviceDetails?.aboutUs && (
            <div className="text-[#868686] text-[18px] lg:text-[22px]"
            dangerouslySetInnerHTML={{ __html: aboutHtml }}>
          
            </div>
            )}

          {/* Image */}
          <div className="w-full max-w-[1440px] mx-auto my-12">
            {service?.serviceDetails?.highlight?.[0] && (
              <Image
                src={service.serviceDetails.highlight[0]}
                alt="highlight"
                width={900}
                height={500}
                className="w-full h-auto rounded-[12px] object-cover"
              />
            )}
          </div>

            <div
  className="
    grid
    grid-cols-2
    sm:grid-cols-2
    lg:grid-cols-4
    gap-x-16
    gap-y-8
    py-10
    
  "
>
  {service.keyValues.map((item)=>(
  <div key={item._id} className="flex flex-col lg:gap-1">
    <div className="flex items-center gap-1">
      <img src={item.icon} className="w-[20px] lg:w-[24px] lg:h-[24px]"/>
      <p className=" lg:text-[24px] text-[#232323]">
        {item.key}
      </p>
    </div>
    <p className="text-[#BEBEBE] lg:text-[24px] ms-5 lg:ms-10">
      {item.value}
    </p>
  </div>
  ))}


            </div>

          </section>


{/* Franchise Operating Model */}
<section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-8">

  {/* HEADING */}
  <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[#232323] mb-2">
    Franchise Operating Models
  </h2>

  <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#606060] mb-8 max-w-[900px]">
    {service?.serviceDetails?.franchiseOperatingModel?.[0]?.info}
  </p>

  {/* MODEL CARDS */}
  <div className="space-y-8">
    {service?.serviceDetails?.franchiseOperatingModel?.map((model) => (
      <section
        key={model._id}
        className="bg-white rounded-[12px] p-5 sm:p-6 lg:p-8"
      >
        {/* TOP ROW */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">

          {/* LEFT */}
          <div className="flex items-start gap-4">
            <div className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-[6px] bg-[#6E26CB] flex items-center justify-center">
              {model?.features?.[0]?.icon && (
                <img
                  src={model.features[0].icon}
                  alt={model.title}
                  className="w-[40px] h-[40px]"
                />
              )}
            </div>

            <div>
              <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#6E26CB]">
                {model.title}
              </h3>
              <p className="text-[15px] sm:text-[17px] lg:text-[18px] text-[#606060] max-w-[520px]">
                {model.description}
              </p>
            </div>
          </div>

          {/* RIGHT TAG */}
          <div className="w-full lg:w-auto flex justify-start lg:justify-center">
            <span className="w-full sm:w-[172px] h-[56px] sm:h-[72px] border border-[#2164F4] rounded-[9px] bg-[#2164F41A] font-semibold text-[18px] sm:text-[20px] flex items-center justify-center text-center text-[#2164F4]">
              {model?.tags?.[0] || "FOFO"}
            </span>
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {model?.features?.map((feature) => (
            <div
              key={feature._id}
              className="flex flex-col items-center text-center gap-2"
            >
              <span className="w-[36px] h-[36px] border border-[#6E26CB] rounded-full flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={feature.subtitle}
                  className="w-[22px]"
                />
              </span>

              <p className="text-[18px] sm:text-[20px] font-medium text-[#868686]">
                {feature.subtitle}
              </p>

              <p className="text-[18px] sm:text-[20px] font-medium text-[#232323]">
                {feature.subDescription}
              </p>
            </div>
          ))}
        </div>

        {/* EXAMPLE */}
        {model.example && (
          <p className="text-[#2164F4] flex gap-2 items-center pt-6 text-[16px] sm:text-[18px]">
            Example:
            <span className="text-[#868686]">{model.example}</span>
          </p>
        )}
      </section>
    ))}
  </div>
</section>

{/* Why Choose This Franchise */}
<section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-8">
   {/* HEADING */}
   <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[#6E26CB] mb-10">
     Why Choose This Franchise?
   </h2>

   {/* GRID */}
   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
      {service?.serviceDetails?.whyChooseUs?.map((item)=>(
             <div key={item._id} className="bg-white rounded-[10px] p-6 flex items-start gap-6 shadow-sm ">

       <img
        src={item.icon}
        alt={item.title}
        className="w-[52px] h-[52px]"
      />
      <div>
        <h3 className="text-[22px] font-semibold text-[#606060] mb-1">
          {item.title}
        </h3>
        <p className="text-[18px] text-[#606060]">
          {item.description}
        </p>
      </div>
    </div>
     ))} 
    </div>

   

</section>
        
{/* Business Fundamental */}
<section className="w-full  py-8">
     <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

     {/* HEADING */}
     <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[#6E26CB] mb-2">
       Business Fundamental
     </h2>
     <p className="text-[18px] text-[#8A8A8A] mb-10">
             {service?.serviceDetails?.businessFundamental?.description}

     </p>

     {/* GRID */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

       {/* CARD */}
       {service?.serviceDetails?.businessFundamental?.points?.map((item) => (
        <div
          key={item._id}
          className="bg-white rounded-[8px]  p-4 flex justify-between items-center shadow-sm"
        >
          <div>
            <p className="text-[14px] text-[#8A8A8A] mb-1">
              {item.subtitle}
            </p>
            <p className="text-[18px] font-semibold text-[#232323]">
              {item.subDescription}
            </p>
          </div>

          {/* CHECK ICON */}
          <span className="w-[18px] h-[18px] flex items-center justify-center border border-[#22C55E] rounded-full">
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
            >
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="#22C55E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      ))}

    </div>
  </div>
</section>

{/* Franchise Model */}
<section className="w-full py-10">
  <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

    <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[#6E26CB] mb-10">
      Franchise Model
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {franchiseCards?.map(({ serviceModel, modelDetails }) => (
        <div
          key={serviceModel._id}
              onClick={() =>
  setSelectedPackage(
    {
      _id: serviceModel._id,
      name: serviceModel.title,
      price: serviceModel.price,
      discount: 0,
      discountedPrice: serviceModel.price,
    },
    serviceId
  )
}
          className={`p-6 flex flex-col justify-between cursor-pointer
${
  selectedPackage?._id === serviceModel._id
    ? "border-2 border-[#6E26CB] bg-purple-50"
    : ""
}`}
          style={{
            borderRadius: "14px",
            border: "2px solid",
            borderImage: "linear-gradient(to bottom, #6E26CB , #E0F3F1) 1",
          }}
        >
          {/* TOP → ServiceDetailsContext */}
          <div>
            <h3 className="text-[22px] font-semibold text-[#6E26CB] mb-1">
              {serviceModel.title}
            </h3>

            <p className="text-[14px] text-[#8A8A8A] mb-3">
              Agreement: {serviceModel.agreement}
            </p>

            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-[22px] font-semibold text-[#6E26CB]">
                  ₹{serviceModel.price?.toLocaleString() || 0}
                </p>
                <p className="text-[14px] text-[#8A8A8A]">
                  +{serviceModel.gst}% GST
                </p>
              </div>

              <button className="bg-[#6E26CB] text-white text-[14px] px-5 py-2 rounded-[6px] hover:opacity-90">
                Enquiry Now
              </button>
            </div>

            <hr className="my-4" />

            {/* DETAILS */}
            <div className="flex flex-col gap-3 text-[16px]">

              {/* ServiceDetailsContext */}
              <div>
                <p className="text-[#8A8A8A]">Franchise Fees</p>
                <p className="font-semibold">
                  ₹{serviceModel.fees?.toLocaleString() || 0}
                </p>
              </div>

              {/* FranchiseModelContext */}
              <div>
                <p className="text-[#8A8A8A]">Area Required</p>
                <p className="font-semibold">
                  {modelDetails?.areaRequired || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-[#8A8A8A]">360 Marketing</p>
                <p className="font-semibold">
                  {modelDetails?.marketing || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-[#8A8A8A]">Return Of Investment (ROI)</p>
                <p className="font-semibold">
                  {modelDetails?.returnOfInvestment || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-[#8A8A8A]">Royalty %</p>
                <p className="font-semibold">
                  {modelDetails?.royaltyPercent || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-[#8A8A8A]">Gross Margin</p>
                <p className="font-semibold">
                  {modelDetails?.grossMargin || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-[#8A8A8A]">Radius Area</p>
                <p className="font-semibold">
                  {modelDetails?.radiusArea || "N/A"}
                </p>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Key Advantages */}
  <section className="w-full py-8">
   <div className="max-w-[1400px] mx-auto px-4">
     {/* Section Title */}
     <h2 className="text-[28px] font-semibold text-[#6E26CB] mb-10">
       Key Advantages
     </h2>

     {/* Cards Grid */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       {service?.serviceDetails?.keyAdvantages?.map((item) => {

        return (
          <div
            key={item._id}
            className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            {/* LEFT Gradient Border (Rounded Only on Left) */}
            <div
              className="
                absolute left-0 top-0
                h-full w-2
                bg-gradient-to-b from-[#6E26CB] via-[#6E26CB] to-[#6E26CB]
                rounded-l-xl
              "
            />

            {/* Content */}
            <div className="flex gap-4 items-center pl-4">
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#DEF5F3]">
                <img
                    src={item.icon}
                    alt={item.title}
                    className="w-6 h-6 object-contain"
                  />

              </div>

              {/* Text */}
              <div>
                <h3 className="text-[20px] font-semibold text-[#000000]">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[#868686] mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* Complete Support System */}
 <section className="w-full py-10">
   <div className="max-w-[1400px] mx-auto px-4">
     {/* Title */}
     <h2 className="text-[26px] font-semibold text-[#6E26CB] mb-8">
       Complete Support System
     </h2>

     {/* Container */}
     <div className="bg-white rounded-xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {service?.serviceDetails?.completeSupportSystem.map((item) => (
            <div key={item._id}>
              
              {/* Header */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="font-semibold text-[#111827] text-[20px]">
                  {item.title}
                </h3>
              </div>

              {/* List */}
              <ul className="grid grid-cols-2 gap-y-2 text-[16px] text-[#6B7280] list-disc pl-5">
                {item.lists.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ul>

            </div>
          ))}
     </div>
   </div>
 </section>

 {/* Agreement & Training Details */}

 <section className="w-full py-6 sm:py-8 mb-8 sm:mb-10">
   <div className="max-w-[1400px] mx-auto px-4">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
      
       {/* Agreement Details */}
       {service?.serviceDetails?.agreementDetails && (
       <div className="h-full">
         <h2 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-[#6E26CB] mb-3 sm:mb-4">
           Agreement Details
         </h2>
         <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 h-full">
           <ul className="space-y-3 sm:space-y-4 text-[14px] sm:text-[15px]">
             {service?.serviceDetails?.agreementDetails.map((item, index) => {
              const { label, value } = splitText(item);
              return (
                <li key={index} className="flex gap-3">
                  <span>•</span>
                  <span className="font-semibold whitespace-nowrap">{label}</span>
                  <span className="mx-1 sm:mx-2">:</span>
                  <span className="text-[#6B7280]">{value}</span>
              </li>
              )
             })}
          </ul>
        </div>
      </div>
          )}

      {/* Training Details */}
      {service?.serviceDetails?.trainingDetails && (
      <div className="h-full">
        <h2 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-[#6E26CB] mb-3 mt-8 lg:mt-0 sm:mb-4">
          Training Details
        </h2>
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 h-full">
          <ul className="space-y-3 sm:space-y-4 text-[14px] sm:text-[15px]">
            {service?.serviceDetails?.trainingDetails.map((item, index) => {
              const { label, value } = splitText(item);
              return (
                <li key={index} className="flex gap-3">
                  <span>•</span>
                  <span className="font-semibold whitespace-nowrap">{label}</span>
                  <span className="mx-1 sm:mx-2">:</span>
                  <span className="text-[#6B7280]">{value}</span>
              </li>
              )
            })}
          </ul>
        </div>
      </div>
      )}

    </div>
  </div>
</section>

{/* Good Things Here */}
 <section className="w-full py-10">
      <div className="max-w-[1400px] mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-[24px] md:text-[28px] font-semibold text-[#6E26CB] mb-6">
          Good Things Here
        </h2>

        {/* Container */}
        <div className="bg-white border border-[#F1F1F1] rounded-xl shadow-sm px-5 py-6">
          
          {/* Pills */}
          <div className="flex flex-wrap gap-3">
            {service?.serviceDetails?.goodThings.map((item) => (
              <div
                key={item}
                className="
                  px-4 py-2
                  text-[13px] md:text-[14px]
                  text-gray-600
                  bg-[#FAFAFA]
                  border border-[#E5E5E5]
                  rounded-md
                  whitespace-nowrap
                "
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>

{/* We Required */}
 <section className="w-full py-6 sm:py-8">
   <div className="max-w-[1400px] mx-auto px-4">
    
     {/* Section Title */}
     <h2 className="text-[22px] sm:text-[24px] md:text-[28px] font-semibold text-[#2F6F6A] mb-4 sm:mb-6">
       We Required
     </h2>

     {/* Card */}
     <div className="bg-white rounded-[12px] shadow-sm px-5 sm:px-6 md:px-8 py-5 sm:py-6">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 sm:gap-y-5 gap-x-8 md:gap-x-12">

         {/* Left Column */}
           {service?.serviceDetails?.weRequired.map((item) => (
            <li
              key={item._id}
              className="flex items-start gap-3 text-[16px] sm:text-[18px] md:text-[20px] text-[#606060]"
            >
              <span className="text-[#22C55E] text-lg sm:text-xl mt-[2px]">
                <LuCircleCheckBig />

              </span>
              {item.title}
            </li>
          ))}


      </div>
    </div>

  </div>
</section>

{/* Compare & Choose */}
<section className="w-full py-10 md:py-12">
  <div className="max-w-[1347px] mx-auto px-4">

    {/* Section Title */}
    <h2 className="text-[22px] sm:text-[24px] md:text-[28px] font-semibold text-[#2F6F6A] mb-6 md:mb-8">
      Compare & Choose
    </h2>

    {/* Dynamic Table */}
    <div
      className="compare-table overflow-x-auto"
      dangerouslySetInnerHTML={{
        __html: service?.serviceDetails?.compareAndChoose?.[0] || "",
      }}
    />
  </div>
</section>

{/* Company Details */}
<section className="w-full py-10 md:py-12">
   <div className="max-w-[1347px] mx-auto px-4">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
       {/* LEFT – Company Card */}
       <div className="bg-[#E2E0E6] rounded-[16px] p-6 sm:p-10 lg:p-20 text-[#232323] h-full">
        
         {/* Header */}
         <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
           <img
            src={service?.serviceDetails?.companyDetails?.[0]?.profile}
            alt={service?.serviceDetails?.companyDetails?.[0]?.name}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-medium">
              {service?.serviceDetails?.companyDetails?.[0]?.name}
            </h3>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] opacity-80 font-semibold">
              {service?.serviceDetails?.companyDetails?.[0]?.location}
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 font-semibold">
          {service?.serviceDetails?.companyDetails?.[0]?.details.map((item) => (
            <div key={item._id}>
              <p className="text-[14px] sm:text-[16px] mb-1 text-[#868686]">
                {item.title}
              </p>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#606060]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT – Ratings */}
      <div>
        <h2 className="text-[22px] sm:text-[24px] md:text-[28px] font-semibold text-[#34716C] mb-2">
          Ratings & Reviews
        </h2>
        <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[#868686] mb-6">
          Complete overview of franchise requirements and benefits.
        </p>

        {/* Rating Summary */}
        <div className="flex flex-col sm:flex-row gap-6 mb-6">
          <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1">
            <div className="flex items-center gap-1">
              <span className="text-[28px] sm:text-[32px] font-semibold text-[#25A249]">
                {service?.averageRating}
              </span>
              <span className="text-[#FDC700] text-[26px] sm:text-[29px]">★</span>
            </div>
            <p className="text-[14px] text-[#868686] flex sm:flex-col items-center sm:items-start">
              <span className="text-[#6E26CB] font-semibold">
                      {service?.totalReviews}
              </span>
              Ratings
            </p>
          </div>

          {/* Progress Bars */}
      <div className="flex-1 space-y-2">
  {ratingBars.map(({ star, color }) => {
    const count = reviewServices?.ratingDistribution?.[star] ?? 0;

    const percentage = reviewServices?.totalReviews
      ? Math.round((count / reviewServices.totalReviews) * 100)
      : 0;

    return (
      <div key={star} className="flex items-center gap-3">
        <p className="w-[70px] text-[13px] text-[#6B6B6B]">
          {star} Star
        </p>

        <div className="flex-1 h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
          <div
            className={`h-full ${color}`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        <span className="text-[13px] text-[#6B6B6B] w-[40px]">
          {percentage}%
        </span>
      </div>
    );
  })}
</div>

        </div>

        {/* Ratings by Features */}


<h3 className="text-[16px] sm:text-[18px] font-semibold text-[#34716C] mb-4">
  Ratings by features
</h3>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
  {ratingFeatures.map((item, index) => {
    const percentage = (item.rating / 5) * 100;

    return (
      <div key={index} className="flex flex-col items-center gap-2">
        {/* Circle */}
        <div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center font-medium text-[13px] sm:text-[14px]"
          style={{
            background: `conic-gradient(
              ${getColor(item.rating)} ${percentage}%,
              #E5E7EB ${percentage}%
            )`,
          }}
        >
          {/* Inner circle */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center">
            {item.rating}/5
          </div>
        </div>

        {/* Label */}
        <p className="text-[12px] sm:text-[13px] text-center text-[#000000]">
          {item.label}
        </p>
      </div>
    );
  })}
</div>


      </div>

    </div>
  </div>
</section>

{/* Assured By Fetch True */}
 <section className="w-full lg:w-[1440px] py-12 ms-0  lg:ms-12 mb-10 md:py-16 bg-[#6E26CB] relative">
   {/* INNER SHADOW */}
   <div className="absolute inset-0 pointer-events-none shadow-[inset_0_6px_12px_rgba(0,0,0,0.25)]" />

   <div className="relative max-w-[1347px] mx-auto px-4 text-white">
   
     {/* Title */}
     <h2 className="text-center text-[22px] sm:text-[24px] md:text-[28px] font-semibold mb-10 md:mb-12">
       Assured By Fetch True
     </h2>
     {/* Content Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 md:gap-y-10">

       {/* Left Column */}
         {service?.serviceDetails?.assuredByFetchTrue.map((item, index) => (
          <div key={item._id} className="flex items-start gap-4">
            <img
              src={item.icon}
              className="w-[36px] h-[38px] sm:w-[42px] sm:h-[45px] md:w-[47px] md:h-[50px]"
              alt={item.title}
            />
            <div>
              <h4 className="font-semibold text-[18px] sm:text-[20px] md:text-[24px]">
                {item.title}
              </h4>
              <p className="text-[15px] sm:text-[16px] md:text-[20px] text-[#BEBEBE]">
                {item.description}
              </p>
            </div>
          </div>
        ))}

    </div>
  </div>
</section>

<MoreInformation
  cards={service?.serviceDetails?.moreInfo.map((item) => ({
    title:item.title,
    description:item.description,
    image:item.image
  }))}
/>

<TermsConditions
  heading="Terms & Conditions"
  html={service?.serviceDetails?.termsAndConditions?.join("") || ""}
/>


<FAQs
  title="FAQs"
      items={service?.serviceDetails?.faq.map((item) => ({
        question: item.question,
        answer: item.answer,
      }))}
/>

<ConnectBar
  title={service?.serviceDetails?.connectWith?.[0]?.name}
      phoneLink={`tel:${service?.serviceDetails?.connectWith?.[0]?.mobileNo}`}
      emailLink={`mailto:${service?.serviceDetails?.connectWith?.[0]?.email}`}
      checkoutLink={`/checkout/${service?._id}`}
      shareLink={`/service/${service?._id}`}
/>
      </div>


 {openBreakup && (
  <BreakupModalUI
  onClose={() => setOpenBreakup(false)}
  serviceId={serviceId}
/>
)}

 {/* {openEarning && (
  <EarningModalUI
    onClose={() => setOpenEarning(false)}
   
  />
)}  */}

{openTC && (
  <TermsConditionsModal
    onClose={() => setOpenTC(false)}
    html={
      service?.franchiseDetails?.termsAndConditions ||
      "<p>No Terms & Conditions available</p>"
    }
  />
)}
    </>
  );
}