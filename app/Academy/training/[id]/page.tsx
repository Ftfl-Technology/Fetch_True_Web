"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

export default function TrainingVideoPage() {
  const params = useParams();
  const id = params?.id;

  const [videos, setVideos] = useState<any[]>([]);
  const [currentVideo, setCurrentVideo] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const res = await axios.get(
        "https://api.fetchtrue.com/api/academy/certifications"
      );

      const certification = res.data.data.find(
        (c: any) => c._id === id
      );

      if (certification) {
        setVideos(certification.video);
        setCurrentVideo(certification.video[0]);
      }
    };

    fetchData();
  }, [id]);

 const getYoutubeEmbed = (url: string) => {
  const videoId =
    url.split("v=")[1]?.split("&")[0] || url.split("/").pop();

  return `https://www.youtube.com/embed/${videoId}?modestbranding=0&rel=0&controls=1&playsinline=0&title=""`;
};

  if (!currentVideo) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <Link href="/Academy/training">
       <span className="flex items-center"><MdArrowBack/>Back</span>
      </Link>
      <div className="grid lg:grid-cols-3 gap-6 mt-10">

        {/* LEFT SIDE - MAIN VIDEO */}
        <div className="lg:col-span-2">
          <iframe
            className="w-full h-[250px] lg:h-[500px] rounded-lg"
            src={getYoutubeEmbed(currentVideo.videoUrl)}
            allowFullScreen
          />

          <h2 className="text-lg font-semibold mt-4">
            {currentVideo.videoName}
          </h2>

          <p className="text-gray-600 mt-2">
            {currentVideo.videoDescription}
          </p>
        </div>

        {/* RIGHT SIDE - RELATED VIDEOS */}
        <div className="space-y-4 max-h-[550px] overflow-y-auto">
          <h3 className="font-semibold text-lg mb-2">Related Videos</h3>

          {videos.map((video) => (
            <div
              key={video._id}
              onClick={() => setCurrentVideo(video)}
              className={`flex gap-3 cursor-pointer p-2 rounded-lg border 
                ${
                  currentVideo._id === video._id
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                }`}
            >
              <img
                src={video.videoImageUrl}
                alt={video.videoName}
                className="w-28 h-20 object-full rounded"
              />

              <div>
                <h4 className="text-sm font-medium">
                  {video.videoName}
                </h4>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {video.videoDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}