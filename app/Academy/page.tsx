// "use client";

// export default function AcademyPage() {
//   return (
//     <div className="p-6 space-y-12">

//       {/* ================= HERO ================= */}
//       <section className="rounded-2xl bg-gradient-to-r from-indigo-900 to-blue-600 p-10 flex justify-between items-center">
//         <div className="text-white space-y-4">
//           <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
//             Premium Business Education
//           </span>
//           <h1 className="text-3xl font-bold">
//             Unlock Your <br /> Business Potential
//           </h1>
//           <button className="bg-white text-blue-700 px-5 py-2 rounded-lg font-medium">
//             Contact Now
//           </button>
//         </div>

//         <img
//           src="/academy-illustration.png"
//           className="w-[260px]"
//           alt="academy"
//         />
//       </section>

//       {/* ================= SERVICES ================= */}
//       <section>
//         <h2 className="text-lg font-semibold mb-6">Recommended Services</h2>

//         <div className="flex gap-6">

//           {/* CARD 1 */}
//           <div className="w-[300px] rounded-xl border bg-white shadow-sm">
//             <img
//               src="/training.jpg"
//               className="h-[150px] w-full rounded-t-xl object-cover"
//             />
//             <div className="p-4 space-y-2">
//               <span className="text-xs text-blue-600">Education</span>
//               <h3 className="font-semibold">Training Tutorial</h3>
//               <p className="text-sm text-gray-500">Step by step learning</p>
//             </div>
//           </div>

//           {/* CARD 2 */}
//           <div className="w-[300px] rounded-xl border bg-white shadow-sm">
//             <img
//               src="/webinar.jpg"
//               className="h-[150px] w-full rounded-t-xl object-cover"
//             />
//             <div className="p-4 space-y-2">
//               <span className="text-xs text-purple-600">Live</span>
//               <h3 className="font-semibold">Live Webinar</h3>
//               <p className="text-sm text-gray-500">Industry experts</p>
//             </div>
//           </div>

//           {/* CARD 3 */}
//           <div className="w-[300px] rounded-xl border bg-white shadow-sm">
//             <img
//               src="/podcast.jpg"
//               className="h-[150px] w-full rounded-t-xl object-cover"
//             />
//             <div className="p-4 space-y-2">
//               <span className="text-xs text-pink-600">Audio</span>
//               <h3 className="font-semibold">Podcast</h3>
//               <p className="text-sm text-gray-500">Business talks</p>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* ================= FOOTER VARIANT – ACADEMY ================= */}
//       <section className="rounded-xl border p-6 text-center">
//         <h4 className="font-semibold mb-2">Connect With Us</h4>
//         <p className="text-sm text-gray-500 mb-4">
//           Follow us on social media for latest updates
//         </p>
//         <div className="flex justify-center gap-4 text-xl">
//           <span>📺</span>
//           <span>📸</span>
//           <span>📘</span>
//         </div>
//       </section>

//     </div>
//   );
// }


"use client";

import {
  BookOpen,
  Lightbulb,
  Video,
  ShieldCheck,
  Mic,
  Calendar,
} from "lucide-react";

import Link from "next/link";

export default function Academy() {

  const features = [
    {
      title: "Training Tutorial",
      icon: <BookOpen />,
      color: "bg-indigo-500",
      link: "/Academy/training",
    },
    {
      title: "Quick Insights",
      icon: <Lightbulb />,
      color: "bg-orange-500",
      link: "/academy/insights",
    },
    {
      title: "Live Webinar",
      icon: <Video />,
      color: "bg-purple-600",
      link: "/academy/live-webinar",
    },
    {
      title: "Recorded Webinar",
      icon: <ShieldCheck />,
      color: "bg-green-500",
      link: "/academy/recorded-webinar",
    },
    {
      title: "Podcast",
      icon: <Mic />,
      color: "bg-pink-500",
      link: "/academy/podcast",
    },
    {
      title: "Events",
      icon: <Calendar />,
      color: "bg-blue-500",
      link: "/academy/events",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Page Title */}
      <Link href="/">
        <h2 className="text-lg font-semibold mb-4 cursor-pointer">
          Academy
        </h2>
      </Link>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white rounded-xl p-8 flex justify-between items-center mb-8">
        <div>
          <p className="text-xs bg-white/20 px-3 py-1 rounded-full inline-block mb-3">
            Premium Business Education
          </p>

          <h1 className="text-2xl font-bold mb-4">
            Unlock Your <br /> Business Potential
          </h1>

          <button className="bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-medium">
            Contact Now
          </button>
        </div>

        <img
          src="/academy-banner.png"
          alt="academy"
          className="w-48 hidden md:block"
        />
      </div>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {features.map((item, index) => (
          <Link key={index} href={item.link}>
            <div className="bg-white p-4 rounded-xl border text-center hover:shadow-md transition w-[140px] h-[100px] cursor-pointer">

              <div
                className={`${item.color} w-10 h-10 mx-auto flex items-center justify-center rounded-lg text-white mb-2`}
              >
                {item.icon}
              </div>

              <p className="text-xs font-medium text-gray-700">
                {item.title}
              </p>

            </div>
          </Link>
        ))}
      </div>

      {/* Social Connect */}
      <div className="bg-white border rounded-xl p-6 text-center max-w-md mx-auto">
        <p className="font-semibold mb-2">Connect With Us</p>

        <p className="text-sm text-gray-500 mb-4">
          Follow us on social media for latest updates
        </p>

        <div className="flex justify-center gap-4">
          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
            ▶
          </div>

          <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
            ◎
          </div>

          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            f
          </div>
        </div>
      </div>

    </div>
  );
}