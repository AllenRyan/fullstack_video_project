"use client";

import { useState } from "react";
import FileUpload from "./FileUpload";

interface UploadResponse {
  name: string;
  url: string;
  thumbnailUrl?: string;
}

const VideoUpload = () => {
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState<UploadResponse | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Handles what happens after the file is successfully uploaded to ImageKit
  const handleSuccess = async (res: UploadResponse) => {
    try {
      setUploaded(res);
      setStatusMessage("Saving video info to database...");

      const videoData = {
        title: res.name,
        description: "Uploaded from UI", // Could be replaced with a user input
        videoUrl: res.url,
        thumbnailUrl: res.thumbnailUrl ?? "",
      };

      const response = await fetch("/api/videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(videoData),
      });

      if (!response.ok) {
        throw new Error(`DB Error: ${response.statusText}`);
      }

      setStatusMessage("Video saved successfully!");
    } catch (error) {
      console.error(error);
      setStatusMessage("❌ Failed to save video to database.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow bg-white">
      <h2 className="text-xl font-semibold mb-4">Upload a Video</h2>

      <FileUpload
        fileType="video"
        onProgress={setProgress}
        onSuccess={handleSuccess}
      />

      {/* Upload progress */}
      {progress > 0 && progress < 100 && (
        <div className="mt-2 text-sm text-gray-600">
          Uploading: {progress}%
        </div>
      )}

      {/* Status messages */}
      {statusMessage && (
        <div
          className={`mt-3 text-sm ${
            statusMessage.startsWith("❌")
              ? "text-red-600"
              : "text-green-600"
          }`}
        >
          {statusMessage}
        </div>
      )}

      {/* Uploaded video preview */}
      {uploaded && (
        <div className="mt-4">
          <p className="text-green-600 font-medium">✅ Upload complete!</p>
          <a
            href={uploaded.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            View Video
          </a>
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
