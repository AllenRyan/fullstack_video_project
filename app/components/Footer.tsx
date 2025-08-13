const Footer = () => {
    return ( 
        <footer id="about" className="bg-gray-900 text-white py-8 mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyVideoApp. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-indigo-400">Privacy</a>
            <a href="#" className="hover:text-indigo-400">Terms</a>
         </div>
        </div>
        </footer>
     );
}
 
export default Footer;