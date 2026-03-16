



import Link from "next/link";
import { useEffect, useState } from "react";
import { Notebook, Droplet, CreditCard, Shirt, Briefcase, PenTool, BookOpen } from "lucide-react";
import { usePackages } from "@/src/context/PackageContext";
import { useAuth } from "@/src/context/AuthContext";
import axios from "axios";
import { useWallet } from "@/src/context/WalletContext";


type GPComponentProps = {
    setActiveTab: (tab: "GP" | "SGP" | "PGP") => void;
};

export default function GPComponent({ setActiveTab }: GPComponentProps) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("full");
    const { user } = useAuth();
    const [paymentLoading, setPaymentLoading] = useState(false);
    const { packages, currentPackage, loading, error, fetchPackages } = usePackages();
    const { wallet, fetchWallet } = useWallet();

    const userId = user?._id || "";
    console.log("User ID in GPComponent:", userId);

    useEffect(() => {
        fetchPackages();
        fetchWallet(userId);
    }, []);


    const activePackage = currentPackage || (packages.length > 0 ? packages[0] : null);


    const grandTotal = activePackage?.grandtotal || 0;
    const cashfreeOption = selected;

    const paymentClickRupees = async () => {
        try {
            setPaymentLoading(true);

            // Calculate amount in rupees
            const amount = cashfreeOption === "full"
                ? grandTotal
                : Math.floor(grandTotal / 2);

            // Generate order ID with current date and time
            const now = new Date();
            const dateStr = now.toISOString().slice(0, 10).replace(/-/g, "");
            const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, "");
            const orderId = `orderId_${dateStr}_${timeStr}`;

            // Get customer details
            const customerId = user?._id;
            const customerName = user?.fullName;
            const customerEmail = user?.email;
            const customerPhone = user?.mobileNumber;


            const payload = {
                subAmount: amount,
                isPartialPaymentAllowed: cashfreeOption === "half",
                description: "Fetch True Payment",
                orderId: orderId,
                customer: {
                    customer_id: customerId,
                    customer_name: customerName,
                    customer_email: customerEmail,
                    customer_phone: customerPhone
                },
                udf: {
                    udf1: orderId,
                    udf2: customerId,
                }
            };

            const response = await axios.post(
                "https://api.fetchtrue.com/api/pay-u/create-payment-link",
                payload
            );

            if (response.data?.result?.paymentLink) {
                // Open payment link in a new tab
                window.open(response.data.result.paymentLink, '_blank');
                setOpen(false); // Close modal after payment
            } else {
                console.error("Payment link not received:", response.data);
            }
        } catch (error) {
            console.error("Payment error:", error);
        } finally {
            setPaymentLoading(false);
        }
    };

    if (loading) return (
        <div className="flex items-center justify-center min-h-[200px]">
            <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
    );

    if (error) return (
        <div className="text-center text-red-500 p-4">
            Error loading packages: {error}
        </div>
    );

    return (
        <>
            {/* Card */}
            <div className="bg-white rounded-2xl p-4 shadow-md mb-4">
                <div className="flex items-center gap-4">
                    {/* Package Status */}
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
                        <h2 className="text-blue-600 font-semibold text-[15px] md:text-[18px] lg:text-[20px]">Growth Partner (GP)</h2>
                        <p className="text-green-600 text-sm font-medium">Assumed Earning</p>
                        <p className="text-green-600 font-bold">30,000 to 50,000/Monthly</p>

                        <span className="inline-block mt-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                            Fix Earning - 30,000/ Month
                        </span>
                    </div>
                </div>
            </div>

            {/* Includes */}
            <div className="bg-white rounded-2xl p-4 shadow-md">
                <h3 className="flex items-center gap-2 text-[15px] md:text-[18px] lg:text-[20px] text-blue-600 font-semibold mb-3">
                    ⭐ What&apos;s Includes
                </h3>

                <div className="space-y-4 text-sm text-gray-600">
                    <div>
                        <p className="font-semibold text-[15px] md:text-[18px] lg:text-[20px] text-gray-800">👑 How to promoted GP to SGP?</p>
                        <p className="ml-6 md:ml-6 lg:ml-6 text-[12px] md:text-[15px] lg:text-[15px]">• Recruit 10 growth partner to became a Super Growth Partner (SGP)</p>
                    </div>

                    <div>
                        <p className="font-semibold text-[15px] md:text-[18px] lg:text-[20px] text-gray-800">💰 Revenue</p>
                        <p className="ml-6 md:ml-6 lg:ml-6 text-[12px] md:text-[15px] lg:text-[15px]">• Earn 5% to 15% revenue share</p>
                    </div>

                    <div>
                        <p className="font-semibold text-[15px] md:text-[18px] lg:text-[20px] text-gray-800">🤝 Team Building Income</p>
                        <p className="ml-6 md:ml-6 lg:ml-6 text-[12px] md:text-[15px] lg:text-[15px]">• Earn Rs 5,000 for every GP you onboard</p>
                        <p className="ml-6 md:ml-6 lg:ml-6 text-[12px] md:text-[15px] lg:text-[15px]">• Get rs 3,000 when your onboarded GP bring another</p>
                    </div>

                    <div>
                        <p className="font-semibold text-[15px] md:text-[18px] lg:text-[20px] text-gray-800">📢 Marketing Support</p>
                        <p className="ml-6 md:ml-6 lg:ml-6 text-[12px] md:text-[15px] lg:text-[15px]">• Support within 3-6 hours.</p>
                        <p className="ml-6 md:ml-6 lg:ml-6 text-[12px] md:text-[15px] lg:text-[15px]">• Full support system.</p>
                        <p className="ml-6 md:ml-6 lg:ml-6 text-[12px] md:text-[15px] lg:text-[15px]">• Expert help, anytime you need it.</p>
                    </div>
                </div>

                <Link href="/Packages/Benefits?tab=GP">
                    <button className="mt-5 bg-blue-600 text-white w-full py-3 rounded-xl font-semibold cursor-pointer">
                        Explore Benefits
                    </button>
                </Link>

                {/* Welcome Gifts */}
                <div className="p-4 mt-4">
                    <h3 className="flex items-center gap-2 text-[15px] md:text-[18px] lg:text-[20px] text-blue-600 font-semibold mb-4">
                        🎁 Welcome Gifts
                    </h3>

                    <div className="grid grid-cols-4 gap-4 text-center text-[11px] md:text-[13px] text-gray-600">
                        {[
                            { name: "Notebook", icon: Notebook },
                            { name: "Water Bottle", icon: Droplet },
                            { name: "Id Holder", icon: CreditCard },
                            { name: "Branded Tshirt", icon: Shirt },
                            { name: "Laptop Bag", icon: Briefcase },
                            { name: "Pen", icon: PenTool },
                            { name: "Booklet", icon: BookOpen },
                        ].map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={index} className="flex flex-col items-center gap-1">
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                        <IconComponent className="w-5 h-5 text-gray-600" />
                                    </div>
                                    <span>{item.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Premium Growth Partner Packages */}
            <div className="bg-white rounded-2xl p-4 shadow-md mt-4">
                <h3 className="text-blue-600 font-semibold text-[15px] md:text-[18px] lg:text-[20px]">
                    Premium Growth Partner Packages
                </h3>

                <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 lg:-mt-15 md:gap-8">
                        {/* Left Content */}
                        <div className="flex-1">
                            <p className="italic text-gray-700 text-[13px] md:text-[14px] mb-2">
                                “Unlock lite Benefits & Maximum earnings”
                            </p>

                            <p className="text-blue-700 font-bold text-[14px] md:text-[16px]">
                                Up to 5X Returns Guarantee!!!
                            </p>

                            <p className="text-gray-600 text-[12px] md:text-[14px] mb-3">
                                Refund up to 5X if earning are less than 5L in 3 years
                            </p>

                            <div className="space-y-1 text-[12px] md:text-[14px] text-gray-700 mb-3">
                                <p>🔒 Secure</p>
                                <p>🛡 Safe Investment</p>
                                <p>✅ Guaranteed Refund</p>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex-shrink-0">
                            <img
                                src="/image/packagegp.png"
                                alt="GP Package"
                                className="w-full max-w-[250px] -mt-20 md:max-w-[350px] h-auto rounded-lg"
                            />
                        </div>
                    </div>

                    {wallet?.userId?.packageActive ? (
                        <>
                         <p className="text-sm lg:text-md font-semibold text-gray-700 flex items-center ml-4 md:ml-0 justify-center">
                                Safe, secure, and assured returns on your investment.
                            </p>

                        <div className="flex flex-col items-center text-center px-4 py-2 bg-[#EEF4FF] rounded-2xl">
                           
                            <img
                                src="/image/packageactivate.png"
                                alt="Package Active"
                                className="md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] mt-2"
                            />

                            <p className="text-sm lg:text-md text-gray-500 max-w-[260px] -mt-10 lg:-mt-10">
                                Congratulations! Your investment package has been successfully activated.
                            </p>
                        </div>
                        </>
                    ) : (

                        <>
                            <div className="-mt-15 md:-mt-5 lg:-mt-15">
                                <p className="text-blue-600 font-semibold text-[14px] md:text-[16px]">
                                    Your Extra Benefits
                                </p>
                                <p className="text-gray-600 text-[12px] md:text-[14px]">
                                    You&apos;ve received rs 3,000 as your fixed monthly earning bonus for purchasing the package.
                                </p>
                            </div>


                            {activePackage && (
                                <div className="mt-4 text-[13px] md:text-[14px] text-gray-700 space-y-2">
                                    <div className="flex flex-col space-y-4 justify-between">
                                        <div className="flex justify-between">
                                            <span>Franchise Fees</span>
                                            <span>
                                                <span className="text-green-600">({activePackage.discount}%)</span>{" "}
                                                <span className="line-through">₹{activePackage.price.toLocaleString()}</span>
                                                <div className="lg:ml-9">₹{activePackage.discountedPrice.toLocaleString()}</div>
                                            </span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span>Franchise Deposite (Refundable)</span>
                                            <span>₹{activePackage.deposit.toLocaleString()}</span>
                                        </div>

                                        <hr />

                                        <div className="flex justify-between font-semibold">
                                            <span>Growth Total</span>
                                            <span>₹{activePackage.grandtotal.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={() => setOpen(true)}
                                className="mt-5 bg-blue-600 text-white w-full py-3 rounded-xl font-semibold cursor-pointer"
                            >
                                Active Now
                            </button>
                        </>
                    )}



                    {open && activePackage && (
                        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                            <div className="bg-white rounded-2xl p-6 w-[320px] shadow-xl">
                                <div className="flex flex-col space-y-4 justify-between">
                                    {/* Amount */}
                                    <p className="text-center text-sm text-gray-500 mb-2">Total Amount</p>
                                    <h2 className="text-center text-lg font-bold text-gray-800">
                                        ₹{activePackage.grandtotal.toLocaleString()}/-
                                    </h2>

                                    {/* Payment Option Label */}
                                    <p className="text-sm font-semibold text-gray-700 mb-3">
                                        Select Payment Option
                                    </p>

                                    {/* Radio Buttons */}
                                    <div className="flex gap-3 mb-6">
                                        <label
                                            className={`flex-1 border-2 rounded-xl p-3 cursor-pointer transition-all ${selected === "full"
                                                ? "border-blue-600 bg-blue-50"
                                                : "border-gray-200"
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name="payment"
                                                value="full"
                                                checked={selected === "full"}
                                                onChange={() => setSelected("full")}
                                                className="hidden"
                                            />
                                            <p className="text-xs text-gray-500 font-medium">Full Payment</p>
                                            <p className="text-sm font-bold text-gray-800 mt-1">
                                                ₹{activePackage.grandtotal.toLocaleString()}/-
                                            </p>
                                        </label>

                                        <label
                                            className={`flex-1 border-2 rounded-xl p-3 cursor-pointer transition-all ${selected === "half"
                                                ? "border-blue-600 bg-blue-50"
                                                : "border-gray-200"
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name="payment"
                                                value="half"
                                                checked={selected === "half"}
                                                onChange={() => setSelected("half")}
                                                className="hidden"
                                            />
                                            <p className="text-xs text-gray-500 font-medium">Half Payment</p>
                                            <p className="text-sm font-bold text-gray-800 mt-1">
                                                ₹{Math.floor(activePackage.grandtotal / 2).toLocaleString()}/-
                                            </p>
                                        </label>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setOpen(false)}
                                            className="flex-1 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-600 hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={paymentClickRupees}
                                            disabled={paymentLoading}
                                            className={`flex-1 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 ${paymentLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                                        >
                                            {paymentLoading ? "Processing..." : "Proceed to Pay"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

            </div>

        </>
    );
}






