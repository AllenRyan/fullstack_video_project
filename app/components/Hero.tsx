const Hero = () => {
    return ( 
        <section className="flex flex-col items-center text-center mt-18 py-20 px-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Share Your Videos with the World</h2>
            <p className="text-lg max-w-2xl mb-6">
            Upload, manage, and watch videos all in one place. Start by uploading your first video now.
            </p>
            <a href="#upload" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
            Get Started
            </a>
        </section>
     );
}
 
export default Hero