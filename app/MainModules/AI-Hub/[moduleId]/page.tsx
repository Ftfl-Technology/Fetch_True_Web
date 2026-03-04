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
//               looking through the Fetch True App's AI Chatbot Development section.
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

// <div className="max-w-[1400px] bg-[#FFFFFF80] mx-4 lg:mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10  border border-[#EAEAEA] rounded-[12px] mt-8">
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
// </div>

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




'use client';

import AISolutions from '@/src/components/AIHub/AISolutions';
import MostPopular from '@/src/components/AIHub/MostPopular';
import Recommendation from '@/src/components/AIHub/Recommended';
import TopTrending from '@/src/components/AIHub/TopTrending';
import WhyChooseUs from '@/src/components/AIHub/WhyChooseUs';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useModule } from '@/src/context/CategoriesContext';
import SearchBar from '@/src/components/SearchBar/Search';

export default function AIHubModulesPage() {

    const { categories, loading, error, fetchCategoriesByModule } = useModule();
    const params = useParams();
    const moduleId = params.moduleId as string;

    useEffect(() => {
        if (!moduleId) return;

        fetchCategoriesByModule(moduleId);
    }, [moduleId]);

    const safeCategories = Array.isArray(categories) ? categories : [];


    const sliderRef = useRef<HTMLDivElement>(null);

    const chunkArray = <T,>(arr: T[], size: number): T[][] => {
        const chunks: T[][] = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    };

    // const baseSlides = chunkArray(categories, 6);

    // const slides = [
    //     baseSlides[baseSlides.length - 1], // clone last
    //     ...baseSlides,
    //     baseSlides[0], // clone first
    // ];


    const baseSlides = safeCategories.length
        ? chunkArray(safeCategories, 6)
        : [];

    const slides =
        baseSlides.length > 0
            ? [
                baseSlides[baseSlides.length - 1],
                ...baseSlides,
                baseSlides[0],
            ]
            : [];


    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = sliderRef.current.offsetWidth;
        }
    }, []);



    useEffect(() => {
        const el = sliderRef.current;
        if (!el) return;

        const slideWidth = el.offsetWidth;
        let intervalId: NodeJS.Timeout;

        const startAutoSwipe = () => {
            intervalId = setInterval(() => {
                el.scrollTo({
                    left: el.scrollLeft + slideWidth,
                    behavior: "smooth",
                });
            }, 2500); // pause duration between swipes
        };

        startAutoSwipe();

        return () => clearInterval(intervalId);
    }, []);


    const [searchQuery, setSearchQuery] = useState("");

    type CategoryBgProps = {
        active: boolean;
    };

    const CategoryBg: React.FC<CategoryBgProps> = ({ active }) => (
        <svg
            viewBox="0 0 300 80"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
        >
            <path
                d="
        M 20 0
        H 280
        L 300 0
        V 30
        Q 300 80 230 80
        H 0
        V 20
        Q 0 0 20 0
        Z
      "
                fill={active ? '#000000' : '#E9EEF5'}
            />
        </svg>
    );

    const router = useRouter();
  

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;



    return (
        <>
            <section className="relative bg-[#E2E9F1] overflow-hidden">
                <div className='hidden md:block'>
                    {/*  NAVBAR  */}
                    <div className="w-full mx-auto px-4 md:px-8 mt-4 md:mt-0">
                        <div className=" flex items-center justify-between  md:p-8 p-4 lg:p-12 rounded-xl w-full">
                            {/* LEFT */}
                            <div className="flex items-center gap-3 lg:gap-5">
                                <div className="bg-white rounded-full p-1">
                                    <Link href="/">
                                        <img
                                            src="/image/AIHome.png"
                                            className="w-[26px] h-[30px] lg:w-[34.36px] lg:h-[42.95px] cursor-pointer lg:p-1 object-cover"
                                            alt="Home"
                                        /></Link></div>



                                <h1 className="text-[18px] lg:text-[24px] font-semibold text-[#000000] ">
                                    AI Hub
                                </h1>
                            </div>

                            {/* RIGHT */}
                            {/* Search Box */}
                            <div className='gap-8 flex'>
                                <div className="relative w-full md:w-[330px] lg:w-[520px]">
                                    {/* <input
                                        type="text"
                                        placeholder="Search"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}

                                        className="
                                w-full
                                rounded-full bg-white
                                border border-gray-300
                                px-10 py-2
                                text-sm mr-[150px]
                                outline-none
                                focus:border-blue-500
                                "
                                    /> */}
                                    <SearchBar
                                                                    value={searchQuery}
                                                                    onChange={setSearchQuery}
                                                                    placeholder="Search"
                                                                />
                                    {/* search icon */}
                                    {/* <span className="absolute left-3 top-1/2 -translate-y-3.5 text-gray-400">
                                        <img src="/image/itsearch.png" alt="searchicon" className='w-[20.66px] h-[18.66px] text-[#009ABF]' />
                                    </span> */}
                                </div>

                                <div className='bg-white rounded-full justify-center md:p-2  flex'>
                                    <img
                                        src="/image/AIBookmark.png"
                                        className="w-[18px] h-[22px] md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] lg:p-1 object-fit"
                                        alt="Bookmark"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ===== HERO / BELOW CONTENT (SAME WIDTH) ===== */}
                    <div className="w-full px-4 md:px-8 mt-6 mb-5">
                        <div className="relative w-full rounded-xl pb-22 md:pb-40">
                            {/* Background Image */}
                            <img
                                src="/image/ITModulebg.png"
                                alt="ITModulebg"
                                className="w-full h-[320px] md:h-[641px] object-cover"
                            />


                            {/* Overlay Content */}
                            <div className="absolute inset-0 z-10 p-6 md:p-2 text-white">
                                {/* <div className="text-[46.14px] lg:text-[209.17px] text-center -ml-6 lg:-mt-10 md:ml-2 whitespace-nowrap text-gray-300 font-bold leading-none">
                                AI HUB
                            </div> */}
                                <div
                                    className="text-[146.14px] lg:text-[209.17px] text-center -ml-6 lg:-mt-10 md:ml-2 whitespace-nowrap font-bold leading-none text-[#E2E9F1]"
                                    style={{
                                        WebkitTextStroke: "2px white",
                                    }}
                                >
                                    AI HUB
                                </div>

                                <div className="text-[146.14px] lg:text-[209.17px] text-center -ml-6  md:ml-2 whitespace-nowrap text-white font-bold leading-none">
                                    AI HUB
                                </div>
                                <div
                                    className="text-[146.14px] lg:text-[209.17px] text-center -ml-6 lg:-mt-10 md:ml-2 whitespace-nowrap font-bold leading-none text-[#E2E9F1]"
                                    style={{
                                        WebkitTextStroke: "2px white",
                                    }}
                                >
                                    AI HUB
                                </div>

                                {/* <img
                                src="/image/AIHubrobot.png"
                                alt="Decode"
                                className="w-[200px] object-cover md:w-[417px] md:h-[917px] md:-mt-[600px] -mt-25 absolute left-1/2 -translate-x-1/2"
                            /> */}
                                <img
                                    src="/image/AIHubrobot.png"
                                    alt="Decode"
                                    className="w-[280px] md:w-[417px] h-auto md:h-[517px] absolute left-1/2 -translate-x-1/2 object-fit -mt-[500px] lg:-mt-[630px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* MOBILE VERSION */}
                <div className="md:hidden">
                    <div className="relative rounded-xs overflow-hidden">

                        {/* Gradient Background */}
                        <div className="h-[330px] bg-gradient-to-r from-[#CDEAFF] to-[#E8D9FF] relative flex items-center justify-center">

                            {/* Top Icons */}
                            <div className="absolute top-2 left-2 bg-white cursor-pointer rounded-full p-2 shadow">
                                <Link href="/MainModules">
                                    <img src="/image/AIHome.png" className="w-5 h-5 cursor-pointer" />
                                </Link>
                            </div>

                            <div className='font-semibold text-[16px] -mt-70 block md:block mx-auto'>
                                AI HUB
                            </div>

                            <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow">
                                <img src="/image/AIBookmark.png" className="w-3 h-3" />
                            </div>

                            {/* AI HUB Text Layers */}
                            <div>
                                <div
                                    className="absolute text-[68px] font-extrabold text-transparent whitespace-nowrap"
                                    style={{ WebkitTextStroke: "1px white", opacity: 0.5, top: "1px", left: "50%", transform: "translateX(-50%)" }}
                                >
                                    AI HUB
                                </div>

                                <div
                                    className="absolute text-[68px] text-white font-extrabold text-transparent whitespace-nowrap"
                                    style={{ WebkitTextStroke: "1px white", opacity: 0.5, top: "55px", left: "50%", transform: "translateX(-50%)" }}
                                >
                                    AI HUB
                                </div>

                                <div
                                    className="absolute text-[68px] font-extrabold text-transparent whitespace-nowrap"
                                    style={{ WebkitTextStroke: "1px white", opacity: 0.5, top: "110px", left: "50%", transform: "translateX(-50%)" }}
                                >
                                    AI HUB
                                </div>
                            </div>

                            {/* Robot */}
                            <img
                                src="/image/AIHubrobot.png"
                                className="w-[140px] z-2 absolute bottom-35 left-1/2 -translate-x-1/2 "
                                alt="AI Robot"
                            />
                        </div>

                    </div>
                </div>
            </section>


            <AISolutions />

            <section className="relative w-full p-4 md:p-12 lg:p-15 bg-[#E2E9F1]">
                <h1 className="text-[16px] font-semibold md:text-[24px] lg:text-[32px] mb-5">Category</h1>

                {/* ================= DESKTOP (UNCHANGED) ================= */}

                <div className="hidden md:flex flex-wrap gap-10 rounded-lg">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            onClick={() =>
                               router.push(`/MainModules/AI-Hub/${moduleId}/${item._id}?categoryName=${encodeURIComponent(item.name)}`)
                            }
                            className="flex flex-col mb-5 items-center p-1 lg:ml-8 md:ml-15 rounded-lg w-[120px] cursor-pointer"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-[133px] h-[143px] border border-[#A7DFFF] bg-white/50 rounded-2xl object-cover"
                            />

                            <span className="mt-2 md:text-[18px] lg:text-[24px] font-medium text-center leading-tight break-words line-clamp-3 max-w-[250px]">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>




                {/*  ================= MOBILE CATEGORY SWIPE =================  */}
                <section className="md:hidden max-w-full mt-6">
                    {/* <div
                        ref={sliderRef}
                        className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth"
                     >
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                className="min-w-full snap-center"
                            >
                                <div className="grid grid-cols-3 gap-0">
                                    {slide.map((item, i) => (
                                        <div
                                            key={i}
                                            onClick={() =>
                                                router.push(`/MainModules/AIHub/${(item._id)}`)
                                            }
                                            className="flex flex-col space-y-6 items-center text-center"
                                        >
                                            
                                            <div className="w-[90px] h-[96px] flex items-center justify-center border border-[#A7DFFF] rounded-2xl bg-[#F6FCFF] p-1">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            
                                            <span className="text-[12px] mb-4 leading-[16px] font-medium max-w-[96px]">
                                                {item.name}
                                            </span>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        ))}
                    </div> */}

                    {slides.length > 0 && (
                        <div
                            ref={sliderRef}
                            className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth"
                        >
                            {slides.map((slide, slideIndex) => (
                                <div key={slideIndex} className="min-w-full snap-center">
                                    <div className="grid grid-cols-3 gap-0">
                                        {slide.map((item, i) => (
                                            <div
                                                key={i}
                                                onClick={() =>
                                                     router.push(`/MainModules/AI-Hub/${moduleId}/${item._id}?categoryName=${encodeURIComponent(item.name)}`)
                                                }
                                                className="flex flex-col space-y-6 items-center text-center"
                                            >
                                                <div className="w-[90px] h-[96px] flex items-center justify-center border border-[#A7DFFF] rounded-2xl bg-[#F6FCFF] p-1">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>

                                                <span className="text-[12px] mb-4 leading-[16px] font-medium max-w-[96px]">
                                                    {item.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}


                    {/* INDICATORS */}
                    <div className="flex justify-center gap-2 mt-4">
                        {baseSlides.map((_, i) => (
                            <div
                                key={i}
                                className={`h-[3px] rounded-full transition-all duration-300 ${activeIndex === i
                                    ? "w-8 bg-[#FA9131]"
                                    : "w-4 bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </section>


                <Recommendation moduleId={moduleId} searchQuery={searchQuery}/>
                <MostPopular moduleId={moduleId} searchQuery={searchQuery}/>
                {/* <section className="bg-[#C9DEE9] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-10">
                    <div className="max-w-8xl mx-auto px-6 md:px-12 mb-6 lg:mb-12 py-8 md:py-12">
                        <LiveSection />
                    </div>
                </section> */}
                <TopTrending moduleId={moduleId} searchQuery={searchQuery}/>

                <section className="bg-[#C9DEE9] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-10">
                    <div className="max-w-8xl mx-auto px-6 md:px-12 mb-6 lg:mb-12 py-8 md:py-12">
                        <WhyChooseUs moduleId={moduleId}/>
                    </div>
                </section>

            </section>
        </>
    );
}
