

// "use client";

// import React from "react";
// import { CiBookmark } from "react-icons/ci";

// interface Feature {
//   title: string;
//   icon?: React.ReactNode;
// }

// interface HomeCardProps {
//   image: string;
//   title: string;
//   category: string;
//   type: string; // ✅ dynamic (from DB)
//   earnUpto?: string;
//   rating?: number;
//   reviews?: string;
//   features?: Feature[];
//   oldPrice?: number;
//   price?: number;
//   discount?: string;
// }

// const HomeCard: React.FC<HomeCardProps> = ({
//   image,
//   title,
//   category,
//   type,
//   earnUpto,
//   rating,
//   reviews,
//   features = [],
//   oldPrice,
//   price,
//   discount,
// }) => {
//   const isFinance = type?.toLowerCase() === "finance";

//   return (
//     <div className="w-[360px] lg:w-[424px] h-[426px] bg-gradient-to-b from-white to-[#D8E0F099] rounded-[14px] border border-[#E7E7E7] shadow-[0px_4px_14px_rgba(0,0,0,0.05)] p-4 flex flex-col gap-4">

//       {/* IMAGE */}
//       <div className="relative w-[392px] h-[150px] sm:h-[170px] lg:h-[190px] rounded-lg overflow-hidden">
//         <img src={image} alt={title} className="w-full h-full object-cover" />

//         <div className="absolute top-2 left-2 bg-white rounded-full p-1 shadow">
//           <input type="checkbox" />
//         </div>

//         <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
//           <CiBookmark size={20} />
//         </div>
//       </div>

//       {/* HEADER */}
//       <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
//         <div>
//           <h2 className="text-[15px] sm:text-[16px] font-medium line-clamp-2">
//             {title}
//           </h2>

//           <div className="flex flex-wrap items-center gap-2 mt-1">
//             <span className="text-[11px] px-2 py-[2px] rounded text-white bg-[#2164F4]">
//               {type}
//             </span>
//             {/* <span className="text-[12px] text-[#868686] font-medium">
//               {category}
//             </span> */}
//           </div>
//         </div>

//         <div className="sm:text-right">
//           {earnUpto && (
//             <p className="text-xs text-green-600 font-medium">
//               {earnUpto}
//             </p>
//           )}

//           {rating !== undefined && (
//             <p className="text-xs text-gray-500 mt-1 leading-tight">
//               {"⭐".repeat(Math.round(rating))}
//               <br />
//               {reviews}
//             </p>
//           )}
//         </div>
//       </div>

//       {/* FEATURES */}
//       {features.length > 0 && (
//         isFinance ? (
//           <div className="bg-white w-full h-[100px] rounded-[10px] border border-[#E7E7E7] grid grid-cols-2 sm:grid-cols-4 overflow-hidden">
//             {features.slice(0, 4).map((item, index) => {
//               const label = item.title.split(" ").slice(0, 2).join(" ");
//               const value = item.title.replace(/^[^0-9₹]*/, "");

//               return (
//                 <div
//                   key={index}
//                   className="px-3 py-3 text-center border-b sm:border-b-0 sm:border-r last:border-r-0 flex flex-col items-center gap-1"
//                 >
//                   {item.icon && <div>{item.icon}</div>}
//                   <p className="text-[11px] text-[#777]">{label}</p>
//                   <p className="text-[14px] font-semibold">{value}</p>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="bg-white w-full h-[100px] rounded-[10px] border border-[#E7E7E7] p-3 flex justify-between gap-4">
//             <div className="space-y-2">
//               {features.map((item, index) => (
//                 <div key={index} className="flex items-center gap-2 text-[13px] text-[#555]">
//                   {item.icon }
//                   <span>{item.title}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-col items-end justify-between">
//               {discount && (
//                 <span className="bg-[#22C55E] text-white text-[12px] px-2 py-[2px] rounded-md font-medium">
//                   {discount}
//                 </span>
//               )}

//               {(oldPrice || price) && (
//                 <div className="text-right">
//                   <p className="text-[13px] text-[#666]">Starting From</p>
//                   <div className="flex items-center gap-2">
//                     {oldPrice && (
//                       <span className="text-[#999] line-through text-[14px]">
//                         ₹{oldPrice}
//                       </span>
//                     )}
//                     {price && (
//                       <span className="text-[18px] font-semibold">
//                         ₹{price}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         )
//       )}

//     </div>
//   );
// };

// export default HomeCard;






import { User } from "lucide-react";
import { CiBookmark } from "react-icons/ci";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/src/context/AuthContext";
import { useFavourites } from "@/src/context/FavouriteContext";
import { useModule } from "@/src/context/ModuleContext";


type Props = {
    id: string;
    title: string;
    image: string;
    type: string;
    rating?: number;
    moduleName: string;
    reviews?: number;
    price?: number;
    oldPrice?: number;
    discount?: string;
    features: { title: string; key?: string, icon?: string }[];
    investmentRange?: { _id: string, range: string; parameters: string };
    monthlyEarnPotential?: { _id: string, range: string; parameters: string };
    roi?: string;
    franchiseDetails?: {
        commission?: string;
        areaRequired?: string;
        investmentRange?: { _id: string, range: string; parameters: string };
        monthlyEarnPotential?: { _id: string, range: string; parameters: string };
        franchiseModel?: {
            _id: string;
            title: string;
            agreement: string;
            price: number;
            discount: number;
            gst: number;
            fees: number;
        };
    };
    
};



export default function HomeCard({
    id,
    title,
    image,
    type,
    moduleName,
    rating,
    reviews,
    price,
    oldPrice,
    discount,
    features,
    investmentRange,
    monthlyEarnPotential,
    roi,
    franchiseDetails
}: Props) {
    const { addFavourite, removeFavourite, isFavourite, fetchFavourites } = useFavourites();
    const { user } = useAuth();

    const { categoryId } = useParams<{
        moduleId: string;
        categoryId: string;
      }>();

    const userId = user?._id;

    useEffect(() => {
        if (userId) {
            fetchFavourites(userId);
        }
    }, [userId]);
    const router = useRouter()
     const { modules } = useModule();
    const isFranchiseOrFinanceOrBusiness =
        moduleName.toLowerCase().includes("franchise") ||
        moduleName.toLowerCase().includes("finance") ||
        moduleName.toLowerCase().includes("business") ||
        moduleName.toLowerCase().includes("ai hub");

    const isFinance = moduleName.toLowerCase().includes("finance")
    const isFranchise = moduleName.toLowerCase().includes("franchise")
    const isBusiness = moduleName.toLowerCase().includes("business")
    const isAIHub = moduleName.toLowerCase().includes("ai hub")

    // Get commission from franchiseDetails or use default
    const commission = franchiseDetails?.commission || "5%";
    const displayCommission = commission.includes("%") ? commission : `${commission}%`;

    // Helper function to get display text for feature keys
    const getDisplayKey = (key: string | undefined, title: string): string => {
        if (key && key.trim() !== "") {
            return key;
        }


        if (title.toLowerCase().includes("loan")) return "Loan Amount";
        if (title.toLowerCase().includes("approval")) return "Approval Time";
        if (title.toLowerCase().includes("duration")) return "Duration";
        if (title.toLowerCase().includes("interest")) return "Interest Rate";
        if (title.toLowerCase().includes("setup")) return "Setup Time";
        if (title.toLowerCase().includes("ai training")) return "AI Training";
        if (title.toLowerCase().includes("maintenance")) return "Maintenance";
        if (title.toLowerCase().includes("support")) return "Support";
        if (title.toLowerCase().includes("delivery")) return "Delivery";

        return "Feature";
    };

    // Filter out features with empty titles or icons if needed
    const filteredFeatures = features.filter(f =>
        f.title && f.title.trim() !== "" &&
        f.title !== "undefined" &&
        !f.title.includes("undefined")
    );

    // Find specific franchise features
    const totalOutlet = isFranchiseOrFinanceOrBusiness
        ? filteredFeatures.find(item => {
            const key = item.key?.toLowerCase().trim();
            const titleText = item.title?.toLowerCase().trim();
            return key === "total outlet in india" ||
                key === "total outlets in india" ||
                titleText === "total outlet in india" ||
                titleText?.includes("outlet") ||
                titleText?.includes("outlets");
        })
        : undefined;

    const profitMargin = isFranchiseOrFinanceOrBusiness
        ? filteredFeatures.find(item => {
            const key = item.key?.toLowerCase().trim();
            const titleText = item.title?.toLowerCase().trim();
            return key === "profit margin" ||
                titleText === "profit margin" ||
                titleText?.includes("profit") ||
                titleText?.includes("margin");
        })
        : undefined;

    const toFolderName = (name: string) =>
        name.trim().replace(/\s+/g, "-");

    // const handleClick = () => {
    //     const commentPathModules = ['Legal-Services', 'Finance', 'Business', 'AI-Hub', 'Franchise'];
    //     const folderName = toFolderName(moduleName);
    //     if (commentPathModules.includes(folderName)) {
    //         // Comment path
    //         router.push(`/MainModules/${toFolderName(moduleName)}/[moduleId]/[categoryId]/${id}?service=${encodeURIComponent(title)}`);
    //     } else {
    //         // Default path
    //         router.push(`/MainModules/${toFolderName(moduleName)}/ServiceDetails/${id}?service=${encodeURIComponent(title)}`);
    //     }
    // };

//    const handleClick = () => {
//         const commentPathModules = ['Legal-Services', 'Finance', 'Business', 'AI-Hub', 'Franchise'];
//         const folderName = toFolderName(moduleName);

//         if (commentPathModules.includes(folderName)) {

//             const moduleData = modules?.find(
//                 (module: any) => module.name === "Business"
//             );

//             const moduleId = moduleData?._id;


//             if (moduleId) {
//                 router.push(`/MainModules/${folderName}/${moduleId}/[categoryId]/${id}`);
//             } else {
//                 router.push(`/MainModules/${folderName}/ServiceDetails/${id}?service=${encodeURIComponent(title)}`);
//             }
//         } else {
//             router.push(`/MainModules/${folderName}/ServiceDetails/${id}?service=${encodeURIComponent(title)}`);
//         }
//     };

const handleClick = () => {
    const commentPathModules = ['Legal-Services', 'Finance', 'Business', 'AI-Hub', 'Franchise'];
    const folderName = toFolderName(moduleName);
    
    if (commentPathModules.includes(folderName)) {
        // Find the module ID from modules.data array
        const moduleData = modules?.find(
            (m) => commentPathModules.includes(m.name) // Check if module name is in the list
        );
        
        const moduleId = moduleData?._id;
        
        if (moduleId) {
            router.push(`/MainModules/${folderName}/${moduleId}/${categoryId}/${id}`);
        } else {
            router.push(`/MainModules/${folderName}/ServiceDetails/${id}?service=${encodeURIComponent(title)}`);
        }
    } else {
        router.push(`/MainModules/${folderName}/ServiceDetails/${id}?service=${encodeURIComponent(title)}`);
    }
};

    const handleToggleFavourite = async (serviceId: string) => {
        if (!userId) return;
        if (isFavourite(serviceId)) {
            await removeFavourite(userId, serviceId);
        } else {
            await addFavourite(userId, serviceId);
        }
    };


    return (
        <div className="w-[345px] h-[360px] mx-auto md:w-[400px] md:h-[380px] lg:w-[424px] lg:h-[400px] flex-shrink-0 bg-gradient-to-b 
            from-white to-[#D8E0F099] rounded-[14px] border border-[#E7E7E7] 
            shadow p-4 flex flex-col gap-4"
            // onClick={() =>
            //     // router.push(`/MainModules/${toFolderName(moduleName)}/ServiceDetails/${id}?service=${encodeURIComponent(title)}`)
            //      router.push(`/MainModules/${toFolderName(moduleName)}/[moduleId]/[categoryId]/${id}?service=${encodeURIComponent(title)}`)
            // }
            onClick={handleClick}
        >


            {/* IMAGE */}
            <div className="relative rounded-lg ">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-[152px] lg:h-[170px] object-fit rounded-lg"
                    onError={(e) => {
                        // Fallback image if the main image fails to load
                        e.currentTarget.src = "https://via.placeholder.com/424x170/2164F4/FFFFFF?text=Service+Image";
                    }}
                />

                {/* <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow cursor-pointer hover:bg-gray-50">
                    <CiBookmark size={20} />
                </div> */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleToggleFavourite(id);
                    }}
                    className={`absolute top-6 right-6 w-[24px] h-[24px] rounded-full flex items-center justify-center
                                                                                ${isFavourite(id) ? "bg-red-500" : "bg-black"}`}
                >
                    <CiBookmark size={14} color="#fff" />
                </button>
            </div>

            {/* HEADER */}
            <div className="flex items-start justify-between">
                {/* LEFT SIDE */}
                <div className="min-w-0 flex-1">
                    <h2 className="text-[14px] lg:text-[16px] font-medium line-clamp-2 break-words -mt-2">
                        {title}
                    </h2>

                    <div className="mt-2 flex items-center gap-2">
                        <span className="text-[12px] lg:text-[14px] px-2 py-[2px] rounded text-white bg-[#2164F4] whitespace-nowrap">
                            {moduleName}
                        </span>
                        <span className="text-gray-500 text-[12px] lg:text-[14px]">
                            {type}
                        </span>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col items-end shrink-0 ml-2">
                    <p className="text-gray-600 px-2 py-1 text-[8px] lg:text-[12px] bg-green-100 rounded-lg font-medium whitespace-nowrap -mt-2 mb-1 border border-green-200">
                        Earn Up to {displayCommission}
                    </p>

                    {rating !== undefined && (
                        <>
                            <div className="flex items-center text-yellow-400 text-[20px] md:text-[25px] leading-none">
                                {rating !== undefined && (
                                    <div className="text-xs text-gray-500 flex flex-col justify-center shrink-0">
                                        <div className="flex items-center text-yellow-400 text-[20px] md:text-[25px] gap-1 ml-2 leading-none">
                                            {(() => {
                                                const clampedRating = Math.max(0, Math.min(5, rating));
                                                const rounded = Math.round(clampedRating * 2) / 2;
                                                const fullStars = Math.floor(rounded);
                                                const hasHalfStar = rounded % 1 !== 0;
                                                const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

                                                return (
                                                    <div className="flex items-center gap-0 text-[12px] md:text-[18px] leading-none">
                                                        {/* Full stars */}
                                                        {[...Array(fullStars)].map((_, i) => (
                                                            <span key={`full-${i}`} className="text-yellow-400">
                                                                ★
                                                            </span>
                                                        ))}

                                                        {/* Half star */}
                                                        {hasHalfStar && (
                                                            <span className="relative inline-block w-[1em]">
                                                                <span className="absolute overflow-hidden w-1/2 text-yellow-400">
                                                                    ★
                                                                </span>
                                                                <span className="text-gray-300">★</span>
                                                            </span>
                                                        )}

                                                        {/* Empty stars */}
                                                        {[...Array(emptyStars)].map((_, i) => (
                                                            <span key={`empty-${i}`} className="text-gray-300">
                                                                ★
                                                            </span>
                                                        ))}
                                                    </div>
                                                );
                                            })()}
                                        </div>
                                        <div className="flex justify-center items-center mt-1">
                                            <User className="inline-block w-[12px] h-[12px] flex-shrink-0" />
                                            <span className="ml-1 text-[12px]">{reviews} reviews</span>
                                        </div>
                                    </div>
                                )}
                            </div>


                        </>
                    )}
                </div>
            </div>

            {/* FEATURES */}
            <div className="bg-white rounded-[10px] h-[96px] flex items-center">
                {isFranchiseOrFinanceOrBusiness ? (
                    /* FRANCHISE / FINANCE / BUSINESS / AI HUB */
                    <div className="bg-white rounded-[10px] w-full">

                        {/* FRANCHISE */}
                        {isFranchise && (
                            <div className="grid grid-cols-3 w-full h-full">
                                {investmentRange && (
                                    <div className="relative px-2 flex flex-col gap-1 text-center justify-center">
                                        <span className="font-semibold text-[12px] lg:text-[12px] text-gray-900">
                                            Investment Range
                                        </span>
                                        <span className="text-[10px] lg:text-[12px] text-gray-500">
                                            {investmentRange.range} {investmentRange.parameters}
                                        </span>
                                    </div>
                                )}

                                {profitMargin && (
                                    <div className="relative px-2 flex flex-col gap-1 text-center justify-center">
                                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-[1px] bg-gray-300" />
                                        <span className="font-semibold text-[12px] lg:text-[12px] text-gray-900">
                                            Profit Range
                                        </span>
                                        <span className="text-[12px] lg:text-[12px] text-gray-500">
                                            {profitMargin.title}
                                        </span>
                                    </div>
                                )}



                                {totalOutlet ? (
                                    <div className="relative px-2 flex flex-col gap-1 text-center justify-center">
                                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-[1px] bg-gray-300" />
                                        <span className="font-semibold text-[12px] lg:text-[12px] text-gray-900 line-clamp-2">
                                            {getDisplayKey(totalOutlet.key, totalOutlet.title)}
                                        </span>
                                        <span className="text-[12px] lg:text-[12px] text-gray-500">
                                            {totalOutlet.title}
                                        </span>
                                    </div>
                                ) : filteredFeatures[2] ? (
                                    <div className="relative px-2 flex flex-col gap-1 text-center justify-center">
                                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-[1px] bg-gray-300" />
                                        <span className="font-semibold text-[12px] lg:text-[12px] text-gray-900 line-clamp-2">
                                            {getDisplayKey(filteredFeatures[2].key, filteredFeatures[2].title)}
                                        </span>
                                        <span className="text-[12px] lg:text-[12px] text-gray-500">
                                            {filteredFeatures[2].title}
                                        </span>
                                    </div>
                                ) : null}
                            </div>
                        )}

                        {/* FINANCE */}
                        {isFinance && (
                            <div className="grid grid-cols-4 bg-white rounded-[10px] h-[90px] w-full">
                                {filteredFeatures.slice(0, 4).map((item, i) => (
                                    <div
                                        key={i}
                                        className="relative flex flex-col items-center justify-center px-2 text-center h-[90px]"
                                    >
                                        {/* Divider */}
                                        {i !== 0 && (
                                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-gray-300" />
                                        )}

                                        <span className="font-semibold text-[12px] lg:text-[12px] text-gray-900 line-clamp-2">
                                            {getDisplayKey(item.key, item.title)}
                                        </span>

                                        <span className="text-[12px] lg:text-[12px] text-gray-500 line-clamp-2 mt-1">
                                            {item.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* BUSINESS */}
                        {isBusiness && (
                            <div className="grid grid-cols-2 w-full h-full">
                                {investmentRange && (
                                    <div className="relative px-2 flex flex-col gap-1 text-center justify-center">
                                        <span className="font-semibold text-[12px] lg:text-[12px] text-gray-900">
                                            Investment Range
                                        </span>
                                        <span className="text-[12px] lg:text-[12px] text-gray-500">
                                            {investmentRange.range} {investmentRange.parameters}
                                        </span>
                                    </div>
                                )}

                                {monthlyEarnPotential && (
                                    <div className="relative px-2 flex flex-col gap-1 text-center justify-center">
                                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-[1px] bg-gray-300" />
                                        <span className="font-semibold text-[12px] lg:text-[12px] text-gray-900">
                                            Monthly Earnings
                                        </span>
                                        <span className="text-[12px] lg:text-[12px] text-gray-500">
                                            {monthlyEarnPotential.range} {monthlyEarnPotential.parameters}
                                        </span>
                                    </div>
                                )}

                                {/* {franchiseDetails?.commission && (
                                    <div className="relative px-2 flex flex-col gap-1 text-center justify-center">
                                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-[1px] bg-gray-300" />
                                        <span className="font-semibold text-[12px] lg:text-[12px] text-gray-900">
                                            Commission
                                        </span>
                                        <span className="text-[12px] lg:text-[12px] text-gray-500">
                                            {displayCommission}
                                        </span>
                                    </div>
                                )} */}
                            </div>
                        )}

                        {/* AI HUB */}
                        {isAIHub && (
                            <div className="w-full">
                                <div className="flex items-center justify-between min-h-[56px] w-full">
                                    <div className="space-y-2 p-2 flex-1 min-w-0">
                                        {filteredFeatures.map((f, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-1 leading-[0.6] text-[12px] lg:text-[14px]"
                                            >
                                                {f.icon && (
                                                    <img
                                                        src={f.icon}
                                                        alt="icon"
                                                        className="w-4 h-4 object-contain flex items-center justify-center"
                                                        onError={(e) => {
                                                            e.currentTarget.style.display = 'none';
                                                        }}
                                                    />
                                                )}
                                                <span className="min-w-0 whitespace-nowrap font-medium">
                                                    {getDisplayKey(f.key, f.title)}:
                                                </span>
                                                <span className="min-w-0 whitespace-nowrap text-gray-600">
                                                    {f.title}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="text-right shrink-0 ml-0 md:ml-4 lg:ml-6 p-2">
                                        {discount && (
                                            <span className="bg-green-500 text-white text-[10px] lg:text-[12px] px-2 py-1 rounded">
                                                {discount}
                                            </span>
                                        )}
                                        {price && (
                                            <>
                                                <p className="text-[10px] lg:text-[10px] text-gray-500 mt-1">Starting From</p>
                                                <div className="flex gap-1 justify-end items-center">
                                                    {oldPrice && (
                                                        <span className="line-through text-gray-400 text-[10px] lg:text-[12px]">
                                                            {oldPrice}
                                                        </span>
                                                    )}
                                                    <span className="font-semibold text-[12px] lg:text-[16px]">
                                                        {price}
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    /* NORMAL SERVICE (On-Demand, Marketing, Legal, IT Services, etc.) */
                    <div className="flex items-center justify-between h-[56px] w-full">
                        <div className="space-y-2 p-2 flex-1">
                            {filteredFeatures.map((f, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 leading-tight text-[12px] lg:text-[14px]"
                                >
                                    {f.icon && (
                                        <img
                                            src={f.icon}
                                            alt="icon"
                                            className="w-4 h-4 object-contain flex items-center justify-center"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    )}
                                    {/* <span className="min-w-0 break-words whitespace-normal font-medium">
                                        {getDisplayKey(f.key, f.title)}:
                                    </span> */}
                                    <span className="min-w-0 break-words leading-[1.0] whitespace-normal text-gray-600">
                                        {f.title}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="text-right shrink-0 ml-2 p-2">
                            {discount && (
                                <span className="bg-green-500 text-white text-[10px] lg:text-[12px] px-2 py-1 rounded">
                                    {discount}
                                </span>
                            )}
                            {price && (
                                <>
                                    <p className="text-[10px] lg:text-[10px] text-gray-500 mt-1">Starting From</p>
                                    <div className="flex gap-1 justify-end items-center">
                                        {oldPrice && (
                                            <span className="line-through text-gray-400 text-[10px] lg:text-[12px]">
                                                ₹{oldPrice}
                                            </span>
                                        )}
                                        <span className="font-semibold text-[12px] lg:text-[16px]">
                                            ₹{price}
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}