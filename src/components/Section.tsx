import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
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