import { motion } from "framer-motion";
import { Check, Target, Heart, Zap } from "lucide-react";
import { siteContent } from "@/data/content";
import pattern from "@/assets/pattern.png";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Pattern Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={pattern}
                alt="African tech pattern"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-bronze"
            >
              <div className="text-4xl font-bold font-display">5+</div>
              <div className="text-sm opacity-90">Years Empowering Women</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="heading-section text-foreground mb-6">
              {siteContent.about.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {siteContent.about.description}
            </p>
            <p className="text-foreground font-medium italic border-l-4 border-primary pl-4 mb-8">
              "{siteContent.about.mission}"
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {siteContent.about.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-border">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Mission-Driven</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Community</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Innovation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
