"use client";

import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function RecordedWebinars() {
  const [webinars, setWebinars] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchWebinars();
  }, []);

  const fetchWebinars = async () => {
    try {
      const res = await axios.get(
        "https://api.fetchtrue.com/api/academy/webinars"
      );
      setWebinars(res.data.data || []);

      if (res.data.data?.length > 0) {
        const first = res.data.data[0].video?.[0];
        setSelectedVideo(first);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredWebinars = useMemo(() => {
    const q = search.toLowerCase();
    return webinars
      .map((w) => ({
        ...w,
        video: (w.video || []).filter((v) =>
          v.videoName.toLowerCase().includes(q)
        ),
      }))
      .filter(
        (w) =>
          w.name.toLowerCase().includes(q) || (w.video || []).length > 0
      );
  }, [webinars, search]);

  const allVideos = useMemo(() => {
    return webinars.flatMap((w) => w.video || []);
  }, [webinars]);

  const getYoutubeEmbed = (url) => {
    if (!url) return "";
    const id = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube-nocookie.com/embed/${id}?modestbranding=1&controls=1&rel=0&iv_load_policy=3&fs=1&playsinline=1`;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <div className="px-6 md:px-10 pt-8 pb-6 border-b">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Recorded Webinars
            </h1>
            <p className="text-gray-500 mt-1">
              Learn from curated sessions. Click any video to start watching.
            </p>
          </div>

          <div className="w-full md:w-[420px]">
            <div className="relative">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search webinars or videos..."
                className="w-full pl-10 pr-3 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 md:px-10 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT: Player + Now Playing */}
        <div className="lg:col-span-8 space-y-5">
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
            {selectedVideo ? (
              <iframe
                key={selectedVideo._id}
                className="w-full h-[260px] sm:h-[360px] md:h-[440px]"
                src={getYoutubeEmbed(selectedVideo.videoUrl)}
                title="video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <div className="h-[260px] sm:h-[360px] md:h-[440px] flex items-center justify-center text-gray-500">
                Select a video to play
              </div>
            )}
          </div>

          {selectedVideo && (
            <div className="bg-white rounded-2xl border p-5">
              <h2 className="text-2xl font-semibold leading-snug">
                {selectedVideo.videoName}
              </h2>
              <p className="text-gray-600 mt-2">
                {selectedVideo.videoDescription}
              </p>
            </div>
          )}

          {/* GRID: Recommended / All Videos */}
          <div>
            <h3 className="text-lg font-semibold mb-3">All Videos</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {allVideos.map((vid) => (
                <div
                  key={vid._id}
                  onClick={() => setSelectedVideo(vid)}
                  className={`group cursor-pointer rounded-xl overflow-hidden border hover:shadow-sm transition ${
                    selectedVideo?._id === vid._id
                      ? "ring-2 ring-blue-500"
                      : ""
                  }`}
                >
                  <div className="relative">
                    <img
                      src={vid.videoImageUrl}
                      alt="thumb"
                      className="w-full h-28 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition">
                      <div className="opacity-0 group-hover:opacity-100 transition text-white text-2xl">
                        ▶
                      </div>
                    </div>
                  </div>

                  <div className="p-2">
                    <p className="text-xs font-medium line-clamp-2">
                      {vid.videoName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Webinars grouped */}
        <div className="lg:col-span-4">
          <div className="sticky top-4 space-y-4 max-h-[80vh] overflow-y-auto pr-1">
            {filteredWebinars.map((webinar) => (
              <div
                key={webinar._id}
                className="bg-white border rounded-xl p-4"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={webinar.imageUrl}
                    alt="webinar"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-semibold leading-tight">
                      {webinar.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {(webinar.video || []).length} videos
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {(webinar.video || []).map((vid) => (
                    <div
                      key={vid._id}
                      onClick={() => setSelectedVideo(vid)}
                      className={`flex gap-3 p-2 rounded-lg cursor-pointer border hover:bg-gray-50 ${
                        selectedVideo?._id === vid._id
                          ? "border-blue-500 bg-blue-50"
                          : ""
                      }`}
                    >
                      <img
                        src={vid.videoImageUrl}
                        alt="thumb"
                        className="w-16 h-12 rounded object-cover"
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-medium line-clamp-2">
                          {vid.videoName}
                        </p>
                        <p className="text-[11px] text-gray-500 line-clamp-1">
                          {vid.videoDescription}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
