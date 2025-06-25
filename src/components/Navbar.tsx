
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">SB Works</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">Find Work</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Find Freelancers</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">How It Works</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
