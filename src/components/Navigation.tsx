import { Logo } from "./Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const navigationItems = [
    { title: "What is Kibenki", href: "#" },
    { title: "How it Works", href: "#how-it-works" },
    { title: "Why Kibenki", href: "#why-choose-kibenki" },
    { title: "Our trusted supporters", href: "#trusted-supporters" },
    { title: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of the fixed header plus some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const MobileMenu = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]">
        <nav className="flex flex-col gap-4">
          {navigationItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-lg font-medium transition-colors hover:text-primary"
            >
              {item.title}
            </a>
          ))}
          <Button asChild className="w-full">
            <a href="https://wa.me/255785261625">Apply Now</a>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );

  const DesktopMenu = () => (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              {item.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4">
      <div className="flex items-center justify-center "> <div><Logo /></div> <div className="mt-2 font-bold">Kibenki</div></div>
        <div className="flex items-center gap-4">
          <DesktopMenu />
          <Button asChild className="hidden md:inline-flex">
            <a href="https://wa.me/255785261625">Apply Now</a>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}