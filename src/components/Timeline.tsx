import { motion } from "framer-motion";
import { Calendar, CheckCircle } from "lucide-react";

const timelineEvents = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a vision to revolutionize technology"
  },
  {
    year: "2021",
    title: "Global Expansion",
    description: "Expanded operations to 3 continents"
  },
  {
    year: "2022",
    title: "Major Breakthrough",
    description: "Launched our flagship AI platform"
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Received multiple industry awards"
  }
];

const Timeline = () => {
  return (
    <section className="py-20 px-4" id="timeline">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Journey
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="feature-card group">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-5 h-5 mr-2 text-primary" />
                    <span className="text-xl font-bold">{event.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                  <CheckCircle className="w-6 h-6 text-accent mt-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;