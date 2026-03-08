import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src={logo} alt={siteContent.brand.name} className="h-10 w-auto" />
              <span className="font-display font-bold text-lg text-secondary-foreground">
                {siteContent.brand.name}
              </span>
            </a>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              {siteContent.footer.description}
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">
              Programs
            </h4>
            <ul className="space-y-3">
              {siteContent.footer.links.programs.map((link, index) => (
                <li key={index}>
                  <Link
                    to={programLinks[link] || "#"}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {siteContent.footer.links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href="#about"
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {siteContent.footer.links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link === "FAQ" ? "#faq" : link === "Contact" ? "#contact" : "#"}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            © {currentYear} {siteContent.brand.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
