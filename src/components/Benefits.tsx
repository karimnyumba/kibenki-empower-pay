import { Section } from "./Section";
import { Shield, Clock, TrendingUp, Wallet } from "lucide-react";

export function Benefits() {
  return (
    <Section id="what-is-kibenki">
      <div className="grid gap-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose Kibenki?
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Experience the future of salary payments
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Immediate Access",
              description: "No need to wait until payday. Request your salary whenever you need it.",
              icon: Clock,
            },
            {
              title: "Affordable",
              description: "A low 5% fee on your advance — no hidden charges, no surprises.",
              icon: Shield,
            },
            {
              title: "Real-Time Growth",
              description: "Watch your earnings grow in real time as you work.",
              icon: TrendingUp,
            },
            {
              title: "Your Control",
              description: "Access your wages instantly, with no hidden fees or stress.",
              icon: Wallet,
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="group relative overflow-hidden rounded-lg bg-background p-6 shadow transition-all hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{benefit.title}</h3>
              <p className="mt-2 text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}