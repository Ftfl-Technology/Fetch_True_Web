// "use client";

// import Image from "next/image";
// import {
//   FiTarget,
//   FiEye,
//   FiZap,
//   FiStar,
//   FiSmartphone,
//   FiLayers,
// } from "react-icons/fi";
// import { Scale, Timer, Wallet, MapPin } from "lucide-react";
// import FAQs from "@/src/components/Section/FAQ";
// import TermsConditions from "@/src/components/Section/TermsandCondition";
// import MoreInformation from "@/src/components/Section/MoreInformationSection";
// import ChooseProvider from "@/src/components/Section/ChooseProvider";
// import RatingsReviews from "@/src/components/Section/RatingReviews";
// import ConnectBar from "@/src/components/Section/ConnectBar"


// const benefits = [
//   { icon: <FiTarget />, label: "Strong Brand Identity" },
//   { icon: <FiEye />, label: "Professional & Trustworthy Look" },
//   { icon: <FiZap />, label: "Quick Recognition" },
//   { icon: <FiStar />, label: "Stand Out from Competitors" },
//   { icon: <FiSmartphone />, label: "Works on All Platforms" },
//   { icon: <FiLayers />, label: "Consistent Branding" },
// ];

// export default function LegalDetailsPage() {
//   return (
//     <div className="bg-[#F4F4F4] w-full ">
//         <section className="py-6 sm:py-8 lg:py-12 lg:px-10">
//       <div className=" w-full  mx-auto bg-white rounded-[4px] p-4  lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
        
//         {/* LEFT IMAGE */}
//         <div className="w-full lg:w-[652px] h-[220px] sm:h-[360px] lg:h-[503px] rounded-[6px] overflow-hidden ">
//           <Image
//             src="/image/legalMainImage.png"
//             alt="Legal Service"
//             width={652}
//             height={503}
//             className="object-cover w-full h-full"
//           />
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="flex-1 w-full lg:w-[614px]">
          
//           {/* Title */}
          
//           <h1 className="text-[26px] sm:text-[32px] lg:text-[40px] font-semibold text-[#1E1E1E] mb-1">
//             Limited Liability Partnership(LLP)
//           </h1>

//           <p className="text-[20px] sm:text-[24px] lg:text-[32px] text-[#868686] mb-3">
//             Legal Service
//           </p>

//           {/* Rating */}
//           <div className="flex flex-wrap items-center gap-2 mb-6 text-[#868686]">
//             <span className="text-[#FDC700] text-[20px] lg:text-[24px]">★</span>
//             <span className="text-[18px] lg:text-[24px] font-semibold">4.8</span>
//             <span className="text-[18px] lg:text-[24px] font-semibold">
//               (2,400+ reviews)
//             </span>
//           </div>

//           {/* Cost + Time */}
//           <div className="flex  sm:flex-row gap-4 lg:gap-6 mb-6">
            
//             {/* Cost */}
//             <div className="border border-[#BEBEBE] rounded-[8px] p-4 w-full sm:w-1/2 lg:w-[299px]">
//               <p className="text-[18px] lg:text-[20px] text-[#7A7A7A] mb-1">
//                 Total Cost
//               </p>

//               <p className="text-[22px] lg:text-[26px] font-semibold text-[#1E1E1E]">
//                 ₹14,000
//               </p>

//               <div className="flex items-center gap-2 mt-1">
//                 <span className="line-through text-[#9E9E9E] text-[16px] lg:text-[18px]">
//                   ₹10,000
//                 </span>
//                 <span className="text-[12px] lg:text-[14px] text-white bg-[#BC9958] px-2 py-[2px] rounded">
//                   25% OFF
//                 </span>
//               </div>
//             </div>

//             {/* Time */}
//             <div className="border border-[#D9D9D9] rounded-[6px] p-4 w-full sm:w-1/2 lg:w-[299px]">
//               <p className="text-[18px] lg:text-[20px] text-[#7A7A7A] mb-1">
//                 Time Required
//               </p>

//               <p className="text-[22px] lg:text-[26px] font-semibold text-[#1E1E1E]">
//                 7-10
//               </p>

//               <p className="text-[14px] lg:text-[16px] text-[#7A7A7A]">
//                 Working days
//               </p>
//             </div>
//           </div>

//           {/* Franchise Commission */}
//           <div className="w-full lg:w-[614px] border-2 border-[#5B3527] rounded-[12px] px-4 py-4 flex flex-col sm:flex-row justify-between gap-4">
//             <div>
//               <p className="text-[22px] lg:text-[28px] font-semibold text-[#1E1E1E]">
//                 Franchise Commission
//               </p>
//               <p className="text-[26px] lg:text-[32px] font-medium text-[#2CB140] mt-1">
//                 Earn Up to 7%
//               </p>
//             </div>

//             <button className="text-[#BC9958] text-[16px] lg:text-[20px] font-medium self-end">
//               T&C →
//             </button>
//           </div>

//         </div>
//       </div>
//         </section>

//          {/* BENEFITS */}
//                   <section className="w-full flex justify-center mt-8 ps-4">
//                     <div className="w-full max-w-[1400px] flex flex-col gap-5">
//                       <h2 className="text-[36px] text-[#5B3527] text-center font-medium">
//                         Benefits
//                       </h2>
        
//                       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
//                         {benefits.map((item, index) => (
//                           <div key={index} className="flex items-center gap-3">
//                             <div className="text-[#BC9958] text-[22px]">
//                               {item.icon}
//                             </div>
//                             <p className="text-[20px] lg:text-[22px] text-[#606060] font-medium">
//                               {item.label}
//                             </p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </section>
        
//                   {/* ABOUT */}
//                   <section className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-12">
//   {/* Title */}
//   <h2 className="text-[#5B3527] text-[28px] sm:text-[32px] font-medium mb-4 text-center">
//     About Us
//   </h2>

//   {/* Paragraph */}
//   <p className="text-[#868686] text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed text-justify  mx-auto">
//     A logo is the face of your brand. Our custom logo design service creates unique, 
//     memorable, and versatile logos tailored to your business identity. Whether you’re a 
//     startup, small business, or large brand, we deliver high-quality, professional 
//     designs that help you stand out. A logo is the face of your brand. Our custom logo 
//     design service creates unique, memorable, and versatile logos tailored to your 
//     business identity. Whether you’re a startup, small business, or large brand, we 
//     deliver high-quality, professional designs that help you stand out.
//   </p>

//   {/* Image */}
//   <div className="w-full max-w-[900px] h-auto mx-auto my-12">
//     <img
//       src="/image/legalAbout.jpg"
//       alt="legalAboutImage"
//       className="w-full h-auto rounded-[12px] object-cover"
//     />
//   </div>
// </section>


//                    <section className="w-full  pb-10">
//       <div className="max-w-[1440px] mx-auto px-4">
        
//         {/* Title */}
//         <h2 className="text-center text-[28px] md:text-[32px] font-medium text-[#5B3527] mb-12">
//           Why Choose Us?
//         </h2>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
//           {/* Card 1 */}
//           <div className="border border-[#5B3527] rounded-[6px] p-6 text-center ">
//             <h3 className="text-[20px] font-medium mb-4">
//               Expert Lawyers
//             </h3>
//             <Scale className="mx-auto text-[#BC9958] mb-4" size={36} />
//             <p className="text-[#8A8A8A] text-[18px] leading-[24px]">
//               Qualified legal professionals with 10+ years experience
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="border border-[#5B3527] rounded-[6px] p-6 text-center">
//             <h3 className="text-[20px] font-medium mb-4">
//               Quick Turnaround
//             </h3>
//             <Timer className="mx-auto text-[#BC9958] mb-4" size={36} />
//             <p className="text-[#8A8A8A] text-[18px] leading-[24px]">
//               Fast processing with 7-day company registration
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="border border-[#5B3527] rounded-[6px] p-6 text-center">
//             <h3 className="text-[20px] font-medium mb-4">
//               Affordable Fees
//             </h3>
//             <Wallet className="mx-auto text-[#BC9958] mb-4" size={36} />
//             <p className="text-[#8A8A8A] text-[18px] leading-[24px]">
//               Transparent pricing with no hidden charges
//             </p>
//           </div>

//           {/* Card 4 */}
//           <div className="border border-[#5B3527] rounded-[6px] p-8 text-center">
//             <h3 className="text-[20px] font-medium mb-4">
//               PAN-India Services
//             </h3>
//             <MapPin className="mx-auto text-[#BC9958] mb-4" size={36} />
//             <p className="text-[#8A8A8A] text-[18px] leading-[24px]">
//               Legal services available across all Indian states
//             </p>
//           </div>

//         </div>
//       </div>
//                    </section>
// <section className="w-full py-10 ">
//   <div className="max-w-[760px] mx-auto px-4">

//     {/* Heading */}
//     <h2 className="text-center text-[26px] font-semibold text-[#5B3527] mb-2">
//       How it works?
//     </h2>

//     <p className="text-center text-[18px] text-[#868686]  mx-auto mb-12 leading-relaxed">
//       Follow our streamlined 7-step process to register your Limited Liability Partnership.
//       We handle everything from consultation to certificate delivery with complete transparency.
//     </p>

//     {/* Steps */}
//     <div className="relative pl-16 lg:pl-60 flex flex-col gap-10">

//       {/* Vertical Line */}
//       <span className="absolute left-[24px] lg:left-[200px] top-1 bottom-1 w-px bg-[#D6D6D6]" />

//       {/* Step */}
//       {[
//         {
//           icon: "/image/Vector (12).png",
//           title: "Select Service",
//           desc: "Choose the legal service you need for your case",
//         },
//         {
//           icon: "/image/Vector (4).png",
//           title: "Share Basic Details",
//           desc: "Fill in simple information required for your case or document.",
//         },
//         {
//           icon: "/image/Vector (5).png",
//           title: "Get Matched with Expert",
//           desc: "We connect you with the right lawyer or law firm.",
//         },
//         {
//           icon: "/image/Vector (10).png",
//           title: "Review & Confirm",
//           desc: "Check pricing, process, and timeline before you confirm.",
//         },
//         {
//           icon: "/image/Vector (11).png",
//           title: "Service Begins",
//           desc: "Your legal work starts instantly with updates at every step.",
//         },
//       ].map((step, index) => (
//         <div key={index} className="relative flex gap-8">

//           {/* Dot on line */}
//           <span className="absolute left-[-46px] top-[6px] w-3 h-3 rounded-full bg-[#C9A46A]" />

//           {/* Content */}
//           <div>
//             {/* Icon */}
//             <div className="w-7 h-7 mb-2 flex items-center justify-center text-[#BC9958] text-[16px]">
//               <img src={step.icon}/>
//             </div>

//             {/* Title */}
//             <p className="text-[18px] font-medium text-[#868686] mb-1">
//               {step.title}
//             </p>

//             {/* Description */}
//             <p className="text-[14px] text-[#9A9A9A] max-w-[420px]">
//               {step.desc}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>







//                    <section className="w-full lg:w-[1440px] py-12 ms-0  lg:ms-12 mb-10 md:py-16 bg-[#5B3527] relative">
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
//             icon:"/image/Group (1).png",
//             title: "Customer Satisfaction:",
//             desc: "We provide up to 100% return if customer is not satisfied",
//           },
//           {
//                         icon:"/image/Group (1).png",
//             title: "Best Quality Assurance:",
//             desc: "We personally check all the project quality before final delivery",
//           },
//           {
//                         icon:"/image/Group (1).png",

//             title: "End-to-End Execution:",
//             desc: "From connecting customer to professional expert to completion, we handle everything under one platform.",
//           },
//           {
//                         icon:"/image/Group (1).png",

//             title: "Reschedule Anytime:",
//             desc: "If the customer is not satisfied with the service, we reschedule the providers for better results.",
//           },
//         ].map((item, index) => (
//           <div key={index} className="flex items-start gap-4">
//             <img
//               src={item.icon}
//               className="w-[36px] h-[38px] sm:w-[42px] sm:h-[45px] md:w-[47px] md:h-[50px] text-[#BC9958]"
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
//                         icon:"/image/Group (1).png",

//             title: "Transparent Workflow:",
//             desc: "Complete process visibility, transparent communication, and real-time tracking.",
//           },
//           {
//                         icon:"/image/Group (1).png",

//             title: "On-Time Delivery Result:",
//             desc: "We provide guaranteed on-time completion of every project, ensuring your campaigns and services are delivered exactly as scheduled.",
//           },
//           {
//                         icon:"/image/Group (1).png",

//             title: "Trusted Platform:",
//             desc: "Fetch True ensures secure connections between clients and genuine professionals.",
//           },
//         ].map((item, index) => (
//           <div key={index} className="flex items-start gap-4 ">
//             <img
//               src={item.icon}
//               className="w-[36px] h-[38px] sm:w-[42px] sm:h-[45px] md:w-[47px] md:h-[50px] text-[#BC9958]"
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

// <section className="w-full py-8 lg:py-10 ">
//   <div className="max-w-[1200px] mx-auto px-4">
    
//     {/* Title */}
//     <h2 className="text-center text-[28px] sm:text-[32px] font-semibold text-[#5A3A1B] mb-12">
//       Packages
//     </h2>

//     {/* Cards */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
//       {/* BASIC */}
//       <div className="bg-white rounded-[12px] shadow-md p-6 sm:p-8 text-center flex flex-col justify-between">
//         <p className="text-[#C9A36A] text-[20px] font-semibold mb-1">
//           ₹2,999<span className="text-[14px] font-normal">/service</span>
//         </p>

//         <h3 className="text-[18px] font-semibold text-[#5A3A1B] mb-2">
//           Basic
//         </h3>

//         <p className="text-[14px] text-[#777] mb-6">
//           Perfect for individuals and small businesses
//         </p>

//         <ul className="text-left text-[14px] text-[#555] space-y-2 mb-6 sm:mb-8">
//           <li className="flex gap-2">✅ Single service coverage</li>
//           <li className="flex gap-2">✅ Basic legal documentation</li>
//           <li className="flex gap-2">✅ Email support</li>
//           <li className="flex gap-2">✅ 15-day completion</li>
//           <li className="flex gap-2">✅ Basic compliance</li>
//         </ul>

//         <button className="w-full bg-[#5A3A1B] text-white py-2 rounded-[6px] text-[14px] mt-auto">
//           Get Started
//         </button>
//       </div>

//       {/* STANDARD */}
//       <div className="bg-white rounded-[12px] shadow-lg p-6 sm:p-8 text-center relative flex flex-col justify-between">
        
//         {/* Badge */}
//         <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A36A] text-white text-[12px] px-3 py-[2px] rounded-full">
//           Most Popular
//         </span>

//         <p className="text-[#C9A36A] text-[20px] font-semibold mb-1 mt-4 sm:mt-6">
//           ₹4,999<span className="text-[14px] font-normal">/service</span>
//         </p>

//         <h3 className="text-[18px] font-semibold text-[#5A3A1B] mb-2">
//           Standard
//         </h3>

//         <p className="text-[14px] text-[#777] mb-6">
//           Ideal for growing businesses
//         </p>

//         <ul className="text-left text-[14px] text-[#555] space-y-2 mb-6 sm:mb-8">
//           <li className="flex gap-2">✅ Multiple service coverage</li>
//           <li className="flex gap-2">✅ Complete documentation</li>
//           <li className="flex gap-2">✅ Phone & email support</li>
//           <li className="flex gap-2">✅ 7-day completion</li>
//           <li className="flex gap-2">✅ Full compliance support</li>
//           <li className="flex gap-2">✅ Free consultation</li>
//         </ul>

//         <button className="w-full bg-[#5A3A1B] text-white py-2 rounded-[6px] text-[14px] mt-auto">
//           Get Started
//         </button>
//       </div>

//       {/* PREMIUM */}
//       <div className="bg-white rounded-[12px] shadow-md p-6 sm:p-8 text-center flex flex-col justify-between">
//         <p className="text-[#C9A36A] text-[20px] font-semibold mb-1">
//           ₹7,999<span className="text-[14px] font-normal">/service</span>
//         </p>

//         <h3 className="text-[18px] font-semibold text-[#5A3A1B] mb-2">
//           Premium
//         </h3>

//         <p className="text-[14px] text-[#777] mb-6">
//           Comprehensive solution for enterprises
//         </p>

//         <ul className="text-left text-[14px] text-[#555] space-y-2 mb-6 sm:mb-8">
//           <li className="flex gap-2">✅ All services included</li>
//           <li className="flex gap-2">✅ Premium documentation</li>
//           <li className="flex gap-2">✅ Dedicated relationship manager</li>
//           <li className="flex gap-2">✅ 3-day completion</li>
//           <li className="flex gap-2">✅ Ongoing compliance support</li>
//           <li className="flex gap-2">✅ Priority support</li>
//         </ul>

//         <button className="w-full bg-[#5A3A1B] text-white py-2 rounded-[6px] text-[14px] mt-auto">
//           Get Started
//         </button>
//       </div>

//     </div>
//   </div>
// </section>


// <section className="w-full py-8 md:py-10">
//   <div className="max-w-[1200px] mx-auto px-4">

//     {/* Title */}
//     <h2 className="text-center text-[26px] sm:text-[26px] md:text-[32px] font-semibold text-[#5A3A1B] mb-8 md:mb-12">
//       Documents We Required
//     </h2>

//     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

//       {/* LEFT COLUMN */}
//       <div>
//         <p className="text-[16px] md:text-[18px] text-[#333] mb-6">
//           Essential documents required for each partner in the LLP
//         </p>

//         <ul className="space-y-6 text-[16px] md:text-[18px] text-[#444]">

//           {[
//             {
//               title: "PAN Card",
//               desc: "Permanent Account Number card for tax identification",
//             },
//             {
//               title: "Aadhaar / Voter ID / Passport",
//               desc: "Government-issued identity proof document",
//             },
//             {
//               title: "Address Proof",
//               desc: "Utility bill, bank statement, or rental agreement",
//             },
//             {
//               title: "Passport-size Photos",
//               desc: "Recent colored photographs (2–3 copies)",
//             },
//             {
//               title: "Digital Signature Certificate",
//               desc: "DSC for online filing and document signing",
//             },
//           ].map((item, i) => (
//             <li key={i}>
//               <div className="flex flex-wrap items-center gap-2">
//                 <span className="font-medium">{item.title}</span>
//                 <span className="text-[11px] bg-[#F5E9D6] text-[#9B7B4A] px-2 py-[2px] rounded">
//                   Required
//                 </span>
//               </div>
//               <p className="text-[14px] md:text-[16px] text-[#777] mt-1">
//                 {item.desc}
//               </p>
//             </li>
//           ))}

//         </ul>
//       </div>

//       {/* RIGHT COLUMN */}
//       <div>
//         <p className="text-[16px] md:text-[18px] text-[#333] mb-6">
//           Documents to establish the official business address
//         </p>

//         <ul className="space-y-6 text-[16px] md:text-[18px] text-[#444] mb-8 md:mb-10">

//           {[
//             {
//               title: "Address Proof (Utility Bill)",
//               desc: "Electricity / water bill not older than 2 months",
//             },
//             {
//               title: "Rent Agreement",
//               desc: "Registered rental agreement if office is rented",
//             },
//             {
//               title: "NOC from Owner",
//               desc: "No Objection Certificate from property owner",
//             },
//           ].map((item, i) => (
//             <li key={i}>
//               <div className="flex flex-wrap items-center gap-2">
//                 <span className="font-medium">{item.title}</span>
//                 <span className="text-[11px] bg-[#F5E9D6] text-[#9B7B4A] px-2 py-[2px] rounded">
//                   Required
//                 </span>
//               </div>
//               <p className="text-[14px] md:text-[16px] text-[#777] mt-1">
//                 {item.desc}
//               </p>
//             </li>
//           ))}

//         </ul>

//         {/* Special Documents */}
//         <p className="text-[16px] md:text-[18px] font-medium text-[#333] mb-4">
//           Special documents for specific partner types
//         </p>

//         <ul className="space-y-6 text-[16px] md:text-[18px] text-[#444]">

//           {[
//             {
//               title: "Passport (For Foreign Nationals)",
//               desc: "Valid passport for non-resident Indian partners",
//             },
//             {
//               title: "Incorporation Certificate",
//               desc: "For corporate partners – company registration proof",
//             },
//             {
//               title: "Board Resolution",
//               desc: "Corporate authorization to participate in LLP",
//             },
//           ].map((item, i) => (
//             <li key={i}>
//               <span className="font-medium">{item.title}</span>
//               <p className="text-[14px] md:text-[16px] text-[#777] mt-1">
//                 {item.desc}
//               </p>
//             </li>
//           ))}

//         </ul>
//       </div>

//     </div>
//   </div>
// </section>


// <section className="w-full py-8 md:py-10">
//   <div className="max-w-[1200px] mx-auto px-4">

//     {/* Title */}
//     <h2 className="text-center text-[26px] sm:text-[26px] md:text-[32px] font-semibold text-[#5A3A1B] mb-6 md:mb-12">
//       We Deliver
//     </h2>

//     {/* Subtitle */}
//     <p className="text-center md:text-left text-[16px] md:text-[18px] text-[#333] mb-8 md:mb-10">
//       Essential documents required for each partner in the LLP
//     </p>

//     {/* Content */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

//       {/* LEFT COLUMN */}
//       <ul className="space-y-6 md:space-y-8 text-[18px] md:text-[20px] text-[#444]">

//         <li className="flex items-start gap-3">
//           <span className="text-[18px] leading-none">•</span>
//           <div>
//             <p className="font-medium">
//               Certificate of Incorporation
//             </p>
//             <p className="text-[16px] md:text-[18px] text-[#777] mt-1">
//               Official LLP incorporation certificate from MCA
//             </p>
//           </div>
//         </li>

//         <li className="flex items-start gap-3">
//           <span className="text-[18px] leading-none">•</span>
//           <div>
//             <p className="font-medium">
//               LLP Agreement
//             </p>
//             <p className="text-[16px] md:text-[18px] text-[#777] mt-1">
//               Legally binding partnership agreement document
//             </p>
//           </div>
//         </li>

//         <li className="flex items-start gap-3">
//           <span className="text-[18px] leading-none">•</span>
//           <div>
//             <p className="font-medium">
//               PAN & TAN of LLP
//             </p>
//             <p className="text-[16px] md:text-[18px] text-[#777] mt-1">
//               Tax identification numbers for the LLP entity
//             </p>
//           </div>
//         </li>

//       </ul>

//       {/* RIGHT COLUMN */}
//       <ul className="space-y-6 md:space-y-8 text-[16px] md:text-[20px] text-[#444]">

//         <li className="flex items-start gap-3">
//           <span className="text-[18px] leading-none">•</span>
//           <div>
//             <p className="font-medium">
//               LLP Identification Number (LLPIN)
//             </p>
//             <p className="text-[16px] md:text-[18px] text-[#777] mt-1">
//               Unique identification number assigned to your LLP
//             </p>
//           </div>
//         </li>

//         <li className="flex items-start gap-3">
//           <span className="text-[18px] leading-none">•</span>
//           <div>
//             <p className="font-medium">
//               Compliance File & Master Data
//             </p>
//             <p className="text-[16px] md:text-[18px] text-[#777] mt-1">
//               Complete documentation package in PDF format
//             </p>
//           </div>
//         </li>

//       </ul>

//     </div>
//   </div>
// </section>





//                    <MoreInformation
//                      title="More Information"
//                      cards={[
//                        {
//                          title: "Brand Understanding",
//                          description:
//                            "We first understand your brand’s purpose, audience, and personality. This helps us design a logo that truly fits your identity and communicates your message clearly.",
//                          image: "/image/moreinfo1.jpg",
//                        },
//                        {
//                          title: "Concept & Ideation",
//                          description:
//                            "Creative brainstorming to generate impactful design concepts.",
//                          image: "/image/moreinfo2.jpg",
//                        },
//                        {
//                          title: "Digital Execution",
//                          description:
//                            "Transform ideas into polished digital experiences.",
//                          image: "/image/moreinfo3.jpg",
//                        },
//                        {
//                          title: "Creative Innovation",
//                          description:
//                            "Blending creativity with strategy for standout branding.",
//                          image: "/image/moreinfo4.jpg",
//                        },
//                      ]}
//                    />

//                    <ChooseProvider
//   title="Choose Provider"
//   buttonColor="bg-[#5B3527]"
//   providers={[
//     {
//       logo: "/image/provider1.png",
//       name: "FTFL Technology",
//       rating: 4.8,
//       reviews: 127,
//       price: 7040,
//       originalPrice: 8000,
//       discountText: "12% Off",
//       commissionText: "₹15%",
//       promoted: true,
//       available: true,
//     },
//   ]}
// />


//                   {/* <TermsConditions
//                     terms={[
//                       {
//                         title: "Platform Compliance",
//                         description:
//                           "All customer communication must be completed only through Fetch True Platform to maintain service authenticity, tracking and eligibility for customer benefits.",
//                       },
//                       {
//                         title: "Booking Services",
//                         description:
//                           "All service bookings must be made through the Fetch True App.",
//                       },
//                       {
//                         title: "Direct Contract Restriction",
//                         description:
//                           "If a customer chooses to engage directly with a service provider outside the Fetch True platform, such off-platform transactions/contract will not be considered under Fetch True’s responsibility.",
//                       },
//                       {
//                         title: "Termination/Cancellation of Benefits",
//                         points: [
//                           "Up to 100% Guarantee Return policy",
//                           "Customer support and dispute resolution assistance",
//                           "Transaction protection and service quality verification",
//                           "Refund Policy will be terminated if direct contract has been made.",
//                         ],
//                       },
//                       {
//                         title: "Liability",
//                         description:
//                           "Fetch True is not liable for any loss, dispute, or claim arising from off-platform engagements or private transactions made outside its official system.",
//                       },
//                       {
//                         title: "Refund Policy",
//                         description:
//                           "Refunds will only be initiated when service conditions meet refund eligibility. All refunds will be processed within the specified time frame.",
//                       },
//                     ]}
//                   /> */}


//                   <FAQs
//                     items={[
//                       {
//                         question: "What include in Managed IT Services?",
//                         answer:
//                           "Managed IT services include system monitoring, security, backups, helpdesk support, and infrastructure management.",
//                       },
//                       {
//                         question:
//                           "Can I customize the service according to my business size?",
//                         answer:
//                           "Yes, services can be tailored based on your organization size, industry, and technical requirements.",
//                       },
//                       {
//                         question:
//                           "What if a major issue occurs during business hours?",
//                         answer:
//                           "Our support team responds immediately during business hours to minimize downtime and resolve critical issues.",
//                       },
//                     ]}
//                   />

//                   <RatingsReviews
//   title="Ratings & Reviews"
//   subtitle="Complete overview of franchise requirements and benefits."
//   averageRating={4.8}
//   totalRatings={2573}
//   primaryColor="#BC9958"
//   breakdown={[
//     { label: "Excellent", value: 80, color: "#2FA84F" },
//     { label: "Very Good", value: 60, color: "#2FA84F" },
//     { label: "Good", value: 40, color: "#FF9F43" },
//     { label: "Average", value: 20, color: "#FF9F43" },
//     { label: "Poor", value: 10, color: "#E74C3C" },
//   ]}
//   features={[
//     { label: "Monthly Business", score: 4 },
//     { label: "ROI", score: 5 },
//     { label: "Marketing", score: 4 },
//     { label: "Franchise Service", score: 4 },
//   ]}
// />

// <ConnectBar
//   title="Legal Service Manager"
//   phoneLink="tel:+919999999999"
//   emailLink="mailto:legal@example.com"
//   checkoutLink="/legal/checkout"
//   shareLink="/legal/share"
// />



                   
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import {
  FiTarget,
  FiEye,
  FiZap,
  FiStar,
  FiSmartphone,
  FiLayers,
} from "react-icons/fi";
import { Scale, Timer, Wallet, MapPin, Share2 } from "lucide-react";
import FAQs from "@/src/components/Section/FAQ";
import TermsConditions from "@/src/components/Section/TermsandCondition";
import MoreInformation from "@/src/components/Section/MoreInformationSection";
import ChooseProvider from "@/src/components/Section/ChooseProvider";
import RatingsReviews from "@/src/components/Section/RatingReviews";
import ConnectBar from "@/src/components/Section/ConnectBar"
import { useParams } from "next/navigation";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import { useFranchiseModel } from "@/src/context/FranchiseContext";
import { useReview } from "@/src/context/ReviewContext";
import { useEffect } from "react";
import { useServiceProviders } from "@/src/context/ServicewiseProviderContext";
import Link from "next/link";

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
 
type RatingDistribution = {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
};

const buildRatingBreakdown = (
  dist?: RatingDistribution,
  total?: number
) => {
  if (!dist || !total) return [];

  const percent = (value: number) =>
    Math.round((value / total) * 100);

  return [
    { label: "Excellent", value: percent(dist["5"]), color: "#2FA84F" },
    { label: "Very Good", value: percent(dist["4"]), color: "#2FA84F" },
    { label: "Good", value: percent(dist["3"]), color: "#FF9F43" },
    { label: "Average", value: percent(dist["2"]), color: "#FF9F43" },
    { label: "Poor", value: percent(dist["1"]), color: "#E74C3C" },
  ];
};

 
 const getColor = (rating: number): string => {
   if (rating >= 5) return "#16A34A";
   if (rating >= 4) return "#22C55E";
   if (rating >= 3) return "#FACC15";
   return "#EF4444";
 };

export default function LegalDetailsPage() {

   const { moduleId, serviceId } = useParams<{
      moduleId: string;
      serviceId: string;
    }>();
        const { providers,fetchProvidersByService } = useServiceProviders();


const mappedProviders = providers.map((p) => ({
  logo: p.storeInfo?.logo || "/image/default-provider.png",
  name: p.storeInfo?.storeName || p.fullName,
  rating: p.averageRating || 0,
  reviews: p.totalReviews || 0,
  promoted: Boolean(p.isPromoted),
  available: p.isStoreOpen,
}));

      const { service, loading, error, fetchServiceDetails } = useServiceDetails();
        const { models, fetchFranchiseModels, franchiseloading } = useFranchiseModel();
        const { reviewServices, fetchReviews } = useReview();

    
           useEffect(() => {
          if (!serviceId) return;
        
          fetchServiceDetails(serviceId);
          fetchFranchiseModels(serviceId);
          fetchReviews(serviceId)
          fetchProvidersByService(serviceId);
        }, [serviceId]);

                const franchiseCards =
  service?.franchiseDetails?.franchiseModel?.map((serviceModel) => {
    const modelDetails = models.find(
      (m) =>
        m.franchiseSize.toLowerCase().trim() ===
        serviceModel.title.toLowerCase().trim()
    );

    return { serviceModel, modelDetails };
  }) || [];

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
    <div className="bg-[#F4F4F4] w-full ">
     <section className="">
       <div className="ms-12 pt-5">
    <Link
      href={`/MainModules/Legal-Services/${moduleId}`}
      
    >
      {/* <FiLayers size={20} /> */}
      <span className="flex items-center gap-2 text-[#5B3527] font-medium text-[18px] hover:underline ">Service Details</span>
    </Link>
    </div>
  <div className="w-full fixed flex justify-end gap-4 mx-auto px-12 mb-5 ">
    

    {/* RIGHT : Actions */}
    <div className="flex items-center gap-3 mb-5 ">
      <Link
        href={`/MainModules/Checkout`}>
       <button className="bg-green-500 hover:bg-green-600 text-white
                   px-4 sm:px-5 py-2 rounded
                   flex items-center gap-2 text-[14px]"
      >
        Check out</button>
      </Link>

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white
                   px-4 sm:px-5 py-2 rounded
                   flex items-center gap-2 text-[14px]"
      >
        <Share2 size={16} />
        Share
      </button>
    </div>

  </div>
</section>

        <section className="py-6 sm:py-8 lg:py-10 lg:px-10">
      <div className=" w-full  mx-auto bg-white rounded-[4px] p-4  lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
        
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-[652px] h-[220px] sm:h-[360px] lg:h-[503px] rounded-[6px] overflow-hidden ">
          <Image
            src={service?.bannerImages?.[0]}
            alt={serviceName}
            width={652}
            height={503}
            className="object-cover w-full h-full"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 w-full lg:w-[614px]">
          
          {/* Title */}
          
          <h1 className="text-[26px] sm:text-[32px] lg:text-[40px] font-semibold text-[#1E1E1E] mb-1">
            {serviceName}
          </h1>

          <p className="text-[20px] sm:text-[24px] lg:text-[26px] text-[#868686] mb-3">
                                {service.category?.name}

          </p>

          {/* Rating */}
          <div className="flex flex-wrap items-center gap-2 mb-6 text-[#868686]">
            <span className="text-[#FDC700] text-[20px] lg:text-[24px]">★</span>
            <span className="text-[18px] lg:text-[24px] font-semibold">{service.averageRating?.toFixed(1)}</span>
            <span className="text-[18px] lg:text-[24px] font-semibold">
              ({service.totalReviews}+ reviews)
            </span>
          </div>

          {/* Key Values */}
          <div className="grid grid-cols-3 gap-4 mb-6">
        {service?.keyValues.map((item) => (
          <div key={item._id} className="flex items-center gap-3">
            <img src={item.icon} className="w-4 h-4" />
            <div>
              <p className="text-[13px] text-[#8B8B8B]">{item.key}</p>
              <p className="text-[14px] font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

          {/* Cost + Time */}
          <div className="flex  sm:flex-row gap-4 lg:gap-6 mb-6">
            
            {/* Cost */}
            <div className="border border-[#BEBEBE] rounded-[8px] p-4 w-full sm:w-1/2 lg:w-[299px]">
              <p className="text-[18px] lg:text-[20px] text-[#7A7A7A] mb-1">
                Total Cost
              </p>

              <p className="text-[22px] lg:text-[26px] font-semibold text-[#1E1E1E]">
                ₹{service?.serviceDetails?.packages?.[0]?.discountedPrice}
              </p>

              <div className="flex items-center gap-2 mt-1">
                <span className="line-through text-[#9E9E9E] text-[16px] lg:text-[18px]">
                  ₹{service?.serviceDetails?.packages?.[0]?.price}
                </span>
                <span className="text-[12px] lg:text-[14px] text-white bg-[#BC9958] px-2 py-[2px] rounded">
                  {service?.serviceDetails?.packages?.[0]?.discount}% OFF
                </span>
              </div>
            </div>

            {/* Time */}
            <div className="border border-[#D9D9D9] rounded-[6px] p-4 w-full sm:w-1/2 lg:w-[299px]">
              <p className="text-[18px] lg:text-[20px] text-[#7A7A7A] mb-1">
                Time Required
              </p>

              <p className="text-[22px] lg:text-[26px] font-semibold text-[#1E1E1E]">
                {service?.serviceDetails?.timeRequired?.[0]?.range}
              </p>

              <p className="text-[14px] lg:text-[16px] text-[#7A7A7A]">
                {service?.serviceDetails?.timeRequired?.[0]?.parameters}
              </p>
            </div>
          </div>

          {/* Franchise Commission */}
          <div className="w-full lg:w-[614px] border-2 border-[#5B3527] rounded-[12px] px-4 py-4 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <p className="text-[22px] lg:text-[28px] font-semibold text-[#1E1E1E]">
                Franchise Commission
              </p>
              <p className="text-[26px] lg:text-[32px] font-medium text-[#2CB140] mt-1">
                Earn Up to {service?.franchiseDetails?.commission}
              </p>
            </div>

            <button className="text-[#BC9958] text-[16px] lg:text-[20px] font-medium self-end">
              T&C →
            </button>
          </div>

        </div>
      </div>
        </section>

         {/* BENEFITS */}
                  <section className="w-full  mt-8 ps-4">
                    <div className=" max-w-[1400px] flex flex-col gap-5">
                      <div className="rounded-xl p-6 sm:p-8">
                      <h2 className="text-[36px] text-[#5B3527] text-center font-medium">
                        Benefits
                      </h2>
        
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-15 gap-y-5 lg:ms-10">
                        {extractBenefits(service?.serviceDetails?.benefits || []).map((item, index) => (
                          <div key={index} className="flex items-center gap-3 lg:ms-15">
                          
                            <p className="text-[20px] lg:text-[22px] text-[#606060] font-medium">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                      </div>
                    </div>
                  </section>
        
                  {/* ABOUT */}
                  <section className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-12">
  {/* Title */}
  <h2 className="text-[#5B3527] text-[28px] sm:text-[32px] font-medium mb-4 text-center">
    About Us
  </h2>

  {/* Paragraph */}
  {service?.serviceDetails?.aboutUs && (
            <div className="text-[#868686] text-[18px] lg:text-[22px]"
            dangerouslySetInnerHTML={{ __html: aboutHtml }}>
          
            </div>
            )}

  {/* Image */}
  <div className="w-full max-w-[1440px] h-auto mx-auto my-12">
    {service?.serviceDetails?.highlight?.[0] && (
    <img
      src={service.serviceDetails.highlight[0]}
      alt="highlight"
      className="w-full rounded-[12px] object-cover"
    />
  )}

  </div>
</section>


                   <section className="w-full  pb-10">
      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-center text-[28px] md:text-[32px] font-medium text-[#5B3527] mb-12">
          Why Choose Us?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service?.serviceDetails?.whyChooseUs?.map((item, index) => (
            <div key={item._id} className="border border-[#5B3527] rounded-[6px] p-6 text-center ">
              <h3 className="text-[20px] font-medium mb-4">
                {item.title}
              </h3>
              <div className="mx-auto mb-4">
                <img src={item.icon} alt={item.title} className="w-12 h-12 mx-auto" />
              </div>
              <p className="text-[#8A8A8A] text-[18px] leading-[24px]">
                {item.description}
              </p>
            </div>
          ))}
          

        </div>
      </div>
                   </section>

<section className="w-full py-10 ">
  <div className="max-w-[760px] mx-auto px-4">

    {/* Heading */}
    <h2 className="text-center text-[26px] font-semibold text-[#5B3527] mb-2">
      How it works?
    </h2>

    <p className="text-center text-[18px] text-[#868686]  mx-auto mb-12 leading-relaxed">
      Follow our streamlined 7-step process to register your Limited Liability Partnership.
      We handle everything from consultation to certificate delivery with complete transparency.
    </p>

    {/* Steps */}
    <div className="relative pl-16 lg:pl-60 flex flex-col gap-10">

      {/* Vertical Line */}
      <span className="absolute left-[24px] lg:left-[200px] top-1 bottom-1 w-px bg-[#D6D6D6]" />

      {/* Step */}
      {service?.serviceDetails?.howItWorks.map((item) => (
        <div key={item._id} className="relative flex gap-8">

          {/* Dot on line */}
          <span className="absolute left-[-46px] top-[6px] w-3 h-3 rounded-full bg-[#C9A46A]" />

          {/* Content */}
          <div>
            {/* Icon */}
            <div className="w-7 h-7 mb-2 flex items-center justify-center text-[#BC9958] text-[16px]">
              <img src={item.icon} alt={item.title} />
            </div>

            {/* Title */}
            <p className="text-[18px] font-medium text-[#868686] mb-1">
              {item.title}
            </p>

            {/* Description */}
            <p className="text-[14px] text-[#9A9A9A] max-w-[420px]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>







                   <section className="w-full lg:w-[1440px] py-12 ms-0  lg:ms-12 mb-10 md:py-16 bg-[#5B3527] relative">
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
          <div key={index} className="flex items-start gap-4">
            <img
              src={item.icon}
              className="w-[36px] h-[38px] sm:w-[42px] sm:h-[45px] md:w-[47px] md:h-[50px] text-[#BC9958]"
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

{/* packages */}
<section className="w-full py-8 lg:py-10 ">
  <div className="max-w-[1200px] mx-auto px-4">
    
    {/* Title */}
    <h2 className="text-center text-[28px] sm:text-[32px] font-semibold text-[#5A3A1B] mb-12">
      Packages
    </h2>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {service?.serviceDetails?.packages.map((pkg, index) => {
        const isPopular = index === 1;
        return (
          
          <div key={pkg._id} className="bg-white rounded-[12px] shadow-md p-6 sm:p-8  flex flex-col justify-between">
            {isPopular && (
                  <span className="absolute -mt-10 left-1/2 -translate-x-1/2 z-10  w-[90px] bg-[#C9A36A] text-white text-[12px] px-2  py-[2px] rounded-full">
                    Most Popular
                  </span>
                )}
        <div className="relative text-[#C9A36A] flex justify-items-start gap-2 text-[20px] font-semibold mb-1">
          <span className="">₹{Math.floor(pkg.discountedPrice)} /</span>
          <span className="text-[#868686] text-[16px]"><s>₹{pkg.price}</s></span>
          <p className="bg-[#BC9958] text-[#FFFFFF] text-[14px]  font-normal p-[2px] rounded-[3px]">{pkg.discount}% OFF</p>
        </div>

        <h3 className="text-[18px] font-semibold text-[#5A3A1B] mb-2 text-start">
          {pkg.name}
        </h3>

        <p className="text-[14px] text-[#777] mb-6">
          Perfect for individuals and small businesses
        </p>

        {pkg.whatYouGet.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      ✅ {item}
                    </li>
                  ))}

        <button className="w-full bg-[#5A3A1B] text-white py-2 rounded-[6px] text-[14px] mt-5">
          Get Started
        </button>
      </div>
        )
      })}


    </div>
  </div>
</section>


<section className="w-full py-8 md:py-10">
  <div className="max-w-[1200px] mx-auto px-4">

    {/* Title */}
    <h2 className="text-center text-[26px] sm:text-[26px] md:text-[32px] font-semibold text-[#5A3A1B] mb-8 md:mb-12">
      Documents We Required
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">

          {service?.serviceDetails?.weRequired.map((item) => (
            <li key={item._id}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium">{item.title}</span>
                <span className="text-[11px] bg-[#F5E9D6] text-[#9B7B4A] px-2 py-[2px] rounded">
                  Required
                </span>
              </div>
              <p className="text-[14px] md:text-[16px] text-[#777] mt-1">
                {item.description}
              </p>
            </li>
          ))}

      </div>
  </div>
</section>


<section className="w-full py-8 md:py-10">
  <div className="max-w-[1200px] mx-auto px-4">

    {/* Title */}
    <h2 className="text-center text-[26px] sm:text-[26px] md:text-[32px] font-semibold text-[#5A3A1B] mb-6 md:mb-12">
      We Deliver
    </h2>


    {/* Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

      {service?.serviceDetails?.weDeliver.map((item) => (
            <li key={item._id}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium">{item.title}</span>
                <span className="text-[11px] bg-[#F5E9D6] text-[#9B7B4A] px-2 py-[2px] rounded">
                  Required
                </span>
              </div>
              <p className="text-[14px] md:text-[16px] text-[#777] mt-1">
                {item.description}
              </p>
            </li>
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

<ChooseProvider
  title="Choose Provider"
  buttonColor="bg-[#5B3527]"
  providers={mappedProviders}
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

{reviewServices && (
  <div className="max-w-[1400px]  mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  rounded-[12px] mt-8">
    <RatingsReviews
      title="Ratings & Reviews"
      subtitle="Complete overview of service experience."
      averageRating={reviewServices.averageRating}
      // totalRatings={reviewServices.totalReviews}
      primaryColor="#BC9958"
      breakdown={buildRatingBreakdown(
        reviewServices.ratingDistribution,
        reviewServices.totalReviews
      )}
      features={[
        { label: "Monthly Business", score: 4 },
        { label: "ROI", score: 5 },
        { label: "Marketing", score: 4 },
        { label: "Service Quality", score: 4 },
      ]}
    />
  </div>
)}


<ConnectBar
  title={service?.serviceDetails?.connectWith?.[0]?.name}
      phoneLink={`tel:${service?.serviceDetails?.connectWith?.[0]?.mobileNo}`}
      emailLink={`mailto:${service?.serviceDetails?.connectWith?.[0]?.email}`}
      checkoutLink={`/checkout/${service?._id}`}
      shareLink={`/service/${service?._id}`}
/>



                   
    </div>
  );
}