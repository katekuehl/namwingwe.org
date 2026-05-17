import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-secondary">
      {/* Animated organic background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-[hsl(30_28%_18%)] to-[hsl(30_30%_12%)]" />
        {/* Floating blobs */}
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] blob bg-primary/30 blur-3xl animate-blob-morph animate-float" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] blob-2 bg-accent/25 blur-3xl animate-blob-morph animate-float-slow" />
        <div className="absolute -bottom-40 left-1/4 w-[460px] h-[460px] blob-3 bg-bronze-light/20 blur-3xl animate-float" />
        {/* Pattern overlay */}
        <div className="absolute inset-0 pattern-dots opacity-40" />
      </div>

      {/* Content grid */}
      <div className="section-container relative z-10 pt-28 pb-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-primary-foreground/90 text-xs font-medium tracking-wider uppercase mb-8">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Empowering Women in Tech Since 2022
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display text-primary-foreground mb-8 text-balance"
          >
            {siteContent.hero.headline.split(" ").map((word, i, arr) => (
              <span key={i}>
                {i === arr.length - 2 || i === arr.length - 1 ? (
                  <span className="animated-gradient-text">{word} </span>
                ) : (
                  word + " "
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-body-large text-primary-foreground/75 mb-12 max-w-xl"
          >
            {siteContent.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#contact")}
              className="group shadow-glow"
            >
              {siteContent.hero.primaryCTA}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("#about")}
              className="group"
            >
              <Play className="mr-2 h-4 w-4" />
              {siteContent.hero.secondaryCTA}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-8 border-t border-primary-foreground/15"
          >
            {siteContent.trustStrip.stats.map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-display font-semibold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-primary-foreground/60 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right visual: organic image card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative hidden lg:block"
        >
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-6 blob bg-gradient-to-br from-primary/40 to-accent/30 blur-2xl animate-blob-morph" />
            {/* Image in blob */}
            <div className="relative blob overflow-hidden aspect-[4/5] shadow-elevated animate-blob-morph">
              <img
                src={heroImage}
                alt="Women learning tech"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 via-transparent to-transparent" />
            </div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-4 glass rounded-2xl px-5 py-3 shadow-elevated"
            >
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Based in</div>
              <div className="text-base font-display font-semibold text-foreground">Kampala 🇺🇬</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[1]" />
    </section>
  );
};
