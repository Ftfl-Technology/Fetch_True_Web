"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

export default function TrainingVideoPage() {

  const params = useParams();
  const id = params?.id;

  const [videos, setVideos] = useState([]);
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

    return `https://www.youtube.com/embed/${videoId}`;

  };

  if (!currentVideo) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2">

          <iframe
            className="w-full h-[420px] rounded-lg"
            src={getYoutubeEmbed(currentVideo.videoUrl)}
            allowFullScreen
          />

          <h2 className="text-lg font-semibold mt-4">
            {currentVideo.videoName}
          </h2>

        </div>

      </div>

    </div>
  );
}