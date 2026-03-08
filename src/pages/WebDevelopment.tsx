import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Code, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
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
                <Code className="h-7 w-7 text-primary" />
              </div>
              <h1 className="heading-section text-foreground">Web Development Bootcamp</h1>
            </div>

            <p className="text-muted-foreground text-lg max-w-3xl mb-10">
              Master HTML, CSS, JavaScript, and modern frameworks like React. Build real-world projects and graduate job-ready with the skills employers are looking for.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-xl font-display font-semibold text-foreground mb-6">What You'll Learn</h2>
                <ul className="space-y-4">
                  {[
                    "HTML5 & CSS3 fundamentals",
                    "JavaScript & TypeScript",
                    "React.js & modern frameworks",
                    "Responsive & mobile-first design",
                    "Version control with Git & GitHub",
                    "API integration & backend basics",
                    "Deployment & hosting",
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
                  <h3 className="font-display font-semibold text-foreground mb-2">Duration</h3>
                  <p className="text-muted-foreground">12–16 weeks (full-time) or 6 months (part-time)</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-display font-semibold text-foreground mb-2">Format</h3>
                  <p className="text-muted-foreground">In-person at our Kampala center + online options</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-display font-semibold text-foreground mb-2">Prerequisites</h3>
                  <p className="text-muted-foreground">No prior coding experience required</p>
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

export default WebDevelopment;
