"use client";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import VideoGallery from "./components/VideoGallery";
import VideoUpload from "./components/VideoUpload";

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="upload" className="max-w-5xl mx-auto w-full px-6 py-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Upload a Video</h3>
        <VideoUpload />
      </section>
      <section id="videos" className="max-w-7xl mx-auto w-full px-6 py-12 bg-white">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Latest Videos</h3>
        <VideoGallery />
      </section>
      <Footer />
    </>
  );
}
 
export default Page;