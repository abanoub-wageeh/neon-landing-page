import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import TiltWrapper from "./TiltWrapper";

const projects = [
  {
    title: "AI-Powered Analytics",
    description: "Revolutionizing data analysis with machine learning",
    image: "https://plus.unsplash.com/premium_photo-1720091339077-d0f56397a0c9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#"
  },
  {
    title: "Smart City Platform",
    description: "Connecting urban infrastructure with IoT solutions",
    image: "https://plus.unsplash.com/premium_photo-1683394173305-29f42bdd1f37?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#"
  },
  {
    title: "Blockchain Security",
    description: "Advanced cryptographic solutions for enterprise",
    image: "https://plus.unsplash.com/premium_photo-1733342554594-102b8e2d0623?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#"
  }
];

const CaseStudies = () => {
  return (
    <section className="py-20 px-4 bg-background/50" id="case-studies">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Case Studies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <TiltWrapper className="h-full">
                <div className="feature-card h-full flex flex-col justify-between group-hover:neon-border">
                  <div>
                    <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-muted">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:border-primary group-hover:text-white transition-colors"
                  >
                    View Project <ArrowUpRight className="ml-2" />
                  </Button>
                </div>
              </TiltWrapper>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;