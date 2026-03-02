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
// import ConnectBar from "@/src/components/Section/ConnectBar"

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
//                   <h1 className="text-[28px] lg:text-[36px] font-semibold">
//                     Property Buying & Selling
//                   </h1>
//                   <div className="flex items-center gap-2 mt-1">
//                     <FaLocationDot />
//                     <p className="text-[18px] lg:text-[22px]">
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
      

// <div className="w-full max-w-[1400px] mx-auto px-4">

//   {/* Top Cards */}
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

//     {/* Investment Range */}
//     <div className="bg-[#F5F5F5] rounded-lg p-6">
//       <p className="text-[16px] text-[#9A9A9A]">Investment range</p>
//       <p className="text-[24px] font-medium mt-1">₹10–20</p>
//       <p className="text-[14px] text-[#9A9A9A]">Lakhs</p>

//       <a className="text-[14px] text-[#1D4ED8] mt-2 inline-block cursor-pointer">
//         View Breakup
//       </a>
//     </div>

//     {/* Earning Potential */}
//     <div className="bg-[#F5F5F5] rounded-lg p-6">
//       <p className="text-[16px] text-[#9A9A9A]">Earning Potential</p>
//       <p className="text-[24px] font-medium mt-1">₹25–30</p>
//       <p className="text-[14px] text-[#9A9A9A]">Lakhs</p>

//       <a className="text-[14px] text-[#1D4ED8] mt-2 inline-block cursor-pointer">
//         View Breakup
//       </a>
//     </div>

//     {/* ROI */}
//     <div className="bg-[#F5F5F5] rounded-lg p-6">
//       <p className="text-[16px] text-[#9A9A9A]">ROI</p>
//       <p className="text-[24px] font-medium mt-1">25–30%</p>
//     </div>

//   </div>

//   {/* Bottom Row */}
//   <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

//     {/* EMI Options */}
//     <div className="flex items-center gap-2 text-[14px] text-[#555]">
//       <RiFileList3Line size={20} />
//       EMI Options
//     </div>

//     {/* Free Brochure */}
//     <button className="flex w-[380px] items-center justify-center gap-2 border border-[#C7B6FF] text-[#1D4ED8] px-6 py-2 rounded-md text-[16px]">
//       <MdOutlineDownload />
//       Free Brochure
//     </button>

//   </div>
// </div>


//               {/* COMMISSION */}
//            <div
//   className="flex flex-col sm:flex-row
//              sm:items-center sm:justify-between
//              gap-3 sm:gap-4
//              border border-[#6E26CB] bg-[#F4F4F4]
//              rounded px-4 sm:px-6 py-4 mt-4"
// >
//   <div>
//     <p className="text-[22px] sm:text-[25px] lg:text-[28px] font-semibold">
//       Franchise Commission
//     </p>
//     <p className="text-[24px] sm:text-[28px] lg:text-[30px] text-[#2CB140]">
//       Earn Up to 7%
//     </p>
//   </div>

//   <span className="cursor-pointer text-[#6E26CB] text-[14px] sm:text-[16px]">
//     T&amp;C &gt;
//   </span>
// </div>


//             </div>
//           </section>

         

//         </div>

//         {/* BENEFITS */}
//           <section className="w-full flex justify-center mt-8 ps-6">
//             <div className="w-full max-w-[1400px] flex flex-col gap-5">
//               <h2 className="text-[32px] text-[#1D4699] font-medium">
//                 Benefits
//               </h2>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
//                 {benefits.map((item, index) => (
//                   <div key={index} className="flex items-center gap-3">
//                     <div className="text-[#1D4699] text-[22px]">
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
//           <section className="w-full py-10">
//   <div className="max-w-[1400px] mx-auto px-4">

//     {/* Title */}
//     <h2 className="text-[#1D4699] text-[22px] lg:text-[28px] font-semibold mb-4">
//       About Us
//     </h2>

//     {/* Content Box */}
//     <div className="bg-white rounded-lg px-6 py-5">
//       <p className="text-[#7A7A7A] text-[18px] lg:text-[20px] leading-relaxed max-w-[1200px]">
//         India's premier property franchise network with 10+ years of excellence
//         in real estate services. We specialize in residential and commercial
//         property transactions, investment advisory, and wealth creation through
//         real estate.
//       </p>
//     </div>

//   </div>
// </section>


     
// {/* WHY CHOOSE */}
// <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-10">
//   {/* HEADING */}
//   <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[#1D4699] mb-10">
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

// <section className="w-full  py-8 md:py-10">
//   <div className="max-w-[1400px] mx-auto px-4">

//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-18">

//       {/* LEFT */}
//       <div>
//         <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1D4699] mb-6">
//           What We Provides
//         </h2>

//         <div className="bg-white  rounded-[12px] shadow-sm p-6 md:p-8">
//           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 text-[#555] text-[16px] md:text-[18px]">

//             <li className="flex items-start gap-3">
//               <span className="text-green-500 mt-[2px]">
//                                 <img src="/image/checkmark.png" width={22} height={22}/>

//               </span>
//               Business planning & feasibility
//             </li>

//             <li className="flex items-start gap-3">
//               <span className="text-green-500 mt-[2px]">
//                 <img src="/image/checkmark.png" width={22} height={22}/>
//               </span>
//               Legal & registration guidance
//             </li>

//             <li className="flex items-start gap-3">
//               <span className="text-green-500 mt-[2px]">
//                                 <img src="/image/checkmark.png" width={22} height={22}/>

//               </span>
//               Vendor & supplier connections
//             </li>

//             <li className="flex items-start gap-3">
//               <span className="text-green-500 mt-[2px]">
//                                 <img src="/image/checkmark.png" width={22} height={22}/>

//               </span>
//               Funding & loan assistance
//             </li>

//             <li className="flex items-start gap-3">
//               <span className="text-green-500 mt-[2px]">
//                                 <img src="/image/checkmark.png" width={22} height={22}/>

//               </span>
//               Cost & profit estimation
//             </li>

//             <li className="flex items-start gap-3">
//               <span className="text-green-500 mt-[2px]">
//                                 <img src="/image/checkmark.png" width={22} height={22}/>

//               </span>
//               Marketing & sales strategy
//             </li>

//           </ul>
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div>
//         <h2 className="text-[24px]  md:text-[28px] font-semibold text-[#1D4699] mb-6">
//           What You Need to Provide
//         </h2>

//         <div className="bg-white  rounded-[12px] shadow-sm p-6 md:p-8">
//           <ul className="space-y-6 text-[#555] text-[16px] md:text-[18px]">

//             <li className="flex items-start gap-3">
//               <span className="text-green-500 mt-[2px]">
//                   <img src="/image/checkmark.png" width={22} height={22}/>

//               </span>
//               Land or workspace details
//             </li>

//             <li className="flex items-start gap-3">
//               <span className="text-green-500 mt-[2px]">
//                   <img src="/image/checkmark.png" width={22} height={22}/>

//               </span>
//               Initial investment budget
//             </li>

//             <li className="flex items-start gap-3">
//               <span className="text-green-500 mt-[2px]">
//                   <img src="/image/checkmark.png" width={22} height={22}/>

//               </span>
//               Personal / business documents
//             </li>

//             <li className="flex items-start gap-3">
//               <span className="text-green-500 mt-[2px]">
//                   <img src="/image/checkmark.png" width={22} height={22}/>

//               </span>
//               Personal / business documents
//             </li>

//           </ul>
//         </div>
//       </div>

//     </div>
//   </div>
// </section>







// {/* Complete support system */}
// <section className="w-full py-10">
//   <div className="max-w-[1400px] mx-auto px-4">
//     {/* Title */}
//     <h2 className="text-[26px] font-semibold text-[#1D4699] mb-8">
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

// {/* Training & Agreement */}
// <section className="w-full py-6 sm:py-8 mb-8">
//   <div className="max-w-[1400px] mx-auto px-4">

//     {/* Title */}
//     <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-[#1D4699] mb-4">
//       Training Details
//     </h2>

//     {/* Card */}
//     <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6">

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 text-[14px] sm:text-[16px]">

//         {/* LEFT COLUMN */}
//         <div className="space-y-6">
//           <div className="flex gap-3">
//             <span>•</span>
//             <span className="font-semibold min-w-[150px]">
//               Initial Training
//             </span>
//             <span className="text-[#6B7280]">
//               : 7 days onsite / online
//             </span>
//           </div>

//           <div className="flex gap-3">
//             <span>•</span>
//             <span className="font-semibold min-w-[150px]">
//               Ongoing Training
//             </span>
//             <span className="text-[#6B7280]">
//               : Monthly webinars and workshops
//             </span>
//           </div>

//           <div className="flex gap-3">
//             <span>•</span>
//             <span className="font-semibold min-w-[150px]">
//               Training Location
//             </span>
//             <span className="text-[#6B7280]">
//               : Head Office / Online
//             </span>
//           </div>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="space-y-6">
//           <div className="flex gap-3">
//             <span>•</span>
//             <span className="font-semibold min-w-[150px]">
//               Training Material
//             </span>
//             <span className="text-[#6B7280]">
//               : Manuals, Videos & Marketing Kit
//             </span>
//           </div>

//           <div className="flex gap-3">
//             <span>•</span>
//             <span className="font-semibold min-w-[150px]">
//               Support
//             </span>
//             <span className="text-[#6B7280]">
//               : Dedicated franchise manager
//             </span>
//           </div>
//         </div>

//       </div>
//     </div>

//   </div>
// </section>


// {/* Model */}
// <section className="w-full py-10">
//   <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

//     {/* HEADING */}
//     <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[#1D4699] mb-10">
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

// {/* We required */}
// <section className="w-full py-6 sm:py-8">
//   <div className="max-w-[1400px] mx-auto px-4">
    
//     {/* Section Title */}
//     <h2 className="text-[22px] sm:text-[24px] md:text-[28px] font-semibold text-[#1D4699] mb-4 sm:mb-6">
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








// <section className="w-full lg:w-[1440px] py-12 ms-0  lg:ms-12 mb-10 md:py-16 bg-[#1D4699] relative">
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


// <ConnectBar
//   title="Legal Service Manager"
//   phoneLink="tel:+919999999999"
//   emailLink="mailto:legal@example.com"
//   checkoutLink="/legal/checkout"
//   shareLink="/legal/share"
// />










//       </div>
//     </>
//   );
// }


"use client";
import AllServices from "@/src/components/Business/AllServices";
import Category from "@/src/components/Business/Category";
import HighDemand from "@/src/components/Business/HighDemand";
import Recommended from "@/src/components/Business/Recommended";
import TopRated from "@/src/components/Business/TopRated";
import SearchBar from "@/src/components/SearchBar/Search";
import BusinessCard from "@/src/components/ui/BusinessCard";
import { useCategoryBanner } from "@/src/context/CategoryBannerContext";
import { useWhyChooseService } from "@/src/context/WhyJustOurServiceContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";



export default function BusinessPageClient({ searchQuery,setSearchQuery }:any) {

    const { moduleId,categoryId } = useParams<{ categoryId:string ,moduleId: string }>();
        const { services, loading, fetchWhyServices } = useWhyChooseService();
        const { banners, fetchBanners } = useCategoryBanner();
    
     useEffect(()=>{
          if(moduleId){
            fetchWhyServices(moduleId as string)
                fetchBanners(moduleId as string);

          }
        },[moduleId]);

              if (loading) return null;

    
      console.log("MODULE ID IN CLIENT:", moduleId);
         const moduleServices = services.filter(
      (service) => service.module._id === moduleId
    );
  
    // Flatten all items from this module
    const items = moduleServices.flatMap((service) => service.items);
  
  return (

    <>

       <section className="w-full flex justify-center bg-white">
      
      <div className="w-[1329px] h-[60px] flex items-center justify-between px-6">
        
        {/* LEFT SIDE */}
        <div className="flex items-center gap-5">
          
          {/* Home Icon */}
          <Link href="/">
            <img
              src="/image/Group 1000003962.png"
              alt="Home"
              className="w-[34px] h-[43px]"
            />
          </Link>

          {/* Back Arrow */}
          <Link href="/">
            <img
              src="/image/Vector (1).png"
              alt="Back"
              className="w-[18px] h-[18px] hidden lg:block"
            />
          </Link>

          {/* Page Title */}
          <h1 className="font-inter font-semibold text-[20px] leading-[30px] text-black">
            Business Service
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          
          {/* Search Box */}
         <div className="relative hidden sm:block">
  {/* <input
    type="text"
    placeholder="Search"
    className="
      w-[540px]
      h-[40px]
      pl-10
      pr-4
      rounded-[15px]
      border
      border-[#BEBEBE]
      text-[14px]
      bg-white
      shadow-[0px_4px_4px_rgba(208,208,208,1)]
      focus:outline-none
    "
  /> */}

  {/* <img
    src="/image/Vector (27).png"
    alt="Search"
    className="absolute left-3 top-1/2 -translate-y-1/2 w-[16px] h-[16px]"
  /> */}
   <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder="Search" 
                  />
</div>


          {/* Bookmark Icon */}
          <Link href="../../Account/favorite">
          <img
            src="/image/Vector (2).png"
            alt="Bookmark"
            className="w-[18.6px] h-[27.2px]"
          />
          </Link>
        </div>

      </div>
    </section>


       <section className="relative w-full h-[420px] sm:h-[480px] md:h-[630px] overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat mt-30 lg:mt-30"
        style={{
          backgroundImage: banners?.[0]?.image
        ? `url(${banners[0].image})`
        : "none",
        }}
      />

      {/* WHITE FADE OVERLAY (soft look like image) */}
      <div className="absolute inset-0 bg-white/50" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full bottom-40">
  <h1
    className="
      text-center
      font-['Abril_Fatface']
      text-[32px]
      mt-20
      lg:mt-0
      sm:text-[32px]
      md:text-[44px]
      lg:text-[62px]
      lg:leading-16
      bg-gradient-to-r
      from-[#C6D0DA]
      to-[#1D4699]
      bg-clip-text
      text-transparent
      font-bold
    "
  >
    CONNECT
    <br />
    EXECUTE
    <br />
    EXPAND
  </h1>
</div>


       </section>


{/* category */}
<Category />

{/* <AllServices moduleId={moduleId} categoryId={categoryId}/> */}

<Recommended moduleId={moduleId} searchQuery={searchQuery}/>



<HighDemand moduleId={moduleId} searchQuery={searchQuery}/>

<TopRated moduleId={moduleId} searchQuery={searchQuery}/>

<section className="w-full py-20 bg-white">
  <div className="max-w-[1200px] mx-auto px-4">

    {/* HEADING */}
    <div className="text-center mb-14">
      <h2 className="text-[28px] md:text-[34px] font-semibold text-[#2B2B2B] mb-3">
        Trusted by Businesses Nationwide
      </h2>
      <p className="text-[16px] text-[#6B6B6B] max-w-[720px] mx-auto">
        Verified services, transparent processes, and expert support at every step
      </p>
    </div>

    {/* CARDS GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* <div className="bg-[#8FA9DD] rounded-[10px] p-6 text-white shadow-md">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 flex items-center justify-center border border-white rounded-full">
            ✓
          </div>
          <div>
            <h3 className="text-[18px] font-semibold mb-2">
              Industry Expert Guidance
            </h3>
            <p className="text-[14px] leading-relaxed opacity-90">
              Get advice from experienced professionals across multiple industries
              to make smarter decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#8FA9DD] rounded-[10px] p-6 text-white shadow-md">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 flex items-center justify-center border border-white rounded-full">
            ✓
          </div>
          <div>
            <h3 className="text-[18px] font-semibold mb-2">
              Legal & Compliance Support
            </h3>
            <p className="text-[14px] leading-relaxed opacity-90">
              Stay compliant with business laws, registrations, and regulations—
              handled the right way.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#8FA9DD] rounded-[10px] p-6 text-white shadow-md">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 flex items-center justify-center border border-white rounded-full">
            ✓
          </div>
          <div>
            <h3 className="text-[18px] font-semibold mb-2">
              Investment & ROI Planning
            </h3>
            <p className="text-[14px] leading-relaxed opacity-90">
              Plan your investments wisely with clear ROI insights and
              data-driven recommendations.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#8FA9DD] rounded-[10px] p-6 text-white shadow-md">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 flex items-center justify-center border border-white rounded-full">
            ✓
          </div>
          <div>
            <h3 className="text-[18px] font-semibold mb-2">
              Step-by-Step Execution Help
            </h3>
            <p className="text-[14px] leading-relaxed opacity-90">
              From planning to launch, get guided execution support at every
              stage of your business journey.
            </p>
          </div>
        </div>
      </div> */}
      {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-[#8FA9DD] rounded-[10px] p-6 text-white shadow-md"
            >
              {item.icon && (
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[48px] h-[48px] bg-[#8B5CF6] rounded-full flex items-center justify-center text-whitew-12 h-12"
                />
              )}
              <div>
              <h3 className="text-[18px] font-semibold mb-2">{item.title}</h3>
              <p className="text-[14px] leading-relaxed opacity-90">{item.description}</p>
              </div>
        </div>
          ))}

    </div>
  </div>
</section>

    </>
  );
}
