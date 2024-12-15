import { Benefits } from "@/components/Benefits";
import { Contact } from "@/components/Contact";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Features />
        <Benefits />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Index;