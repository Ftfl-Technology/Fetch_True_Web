// "use client";
// import Link from "next/link";
// import { CiBookmark } from "react-icons/ci";

// // interface FinanceCardProps {
// //   image: string;
// //   title: string;
// //   category: string;
// //   discount?: string;
// //   earnUpto?: string;
// //   rating: number;
// //   keyvalues:[];
  
// //   slug?: string;
// //   detailslug?: string;
// // }

// export default function FinanceCard ({
//   image,
//   title,
//   category,
//   discount,
//   earnUpto,
//   rating,
//   keyvalues,
  
// }:any) {
//   return (
//         // <Link href={`/MainModules/Finance/${moduleId}/${categoryId}`} className="block">

//     <div className="w-[340px] lg:w-[430px] h-[440px] bg-white rounded-[14px] border border-[#E7E7E7] shadow-[0px_4px_14px_rgba(0,0,0,0.06)] overflow-hidden">
      
//       {/* IMAGE */}
//       <div className="relative w-full aspect-[16/9]">
//       <div className="h-[220px] p-2 overflow-hidden items-center justify-center">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover rounded-[12px]"
//         />
//        </div>  

//         {/* DISCOUNT */}
//         {discount && (
//           <span className="absolute top-3 left-3 bg-[#EDFBEF] text-[12px] font-medium px-2 py-[2px] rounded-full shadow">
//             Discount {discount}%
//           </span>
//         )}

//         {/* BOOKMARK */}
//         <div className="absolute top-3 right-3 w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center shadow-md">
//           <CiBookmark size={20} color="white" />
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="px-4">
//         {/* HEADER */}
//         <div className="flex justify-between items-start gap-3">
//           <div>
//             <h3 className="text-[16px] font-medium text-[#1A1A1A]">
//               {title}
//             </h3>
//             <p className="inline-block mt-1 text-[13px] text-[#6F6F6F] bg-[#EEFFF1] border border-[#E4F8E7] px-2 py-[2px] rounded-full">
//               {category}
//             </p>
//           </div>

//           <div className="text-right">
//             {earnUpto && (
//               <span className="text-[11px] bg-[#EEF3FF] text-[#2E5BFF] px-2 py-1 rounded-full font-medium">
//                 Earn Upto {earnUpto}
//               </span>
//             )}

//             {/* RATING */}
//            <div className="flex justify-end gap-1 mt-2">
//   {[1, 2, 3, 4, 5].map((star) => {
//     const fullStars = Math.floor(rating);
//     const isHalfStar = rating - fullStars >= 0.5;

//     return (
//       <div key={star} className="relative text-[21px]">
//         {/* Empty star */}
//         <span className="text-gray-300">★</span>

//         {/* Full star */}
//         {star <= fullStars && (
//           <span className="absolute left-0 top-0 text-[#FBBD1D]">★</span>
//         )}

//         {/* Half star */}
//         {star === fullStars + 1 && isHalfStar && (
//           <span
//             className="absolute left-0 top-0 overflow-hidden text-[#FBBD1D]"
//             style={{ width: "50%" }}
//           >
//             ★
//           </span>
//         )}
//       </div>
//     );
//   })}
// </div>



//           </div>
//         </div>

//         {/* DIVIDER */}
//         {/* <div className="h-px bg-[#EEEEEE] my-4" /> */}

//         {/* DETAILS */}
//         {/* <div className="grid grid-cols-2  gap-4 text-[12px] mt-6">
//           {[
//             ["Loan Amount", loanAmount],
//             ["Approval Time", approvalTime],
//             ["Duration", duration],
//             ["Interest Rate", interestRate],
//           ].map(([label, value]) => (
//             <div key={label} className="flex items-start  gap-2">
//               <img
//                 src="/image/Vector (28).png"
//                 alt={label}
//                 className="w-[20px] h-[19px]"
//               />
//               <div>
//                 <p className="font-semibold text-[#606060] text-[14px]">
//                   {label}
//                 </p>
//                 <p className="text-[#868686] text-[12px]">{value}</p>
//               </div>
//             </div>
//           ))}
//         </div> */}
//        {keyvalues?.length > 0 && (
//   <div className="grid grid-cols-2 gap-4 text-[12px] ms-5 mt-5">
//     {keyvalues.slice(0, 4).map((value, index) => (
//       <div key={index} className="flex items-start gap-2">
//         <div>
//           <p className="font-semibold text-[#606060] text-[14px]">
            
//           </p>
//           <p className="text-[#868686] text-[12px] pl-4">
//             {value}
//           </p>
//         </div>
//       </div>
//     ))}
//   </div>
// )}

//       </div>
//     </div>
//         // </Link>
    
//   );
// };



"use client";
import Link from "next/link";
import { CiBookmark } from "react-icons/ci";

export default function FinanceCard({
  image,
  title,
  category,
  discount,
  earnUpto,
  rating = 0,
  keyvalues = [],
  isFavourite,
  onToggleFavourite,
}:any) {
  return (
    <div className="w-[340px] lg:w-[350px] h-[420px] bg-white rounded-[14px] border border-[#E7E7E7] shadow-[0px_4px_14px_rgba(0,0,0,0.06)] overflow-hidden">
      
      {/* IMAGE */}
      <div className="relative w-full aspect-[16/9]">
        <div className="h-[185px] p-2 overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>

        {/* DISCOUNT */}
        {discount && (
          <span className="absolute top-3 left-3 bg-[#EDFBEF] text-[12px] font-medium px-2 py-[2px] rounded-full shadow">
            Discount {discount}%
          </span>
        )}

        {/* BOOKMARK */}
        <button
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavourite();
  }}
  className={`absolute top-2 right-2 w-[24px] h-[24px] rounded-full flex items-center justify-center
    ${isFavourite ? "bg-red-500" : "bg-black"}`}
>
  <CiBookmark size={14} color="#fff" />
</button>
      </div>

      {/* CONTENT */}
      <div className="px-4">
        {/* HEADER */}
        <div className="flex justify-between items-start gap-3">
          <div>
            <h3 className="text-[16px] font-medium text-[#1A1A1A]">
              {title}
            </h3>

            <p className="inline-block mt-1 text-[13px] text-[#6F6F6F] bg-[#EEFFF1] border border-[#E4F8E7] px-2 py-[2px] rounded-full">
              {category}
            </p>
          </div>

          <div className="text-right">
            {earnUpto && (
              <span className="text-[11px] bg-[#EEF3FF] text-[#2E5BFF] px-2 py-1 rounded-full font-medium">
                Earn Upto {earnUpto}
              </span>
            )}

            {/* RATING */}
            <div className="flex justify-end gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => {
                const fullStars = Math.floor(rating);
                const isHalfStar = rating - fullStars >= 0.5;

                return (
                  <div key={star} className="relative text-[21px]">
                    {/* Empty */}
                    <span className="text-gray-300">★</span>

                    {/* Full */}
                    {star <= fullStars && (
                      <span className="absolute left-0 top-0 text-[#FBBD1D]">
                        ★
                      </span>
                    )}

                    {/* Half */}
                    {star === fullStars + 1 && isHalfStar && (
                      <span
                        className="absolute left-0 top-0 overflow-hidden text-[#FBBD1D]"
                        style={{ width: "50%" }}
                      >
                        ★
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* KEY VALUES */}
       {keyvalues.length > 0 && (
  <div className="grid grid-cols-2 gap-4 text-[12px] ms-5 mt-5">
    {keyvalues.slice(0, 4).map((item: any, index: number) => (
      <div key={item._id || index} className="flex items-start gap-2">
        <div>
         <p className="font-semibold text-[#606060] text-[14px]">
            {item.key}
           </p>
        <p className="text-[#868686] text-[12px] pl-4">
          {item.value}  {/* <-- render the string, not the object */}
        </p>
        </div>
      </div>
    ))}
  </div>
)}

      </div>
    </div>
  );
}
