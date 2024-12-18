import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Timeline from "@/components/Timeline";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Timeline />
      <Process />
      <CaseStudies />
      <TechStack />
      <Contact />
      <footer className="py-8 px-4 text-center text-muted-foreground">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © 2024 TechCorp. All rights reserved.
        </motion.div>
      </footer>
    </div>
  );
};

export default Index;