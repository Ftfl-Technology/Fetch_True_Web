// "use client";

// import React, { useState } from "react";

// /* ================= TYPES ================= */
// type InfoItem = {
//     id: number;
//     title: string;
//     description: string;
//     image: string;
// };

// /* ================= MOCK DATA ================= */
// const INFO_DATA: InfoItem[] = [
//     {
//         id: 1,
//         title: "Brand Understanding",
//         description:
//             "We first understand your brand’s purpose, audience, and personality. This helps us design a logo that truly fits your identity and communicates your message clearly.",
//         image: "/image/moreinfo1.png",
//     },
//     {
//         id: 2,
//         title: "Creative Research",
//         description:
//             "We explore multiple creative directions and visual concepts to ensure originality and relevance for your brand.",
//         image: "/image/moreinfo2.png",
//     },
//     {
//         id: 3,
//         title: "Design Execution",
//         description:
//             "Our designers convert ideas into meaningful visuals with precision, balance, and clarity.",
//         image: "/image/moreinfo3.png",
//     },
//     {
//         id: 4,
//         title: "Final Delivery",
//         description:
//             "We deliver polished, scalable, and production-ready designs aligned with your business goals.",
//         image: "/image/moreinfo1.png",
//     },
// ];

// /* ================= COMPONENT ================= */
// const MoreInformation: React.FC = () => {
//     const [activeId, setActiveId] = useState<number>(1);

//     return (
//         <section className="bg-[#F7F7F7] py-16 px-4">
//             {/* TITLE */}
//              <div className="flex items-start lg:items-center lg:justify-center ml-4 mb-4">
//                 <h2 className="text-[#2164F4] font-semibold text-[16px] lg:text-[36px]">
//                     More Information
//                 </h2>
//             </div>


//             {/* ================= DESKTOP (UNCHANGED) ================= */}
//             <div className="hidden md:flex max-w-7xl mx-auto h-auto gap-4">
//                 {INFO_DATA.map((item) => {
//                     const isActive = activeId === item.id;

//                     return (
//                         <div
//                             key={item.id}
//                             onClick={() => setActiveId(item.id)}
//                             className={`relative cursor-pointer w-[900px] h-[600px] rounded-2xl overflow-hidden transition-all duration-500
//                 ${isActive ? "flex-[3]" : "flex-[1]"}
//               `}
//                         >
//                             <img
//                                 src={item.image}
//                                 alt={item.title}
//                                 className="w-full h-full object-cover"
//                             />

//                             <div
//                                 className={`absolute inset-0 bg-black transition-opacity
//                   ${isActive ? "opacity-60" : "opacity-40"}
//                 `}
//                             />

//                             {isActive && (
//                                 <div className="absolute inset-0 p-8 flex flex-col justify-start text-white">
//                                     <h3 className="md:text-[36px] font-semibold mb-3">
//                                         {item.title}
//                                     </h3>
//                                     <p className="md:text-[24px] leading-relaxed max-w-md">
//                                         {item.description}
//                                     </p>
//                                 </div>
//                             )}
//                         </div>
//                     );
//                 })}
//             </div>


//             {/* ================= MOBILE COLUMN (TAP TO REVEAL) ================= */}
//             <div className="md:hidden max-w-md mx-auto space-y-4">
//                 {INFO_DATA.map((item) => {
//                     const isActive = activeId === item.id;

//                     return (
//                         <div
//                             key={item.id}
//                             onClick={() => setActiveId(item.id)}
//                             className={`
//           relative w-full rounded-2xl overflow-hidden cursor-pointer
//           transition-all duration-500 ease-in-out
//           ${isActive ? "h-[292px]" : "h-[90px]"}
//         `}
//                         >
//                             {/* IMAGE */}
//                             <img
//                                 src={item.image}
//                                 alt={item.title}
//                                 className="absolute inset-0 w-full h-full object-cover"
//                             />

//                             {/* DARK OVERLAY */}
//                             <div
//                                 className={`absolute inset-0 bg-black transition-opacity duration-300
//             ${isActive ? "opacity-70" : "opacity-40"}
//           `}
//                             />

//                             {/* CONTENT ON IMAGE */}
//                             <div
//                                 className={`
//             absolute inset-0 p-4 flex flex-col justify-end text-white
//             transition-all duration-400
//             ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
//           `}
//                             >
//                                 <h3 className="text-lg font-semibold mb-2">
//                                     {item.title}
//                                 </h3>

//                                 <p className="text-sm leading-relaxed">
//                                     {item.description}
//                                 </p>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>



//         </section>
//     );
// };

// export default MoreInformation;






"use client";

import { useState } from "react";

/* ================= TYPES ================= */
type moreInfoProps = {
    moreInfo: {
        _id: string;
        title: string;
        description: string;
        image: string;
    }[];
};


/* ================= COMPONENT ================= */
export default function MoreInformation({ moreInfo }: moreInfoProps) {
    const [activeIndex, setActiveIndex] = useState(0);


    return (
        <section className="bg-[#F7F7F7] py-4 px-4">
            {/* TITLE */}
            <div className="flex items-start lg:items-center lg:justify-center ml-4 mb-4">
                <h2 className="text-[#2164F4] font-semibold text-[16px] md:text-[24px] lg:text-[36px]">
                    More Information
                </h2>
            </div>


            {/* ================= DESKTOP ================= */}
            <div className="hidden md:flex md:w-[700px] lg:w-[1320px] mx-auto h-[600px] gap-4">
                {moreInfo.map((item, index) => {
                    const isActive = activeIndex === index;

                    return (
                        <div
                            key={item._id}
                            onClick={() => setActiveIndex(index)}
                            className={`relative cursor-pointer md:h-[400px] lg:h-[470px] rounded-2xl overflow-hidden transition-all duration-500
                            ${isActive ? "flex-[3]" : "flex-[1]"}
                        `}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />

                            <div
                                className={`absolute inset-0  transition-opacity
                        ${isActive ? "opacity-60" : "opacity-40"}
                        `}
                            />

                            {isActive && (
                                <div className="absolute inset-0 p-8 text-white">
                                    <h3 className="md:text-[24px] lg:text-[36px] font-semibold mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="md:text-[18px] lg:text-[24px] max-w-md">
                                        {item.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                })}

            </div>


            {/* ================= MOBILE COLUMN ================= */}
            <div className="md:hidden max-w-md mx-auto space-y-4">
                {moreInfo.map((item, index) => {
                    const isActive = activeIndex === index;

                    return (
                        <div
                            key={item._id} // keep stable key
                            onClick={() => setActiveIndex(index)}
                            className={`
          relative w-full rounded-2xl overflow-hidden cursor-pointer
          transition-all duration-500 ease-in-out
          ${isActive ? "h-[292px]" : "h-[90px]"}
        `}
                        >
                            {/* IMAGE */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* DARK OVERLAY */}
                            <div
                                className={`
            absolute inset-0 transition-opacity duration-300
            ${isActive ? "opacity-70" : "opacity-40"}
          `}
                            />

                            {/* CONTENT ON IMAGE */}
                            <div
                                className={`
            absolute inset-0 p-4 flex flex-col justify-start text-white
            transition-all duration-400
            ${isActive
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-6"}
          `}
                            >
                                <h3 className="text-lg font-semibold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>



        </section>
    );
};

