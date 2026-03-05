// import { Play } from "lucide-react";

// /*  MOCK DATA  */
// const partnerReviews = [
//     {
//         id: 1,
//         name: "Akshay Yadav",
//         role: "Growth Partners",
//         description:
//             "Many mention supportive teams, collaborative environments, clear direction, and a focus on well-being and work-life balance.",
//         rating: 5,
//         thumbnail: "/image/partnerreviewcard.jpg",
//         profile: "/image/partnerreviewprofile.jpg"
//     },
//     {
//         id: 2,
//         name: "Akshay Yadav",
//         role: "Growth Partners",
//         description:
//             "Many mention supportive teams, collaborative environments, clear direction, and a focus on well-being and work-life balance.",
//         rating: 5,
//         thumbnail: "/image/partnerreviewcard.jpg",
//         profile: "/image/partnerreviewprofile.jpg"
//     },
//     {
//         id: 3,
//         name: "Akshay Yadav",
//         role: "Growth Partners",
//         description:
//             "Many mention supportive teams, collaborative environments, clear direction, and a focus on well-being and work-life balance.",
//         rating: 5,
//         thumbnail: "/image/partnerreviewcard.jpg",
//         profile: "/image/partnerreviewprofile.jpg"
//     },
// ];

// /* ===== SINGLE CARD ===== */
// function PartnerReviewCard({ data }: { data: typeof partnerReviews[number] }) {
//     return (
//         <div className="lg:w-[324px] md:w-[250px] w-[250px] mb-4 bg-white rounded-xl shadow-sm shrink-0 scrollbar-hide">
//             {/* Thumbnail */}
//             <div className="relative">
//                 <img
//                     src={data.thumbnail}
//                     alt={data.name}
//                     className="w-full h-[180px] object-cover rounded-t-xl"
//                 />
//                 <button className="absolute top-3 left-3 bg-black/70 p-2 rounded-full">
//                     <Play className="w-4 h-4 text-white" />
//                 </button>
//                 <img src={data.profile} alt="profile" className="absolute bottom-5 left-3 w-[30px] h-[30px] object-fit rounded-full" />
              
//                     <h3 className="absolute bottom-8 left-14 text-white text-[12px] lg:text-[20px]">{data.name}</h3>
//                     <p className="absolute bottom-1 left-14 text-[12px] lg:text-[20px] text-white mb-2">{data.role}</p>
               
//             </div>

//             {/* Content */}
//             <div className="p-4">


//                 <p className="lg:text-[16px] text-[10px] text-gray-600 line-clamp-3 mb-3">
//                     {data.description}
//                 </p>

//                 <div className="flex gap-1">
//                     {Array.from({ length: data.rating }).map((_, i) => (
//                         <span key={i}>⭐</span>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// /* ===== LIST / SECTION ===== */
// export default function PartnersReview() {
//     return (
//         <section className="lg:w-[1400px] md:w-[700px] w-[300px] mx-auto">
//             <h2 className="mb-4 lg:text-[24px] font-semibold">Partners Review</h2>

//             <div className="flex gap-6 overflow-x-auto scrollbar-hide">
//                 {partnerReviews.map((item) => (
//                     <PartnerReviewCard key={item.id} data={item} />
//                 ))}
//             </div>
//         </section>
//     );
// }





"use client";

import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import axios from "axios";


// Define the type for API response
type PartnerReview = {
    _id: string;
    title: string;
    imageUrl: string;
    videoUrl: string;
};

export default function PartnersReview() {
    const [reviews, setReviews] = useState<PartnerReview[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch data from API
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setLoading(true);
                const response = await axios.get("https://api.fetchtrue.com/api/partnerreview");
                setReviews(response.data.data || []);
                setError("");
            } catch (err) {
                setError("Failed to load reviews");
                console.error("Error fetching partner reviews:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    // Loading state
    if (loading) {
        return (
            <section className="lg:w-[1400px] md:w-[700px] w-[300px] mx-auto">
                <h2 className="mb-4 lg:text-[24px] font-semibold">Partners Review</h2>
                <div className="flex gap-6 overflow-x-auto scrollbar-hide">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="lg:w-[324px] md:w-[250px] w-[250px] bg-white rounded-xl shadow-sm shrink-0 animate-pulse">
                            <div className="h-[180px] bg-gray-200 rounded-t-xl" />
                            <div className="p-4 space-y-3">
                                <div className="h-4 bg-gray-200 rounded w-3/4" />
                                <div className="h-3 bg-gray-200 rounded w-full" />
                                <div className="h-3 bg-gray-200 rounded w-2/3" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    // Error state
    if (error) {
        return (
            <section className="lg:w-[1400px] md:w-[700px] w-[300px] mx-auto">
                <h2 className="mb-4 lg:text-[24px] font-semibold">Partners Review</h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-600">{error}</p>
                </div>
            </section>
        );
    }

    // Empty state
    if (reviews.length === 0) {
        return (
            <section className="lg:w-[1400px] md:w-[700px] w-[300px] mx-auto">
                <h2 className="mb-4 lg:text-[24px] font-semibold">Partners Review</h2>
                <p className="text-gray-500">No reviews available</p>
            </section>
        );
    }

    return (
        <section className="lg:w-[1440px] md:w-[700px] w-[300px] mx-auto">
            <h2 className="mb-4 lg:text-[24px] font-semibold">Partners Review</h2>

            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
                {reviews.map((review) => (
                    <PartnerReviewCard key={review._id} data={review} />
                ))}
            </div>
        </section>
    );
}

/* ===== SINGLE CARD ===== */
function PartnerReviewCard({ data }: { data: PartnerReview }) {
    // ✅ FIXED: Use only the API image URL, no YouTube thumbnail generation
    const imageUrl = data.imageUrl ;
    
    // Helper to ensure URL is absolute
    const getAbsoluteUrl = (url: string) => {
       
        // If it starts with '/', it's a relative path - prepend base URL
        if (url.startsWith('/')) {
            return `https://api.fetchtrue.com${url}`;
        }
        return url;
    };

    return (
        <div className="lg:w-[324px] md:w-[250px] w-[250px] mb-4 bg-white rounded-xl shadow-sm shrink-0 scrollbar-hide group">
            {/* Thumbnail */}
            <div className="relative overflow-hidden rounded-t-xl">
                <img
                    src={getAbsoluteUrl(imageUrl)}
                    alt={data.title}
                    className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                        // Fallback if image fails to load
                        (e.target as HTMLImageElement).src = "";
                    }}
                />
                
              
                {data.videoUrl && (
                    <a
                        href={data.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 left-3 bg-black/70 p-2 rounded-full hover:bg-black/90 transition"
                    >
                        <Play className="w-4 h-4 text-white" />
                    </a>
                )}
            </div>
            
            {/* Title */}
            <div className="p-4">
                <h3 className="text-black text-[12px] lg:text-[16px] font-semibold line-clamp-2">
                    {data.title || "Untitled"}
                </h3>
            </div>
        </div>
    );
}