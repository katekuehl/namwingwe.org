import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z
  .string()
  .trim()
  .email("Please enter a valid email address")
  .max(255, "Email is too long");

export const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    const { error: insertError } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: result.data.toLowerCase() });
    setIsSubmitting(false);

    if (insertError) {
      if (insertError.code === "23505") {
        toast({
          title: "Already subscribed",
          description: "This email is already on our list. Thank you!",
        });
        setEmail("");
        return;
      }
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "You're subscribed!",
      description: "Thanks for joining our newsletter.",
    });
    setEmail("");
  };

  return (
    <section id="newsletter" className="section-padding bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex w-10 h-10 rounded-2xl bg-primary/15 items-center justify-center mb-10">
            <Mail className="h-4 w-4 text-primary" />
          </div>
          <span className="eyebrow inline-block text-primary mb-4">
            Stay Connected
          </span>
          <h2 className="heading-section text-secondary-foreground mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-secondary-foreground/70 text-lg mb-8">
            Get inspiring stories, upcoming programs, and tech tips for women — delivered to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="flex-1">
              <Input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="your@email.com"
                aria-label="Email address"
                className={`bg-background h-12 ${error ? "border-destructive" : ""}`}
              />
              {error && (
                <p className="text-sm text-destructive mt-1 text-left">{error}</p>
              )}
            </div>
            <Button type="submit" size="lg" disabled={isSubmitting} className="h-12">
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Joining...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Subscribe
                  <Send className="h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
          <p className="text-xs text-secondary-foreground/50 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
