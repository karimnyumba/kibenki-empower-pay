import { Check, Clock, Wallet } from "lucide-react";
import { Section } from "./Section";

export function Features() {
  return (
    <Section className="bg-accent">
      <div className="grid gap-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Get your earned salary in three simple steps
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Request Your Earned Salary",
              description:
                "With just one message, employees can request their earned salary, anytime.",
              icon: Clock,
            },
            {
              title: "Get Approved",
              description:
                "Once the request is reviewed, approval is fast and straightforward.",
              icon: Check,
            },
            {
              title: "Receive the Money",
              description:
                "If approved, receive your earned salary directly into your mobile money account.",
              icon: Wallet,
            },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-lg bg-background p-6 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}