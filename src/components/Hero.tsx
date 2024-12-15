import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-12 text-center">
          <div className="flex flex-col-reverse md:flex-col items-center gap-8">
            {/* Mobile Image */}
            <div className="md:hidden mb-4 transition-transform hover:scale-105 duration-300">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur-md opacity-75"></div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJKtYEnIGAxdc7wrAd7IYC6uG_G8DkT1PLW7b8koPd6tjG4JQIp1VT3o&s=10"
                  alt="Kibenki Mobile App"
                  width={300}
                  height={300}
                  className="relative rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Every Day is{" "}
                <span className="relative">
                  <span className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-lg opacity-30"></span>
                  <span className="relative bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Pay Day!
                  </span>
                </span>
              </h1>
            </div>
          </div>

          {/* Subtitle */}
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Access your earned salary, today. Get paid today, with early access
            to your earned salary — directly to your mobile money account.
          </p>

          {/* CTA Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="transform transition-all duration-300 hover:scale-105">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a
                  href="https://wa.me/255785261625"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now →
                </a>
              </Button>
            </div>

            {/* Desktop Image */}
            <div className="hidden md:block transform transition-all duration-300 hover:scale-105">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur-md opacity-75"></div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJKtYEnIGAxdc7wrAd7IYC6uG_G8DkT1PLW7b8koPd6tjG4JQIp1VT3o&s=10"
                  alt="Kibenki Mobile App"
                  width={400}
                  height={400}
                  className="relative rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* About Section */}
          <section id="about" className="mt-16 max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-b from-background to-background/50 shadow-lg border border-gray-200/20">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              What is{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Kibenki
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kibenki is a revolutionary platform that allows employees to get
              immediate access to their earned wages, whenever they need it. No
              more waiting until the end of the month — your salary is now
              available on your schedule.
            </p>
          </section>
        </div>
      </div>

      {/* Background Pattern */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        aria-hidden="true"
      />
    </section>
  );
}
