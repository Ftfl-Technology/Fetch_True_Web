// "use client";

// import {
//   createContext,
//   useContext,
//   useState,
//   ReactNode,
// } from "react";

// interface SignUpData {
//   fullName: string;
//   email: string;
//   mobileNumber: string;
//   password: string;
//   confirmPassword: string;
//   isAgree: boolean;
// }

// interface LoginData {
//   mobileNumber?: string;
//   email?: string;
//   password: string;
// }

// interface AuthContextType {
//   signup: (data: SignUpData) => Promise<void>;
//   login: (data: LoginData) => Promise<void>;
//   logout: () => void;
//   loading: boolean;
//   error: string | null;
//   success: string | null;
//   user: any | null;
// }

// const AuthContext = createContext<AuthContextType | null>(null);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const [user, setUser] = useState<any | null>(null);

//   /* ================= SIGNUP ================= */

//   const signup = async (data: SignUpData) => {
//     setLoading(true);
//     setError(null);
//     setSuccess(null);

//     try {
//       const res = await fetch(
//         "https://api.fetchtrue.com/api/auth/register",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(data),
//         }
//       );

//       const result = await res.json();

//       if (!res.ok) {
//         throw new Error(result.message || "Registration failed");
//       }

//       setSuccess("✅ Registration successful");
//     } catch (err: any) {
//       setError(err.message);
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= LOGIN ================= */

//   const login = async (data: LoginData) => {
//     setLoading(true);
//     setError(null);
//     setSuccess(null);

//     try {
//       const res = await fetch(
//         "https://api.fetchtrue.com/api/auth/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(data),
//         }
//       );

//       const result = await res.json();

//       if (!res.ok) {
//         throw new Error(result.message || "Login failed");
//       }

//       if (result.token) {
//         localStorage.setItem("token", result.token);
//       }

//       if (result.user) {
//         setUser(result.user);

//         // ⭐ CRITICAL FIX
//         localStorage.setItem("user", JSON.stringify(result.user));
//       }

//       setSuccess("✅ Login successful");
//     } catch (err: any) {
//       setError(err.message);
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= LOGOUT ================= */

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user"); // ⭐ IMPORTANT

//     setUser(null);
//     setSuccess("👋 Logged out successfully");
//   };

//   return (
//     <AuthContext.Provider
//       value={{ signup, login, logout, loading, error, success, user }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const ctx = useContext(AuthContext);
//   if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
//   return ctx;
// };



// "use client";

// import {
//   createContext,
//   useContext,
//   useState,
//   ReactNode,
//   useEffect,
// } from "react";

// interface SignUpData {
//   fullName: string;
//   email: string;
//   mobileNumber: string;
//   password: string;
//   confirmPassword: string;
//   isAgree: boolean;
// }

// interface LoginData {
//   mobileNumber?: string;
//   email?: string;
//   password: string;
// }

// interface AuthContextType {
//   signup: (data: SignUpData) => Promise<void>;
//   login: (data: LoginData) => Promise<void>;
//   logout: () => void;
//   loading: boolean;
//   error: string | null;
//   success: string | null;
//   user: any | null;
// }

// const AuthContext = createContext<AuthContextType | null>(null);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const [user, setUser] = useState<any | null>(null);

//   /* ================= RESTORE USER ON REFRESH ================= */

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");

//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   /* ================= SIGNUP ================= */

//   const signup = async (data: SignUpData) => {
//     setLoading(true);
//     setError(null);
//     setSuccess(null);

//     try {
//       const res = await fetch(
//         "https://api.fetchtrue.com/api/auth/register",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(data),
//         }
//       );

//       const result = await res.json();

//       if (!res.ok) {
//         throw new Error(result.message || "Registration failed");
//       }

//       setSuccess("✅ Registration successful");
//     } catch (err: any) {
//       setError(err.message);
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= LOGIN ================= */

//   const login = async (data: LoginData) => {
//     setLoading(true);
//     setError(null);
//     setSuccess(null);

//     try {
//       const res = await fetch(
//         "https://api.fetchtrue.com/api/auth/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(data),
//         }
//       );

//       const result = await res.json();

//       if (!res.ok) {
//         throw new Error(result.message || "Login failed");
//       }

//       if (result.token) {
//         localStorage.setItem("token", result.token);
//       }

//       if (result.user) {
//         setUser(result.user);
//         localStorage.setItem("user", JSON.stringify(result.user));
//       }

//       setSuccess("✅ Login successful");
//     } catch (err: any) {
//       setError(err.message);
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= LOGOUT ================= */

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");

//     setUser(null);
//     setError(null);
//     setSuccess("👋 Logged out successfully");

//     // Optional redirect (recommended)
//     window.location.href = "/";
//   };

//   return (
//     <AuthContext.Provider
//       value={{ signup, login, logout, loading, error, success, user }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const ctx = useContext(AuthContext);
//   if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
//   return ctx;
// };



"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface SignUpData {
  fullName: string;
  email: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
  isAgree: boolean;
}

interface LoginData {
  mobileNumber?: string;
  email?: string;
  password: string;
}

interface AuthContextType {
  signup: (data: SignUpData) => Promise<void>;
  login: (data: LoginData) => Promise<void>;
  logout: () => void;

  loading: boolean;
  error: string | null;
  success: string | null;

  user: any | null;
  token: string | null;

  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [user, setUser] = useState<any | null>(null);
  const [token, setToken] = useState<string | null>(null);

  /* ================= RESTORE SESSION ================= */

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }

      if (storedToken) {
        setToken(storedToken);
      }
    } catch (err) {
      console.warn("Failed to restore auth session");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }, []);

  /* ================= SIGNUP ================= */

  const signup = async (data: SignUpData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch(
        "https://api.fetchtrue.com/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Registration failed");
      }

      setSuccess("✅ Registration successful");
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /* ================= LOGIN ================= */

  const login = async (data: LoginData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch(
        "https://api.fetchtrue.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Login failed");
      }

      if (result.token) {
        localStorage.setItem("token", result.token);
        setToken(result.token);
      }

      if (result.user) {
        localStorage.setItem("user", JSON.stringify(result.user));
        setUser(result.user);
      }

      setSuccess("✅ Login successful");
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /* ================= LOGOUT ================= */

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
    setToken(null);
    setError(null);
    setSuccess(null);

    // Better than window.location.href in Next.js
    window.location.replace("/");
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        logout,

        loading,
        error,
        success,

        user,
        token,

        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};