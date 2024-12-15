import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
            <h1 className="animate-fade-in-up text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Every Day is{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Pay Day!
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] animate-fade-in-up text-lg text-muted-foreground md:text-xl [animation-delay:200ms] lg:mx-0">
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
          </div>
          <div className="relative mx-auto max-w-[600px] animate-fade-in lg:max-w-none">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Professional using Kibenki"
              className="rounded-lg shadow-xl"
              width={600}
              height={400}
              style={{ objectFit: 'cover' }}
            />
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