
import { Shield, MessageSquare, Search, Clock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Matching",
      description: "Our intelligent system connects you with the perfect freelancers based on skills, experience, and project requirements."
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "With dedicated admin oversight and secure payment processing, every transaction is protected and verified."
    },
    {
      icon: MessageSquare,
      title: "Seamless Communication",
      description: "Built-in messaging and collaboration tools keep projects on track and communication transparent."
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Stay informed with instant notifications about project progress, new opportunities, and platform updates."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose SB Works?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We prioritize efficiency, transparency, and security in every aspect of the freelancing process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 group-hover:bg-blue-200 transition-colors">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
