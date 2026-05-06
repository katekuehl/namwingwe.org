import { motion } from "framer-motion";
import { Check, Target, Heart, Zap } from "lucide-react";
import { siteContent } from "@/data/content";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative organic accents */}
      <div className="absolute top-20 -right-32 w-96 h-96 blob bg-primary/10 blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-80 h-80 blob-2 bg-accent/10 blur-3xl animate-float pointer-events-none" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Sticky eyebrow column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <span className="eyebrow inline-block text-primary mb-5">About Us</span>
            <h2 className="heading-section text-foreground mb-6 text-balance">
              {siteContent.about.title}
            </h2>
            <div className="relative pl-5 border-l-2 border-primary">
              <p className="text-foreground font-display italic text-lg leading-relaxed">
                "{siteContent.about.mission}"
              </p>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8 space-y-10"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              {siteContent.about.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {siteContent.about.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  className="group flex items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-soft transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 blob bg-primary/15 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Check className="h-4 w-4 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              {[
                { icon: Target, label: "Mission-Driven" },
                { icon: Heart, label: "Community" },
                { icon: Zap, label: "Innovation" },
              ].map((v, i) => (
                <motion.div
                  key={v.label}
                  whileHover={{ y: -4 }}
                  className="text-center p-4 rounded-2xl hover:bg-card transition-colors"
                >
                  <div className="w-14 h-14 mx-auto blob-2 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3 animate-blob-morph" style={{ animationDelay: `${i * 2}s` }}>
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{v.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
