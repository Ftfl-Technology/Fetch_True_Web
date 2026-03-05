// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Eye } from "lucide-react";

// export default function SignUpPage() {
//   return (
//     <div className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-white">
//       <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">

//         {/* LEFT – LOGIN FORM */}
//          <div className="flex flex-col justify-center max-w-[450px] mx-auto w-full">
//           {/* Logo */}
//           <Image
//             src="/image/logo.png"
//             alt="Fetch True"
//             width={80}
//             height={55}
//             className="mb-6"
//           />

//           <h1 className="text-[28px] font-semibold mb-1">
//             Create Your FetchTrue Account
//           </h1>
//           <p className="text-sm text-[#6B6969] mb-6">
//             Sign up to access all services in one place—fast, easy, and secure.
//           </p>

//           {/* Name */}
//           <label className="text-sm font-medium mb-1">Name</label>
//           <input
//             type="text"
//             placeholder="Your name"
//             className="h-[44px] px-4 rounded-md border border-[#E5E5E5] mb-4 outline-none"
//           />

//           {/* Phone */}
//           <label className="text-sm font-medium mb-1">Number</label>
//           <input
//             type="tel"
//             placeholder="+91"
//             className="h-[44px] px-4 rounded-md border border-[#E5E5E5] mb-4 outline-none"
//           />

//           {/* Email */}
//           <label className="text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             placeholder="user@gmail.com"
//             className="h-[44px] px-4 rounded-md border border-[#E5E5E5] mb-4 outline-none"
//           />

//           {/* Password */}
//           <label className="text-sm font-medium mb-1">Password</label>
//           <div className="relative mb-6">
//             <input
//               type="password"
//               placeholder="1234"
//               className="h-[44px] w-full px-4 pr-10 rounded-md border border-[#E5E5E5] outline-none"
//             />
//             <Eye
//               size={18}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6969] cursor-pointer"
//             />
//           </div>

//           {/* Sign Up Button */}
//           <button className="h-[44px] rounded-full bg-[#2164F4] text-white font-medium mb-6">
//             Sign Up
//           </button>

//           <p className="text-xs text-center text-[#9E9E9E]">
//             © 2026 Fetch True. All Rights Reserved.
//           </p>
//         </div>

//         {/* RIGHT – INFO SECTION */}
//         <div className="hidden lg:flex items-center justify-start bg-[#2563EB] rounded-[20px] relative overflow-hidden">
//           <div className="ps-10 -mt-70 text-white max-w-[609px]">
//             <h2 className="text-[26px] font-semibold mb-3">
//               One Platform Multiple Services
//             </h2>
//             <p className="text-sm leading-6">
//               Frustrated searching for multiple services? <br />
//               Try Fetch True — one click, all services in one place. <br />
//               Just grab your phone and you are done.
//             </p>
//           </div>

//           {/* Mobile Mockup */}
//           <Image
//             src="/image/signupMockup.png"
//             alt="App Preview"
//             width={480}
//             height={351}
//             className="absolute bottom-6 right-6"
//           />
//         </div>

//       </div>
//     </div>
//   );
// }



// "use client";

// import Image from "next/image";
// import { Eye } from "lucide-react";
// import { useState } from "react";
// import { useAuth } from "@/src/context/AuthContext";
// import { useRouter } from "next/navigation";

// export default function SignUpPage() {
//   const { signup, loading, error } = useAuth();
//   const router = useRouter();
//     const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const [form, setForm] = useState({
//     fullName: "",
//     mobileNumber: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     isAgree: false,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

// const handleSubmit = async () => {
//   if (!form.isAgree) {
//     alert("Please accept terms & conditions");
//     return;
//   }

//   if (form.password !== form.confirmPassword) {
//     alert("Passwords do not match");
//     return;
//   }

//   try {
//     await signup(form);

//     // ✅ success feedback
//     alert("Account created successfully 🎉");

//     // ✅ redirect to login page
//     router.push("/Login");
//   } catch (err: any) {
//     alert(err.message || "Registration failed");
//   }
// };



//   return (
//     <div className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-white">
//       <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">

//         {/* LEFT */}
//         <div className="flex flex-col justify-center max-w-[450px] mx-auto w-full">
//           <Image
//             src="/image/logo.png"
//             alt="Fetch True"
//             width={80}
//             height={55}
//             className="mb-6"
//           />

//           <h1 className="text-[28px] font-semibold mb-1">
//             Create Your FetchTrue Account
//           </h1>

//           {/* Name */}
//           <label className="text-sm font-medium mb-1">Name</label>
//           <input
//             name="fullName"
//             value={form.fullName}
//             onChange={handleChange}
//             className="h-[44px] px-4 rounded-md border mb-4"
//           />

//           {/* Phone */}
//           <label className="text-sm font-medium mb-1">Number</label>
//           <input
//             name="mobileNumber"
//             value={form.mobileNumber}
//             onChange={handleChange}
//             className="h-[44px] px-4 rounded-md border mb-4"
//           />

//           {/* Email */}
//           <label className="text-sm font-medium mb-1">Email</label>
//           <input
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             className="h-[44px] px-4 rounded-md border mb-4"
//           />

//           {/* Password */}
//           <label className="text-sm font-medium mb-1">Password</label>
//           <div className="relative mb-2">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="123"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="h-[44px] w-full px-4 pr-10 rounded-md border border-[#E5E5E5] outline-none"
//             />
//             <Eye
//               size={18}
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6969] cursor-pointer"
//             />
//           </div>

//           {/* confirmPassword */}
//           <label className="text-sm font-medium mb-1">Confirm Password</label>
//           <div className="relative mb-2">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="123"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="h-[44px] w-full px-4 pr-10 rounded-md border border-[#E5E5E5] outline-none"
//             />
//             <Eye
//               size={18}
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6969] cursor-pointer"
//             />
//           </div>

//    <div className="flex gap-2 items-center my-2">
//           <input
//   type="checkbox"
//   checked={form.isAgree}
//   onChange={(e) =>
//     setForm({ ...form, isAgree: e.target.checked })
//   }
  
// />
// <label htmlFor="terms" className="text-sm cursor-pointer">
//     I agree to the Terms & Conditions
//   </label>
//   </div>


//           {error && (
//             <p className="text-red-500 text-sm mb-3">{error}</p>
//           )}

//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="h-[44px] rounded-full bg-[#2164F4] text-white font-medium mb-6 disabled:opacity-60"
//           >
//             {loading ? "Creating Account..." : "Sign Up"}
//           </button>
//         </div>

//         {/* RIGHT */}
//         <div className="hidden lg:flex items-center justify-start bg-[#2563EB] rounded-[20px] relative overflow-hidden">
//                   <div className="ps-10 -mt-70 text-white max-w-[609px]">
//                     <h2 className="text-[26px] font-semibold mb-3">
//                       One Platform Multiple Services
//                     </h2>
//                     <p className="text-sm leading-6">
//                       Frustrated searching for multiple services? <br />
//                       Try Fetch True — one click, all services in one place. <br />
//                       Just grab your phone and you are done.
//                     </p>
//                   </div>
        
//                   <Image
//                     src="/image/signupMockup.png"
//                     alt="App Preview"
//                     width={480}
//                     height={351}
//                     className="absolute bottom-6 right-6"
//                   />
//                 </div>

//       </div>
//     </div>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/src/context/AuthContext";

// export default function SignUpPage() {
//   const { signup, loading } = useAuth();
//   const router = useRouter();

//   const [form, setForm] = useState({
//     fullName: "",
//     mobileNumber: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     isAgree: false,
//   });

//   const [errors, setErrors] = useState<any>({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);

//   const validate = () => {
//     const newErrors: any = {};

//     // Full Name
//     if (!form.fullName.trim())
//       newErrors.fullName = "Full name is required";

//     // Mobile
//     if (!form.mobileNumber)
//       newErrors.mobileNumber = "Mobile number is required";
//     else if (!/^[0-9]{10}$/.test(form.mobileNumber))
//       newErrors.mobileNumber =
//         "Mobile number must be 10 digits";

//     // Email
//     if (!form.email)
//       newErrors.email = "Email is required";
//     else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
//     )
//       newErrors.email = "Invalid email address";

//     // Password
//     if (!form.password)
//       newErrors.password = "Password is required";
//     else if (
//       !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password)
//     )
//       newErrors.password =
//         "Password must be 8+ chars, include uppercase, lowercase & number";

//     // Confirm password
//     if (form.password !== form.confirmPassword)
//       newErrors.confirmPassword =
//         "Passwords do not match";

//     // Terms
//     if (!form.isAgree)
//       newErrors.isAgree =
//         "You must accept terms & conditions";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validate()) return;

//     try {
//       await signup(form);
//       router.push("/login");
//     } catch (err: any) {
//       setErrors({ api: err.message });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="w-full max-w-md">
//         <h1 className="text-3xl font-semibold mb-6 text-center">
//           Create Account
//         </h1>

//         {errors.api && (
//           <p className="text-red-500 text-sm mb-4 text-center">
//             {errors.api}
//           </p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full border rounded-lg px-4 py-2"
//             value={form.fullName}
//             onChange={(e) =>
//               setForm({ ...form, fullName: e.target.value })
//             }
//           />
//           {errors.fullName && (
//             <p className="text-red-500 text-xs">
//               {errors.fullName}
//             </p>
//           )}

//           <input
//             type="text"
//             placeholder="Mobile Number"
//             className="w-full border rounded-lg px-4 py-2"
//             value={form.mobileNumber}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 mobileNumber: e.target.value,
//               })
//             }
//           />
//           {errors.mobileNumber && (
//             <p className="text-red-500 text-xs">
//               {errors.mobileNumber}
//             </p>
//           )}

//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border rounded-lg px-4 py-2"
//             value={form.email}
//             onChange={(e) =>
//               setForm({ ...form, email: e.target.value })
//             }
//           />
//           {errors.email && (
//             <p className="text-red-500 text-xs">
//               {errors.email}
//             </p>
//           )}

//           {/* Password */}
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               className="w-full border rounded-lg px-4 py-2 pr-12"
//               value={form.password}
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   password: e.target.value,
//                 })
//               }
//             />
//             <button
//               type="button"
//               onClick={() =>
//                 setShowPassword(!showPassword)
//               }
//               className="absolute right-3 top-2 text-sm text-blue-600"
//             >
//               {showPassword ? "Hide" : "Show"}
//             </button>
//           </div>
//           {errors.password && (
//             <p className="text-red-500 text-xs">
//               {errors.password}
//             </p>
//           )}

//           {/* Confirm Password */}
//           <div className="relative">
//             <input
//               type={showConfirm ? "text" : "password"}
//               placeholder="Confirm Password"
//               className="w-full border rounded-lg px-4 py-2 pr-12"
//               value={form.confirmPassword}
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   confirmPassword: e.target.value,
//                 })
//               }
//             />
//             <button
//               type="button"
//               onClick={() =>
//                 setShowConfirm(!showConfirm)
//               }
//               className="absolute right-3 top-2 text-sm text-blue-600"
//             >
//               {showConfirm ? "Hide" : "Show"}
//             </button>
//           </div>
//           {errors.confirmPassword && (
//             <p className="text-red-500 text-xs">
//               {errors.confirmPassword}
//             </p>
//           )}

//           <div className="flex items-center space-x-2 text-sm">
//             <input
//               type="checkbox"
//               checked={form.isAgree}
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   isAgree: e.target.checked,
//                 })
//               }
//             />
//             <span>I agree to Terms & Conditions</span>
//           </div>
//           {errors.isAgree && (
//             <p className="text-red-500 text-xs">
//               {errors.isAgree}
//             </p>
//           )}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 rounded-lg"
//           >
//             {loading ? "Creating..." : "Sign Up"}
//           </button>

//           <p className="text-center text-sm">
//             Already have an account?{" "}
//             <Link href="/Login" className="text-blue-600">
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import Link from "next/link";
import Image from "next/image";

export default function SignUpPage() {
  const { signup, loading } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAgree: false,
  });

  const [errors, setErrors] = useState<any>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  /* ================= VALIDATION ================= */

  const validate = () => {
    const newErrors: any = {};

    if (!form.fullName.trim())
      newErrors.fullName = "Full name is required";

    if (!form.mobileNumber)
      newErrors.mobileNumber = "Mobile number is required";
    else if (!/^[0-9]{10}$/.test(form.mobileNumber))
      newErrors.mobileNumber = "Mobile number must be 10 digits";

    if (!form.email)
      newErrors.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    )
      newErrors.email = "Invalid email address";

    if (!form.password)
      newErrors.password = "Password is required";
    else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(form.password)
    )
      newErrors.password =
        "Password must be 4+ chars, include uppercase, lowercase,special character & number";

    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!form.isAgree)
      newErrors.isAgree = "You must accept terms & conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await signup(form);
      router.push("/Login");
    } catch (err: any) {
      if (err.message.toLowerCase().includes("exist")) {
        setErrors({ email: err.message });
      } else {
        setErrors({ api: err.message });
      }
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 flex flex-col justify-center px-24">

        <h1 className="text-3xl font-semibold mb-6 text-center">
          Create Account
        </h1>

        {errors.api && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {errors.api}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
<input
  type="text"
  placeholder="Full Name"
  className="w-full border rounded-lg px-4 py-2"
  value={form.fullName}
  onChange={(e) => {
    const value = e.target.value.replace(/[^A-Za-z\s]/g, ""); // allow only letters & space
    setForm({ ...form, fullName: value });
    setErrors({ ...errors, fullName: "" });
  }}
/>

{errors.fullName && (
  <p className="text-red-500 text-xs">{errors.fullName}</p>
)}

         {/* Mobile */}
<input
  type="text"
  placeholder="Mobile Number"
  inputMode="numeric"
  pattern="[0-9]*"
  maxLength={10}
  className="w-full border rounded-lg px-4 py-2"
  value={form.mobileNumber}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, ""); 
    setForm({ ...form, mobileNumber: value });
    setErrors({ ...errors, mobileNumber: "" });
  }}
/>

{errors.mobileNumber && (
  <p className="text-red-500 text-xs">{errors.mobileNumber}</p>
)}

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-2"
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
              setErrors({ ...errors, email: "" });
            }}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border rounded-lg px-4 py-2 pr-16"
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
                setErrors({ ...errors, password: "" });
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-sm text-blue-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password}</p>
          )}

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full border rounded-lg px-4 py-2 pr-16"
              value={form.confirmPassword}
              onChange={(e) => {
                setForm({ ...form, confirmPassword: e.target.value });
                setErrors({ ...errors, confirmPassword: "" });
              }}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-2 text-sm text-blue-600"
            >
              {showConfirm ? "Hide" : "Show"}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs">
              {errors.confirmPassword}
            </p>
          )}

          {/* Terms */}
          <div className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={form.isAgree}
              onChange={(e) =>
                setForm({ ...form, isAgree: e.target.checked })
              }
            />
            <span>I agree to Terms & Conditions</span>
          </div>
          {errors.isAgree && (
            <p className="text-red-500 text-xs">{errors.isAgree}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/Login" className="text-blue-600">
              Login
            </Link>
          </p>

        </form>
         
      </div>
         <div className="hidden w-1/2 lg:flex items-center justify-start bg-[#2563EB] rounded-[20px] relative overflow-hidden">
                                  <div className="ps-10 -mt-70 text-white max-w-[609px]">
                                    <h2 className="text-[26px] font-semibold mb-3">
                                      One Platform Multiple Services
                                    </h2>
                                    <p className="text-sm leading-6">
                                      Frustrated searching for multiple services? <br />
                                      Try Fetch True — one click, all services in one place. <br />
                                      Just grab your phone and you are done.
                                    </p>
                                  </div>
                       
                                 <Image
                                   src="/image/signupMockup.png"
                                   alt="App Preview"
                                   width={480}
                                   height={351}
                                   className="absolute bottom-6 right-6"
                                 />
                         </div>
    </div>
  );
}