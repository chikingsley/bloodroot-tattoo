import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

export function Navigation() {
  // Navigation links array for easy updates
  const links = [
    { href: "/", label: "Home" },
    { href: "/#artists-section", label: "Artists" },
    { href: "https://link.inkedin.tools/widget/form/i9sPtInFOwsmfuBzlDfl", label: "Consent Form", external: true },
  ];

  return (
    <div className="flex items-center">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        {links.map((link) => {
          if (link.external) {
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            );
          }
          // Handle hash links specifically for smooth scrolling
          if (link.href.startsWith('/#')) {
            const targetId = link.href.substring(2);
            const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            };
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleClick}
                className="text-sm font-medium text-zinc-300 transition-colors hover:text-white cursor-pointer"
              >
                {link.label}
              </a>
            );
          }
          // Regular internal links
          return (
            <Link 
              key={link.href} 
              to={link.href}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          );
        })}
        {/* Contact link */}
        <a 
          href="/#contact" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="ml-2"
        >
          <Button size="sm">Book Appointment</Button>
        </a>
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
          <PopoverContent className="w-56 p-3 bg-zinc-900 border-zinc-800" align="end">
            <nav className="flex flex-col space-y-2">
              {links.map((link) => {
                if (link.external) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium py-2 px-3 rounded-md transition-colors text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    >
                      {link.label}
                    </a>
                  );
                }
                if (link.href.startsWith('/#')) {
                  const targetId = link.href.substring(2);
                  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                    // Optionally close popover here
                  };
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleClick}
                      className="text-sm font-medium py-2 px-3 rounded-md transition-colors text-zinc-300 hover:bg-zinc-800 hover:text-white cursor-pointer"
                    >
                      {link.label}
                    </a>
                  );
                }
                return (
                  <Link 
                    key={link.href} 
                    to={link.href}
                    className="text-sm font-medium py-2 px-3 rounded-md transition-colors text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-zinc-800">
                <a 
                  href="/#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    // Optionally close popover here
                  }}
                  className="w-full"
                >
                  <Button className="w-full mb-2">Book Appointment</Button>
                </a>
              </div>
            </nav>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
} 