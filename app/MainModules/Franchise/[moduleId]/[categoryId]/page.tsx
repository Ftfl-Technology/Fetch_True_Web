// 'use client'

// import { useRef, useEffect, useState } from "react";
// import { FiArrowUpRight } from "react-icons/fi";
// import { MdLocationOn } from "react-icons/md";
// import Image from "next/image";
// import { Bookmark, ChevronLeft } from "lucide-react";
// import Link from "next/link";

// export default function FranchiseCategoryServicePage() {
//     const properties = [
//         {
//             id: 1,
//             bgColor: "linear-gradient(135deg, #e8a58a, #d47c6e)",
//             image: "/mockup/building.png",
//             title: "Residential Property",
//             type: "Real Estate",
//             rating: 4,
//             location: "Near Andheri West, Mumbai",
//             earning: "5%",
//             discount: "30%",
//             monthlyEarning: "10-20 L",
//             outlets: 10,
//             area: "1500 Sq - 1000 Sq",
//             price: "45L",
//             priceValue: 4500000
//         },
//         {
//             id: 2,
//             bgColor: "linear-gradient(135deg, #b084f8, #9b63f4)",
//             image: "/mockup/building.png",
//             title: "Luxury Apartment",
//             type: "Real Estate",
//             rating: 5,
//             location: "Banjara Hills, Hyderabad",
//             earning: "7%",
//             discount: "25%",
//             monthlyEarning: "12-22 L",
//             outlets: 14,
//             area: "1800 Sq - 1200 Sq",
//             price: "72L",
//             priceValue: 7200000
//         },
//         {
//             id: 3,
//             bgColor: "linear-gradient(135deg, #4ccbb8, #2ea89c)",
//             image: "/mockup/building.png",
//             title: "Commercial Space",
//             type: "Business Property",
//             rating: 4,
//             location: "Koramangala, Bangalore",
//             earning: "6%",
//             discount: "20%",
//             monthlyEarning: "8-15 L",
//             outlets: 7,
//             area: "1300 Sq - 900 Sq",
//             price: "89L",
//             priceValue: 8900000
//         },
//         {
//             id: 4,
//             bgColor: "linear-gradient(135deg, #ff9da7, #ff6b81)",
//             image: "/mockup/building.png",
//             title: "Studio Apartment",
//             type: "Real Estate",
//             rating: 3,
//             location: "Powai, Mumbai",
//             earning: "4%",
//             discount: "15%",
//             monthlyEarning: "6-12 L",
//             outlets: 6,
//             area: "900 Sq - 700 Sq",
//             price: "38L",
//             priceValue: 3800000
//         },
//         {
//             id: 5,
//             bgColor: "linear-gradient(135deg, #9df0ff, #59d9f3)",
//             image: "/mockup/building.png",
//             title: "Retail Shop",
//             type: "Commercial",
//             rating: 4,
//             location: "Gachibowli, Hyderabad",
//             earning: "6%",
//             discount: "20%",
//             monthlyEarning: "8-18 L",
//             outlets: 12,
//             area: "1100 Sq - 850 Sq",
//             price: "55L",
//             priceValue: 5500000
//         },
//     ];

//     // Price categories
//     const priceCategories = [
//         { id: "all", label: "All", min: 0, max: Infinity },
//         { id: "10-20", label: "10L-20L", min: 1000000, max: 2000000 },
//         { id: "20-30", label: "20L-30L", min: 2000000, max: 3000000 },
//         { id: "30-40", label: "30L-40L", min: 3000000, max: 4000000 },
//         { id: "40-50", label: "40L-50L", min: 4000000, max: 5000000 },
//         { id: "50+", label: "50L+", min: 5000000, max: Infinity },
//     ];

//     // State for selected category and filtered properties
//     const [selectedCategory, setSelectedCategory] = useState("all");
//     const [filteredProperties, setFilteredProperties] = useState(properties);
//     const [searchQuery, setSearchQuery] = useState("");

//     // Filter properties based on selected category
//     const filterPropertiesByPrice = (categoryId: string) => {
//         setSelectedCategory(categoryId);

//         if (categoryId === "all") {
//             setFilteredProperties(properties);
//             return;
//         }

//         const category = priceCategories.find(cat => cat.id === categoryId);
//         if (!category) return;

//         const filtered = properties.filter(property =>
//             property.priceValue >= category.min && property.priceValue <= category.max
//         );

//         setFilteredProperties(filtered);
//     };

//     const categoryItems = [
//         { label: "Residential Property", path: "/image/building1.png" },
//         { label: "Commercial Property", path: "/image/building2.png" },
//         { label: "Property Management", path: "/image/building3.png" },
//         { label: "Residential Property", path: "/image/building1.png" },
//         { label: "Commercial Property", path: "/image/building2.png" },
//         { label: "Property Management", path: "/image/building3.png" }

//     ]

//     // FIXED: Create separate refs for each carousel
//     const budgetRef = useRef<HTMLDivElement>(null);
//     const recommendedRef = useRef<HTMLDivElement>(null);
//     const topPicksRef = useRef<HTMLDivElement>(null);

//     // FIXED: Separate state for each carousel
//     const [isDragging, setIsDragging] = useState({
//         budget: false,
//         recommended: false,
//         topPicks: false
//     });
//     const [startX, setStartX] = useState({ x: 0, section: '' });
//     const [scrollLeft, setScrollLeft] = useState({ left: 0, section: '' });

//     // Calculate max scroll for a specific container
//     const getMaxScroll = (container: HTMLDivElement | null) => {
//         if (!container) return 0;
//         return container.scrollWidth - container.clientWidth;
//     };

//     // Generic drag handlers that work with any ref
//     const createDragHandlers = (ref: React.RefObject<HTMLDivElement | null>, section: string) => {

//         const handleMouseDown = (e: React.MouseEvent) => {
//             if (!ref.current) return;

//             setIsDragging(prev => ({ ...prev, [section]: true }));
//             const container = ref.current;
//             const rect = container.getBoundingClientRect();
//             setStartX({ x: e.pageX - rect.left, section });
//             setScrollLeft({ left: container.scrollLeft, section });
//             container.style.cursor = 'grabbing';
//             container.style.userSelect = 'none';
//         };

//         const handleMouseLeave = () => {
//             if (isDragging[section as keyof typeof isDragging] && ref.current) {
//                 setIsDragging(prev => ({ ...prev, [section]: false }));
//                 const container = ref.current;
//                 container.style.cursor = 'grab';
//                 container.style.removeProperty('user-select');
//             }
//         };

//         const handleMouseUp = () => {
//             if (!ref.current) return;

//             setIsDragging(prev => ({ ...prev, [section]: false }));
//             const container = ref.current;
//             container.style.cursor = 'grab';
//             container.style.removeProperty('user-select');

//             // Snap to nearest card - FIXED for mobile responsiveness
//             const cardElement = container.querySelector('.snap-center') as HTMLElement;
//             const cardWidth = cardElement?.offsetWidth || 300;
//             const gap = window.innerWidth < 768 ? 16 : 24; // Responsive gap
//             const scrollPos = container.scrollLeft;
//             const cardCount = Math.round(scrollPos / (cardWidth + gap));

//             container.scrollTo({
//                 left: cardCount * (cardWidth + gap),
//                 behavior: 'smooth'
//             });
//         };

//         const handleMouseMove = (e: React.MouseEvent) => {
//             if (!isDragging[section as keyof typeof isDragging] || !ref.current || startX.section !== section) return;
//             e.preventDefault();

//             const container = ref.current;
//             const rect = container.getBoundingClientRect();
//             const x = e.pageX - rect.left;
//             const walk = (x - startX.x) * 1.5;

//             // Calculate new scroll position
//             let newScrollLeft = scrollLeft.left - walk;
//             const maxScroll = getMaxScroll(container);

//             // Apply boundaries
//             newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScroll));

//             container.scrollLeft = newScrollLeft;
//         };

//         // Touch event handlers
//         const handleTouchStart = (e: React.TouchEvent) => {
//             if (!ref.current) return;

//             setIsDragging(prev => ({ ...prev, [section]: true }));
//             const container = ref.current;
//             const rect = container.getBoundingClientRect();
//             setStartX({ x: e.touches[0].pageX - rect.left, section });
//             setScrollLeft({ left: container.scrollLeft, section });
//         };

//         const handleTouchMove = (e: React.TouchEvent) => {
//             if (!isDragging[section as keyof typeof isDragging] || !ref.current || startX.section !== section) return;
//             const container = ref.current;
//             const rect = container.getBoundingClientRect();
//             const x = e.touches[0].pageX - rect.left;
//             const walk = (x - startX.x) * 1.5;

//             let newScrollLeft = scrollLeft.left - walk;
//             const maxScroll = getMaxScroll(container);
//             newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScroll));

//             container.scrollLeft = newScrollLeft;
//         };

//         return {
//             handleMouseDown,
//             handleMouseLeave,
//             handleMouseUp,
//             handleMouseMove,
//             handleTouchStart,
//             handleTouchMove
//         };
//     };

//     // Create handlers for each section
//     const budgetHandlers = createDragHandlers(budgetRef, 'budget');
//     const recommendedHandlers = createDragHandlers(recommendedRef, 'recommended');
//     const topPicksHandlers = createDragHandlers(topPicksRef, 'topPicks');

//     return (
//         <>
//             {/* MAIN WRAPPER */}
//             <section
//                 style={{
//                     backgroundImage: "url('/image/Background design.png')",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                 }}
//                 className="
//           w-full h-auto rounded-t-none overflow-x-hidden
//           px-4 lg:px-10 py-6 lg:py-6
//           bg-[#F9F5FF]
//         "
//             >
//                 {/* ---------------- NAVBAR ---------------- */}
//                 <section className="relative w-full">
//                     {/* ===== NAVBAR ===== */}
//                     <div className="hidden md:block lg:block w-full">
//                         <div className="flex items-center justify-between rounded-xl">
//                             <div className="flex items-center bg-[#FFFFFF] px-18 py-4 rounded-4xl gap-4 ml-10">
//                                 <Link href="/">
//                                     <img src="/image/educationback.png" className="w-[30px] cursor-pointer" />
//                                 </Link>
//                                 <h1 className="text-lg md:text-2xl font-semibold">Real Estate</h1>
//                             </div>

//                             {/* SEARCH */}
//                             <div className="flex items-center gap-4 mr-10">
//                                 {/* SEARCH */}
//                                 <div className="hidden md:block relative w-[260px] lg:w-[280px]">
//                                     <input
//                                         type="text"
//                                         placeholder="Search"
//                                         value={searchQuery}
//                                         onChange={(e) => setSearchQuery(e.target.value)}
//                                         className="
//                                                       w-full
//                                                       rounded-lg bg-white
//                                                       border border-gray-300
//                                                       px-10 py-4
//                                                       text-sm
//                                                       outline-none
//                                                       focus:border-blue-500
//                                                   "
//                                     />

//                                     {/* search icon */}
//                                     <span className="absolute left-3 top-1/2 -translate-y-1/2">
//                                         <img
//                                             src="/image/itsearch.png"
//                                             alt="searchicon"
//                                             className="w-[18px] h-[18px]"
//                                         />
//                                     </span>
//                                 </div>

//                                 {/* BOOKMARK / LOCATION ICON */}
//                                 <img
//                                     src="/image/EducationServicebookmark.png"
//                                     className="w-[20px] cursor-pointer"
//                                 />
//                             </div>


//                         </div>

//                     </div>
//                 </section>

//                 {/* ================= NAVBAR MOBILE ================= */}
//                 <section>
//                     <div
//                         className="
//                                                 block md:hidden lg:hidden
//                                                 w-full -mt-10 w-screen md:-mx-0 
//                                                  -mx-4 
//                                                 flex flex-col rounded-tl-none rounded-tr-none
//                                                 px-4 py-8 md:px-10 md:py-10
//                                                 gap-3
//                                             "
//                     >
//                         {/* ===== ROW 1: HEADER ===== */}
//                         <div className="flex items-center justify-between">
//                             {/* LEFT */}
//                             <div className="flex items-center gap-3 px-4 py-3 min-w-0 bg-white rounded-full">
//                                 <Link href="/MainModules/OnDemand">
//                                     <ChevronLeft className="w-[28px] h-[28px] text-black cursor-pointer  p-1 shrink-0" />
//                                 </Link>

//                                 <h1 className="text-[16px] font-semibold truncate">
//                                     {/* {formatSlugToTitle(slug)} */} Real Estate
//                                 </h1>
//                             </div>

//                             {/* RIGHT */}
//                             <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full shrink-0">
//                                 <img
//                                     src="/image/EducationServicebookmark.png"
//                                     className="w-[14px] h-[14px]"
//                                     alt="Bookmark"
//                                 />
//                             </div>
//                         </div>

//                         {/* ===== ROW 2: SEARCH ===== */}
//                         <div className="relative w-[90%] md:w-[95%] mx-auto ml-6">
//                             <input
//                                 type="text"
//                                 placeholder="Search"
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                 className="w-full rounded-full bg-white border border-gray-300 px-10 py-2 text-sm outline-none"
//                             />
//                             <span className="absolute left-4 top-1/2 -translate-y-1/2">
//                                 <img
//                                     src="/image/itsearch.png"
//                                     className="w-[18px] h-[16px]"
//                                     alt="Search"
//                                 />
//                             </span>
//                         </div>
//                     </div>
//                 </section>

//                 {/* ---------------- HERO SECTION ---------------- */}
//                 <div className="w-full hidden md:block lg:block mt-4">
//                     <div className="relative w-full h-[290px] flex items-center justify-between mx-auto rounded-2xl overflow-hidden bg-white px-10">

//                         {/* LEFT CONTENT */}
//                         <div className="relative z-10">
//                             {/* Background text */}
//                             <h1 className="md:text-[100px] lg:text-[131.69px] font-bold text-gray-200 opacity-40 leading-none">
//                                 REAL <br /> ESTATE
//                             </h1>

//                             {/* Foreground heading */}
//                             <h2
//                                 className="absolute top-4 left-10 text-[#0C1B36] text-[32px]"
//                                 style={{ fontFamily: "GFS Didot" }}
//                             >
//                                 Explore Our Real Estate <br /> Services
//                             </h2>
//                         </div>

//                         {/* RIGHT CONTENT */}
//                         <div className="relative z-10 flex flex-row">
//                             <div>
//                                 <img
//                                     src="/image/Houseimage.png"
//                                     alt="House"
//                                     className="w-[296px] md:w-[317px] md:h-[205px] h-[227px] object-contain"
//                                 />
//                             </div>
//                             <div className="mt-2">
//                                 <FiArrowUpRight className="text-purple-500 md:w-[58px] md:h-[58px] lg:w-[78px] lg:h-[78px] mt-2 bg-[#F8F3FF] rounded-full p-4" />
//                             </div>
//                         </div>

//                     </div>

//                 </div>



//                 {/* ---------------- HERO SECTION MOBILE VERSION ---------------- */}
//                 <div className="w-full block md:hidden lg:hidden mt-10">
//                     <div
//                         className="relative w-full  min-h-[393px] mx-auto rounded-2xl overflow-hidden bg-white"
//                     >
//                         {/* Bg Text Layer */}
//                         <div className="absolute inset-0 mt-25 ml-4 flex items-start pointer-events-none">
//                             <h1 className="font-bold font-[400] text-[52.34px] left-0 text-gray-200 opacity-40 tracking-wider leading-none text-start"
//                             >
//                                 REAL <br /> ESTATE
//                             </h1>
//                         </div>

//                         {/* Arrow Button */}
//                         <div className="absolute top-4 right-4 w-[70.04px] h-[70.04px] rounded-full bg-white shadow-lg flex items-center justify-center">
//                             <FiArrowUpRight className="text-purple-500 w-10 h-10" />
//                         </div>

//                         {/* Main Heading */}
//                         <h2
//                             className="absolute top-5 left-5 font-[400] text-[#0C1B36]"
//                             style={{
//                                 fontFamily: "GFS Didot",
//                                 fontWeight: 400,
//                                 fontStyle: "normal",
//                                 fontSize: "29.05px",
//                                 lineHeight: "30.01px",
//                                 letterSpacing: "0%",
//                                 verticalAlign: "middle",
//                             }}
//                         >
//                             Explore Our<br /> Real Estate<br />Services
//                         </h2>

//                         {/* House Image */}
//                         {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2"> */}
//                         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center">
//                             {/* <div className="absolute bottom-4 right-5"> */}
//                             <img
//                                 src="/image/Houseimage.png"
//                                 className="w-full max-w-[296px] h-auto object-contain"
//                             />

//                         </div>
//                     </div>
//                 </div>



//                 {/* Category */}
//                 <div className="w-full hidden lg:block relative overflow-hidden">
//                     <p className="text-2xl md:text-4xl text-black font-semibold mt-4 ml-6 md:mt-6 md:ml-8"
//                         style={{ fontWeight: 600 }}>Category</p>
//                     <div className="flex gap-8 p-6">
//                         {categoryItems.map((items) => (
//                             <div key={items.label} className="relative w-[189.14px] h-[226.29px]">
//                                 {/* Background Image */}
//                                 <Image
//                                     src="/image/rectangularcategory.png"
//                                     alt="rectangular"
//                                     fill
//                                     className="object-cover"
//                                 />

//                                 {/* Centered Foreground Image */}
//                                 <img
//                                     src={items.path}
//                                     alt="buildings"
//                                     width={140.16}
//                                     height={140.16}
//                                     className="absolute left-1/2 bottom-5 -translate-x-1/2 translate-y-[10%] object-cover"
//                                 />

//                                 {/* Text over curved background */}
//                                 <p
//                                     className="absolute ml-10 top-1 left-1/2 -translate-x-1/2 text-start"
//                                     style={{
//                                         fontFamily: "Inter",
//                                         fontWeight: 400,
//                                         fontSize: "18.4px",
//                                         lineHeight: "20.6px",
//                                         color: "#000",
//                                     }}
//                                 >
//                                     {items.label}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>



//                 {/* Category Mobile Version */}
//                 <div className="w-fullhidden block lg:hidden relative overflow-hidden">
//                     <p className="text-[16px] text-black font-semibold mt-4 ml-6 md:mt-6 md:ml-8"
//                         style={{ fontWeight: 600 }}>Category</p>
//                     <div className="flex gap-14 p-6">
//                         {categoryItems.map((items) => (
//                             <div key={items.label} className="relative w-[103.72px] h-[123px]">
//                                 {/* Background Image */}
//                                 <Image
//                                     src="/image/rectangularcategory.png"
//                                     alt="rectangular"
//                                     fill
//                                     className="object-cover"
//                                 />

//                                 {/* Centered Foreground Image */}
//                                 <Image
//                                     src={items.path}
//                                     alt="buildings"
//                                     width={96.19}
//                                     height={96.19}
//                                     className="absolute left-1/2 bottom-5 -translate-x-1/2 translate-y-[10%] object-cover"
//                                 />

//                                 {/* Text over curved background */}
//                                 <p
//                                     className="absolute ml-4 top-1 font-semibold text-[11px] left-1/2 -translate-x-1/2 text-start"
//                                     style={{
//                                         fontFamily: "Inter",
//                                         fontWeight: 400,
//                                         // fontSize: "18.4px",
//                                         lineHeight: "12.6px",
//                                         color: "#000",
//                                     }}
//                                 >
//                                     {items.label}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>




//                 {/* Search According To Your Budget */}
//                 <div className="bg-white rounded-xl">
//                     <div className="w-full relative overflow-hidden p-0 md:p-4">
//                         <p className="text-[16px] md:text-4xl text-black font-semibold mt-4 ml-6 md:mt-6 md:ml-8"
//                             style={{ fontWeight: 600 }}>Search According To Your Budget</p>
//                     </div>

//                     {/* Price Categories */}
//                     <div
//                         className="
//                                     flex gap-4 mb-0 md:gap-8 p-4 md:p-2 
//                                     overflow-x-auto md:overflow-x-visible 
//                                     ml-5 md:ml-10 
//                                     no-scrollbar 
//                                     snap-x snap-mandatory
//                                 ">
//                         {priceCategories.map((category) => (
//                             <div
//                                 key={category.id}
//                                 className={`
//                                         relative w-[100px] h-[40px] 
//                                         flex items-center justify-center 
//                                         rounded-3xl cursor-pointer 
//                                         transition-all duration-300 
//                                         shrink-0 snap-start
//                                         ${selectedCategory === category.id
//                                         ? "bg-purple-500 text-white shadow-lg"
//                                         : "bg-gray-200 text-black"
//                                     }
//                                     `}
//                                 onClick={() => filterPropertiesByPrice(category.id)}
//                             >
//                                 <span className="font-semibold text-sm md:text-base">
//                                     {category.label}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>


//                     {/* SWIPEABLE PROPERTY CARDS - BUDGET SECTION */}
//                     <div className="relative w-full overflow-hidden p-0 md:p-6">
//                         <div
//                             ref={budgetRef}
//                             className="flex gap-4 md:gap-14 pl-4 md:pl-6 pr-2 md:pr-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar cursor-grab"
//                             onMouseDown={budgetHandlers.handleMouseDown}
//                             onMouseLeave={budgetHandlers.handleMouseLeave}
//                             onMouseUp={budgetHandlers.handleMouseUp}
//                             onMouseMove={budgetHandlers.handleMouseMove}
//                             onTouchStart={budgetHandlers.handleTouchStart}
//                             onTouchMove={budgetHandlers.handleTouchMove}
//                             onTouchEnd={budgetHandlers.handleMouseUp}
//                         >
//                             {filteredProperties.length > 0 ? (
//                                 filteredProperties.map((p) => (
//                                     <div
//                                         key={p.id}

//                                         className="snap-center flex-shrink-0 
//                                         // w-[80vw]      
//                                         // sm:w-[300px]
//                                         // md:w-[338px]
//                                         w-[calc(100vw-2rem)]
//                                         sm:w-[300px]
//                                         md:w-[338px]
//                                         relative rounded-2xl p-2 shadow-md text-white
//                                         overflow-hidden select-none"

//                                         style={{
//                                             background: "radial-gradient(50% 50% at 50% 50%, rgba(58, 46, 194, 0.8) 0%, rgba(90, 142, 255, 0.8) 100%)"
//                                         }}
//                                     >
//                                         {/* IMAGE SECTION */}
//                                         <div className="relative w-full h-40 rounded-xl">
//                                             <Image
//                                                 src={p.image}
//                                                 alt="Property"
//                                                 fill
//                                                 className="object-cover rounded-xl pointer-events-none"
//                                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                                             />

//                                             <span className="absolute top-2 flex left-2 bg-white text-blue-600 font-semibold px-2 py-1 rounded-lg shadow" style={{ fontWeight: "600", fontSize: "12px" }}>
//                                                 <img src="/image/security.png" alt="security" width={16.66} height={16.66} /> Trusted
//                                             </span>

//                                             <button className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full hover:bg-black/80 transition-colors z-10" onClick={(e) => e.stopPropagation()}>
//                                                 <Bookmark size={18} className="text-white" />
//                                             </button>

//                                             <div className="absolute -bottom-10 right-0 bg-white p-2 rounded-2xl shadow-lg flex flex-col items-center">
//                                                 <Image src="/mockup/propertyicon.png" alt="icon" width={80} height={80} className="object-contain pointer-events-none" />
//                                                 <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
//                                                     {"⭐".repeat(p.rating)}
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* CONTENT SECTION */}
//                                         <div className="mt-12 space-y-1">
//                                             <h2 className="text-lg font-semibold">{p.title}</h2>
//                                             <p className="text-sm opacity-90">{p.type}</p>
//                                             <div className="relative mt-3">
//                                                 <div className="absolute inset-0">
//                                                     <img src="/image/bordercut.png" alt="bordercut" className="w-full rounded-xl h-full object-cover" />
//                                                 </div>
//                                                 <div className="relative z-10 p-4">
//                                                     <div className="flex items-start justify-between w-full">
//                                                         <div className="flex-1">
//                                                             <h3 className="text-sm font-semibold mb-1">Location</h3>
//                                                             <p className="text-xs opacity-95 font-inter flex items-center gap-1">
//                                                                 <MdLocationOn size={24} className="text-white-600" /> {p.location}
//                                                             </p>
//                                                         </div>
//                                                         <div className="flex flex-col gap-2 items-end ml-4">
//                                                             <span className="bg-white text-black text-xs px-2 py-1 rounded-lg font-semibold whitespace-nowrap">
//                                                                 Earn Up to {p.earning}
//                                                             </span>
//                                                             <span className="bg-green-300 text-black text-xs px-2 py-1 rounded-lg font-semibold whitespace-nowrap">
//                                                                 {p.discount} Discount
//                                                             </span>
//                                                         </div>
//                                                     </div>
//                                                     <div className="mt-3 text-xs opacity-95 space-y-1">
//                                                         <p className="font-medium">Details</p>
//                                                         <p>Monthly Earning Potential: <b>{p.monthlyEarning}</b></p>
//                                                         <p>Number Outlet: <b>{p.outlets}</b></p>
//                                                         <div className="flex items-center gap-2">
//                                                             <img src="/image/area.png" alt="area" width={20} height={20} />
//                                                             <span>Area <b>{p.area}</b></span>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="relative h-0">
//                                                 <div className="absolute bottom-2 right-0 -mr-0 sm:w-[72px] sm:h-[62px] w-[50px] h-[50px] bg-white text-black font-semibold sm:px-4 sm:py-5 px-2 py-4 rounded-2xl z-20 pointer-events-none" style={{ fontSize: "16px", fontWeight: "600" }}>
//                                                     ₹{p.price}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))
//                             ) : (
//                                 <div className="snap-center flex-shrink-0 w-[calc(100vw-2rem)] sm:w-[calc(100vw-3rem)] md:w-[338px] h-[480px] relative rounded-2xl p-3 shadow-md text-black flex items-center justify-center bg-gray-500 select-none">
//                                     <p className="text-center text-lg font-semibold">Not Available within this budget</p>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>




//                 {/* Recommendation Section */}
//                 <div className="relative w-full overflow-visible md:overflow-hidden p-4 md:p-4">
//                     <p className="text-[16px] md:text-4xl text-black font-semibold mt-4 ml-3 md:mt-6 md:ml-12"
//                         style={{ fontWeight: 600 }}>Recommended For You</p>

//                     {/* SWIPEABLE CONTAINER - RECOMMENDED SECTION */}
//                     <div
//                         ref={recommendedRef}
//                         // className="flex gap-4 pl-4 pr-8 md:pl-6 md:pr-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar cursor-grab"
//                         className="
//                             flex gap-6 md:gap-10
//                             pl-4
//                             md:pl-6 md:pr-6
//                             overflow-x-auto
//                             md:snap-x md:snap-mandatory
//                             scroll-smooth
//                             no-scrollbar
//                             cursor-grab
//                             "

//                         onMouseDown={recommendedHandlers.handleMouseDown}
//                         onMouseLeave={recommendedHandlers.handleMouseLeave}
//                         onMouseUp={recommendedHandlers.handleMouseUp}
//                         onMouseMove={recommendedHandlers.handleMouseMove}
//                         onTouchStart={recommendedHandlers.handleTouchStart}
//                         onTouchMove={recommendedHandlers.handleTouchMove}
//                         onTouchEnd={recommendedHandlers.handleMouseUp}
//                     >
//                         {properties.map((p) => (
//                             <div
//                                 key={p.id}
//                                 className="md:snap-center flex-shrink-0 
//                                       w-[68vw]            /* mobile: full card + partial next */
//                                     sm:w-[85vw]         /* small devices */
//                                     md:w-[242.57px]     /* desktop unchanged */

//                                             md:h-[300.26px]
//                                            min-w-0
//                                            relative rounded-2xl p-5 -ml-5 md:ml-5 shadow-md text-white overflow-hidden select-none"
//                                 style={{
//                                     backgroundImage: `url(${"/image/recommendedrealestate.png"})`,
//                                     backgroundSize: "cover",
//                                     backgroundPosition: "center",
//                                 }}
//                             >
//                                 {/* IMAGE SECTION */}
//                                 <div className="relative w-[226.83px] h-[111.45px] max-w-full rounded-xl">

//                                     <Image
//                                         src={p.image}
//                                         alt="Property"
//                                         fill
//                                         className="object-cover rounded-xl pointer-events-none"
//                                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                                     />

//                                     <span className="absolute top-2 flex left-2 bg-white text-blue-600 font-semibold px-2 py-1 rounded-lg shadow" style={{ fontWeight: "600", fontSize: "12px" }}>
//                                         <img src="/image/security.png" alt="security" width={16.66} height={16.66} /> Trusted
//                                     </span>

//                                     <button
//                                         className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full hover:bg-black/80 transition-colors z-10"
//                                         onClick={(e) => e.stopPropagation()}
//                                     >
//                                         <Bookmark size={18} className="text-white" />
//                                     </button>

//                                     <div className="absolute bottom-2 right-2 flex items-center gap-2 text-yellow-400 text-xl md:text-2xl mt-1">
//                                         {Array(p.rating).fill(0).map((_, i) => (
//                                             <span key={i}>★</span>
//                                         ))}
//                                         {Array(5 - p.rating).fill(0).map((_, i) => (
//                                             <span key={i}>☆</span>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* CONTENT SECTION */}
//                                 <div className="mt-2 space-y-0">
//                                     <h2 className="text-black font-semibold text-[14px] md:[18.36px]" style={{ fontWeight: 600 }}>{p.title}</h2>
//                                     <p className="text-black opacity-90" style={{ fontSize: "13.11px" }}>{p.type}</p>
//                                     <div className="relative mt-0">
//                                         {/* Background image */}
//                                         <div className="absolute inset-0">
//                                             <img
//                                                 src="/image/bordercut.png"
//                                                 alt="bordercut"
//                                                 className="w-full rounded-xl h-full object-cover"
//                                                 width={312}
//                                                 height={159}
//                                             />
//                                         </div>

//                                         {/* Content overlay */}
//                                         <div className="relative z-10 p-2">
//                                             <div className="flex items-start justify-between w-full">
//                                                 <div className="flex-1">
//                                                     <h3 className="text-xs text-black">Location</h3>
//                                                     <p className="text-xs text-black font-semibold opacity-95 font-inter flex items-center gap-1"
//                                                         style={{ fontSize: "8.48px" }}>
//                                                         <MdLocationOn size={20} className="text-black-600" /> {p.location}
//                                                     </p>
//                                                 </div>

//                                                 <div className="flex flex-col gap-1 items-end ml-1">
//                                                     <span className="bg-white text-black md:text-[9px] text-[9px] px-1 py-1 rounded-lg font-semibold whitespace-nowrap"
//                                                     >
//                                                         Earn Up to {p.earning}
//                                                     </span>
//                                                     {/* <span className="bg-green-300 text-black text-[10px] md:w-[64.53px] md:h-[15.14px] p-4 px-1 py-1 rounded-md font-semibold whitespace-nowrap"
//                                                         >
//                                                         {p.discount} Discount
//                                                     </span> */}
//                                                     <span className="bg-green-300 text-black 
//                                         px-2 py-1 md:text-[9px] text-[9px]
//                                         rounded-md font-semibold whitespace-nowrap 
//                                         flex items-center justify-center">
//                                                         {p.discount} Discount
//                                                     </span>

//                                                 </div>
//                                             </div>

//                                             <div className="mt-0 text-xs opacity-95 space-y-0 md:mb-2">
//                                                 <p className="font-medium text-[10px] md:text-[10px] text-black">Details</p>
//                                                 <p className="text-black text-[10px] md:text-[10px]">Monthly Earning Potential: <b>{p.monthlyEarning}</b></p>
//                                                 <p className="text-black text-[10px] md:text-[10px]">Number Outlet: <b>{p.outlets}</b></p>
//                                                 <div className="flex items-center gap-1">
//                                                     <img src="/image/recloc.png" alt="area" width={20} height={20} />
//                                                     <span className="text-black md:{text-1opx] text-[10px] break-words whitespace-normal">Area <b className="text-9px break-words">{p.area}</b></span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="relative h-0">
//                                         <div
//                                             className="absolute bottom-2 right-0 w-[52px] h-[42px]  text-black font-semibold px-7 md:px-5 py-5 md:py-3 rounded-2xl z-20 pointer-events-none"
//                                             style={{ fontSize: "15px", fontWeight: "600" }}
//                                         >
//                                             ₹{p.price}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Today Top Picks Section */}
//                 <div className="relative w-full overflow-hidden p-0 md:p-6">
//                     <h1 className="text-2xl md:text-4xl font-semibold mb-4 ml-6 md:mb-6 md:ml-8"
//                         style={{ fontWeight: 600 }}> Today Top Picks</h1>

//                     {/* SWIPEABLE CONTAINER - TOP PICKS SECTION */}
//                     <div
//                         ref={topPicksRef}
//                         className="flex gap-14 pl-4 md:pl-6 pr-2 md:pr-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar cursor-grab"
//                         onMouseDown={topPicksHandlers.handleMouseDown}
//                         onMouseLeave={topPicksHandlers.handleMouseLeave}
//                         onMouseUp={topPicksHandlers.handleMouseUp}
//                         onMouseMove={topPicksHandlers.handleMouseMove}
//                         onTouchStart={topPicksHandlers.handleTouchStart}
//                         onTouchMove={topPicksHandlers.handleTouchMove}
//                         onTouchEnd={topPicksHandlers.handleMouseUp}
//                     >
//                         {properties.map((p) => (
//                             <div
//                                 key={p.id}
//                                 className="snap-center flex-shrink-0 
//                                            w-[calc(100vw-2rem)] 
//                                            sm:w-[calc(100vw-3rem)]
//                                            md:w-[338px]
//                                            min-w-0
//                                            relative rounded-2xl p-3 shadow-md text-white overflow-hidden select-none mx-1"
//                                 style={{ background: p.bgColor }}
//                             >
//                                 {/* IMAGE SECTION */}
//                                 <div className="relative w-full h-40 rounded-xl">
//                                     <Image
//                                         src={p.image}
//                                         alt="Property"
//                                         fill
//                                         className="object-cover rounded-xl pointer-events-none"
//                                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                                     />

//                                     <span className="absolute top-2 flex left-2 bg-white text-blue-600 font-semibold px-2 py-1 rounded-lg shadow" style={{ fontWeight: "600", fontSize: "12px" }}>
//                                         <img src="/image/security.png" alt="security" width={16.66} height={16.66} /> Trusted
//                                     </span>

//                                     <button
//                                         className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full hover:bg-black/80 transition-colors z-10"
//                                         onClick={(e) => e.stopPropagation()}
//                                     >
//                                         <Bookmark size={18} className="text-white" />
//                                     </button>

//                                     <div className="absolute -bottom-10 right-0 bg-white p-2 rounded-2xl shadow-lg flex flex-col items-center">
//                                         <Image
//                                             src="/mockup/propertyicon.png"
//                                             alt="icon"
//                                             width={80}
//                                             height={80}
//                                             className="object-contain pointer-events-none"
//                                         />
//                                         <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
//                                             {"⭐".repeat(p.rating)}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* CONTENT SECTION */}
//                                 <div className="mt-12 space-y-1">
//                                     <h2 className="text-lg font-semibold">{p.title}</h2>
//                                     <p className="text-sm opacity-90">{p.type}</p>
//                                     <div className="relative mt-3">
//                                         {/* Background image */}
//                                         <div className="absolute inset-0">
//                                             <img
//                                                 src="/image/bordercut.png"
//                                                 alt="bordercut"
//                                                 className="w-full rounded-xl h-full object-cover"
//                                                 width={312}
//                                                 height={159}
//                                             />
//                                         </div>

//                                         {/* Content overlay */}
//                                         <div className="relative z-10 p-4">
//                                             <div className="flex items-start justify-between w-full">
//                                                 <div className="flex-1">
//                                                     <h3 className="text-sm font-semibold mb-1">Location</h3>
//                                                     <p className="text-xs opacity-95 font-inter flex items-center gap-1">
//                                                         <MdLocationOn size={24} className="text-white-600" /> {p.location}
//                                                     </p>
//                                                 </div>

//                                                 <div className="flex flex-col gap-2 items-end ml-4">
//                                                     <span className="bg-white text-black text-xs px-2 py-1 rounded-lg font-semibold">
//                                                         Earn Up to {p.earning}
//                                                     </span>
//                                                     <span className="bg-green-300 text-black text-xs px-2 py-1 rounded-lg font-semibold">
//                                                         {p.discount} Discount
//                                                     </span>
//                                                 </div>
//                                             </div>

//                                             <div className="mt-3 text-xs opacity-95 space-y-1">
//                                                 <p className="font-medium">Details</p>
//                                                 <p>Monthly Earning Potential: <b>{p.monthlyEarning}</b></p>
//                                                 {/* <p className="leading-normal break-words">
//                                                     Monthly Earning Potential:{' '}
//                                                     <b className="text-xs md:text-base leading-none">
//                                                         {p.monthlyEarning}
//                                                     </b>
//                                                 </p> */}


//                                                 <p>Number Outlet: <b>{p.outlets}</b></p>
//                                                 <div className="flex items-center gap-2">
//                                                     <img src="/image/area.png" alt="area" width={20} height={20} />
//                                                     <span>Area <b>{p.area}</b></span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="relative h-0">
//                                         <div className="absolute bottom-2 right-0 -mr-0 sm:w-[72px] sm:h-[62px] w-[50px] h-[50px] bg-white text-black font-semibold sm:px-4 sm:py-5 px-2 py-4 rounded-2xl z-20 pointer-events-none" style={{ fontSize: "16px", fontWeight: "600" }}>
//                                             ₹{p.price}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Footer Content */}
//                 <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-8 md:mt-15 ml-0 md:ml-10 gap-6 md:gap-8 lg:gap-10">
//                     {/* LEFT TEXT SECTION */}
//                     <div className="md:w-1/2 pl-2 md:pl-0">
//                         <p
//                             className="font-semibold hidden lg:block mt-30 leading-tight text-[22px] sm:text-[26px] md:text-3xl lg:text-4xl"
//                             style={{ fontWeight: 500 }}
//                         >
//                             We are Building <br /> Path for you
//                         </p>
//                         {/* Mobile */}
//                         <p
//                             className="font-bold text-black block lg:hidden leading-tight text-[14px] sm:text-[26px]"
//                         >
//                             We are Building Path for you
//                         </p>

//                         {/* Desktop */}
//                         <p
//                             className="text-black mt-2 md:mt-3 hidden lg:block leading-snug text-[16px] sm:text-lg md:text-xl lg:text-2xl"
//                             style={{ fontWeight: 400 }}
//                         >
//                             an easy way of selling <br /> and purchase
//                         </p>
//                         {/* Mobile */}
//                         <p
//                             className="text-black mt-2 md:mt-3 block lg:hidden leading-snug text-[14px] sm:text-lg md:text-xl lg:text-2xl"
//                             style={{ fontWeight: 400 }}
//                         >
//                             an easy way of selling and purchase
//                         </p>
//                     </div>

//                     {/* RIGHT GRID SECTION */}
//                     <div className="grid grid-cols-2 gap-3 md:gap-4 rounded-xl p-2 sm:p-3 md:p-4 w-full max-w-[517px] overflow-hidden">
//                         {/* CARD — REUSABLE STYLE */}
//                         {[
//                             {
//                                 num: "01",
//                                 text: "Trusted and authorized Propertys",
//                                 img: "/image/footerrect1.png",
//                             },
//                             {
//                                 num: "02",
//                                 text: "User Recommendation for better feed",
//                                 img: "/image/footerrect2.png",
//                             },
//                             {
//                                 num: "03",
//                                 text: "In Your budget with category Selection",
//                                 img: "/image/footerrect3.png",
//                             },
//                             {
//                                 num: "04",
//                                 text: "Clear detail about the property Retail Service",
//                                 img: "/image/footerrect4.png",
//                             },
//                         ].map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="rounded-2xl p-2 sm:p-3 md:p-4 text-purple-700 font-semibold bg-white/50 backdrop-blur-lg relative 
//                                      h-[110px] sm:h-[130px] md:h-[150px] lg:h-[180px] overflow-hidden"
//                             >
//                                 <Image
//                                     src={item.img}
//                                     alt="rectangular background"
//                                     fill
//                                     className="absolute object-cover rounded-2xl"
//                                 />

//                                 <div className="relative z-10">
//                                     <p className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold">
//                                         {item.num}
//                                     </p>

//                                     <p className="mt-1 md:mt-2 text-[10px] sm:text-xs md:text-sm lg:text-[18px] ml-10 font-medium text-purple-800 leading-snug break-words">
//                                         {item.text}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }






// 'use client'

// import { useRef, useState } from "react";
// import { FiArrowUpRight } from "react-icons/fi";
// import Image from "next/image";
// import { ChevronLeft } from "lucide-react";
// import Link from "next/link";
// import SearchBudget from "@/src/components/FranchiseCategories/SearchBudget";
// import RecommendedSection from "@/src/components/FranchiseCategories/Recommended";
// import MostPopular from "@/src/components/FranchiseCategories/MostPopular";
// import WhyChooseUs from "@/src/components/FranchiseCategories/WhyChooseUs";


// export default function FranchiseCategoryServicePage() {
//     const properties = [
//         {
//             id: 1,
//             bgColor: "linear-gradient(135deg, #e8a58a, #d47c6e)",
//             image: "/mockup/building.png",
//             title: "Residential Property",
//             type: "Real Estate",
//             rating: 4,
//             location: "Near Andheri West, Mumbai",
//             earning: "5%",
//             discount: "30%",
//             monthlyEarning: "10-20 L",
//             outlets: 10,
//             area: "1500 Sq - 1000 Sq",
//             price: "45L",
//             priceValue: 4500000
//         },
//         {
//             id: 2,
//             bgColor: "linear-gradient(135deg, #b084f8, #9b63f4)",
//             image: "/mockup/building.png",
//             title: "Luxury Apartment",
//             type: "Real Estate",
//             rating: 5,
//             location: "Banjara Hills, Hyderabad",
//             earning: "7%",
//             discount: "25%",
//             monthlyEarning: "12-22 L",
//             outlets: 14,
//             area: "1800 Sq - 1200 Sq",
//             price: "72L",
//             priceValue: 7200000
//         },
//         {
//             id: 3,
//             bgColor: "linear-gradient(135deg, #4ccbb8, #2ea89c)",
//             image: "/mockup/building.png",
//             title: "Commercial Space",
//             type: "Business Property",
//             rating: 4,
//             location: "Koramangala, Bangalore",
//             earning: "6%",
//             discount: "20%",
//             monthlyEarning: "8-15 L",
//             outlets: 7,
//             area: "1300 Sq - 900 Sq",
//             price: "89L",
//             priceValue: 8900000
//         },
//         {
//             id: 4,
//             bgColor: "linear-gradient(135deg, #ff9da7, #ff6b81)",
//             image: "/mockup/building.png",
//             title: "Studio Apartment",
//             type: "Real Estate",
//             rating: 3,
//             location: "Powai, Mumbai",
//             earning: "4%",
//             discount: "15%",
//             monthlyEarning: "6-12 L",
//             outlets: 6,
//             area: "900 Sq - 700 Sq",
//             price: "38L",
//             priceValue: 3800000
//         },
//         {
//             id: 5,
//             bgColor: "linear-gradient(135deg, #9df0ff, #59d9f3)",
//             image: "/mockup/building.png",
//             title: "Retail Shop",
//             type: "Commercial",
//             rating: 4,
//             location: "Gachibowli, Hyderabad",
//             earning: "6%",
//             discount: "20%",
//             monthlyEarning: "8-18 L",
//             outlets: 12,
//             area: "1100 Sq - 850 Sq",
//             price: "55L",
//             priceValue: 5500000
//         },
//     ];

//     // Price categories
//     const priceCategories = [
//         { id: "all", label: "All", min: 0, max: Infinity },
//         { id: "10-20", label: "10L-20L", min: 1000000, max: 2000000 },
//         { id: "20-30", label: "20L-30L", min: 2000000, max: 3000000 },
//         { id: "30-40", label: "30L-40L", min: 3000000, max: 4000000 },
//         { id: "40-50", label: "40L-50L", min: 4000000, max: 5000000 },
//         { id: "50+", label: "50L+", min: 5000000, max: Infinity },
//     ];

//     // State for selected category and filtered properties
//     const [selectedCategory, setSelectedCategory] = useState("all");
//     const [filteredProperties, setFilteredProperties] = useState(properties);
//     const [searchQuery, setSearchQuery] = useState("");

//     // Filter properties based on selected category
//     const filterPropertiesByPrice = (categoryId: string) => {
//         setSelectedCategory(categoryId);

//         if (categoryId === "all") {
//             setFilteredProperties(properties);
//             return;
//         }

//         const category = priceCategories.find(cat => cat.id === categoryId);
//         if (!category) return;

//         const filtered = properties.filter(property =>
//             property.priceValue >= category.min && property.priceValue <= category.max
//         );

//         setFilteredProperties(filtered);
//     };

//     const categoryItems = [
//         { label: "Residential Property", path: "/image/building1.png" },
//         { label: "Commercial Property", path: "/image/building2.png" },
//         { label: "Property Management", path: "/image/building3.png" },
//         { label: "Residential Property", path: "/image/building1.png" },
//         { label: "Commercial Property", path: "/image/building2.png" },
//         { label: "Property Management", path: "/image/building3.png" },
//         { label: "Residential Property", path: "/image/building1.png" },
//         { label: "Commercial Property", path: "/image/building2.png" },
//          { label: "Commercial Property", path: "/image/building2.png" },
//         { label: "Property Management", path: "/image/building3.png" },
//         { label: "Residential Property", path: "/image/building1.png" },
//         { label: "Commercial Property", path: "/image/building2.png" },


//     ]

//     const useHorizontalDrag = <T extends HTMLElement>() => {
//         const ref = useRef<T | null>(null);

//         const isDragging = useRef(false);
//         const startX = useRef(0);
//         const scrollLeft = useRef(0);

//         const onMouseDown = (e: React.MouseEvent) => {
//             if (!ref.current) return;
//             isDragging.current = true;
//             startX.current = e.pageX;
//             scrollLeft.current = ref.current.scrollLeft;
//             ref.current.style.cursor = "grabbing";
//         };

//         const onMouseLeave = () => {
//             if (!ref.current) return;
//             isDragging.current = false;
//             ref.current.style.cursor = "grab";
//         };

//         const onMouseUp = () => {
//             if (!ref.current) return;
//             isDragging.current = false;
//             ref.current.style.cursor = "grab";
//         };

//         const onMouseMove = (e: React.MouseEvent) => {
//             if (!isDragging.current || !ref.current) return;
//             e.preventDefault();
//             const walk = (e.pageX - startX.current) * 1.2; // lower = smoother
//             ref.current.scrollLeft = scrollLeft.current - walk;
//         };

//         // Touch (mobile smooth)
//         const onTouchStart = (e: React.TouchEvent) => {
//             if (!ref.current) return;
//             startX.current = e.touches[0].pageX;
//             scrollLeft.current = ref.current.scrollLeft;
//         };

//         const onTouchMove = (e: React.TouchEvent) => {
//             if (!ref.current) return;
//             const walk = (e.touches[0].pageX - startX.current) * 1.2;
//             ref.current.scrollLeft = scrollLeft.current - walk;
//         };

//         return {
//             ref,
//             handlers: {
//                 onMouseDown,
//                 onMouseLeave,
//                 onMouseUp,
//                 onMouseMove,
//                 onTouchStart,
//                 onTouchMove,
//             },
//         };
//     }

//     const categoryDrag = useHorizontalDrag<HTMLDivElement>();
//     const isDown = useRef(false);


//     // FIXED: Create separate refs for each carousel
//     const budgetRef = useRef<HTMLDivElement>(null);
//     const recommendedRef = useRef<HTMLDivElement>(null);
//     const topPicksRef = useRef<HTMLDivElement>(null);

//     // FIXED: Separate state for each carousel
//     const [isDragging, setIsDragging] = useState({
//         budget: false,
//         recommended: false,
//         topPicks: false
//     });
//     const [startX, setStartX] = useState({ x: 0, section: '' });
//     const [scrollLeft, setScrollLeft] = useState({ left: 0, section: '' });

//     // Calculate max scroll for a specific container
//     const getMaxScroll = (container: HTMLDivElement | null) => {
//         if (!container) return 0;
//         return container.scrollWidth - container.clientWidth;
//     };


//     // Generic drag handlers that work with any ref
//     const createDragHandlers = (ref: React.RefObject<HTMLDivElement | null>, section: string) => {

//         const handleMouseDown = (e: React.MouseEvent) => {
//             if (!ref.current) return;

//             setIsDragging(prev => ({ ...prev, [section]: true }));
//             const container = ref.current;
//             const rect = container.getBoundingClientRect();
//             setStartX({ x: e.pageX - rect.left, section });
//             setScrollLeft({ left: container.scrollLeft, section });
//             container.style.cursor = 'grabbing';
//             container.style.userSelect = 'none';
//         };

//         const handleMouseLeave = () => {
//             if (isDragging[section as keyof typeof isDragging] && ref.current) {
//                 setIsDragging(prev => ({ ...prev, [section]: false }));
//                 const container = ref.current;
//                 container.style.cursor = 'grab';
//                 container.style.removeProperty('user-select');
//             }
//         };

//         const handleMouseUp = () => {
//             if (!ref.current) return;

//             setIsDragging(prev => ({ ...prev, [section]: false }));
//             const container = ref.current;
//             container.style.cursor = 'grab';
//             container.style.removeProperty('user-select');

//             // Snap to nearest card - FIXED for mobile responsiveness
//             const cardElement = container.querySelector('.snap-center') as HTMLElement;
//             const cardWidth = cardElement?.offsetWidth || 300;
//             const gap = window.innerWidth < 768 ? 16 : 24; // Responsive gap
//             const scrollPos = container.scrollLeft;
//             const cardCount = Math.round(scrollPos / (cardWidth + gap));

//             container.scrollTo({
//                 left: cardCount * (cardWidth + gap),
//                 behavior: 'smooth'
//             });
//         };

//         const handleMouseMove = (e: React.MouseEvent) => {
//             if (!isDragging[section as keyof typeof isDragging] || !ref.current || startX.section !== section) return;
//             e.preventDefault();

//             const container = ref.current;
//             const rect = container.getBoundingClientRect();
//             const x = e.pageX - rect.left;
//             const walk = (x - startX.x) * 1.5;

//             // Calculate new scroll position
//             let newScrollLeft = scrollLeft.left - walk;
//             const maxScroll = getMaxScroll(container);

//             // Apply boundaries
//             newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScroll));

//             container.scrollLeft = newScrollLeft;
//         };

//         // Touch event handlers
//         const handleTouchStart = (e: React.TouchEvent) => {
//             if (!ref.current) return;

//             setIsDragging(prev => ({ ...prev, [section]: true }));
//             const container = ref.current;
//             const rect = container.getBoundingClientRect();
//             setStartX({ x: e.touches[0].pageX - rect.left, section });
//             setScrollLeft({ left: container.scrollLeft, section });
//         };

//         const handleTouchMove = (e: React.TouchEvent) => {
//             if (!isDragging[section as keyof typeof isDragging] || !ref.current || startX.section !== section) return;
//             const container = ref.current;
//             const rect = container.getBoundingClientRect();
//             const x = e.touches[0].pageX - rect.left;
//             const walk = (x - startX.x) * 1.5;

//             let newScrollLeft = scrollLeft.left - walk;
//             const maxScroll = getMaxScroll(container);
//             newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScroll));

//             container.scrollLeft = newScrollLeft;
//         };

//         return {
//             handleMouseDown,
//             handleMouseLeave,
//             handleMouseUp,
//             handleMouseMove,
//             handleTouchStart,
//             handleTouchMove
//         };
//     };



//     return (
//         <>
//             {/* MAIN WRAPPER */}
//             <section
//                 style={{
//                     backgroundImage: "url('/image/Background design.png')",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                 }}
//                 className="
//           w-full h-auto rounded-t-none overflow-x-hidden
//           px-4 lg:px-10 py-6 lg:py-6
//           bg-[#F9F5FF]"
//             >
// {/* ---------------- NAVBAR ---------------- */}
// <section className="relative w-full">
//     {/* ===== NAVBAR ===== */}
//     <div className="hidden md:block lg:block w-full">
//         <div className="flex items-center justify-between rounded-xl">
//             <div className="flex items-center bg-[#FFFFFF] px-18 py-4 rounded-4xl gap-4 ml-10">
//                 <Link href="/">
//                     <img src="/image/educationback.png" className="w-[30px] cursor-pointer" />
//                 </Link>
//                 <h1 className="text-lg md:text-2xl font-semibold">Real Estate</h1>
//             </div>

//             {/* SEARCH */}
//             <div className="flex items-center gap-4 mr-10">
//                 {/* SEARCH */}
//                 <div className="hidden md:block relative w-[260px] lg:w-[280px]">
//                     <input
//                         type="text"
//                         placeholder="Search"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         className="
//                                       w-full
//                                       rounded-lg bg-white
//                                       border border-gray-300
//                                       px-10 py-4
//                                       text-sm
//                                       outline-none
//                                       focus:border-blue-500
//                                   "
//                     />

//                     {/* search icon */}
//                     <span className="absolute left-3 top-1/2 -translate-y-1/2">
//                         <img
//                             src="/image/itsearch.png"
//                             alt="searchicon"
//                             className="w-[18px] h-[18px]"
//                         />
//                     </span>
//                 </div>

//                 {/* BOOKMARK / LOCATION ICON */}
//                 <img
//                     src="/image/EducationServicebookmark.png"
//                     className="w-[20px] cursor-pointer"
//                 />
//             </div>


//         </div>

//     </div>
// </section>

// {/* ================= NAVBAR MOBILE ================= */}
// <section>
//     <div
//         className=" block md:hidden lg:hidden
//                   w-full -mt-10 w-screen md:-mx-0 
//                     -mx-4 
//                 flex flex-col rounded-tl-none rounded-tr-none
//                 px-4 py-8 md:px-10 md:py-10
//                 gap-3
//             "
//     >
//         {/* ===== ROW 1: HEADER ===== */}
//         <div className="flex items-center justify-between">
//             {/* LEFT */}
//             <div className="flex items-center gap-3 px-4 py-3 min-w-0 bg-white rounded-full">
//                 <Link href="/MainModules/OnDemand">
//                     <ChevronLeft className="w-[28px] h-[28px] text-black cursor-pointer  p-1 shrink-0" />
//                 </Link>

//                 <h1 className="text-[16px] font-semibold truncate">
//                     {/* {formatSlugToTitle(slug)} */} Real Estate
//                 </h1>
//             </div>

//             {/* RIGHT */}
//             <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full shrink-0">
//                 <img
//                     src="/image/EducationServicebookmark.png"
//                     className="w-[14px] h-[14px]"
//                     alt="Bookmark"
//                 />
//             </div>
//         </div>

//         {/* ===== ROW 2: SEARCH ===== */}
//         <div className="relative w-[90%] md:w-[95%] mx-auto ml-6">
//             <input
//                 type="text"
//                 placeholder="Search"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full rounded-full bg-white border border-gray-300 px-10 py-2 text-sm outline-none"
//             />
//             <span className="absolute left-4 top-1/2 -translate-y-1/2">
//                 <img
//                     src="/image/itsearch.png"
//                     className="w-[18px] h-[16px]"
//                     alt="Search"
//                 />
//             </span>
//         </div>
//     </div>
// </section>

// {/* ---------------- HERO SECTION ---------------- */}
// <div className="w-full hidden md:block lg:block mt-4">
//     <div className="relative w-full h-[290px] flex items-center justify-between mx-auto rounded-2xl overflow-hidden bg-white px-10">

//         {/* LEFT CONTENT */}
//         <div className="relative z-10">
//             {/* Background text */}
//             <h1 className="md:text-[100px] lg:text-[131.69px] font-bold text-gray-200 opacity-40 leading-none">
//                 REAL <br /> ESTATE
//             </h1>

//             {/* Foreground heading */}
//             <h2
//                 className="absolute top-4 left-10 text-[#0C1B36] text-[32px]"
//                 style={{ fontFamily: "GFS Didot" }}
//             >
//                 Explore Our Real Estate <br /> Services
//             </h2>
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="relative z-10 flex flex-row">
//             <div>
//                 <img
//                     src="/image/Houseimage.png"
//                     alt="House"
//                     className="w-[296px] md:w-[317px] md:h-[205px] h-[227px] object-contain"
//                 />
//             </div>
//             <div className="mt-2">
//                 <FiArrowUpRight className="text-purple-500 md:w-[58px] md:h-[58px] lg:w-[78px] lg:h-[78px] mt-2 bg-[#F8F3FF] rounded-full p-4" />
//             </div>
//         </div>

//     </div>

// </div>



// {/* ---------------- HERO SECTION MOBILE VERSION ---------------- */}
// <div className="w-full block md:hidden lg:hidden mt-10">
//     <div
//         className="relative w-full  min-h-[393px] mx-auto rounded-2xl overflow-hidden bg-white"
//     >
//         {/* Bg Text Layer */}
//         <div className="absolute inset-0 mt-25 ml-4 flex items-start pointer-events-none">
//             <h1 className="font-bold font-[400] text-[52.34px] left-0 text-gray-200 opacity-40 tracking-wider leading-none text-start"
//             >
//                 REAL <br /> ESTATE
//             </h1>
//         </div>

//         {/* Arrow Button */}
//         <div className="absolute top-4 right-4 w-[70.04px] h-[70.04px] rounded-full bg-white shadow-lg flex items-center justify-center">
//             <FiArrowUpRight className="text-purple-500 w-10 h-10" />
//         </div>

//         {/* Main Heading */}
//         <h2
//             className="absolute top-5 left-5 font-[400] text-[#0C1B36]"
//             style={{
//                 fontFamily: "GFS Didot",
//                 fontWeight: 400,
//                 fontStyle: "normal",
//                 fontSize: "29.05px",
//                 lineHeight: "30.01px",
//                 letterSpacing: "0%",
//                 verticalAlign: "middle",
//             }}
//         >
//             Explore Our<br /> Real Estate<br />Services
//         </h2>

//         {/* House Image */}
//         {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2"> */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center">
//             {/* <div className="absolute bottom-4 right-5"> */}
//             <img
//                 src="/image/Houseimage.png"
//                 className="w-full max-w-[296px] h-auto object-contain"
//             />

//         </div>
//     </div>
// </div>



//                 {/* Category */}
//                 <div className="w-full hidden lg:block relative overflow-hidden">
//                     {/* Category */}
//                     <div className="w-full relative">
//                         <p
//                             className="text-[16px] md:text-[24px] text-black font-semibold mt-4 ml-6"
//                             style={{ fontWeight: 600 }}
//                         >
//                             Category
//                         </p>

//                         <div
//                             ref={categoryDrag.ref}

//                             {...categoryDrag.handlers}
//                             className="
//                                 flex gap-6 md:gap-8
//                                 px-6 py-6
//                                 overflow-x-auto
//                                 whitespace-nowrap
//                                 no-scrollbar
//                                 cursor-grab
//                                 active:cursor-grabbing"
//                              >

//                             {categoryItems.map((items, index) => (
//                                 <div
//                                     key={index}
//                                     className="
//                                     relative
//                                     shrink-0
//                                     w-[103px] h-[123px]
//                                     md:w-[189px] md:h-[226px]
//                                     "
//                                 >
//                                     {/* Background */}
//                                     <Image
//                                         src="/image/rectangularcategory.png"
//                                         alt="rectangular"
//                                         fill
//                                         className="object-cover"
//                                     />

//                                     {/* Icon */}
//                                     <Image
//                                         src={items.path}
//                                         alt="buildings"
//                                         width={120}
//                                         height={120}
//                                         className="
//                                             absolute left-1/2 bottom-5
//                                             -translate-x-1/2
//                                             object-contain
//                                         "
//                                     />

//                                     {/* Label */}
//                                     <p
//                                         className="
//                                             flex ml-20
//                                             whitespace-normal breakwords items-start justify-start
//                                             text-[11px] md:text-[16px]
//                                         "
//                                     >
//                                         {items.label}
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                 </div>



//                 {/* Category Mobile Version */}
//                 <div className="w-full block  lg:hidden relative overflow-hidden">
//                     <p className="text-[16px] text-black font-semibold mt-4 ml-6 md:mt-6 md:ml-8"
//                         style={{ fontWeight: 600 }}>Category</p>
//                     <div className="flex gap-8 md:gap-10 p-6">
//                         <div
//                             ref={categoryDrag.ref}

//                             {...categoryDrag.handlers}
//                             className="
//                                 flex gap-6 md:gap-2

//                                 overflow-x-auto
//                                 whitespace-nowrap
//                                 no-scrollbar
//                                 cursor-grab
//                                 active:cursor-grabbing
//                             "
//                         >
//                             {categoryItems.map((items, index) => (
//                                 <div key={index} className="relative w-[103.72px] md:[80px] md:h-[150px] h-[123px]">
//                                     {/* Background Image */}
//                                     <Image
//                                         src="/image/rectangularcategory.png"
//                                         alt="rectangular"
//                                         fill
//                                         className="object-cover opacity-600"
//                                     />

//                                     {/* Centered Foreground Image */}
//                                     <Image
//                                         src={items.path}
//                                         alt="buildings"
//                                         width={96.19}
//                                         height={96.19}
//                                         className="absolute left-1/2 bottom-5 -translate-x-1/2 translate-y-[10%] object-cover"
//                                     />

//                                     {/* Text over curved background */}
//                                     <p
//                                         className="absolute ml-4 top-1 font-semibold text-[11px] whitespace-normal breakwords text-start"
//                                         style={{
//                                             fontFamily: "Inter",
//                                             fontWeight: 400,
//                                             // fontSize: "18.4px",
//                                             lineHeight: "12.6px",
//                                             color: "#000",
//                                         }}
//                                     >
//                                         {items.label}
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>



//                 {/* Search According To Your Budget */}
//                 <div className="bg-white rounded-xl">
//                     <div className="w-full relative overflow-hidden p-0 md:p-4">
//                         <p className="text-[16px] md:text-[24px] text-black font-semibold mt-4 ml-6 md:mt-6 md:ml-8"
//                             style={{ fontWeight: 600 }}>Search According To Your Budget</p>
//                     </div>

//                     {/* Price Categories */}
//                     <div
//                         className="
//                                     flex gap-4 mb-0 md:gap-8 p-4 md:p-2 
//                                     overflow-x-auto md:overflow-x-visible 
//                                     ml-5 md:ml-10 
//                                     no-scrollbar 
//                                     snap-x snap-mandatory
//                                 ">
//                         {priceCategories.map((category) => (
//                             <div
//                                 key={category.id}
//                                 className={`
//                                         relative w-[100px] h-[40px] 
//                                         flex items-center justify-center 
//                                         rounded-3xl cursor-pointer 
//                                         transition-all duration-300 
//                                         shrink-0 snap-start
//                                         ${selectedCategory === category.id
//                                         ? "bg-purple-500 text-white shadow-lg"
//                                         : "bg-gray-200 text-black"
//                                     }
//                                     `}
//                                 onClick={() => filterPropertiesByPrice(category.id)}
//                             >
//                                 <span className="font-semibold text-sm md:text-base">
//                                     {category.label}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>


//                     <SearchBudget />
//                     <RecommendedSection />
//                     <MostPopular />
//                     <WhyChooseUs />
//                 </div>
//             </section>
//         </>
//     )
// }




'use client'


import { useRef, useState,useEffect } from "react";
import Image from "next/image";
import SearchBudget from "@/src/components/FranchiseCategories/SearchBudget";
import Recommended from "@/src/components/FranchiseCategories/Recommended"
import MostPopular from "@/src/components/FranchiseCategories/MostPopular";
import WhyChooseUs from "@/src/components/FranchiseCategories/WhyChooseUs";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useParams } from "next/navigation";
import { useSubCategory } from "@/src/context/SubCategoriesContext";
import { useModule } from "@/src/context/CategoriesContext";
import TopTrending from "@/src/components/FranchiseCategories/TopTrending";
import AllServices from "@/src/components/FranchiseCategories/AllServices";

/* ======================= DRAG HOOK (FIXED) ======================= */
const useHorizontalDrag = <T extends HTMLElement>() => {
    const ref = useRef<T | null>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const startScroll = useRef(0);

    const canScroll = () => {
        if (!ref.current) return false;
        return ref.current.scrollWidth > ref.current.clientWidth;
    };

    const onMouseDown = (e: React.MouseEvent) => {
        if (!ref.current || !canScroll()) return;
        isDragging.current = true;
        startX.current = e.pageX;
        startScroll.current = ref.current.scrollLeft;
        ref.current.style.cursor = "grabbing";
        ref.current.style.userSelect = "none";
    };

    const stopDragging = () => {
        if (!ref.current) return;
        isDragging.current = false;
        ref.current.style.cursor = "grab";
        ref.current.style.removeProperty("user-select");
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !ref.current) return;
        const delta = e.pageX - startX.current;
        ref.current.scrollLeft = startScroll.current - delta;
    };

    const onTouchStart = (e: React.TouchEvent) => {
        if (!ref.current || !canScroll()) return;
        startX.current = e.touches[0].pageX;
        startScroll.current = ref.current.scrollLeft;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (!ref.current) return;
        const delta = e.touches[0].pageX - startX.current;
        ref.current.scrollLeft = startScroll.current - delta;
    };

    return {
        ref,
        handlers: {
            onMouseDown,
            onMouseMove,
            onMouseUp: stopDragging,
            onMouseLeave: stopDragging,
            onTouchStart,
            onTouchMove,
        },
    };
};
/* =============================================================== */

export default function FranchiseSubCategoryServicePage() {

    const { categories,fetchCategoriesByModule } = useModule();
const [currentCategory, setCurrentCategory] = useState<any>(null);
const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

   const { moduleId, categoryId } = useParams<{
  moduleId: string;
  categoryId: string;
}>();



  console.log("Category ID IN CLIENT:", categoryId);

    // const { moduleId} = useParams();
      console.log(moduleId, categoryId);

const {
  subCategories,
  loading,
  error,
  fetchSubCategories,
} = useSubCategory();


    const [searchQuery, setSearchQuery] = useState("");



    /* 🔥 FETCH SUB-CATEGORIES */

     useEffect(() => {
  if (moduleId) {
    fetchCategoriesByModule(moduleId);
  }
}, [moduleId]);

useEffect(() => {
  if (categories?.length && categoryId) {
    const cat = categories.find(
      (c: any) => c._id === categoryId
    );
    setCurrentCategory(cat);
  }
}, [categories, categoryId]);


 useEffect(() => {
  if (categoryId) {
    fetchSubCategories(categoryId);
  }
}, [categoryId]);

useEffect(() => {
  if (subCategories?.length && !selectedSubCategory) {
    setSelectedSubCategory(subCategories[0]._id);
  }
}, [subCategories]);



    /* FIXED: Separate drag hooks */
    const desktopCategoryDrag = useHorizontalDrag<HTMLDivElement>();
    const mobileCategoryDrag = useHorizontalDrag<HTMLDivElement>();

    return (
        <section
            style={{
                backgroundImage: "url('/image/Background design.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="w-full px-4 lg:px-10 py-6 bg-[#F9F5FF]"
        >

            {/* ---------------- NAVBAR ---------------- */}
            <section className="relative w-full">
                {/* ===== NAVBAR ===== */}
                <div className="hidden md:block lg:block w-full">
                    <div className="flex items-center justify-between rounded-xl">
                        <div className="flex items-center bg-[#FFFFFF] px-18 py-4 rounded-4xl gap-4 ml-10">
                            <Link href={`/MainModules/Franchise/${moduleId}`}>
                                <img src="/image/Checkoutback.png" className="w-[30px] cursor-pointer" />
                            </Link>
                            <h1 className="text-lg md:text-2xl font-semibold">  {currentCategory?.name || "Loading..."}</h1>
                        </div>

                        {/* SEARCH */}
                        <div className="flex items-center gap-4 mr-10">
                            {/* SEARCH */}
                            <div className="hidden md:block relative w-[260px] lg:w-[280px]">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="
                                                      w-full
                                                      rounded-lg bg-white
                                                      border border-gray-300
                                                      px-10 py-4
                                                      text-sm
                                                      outline-none
                                                      focus:border-blue-500
                                                  "
                                />

                                {/* search icon */}
                                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                                    <img
                                        src="/image/itsearch.png"
                                        alt="searchicon"
                                        className="w-[18px] h-[18px]"
                                    />
                                </span>
                            </div>

                            {/* BOOKMARK / LOCATION ICON */}
                            <img
                                src="/image/EducationServicebookmark.png"
                                className="w-[20px] cursor-pointer"
                            />
                        </div>


                    </div>

                </div>
            </section>

            {/* ================= NAVBAR MOBILE ================= */}
            <section>
                <div
                    className=" block md:hidden lg:hidden
                                  w-full -mt-10 w-screen md:-mx-0 
                                    -mx-4 
                                flex flex-col rounded-tl-none rounded-tr-none
                                px-4 py-8 md:px-10 md:py-10
                                gap-3
                            "
                >
                    {/* ===== ROW 1: HEADER ===== */}
                    <div className="flex items-center justify-between">
                        {/* LEFT */}
                        <div className="flex items-center gap-3 px-4 py-3 min-w-0 bg-white rounded-full">
                            
                            <Link href="/">
                                <img src="/image/Checkoutback.png" className="w-[28px] h-[28px] text-black cursor-pointer  p-1 shrink-0" />
                            </Link>

                            <h1 className="text-[16px] font-semibold truncate">
                                {/* {formatSlugToTitle(slug)} */}  {currentCategory?.name}
                            </h1>
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full shrink-0">
                            <img
                                src="/image/EducationServicebookmark.png"
                                className="w-[14px] h-[14px]"
                                alt="Bookmark"
                            />
                        </div>
                    </div>

                    {/* ===== ROW 2: SEARCH ===== */}
                    <div className="relative w-[90%] md:w-[95%] mx-auto ml-6">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-full bg-white border border-gray-300 px-10 py-2 text-sm outline-none"
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2">
                            <img
                                src="/image/itsearch.png"
                                className="w-[18px] h-[16px]"
                                alt="Search"
                            />
                        </span>
                    </div>
                </div>
            </section>

            {/* ---------------- HERO SECTION ---------------- */}
            <div className="w-full hidden md:block lg:block mt-4">
                <div className="relative w-full h-[290px] flex items-center justify-between mx-auto rounded-2xl overflow-hidden bg-white px-10">

                    {/* LEFT CONTENT */}
                    <div className="relative z-10">
                        {/* Background text */}
                        <h1 className="md:text-[100px] lg:text-[131.69px] lg:ms-10 font-bold text-[#F1F2FF]  leading-none">
                                          {currentCategory?.name}

                        </h1>

                        {/* Foreground heading */}
                        <h2
                            className="absolute top-4 left-10 text-[#263238] text-[32px]"
                            style={{ fontFamily: "GFS Didot" }}
                        >
                            Explore Our {currentCategory?.name} <br/>services
                        </h2>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="relative z-10 flex flex-row">
                        <div>
                            <img
                                src="/image/Houseimage.png"
                                alt="House"
                                className="w-[296px] md:w-[317px] md:h-[205px] h-[227px] object-contain"
                            />
                        </div>
                        <div className="mt-2">
                            <FiArrowUpRight className="text-purple-500 md:w-[58px] md:h-[58px] lg:w-[78px] lg:h-[78px] mt-2 bg-[#F8F3FF] rounded-full p-4" />
                        </div>
                    </div>

                </div>

            </div>



            {/* ---------------- HERO SECTION MOBILE VERSION ---------------- */}
            <div className="w-full block md:hidden lg:hidden mt-10">
                <div
                    className="relative w-full  min-h-[393px] mx-auto rounded-2xl overflow-hidden bg-white"
                >
                    {/* Bg Text Layer */}
                    <div className="absolute inset-0 mt-25 ml-4 flex items-start pointer-events-none">
                        <h1 className="font-bold font-[400] text-[52.34px] left-0 text-gray-200 opacity-40 tracking-wider leading-none text-start"
                        >
                            {currentCategory?.name}
                        </h1>
                    </div>

                    {/* Arrow Button */}
                    <div className="absolute top-4 right-4 w-[70.04px] h-[70.04px] rounded-full bg-white shadow-lg flex items-center justify-center">
                        <FiArrowUpRight className="text-purple-500 w-10 h-10" />
                    </div>

                    {/* Main Heading */}
                    <h2
                        className="absolute top-5 left-5 font-[400] text-[#0C1B36]"
                        style={{
                            fontFamily: "GFS Didot",
                            fontWeight: 400,
                            fontStyle: "normal",
                            fontSize: "29.05px",
                            lineHeight: "30.01px",
                            letterSpacing: "0%",
                            verticalAlign: "middle",
                        }}
                    >
                        Explore Our<br /> {currentCategory?.name}
                    </h2>

                    {/* House Image */}
                    {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2"> */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center">
                        {/* <div className="absolute bottom-4 right-5"> */}
                        <img
                            src="/image/Houseimage.png"
                            className="w-full max-w-[296px] h-auto object-contain"
                        />

                    </div>
                </div>
            </div>



            {/* ================= DESKTOP CATEGORY ================= */}
            <div className="hidden lg:block">
                <p className="text-[24px] font-semibold ml-6">SubCategory</p>
                {loading && <p className="ml-6 mt-4">Loading...</p>}
                {error && <p className="ml-6 text-red-500">{error}</p>}
                <div
                    ref={desktopCategoryDrag.ref}
                    {...desktopCategoryDrag.handlers}
                    className="flex gap-6 px-6 py-6 overflow-x-auto no-scrollbar cursor-grab"
                >
                    {subCategories.map((item) => (
                        <div key={item._id} 
                        onClick={() => setSelectedSubCategory(item._id)}
    className={`relative shrink-0 w-[189px] h-[226px] cursor-pointer
      ${selectedSubCategory === item._id ? "ring-2 ring-purple-500" : ""}
    `}>
                            <Image src="/image/rectangularcategory.png" alt="" fill />
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={120}
                                height={120}
                                className="absolute left-1/2 bottom-5 -translate-x-1/2"
                            />
                            <p className="ml-20 text-[16px]">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= MOBILE CATEGORY ================= */}
            <div className="block lg:hidden">
                <p className="text-[16px] font-semibold ml-6">Sub Category</p>
                <div
                    ref={mobileCategoryDrag.ref}
                    {...mobileCategoryDrag.handlers}
                    className="flex gap-6 px-6 py-6 overflow-x-auto no-scrollbar cursor-grab"
                >
                    {subCategories.map((item) => (
                        <div key={item._id}
                         onClick={() => setSelectedSubCategory(item._id)}
    className={`relative w-[103px] h-[123px] shrink-0 cursor-pointer
      ${selectedSubCategory === item._id ? "ring-2 ring-purple-500" : ""}
    `}>
                            <Image src="/image/rectangularcategory.png" alt="" fill />
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={96}
                                height={96}
                                className="absolute left-1/2 bottom-2  -translate-x-1/2"
                            />
                            <p className="absolute -top-1 left-12 text-[11px] leading-tight">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= REST SECTIONS (UNCHANGED) ================= */}
            <div className="bg-white rounded-xl">
              
                <AllServices categoryId={categoryId} moduleId={moduleId}
  selectedSubCategory={selectedSubCategory}/> 
          
            </div>
        </section>
    );
}











// 'use client'

// import { useRef, useState, useEffect } from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { FiArrowUpRight } from "react-icons/fi";

// import SearchBudget from "@/src/components/FranchiseCategories/SearchBudget";
// import RecommendedSection from "@/src/components/FranchiseCategories/Recommended";
// import MostPopular from "@/src/components/FranchiseCategories/MostPopular";
// import WhyChooseUs from "@/src/components/FranchiseCategories/WhyChooseUs";
// import { useSubCategory } from "@/src/context/SubCategoriesContext";


// /* ======================= DRAG HOOK ======================= */
// const useHorizontalDrag = <T extends HTMLElement>() => {
//   const ref = useRef<T | null>(null);
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const startScroll = useRef(0);

//   const onMouseDown = (e: React.MouseEvent) => {
//     if (!ref.current) return;
//     isDragging.current = true;
//     startX.current = e.pageX;
//     startScroll.current = ref.current.scrollLeft;
//   };

//   const onMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging.current || !ref.current) return;
//     const delta = e.pageX - startX.current;
//     ref.current.scrollLeft = startScroll.current - delta;
//   };

//   const stopDragging = () => {
//     isDragging.current = false;
//   };

//   return {
//     ref,
//     handlers: {
//       onMouseDown,
//       onMouseMove,
//       onMouseUp: stopDragging,
//       onMouseLeave: stopDragging,
//     },
//   };
// };
// /* ======================================================= */

// export default function FranchiseSubCategoryServicePage() {
//   const { categoryId } = useParams();

//   const { subCategories, loading, error, fetchSubCategories } =
//     useSubCategory();

//   const [searchQuery, setSearchQuery] = useState("");

//   const desktopCategoryDrag = useHorizontalDrag<HTMLDivElement>();
//   const mobileCategoryDrag = useHorizontalDrag<HTMLDivElement>();

//   /* 🔥 FETCH SUB-CATEGORIES */
//   useEffect(() => {
//     if (categoryId) {
//       fetchSubCategories(categoryId as string);
//     }
//   }, [categoryId]);

//   return (
//     <section
//       style={{
//         backgroundImage: "url('/image/Background design.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//       className="w-full px-4 lg:px-10 py-6 bg-[#F9F5FF]"
//     >

//       {/* ---------------- NAVBAR ---------------- */}
//       <div className="hidden md:flex justify-between items-center">
//         <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-full">
//           <Link href="/">
//             <img src="/image/Checkoutback.png" className="w-[30px]" />
//           </Link>
//           <h1 className="text-2xl font-semibold capitalize">
//             {String(categoryId).replace("-", " ")}
//           </h1>
//         </div>

//         <input
//           type="text"
//           placeholder="Search"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="bg-white px-4 py-2 rounded-lg border"
//         />
//       </div>

//       {/* ---------------- HERO ---------------- */}
//       <div className="hidden md:block mt-6">
//         <div className="bg-white rounded-2xl p-10 flex justify-between">
//           <div>
//             <h1 className="text-[120px] font-bold text-gray-200 opacity-40">
//               {String(categoryId).toUpperCase()}
//             </h1>
//             <h2 className="absolute mt-[-110px] ml-6 text-3xl text-[#0C1B36]">
//               Explore Our Services
//             </h2>
//           </div>

//           <div className="flex items-center">
//             <img src="/image/Houseimage.png" className="w-[300px]" />
//             <FiArrowUpRight className="text-purple-500 w-16 h-16 bg-purple-100 rounded-full p-4 ml-4" />
//           </div>
//         </div>
//       </div>

//       {/* ================= DESKTOP SUBCATEGORY ================= */}
//       <div className="hidden lg:block mt-8">
//         <p className="text-[24px] font-semibold ml-6">Category</p>

//         {loading && <p className="ml-6 mt-4">Loading...</p>}
//         {error && <p className="ml-6 text-red-500">{error}</p>}

//         <div
//           ref={desktopCategoryDrag.ref}
//           {...desktopCategoryDrag.handlers}
//           className="flex gap-6 px-6 py-6 overflow-x-auto no-scrollbar cursor-grab"
//         >
//           {subCategories.map((item) => (
//             <div key={item._id} className="relative w-[189px] h-[226px] shrink-0">
//               <Image src="/image/rectangularcategory.png" alt="" fill />
//               <Image
//                 src={item.image}
//                 alt={item.name}
//                 width={120}
//                 height={120}
//                 className="absolute left-1/2 bottom-5 -translate-x-1/2"
//               />
//               <p className="absolute bottom-3 w-full text-center font-medium">
//                 {item.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ================= MOBILE SUBCATEGORY ================= */}
//       <div className="block lg:hidden mt-6">
//         <p className="text-[16px] font-semibold ml-6">Category</p>

//         <div
//           ref={mobileCategoryDrag.ref}
//           {...mobileCategoryDrag.handlers}
//           className="flex gap-6 px-6 py-6 overflow-x-auto no-scrollbar cursor-grab"
//         >
//           {subCategories.map((item) => (
//             <div key={item._id} className="relative w-[103px] h-[123px] shrink-0">
//               <Image src="/image/rectangularcategory.png" alt="" fill />
//               <Image
//                 src={item.image}
//                 alt={item.name}
//                 width={96}
//                 height={96}
//                 className="absolute left-1/2 bottom-2 -translate-x-1/2"
//               />
//               <p className="absolute -top-1 w-full text-center text-[11px]">
//                 {item.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ================= REST SECTIONS ================= */}
//       <div className="bg-white rounded-xl">
//         <SearchBudget />
//         <RecommendedSection />
//         <MostPopular />
//         <WhyChooseUs />
//       </div>
//     </section>
//   );
// }





// 'use client'

// import { useRef, useState, useEffect } from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { FiArrowUpRight } from "react-icons/fi";

// import SearchBudget from "@/src/components/FranchiseCategories/SearchBudget";
// import RecommendedSection from "@/src/components/FranchiseCategories/Recommended";
// import MostPopular from "@/src/components/FranchiseCategories/MostPopular";
// import WhyChooseUs from "@/src/components/FranchiseCategories/WhyChooseUs";
// import { useSubCategory } from "@/src/context/SubCategoriesContext";

// /* ======================= HORIZONTAL DRAG HOOK ======================= */
// const useHorizontalDrag = <T extends HTMLElement>() => {
//   const ref = useRef<T | null>(null);
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const startScroll = useRef(0);

//   const onMouseDown = (e: React.MouseEvent) => {
//     if (!ref.current) return;
//     isDragging.current = true;
//     startX.current = e.pageX;
//     startScroll.current = ref.current.scrollLeft;
//   };

//   const onMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging.current || !ref.current) return;
//     e.preventDefault(); // prevents text selection
//     const delta = e.pageX - startX.current;
//     ref.current.scrollLeft = startScroll.current - delta;
//   };

//   const stopDragging = () => {
//     isDragging.current = false;
//   };

//   return {
//     ref,
//     handlers: {
//       onMouseDown,
//       onMouseMove,
//       onMouseUp: stopDragging,
//       onMouseLeave: stopDragging,
//     },
//   };
// };
// /* ======================================================= */

// export default function FranchiseSubCategoryServicePage() {
//   const { categoryId } = useParams();
//   const { subCategories, loading, error, fetchSubCategories } = useSubCategory();
//   const [searchQuery, setSearchQuery] = useState("");

//   const desktopCategoryDrag = useHorizontalDrag<HTMLDivElement>();
//   const mobileCategoryDrag = useHorizontalDrag<HTMLDivElement>();

//   /* 🔥 FETCH SUB-CATEGORIES */
//   useEffect(() => {
//     if (categoryId) fetchSubCategories(categoryId as string);
//   }, [categoryId]);

//   /* Filter subcategories by search */
//   const filteredSubCategories = subCategories.filter(sub =>
//     sub.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   /* Format categoryId nicely for display */
//   const formattedCategoryName = String(categoryId)
//     .replace(/-/g, " ")
//     .replace(/\b\w/g, c => c.toUpperCase());

//   return (
//     <section
//       style={{
//         backgroundImage: "url('/image/Background design.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//       className="w-full px-4 lg:px-10 py-6 bg-[#F9F5FF]"
//     >
//       {/* ---------------- NAVBAR ---------------- */}
//       <div className="hidden md:flex justify-between items-center mb-6">
//         <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-full">
//           <Link href="/">
//             <img src="/image/Checkoutback.png" className="w-[30px]" />
//           </Link>
//           <h1 className="text-2xl font-semibold">{formattedCategoryName}</h1>
//         </div>

//         <input
//           type="text"
//           placeholder="Search"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="bg-white px-4 py-2 rounded-lg border"
//         />
//       </div>

//       {/* ---------------- HERO ---------------- */}
//       <div className="hidden md:block mt-6">
//         <div className="bg-white rounded-2xl p-10 flex justify-between relative">
//           <div className="relative">
//             <h1 className="text-[120px] font-bold text-gray-200 opacity-40">
//               {formattedCategoryName.toUpperCase()}
//             </h1>
             
//             <h2 className="absolute top-6 left-6 text-3xl text-[#0C1B36]">
//               Explore Our Services
//             </h2>
//           </div>

//           <div className="flex items-center">
//             <img src="/image/Houseimage.png" className="w-[300px]" />
//             <FiArrowUpRight className="text-purple-500 w-16 h-16 bg-purple-100 rounded-full p-4 ml-4" />
//           </div>
//         </div>
//       </div>

//       {/* ================= DESKTOP SUBCATEGORY ================= */}
//       <div className="hidden lg:block mt-8">
//         <p className="text-[24px] font-semibold ml-6 mb-2">Category</p>

//         {loading && <p className="ml-6 mt-4">Loading...</p>}
//         {error && <p className="ml-6 text-red-500">{error}</p>}

//         <div
//           ref={desktopCategoryDrag.ref}
//           {...desktopCategoryDrag.handlers}
//           className="flex gap-6 px-6 py-6 overflow-x-auto no-scrollbar cursor-grab"
//         >
//           {filteredSubCategories.map((item) => (
//             <div key={item._id} className="relative w-[189px] h-[226px] shrink-0">
//               <Image src="/image/rectangularcategory.png" alt="" fill />
//               <Image
//                 src={item.image}
//                 alt={item.name}
//                 width={120}
//                 height={120}
//                 className="absolute left-1/2 bottom-5 -translate-x-1/2"
//               />
//               <p className="absolute bottom-3 w-full text-center font-medium">
//                 {item.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ================= MOBILE SUBCATEGORY ================= */}
//       <div className="block lg:hidden mt-6">
//         <p className="text-[16px] font-semibold ml-6 mb-2">Category</p>

//         <div
//           ref={mobileCategoryDrag.ref}
//           {...mobileCategoryDrag.handlers}
//           className="flex gap-6 px-6 py-6 overflow-x-auto no-scrollbar cursor-grab"
//         >
//           {filteredSubCategories.map((item) => (
//             <div key={item._id} className="relative w-[103px] h-[123px] shrink-0">
//               <Image src="/image/rectangularcategory.png" alt="" fill />
//               <Image
//                 src={item.image}
//                 alt={item.name}
//                 width={96}
//                 height={96}
//                 className="absolute left-1/2 bottom-2 -translate-x-1/2"
//               />
//               <p className="absolute -top-1 w-full text-center text-[11px]">
//                 {item.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ================= REST SECTIONS ================= */}
//       <div className="bg-white rounded-xl mt-6 p-4">
//         <SearchBudget />
//         <RecommendedSection />
//         <MostPopular />
//         <WhyChooseUs />
//       </div>
//     </section>
//   );
// }
