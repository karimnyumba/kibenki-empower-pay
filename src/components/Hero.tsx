import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="animate-fade-in-up text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Every Day is{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pay Day!
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] animate-fade-in-up text-lg text-muted-foreground md:text-xl [animation-delay:200ms]">
            Access your earned salary, today. Get paid today, with early access to
            your earned salary — directly to your mobile money account.
          </p>
          <div className="animate-fade-in-up [animation-delay:400ms]">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary text-white hover:bg-primary/90"
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
          <div className="mt-8 animate-fade-in-up [animation-delay:600ms]">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              What is Kibenki
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
              Kibenki is a revolutionary platform that allows employees to get immediate access to their earned wages, whenever they need it. No more waiting until the end of the month — your salary is now available on your schedule.
            </p>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        aria-hidden="true"
      />
    </section>
  );
}