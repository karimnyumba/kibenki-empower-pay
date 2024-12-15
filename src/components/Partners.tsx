import { Section } from "./Section";

export function TrustedSupporters() {
  const supporters = [
    {
      name: "TSA",
      logo: "/tsa.jpg",
      url: "https://tsa.co.tz"
    },
    {
      name: "Funguo",
      logo: "/Funguo_Logo-1.svg", 
      url: "https://funguo.org"
    },
    {
      name: "Starthub Africa",
      logo: "/starthub.png",
      url: "https://starthubafrica.org"
    },
    {
      name: "Uboo Nord",
      logo: "/aba.png",
      url: "https://www.uboonord.com"
    }
  ];

  return (
    <Section id="trusted-supporters"  className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text ">
          Trusted & Supported by
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {supporters.map((supporter) => (
            <a
              key={supporter.name}
              href={supporter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out transform hover:scale-105"
              title={supporter.name}
            >
              <img
                src={supporter.logo}
                alt={`${supporter.name} Logo`}
                width={150}
                height={75}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}