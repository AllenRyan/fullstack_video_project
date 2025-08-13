"use client";
import { Video } from "@imagekit/next";
import { useEffect, useState } from "react";

interface Video {
  url: string;
  name: string;
}

const VideoGallery = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch("/api/videos")
      .then(res => res.json())
      .then(setVideos)
      .catch(() => setVideos([]));
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">My Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.length === 0 && <div>No videos found.</div>}
          {videos.map((video, idx) => (
            <div key={idx} className="border rounded-lg p-3 bg-white shadow">
              <Video
                urlEndpoint="https://ik.imagekit.io/simpledev7" 
                src={video.url}
                controls
                width={500}
                height={300}
              />
              <div className="mt-2 text-sm text-gray-700">{video.name}</div>
            </div>
          ))}
          </div>
      </div>
  );
}

export default VideoGallery