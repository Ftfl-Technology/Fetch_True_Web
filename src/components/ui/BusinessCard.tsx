import Link from "next/link";
import { CiBookmark } from "react-icons/ci";


type BusinessCardProps = {
  image: string;
  title: string;
  category: string;
  earnpercent: string;
  investment: string;
  earnings: string;
  roi: string;
  rating?: number;
  trusted?: boolean;
  slug:string;
  detailslug?:string;
   isFavourite: boolean;
onToggleFavourite: () => void;
};

const BusinessCard: React.FC<BusinessCardProps> = ({
  image,
  title,
  category,
  earnpercent,
  investment,
  earnings,
  roi,
  rating,
  trusted = true,
  isFavourite,
  onToggleFavourite,
  
}) => {
  return (

    <div
      className="
        w-[340px] h-[340px] lg:w-[340px] lg:h-[360px]
        bg-white gap-10
        rounded-[16px]
        border border-[#E6E6E6]
        shadow-[0px_2px_10px_rgba(0,0,0,0.08)]
        flex-shrink-0 
    
      "
    >
      {/* IMAGE */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[190px] lg:h-[215px] object-cover rounded-[16px] p-3"
        />

        {trusted && (
          <span className="absolute top-3 left-3 bg-white/80 text-[#2164F4] text-[14px] lg:text-[16px] px-3 py-1 rounded flex items-center gap-1 shadow">
            ✔ Trusted
          </span>
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleFavourite();
          }}
          className={`absolute top-3 right-3 w-[24px] h-[24px] rounded-full flex items-center justify-center
            ${isFavourite ? "bg-red-500" : "bg-black"}`}
        >
          <CiBookmark size={14} color="#fff" />
        </button>

        <span className="absolute bottom-3 right-4 bg-[#1D4699] text-white text-[14px] rounded flex items-center px-1  lg:px-2 py-1 ">
          <img src="/image/star.png" alt="star" className="w-4 h-4" />
          {rating}
        </span>
      </div>

      {/* CONTENT */}
      <div className="px-3 pb-4">
        <div className="flex justify-between items-center gap-2 px-2">
          <div>
            <h3 className="text-[16px] w-[200px] font-medium text-[#232323] mb-1">
              {title}
            </h3>
            <p className="text-[14px] font-semibold text-[#868686]">
              {category}
            </p>
          </div>

          <p className="text-[12px]  text-[#4A2E82] font-bold text-right">
            --EARN UP TO--
            <br />
            <span className="text-[#2CB140] text-[14px] font-extrabold">
               {earnpercent} 
            </span>
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 text-center text-[12px] gap-2 mt-4">
          <div>
            <p className="text-[#868686]">Investment</p>
            <p className="font-semibold text-[#1D4699]">{investment}</p>
          </div>
          <div>
            <p className="text-[#868686]">Earnings</p>
            <p className="font-semibold text-[#1D4699]">{earnings}</p>
          </div>
          <div>
            <p className="text-[#868686]">ROI</p>
            <p className="font-semibold text-[#1D4699]">{roi}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
