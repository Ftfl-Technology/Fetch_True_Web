// import ConnectBar from "@/src/components/Section/ConnectBar";
// import FAQs from "@/src/components/Section/FAQ";
// import MoreInformation from "@/src/components/Section/MoreInformationSection";
// import RatingsReviews from "@/src/components/Section/RatingReviews";
// import TermsConditions from "@/src/components/Section/TermsandCondition";

//   const benefits = [
//     "Easy & Fast Loan Approval Process",
//     "Expert Documentation Support",
//     "Low Interest Rate Options",
//     "Personalized EMI & Tenure Plans",
//     "Verified Lender Partners (Banks / NBFCs)",
//     "Dedicated Loan Advisor",
//     "Fully Digital Process",
//     "Transparent Fees — No Hidden Charges",
//   ];

//      const items = [
//     {
//       title: "Expert Lawyers",
//       desc: "Qualified legal professionals with 10+ years experience",
//       image: "/image/Vector (25).png",
//     },
//     {
//       title: "Verified Process",
//       desc: "100% verified legal & financial procedures",
//       image: "/image/Vector (25).png",
//     },
//     {
//       title: "Fast Service",
//       desc: "Quick turnaround with dedicated support",
//       image: "/image/Vector (25).png",
//     },
//     {
//       title: "Transparent Pricing",
//       desc: "No hidden charges, full clarity guaranteed",
//       image: "/image/Vector (25).png",
//     },
//   ];

//    const items1 = [
//     {
//       img: "/image/vector3.png",
//       text: "Individuals planning to buy or construct a house",
//     },
//     {
//       img: "/image/vector3.png",
//       text: "Salaried professionals or self-employed persons",
//     },
//     {
//       img: "/image/vector3.png",
//       text: "Business owners expanding residential property",
//     },
//     {
//       img: "/image/vector3.png",
//       text: "Real estate investors or agents",
//     },
//     {
//       img: "/image/vector3.png",
//       text: "Families looking for affordable home loans",
//     },
//   ];

// export default function FinanceDetailPage() {
//   return (
//     <>
//     <section className="w-full bg-white">
//       <div
//         className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-[32px] lg:gap-[42px] px-4 sm:px-6 lg:px-[36px] py-10 lg:py-[75px] bg-white"
//         style={{
//           boxShadow: "0px 0px 24px 1px rgba(0,0,0,0.10)",
//         }}
//       >
//         {/* Left Image */}
//         <div className="w-full lg:w-[692px] h-[260px] sm:h-[360px] lg:h-[480px] bg-[#F3F6E0] rounded overflow-hidden flex items-center justify-center">
//           <img
//             src="/image/financeMain.png"
//             alt="Finance"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Content */}
//         <div className="w-full lg:w-[634px] px-0 lg:px-[6px] lg:mt-5 flex flex-col gap-[20px] lg:gap-[24px]">
          
//           {/* Title */}
//           <div>
//             <h2 className="text-[26px] sm:text-[24px] lg:text-[34px] font-medium text-[#1E1E1E]">
//               Personal loan
//             </h2>
//             <p className="text-[16px] sm:text-[16px] lg:text-[24px] text-[#7A7A7A]">
//               Finance service
//             </p>
//           </div>

//           {/* Rating */}
//           <div className="flex items-center gap-2 text-[14px] sm:text-[16px] lg:text-[22px] text-[#7A7A7A]">
//             <span className="text-[#F4B400]">★</span>
//             <span className="font-medium text-[#1E1E1E]">4.8</span>
//             <span>(2,400+ reviews)</span>
//           </div>

//           {/* Info Grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
//             {[
//               { label: "Loan Amount", value: "Upto 20 Lac", icon: "$" },
//               { label: "Approval Time", value: "24 Hrs", icon: "⏱" },
//               { label: "Duration", value: "12–60 Months", icon: "📅" },
//               { label: "Interest Rate", value: "Starting 10.99%", icon: "📉" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="border border-[#2FA44F] rounded-md p-3 flex gap-3 items-start"
//               >
//                 <span className="text-white text-[16px] lg:text-[20px] bg-[#2F965C] p-2 rounded">
//                   {item.icon}
//                 </span>
//                 <div>
//                   <p className="text-[14px] lg:text-[18px] font-medium">
//                     {item.label}
//                   </p>
//                   <p className="text-[12px] lg:text-[14px] text-[#7A7A7A]">
//                     {item.value}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Franchise Commission */}
//           <div className="bg-[#DFF4E6] rounded-md px-4 py-3 flex justify-between items-center">
//             <div>
//               <p className="text-[14px] lg:text-[18px] font-medium text-[#1E1E1E]">
//                 Franchise Commission
//               </p>
//               <p className="text-[18px] lg:text-[22px] font-semibold text-[#2FA44F]">
//                 Earn Up to 7%
//               </p>
//             </div>
//             <span className="text-[14px] text-[#2FA44F] cursor-pointer">
//               T&amp;C →
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>

//       <section className="w-full lg:py-10 bg-white">
//       <div className="max-w-[1440px] mx-auto px-4">
//         <div className="bg-[#F7F7F7] rounded-xl p-6 sm:p-8">

//           {/* Title */}
//           <h3 className="text-[24px] lg:text-[30px] font-medium text-[#2F965C] mb-6">
//             Benefits
//           </h3>

//           {/* Benefits Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-15 lg:ms-10">
//             {benefits.map((item, index) => (
//               <div key={index} className="flex items-start gap-3">
//                 {/* Check Icon */}
//                 <span className="text-[#1FA463] text-[15px] mt-[2px]">
//                   <img src="/image/checkmark.png" width={20} height={20}/>
//                 </span>

//                 {/* Text */}
//                 <p className="text-[16px] lg:text-[18px] text-[#5F5F5F]">
//                   {item}
//                 </p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>

//       <section className="w-full py-10 bg-white">
//       <div className="max-w-[1440px] mx-auto px-4">
//         <div className="bg-[#F7F7F7] rounded-xl p-6 sm:p-8">

//           {/* Title */}
//           <h3 className="text-[24px] lg:text-[30px] font-medium text-[#1FA463] mb-4">
//             Overview
//           </h3>

//           {/* Description */}
//           <p className="text-[18px] lg:text-[20px] text-[#5F5F5F] leading-relaxed mb-6">
//             Fetch True helps individuals and business professionals get home
//             loans easily by connecting them with verified financial
//             institutions. From eligibility check to final approval, our experts
//             ensure a smooth, transparent, and quick process for your home loan
//             journey.
//           </p>

//           {/* Includes */}
//           <p className="text-[18px] lg:text-[20px] font-medium text-[#5F5F5F] mb-4">
//             Includes:
//           </p>

//           {/* List */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
//             <div className="flex items-start gap-3">
//               <span className="text-[#5F5F5F] text-[24px]">•</span>
//               <p className="text-[18px] lg:text-[20px] text-[#5F5F5F]">
//                 Pre-loan consultation & eligibility check
//               </p>
//             </div>

//             <div className="flex items-start gap-3">
//               <span className="text-[#5F5F5F] text-[24px]">•</span>
//               <p className="text-[18px] lg:text-[20px] text-[#5F5F5F]">
//                 Loan application tracking & support
//               </p>
//             </div>

//             <div className="flex items-start gap-3">
//               <span className="text-[#5F5F5F] text-[24px]">•</span>
//               <p className="text-[18px] lg:text-[20px] text-[#5F5F5F]">
//                 Documentation and credit score review
//               </p>
//             </div>

//             <div className="flex items-start gap-3">
//               <span className="text-[#5F5F5F] text-[24px]">•</span>
//               <p className="text-[18px] lg:text-[20px] text-[#5F5F5F]">
//                 Assistance till fund disbursement
//               </p>
//             </div>

//             <div className="flex items-start gap-3">
//               <span className="text-[#5F5F5F] text-[24px]">•</span>
//               <p className="text-[18px] lg:text-[20px] text-[#5F5F5F]">
//                 Bank comparison for best rates
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>

//        <section className="w-full py-10 bg-white">
//       <div className="max-w-[1440px] mx-auto px-4">
//         <div className="bg-[#F7F7F7] rounded-xl px-6 py-8">

//           {/* Title */}
//           <h3 className="text-[24px] lg:text-[30px] font-medium text-[#1FA463] mb-8">
//             Why Choose Us?
//           </h3>

//           {/* Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {items.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center text-center"
//               >

//                  {/* Title */}
//                 <h4 className="text-[18px] lg:text-[22px] font-medium text-[#606060] mb-2">
//                   {item.title}
//                 </h4>

//                 {/* Image */}
//                 <div className="mb-4">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-12 h-12 object-contain"
//                   />
//                 </div>

               

//                 {/* Description */}
//                 <p className="text-[16px] lg:text-[18px] text-[#868686] leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>

//         <section className="w-full py-10 bg-white">
//       <div className="max-w-[1440px] mx-auto px-4">
//         <div className="border border-[#E5E5E5] rounded-xl px-6 py-8 bg-[#F7F7F7]">

//           {/* Title */}
//           <h3 className="text-[24px] lg:text-[30px] font-medium text-[#2F965C] mb-6">
//             Whom to Sell?
//           </h3>

//           {/* Items */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 lg:ms-8">
//             {items1.map((item, index) => (
//               <div key={index} className="flex items-start gap-3">
                
//                 {/* Image Icon */}
//                 <img
//                   src={item.img}
//                   alt="icon"
//                   className="w-[28px] h-[28px] mt-[2px]"
//                 />

//                 {/* Text */}
//                 <p className="text-[16px] lg:text-[20px] text-[#6B6B6B] leading-relaxed">
//                   {item.text}
//                 </p>

//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>

//     <section className="w-full py-12">
//   <div className="max-w-[1440px] mx-auto px-4">

//     <div className="bg-[#F7F7F7] rounded-[12px] border border-[#EAEAEA] p-8 md:p-10">
      
//       {/* Title */}
//       <h2 className="text-[28px] lg:text-[32px] font-medium text-[#1F9D55] mb-8">
//         Documents
//       </h2>

//       {/* Two Columns */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

//         {/* Salaried */}
//         <div>
//           <h3 className="text-[22px] lg:text-[26px] font-semibold text-[#2F965C] mb-6">
//             Salaried
//           </h3>

//           <ul className="space-y-4 text-[18px] font-medium text-[#6F6F6F] list-disc pl-5">
//             <li>100% digital loan processing</li>
//             <li>Access to multiple banks in one place</li>
//             <li>Expert EMI planning support</li>
//             <li>Faster approval & disbursement</li>
//             <li>Faster approval & disbursement</li>
//             <li>Transparent and trustworthy loan management</li>
//           </ul>
//         </div>

//         {/* Self Employed */}
//         <div>
//           <h3 className="text-[22px] lg:text-[28px] font-semibold text-[#2F965C] mb-6">
//             Self Employed
//           </h3>

//           <ul className="space-y-4 text-[18px] font-medium text-[#6F6F6F] list-disc pl-5">
//             <li>100% digital loan processing</li>
//             <li>Access to multiple banks in one place</li>
//             <li>Expert EMI planning support</li>
//             <li>Faster approval & disbursement</li>
//             <li>Faster approval & disbursement</li>
//             <li>Transparent and trustworthy loan management</li>
//           </ul>
//         </div>

//       </div>
//     </div>

//   </div>
// </section>


// <section className="w-full py-8 sm:py-10">
//   <div className="max-w-[760px] bg-[#F7F7F7] mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  border border-[#EAEAEA] rounded-[12px] ">

//     {/* Heading */}
//     <h2 className="text-center lg:text-left  text-[22px] sm:text-[24px] lg:text-[26px] font-semibold text-[#2F965C] mb-3">
//       How it works?
//     </h2>

//     <p className="text-center lg:text-left text-[15px] sm:text-[16px] lg:text-[18px] text-[#868686] mx-auto mb-10 leading-relaxed max-w-[680px]">
//       Follow our streamlined 7-step process to register your Limited Liability Partnership.
//       We handle everything from consultation to certificate delivery with complete transparency.
//     </p>

//     {/* Steps */}
//     <div className="relative pl-12 sm:pl-16 lg:pl-60 flex flex-col gap-8 sm:gap-10">

//       {/* Vertical Line */}
//       <span className="absolute left-[18px] sm:left-[24px] lg:left-[200px] top-1 bottom-1 w-px bg-[#D6D6D6]" />

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
//         <div key={index} className="relative flex gap-6 sm:gap-8">

//           {/* Dot on line */}
//           <span className="absolute left-[-32px] sm:left-[-46px] top-[6px] w-3 h-3 rounded-full bg-[#2F965C]" />

//           {/* Content */}
//           <div>
//             <div className="w-6 h-6 sm:w-7 sm:h-7 mb-2 flex items-center justify-center">
//               <img src={step.icon} alt="" className="w-full h-full object-contain" />
//             </div>

//             <p className="text-[16px] sm:text-[18px] font-medium text-[#868686] mb-1">
//               {step.title}
//             </p>

//             <p className="text-[13px] sm:text-[14px] text-[#9A9A9A] max-w-[420px]">
//               {step.desc}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>


// <section
//   className="w-full py-10 sm:py-12 md:py-16 mb-10 relative bg-cover bg-center"
//   style={{
//     backgroundImage: "url('/image/bg-finance.jpg')",
//   }}
// >
//   {/* BACKGROUND OVERLAY */}
//   <div className="absolute inset-0 bg-white/80 sm:bg-white/70" />

//   {/* INNER SHADOW */}
//   <div className="absolute inset-0 pointer-events-none shadow-[inset_0_6px_12px_rgba(0,0,0,0.25)]" />

//   {/* CONTENT */}
//   <div className="relative max-w-[1347px] mx-auto px-4 sm:px-6">

//     {/* Title */}
//     <h2 className="text-center text-[20px] sm:text-[22px] md:text-[28px] font-semibold mb-8 md:mb-12 text-[#2F965C]">
//       Assured By Fetch True
//     </h2>

//     {/* Grid */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-6 sm:gap-y-8 md:gap-y-10">

//       {/* LEFT COLUMN */}
//       <div className="space-y-6 sm:space-y-8 md:space-y-10">
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
//         ].map((item, i) => (
//           <div key={i} className="flex items-start gap-3 sm:gap-4">
//             <img
//               src="/image/Group (1).png"
//               className="w-[32px] h-[34px] sm:w-[42px] sm:h-[45px] md:w-[47px] md:h-[50px]"
//               alt=""
//             />
//             <div>
//               <h4 className="font-semibold text-[16px] sm:text-[18px] md:text-[24px] text-[#232323]">
//                 {item.title}
//               </h4>
//               <p className="text-[14px] sm:text-[15px] md:text-[20px] text-[#868686]">
//                 {item.desc}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* RIGHT COLUMN */}
//       <div className="space-y-6 sm:space-y-8 md:space-y-10">
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
//         ].map((item, i) => (
//           <div key={i} className="flex items-start gap-3 sm:gap-4">
//             <img
//               src="/image/Group (1).png"
//               className="w-[32px] h-[34px] sm:w-[42px] sm:h-[45px] md:w-[47px] md:h-[50px]"
//               alt=""
//             />
//             <div>
//               <h4 className="font-semibold text-[16px] sm:text-[18px] md:text-[24px] text-[#232323]">
//                 {item.title}
//               </h4>
//               <p className="text-[14px] sm:text-[15px] md:text-[20px] text-[#868686]">
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

// {/* <div className="max-w-[1400px] bg-[#F7F7F7] mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  border border-[#EAEAEA] rounded-[12px] mt-8">
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
// </div> */}

// <div className="max-w-[1400px] bg-[#F7F7F7] mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  border border-[#EAEAEA] rounded-[12px] mt-8">
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
// </div>

// <div className="max-w-[1400px] bg-[#F7F7F7] mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  border border-[#EAEAEA] rounded-[12px] mt-8">
// <RatingsReviews
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
// </div>

// <ConnectBar
//   title="Legal Service Manager"
//   phoneLink="tel:+919999999999"
//   emailLink="mailto:legal@example.com"
//   checkoutLink="/legal/checkout"
//   shareLink="/legal/share"
// />



//     </>
//   );
// }



"use client";

import ConnectBar from "@/src/components/Section/ConnectBar";
import FAQs from "@/src/components/Section/FAQ";
import MoreInformation from "@/src/components/Section/MoreInformationSection";
import RatingsReviews from "@/src/components/Section/RatingReviews";
import TermsConditions from "@/src/components/Section/TermsandCondition";
import TermsConditionsModal from "@/src/components/Section/termsandconditionPopup";
import { useCheckout } from "@/src/context/CheckoutContext";
import { useFranchiseModel } from "@/src/context/FranchiseContext";
import { useReview } from "@/src/context/ReviewContext";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import { ChevronLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

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

export default function FinanceDetailPage() {

  const { moduleId, serviceId } = useParams<{
    moduleId: string;
    serviceId: string;
  }>();

  const { service, loading, error, fetchServiceDetails } = useServiceDetails();
    const { models, fetchFranchiseModels, franchiseloading } = useFranchiseModel();
    const { reviewServices, fetchReviews } = useReview();
    const initialized = useRef(false);
    const { selectedPackage, setSelectedPackage } = useCheckout();
    const [openTC, setOpenTC] = useState(false);
    
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
      fetchReviews(serviceId)
    }, [serviceId]);
    
    
      console.log("service Id:",serviceId)

const franchiseCards = useMemo(() => {
  return (
    service?.serviceDetails?.packages?.map((pkg) => ({
      serviceModel: pkg,
    })) || []
  );
}, [service]);

useEffect(() => {
  if (!initialized.current && franchiseCards.length > 0) {
    const firstPackage = franchiseCards[0].serviceModel;

    setSelectedPackage(
      {
        _id: firstPackage._id,
        name: firstPackage.name,
        price: firstPackage.price,
        discount: firstPackage.discount,
        discountedPrice: firstPackage.discountedPrice,
      },
      serviceId
    );

    initialized.current = true;
  }
}, [franchiseCards, serviceId]);

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

    <Link href={`/MainModules/Finance/${moduleId}`}>
      <span className="flex items-center gap-2 text-[#1a0b05] font-medium text-[16px] sm:text-[18px] hover:underline">

        <ChevronLeft size={20} className="cursor-pointer" />

        Service Details

      </span>
    </Link>


    {/* RIGHT : Actions */}

    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 w-full lg:w-auto">

     
 {/* <p className="bg-gray-200 text-gray-700 px-3 py-2 rounded text-[13px] sm:text-[14px] whitespace-nowrap">

        Selected Package :-
        ₹{selectedPackageData?.price?.toLocaleString() || 0}

      </p> */}

      <Link
        href={
          selectedPackage?._id
            ? `/MainModules/Checkout?serviceId=${serviceId}&packageId=${selectedPackage._id}`
            : "#"
        }
      >

        <button
          className="bg-green-500 hover:bg-green-600 text-white
                     px-4 sm:px-5 py-2 rounded
                     flex items-center gap-2 text-[13px] sm:text-[14px] whitespace-nowrap"
        >

          Check out

        </button>

      </Link>


      <button
        onClick={() => handleSocialShare("whatsapp")}
        className="bg-blue-600 hover:bg-blue-700 text-white
                   px-4 sm:px-5 py-2 rounded
                   flex items-center gap-2 text-[13px] sm:text-[14px]"
      >

        <Share2 size={16} />

        Share

      </button>

    </div>

  </div>

</section>
    <section className="w-full bg-white">
      
      <div
        className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-[32px] lg:gap-[42px] px-4 sm:px-6 lg:px-[36px] py-10 lg:py-[75px] bg-white"
        style={{
          boxShadow: "0px 0px 24px 1px rgba(0,0,0,0.10)",
        }}
      >
        {/* Left Image */}
        <div className="w-full lg:w-[692px] h-[260px] sm:h-[360px] lg:h-[480px] bg-[#F3F6E0] rounded overflow-hidden flex items-center justify-center">
          <img
            src={service?.bannerImages?.[0]}
            alt={service?.serviceName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[634px] px-0 lg:px-[6px] lg:mt-5 flex flex-col gap-[20px] lg:gap-[24px]">
          
          {/* Title */}
          <div>
            <h2 className="text-[26px] sm:text-[24px] lg:text-[34px] font-medium text-[#1E1E1E]">
              {serviceName}
            </h2>
            <p className="text-[16px] sm:text-[16px] lg:text-[24px] text-[#7A7A7A]">
              {service.category?.name}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 text-[14px] sm:text-[16px] lg:text-[22px] text-[#7A7A7A]">
            <span className="text-[#F4B400]">★</span>
            <span className="font-medium text-[#1E1E1E]">{service.averageRating?.toFixed(1)}</span>
            <span>({service.totalReviews}+ reviews)</span>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {service.keyValues?.map((item) => (
              <div
                key={item._id}
                className="border border-[#2FA44F] rounded-md p-3 flex gap-3 items-start"
              >
                <span className="text-white text-[16px] lg:text-[20px] bg-[#2F965C] p-2 rounded">
                  <img src={item.icon} alt={item.key} className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-[14px] lg:text-[18px] font-medium">
                    {item.key}
                  </p>
                  <p className="text-[12px] lg:text-[14px] text-[#7A7A7A]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Franchise Commission */}
          <div className="bg-[#DFF4E6] rounded-md px-4 py-3 flex justify-between items-center">
            <div>
              <p className="text-[14px] lg:text-[18px] font-medium text-[#1E1E1E]">
                Franchise Commission
              </p>
              <p className="text-[18px] lg:text-[22px] font-semibold text-[#2FA44F]">
                Earn Up to {service?.franchiseDetails?.commission}
              </p>
            </div>
            <span
  className="cursor-pointer text-[#2FA44F]"
  onClick={() => setOpenTC(true)}
>
  T&C &gt;
</span>
          </div>
        </div>
      </div>
    </section>

      <section className="w-full lg:py-10 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="bg-[#F7F7F7] rounded-xl p-6 sm:p-8">

          {/* Title */}
          <h3 className="text-[24px] lg:text-[30px] font-medium text-[#2F965C] mb-6">
            Benefits
          </h3>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-15 lg:ms-10">
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
      </div>
    </section>

      <section className="w-full py-10 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="bg-[#F7F7F7] rounded-xl p-6 sm:p-8">

          {/* Title */}
          <h3 className="text-[24px] lg:text-[30px] font-medium text-[#1FA463] mb-4">
            Overview
          </h3>
{service?.serviceDetails?.aboutUs && (
            <div className="text-[#868686] text-[18px] lg:text-[22px]"
            dangerouslySetInnerHTML={{ __html: aboutHtml }}>
          
            </div>
            )}

          {/* Includes */}
          {/* <p className="text-[18px] lg:text-[20px] font-medium text-[#5F5F5F] mb-4">
            Includes:
          </p> */}

          {/* List */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
            <div className="flex items-start gap-3">
              <span className="text-[#5F5F5F] text-[24px]">•</span>
              <p className="text-[18px] lg:text-[20px] text-[#5F5F5F]">
                Pre-loan consultation & eligibility check
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#5F5F5F] text-[24px]">•</span>
              <p className="text-[18px] lg:text-[20px] text-[#5F5F5F]">
                Loan application tracking & support
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#5F5F5F] text-[24px]">•</span>
              <p className="text-[18px] lg:text-[20px] text-[#5F5F5F]">
                Documentation and credit score review
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#5F5F5F] text-[24px]">•</span>
              <p className="text-[18px] lg:text-[20px] text-[#5F5F5F]">
                Assistance till fund disbursement
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#5F5F5F] text-[24px]">•</span>
              <p className="text-[18px] lg:text-[20px] text-[#5F5F5F]">
                Bank comparison for best rates
              </p>
            </div>
          </div> */}

        </div>
      </div>
    </section>

       <section className="w-full py-10 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="bg-[#F7F7F7] rounded-xl px-6 py-8">

          {/* Title */}
          <h3 className="text-[24px] lg:text-[30px] font-medium text-[#1FA463] mb-8">
            Why Choose Us?
          </h3>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service?.serviceDetails?.whyChooseUs?.map((item) => (
              <div
                key={item._id}
                className="flex flex-col items-center text-center"
              >

                <h4 className="text-[18px] lg:text-[22px] font-medium text-[#606060] mb-2">
                  {item.title}
                </h4>

                <div className="mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>

               

                <p className="text-[16px] lg:text-[18px] text-[#868686] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>

        <section className="w-full py-10 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="border border-[#E5E5E5] rounded-xl px-6 py-8 bg-[#F7F7F7]">

          {/* Title */}
          <h3 className="text-[24px] lg:text-[30px] font-medium text-[#2F965C] mb-6">
            Whom to Sell?
          </h3>

          {/* Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 lg:ms-8">
            {service?.serviceDetails?.whomToSell?.map((item) => (
              <div key={item._id} className="flex items-start gap-3">
                
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-[28px] h-[28px] mt-[2px]"
                />

                <p className="text-[16px] lg:text-[20px] text-[#6B6B6B] leading-relaxed">
                  {item.lists}
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>

    <section className="w-full py-12">
  <div className="max-w-[1440px] mx-auto px-4">

    <div className="bg-[#F7F7F7] rounded-[12px] border border-[#EAEAEA] p-8 md:p-10">
      
      {/* Title */}
      <h2 className="text-[28px] lg:text-[32px] font-medium text-[#1F9D55] mb-8">
        Documents
      </h2>

      {/* Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Salaried */}
        <div>
          <h3 className="text-[22px] lg:text-[26px] font-semibold text-[#2F965C] mb-6">
            Salaried
          </h3>

           <ul className="space-y-4 text-[18px] font-medium text-[#6F6F6F] list-disc pl-5">
            {service?.serviceDetails?.weRequired.map((item) => (
                        <li
                          key={item._id}
                          className="flex items-start gap-3 text-[16px] sm:text-[18px] md:text-[20px] text-[#606060]"
                        >
                     
                          {item.title}
                        </li>
                      ))}
          </ul>
        </div>

        {/* Self Employed */}
        <div>
          <h3 className="text-[22px] lg:text-[28px] font-semibold text-[#2F965C] mb-6">
            Self Employed
          </h3>

          <ul className="space-y-4 text-[18px] font-medium text-[#6F6F6F] list-disc pl-5">
            {service?.serviceDetails?.weDeliver.map((item) => (
                        <li
                          key={item._id}
                          className="flex items-start gap-3 text-[16px] sm:text-[18px] md:text-[20px] text-[#606060]"
                        >
                     
                          {item.title}
                        </li>
                      ))}
          </ul>
        </div>

      </div>
    </div>

  </div>
</section>


<section className="w-full py-8 sm:py-10">
  <div className="max-w-[760px] bg-[#F7F7F7] mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  border border-[#EAEAEA] rounded-[12px] ">

    {/* Heading */}
    <h2 className="text-center lg:text-left  text-[22px] sm:text-[24px] lg:text-[26px] font-semibold text-[#2F965C] mb-3">
      How it works?
    </h2>

    <p className="text-center lg:text-left text-[15px] sm:text-[16px] lg:text-[18px] text-[#868686] mx-auto mb-10 leading-relaxed max-w-[680px]">
      Follow our streamlined 7-step process to register your Limited Liability Partnership.
      We handle everything from consultation to certificate delivery with complete transparency.
    </p>

    {/* Steps */}
    <div className="relative pl-12 sm:pl-16 lg:pl-60 flex flex-col gap-8 sm:gap-10">

      {/* Vertical Line */}
      <span className="absolute left-[18px] sm:left-[24px] lg:left-[200px] top-1 bottom-1 w-px bg-[#D6D6D6]" />

      {/* Step */}
      {service?.serviceDetails?.howItWorks.map((item) => (
        <div key={item._id} className="relative flex gap-6 sm:gap-8">

          {/* Dot on line */}
          <span className="absolute left-[-32px] sm:left-[-46px] top-[6px] w-3 h-3 rounded-full bg-[#2F965C]" />

          {/* Content */}
          <div>
            <div className="w-6 h-6 sm:w-7 sm:h-7 mb-2 flex items-center justify-center">
              <img src={item.icon} alt="" className="w-full h-full object-contain" />
            </div>

            <p className="text-[16px] sm:text-[18px] font-medium text-[#868686] mb-1">
              {item.title}
            </p>

            <p className="text-[13px] sm:text-[14px] text-[#9A9A9A] max-w-[420px]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<section
  className="w-full py-10 sm:py-12 md:py-16 mb-10 relative bg-cover bg-center"
  style={{
    backgroundImage: "url('/image/bg-finance.jpg')",
  }}
>
  {/* BACKGROUND OVERLAY */}
  <div className="absolute inset-0 bg-white/80 sm:bg-white/70" />

  {/* INNER SHADOW */}
  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_6px_12px_rgba(0,0,0,0.25)]" />

  {/* CONTENT */}
  <div className="relative max-w-[1347px] mx-auto px-4 sm:px-6">

    {/* Title */}
    <h2 className="text-center text-[20px] sm:text-[22px] md:text-[28px] font-semibold mb-8 md:mb-12 text-[#2F965C]">
      Assured By Fetch True
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-6 sm:gap-y-8 md:gap-y-10">

      {/* LEFT COLUMN */}
        {service?.serviceDetails?.assuredByFetchTrue.map((item, i) => (
          <div key={i} className="flex items-start gap-3 sm:gap-4">
            <img
              src={item.icon}
              className="w-[32px] h-[34px] sm:w-[42px] sm:h-[45px] md:w-[47px] md:h-[50px]"
              alt=""
            />
            <div>
              <h4 className="font-semibold text-[16px] sm:text-[18px] md:text-[24px] text-[#232323]">
                {item.title}
              </h4>
              <p className="text-[14px] sm:text-[15px] md:text-[20px] text-[#868686]">
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

<div className="max-w-[1400px] bg-[#F7F7F7] mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  border border-[#EAEAEA] rounded-[12px] mt-8">
<TermsConditions
  heading="Terms & Conditions"
  html={service?.serviceDetails?.termsAndConditions?.join("") || ""}
/>
</div>

<div className="max-w-[1400px] bg-[#F7F7F7] mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  border border-[#EAEAEA] rounded-[12px] mt-8">
<FAQs
  title="FAQs"
      items={service?.serviceDetails?.faq.map((item) => ({
        question: item.question,
        answer: item.answer,
      }))}
/>
</div>

<div className="max-w-[1400px] bg-[#F7F7F7] mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  border border-[#EAEAEA] rounded-[12px] mt-8">
{reviewServices && (
  <div className="max-w-[1400px] bg-[#F7F7F7] mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 border border-[#EAEAEA] rounded-[12px] mt-8">
    <RatingsReviews
      title="Ratings & Reviews"
      subtitle="Complete overview of service experience."
      averageRating={reviewServices.averageRating}
      totalRatings={reviewServices.totalReviews}
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

</div>

<ConnectBar
  title={service?.serviceDetails?.connectWith?.[0]?.name}
      phoneLink={`tel:${service?.serviceDetails?.connectWith?.[0]?.mobileNo}`}
      emailLink={`mailto:${service?.serviceDetails?.connectWith?.[0]?.email}`}
      checkoutLink={`/checkout/${service?._id}`}
      shareLink={`/service/${service?._id}`}
/>

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