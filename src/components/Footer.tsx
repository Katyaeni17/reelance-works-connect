
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">SB Works</h3>
            <p className="text-gray-300 leading-relaxed">
              Discovering opportunities, unlocking potential. The premier platform for connecting skilled freelancers with exciting projects.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">For Freelancers</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Find Work</a></li>
              <li><a href="#" className="hover:text-white">Build Portfolio</a></li>
              <li><a href="#" className="hover:text-white">Get Paid Safely</a></li>
              <li><a href="#" className="hover:text-white">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">For Clients</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Post a Project</a></li>
              <li><a href="#" className="hover:text-white">Find Freelancers</a></li>
              <li><a href="#" className="hover:text-white">Enterprise Solutions</a></li>
              <li><a href="#" className="hover:text-white">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 SB Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
