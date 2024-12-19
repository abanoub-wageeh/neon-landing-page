import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="hero-content text-center max-w-4xl mx-auto">
        <div className="reveal-text mb-6">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Innovating Tomorrow's Technology
          </motion.h1>
        </div>
        <div className="reveal-text mb-8">
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            We're pushing the boundaries of what's possible in technology, 
            creating solutions that shape the future of digital innovation.
          </motion.p>
        </div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button 
            size="lg" 
            className="neon-border bg-background/50 backdrop-blur-sm hover:bg-primary/20 min-w-[200px]"
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="min-w-[200px]"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;