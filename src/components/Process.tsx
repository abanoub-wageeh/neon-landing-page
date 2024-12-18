import { motion } from "framer-motion";
import { ArrowRight, Cpu, Code, Zap, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Discovery",
    description: "Understanding your needs and objectives"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Development",
    description: "Building with cutting-edge technology"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Testing",
    description: "Rigorous quality assurance"
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Deployment",
    description: "Seamless launch and maintenance"
  }
];

const Process = () => {
  return (
    <section className="py-20 px-4" id="process">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Process
        </motion.h2>
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-accent hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="feature-card group hover:neon-border h-full flex flex-col">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 rounded-full bg-background/50 text-primary group-hover:text-accent transition-colors">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-primary" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;