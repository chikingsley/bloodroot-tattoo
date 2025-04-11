import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function Navigation() {
  // Navigation links array for easy updates
  const links = [
    { href: "/", label: "Home" },
    { href: "/#artists", label: "Artists" },
    { href: "https://link.inkedin.tools/widget/form/i9sPtInFOwsmfuBzlDfl", label: "Consent Form", external: true },
  ];

  return (
    <div className="flex items-center">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        {links.map((link) => (
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ) : (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-base font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          )
        ))}
        <Link href="/#contact" legacyBehavior passHref>
          <Button size="sm" className="ml-2">Book Appointment</Button>
        </Link>
      </nav>

      {/* Mobile Navigation with Popover */}
      <div className="md:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-3" align="end">
            <nav className="flex flex-col space-y-2">
              {links.map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium py-2 px-3 rounded-md transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="text-sm font-medium py-2 px-3 rounded-md transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="pt-3 mt-2 border-t border-border">
                <Link href="/#contact" legacyBehavior passHref>
                  <Button className="w-full mb-2">Book Appointment</Button>
                </Link>
              </div>
            </nav>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
} 