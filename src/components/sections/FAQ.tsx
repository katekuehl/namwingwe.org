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
    <section id="faq" className="section-padding bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow inline-block text-primary mb-4">
              FAQ
            </span>
            <h2 className="heading-section text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Find answers to common questions about our programs, admissions, and more.
            </p>
            <div className="bg-primary/10 rounded-xl p-6">
              <h3 className="font-display font-semibold text-foreground mb-2">
                Still have questions?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Can't find the answer you're looking for? Please reach out to our friendly team.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Contact us →
              </a>
            </div>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {siteContent.faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-lg border border-border px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-body font-semibold text-foreground hover:text-primary hover:no-underline py-4 text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
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
