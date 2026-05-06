import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteContent } from "@/data/content";

export const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-card relative overflow-hidden">
      <div className="absolute top-1/3 -left-40 w-96 h-96 blob-3 bg-primary/10 blur-3xl animate-float-slow pointer-events-none" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 self-start"
          >
            <span className="eyebrow inline-block text-primary mb-4">FAQ</span>
            <h2 className="heading-section text-foreground mb-6 text-balance">
              Frequently Asked <span className="animated-gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Find answers to common questions about our programs, admissions, and more.
            </p>
            <div className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent border border-primary/20">
              <div className="absolute -top-12 -right-12 w-40 h-40 blob bg-primary/20 blur-2xl animate-blob-morph" />
              <div className="relative">
                <h3 className="font-display font-semibold text-foreground mb-2 text-xl">
                  Still have questions?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Can't find the answer you're looking for? Please reach out to our friendly team.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary font-medium hover:gap-3 gap-2 transition-all"
                >
                  Contact us <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {siteContent.faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-2xl border border-border px-6 data-[state=open]:border-primary/40 data-[state=open]:shadow-soft transition-all"
                >
                  <AccordionTrigger className="text-left font-body font-semibold text-foreground hover:text-primary hover:no-underline py-5 text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
