// 'use client';

// import { motion } from "framer-motion";
// import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import Link from "next/link";


// const QUICK_LINKS = [
//   { label: "Home", path: "/" },
//   { label: "Leads", path: "/leads" },
//   { label: "My Team", path: "/team" },
//   { label: "Offers", path: "/offers" },
//   { label: "Academy", path: "/academy" },
// ];

// const PREFERENCES = [
//   { label: "About Us", path: "/about" },
//   { label: "Help & Support", path: "/support" },
//   { label: "Refund Policy", path: "/refund-policy" },
//   { label: "Privacy Policy", path: "/privacy-policy" },
//   { label: "Terms & Conditions", path: "/terms" },
// ];

// const MODULES_LEFT = [
//   { label: "Franchise", path: "/modules/franchise" },
//   { label: "Finance", path: "/modules/finance" },
//   { label: "Business", path: "/modules/business" },
//   { label: "AI Hub", path: "/modules/ai-hub" },
//   { label: "On Demand", path: "/modules/on-demand" },
// ];

// const MODULES_RIGHT = [
//   { label: "Real Estate", path: "/MainModules/Franchise/RealState" },
//   { label: "Design Studio Marketing", path: "/MainModules/Marketing/DesignStudio" },
//   { label: "ITService", path: "/MainModules/ITService" },
//   { label: "Education", path: "/MainModules/Education" },
//   { label: "On Demand", path: "/MainModules/OnDemand/detailslug" },
// ];


// const SOCIAL_ICONS = [
//   { icon: <FaFacebook className="text-[#1877F2]" />, link: "#" },
//   { icon: <FaLinkedin className="text-[#0077B5]" />, link: "#" },
//   { icon: <FaInstagram className="text-[#E1306C]" />, link: "#" },
//   { icon: <FaTwitter className="text-[#1DA1F2]" />, link: "#" },
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-[#091F4C] text-white py-10 px-6 md:px-14 lg:px-20">

//       {/* Top Section */}
//       {/* <div className="flex flex-col md:flex-row justify-between gap-8">*/}
//       <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

//         {/* Branding */}
//         <div className="max-w-xs">
//           <h2 className="text-2xl font-semibold">Fetch True</h2>
//           <p className="text-gray-300 mt-2 leading-relaxed">
//             The application that provides every service you need in a single frame.
//           </p>
//         </div>

        // <div className="flex gap-4">

        //   {/* Google Play */}
        //   <motion.a
        //     href="https://play.google.com/store/apps/details?id=com.fetch.true"
        //     target="_blank"
        //     rel="noopener noreferrer"
        //     className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 font-medium text-sm"
        //     whileHover={{ scale: 1.05, y: -2 }}
        //     whileTap={{ scale: 0.95 }}
        //   >
        //     <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        //       <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
        //     </svg>
        //     Google Play
        //   </motion.a>

        //   {/* Apple Store */}
        //   <motion.a
        //     href="https://apps.apple.com/in/app/fetch-true/id1669248432"
        //     target="_blank"
        //     rel="noopener noreferrer"
        //     className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 font-medium text-sm"
        //     whileHover={{ scale: 1.05, y: -2 }}
        //     whileTap={{ scale: 0.95 }}
        //   >
        //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        //       <path d="M16.365 1.43c0 1.14-.418 2.088-1.254 2.842-.837.754-1.754 1.19-2.75 1.304-.028-.125-.042-.272-.042-.44 0-1.094.394-2.02 1.18-2.78.787-.76 1.71-1.15 2.766-1.15.032 0 .064.004.1.01v.214zM20.745 17.71c-.3.695-.66 1.332-1.085 1.91-.56.77-1.015 1.305-1.36 1.605-.54.495-1.12.75-1.75.764-.445.015-.983-.127-1.62-.426-.637-.3-1.223-.448-1.75-.448-.556 0-1.158.148-1.807.448-.65.3-1.178.45-1.585.45-.61-.027-1.2-.298-1.77-.81-.38-.334-.86-.895-1.445-1.685-.62-.843-1.127-1.82-1.52-2.93-.424-1.2-.635-2.36-.635-3.48 0-1.286.278-2.395.835-3.33.436-.75 1.02-1.34 1.75-1.77.73-.43 1.523-.653 2.38-.67.467-.013 1.08.15 1.84.49.758.337 1.245.506 1.46.506.162 0 .71-.205 1.64-.615.88-.38 1.62-.54 2.22-.48 1.64.133 2.878.78 3.71 1.94-1.47.9-2.208 2.152-2.21 3.75.002 1.25.465 2.29 1.39 3.12.412.39.87.69 1.37.9-.11.32-.245.65-.405.99z" />
        //     </svg>
        //     Apple Store
        //   </motion.a>

        // </div>

//       </div>

//       <hr className="border-gray-600 my-8" />

//       {/* Contact + Social Section */}
//       <div className="flex flex-col md:flex-row justify-between gap-10">

//         {/* Contact */}
//         <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">

//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-[#0E2A63] rounded-full flex items-center justify-center">
//               <FaEnvelope />
//             </div>
//             <div>
//               <p className="text-gray-300 text-sm">Email</p>
//               <p className="font-medium">companymail@gmail.com</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-[#0E2A63] rounded-full flex items-center justify-center">📞</div>
//             <div>
//               <p className="text-gray-300 text-sm">Contact</p>
//               <p className="font-medium">+91 3261606461</p>
//             </div>
//           </div>

//         </div>

//         {/* Social Icons */}
//         <div className="flex gap-5 text-xl justify-center md:justify-start">
//           {SOCIAL_ICONS.map((item, i) => (
//             <a key={i} href={item.link} className="hover:opacity-80">{item.icon}</a>
//           ))}
//         </div>

//       </div>

//       <hr className="border-gray-600 my-8" />

//       {/* Links Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-sm">

//         <div>
//           <h3 className="font-semibold mb-3">Quick Links</h3>
//           <ul className="space-y-2 text-gray-300">
//             {QUICK_LINKS.map((item, i) => (
//               <li key={i}>
//                 <Link href={item.path} className="hover:text-white transition">
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//         </div>

//         <div>
//           <h3 className="font-semibold mb-3">Preferences</h3>
//           <ul className="space-y-2 text-gray-300">
//             {PREFERENCES.map((item, i) => (
//               <li key={i}>
//                 <Link href={item.path} className="hover:text-white transition">
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//         </div>

//         <div>
//           <h3 className="font-semibold mb-3">Modules & Services</h3>
//           <ul className="space-y-2 text-gray-300">
//             {MODULES_LEFT.map((item, i) => (
//               <li key={i}>
//                 <Link href={item.path} className="hover:text-white transition">
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//         </div>

//         <div>
//           <h3 className="font-semibold mb-3">More Services</h3>
//           <ul className="space-y-2 text-gray-300">
//             {MODULES_RIGHT.map((item, i) => (
//               <li key={i}>
//                 <Link href={item.path} className="hover:text-white transition">
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//         </div>

//       </div>


//       <div className="w-full text-center mt-10 text-gray-400 text-sm">
//         All Rights Reserved © Fetch True {new Date().getFullYear()}
//       </div>
//     </footer>
//   );
// }




'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

/* ================= MOCK DATA ================= */

const COMPANY_INFO = {
  name: "Fetch True",
  address: [
    "FTFL Technology Pvt Ltd.",
    "4th Floor, C307, Amora Chamber,",
    "Amanora Mall, Hadapsar, Pune,",
    "Maharashtra 411028",
  ],
  phone: "+91 9309517500",
  email: "support@fetchtrue.com",
};

const FOOTER_LINK_SECTIONS = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", path: "/" },
      { label: "Leads", path: "/leads" },
      { label: "My Team", path: "/team" },
      { label: "Offers", path: "/offers" },
      { label: "Academy", path: "/academy" },
    ],
  },
  {
    title: "Preference",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Help & Support", path: "/support" },
      { label: "Refund Policy", path: "/refund-policy" },
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms & Conditions", path: "/terms" },
    ],
  },
  {
    title: "Modules & Services",
    links: [
      { label: "Franchise", path: "/modules/franchise" },
      { label: "Finance", path: "/modules/finance" },
      { label: "Business", path: "/modules/business" },
      { label: "AI Hub", path: "/modules/ai-hub" },
      { label: "On Demand", path: "/modules/on-demand" },
    ],
  },
  {
    title: "Modules & Services",
    links: [
      { label: "IT Services", path: "/modules/it-services" },
      { label: "Marketing", path: "/modules/marketing" },
      { label: "Education", path: "/modules/education" },
      { label: "Package", path: "/modules/package" },
    ],
  },
  {
    title: "More Services",
    links: [
      { label: "Real Estate", path: "/real-estate" },
      { label: "Digital Marketing", path: "/digital-marketing" },
      { label: "Business", path: "/business" },
      { label: "Food Beverage", path: "/food-beverage" },
      { label: "Franchise", path: "/franchise" },
    ],
  },
];

const SOCIAL_ICONS = [
  { icon: <FaFacebook />, path: "#" },
  { icon: <FaLinkedin />, path: "#" },
  { icon: <FaInstagram />, path: "#" },
  { icon: <FaXTwitter />, path: "#" },
];

const STORE_BUTTONS = [
  { src: "/image/appstore.png", alt: "App Store", path: "#" },
  { src: "/image/playstore.png", alt: "Google Play", path: "#" },
];

/* ================= COMPONENT ================= */

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 text-gray-700">

      {/* TOP GRID */}
      <div className="max-w-[1440px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-7 gap-10">

        {/* COMPANY INFO */}
        <div className="md:col-span-2 text-sm space-y-3">
          <h2 className="text-[24px] lg:text-[32px] font-semibold text-black">
            {COMPANY_INFO.name}
          </h2>

          <div className="space-y-1">
            {COMPANY_INFO.address.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          <p>📞 {COMPANY_INFO.phone}</p>
          <p>✉️ {COMPANY_INFO.email}</p>
        </div>

        {/* LINK COLUMNS */}
        {FOOTER_LINK_SECTIONS.map((section, idx) => (
          <div key={idx}>
            {section.title && (
              <h3 className="font-semibold text-sm mb-4 text-black">
                {section.title}
              </h3>
            )}

            <ul className="space-y-2 text-sm">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.path}
                    className="hover:text-black transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-200" />

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 text-lg text-gray-600">
          {SOCIAL_ICONS.map((item, i) => (
            <Link key={i} href={item.path} className="hover:text-black">
              {item.icon}
            </Link>
          ))}
        </div>

        {/* STORE BUTTONS */}
        {/* <div className="flex gap-4">
          {STORE_BUTTONS.map((btn, i) => (
            <Link key={i} href={btn.path}>
              <img
                src={btn.src}
                alt={btn.alt}
                className="h-10 object-contain"
              />
            </Link>
          ))}
        </div> */}
        
        <div className="flex gap-4">

          {/* Google Play */}
          <motion.a
            href="https://play.google.com/store/apps/details?id=com.fetch.true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 font-medium text-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Google Play
          </motion.a>

          {/* Apple Store */}
          <motion.a
            href="https://apps.apple.com/in/app/fetch-true/id1669248432"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 font-medium text-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.365 1.43c0 1.14-.418 2.088-1.254 2.842-.837.754-1.754 1.19-2.75 1.304-.028-.125-.042-.272-.042-.44 0-1.094.394-2.02 1.18-2.78.787-.76 1.71-1.15 2.766-1.15.032 0 .064.004.1.01v.214zM20.745 17.71c-.3.695-.66 1.332-1.085 1.91-.56.77-1.015 1.305-1.36 1.605-.54.495-1.12.75-1.75.764-.445.015-.983-.127-1.62-.426-.637-.3-1.223-.448-1.75-.448-.556 0-1.158.148-1.807.448-.65.3-1.178.45-1.585.45-.61-.027-1.2-.298-1.77-.81-.38-.334-.86-.895-1.445-1.685-.62-.843-1.127-1.82-1.52-2.93-.424-1.2-.635-2.36-.635-3.48 0-1.286.278-2.395.835-3.33.436-.75 1.02-1.34 1.75-1.77.73-.43 1.523-.653 2.38-.67.467-.013 1.08.15 1.84.49.758.337 1.245.506 1.46.506.162 0 .71-.205 1.64-.615.88-.38 1.62-.54 2.22-.48 1.64.133 2.878.78 3.71 1.94-1.47.9-2.208 2.152-2.21 3.75.002 1.25.465 2.29 1.39 3.12.412.39.87.69 1.37.9-.11.32-.245.65-.405.99z" />
            </svg>
            Apple Store
          </motion.a>

        </div>



      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        ©25 © All rights Reserved | FTFL Technology Pvt.Ltd
      </div>
    </footer>
  );
}
