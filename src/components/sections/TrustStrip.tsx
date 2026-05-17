import { motion } from "framer-motion";
import { Award, Users, Building, Star } from "lucide-react";

const partners = [
  { name: "MTN Uganda", icon: Building },
  { name: "Makerere University", icon: Award },
];

export const TrustStrip = () => {
  return (
    <section className="bg-card py-14 border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-40 pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em]">
            Trusted by leading organizations across Uganda
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-background/60 border border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
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
