// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Eye } from "lucide-react";

// export default function LoginPage() {
//   return (
//     <div className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-white">
//       <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">

//         {/* LEFT – LOGIN FORM */}
//         <div className="flex flex-col justify-center max-w-[450px] mx-auto w-full">
//           {/* Logo */}
//           <Image
//             src="/image/logo.png"
//             alt="Fetch True"
//             width={101}
//             height={69}
//             className="mb-6"
//           />

//           <h1 className="text-[28px] font-semibold mb-1">Welcome Back</h1>
//           <p className="text-sm text-[#6B6969] mb-6">
//             Login to access all your services from one secure platform
//           </p>

//           {/* Email */}
//           <label className="text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             placeholder="user@gmail.com"
//             className="h-[44px] px-4 rounded-md border border-[#E5E5E5] mb-4 outline-none"
//           />

//           {/* Password */}
//           <label className="text-sm font-medium mb-1">Password</label>
//           <div className="relative mb-2">
//             <input
//               type="password"
//               placeholder="123"
//               className="h-[44px] w-full px-4 pr-10 rounded-md border border-[#E5E5E5] outline-none"
//             />
//             <Eye
//               size={18}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6969] cursor-pointer"
//             />
//           </div>

//           <div className="flex justify-end mb-5">
//             <Link
//               href="/ForgotPassword"
//               className="text-sm text-[#2164F4]"
//             >
//               Forgot Password ?
//             </Link>
//           </div>

//           {/* Login Button */}
//           <button className="h-[44px] rounded-full bg-[#2164F4] text-white font-medium mb-4">
//             Login
//           </button>

//           <p className="text-sm text-center text-[#6B6969]">
//             Don’t Have an Account ?
//             <Link href="/SignUp" className="text-[#2164F4] ml-1">
//               Sign Up
//             </Link>
//           </p>

//           <p className="text-xs text-center text-[#9E9E9E] mt-10">
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
// import Link from "next/link";
// import { Eye } from "lucide-react";
// import { useState } from "react";
// import { useAuth } from "@/src/context/AuthContext";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const { login, loading, error } = useAuth();
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = async () => {
//     if (!email || !password) return;

//     try {
//       await login({ email, password });
//       router.push("/"); // login success
//     } catch (err) {
//       // error already handled in context
//     }
//   };

//   return (
//     <div className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-white">
//       <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">

//         {/* LEFT – LOGIN FORM */}
//         <div className="flex flex-col justify-center max-w-[450px] mx-auto w-full">
//           {/* Logo */}
//           <Image
//             src="/image/logo.png"
//             alt="Fetch True"
//             width={101}
//             height={69}
//             className="mb-6"
//           />

//           <h1 className="text-[28px] font-semibold mb-1">Welcome Back</h1>
//           <p className="text-sm text-[#6B6969] mb-6">
//             Login to access all your services from one secure platform
//           </p>

//           {/* Email */}
//           <label className="text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             placeholder="user@gmail.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="h-[44px] px-4 rounded-md border border-[#E5E5E5] mb-4 outline-none"
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

//           <div className="flex justify-end mb-5">
//             <Link
//               href="/ForgotPassword"
//               className="text-sm text-[#2164F4]"
//             >
//               Forgot Password ?
//             </Link>
//           </div>

//           {/* Error */}
//           {error && (
//             <p className="text-sm text-red-500 mb-3">{error}</p>
//           )}

//           {/* Login Button */}
//           <button
//             onClick={handleLogin}
//             disabled={loading}
//             className="h-[44px] rounded-full bg-[#2164F4] text-white font-medium mb-4 disabled:opacity-60"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>

//           <p className="text-sm text-center text-[#6B6969]">
//             Don’t Have an Account ?
//             <Link href="/SignUp" className="text-[#2164F4] ml-1">
//               Sign Up
//             </Link>
//           </p>

//           <p className="text-xs text-center text-[#9E9E9E] mt-10">
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
// import Link from "next/link";
// import { Eye } from "lucide-react";
// import { useState } from "react";
// import { useAuth } from "@/src/context/AuthContext";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const { login, loading, error } = useAuth();
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showPopup, setShowPopup] = useState(false); // ⭐ popup state

//   const handleLogin = async () => {
//     if (!email || !password) return;

//     try {
//       await login({ email, password });

//       // ⭐ Show success popup
//       setShowPopup(true);

//       // ⭐ Redirect after delay
//       setTimeout(() => {
//         router.push("/");
//       }, 1500);

//     } catch (error) {
//       // error handled in context
//     }
//   };

//   return (
//     <div className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-white">
//       <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">

//         {/* LEFT – LOGIN FORM */}
//         <div className="flex flex-col justify-center max-w-[450px] mx-auto w-full">
//           <Image
//             src="/image/logo.png"
//             alt="Fetch True"
//             width={101}
//             height={69}
//             className="mb-6"
//           />

//           <h1 className="text-[28px] font-semibold mb-1">Welcome Back</h1>
//           <p className="text-sm text-[#6B6969] mb-6">
//             Login to access all your services from one secure platform
//           </p>

//           {/* Email */}
//           <label className="text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             placeholder="user@gmail.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="h-[44px] px-4 rounded-md border border-[#E5E5E5] mb-4 outline-none"
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

//           <div className="flex justify-end mb-5">
//             <Link href="/ForgotPassword" className="text-sm text-[#2164F4]">
//               Forgot Password ?
//             </Link>
//           </div>

//           {/* Error */}
//           {error && (
//             <p className="text-sm text-red-500 mb-3">{error}</p>
//           )}

//           {/* Login Button */}
//           <button
//             onClick={handleLogin}
//             disabled={loading}
//             className="h-[44px] rounded-full bg-[#2164F4] text-white font-medium mb-4 disabled:opacity-60"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>

//           <p className="text-sm text-center text-[#6B6969]">
//             Don’t Have an Account ?
//             <Link href="/SignUp" className="text-[#2164F4] ml-1">
//               Sign Up
//             </Link>
//           </p>

//           <p className="text-xs text-center text-[#9E9E9E] mt-10">
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

//           <Image
//             src="/image/signupMockup.png"
//             alt="App Preview"
//             width={480}
//             height={351}
//             className="absolute bottom-6 right-6"
//           />
//         </div>

//       </div>

//       {/* ⭐ SUCCESS POPUP */}
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
//           <div className="bg-white rounded-xl px-8 py-6 shadow-xl text-center animate-scaleIn">
//             <div className="text-green-600 text-lg font-semibold mb-2">
//               ✅ Login Successful
//             </div>
//             <p className="text-sm text-gray-600">
//               Redirecting...
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Eye } from "lucide-react";
// import { useState } from "react";
// import { useAuth } from "@/src/context/AuthContext";
// import { useRouter } from "next/navigation";

// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// /* ================= VALIDATION SCHEMA ================= */

// const loginSchema = z.object({
//   email: z
//     .string()
//     .min(1, "Email is required")
//     .email("Enter valid email address"),

//   password: z
//     .string()
//     .min(6, "Password must be at least 6 characters"),
// });

// type LoginFormData = z.infer<typeof loginSchema>;

// /* ================= COMPONENT ================= */

// export default function LoginPage() {
//   const { login, loading } = useAuth();
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     setError,
//     formState: { errors },
//   } = useForm<LoginFormData>({
//     resolver: zodResolver(loginSchema),
//     mode: "onTouched",
//   });

//   /* ================= SUBMIT ================= */

//   const onSubmit = async (data: LoginFormData) => {
//     try {
//       await login(data);

//       setShowPopup(true);

//       setTimeout(() => {
//         router.push("/");
//       }, 1500);

//     } catch (err: any) {
//       const message = err?.message?.toLowerCase();

//       // 🔥 Map backend errors to specific fields

//       if (message?.includes("user not found")) {
//         setError("email", {
//           type: "server",
//           message: "User not found",
//         });
//       }

//       else if (message?.includes("password")) {
//         setError("password", {
//           type: "server",
//           message: "Password incorrect",
//         });
//       }

//       else {
//         setError("email", {
//           type: "server",
//           message: err.message || "Something went wrong",
//         });
//       }
//     }
//   };

//   /* ================= UI ================= */

//   return (
//     <div className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-white">
//       <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">

//         {/* LEFT – LOGIN FORM */}
//         <div className="flex flex-col justify-center max-w-[450px] mx-auto w-full">

//           <Image
//             src="/image/logo.png"
//             alt="Fetch True"
//             width={101}
//             height={69}
//             className="mb-6"
//           />

//           <h1 className="text-[28px] font-semibold mb-1">
//             Welcome Back
//           </h1>

//           <p className="text-sm text-[#6B6969] mb-6">
//             Login to access all your services from one secure platform
//           </p>

//           <form onSubmit={handleSubmit(onSubmit)}>

//             {/* EMAIL */}
//             <label className="text-sm font-medium mb-1">
//               Email
//             </label>

//             <input
//               type="email"
//               placeholder="user@gmail.com"
//               {...register("email")}
//               className={`h-[44px] px-4 rounded-md border w-full mb-1 outline-none ${
//                 errors.email ? "border-red-500" : "border-[#E5E5E5]"
//               }`}
//             />

//             {errors.email && (
//               <p className="text-xs text-red-500 mb-3">
//                 {errors.email.message}
//               </p>
//             )}

//             {/* PASSWORD */}
//             <label className="text-sm font-medium mb-1">
//               Password
//             </label>

//             <div className="relative mb-1">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter password"
//                 {...register("password")}
//                 className={`h-[44px] w-full px-4 pr-10 rounded-md border outline-none ${
//                   errors.password ? "border-red-500" : "border-[#E5E5E5]"
//                 }`}
//               />

//               <Eye
//                 size={18}
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
//               />
//             </div>

//             {errors.password && (
//               <p className="text-xs text-red-500 mb-3">
//                 {errors.password.message}
//               </p>
//             )}

//             {/* FORGOT PASSWORD */}
//             <div className="flex justify-end mb-5">
//               <Link
//                 href="/ForgotPassword"
//                 className="text-sm text-[#2164F4]"
//               >
//                 Forgot Password ?
//               </Link>
//             </div>

//             {/* BUTTON */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="h-[44px] rounded-full bg-[#2164F4] text-white font-medium mb-4 w-full disabled:opacity-60"
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </form>

//           <p className="text-sm text-center text-[#6B6969]">
//             Don’t Have an Account ?
//             <Link href="/SignUp" className="text-[#2164F4] ml-1">
//               Sign Up
//             </Link>
//           </p>

//           <p className="text-xs text-center text-[#9E9E9E] mt-10">
//             © 2026 Fetch True. All Rights Reserved.
//           </p>
//         </div>

//         {/* RIGHT SECTION */}
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

//           <Image
//             src="/image/signupMockup.png"
//             alt="App Preview"
//             width={480}
//             height={351}
//             className="absolute bottom-6 right-6"
//           />
//         </div>
//       </div>

//       {/* SUCCESS POPUP */}
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
//           <div className="bg-white rounded-xl px-8 py-6 shadow-xl text-center">
//             <div className="text-green-600 text-lg font-semibold mb-2">
//               ✅ Login Successful
//             </div>
//             <p className="text-sm text-gray-600">
//               Redirecting...
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";

export default function LoginPage() {
  const { login, loading } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors: any = {};

    // Email validation
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Password validation
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await login(form);
      router.push("/");
    } catch (err: any) {
      setErrors({ api: err.message });
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col justify-center px-24">
        <div className="max-w-md">
          <Image
            src="/image/logo.png"
            alt="Fetch True"
            width={101}
            height={69}
            className="mb-6"
          />
          <h1 className="text-3xl font-semibold mb-6">Welcome Back</h1>

          {errors.api && (
            <p className="text-red-500 text-sm mb-4">{errors.api}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-2 mt-1"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border rounded-lg px-4 py-2 mt-1 pr-12"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-sm text-blue-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="text-center text-sm">
              Don’t have an account?{" "}
              <Link href="/SignUp" className="text-blue-600">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE */}
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

