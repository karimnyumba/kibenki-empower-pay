import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "w-full py-16 md:py-24 lg:py-32 animate-fade-in",
        className
      )}
      {...props}
    >
      <div className="container px-4 md:px-6">{children}</div>
    </section>
  );
}