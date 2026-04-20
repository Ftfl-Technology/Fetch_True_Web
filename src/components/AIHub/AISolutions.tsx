// "use client";
// import { useEffect, useState } from "react";

// interface CardType {
//   img: string;
// }

// export default function AISolutions() {
//   const cards: CardType[] = [
//     { img: "/image/AISolution.png" },
//     { img: "/image/AISolution.png" },
//     { img: "/image/AISolution.png" },
//     { img: "/image/AISolution.png" },
//     { img: "/image/AISolution.png" },
//   ];

//   const [active, setActive] = useState(0);
//   const [previous, setPrevious] = useState(0);
//   const [smallActive, setSmallActive] = useState(0);

//   /* BIG CARD AUTO SLIDE */
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setPrevious(active);
//       setActive((prev) => (prev + 1) % cards.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [active, cards.length]);

//   /* MOBILE SLIDER */
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSmallActive((prev) => (prev + 1) % cards.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [cards.length]);

//   const rightCards = [
//     cards[(active + 1) % cards.length],
//     cards[(active + 2) % cards.length],
//   ];

//   return (
//     <section className="relative w-full mt-16 px-4 lg:px-20 mb-20">

//       {/* AI RECTANGLE BACKGROUND */}

//       <img
//         src="/image/AIRectangle.png"
//         className="absolute inset-0 w-full h-full opacity-200 hidden md:block pointer-events-none z-0"
//         alt="AIRectangle"
//       />


//       {/* ===== CONTENT WRAPPER ===== */}
//       <div className="relative z-10 flex flex-col items-center">

//         {/* ===== TEXT (CENTERED & ABOVE CARDS) ===== */}
//         <div className="max-w-3xl text-center mt-22 mb-14">
//           <h2 className="text-3xl lg:text-[40px] font-semibold mb-4">
//             AI Solutions That Automate, Analyze, and Accelerate Your Business
//           </h2>
//           <p className="text-gray-600 text-lg lg:text-[24px]">
//             Deploy ready-to-use and custom AI tools
//           </p>
//         </div>

//         {/* ===== CARDS ROW ===== */}
//         <div className="w-full flex flex-wrap lg:flex-nowrap gap-10 justify-center">

//           {/* LEFT BIG CARD */}
//           <div className="hidden lg:flex flex-col items-center">

//             <div className="w-[450px] h-[350px] relative overflow-hidden flex items-center justify-center">

//               {/* PREVIOUS */}
//               <div
//                 key={`prev-${previous}`}
//                 className="absolute"
//                 style={{ animation: "slideOutLeft 0.7s forwards" }}
//               >
//                 <BigCard data={cards[previous]} />
//               </div>

//               {/* ACTIVE */}
//               <div
//                 key={`active-${active}`}
//                 className="absolute"
//                 style={{ animation: "slideInRight 0.7s forwards" }}
//               >
//                 <BigCard data={cards[active]} />
//               </div>
//             </div>

//             {/* INDICATORS */}
//             <div className="flex gap-2 mt-5">
//               {cards.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setPrevious(active);
//                     setActive(index);
//                   }}
//                   className={`transition-all duration-300 ${
//                     active === index
//                       ? "bg-blue-500 w-16 h-2"
//                       : "bg-gray-300 w-4 h-2"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* RIGHT SMALL CARDS */}
//           <div className="hidden lg:flex flex-col justify-center">
//             <div className="flex gap-[77px] mt-10">
//               {rightCards.map((card, i) => (
//                 <SmallCard key={i} data={card} isNext={i === 0} />
//               ))}
//             </div>
//           </div>

//           {/* MOBILE SLIDER */}
//           <div className="lg:hidden w-full flex justify-center">
//             <SmallCard data={cards[smallActive]} isNext />
//           </div>

//         </div>
//       </div>

//       {/* ===== ANIMATIONS ===== */}
//       <style jsx global>{`
//         @keyframes slideInRight {
//           0% {
//             transform: translateX(120%);
//             opacity: 0;
//           }
//           100% {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         @keyframes slideOutLeft {
//           0% {
//             transform: translateX(0);
//             opacity: 1;
//           }
//           100% {
//             transform: translateX(-120%);
//             opacity: 0;
//           }
//         }

//         @keyframes smallSlideIn {
//           0% {
//             transform: translateX(120%);
//             opacity: 0;
//           }
//           100% {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         .animate-smallSlideIn {
//           animation: smallSlideIn 0.7s forwards;
//         }
//       `}</style>
//     </section>
//   );
// }

// /* BIG CARD */
// function BigCard({ data }: { data: CardType }) {
//   return (
//     <div className="w-[360px] h-[280px] shadow-lg overflow-hidden">
//       <img src={data.img} className="w-full h-full object-fit" alt="" />
//     </div>
//   );
// }

// /* SMALL CARD */
// function SmallCard({ data, isNext }: { data: CardType; isNext?: boolean }) {
//   return (
//     <div
//       className={`w-[320px] h-[255px] shadow-sm overflow-hidden ${
//         isNext ? "animate-smallSlideIn" : ""
//       }`}
//     >
//       <img src={data.img} className="w-full h-full object-fit" alt="" />
//     </div>
//   );
// }





"use client";
import { useEffect, useState } from "react";

interface CardType {
  img: string;
}

export default function AISolutions() {
  const cards: CardType[] = [
    { img: "/image/AISolution.png" },
    { img: "/image/AISolution.png" },
    { img: "/image/AISolution.png" },
    { img: "/image/AISolution.png" },
    { img: "/image/AISolution.png" },
  ];

  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [smallActive, setSmallActive] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");


  /* BIG CARD AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevious(active);
      setActive((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [active, cards.length]);

  /* MOBILE SLIDER AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setSmallActive((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [cards.length]);

  const rightCards = [
    cards[(active + 1) % cards.length],
    cards[(active + 2) % cards.length],
  ];

  return (
    <section className="relative w-full lg:-mt-80 md:-mt-80 bg-white/50 lg:bg-[#D0E0E7DB] lg:p-4 -mt-40 px-4 lg:px-20">

      {/* AI RECTANGLE BACKGROUND - DESKTOP ONLY */}
      <img
        src="/image/AIRectangle.png"
        className="absolute inset-0 w-full h-full opacity-500 bg-white/550 lg:opacity-200 pointer-events-none z-10"
        alt="AIRectangle"
      />


      {/* ===== CONTENT WRAPPER ===== */}
      <div className="relative z-10 flex flex-col items-center">

        {/* ===== TEXT (CENTERED & ABOVE CARDS) ===== */}
        <div className="max-w-3xl text-center mt-8 lg:mt-22 mb-8 lg:mb-14">
          <h2 className="text-[20px] lg:text-[40px] font-semibold mb-4">
            AI Solutions That Automate, Analyze, and Accelerate Your Business
          </h2>
          <p className="text-gray-600 text-[16px] lg:text-[24px] whitespace-nowrap">
            Deploy ready-to-use and custom AI tools
          </p>
        </div>

        {/* Search Box */}
        <div className="w-full block md:hidden flex justify-center">
       
          <span className="absolute left-2 top-[215px] -translate-y-1/2 pointer-events-none">
            <img
              src="/image/itsearch.png"
              alt="search icon"
              className="w-[18px] h-[20px]"
            />
          </span>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full max-w-md px-8 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* ===== CARDS ROW ===== */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-10 justify-center">

          {/* LEFT BIG CARD - DESKTOP ONLY */}
          <div className="hidden md:block lg:flex flex-col items-center">
            <div className="md:w-[350px] lg:w-[450px] h-[350px] relative overflow-hidden flex items-center justify-center">

              {/* PREVIOUS */}
              <div
                key={`prev-${previous}`}
                className="absolute"
                style={{ animation: "slideOutLeft 0.7s forwards" }}
              >
                <BigCard data={cards[previous]} />
              </div>

              {/* ACTIVE */}
              <div
                key={`active-${active}`}
                className="absolute"
                style={{ animation: "slideInRight 0.7s forwards" }}
              >
                <BigCard data={cards[active]} />
              </div>
            </div>

            {/* INDICATORS */}
            <div className="flex gap-2 lg:mt-5 md:-mt-25 md:mb-5 md:ml-18 lg:ml-0">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setPrevious(active);
                    setActive(index);
                  }}
                  className={`transition-all duration-300 ${active === index
                    ? "bg-blue-500 w-16 h-2"
                    : "bg-gray-300 w-4 h-2"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SMALL CARDS - DESKTOP ONLY */}
          <div className="hidden lg:flex flex-col justify-center">
            <div className="flex gap-[77px] mt-10">
              {rightCards.map((card, i) => (
                <SmallCard key={i} data={card} isNext={i === 0} />
              ))}
            </div>
          </div>

          {/* MOBILE SLIDER */}
          <div className="lg:hidden md:hidden w-full flex flex-col items-center">
            <div className="w-[320px] h-[255px] relative overflow-hidden">

              {cards.map((card, index) => (

                <img
                  key={index}
                  src={card.img}
                  className={`absolute w-full h-full p-4 -mt-6 object-contain transition-all duration-700 ${index === smallActive
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                    }`}
                  alt=""
                />
              ))}
            </div>

            {/* INDICATORS */}
            <div className="flex gap-2 mb-5 -mt-10">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setPrevious(active);
                    setActive(index);
                  }}
                  className={`transition-all duration-300 ${active === index
                    ? "bg-blue-500 w-16 h-2"
                    : "bg-gray-300 w-4 h-2"
                    }`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* ===== ANIMATIONS ===== */}
      <style jsx global>{`
        @keyframes slideInRight {
          0% {
            transform: translateX(120%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutLeft {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-120%);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

/* BIG CARD - DESKTOP */
function BigCard({ data }: { data: CardType }) {
  return (
    <div className="w-full max-w-[497px] h-[280px] md:-mt-30 lg:-mt-0 overflow-hidden">
      <img
        src={data.img}
        className="w-full h-full object-contain"
        alt="On Demand AI Image"
      />
    </div>
  );
}


/* SMALL CARD */
function SmallCard({ data, isNext }: { data: CardType; isNext?: boolean }) {
  return (
    <div
      className={`w-[366px] h-[200px] overflow-hidden ${isNext ? "animate-smallSlideIn" : ""
        }`}
    >
      <img src={data.img} className="w-full h-full object-contain" alt="On Demand AI Image" />
    </div>
  );
}
