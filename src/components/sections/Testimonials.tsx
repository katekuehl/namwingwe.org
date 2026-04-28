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

const imageMap: { [key: string]: string } = {
  "testimonial-1": testimonial1,
  "testimonial-2": testimonial2,
  "testimonial-3": testimonial3,
};

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="eyebrow inline-block text-primary mb-4">
            Success Stories
          </span>
          <h2 className="heading-section text-secondary-foreground mb-4">
            Hear From Our Graduates
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
          <CarouselContent className="py-6">
            {siteContent.testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-background rounded-xl p-8 shadow-soft relative h-full">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-bronze">
                      <Quote className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-foreground leading-relaxed mb-6 italic pt-4">
                    "{testimonial.quote}"
                  </p>

                  {/* Author with Photo */}
                  <div className="border-t border-border pt-4 flex items-center gap-4">
                    <img
                      src={imageMap[testimonial.image]}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="flex-1">
                      <div className="font-body font-semibold text-foreground tracking-tight">
                        {testimonial.name}
                      </div>
                    </div>
                  </div>
                </div>
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
