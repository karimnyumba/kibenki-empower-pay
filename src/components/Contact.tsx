import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" className="bg-accent">
      <div className="grid gap-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contact Us
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            We're here to help. Whether you're an employee with questions or an
            employer needing technical support, don't hesitate to reach out.
          </p>
        </div>
        <div className="mx-auto grid max-w-sm gap-8">
          <a
            href="tel:+255624507602"
            className="flex items-center gap-4 rounded-lg bg-background p-4 shadow transition-all hover:shadow-lg"
          >
            <Phone className="h-6 w-6 text-primary" />
            <span>+255 624 507 602</span>
          </a>
          <a
            href="mailto:support@kibenki.com"
            className="flex items-center gap-4 rounded-lg bg-background p-4 shadow transition-all hover:shadow-lg"
          >
            <Mail className="h-6 w-6 text-primary" />
            <span>support@kibenki.com</span>
          </a>
          <Button
            asChild
            size="lg"
            className="w-full rounded-full bg-primary text-white hover:bg-primary/90"
          >
            <a
              href="https://wa.me/255785261625"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}