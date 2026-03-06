// "use client";

// import { Phone, Mail } from "lucide-react";


// type ConnectWithItem = {
//   _id: string;
//   name: string;
//   mobileNo: string;
//   email: string;
// };

// type ConnectWithProps = {
//   connectWith?: ConnectWithItem[];
// };

// export default function ConnectWith({ connectWith }: ConnectWithProps) {
//   const manager = connectWith?.[0];

//   if (!manager) return null;

//   return (
//     <section className="bg-gray-100 p-4">
//       <div className="md:w-[500px] lg:w-[700px] md:ml-auto lg:mr-[100px] md:flex-none lg:flex lg:items-center lg:justify-between bg-white rounded-xl px-4 py-5 md:px-10 md:py-10  gap-4">

        
//         <div className="flex  items-center justify-between w-full">
//           <div className="flex flex-col">
//             <p className="text-teal-600 text-[10px] md:text-[18px] lg:text-[24px] mb-1 whitespace-nowrap">
//               Connect With
//             </p>
//             <h2 className="text-[14px] md:text-[18px] lg:text-[18px] font-semibold text-[#5A3A2E] whitespace-nowrap">
//               {manager.name}
//             </h2>
//           </div>

//           <div className="flex items-center gap-4">
//             <a
//               href={`tel:${manager.mobileNo}`}
//               className="p-2 rounded-full hover:bg-gray-100"
//             >
//               <Phone className="text-green-500 w-[24px] h-[24px] md:w-[32px] md:h-[32px] lg:w-[45px] lg:h-[45px]" />
//             </a>

//             <a
//               href={`mailto:${manager.email}`}
//               className="p-2 rounded-full hover:bg-gray-100"
//             >
//               <Mail className="text-blue-500 w-[24px] h-[24px] md:w-[32px] md:h-[32px] lg:w-[45px] lg:h-[45px]" />
//             </a>
//           </div>

//         </div>

//       </div>
//     </section>

     
//   );
// }



"use client";

import { Phone, Mail } from "lucide-react";

type ConnectWithItem = {
  _id: string;
  name: string;
  mobileNo: string;
  email: string;
};

type ConnectWithProps = {
  connectWith?: ConnectWithItem[];
};

export default function ConnectWith({ connectWith }: ConnectWithProps) {
  const manager = connectWith?.[0];

  if (!manager) return null;

  return (
    <section className="bg-gray-100 p-4">
      <div className="md:w-[500px] lg:w-[500px] mx-auto bg-white flex justify-between items-center rounded-xl px-6 py-4 md:px-8 md:py-5">
        <div className="flex flex-col items-start justify-start">
          <span className="text-teal-600 text-[14px] md:text-[16px] lg:text-[18px]">
            Connect With
          </span>
          <span className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-[#5A3A2E]">
            {manager.name}
          </span>
        </div>

        
        <div className="flex items-center justify-center gap-2 mt-4">
          <a
            href={`tel:${manager.mobileNo}`}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Phone className="text-green-500 w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
          </a>

          <a
            href={`mailto:${manager.email}`}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Mail className="text-blue-500 w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
          </a>
        </div>

      </div>
    </section>
  );
}