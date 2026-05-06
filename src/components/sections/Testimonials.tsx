import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { siteContent } from "@/data/content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";

const imageMap: { [key: string]: string } = {
  "testimonial-1": testimonial1,
  "testimonial-2": testimonial2,
  "testimonial-3": testimonial3,
  "testimonial-4": testimonial4,
  "testimonial-5": testimonial5,
};

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] blob bg-primary/15 blur-3xl animate-float" />
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] blob-2 bg-accent/15 blur-3xl animate-float-slow" />
      <div className="absolute inset-0 pattern-dots opacity-20" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="eyebrow inline-block text-primary mb-4">
            Success Stories
          </span>
          <h2 className="heading-section text-secondary-foreground mb-4 text-balance">
            Hear From Our <span className="animated-gradient-text">Graduates</span>
          </h2>
          <p className="text-secondary-foreground/70 text-lg">
            Real stories from women who transformed their careers through our programs.
          </p>
        </motion.div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
          className="w-full max-w-6xl mx-auto px-4 md:px-12"
        >
          <CarouselContent className="py-8">
            {siteContent.testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="glass rounded-3xl p-8 relative h-full border border-primary-foreground/10 backdrop-blur-xl"
                >
                  <div className="absolute -top-5 left-8">
                    <div className="w-12 h-12 blob bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-bronze animate-blob-morph">
                      <Quote className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>

                  <p className="text-foreground leading-relaxed mb-6 italic pt-6 font-display">
                    "{testimonial.quote}"
                  </p>

                  <div className="border-t border-border/60 pt-4 flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute -inset-1 blob bg-gradient-to-br from-primary to-accent opacity-60 blur-sm" />
                      <img
                        src={imageMap[testimonial.image]}
                        alt={testimonial.name}
                        className="relative w-14 h-14 rounded-full object-cover border-2 border-background"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-body font-semibold text-foreground tracking-tight">
                        {testimonial.name}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-6" />
        </Carousel>
      </div>
    </section>
  );
};
