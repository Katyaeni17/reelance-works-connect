
import { User, FileText, MessageSquare, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: User,
      title: "Create Your Profile",
      description: "Sign up and build a compelling profile showcasing your skills, experience, and portfolio."
    },
    {
      icon: FileText,
      title: "Find & Bid on Projects",
      description: "Browse through diverse projects and submit proposals highlighting your expertise."
    },
    {
      icon: MessageSquare,
      title: "Collaborate & Communicate",
      description: "Work directly with clients through our integrated communication and project management tools."
    },
    {
      icon: CheckCircle,
      title: "Deliver & Get Paid",
      description: "Submit your completed work and receive secure payments upon client approval."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How SB Works Functions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple steps to connect, collaborate, and succeed on our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6 text-white">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
