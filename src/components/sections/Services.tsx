import { motion } from "framer-motion";
import { Code, BarChart3, Palette, TrendingUp, Users, Briefcase, ArrowRight } from "lucide-react";
import { siteContent } from "@/data/content";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Code,
  BarChart3,
  Palette,
  TrendingUp,
  Users,
  Briefcase,
};

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Our Programs
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Comprehensive Tech Training
          </h2>
          <p className="text-muted-foreground text-lg">
            From coding bootcamps to career services, we provide everything you need to launch your tech career.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteContent.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-background rounded-xl p-6 lg:p-8 card-hover border border-border hover:border-primary/30"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary font-medium text-sm hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
