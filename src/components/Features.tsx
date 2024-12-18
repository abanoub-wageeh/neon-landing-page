import { motion } from "framer-motion";
import { Cpu, Globe, Shield, Zap, Code, Cloud, Lock, Rocket } from "lucide-react";

const features = [
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: "Advanced AI",
    description: "Cutting-edge artificial intelligence solutions for complex problems"
  },
  {
    icon: <Shield className="w-8 h-8 text-secondary" />,
    title: "Secure Platform",
    description: "Enterprise-grade security with end-to-end encryption"
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "Lightning Fast",
    description: "Optimized performance for seamless user experience"
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Global Scale",
    description: "Infrastructure that scales with your business needs"
  },
  {
    icon: <Code className="w-8 h-8 text-secondary" />,
    title: "Clean Code",
    description: "Maintainable and scalable codebase following best practices"
  },
  {
    icon: <Cloud className="w-8 h-8 text-accent" />,
    title: "Cloud Native",
    description: "Built for modern cloud infrastructure and scalability"
  },
  {
    icon: <Lock className="w-8 h-8 text-primary" />,
    title: "Data Privacy",
    description: "Advanced data protection and compliance measures"
  },
  {
    icon: <Rocket className="w-8 h-8 text-secondary" />,
    title: "Quick Deploy",
    description: "Streamlined deployment process for faster time-to-market"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Cutting-Edge Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful features that make our platform stand out from the competition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0,255,255,0.3)"
              }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;