import { useAuth } from "@/src/context/AuthContext";
import { useWallet } from "@/src/context/WalletContext";
import Link from "next/link";
import { useEffect } from "react";

export default function SGPComponent() {
  const { wallet, fetchWallet } = useWallet();
  const { user } = useAuth();

  const userId = user?._id || "";

  useEffect(() => {
    // fetchPackages();
    fetchWallet(userId);
  }, []);

  return (
    <>
      {/* Card */}
      <div className="bg-white rounded-2xl p-4 shadow-md mb-4">
        <div className="flex items-center gap-4">
          {/* <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl">
            SGP
          </div> */}
          <div className="flex flex-col items-center">
            {wallet?.userId?.packageActive ? (
              // Show GP when package is active
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl">
                  GP
                </div>
                <div className="lg:text-[12px] text-blue-400 mt-1">
                  Current Level
                </div>
              </div>
            ) : (
              // Show NON GP when package is not active
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center p-4 text-gray-600 font-bold text-md whitespace-normal">
                  NON GP
                </div>
                <div className="lg:text-[12px] text-gray-400 mt-1">
                  Current Level
                </div>
              </div>
            )}
          </div>

          <div className="flex-1">
            <h2 className="text-blue-600 font-semibold text-[15px] md:text-[18px] lg:text-[20px]">
              Super Growth Partner (SGP)
            </h2>
            <p className="text-green-600 text-sm font-medium">Assumed Earning</p>
            <p className="text-green-600 font-bold">
              50,000 to 70,000/Monthly
            </p>

            <span className="inline-block mt-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
              Fix Earning - 30,000/ Month
            </span>
          </div>
        </div>
      </div>

      {/* Includes */}
      <div className="bg-white rounded-2xl p-4 shadow-md">
        <h3 className="flex items-center gap-2 text-[15px] md:text-[18px] lg:text-[20px] text-blue-600 font-semibold mb-3">
          ⭐ What’s Includes
        </h3>

        <div className="space-y-4 text-sm text-gray-600">
          {/* Promotion */}
          <div>
            <p className="font-semibold text-[15px] md:text-[18px] lg:text-[20px] text-gray-800">
              👑 How to promoted SGP to PGP?
            </p>
            <p className="ml-6 text-[12px] md:text-[15px] lg:text-[15px]">
              • Support 3 (SGP’s) in your team to qualify as a Premium Growth Partner (PGP)
            </p>
          </div>

          {/* Revenue */}
          <div>
            <p className="font-semibold text-[15px] md:text-[18px] lg:text-[20px] text-gray-800">
              💰 Revenue
            </p>
            <p className="ml-6 text-[12px] md:text-[15px] lg:text-[15px]">
              • Earn up to 15% revenue share on all successful leads you generate.
            </p>
          </div>

          {/* Team Building Income */}
          <div>
            <p className="font-semibold text-[15px] md:text-[18px] lg:text-[20px] text-gray-800">
              🤝 Team Building Income
            </p>
            <p className="ml-6 text-[12px] md:text-[15px] lg:text-[15px]">
              • Earn Rs 5,000 for every GP you onboard
            </p>
            <p className="ml-6 text-[12px] md:text-[15px] lg:text-[15px]">
              • Get rs 3,000 when your onboarded GP brings another
            </p>
          </div>

          {/* Extra Team Revenue */}
          <div>
            <p className="font-semibold text-[15px] md:text-[18px] lg:text-[20px] text-gray-800">
              💼 Team Building Income
            </p>
            <p className="ml-6 text-[12px] md:text-[15px] lg:text-[15px]">
              • Extra earn 5% to 8% for team revenue.
            </p>
          </div>

          {/* Marketing Support */}
          <div>
            <p className="font-semibold text-[15px] md:text-[18px] lg:text-[20px] text-gray-800">
              📢 Marketing Support
            </p>
            <p className="ml-6 text-[12px] md:text-[15px] lg:text-[15px]">
              • Support within 3-6 hours.
            </p>
            <p className="ml-6 text-[12px] md:text-[15px] lg:text-[15px]">
              • Full support system.
            </p>
            <p className="ml-6 text-[12px] md:text-[15px] lg:text-[15px]">
              • Expert help, anytime you need it.
            </p>
          </div>
        </div>

        <Link href="/Packages/Benefits?tab=SGP">
          <button className="mt-5 bg-blue-600 text-white w-full py-3 rounded-xl font-semibold cursor-pointer">
            Explore Benefits
          </button>
        </Link>

      </div>

      {/* Reward Selection */}
      <div className="border-2 border-dashed border-blue-500 rounded-2xl p-4 mt-6 bg-white">

        {/* Header */}
        <div className="text-center mb-4">
          <div className="flex justify-center mb-2">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              🏆
            </div>
          </div>

          <h3 className="font-semibold text-gray-800 text-[16px] md:text-[18px]">
            Select Your Reward Option
          </h3>
          <p className="text-gray-500 text-[12px] md:text-[14px]">
            Choose any one option to claim or apply.
          </p>
        </div>

        {/* Option 1 */}
        <div className="border-2 border-green-500 rounded-xl p-3 flex gap-3 items-center mb-3 relative">

          {/* Check */}
          <div className="absolute top-2 right-2 text-green-600 text-lg">✔</div>

          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
            alt="iPhone Reward"
            className="w-20 h-20 rounded-lg object-cover"
          />

          <div className="flex-1">
            <h4 className="text-blue-600 font-semibold text-[13px] md:text-[15px]">
              Claim Your iPhone Reward 🎁
            </h4>
            <p className="text-gray-500 text-[11px] md:text-[13px]">
              Click below to claim your reward.
            </p>
          </div>
        </div>

        {/* OR Divider */}
        <div className="flex items-center my-3">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-2 text-gray-500 text-xs font-semibold">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Option 2 */}
        <div className="border rounded-xl p-3 flex gap-3 items-center mb-4">

          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
            alt="Increase Earning"
            className="w-20 h-20 rounded-lg object-cover"
          />

          <div className="flex-1">
            <h4 className="text-blue-600 font-semibold text-[13px] md:text-[15px]">
              Increase Your Monthly Earning 💰
            </h4>
            <p className="text-gray-500 text-[11px] md:text-[13px]">
              Click below to monthly increment
            </p>
          </div>

          <div className="text-gray-400 text-lg">
            <input type="checkbox" className="w-4 h-4" />
          </div>
        </div>

        {/* Claim Button */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
          🔒 Claim Reward
        </button>

      </div>

    </>
  );
}
