import { Benefits } from "@/components/Benefits";
import { Contact } from "@/components/Contact";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Logo />
        </div>
      </header>
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