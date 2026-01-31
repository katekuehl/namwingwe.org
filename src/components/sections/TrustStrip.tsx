import { motion } from "framer-motion";
import { Award, Users, Building, Star } from "lucide-react";

const partners = [
  { name: "MTN Uganda", icon: Building },
];

export const TrustStrip = () => {
  return (
    <section className="bg-card py-12 border-y border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by leading organizations across Uganda
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-muted-foreground/60 hover:text-primary transition-colors"
            >
              <partner.icon className="h-5 w-5" />
              <span className="font-medium text-sm sm:text-base">{partner.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
