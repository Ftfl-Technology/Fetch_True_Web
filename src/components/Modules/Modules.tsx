// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// function Modules() {
//   const modules = [
//     { title: "Franchise", path: "/MainModules/Franchise/", bg: "/image/Franchise card.png", icon: "/image/franchise icon.png" },
//     { title: "Finance", path: "/MainModules/Finance/", bg: "/image/finance card.png", icon: "/image/finance.png" },
//     { title: "Business", path: "/MainModules/Business/", bg: "/image/Business card.png", icon: "/image/Business.png" },
//     { title: "AI Hub", path: "/MainModules/AIHub/", bg: "/image/Ai Hub card.png", icon: "/image/AI.png" },
//     { title: "On Demand", path: "/MainModules/OnDemand/", bg: "/image/On Demand card.png", icon: "/image/onDemand.png" },
//     { title: "Marketing", path: "/MainModules/Marketing/", bg: "/image/Marketing card.png", icon: "/image/marketing.png" },
//     { title: "IT Service", path: "/MainModules/ITService/", bg: "/image/It Service.png", icon: "/image/It .png" },
//     { title: "Legal Service", path: "/MainModules/LegalService/", bg: "/image/Legal service.png", icon: "/image/legal.png" },
//     { title: "Education", path: "/MainModules/Education/", bg: "/image/Education card.png", icon: "/image/education.png" },
//   ];

//   const row1 = modules.slice(0, 5);
//   const row2 = modules.slice(5);

//   return (
//     <section className="w-full flex flex-col gap-[40px] mt-[70px] mb-20 px-4">
//       <h3 className="hidden lg:block font-inter font-medium text-[30px] text-black ms-20">
//         Our Modules
//       </h3>

//       {/* MOBILE GRID */}
//       <div className="grid grid-cols-2 gap-[14px] sm:hidden">
//         {modules.map((m, i) => (
//           <Card key={i} data={m} />
//         ))}
//       </div>

//       {/* DESKTOP ROW 1 */}
//       <div className="hidden sm:flex flex-wrap gap-[57px] justify-center">
//         {row1.map((m, i) => (
//           <Card key={i} data={m} />
//         ))}
//       </div>

//       {/* DESKTOP ROW 2 */}
//       <div className="hidden sm:flex flex-wrap gap-[57px] justify-center">
//         {row2.map((m, i) => (
//           <Card key={i} data={m} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function Card({ data }) {
//   const router = useRouter();
//   const [active, setActive] = useState(false);

//   const handleClick = () => {
//     setActive(true);
//     setTimeout(() => {
//       router.push(data.path);
//     }, 300);
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className="
//         relative overflow-hidden border border-black/10 rounded-[21.3px]
//         cursor-pointer transition-all duration-300

//         w-full h-[84px]
//         sm:w-[217.87px] sm:h-[113.29px]
//       "
//     >
//       {/* BG */}
//       <img
//         src={data.bg}
//         alt={data.title}
//         className="w-full h-full rounded-[21.3px] object-cover"
//       />

//       {/* TITLE */}
//       <p
//         className={`
//           absolute font-semibold text-black transition-all duration-200
//           text-[17px] top-[8px] left-[8px]
//           sm:text-[15px] sm:top-[20.79px] sm:left-[13.38px]
//           ${active ? "opacity-0 translate-y-1" : "opacity-100"}
//         `}
//       >
//         {data.title}
//       </p>

//       {/* ICON */}
//       <img
//         src={data.icon}
//         alt=""
//         className={`
//           absolute object-contain transition-all duration-300 ease-in-out
//           ${active
//             ? "top-1/2 left-1/2 w-[120px] h-[120px] sm:w-[120px] sm:h-[120px] -translate-x-1/2 -translate-y-1/2 scale-110"  /* MOBILE BADI ICON */
//             : "w-[50px] h-[50px] bottom-[8px] right-[8px] sm:w-[89px] sm:h-[55px] sm:top-[44px] sm:left-[112px]"   /* MOBILE NORMAL ICON BADA */
//           }
//         `}
//       />
//     </div>
//   );
// }


// export default Modules;

"use client";

import Image from "next/image";
import Link from "next/link";
import Recommendation from "./Recommendation";
import { useModule } from "@/src/context/ModuleContext"

interface Props {
  searchQuery?: string;
}

export default function ServiceCategory({ searchQuery }: Props) {
  const { modules, loading, error } = useModule();

   if (loading) {
    return <div className="text-center py-20">Loading services...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  const toFolderName = (name: string) =>
  name.trim().replace(/\s+/g, "-");

  const filteredModules = searchQuery
    ? modules.filter((module) =>
        module.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : modules;

  return (
    <>
    {/* <div className="mx-auto text-center my-8 ">
       <h2 className="text-[24px] lg:text-[32px] font-semibold text-[#232323]">Explore Our Services</h2>
       <p className="text-[18px] lg:text-[24px] mx-2 lg:mx-0 font-normal text-[#595959]">from marketing in an single screen to legal we cover all industries </p>
    </div> */}
    <section className="w-full bg-[#F5F8FF] pt-10">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-[20px] lg:text-[24px] font-semibold mb-6">
          Modules
        </h2>

        {/* Category Row */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-6">

          {filteredModules.map((module) => (
            <Link
            key={module._id}
              href={`/MainModules/${toFolderName(module.name)}/${module._id}`}
              
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <div
                className="
                 
                  rounded-[15px]
                  flex
                  items-center
                  justify-center
                  shadow-sm
                  transition
                "
              >
                <img
                  src={module.image}
                  alt={module.name}
                  className="w-[140px] h-[130px] object-fit rounded-[15px]"
                  
                />
              </div>

              <p className="text-[13px] lg:text-[16px] flex  justify-center font-medium mt-2">
                {module.name}
              </p>
            </Link>
          ))}

        </div>
      </div>

    </section>

    </>
  );
}

