"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@/src/context/AuthContext";

export default function LiveWebinarUI() {
  const { user } = useAuth();

  const [webinars, setWebinars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [enrollLoading, setEnrollLoading] = useState<string | null>(null);

  /* ================= FETCH WEBINARS ================= */
  const fetchWebinars = async () => {
    try {
      const res = await axios.get(
        "https://api.fetchtrue.com/api/academy/livewebinars"
      );

      // handle both array & single object response
      const data = Array.isArray(res.data.data)
        ? res.data.data
        : [res.data.data];

      setWebinars(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWebinars();
  }, []);

  /* ================= CHECK ENROLLED ================= */
  const isUserEnrolled = (webinar: any) => {
    if (!user?._id) return false;

    return webinar.user?.some((u: any) => {
      if (!u.user) return false;

      const userId =
        typeof u.user === "string" ? u.user : u.user._id;

      return userId === user._id && u.status;
    });
  };

  /* ================= ENROLL ================= */
  const handleEnroll = async (webinarId: string) => {
    try {
      setEnrollLoading(webinarId);

      const token = localStorage.getItem("token");

      await axios.post(
        `https://api.fetchtrue.com/api/academy/enroll/${webinarId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ Enrolled successfully");

      await fetchWebinars();
    } catch (err: any) {
      console.error(err);
      alert(err?.response?.data?.message || "❌ Enroll failed");
    } finally {
      setEnrollLoading(null);
    }
  };

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="text-center mt-10 text-white">
        Loading webinars...
      </div>
    );
  }

  const featured = webinars[0];
  const heroEnrolled = featured && isUserEnrolled(featured);

  return (
    <div className="bg-gray-950 min-h-screen text-white p-6">
      {/* 🔥 HERO SECTION */}
      {featured && (
        <div className="relative rounded-3xl overflow-hidden mb-10 shadow-xl">
          <img
            src={featured.imageUrl}
            className="w-full h-[350px] object-cover opacity-60"
          />

          <div className="absolute top-0 left-0 p-6 w-full h-full flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent">
            <h2 className="text-3xl font-bold mb-2">
              {featured.name}
            </h2>

            <p className="text-gray-300 mb-3 max-w-2xl">
              {featured.description}
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-sm">
                📅 {featured.date} | ⏰ {featured.startTime}
              </span>

              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  featured.closeStatus
                    ? "bg-red-500"
                    : "bg-green-500"
                }`}
              >
                {featured.closeStatus ? "Closed" : "Live"}
              </span>

              {/* HERO BUTTON */}
              {!user ? (
                <button className="bg-yellow-500 px-4 py-2 rounded-lg text-sm">
                  Login Required
                </button>
              ) : featured.closeStatus ? null : heroEnrolled ? (
                <a
                  href={featured.displayVideoUrls[0]}
                  target="_blank"
                  className="bg-green-600 px-4 py-2 rounded-lg text-sm"
                >
                  Join Now
                </a>
              ) : (
                <button
                  onClick={() => handleEnroll(featured._id)}
                  className="bg-blue-600 px-4 py-2 rounded-lg text-sm"
                >
                  {enrollLoading === featured._id
                    ? "Enrolling..."
                    : "Enroll Now"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 🎯 GRID SECTION */}
      <h3 className="text-xl font-semibold mb-6">
        All Webinars
      </h3>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {webinars.map((item) => {
          const enrolled = isUserEnrolled(item);

          return (
            <div
              key={item._id}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="relative">
                <img
                  src={item.imageUrl}
                  className="h-48 w-full object-cover"
                />

                <span
                  className={`absolute top-3 right-3 px-3 py-1 text-xs rounded-full ${
                    item.closeStatus
                      ? "bg-red-600"
                      : "bg-green-500"
                  }`}
                >
                  {item.closeStatus ? "Closed" : "Live"}
                </span>
              </div>

              <div className="p-4">
                <h4 className="font-semibold mb-2 line-clamp-2">
                  {item.name}
                </h4>

                <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                  {item.description}
                </p>

                <div className="text-sm text-gray-300 mb-3">
                  📅 {item.date} <br />
                  ⏰ {item.startTime} - {item.endTime}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">
                    👥 {item.user?.length || 0} joined
                  </span>

                  {/* BUTTON LOGIC */}
                  {!user ? (
                    <button className="bg-yellow-500 px-3 py-1 rounded-md text-sm">
                      Login Required
                    </button>
                  ) : item.closeStatus ? (
                    <button className="bg-gray-600 px-3 py-1 rounded-md text-sm">
                      Closed
                    </button>
                  ) : enrolled ? (
                    <a
                      href={item.displayVideoUrls[0]}
                      target="_blank"
                      className="bg-green-600 px-3 py-1 rounded-md text-sm"
                    >
                      Join Now
                    </a>
                  ) : (
                    <button
                      onClick={() => handleEnroll(item._id)}
                      disabled={enrollLoading === item._id}
                      className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md text-sm"
                    >
                      {enrollLoading === item._id
                        ? "Enrolling..."
                        : "Enroll"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}