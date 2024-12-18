import { motion } from "framer-motion";
import { Code2, Globe, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Pioneering the Future</h3>
            <p className="text-muted-foreground">
              We're a team of innovators, dreamers, and doers, pushing the boundaries 
              of what's possible in technology. Our mission is to create solutions 
              that not only solve today's challenges but anticipate tomorrow's needs.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <Code2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Innovation</p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Global Reach</p>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Fast Delivery</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden neon-border relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm" />
              
              {/* Large orbital circle */}
              <motion.div
                className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-primary/40 to-secondary/40"
                animate={{
                  x: [0, 200, 200, 0, 0],
                  y: [0, 0, 200, 200, 0],
                  scale: [1, 1.4, 1, 0.8, 1],
                  rotate: [0, 180, 360, 540, 720],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Corner to corner movement */}
              <motion.div
                className="absolute w-16 h-16"
                style={{
                  borderRight: "3px solid rgba(var(--primary), 0.4)",
                  borderBottom: "3px solid rgba(var(--secondary), 0.4)",
                  borderRadius: "30%",
                }}
                animate={{
                  x: [0, 200, 0, 200, 0],
                  y: [0, 200, 200, 0, 0],
                  rotate: [0, 180, 360, 540, 720],
                  scale: [1, 1.2, 0.8, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Center expanding diamond */}
              <motion.div
                className="absolute w-20 h-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  background: "linear-gradient(45deg, rgba(var(--accent), 0.4), rgba(var(--primary), 0.4))",
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
                animate={{
                  rotate: [0, -360],
                  scale: [0.5, 2.5],
                  opacity: [0.8, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
              />
              
              {/* Random floating particles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/40 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                    scale: [1, Math.random() * 1.5 + 0.5],
                    opacity: [0.3, 0.8],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              {/* Diagonal zigzag particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`zigzag-${i}`}
                  className="absolute w-3 h-3 bg-accent/50 rounded-full"
                  style={{
                    left: `${i * 33}%`,
                    top: "0%",
                  }}
                  animate={{
                    x: [0, 100, 0, -100, 0],
                    y: [0, 100, 200, 100, 0],
                    scale: [1, 1.5, 1, 1.5, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 1.3,
                  }}
                />
              ))}

              {/* Circular path particles */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`circle-${i}`}
                  className="absolute w-2 h-2 bg-secondary/50 rounded-full"
                  animate={{
                    x: [100 + Math.cos(i * Math.PI/2) * 100, 100 + Math.cos((i * Math.PI/2) + 2 * Math.PI) * 100],
                    y: [100 + Math.sin(i * Math.PI/2) * 100, 100 + Math.sin((i * Math.PI/2) + 2 * Math.PI) * 100],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 1.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;