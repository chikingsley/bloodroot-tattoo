import Link from 'next/link';

export function Footer() {
    // TODO: Replace with actual address and hours if different
  const address = "123 Tattoo St, Morgantown, WV 26505"; // Example
  const hours = "Tue - Sat: 11 AM - 7 PM | Sun - Mon: Closed"; // Example
  const phone = "304-555-1234"; // Example
  const email = "info@bloodroottattoo.com"; // Example
  const studioInstagram = "https://www.instagram.com/bloodroottattoocollective/"; // Official IG

  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm py-12 md:py-16 mt-8 md:mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 text-sm mb-10">
          {/* Location */}
          <div>
            <h3 className="font-semibold text-foreground text-lg mb-3 md:mb-4">Location</h3>
            <p className="mb-2">{address}</p>
             <p className="mb-2">
               {/* Link to Google Maps */}
               <a
                 href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-primary hover:text-primary/80 transition-colors"
               >
                 Get Directions
               </a>
             </p>
          </div>

          {/* Hours & Contact */}
          <div>
            <h3 className="font-semibold text-foreground text-lg mb-3 md:mb-4">Hours & Contact</h3>
            <p className="mb-2">{hours}</p>
            <p className="mb-2">Phone: <a href={`tel:${phone}`} className="text-primary hover:text-primary/80 transition-colors">{phone}</a></p>
            <p className="mb-2">Email: <a href={`mailto:${email}`} className="text-primary hover:text-primary/80 transition-colors">{email}</a></p>
             {/* Optional: Link to booking/contact page or section */}
             <p className="mt-4">
               <Link href="/#contact" className="font-medium text-primary hover:text-primary/80 transition-colors">
                  Request an Appointment
               </Link>
             </p>
          </div>

          {/* Social & Legal */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-semibold text-foreground text-lg mb-3 md:mb-4">Follow Us</h3>
            <div className="flex space-x-6 mb-4">
              <a
                href={studioInstagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bloodroot Tattoo Collective on Instagram"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                    src="/instagram.svg"
                    alt="Instagram"
                    className="h-6 w-6 dark:invert"
                />
              </a>
              {/* Add other social links here if needed */}
            </div>
            <div className="mt-4 space-y-2">
              {/* Add links for Privacy Policy, Terms, Accessibility later if needed */}
               {/* <Link href="/privacy-policy" className="block hover:text-primary transition-colors">Privacy Policy</Link> */}
               {/* <Link href="/terms-of-service" className="block hover:text-primary transition-colors">Terms of Service</Link> */}
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Bloodroot Tattoo Collective. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 