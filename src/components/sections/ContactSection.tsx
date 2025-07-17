import React from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  MapPin,
  Download,
  Twitter,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <div className="space-y-8">
      <h2 className="section-title">Contact</h2>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-lg text-muted-foreground text-justify">
            Let's connect and explore opportunities together!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="border-2 border-border bg-card/10 hover:bg-card/20 transition-all shadow-lg">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:anhquan200304@gmail.com"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      anhquan200304@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a
                      href="tel:+84369423476"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      (+84) 369 423 476
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">
                      Ho Chi Minh City, Vietnam
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">
                  Follow me on:
                </p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full"
                  >
                    <a
                      href="https://github.com/AnhQuan2004"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full"
                  >
                    <a
                      href="https://linkedin.com/in/anhquan2003"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full"
                  >
                    <a
                      href="https://x.com/AnhQuan_03"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X (Twitter)"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download CV Section */}
          <Card className="border-2 border-border bg-card/10 hover:bg-card/20 transition-all shadow-lg">
            <CardContent className="p-6 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Download className="h-8 w-8 text-primary" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Download My CV
                </h3>
                <p className="text-muted-foreground mb-6 text-justify">
                  Get a comprehensive overview of my experience, skills, and
                  achievements in AI engineering.
                </p>
              </div>

              <Button size="lg" className="w-full group" asChild>
                <a href="/NguyenAnhQuan.pdf" download="NguyenAnhQuan.pdf">
                  <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  Download CV
                </a>
              </Button>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Last updated: January 2025 • PDF Format • 2MB
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4 text-justify">
            Ready to collaborate on your next AI project?
          </p>
          <Button size="lg" asChild>
            <a href="mailto:anhquan200304@gmail.com">
              <Mail className="h-5 w-5 mr-2" />
              Send me an email
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
