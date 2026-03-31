// import Image from "next/image";
// import MoreInformation from "@/src/components/Section/MoreInformationSection";
// import TermsConditions from "@/src/components/Section/TermsandCondition";
// import FAQs from "@/src/components/Section/FAQ";
// import ConnectBar from "@/src/components/Section/ConnectBar";
// import RatingsReviews from "@/src/components/Section/RatingReviews";
// export default function AIHubServiceDetailPage() {
//   return (
//      <section className="relative min-h-screen w-full overflow-hidden bg-[#D0E0E7DB] backdrop-blur-sm">


//       {/* FULL PAGE BACKGROUND */}
//      <div
//         className="fixed inset-0 -z-10"
//         style={{
//           backgroundImage: "url('/image/Group2.png')",
//           backgroundRepeat:"repeat ",
//           backgroundSize: "contain",

//           backgroundPosition:"center",
//         }}
//       />
//       <div
//         className="fixed inset-0 -z-10"
//         style={{
//           backgroundImage: "url('/image/Group (7).png')",
//           backgroundRepeat:"repeat ",
//           backgroundSize: "contain",

//           backgroundPosition:"center",
//         }}
//       />

//       {/* CONTENT */}
//       <section
//   className="relative w-full py-6 sm:py-8"
//   // style={{
//   //   background: "linear-gradient(135deg, #E3EEF3 0%, #D8E8EE 100%)",
//   // }}
// >
//   <div className="max-w-[1440px] mx-auto bg-[#FFFFFF80] border border-white rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10">

//     {/* LEFT IMAGE */}
//     <div className="w-full md:w-[45%]">
//       <Image
//         src="/image/AiHome.jpg"
//         alt="AI Service"
//         width={596}
//         height={400}
//         className="w-full h-[300px] sm:h-[280px] md:h-[500px] rounded-2xl object-cover"
//       />
//     </div>

//     {/* RIGHT CONTENT */}
//     <div className="w-full md:w-[55%] lg:py-12">

//       <h1 className="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[36px] font-medium text-[#232323] mb-1">
//         AI Chatbot & Automation Service
//       </h1>

//       <p className="text-[#868686] text-[16px] sm:text-[18px] lg:text-[26px] mb-2">
//         On Demand Service
//       </p>

//       {/* Rating */}
//       <div className="flex items-center gap-2 mb-4">
//         <span className="text-[#FDC700] text-[18px]">★</span>
//         <span className="text-[14px] sm:text-[16px] lg:text-[20px] text-[#868686]">
//           4.8 <span>(2,400+ reviews)</span>
//         </span>
//       </div>

//       {/* Price */}
//       <div className="flex flex-wrap items-center gap-3 sm:gap-6 border border-[#BEBEBE] rounded-lg px-4 py-3 mb-5">
//         <img src="/image/rupee.png" className="w-5 h-5" />
//         <p className="text-[16px] sm:text-[18px] text-[#868686]">
//           Starting{" "}
//           <span className="font-medium text-[20px] sm:text-[22px] text-[#232323]">
//             ₹3,999/
//           </span>
//           <span className="text-[14px]"> Per Month</span>
//         </p>
//       </div>

//       {/* Features */}
//       <div className="grid grid-cols-3 gap-4 mb-6">
//         {[
//           { icon: "⚡", label: "Setup", value: "1–3 days" },
//           { icon: "🧠", label: "AI Training", value: "Included" },
//           { icon: "🛠️", label: "Maintenance", value: "Auto-managed" },
//         ].map((item, i) => (
//           <div key={i} className="flex items-center gap-3">
//             <span className="text-[18px]">{item.icon}</span>
//             <div>
//               <p className="text-[13px] text-[#8B8B8B]">{item.label}</p>
//               <p className="text-[14px] font-medium">{item.value}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Commission */}
//       <div className="border-2 border-[#6E3B2E] rounded-xl px-4 sm:px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//         <div>
//           <p className="text-[14px] sm:text-[16px] font-medium text-[#1F1F1F]">
//             Franchise Commission
//           </p>
//           <p className="text-[20px] sm:text-[26px] font-semibold text-[#2CB140]">
//             Earn Up to 7%
//           </p>
//         </div>

//         <button className="text-[14px] font-medium flex items-center gap-1">
//           T&C <span className="text-[18px]">›</span>
//         </button>
//       </div>

//     </div>
//   </div>
// </section>


//       <section className="w-full py-10 md:py-14 overflow-hidden">
      
//   <div className="max-w-[1440px] mx-auto px-4" >

//     {/* Heading */}
//     <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#00A7C7] mb-6">
//       Benefits
//     </h2>

//     {/* Card */}
//     <div className="bg-white/60 backdrop-blur rounded-2xl px-6 sm:px-10 py-8 border border-white">

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-8">

//         {/* COLUMN 1 */}
//         <div className="space-y-7">
//           <div className="flex items-center gap-4">
//             <img src="/icons/nlp.svg" className="w-8 h-8" />
//             <p className="text-[16px] text-[#4F4F4F]">
//               Intelligent NLP Processing
//             </p>
//           </div>

//           <div className="flex items-center gap-4">
//             <img src="/icons/robot.svg" className="w-8 h-8" />
//             <p className="text-[16px] text-[#4F4F4F]">
//               Automated Sales & Support
//             </p>
//           </div>
//         </div>

//         {/* COLUMN 2 */}
//         <div className="space-y-7">
//           <div className="flex items-center gap-4">
//             <img src="/icons/chat.svg" className="w-8 h-8" />
//             <p className="text-[16px] text-[#4F4F4F]">
//               Custom Conversation Flows
//             </p>
//           </div>

//           <div className="flex items-center gap-4">
//             <img src="/icons/rocket.svg" className="w-8 h-8" />
//             <p className="text-[16px] text-[#4F4F4F]">
//               Increased Conversions
//             </p>
//           </div>
//         </div>

//         {/* COLUMN 3 */}
//         <div className="space-y-7">
//           <div className="flex items-center gap-4">
//             <img src="/icons/support.svg" className="w-8 h-8" />
//             <p className="text-[16px] text-[#4F4F4F]">
//               24/7 Availability
//             </p>
//           </div>

//           <div className="flex items-center gap-4">
//             <img src="/icons/globe.svg" className="w-8 h-8" />
//             <p className="text-[16px] text-[#4F4F4F]">
//               Omni-Channel Integration
//             </p>
//           </div>

//           <div className="flex items-center gap-4">
//             <img src="/icons/scale.svg" className="w-8 h-8" />
//             <p className="text-[16px] text-[#4F4F4F]">
//               Scalable Architecture
//             </p>
//           </div>
//         </div>

//       </div>
//     </div>

//   </div>
// </section>

// <section className="relative w-full py-10 sm:py-14 md:py-16 overflow-hidden">

//   {/* BACKGROUND */}
//   <div
//     className="absolute inset-0"
//     // style={{
//     //   background: `
//     //     linear-gradient(135deg, #E3EEF3 0%, #D8E8EE 100%)
//     //   `,
//     // }}
//   />

//   {/* SOFT TECH PATTERN OVERLAY */}
//   <div className="absolute inset-0 opacity-20 bg-[url('/image/tech-pattern.png')] bg-cover bg-center" />

//   {/* CONTENT */}
//   <div className="relative max-w-[1440px] mx-auto px-4">

//     {/* Heading */}
//     <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#00A7C7] mb-6">
//       About Us
//     </h2>

//     {/* Card */}
//     <div className="bg-[#FFFFFF80] backdrop-blur-md rounded-2xl border-2px border-from-[#FFFFFF]-to-[#F3F3F5] px-6 sm:px-10 py-6 sm:py-8 shadow-sm">

//       <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#6A6A6A] leading-relaxed">
//         AI Chatbot Development Service helps businesses automate conversations,
//         enhance customer support, and deliver instant, intelligent responses
//         across platforms. Our professionals create chatbots that comprehend
//         inquiries, tailor interactions, and deliver flawless user experiences
//         using sophisticated NLP (Natural Language Processing), machine learning
//         models, intent mapping, behavior flows, and unique AI logic.
//       </p>

//     </div>
//   </div>
// </section>

// <section className="relative w-full py-10 sm:py-14 md:py-16 overflow-hidden">

//   {/* BACKGROUND */}
//   <div
//     className="absolute inset-0"
//     // style={{
//     //   background: `
//     //     linear-gradient(135deg, #E3EEF3 0%, #D8E8EE 100%)
//     //   `,
//     // }}
//   />

//   {/* TECH PATTERN */}
//   <div className="absolute inset-0 opacity-20 bg-[url('/image/Group (6).png')] bg-cover bg-center" />

//   {/* CONTENT */}
//   <div className="relative max-w-[1440px] mx-auto px-4">

//     {/* Heading */}
//     <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#00A7C7] mb-8">
//       Why Choose Us?
//     </h2>

//     {/* MAIN CARD */}
//     <div className="bg-[#FFFFFF80] backdrop-blur-md rounded-2xl border border-white p-6 sm:p-10">

//       {/* GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

//         {/* CARD */}
//         {[
//           {
//             title: "Expert AI Developers",
//             desc: "Professionals skilled in NLP, machine learning, automation, and multi-platform bot development.",
//             icon: "/image/icon-bot.png",
//           },
//           {
//             title: "Fast Deployment",
//             desc: "Quick implementation with real-time revisions.",
//             icon: "/image/icon-clock.png",
//           },
//           {
//             title: "Business-Focused Chatbot Logic",
//             desc: "Designed to match your industry, audience behavior, and communication style.",
//             icon: "/image/icon-briefcase.png",
//           },
//           {
//             title: "Brand-Aligned Personality",
//             desc: "Tone, style, and conversational flow that reflect your brand voice.",
//             icon: "/image/icon-brand.png",
//           },
//           {
//             title: "Accurate & Engaging Responses",
//             desc: "Clear and conversational replies that improve customer trust.",
//             icon: "/image/icon-send.png",
//           },
//           {
//             title: "Dedicated Chatbot Coordinator",
//             desc: "Smooth communication and consistent project management.",
//             icon: "/image/icon-sync.png",
//           },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="bg-[#FFFFFF80] border-1px border-[#FDFDFD] rounded-xl p-5 sm:p-6 flex gap-4 items-start shadow-sm"
//           >
//             <img
//               src={item.icon}
//               alt=""
//               className="w-9 h-9 sm:w-10 sm:h-10"
//             />

//             <div>
//               <h4 className="text-[16px] sm:text-[18px] font-semibold text-[#4A4A4A] mb-1">
//                 {item.title}
//               </h4>
//               <p className="text-[14px] sm:text-[15px] text-[#7A7A7A] leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           </div>
//         ))}

//       </div>
//     </div>
//   </div>
// </section>

// <section className="relative w-full py-10 sm:py-14 md:py-16 overflow-hidden">

//   {/* BACKGROUND */}
//   <div
//     className="absolute inset-0"
//     // style={{
//     //   background: `
//     //     linear-gradient(135deg, #E3EEF3 0%, #D8E8EE 100%)
//     //   `,
//     // }}
//   />

//   {/* SUBTLE TECH PATTERN */}
//   <div className="absolute inset-0 opacity-20 bg-[url('/image/tech-pattern.png')] bg-cover bg-center" />

//   {/* CONTENT */}
//   <div className="relative max-w-[1440px] mx-auto px-4">

//     {/* Heading */}
//     <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#00A7C7] mb-6">
//       Select Package
//     </h2>

//     {/* OUTER CONTAINER */}
//     <div className="bg-white/60 backdrop-blur-md rounded-2xl border border-white p-6 sm:p-8 md:p-10">

//       {/* GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

//         {/* CARD */}
//         {[
//           {
//             title: "Basic",
//             price: "₹4,999/-",
//             features: [
//               "Auto reply for 20 FAQs",
//               "Website chat widget",
//               "1 Language support (English OR Hindi/Marathi)",
//               "Basic lead collection",
//               "Monthly performance report",
//             ],
//           },
//           {
//             title: "Standard",
//             price: "₹9,999/-",
//             features: [
//               "Auto reply for 50 FAQs",
//               "Multi-language (English + Local)",
//               "Lead qualification + Call to action",
//               "Appointment booking flow",
//               "Weekly improvement update",
//             ],
//           },
//           {
//             title: "Premium",
//             price: "₹2,499/-",
//             features: [
//               "Auto reply for UNLIMITED FAQs",
//               "WhatsApp + Website + Instagram + App",
//               "Custom workflows (Ex: pricing, form fill)",
//               "AI Training based on Industry",
//               "Daily AI improvement & analytics dashboard",
//             ],
//           },
//         ].map((pkg, index) => (
//           <div
//             key={index}
//             className="bg-white/70 rounded-xl p-6 sm:p-7 shadow-sm flex flex-col"
//           >
//             {/* Title */}
//             <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#2F2F2F] mb-3">
//               {pkg.title}
//             </h3>

//             <hr className="mb-4" />

//             {/* Includes */}
//             <p className="text-[14px] font-medium text-[#6F6F6F] mb-2">
//               Includes
//             </p>

//             <ul className="space-y-2 text-[14px] text-[#7A7A7A] mb-6">
//               {pkg.features.map((item, i) => (
//                 <li key={i} className="flex gap-2">
//                   <span>•</span>
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>

//             {/* PRICE */}
//             <div className="mt-auto">
//               <p className="text-[20px] sm:text-[22px] font-semibold text-[#00A7C7]">
//                 {pkg.price}
//               </p>
//               <p className="text-[13px] text-[#8A8A8A] mb-4">
//                 Per Month
//               </p>

//               {/* BUTTON */}
//               <button className="w-full bg-[#00A7C7] hover:bg-[#0092AE] text-white text-[14px] font-medium py-2.5 rounded-full transition">
//                 Get It Now
//               </button>
//             </div>
//           </div>
//         ))}

//       </div>
//     </div>
//   </div>
// </section>

// <section className="relative w-full py-10 sm:py-14 md:py-16 overflow-hidden">

//   {/* BACKGROUND */}
//   <div
//     className="absolute inset-0"
//     // style={{
//     //   background: `
//     //     linear-gradient(135deg, #E4EFF4 0%, #D9E9EF 100%)
//     //   `,
//     // }}
//   />

//   {/* TECH PATTERN OVERLAY */}
//   <div className="absolute inset-0 opacity-25 bg-[url('/image/tech-pattern.png')] bg-cover bg-center" />

//   {/* CONTENT */}
//   <div className="relative max-w-[1440px] mx-auto px-4">

//     {/* SECTION TITLE */}
//     <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#00A7C7] mb-6">
//       Documents
//     </h2>

//     {/* OUTER CARD */}
//     <div className="bg-white/60 backdrop-blur-md rounded-2xl border border-white p-6 sm:p-8 md:p-10">

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

//         {/* LEFT */}
//         <div>
//           <div className="bg-[#00A7C7] text-white text-center py-2 rounded-full font-medium mb-4">
//             We Required
//           </div>

//           <div className="bg-white/80 rounded-xl p-5 space-y-3">
//             {[
//               "Business goals & chatbot purpose",
//               "List of FAQs or common questions",
//               "Preferred tone (formal, friendly, brand voice)",
//               "Brand guidelines (logo, colors, fonts)",
//               "Platform for deployment (Web/App/WhatsApp)",
//               "Required integrations (CRM, billing, support tools)",
//               "Usage Needs (where logo will be used)",
//             ].map((item, i) => (
//               <div key={i} className="flex gap-3 text-[#6F6F6F] text-[14px]">
//                 <span className="text-green-500">✔</span>
//                 <span>{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div>
//           <div className="bg-[#00A7C7] text-white text-center py-2 rounded-full font-medium mb-4">
//             We Deliver
//           </div>

//           <div className="bg-white/80 rounded-xl p-5 space-y-3">
//             {[
//               "Custom chatbot design & development",
//               "Conversation flows & AI training data",
//               "Integration setup (API/CRM/WhatsApp)",
//               "Admin dashboard access",
//               "Performance reports & QA testing summary",
//               "Deployment files & API documentation",
//               "Billing & service agreement",
//             ].map((item, i) => (
//               <div key={i} className="flex gap-3 text-[#6F6F6F] text-[14px]">
//                 <span className="text-green-500">✔</span>
//                 <span>{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   </div>
// </section>


// <section className="w-full py-10 sm:py-12 md:py-16 relative">
//   <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

//     {/* TITLE */}
//     <h2 className="text-[20px] sm:text-[22px] md:text-[26px] font-semibold text-[#00A7C7] mb-8">
//       How It Works?
//     </h2>

//     {/* GRID */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//       {/* LEFT COLUMN */}
//       <div className="space-y-6">

//         {/* CARD 1 */}
//         <div className="bg-white rounded-xl p-5 flex gap-4 shadow-sm">
//           <img src="/image/icons/explore.png" className="w-8 h-8" alt="" />
//           <div>
//             <h4 className="font-semibold text-[15px] sm:text-[16px]">
//               Explore the Service
//             </h4>
//             <p className="text-[13px] sm:text-[14px] text-[#6F6F6F] mt-1">
//               See how automation may improve your customer experiences by
//               looking through the Fetch True Apps AI Chatbot Development section.
//             </p>
//           </div>
//         </div>

//         {/* CARD 2 */}
//         <div className="bg-white rounded-xl p-5 flex gap-4 shadow-sm">
//           <img src="/image/icons/connect.png" className="w-8 h-8" alt="" />
//           <div>
//             <h4 className="font-semibold text-[15px] sm:text-[16px]">
//               Connect with AI Experts
//             </h4>
//             <p className="text-[13px] sm:text-[14px] text-[#6F6F6F] mt-1">
//               Fetch True connects you with developers who are knowledgeable
//               on machine learning, NLP, AI models, and API automation.
//             </p>
//           </div>
//         </div>

//         {/* CARD 3 */}
//         <div className="bg-white rounded-xl p-5 flex gap-4 shadow-sm">
//           <img src="/image/icons/process.png" className="w-8 h-8" alt="" />
//           <div>
//             <h4 className="font-semibold text-[15px] sm:text-[16px]">
//               Total Process Control
//             </h4>
//             <p className="text-[13px] sm:text-[14px] text-[#6F6F6F] mt-1">
//               Fetch True oversees the entire cycle including requirement analysis,
//               flow creation, training data preparation, development, testing,
//               and deployment.
//             </p>
//           </div>
//         </div>

//       </div>

//       {/* RIGHT COLUMN */}
//       <div className="space-y-6">

//         {/* CARD 4 */}
//         <div className="bg-white rounded-xl p-5 flex gap-4 shadow-sm">
//           <img src="/image/icons/development.png" className="w-8 h-8" alt="" />
//           <div>
//             <h4 className="font-semibold text-[15px] sm:text-[16px]">
//               Chatbot Development & Implementation
//             </h4>
//             <p className="text-[13px] sm:text-[14px] text-[#6F6F6F] mt-1">
//               Developers provide bespoke replies, intent systems,
//               conversation trees, AI training data, integrations,
//               and automation rules for chatbots.
//             </p>
//           </div>
//         </div>

//         {/* CARD 5 */}
//         <div className="bg-white rounded-xl p-5 flex gap-4 shadow-sm">
//           <img src="/image/icons/delivery.png" className="w-8 h-8" alt="" />
//           <div>
//             <h4 className="font-semibold text-[15px] sm:text-[16px]">
//               Final Reporting & Delivery
//             </h4>
//             <p className="text-[13px] sm:text-[14px] text-[#6F6F6F] mt-1">
//               Get training data sets, admin dashboard login information,
//               chatbot access, and full deployment manuals.
//             </p>
//           </div>
//         </div>

//         {/* CARD 6 */}
//         <div className="bg-white rounded-xl p-5 flex gap-4 shadow-sm">
//           <img src="/image/icons/support.png" className="w-8 h-8" alt="" />
//           <div>
//             <h4 className="font-semibold text-[15px] sm:text-[16px]">
//               On-Service & After-Service Support
//             </h4>
//             <p className="text-[13px] sm:text-[14px] text-[#6F6F6F] mt-1">
//               Fetch True helps with integrations, chatbot upgrades,
//               new processes, AI retraining, and performance enhancements.
//             </p>
//           </div>
//         </div>

//       </div>
//     </div>
//   </div>
// </section>

// <section
//   className="w-full py-12 mb-10 md:py-16 relative bg-cover bg-center bg-no-repeat"
//   style={{
//     backgroundImage: "url('/image/aiAssuredBg.jpg')",
//   }}
// >
//   {/* Dark Overlay for readability */}
//   <div className="absolute inset-0 bg-white/70" />

//   {/* Inner shadow */}
//   <div className="absolute inset-0 pointer-events-none shadow-[inset_0_6px_14px_rgba(0,0,0,0.25)]" />

//   <div className="relative max-w-[1347px] mx-auto px-4">
//     {/* Title */}
//     <h2 className="text-center text-[22px] sm:text-[24px] md:text-[28px] font-semibold text-[#3A3A3A] mb-10 md:mb-12">
//       Assured by Fetch True
//     </h2>

//     {/* Content Grid */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 md:gap-y-10">

//       {/* LEFT COLUMN */}
//       <div className="space-y-6 md:space-y-8">
//         {[
//           {
//             icon: "/image/Group (1).png",
//             title: "Customer Satisfaction:",
//             desc: "We provide up to 100% return if customer is not satisfied.",
//           },
//           {
//             icon: "/image/Group (1).png",
//             title: "Best Quality Assurance:",
//             desc: "We personally check all project quality before final delivery.",
//           },
//           {
//             icon: "/image/Group (1).png",
//             title: "End-to-End Execution:",
//             desc: "From connecting customer to expert to completion, we manage everything under one platform.",
//           },
//           {
//             icon: "/image/Group (1).png",
//             title: "Reschedule Anytime:",
//             desc: "If not satisfied, we reschedule providers for better results.",
//           },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="flex gap-4 p-5 sm:p-6 rounded-[14px]
//                        bg-white/50 backdrop-blur-md
//                        border border-white/60
//                        shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
//           >
//             <img
//               src={item.icon}
//               className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] shrink-0"
//               alt=""
//             />

//             <div>
//               <h4 className="font-semibold text-[16px] sm:text-[18px] md:text-[20px] text-[#2B2B2B]">
//                 {item.title}
//               </h4>
//               <p className="mt-1 text-[14px] sm:text-[15px] md:text-[16px] text-[#5F5F5F] leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* RIGHT COLUMN */}
//       <div className="space-y-6 md:space-y-8">
//         {[
//           {
//             icon: "/image/Group (1).png",
//             title: "Transparent Workflow:",
//             desc: "Complete visibility, transparent communication, and real-time tracking.",
//           },
//           {
//             icon: "/image/Group (1).png",
//             title: "On-Time Delivery Result:",
//             desc: "Guaranteed on-time completion ensuring campaigns are delivered exactly as scheduled.",
//           },
//           {
//             icon: "/image/Group (1).png",
//             title: "Trusted Platform:",
//             desc: "Fetch True ensures secure connections between clients and genuine professionals.",
//           },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="flex gap-4 p-5 sm:p-6 rounded-[14px]
//                        bg-white/50 backdrop-blur-md
//                        border border-white/60
//                        shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
//           >
//             <img
//               src={item.icon}
//               className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] shrink-0"
//               alt=""
//             />

//             <div>
//               <h4 className="font-semibold text-[16px] sm:text-[18px] md:text-[20px] text-[#2B2B2B]">
//                 {item.title}
//               </h4>
//               <p className="mt-1 text-[14px] sm:text-[15px] md:text-[16px] text-[#5F5F5F] leading-relaxed">
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

// {/* <div className="max-w-[1400px] bg-[#FFFFFF80] mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  border border-[#EAEAEA] rounded-[12px] mt-8">
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

// <div className="max-w-[1400px] bg-[#FFFFFF80] mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  border border-[#EAEAEA] rounded-[12px] mt-8">
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

// <div className="max-w-[1400px] bg-[#FFFFFF80] mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  border border-[#EAEAEA] rounded-[12px] mt-8">
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








//     </section>
//   );
// }

"use client";

import Image from "next/image";
import MoreInformation from "@/src/components/Section/MoreInformationSection";
import TermsConditions from "@/src/components/Section/TermsandCondition";
import FAQs from "@/src/components/Section/FAQ";
import ConnectBar from "@/src/components/Section/ConnectBar";
import ChooseProvider from "@/src/components/Section/ChooseProvider";

import RatingsReviews from "@/src/components/Section/RatingReviews";
import { useParams } from "next/navigation";
import { useReview } from "@/src/context/ReviewContext";
import { useFranchiseModel } from "@/src/context/FranchiseContext";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import { useEffect, useMemo, useRef, useState } from "react";
import { useServiceProviders } from "@/src/context/ServicewiseProviderContext";
import { ChevronLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { useCheckout } from "@/src/context/CheckoutContext";
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

export default function AIHubServiceDetailPage() {
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
                  fetchReviews(serviceId);
                  fetchProvidersByService(serviceId);
                }, [serviceId]);

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

                console.log("Service Details:", serviceId)

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
     <section className="relative min-h-screen w-full overflow-hidden bg-[#D0E0E7DB] backdrop-blur-sm">
      
<section className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/90 border-b">

  <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 px-4 sm:px-6 lg:px-12 py-3">

    {/* LEFT : Back Navigation */}

    <Link href={`/MainModules/AI-Hub/${moduleId}`}>
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

      {/* FULL PAGE BACKGROUND */}
     <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/image/Group2.png')",
          backgroundRepeat:"repeat ",
          backgroundSize: "contain",

          backgroundPosition:"center",
        }}
      />
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/image/Group (7).png')",
          backgroundRepeat:"repeat ",
          backgroundSize: "contain",

          backgroundPosition:"center",
        }}
      />

      {/* CONTENT */}
      <section
  className="relative w-full pt-25"
  // style={{
  //   background: "linear-gradient(135deg, #E3EEF3 0%, #D8E8EE 100%)",
  // }}
>
  <div className="max-w-[1440px] mx-auto bg-[#FFFFFF80] border border-white rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10">

    {/* LEFT IMAGE */}
    <div className="w-full md:w-[45%]">
      <Image
        src={service?.bannerImages?.[0]}
        alt={serviceName}
        width={596}
        height={400}
        className="w-full h-[300px] sm:h-[280px] md:h-[500px] rounded-2xl object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="w-full md:w-[55%] lg:py-12">

      <h1 className="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[36px] font-medium text-[#232323] mb-1">
        {serviceName}
      </h1>

      <p className="text-[#868686] text-[16px] sm:text-[18px] lg:text-[26px] mb-2">
        {service.category?.name}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[#FDC700] text-[18px]">★</span>
        <span className="text-[14px] sm:text-[16px] lg:text-[20px] text-[#868686]">
          {service.averageRating?.toFixed(1)} <span>({service.totalReviews}+ reviews)</span>
        </span>
      </div>

      {/* Price */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-6 border border-[#BEBEBE] rounded-lg px-4 py-3 mb-5">
        <img src="/image/Vector (34).png" className="w-5 h-5" />
        <p className="text-[16px] sm:text-[18px] text-[#868686]">
          Starting{" "} 
          <span className="font-medium text-[20px] sm:text-[22px] text-[#232323]">
             ₹{selectedPackage
  ? Math.floor(Number(selectedPackage.discountedPrice)).toLocaleString("en-IN")
  : 0}/
          </span>
          <span className="text-[16px]"> Per Month</span>
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {service?.keyValues.map((item) => (
          <div key={item._id} className="flex items-center gap-3">
            <img src={item.icon} className="w-6 h-6" />
            <div>
              <p className="text-[13px] text-[#8B8B8B]">{item.key}</p>
              <p className="text-[14px] font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Commission */}
      <div className="border-2 border-[#6E3B2E] rounded-xl px-4 sm:px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-[14px] sm:text-[16px] font-medium text-[#1F1F1F]">
            Franchise Commission
          </p>
          <p className="text-[20px] sm:text-[26px] font-semibold text-[#2CB140]">
            Earn Up to {service?.franchiseDetails?.commission}
          </p>
        </div>

         <span
  className="cursor-pointer"
  onClick={() =>{console.log("T&C clicked"); setOpenTC(true)}}
>
  T&C &gt;
</span>
      </div>

    </div>
  </div>
</section>


      <section className="w-full py-10 md:py-14 overflow-hidden">
      
  <div className="max-w-[1440px] mx-auto px-4" >

    {/* Heading */}
    <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#00A7C7] mb-6">
      Benefits
    </h2>

    {/* Card */}
    <div className="bg-white/60 backdrop-blur rounded-2xl px-6 sm:px-10 py-8 border border-white">


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-5 lg:ms-10">
                        {extractBenefits(service?.serviceDetails?.benefits).map((item, index) => (
                          <div key={index} className="flex items-center gap-3 lg:ms-15">
                            {/* <div className="text-[#BC9958] text-[22px]">
                              {item.icon}
                            </div> */}
                            <p className="text-[20px] lg:text-[22px] text-[#606060] font-medium">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>

    </div>

  </div>
</section>

<section className="relative w-full py-10 sm:py-14 md:py-8 overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0"
   
  />

  {/* SOFT TECH PATTERN OVERLAY */}
  <div className="absolute inset-0 opacity-20 bg-[url('/image/tech-pattern.png')] bg-cover bg-center" />

  {/* CONTENT */}
  <div className="relative max-w-[1440px] mx-auto px-4">

    {/* Heading */}
    <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#00A7C7] mb-6">
      About Us
    </h2>

    {/* Card */}
    <div className="bg-[#FFFFFF80] backdrop-blur-md rounded-2xl border-2px border-from-[#FFFFFF]-to-[#F3F3F5] px-6 sm:px-10 py-6 sm:py-8 shadow-sm">

     {service?.serviceDetails?.aboutUs && (
            <div className="text-[#868686] text-[18px] lg:text-[22px]"
            dangerouslySetInnerHTML={{ __html: aboutHtml }}>
          
            </div>
            )}

    </div>
  </div>
</section>

<section className="relative w-full py-10 sm:py-14 md:py-16 overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0"
  
  />

  {/* TECH PATTERN */}
  <div className="absolute inset-0 opacity-20 bg-[url('/image/Group (6).png')] bg-cover bg-center" />

  {/* CONTENT */}
  <div className="relative max-w-[1440px] mx-auto px-4">

    {/* Heading */}
    <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#00A7C7] mb-8">
      Why Choose Us?
    </h2>

    {/* MAIN CARD */}
    <div className="bg-[#FFFFFF80] backdrop-blur-md rounded-2xl border border-white p-6 sm:p-10">

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

        {/* CARD */}
        {service?.serviceDetails?.whyChooseUs?.map((item) => (
          <div
            key={item._id}
            className="bg-[#FFFFFF80] border-1px border-[#FDFDFD] rounded-xl p-5 sm:p-6 flex gap-4 items-start shadow-sm"
          >
            <img
              src={item.icon}
              alt=""
              className="w-9 h-9 sm:w-10 sm:h-10"
            />

            <div>
              <h4 className="text-[16px] sm:text-[18px] font-semibold text-[#4A4A4A] mb-1">
                {item.title}
              </h4>
              <p className="text-[14px] sm:text-[15px] text-[#7A7A7A] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>

<section className="relative w-full py-10 sm:py-14 md:py-16 overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0"

  />

  {/* SUBTLE TECH PATTERN */}
  <div className="absolute inset-0 opacity-20 bg-[url('/image/tech-pattern.png')] bg-cover bg-center" />

  {/* CONTENT */}
  <div className="relative max-w-[1440px] mx-auto px-4">

    {/* Heading */}
    <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#00A7C7] mb-6">
      Select Package
    </h2>

    {/* OUTER CONTAINER */}
    <div className="bg-white/60 backdrop-blur-md rounded-2xl border border-white p-6 sm:p-8 md:p-10">

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

        {/* CARD */}
        {service?.serviceDetails?.packages.map((pkg, index) => {
                  const isSelected = selectedPackage?._id === pkg._id;
                  return(

          <div
            key={index}
            onClick={() =>
          setSelectedPackage(
            {
              _id: pkg._id,
              name: pkg.name,
              price: pkg.price,
              discount: pkg.discount,
              discountedPrice: pkg.discountedPrice,
            },
            serviceId
          )
        }
        className={`cursor-pointer bg-white rounded-[12px] shadow-md p-6 sm:p-8 flex flex-col justify-between border-2 ${
          isSelected ? "border-[#58a6bc]" : "border-transparent"
        }`}
          >
            {/* Title */}
            <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#2F2F2F] mb-3">
              {pkg.name}
            </h3>

            <hr className="mb-4" />

            {/* Includes */}
            <p className="text-[14px] font-medium text-[#6F6F6F] mb-2">
              Includes
            </p>

            <ul className="space-y-2 text-[14px] text-[#7A7A7A] mb-6">
              {pkg.whatYouGet.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* PRICE */}
            <div className="mt-auto">
              <div className="flex items-center gap-3">
              <p className="text-[20px] sm:text-[22px] font-semibold text-[#00A7C7]">
                ₹{Math.floor(pkg.discountedPrice)}/
              </p>
              <span><s>₹{pkg.price}</s></span>
              <span className="text-green-600 text-[14px] font-medium">
                ({pkg.discount}% off)
              </span>
              </div>
              <p className="text-[13px] text-[#8A8A8A] mb-4">
                Per Month
              </p>

              {/* BUTTON */}
              <button className="w-full bg-[#00A7C7] hover:bg-[#0092AE] text-white text-[14px] font-medium py-2.5 rounded-full transition">
                Get It Now
              </button>
            </div>
          </div>
                  )
        })}

      </div>
    </div>
  </div>
</section>

<section className="relative w-full py-10 sm:py-14 md:py-16 overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0"
  
  />

  {/* TECH PATTERN OVERLAY */}
  <div className="absolute inset-0 opacity-25 bg-[url('/image/tech-pattern.png')] bg-cover bg-center" />

  {/* CONTENT */}
  <div className="relative max-w-[1440px] mx-auto px-4">

    {/* SECTION TITLE */}
    <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#00A7C7] mb-6">
      Documents
    </h2>

    {/* OUTER CARD */}
    <div className="bg-white/60 backdrop-blur-md rounded-2xl border border-white p-6 sm:p-8 md:p-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

        {/* LEFT */}
        <div>
          <div className="bg-[#00A7C7] text-white text-center py-2 rounded-full font-medium mb-4">
            We Required
          </div>

          <div className="bg-white/80 rounded-xl p-5 space-y-3">
            {service?.serviceDetails?.weRequired.map((item) => (
              <div key={item._id} className="flex gap-3 text-[#6F6F6F] text-[14px]">
                <span className="text-green-500">✔</span>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="bg-[#00A7C7] text-white text-center py-2 rounded-full font-medium mb-4">
            We Deliver
          </div>

          <div className="bg-white/80 rounded-xl p-5 space-y-3">
            {service?.serviceDetails?.weDeliver.map((item) => (
              <div key={item._id} className="flex gap-3 text-[#6F6F6F] text-[14px]">
                <span className="text-green-500">✔</span>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

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


<section className="w-full py-10 sm:py-12 md:py-8 relative">
  <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

    {/* TITLE */}
    <h2 className="text-[20px] sm:text-[22px] md:text-[26px] font-semibold text-[#00A7C7] mb-8">
      How It Works?
    </h2>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* LEFT COLUMN */}

        {/* CARD 1 */}
        {service?.serviceDetails?.howItWorks.map((item) => (
          <div key={item._id} className="bg-white rounded-xl p-5 flex gap-4 shadow-sm">
            <img src={item.icon} className="w-8 h-8" alt="" />
            <div>
              <h4 className="font-semibold text-[15px] sm:text-[16px]">
                {item.title}
            </h4>
            <p className="text-[13px] sm:text-[14px] text-[#6F6F6F] mt-1">
                {item.description}
            </p>
          </div>
        </div>
))}


    
    </div>
  </div>
</section>

<section
  className="w-full py-12 mb-10 md:py-16 relative bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/image/aiAssuredBg.jpg')",
  }}
>
  {/* Dark Overlay for readability */}
  <div className="absolute inset-0 bg-white/70" />

  {/* Inner shadow */}
  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_6px_14px_rgba(0,0,0,0.25)]" />

  <div className="relative max-w-[1347px] mx-auto px-4">
    {/* Title */}
    <h2 className="text-center text-[22px] sm:text-[24px] md:text-[28px] font-semibold text-[#3A3A3A] mb-10 md:mb-12">
      Assured by Fetch True
    </h2>

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 md:gap-y-10">

      {/* LEFT COLUMN */}
        {service?.serviceDetails?.assuredByFetchTrue.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 p-5 sm:p-6 rounded-[14px]
                       bg-white/50 backdrop-blur-md
                       border border-white/60
                       shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
          >
            <img
              src={item.icon}
              className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] shrink-0"
              alt={item.title}
            />

            <div>
              <h4 className="font-semibold text-[16px] sm:text-[18px] md:text-[20px] text-[#2B2B2B]">
                {item.title}
              </h4>
              <p className="mt-1 text-[14px] sm:text-[15px] md:text-[16px] text-[#5F5F5F] leading-relaxed">
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

<ChooseProvider
  title="Choose Provider"
  buttonColor="bg-[#009ABF]"
  providers={mappedProviders}
/>

<div className="max-w-[1400px] bg-[#FFFFFF80] mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  border border-[#EAEAEA] rounded-[12px] mt-8">
<TermsConditions
  heading="Terms & Conditions"
  html={service?.serviceDetails?.termsAndConditions?.join("") || ""}
/>
</div>

<div className="max-w-[1400px] bg-[#FFFFFF80] mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  border border-[#EAEAEA] rounded-[12px] mt-8">
<FAQs
  title="FAQs"
      items={service?.serviceDetails?.faq.map((item) => ({
        question: item.question,
        answer: item.answer,
      }))}
/>

</div>

<div className="max-w-[1400px] bg-[#FFFFFF80] mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  border border-[#EAEAEA] rounded-[12px] mt-8">
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
  
    heading="Terms & Conditions"
    onClose={() => setOpenTC(false)}
    html={
      service?.franchiseDetails?.termsAndConditions ||
      "<p>No Terms & Conditions available</p>"
    }
  />
)}





    </section>
  );
}
