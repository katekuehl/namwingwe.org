import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Figma, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UIUXDesign = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="UI/UX Design Course | Namwingwe TechRise"
        description="Learn Figma, prototyping, and user-centered design in our UI/UX program empowering women across Uganda."
        path="/ui-ux-design"
      />
      <Header />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Figma className="h-7 w-7 text-primary" />
              </div>
              <h1 className="heading-section text-foreground">UI/UX Design</h1>
            </div>

            <p className="text-muted-foreground text-lg max-w-3xl mb-10">
              Create beautiful, user-centered designs. Master Figma, prototyping, and design thinking methodologies to build products people love.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-xl font-display font-semibold text-foreground mb-6">What You'll Learn</h2>
                <ul className="space-y-4">
                  {[
                    "User research & personas",
                    "Wireframing & prototyping",
                    "Figma & design tools",
                    "Design thinking methodology",
                    "Usability testing",
                    "Interaction & motion design",
                    "Design systems & components",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-body font-semibold text-foreground mb-2 text-sm uppercase tracking-wider">Duration</h3>
                  <p className="text-muted-foreground">12 weeks (full-time) or 5 months (part-time)</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-body font-semibold text-foreground mb-2 text-sm uppercase tracking-wider">Format</h3>
                  <p className="text-muted-foreground">In-person at our Kampala center + online options</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-body font-semibold text-foreground mb-2 text-sm uppercase tracking-wider">Prerequisites</h3>
                  <p className="text-muted-foreground">No prior design experience required</p>
                </div>
                <Button asChild size="lg" className="w-full">
                  <Link to="/#contact">Apply Now</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UIUXDesign;
