// import { Link } from 'react-router-dom'; // No longer needed

export function Footer() {
    // TODO: Replace with actual address and hours if different
  const addressLine1 = "1315 Airport Blvd. Building 2";
  const addressLine2 = "Morgantown, WV 26505";
  const hours = "Tue - Sat: 11 AM - 7 PM | Sun - Mon: Closed"; 
  const phone = "304-555-1234"; 
  const email = "info@bloodroottattoo.com"; 
  const studioInstagram = "https://www.instagram.com/bloodroottattoocollective/"; // Official IG

  // Helper for smooth scroll
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-900/80 backdrop-blur-sm py-12 md:py-16 mt-8 md:mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 text-sm mb-10 text-zinc-300">
          {/* Location */}
          <div>
            <h3 className="font-semibold text-zinc-100 text-lg mb-3 md:mb-4">Location</h3>
            <p className="mb-2">{addressLine1}</p>
            <p className="mb-2">{addressLine2}</p>
             <p className="mb-2">
               {/* Link to Google Maps */}
               <a
                 href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${addressLine1} ${addressLine2}`)}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-purple-400 hover:text-purple-300 transition-colors"
               >
                 Get Directions
               </a>
             </p>
          </div>

          {/* Hours & Contact */}
          <div>
            <h3 className="font-semibold text-zinc-100 text-lg mb-3 md:mb-4">Hours & Contact</h3>
            <p className="mb-2">{hours}</p>
            <p className="mb-2">Phone: <a href={`tel:${phone}`} className="text-purple-400 hover:text-purple-300 transition-colors">{phone}</a></p>
            <p className="mb-2">Email: <a href={`mailto:${email}`} className="text-purple-400 hover:text-purple-300 transition-colors">{email}</a></p>
             {/* Optional: Link to booking/contact page or section */}
             <p className="mt-4">
               <a 
                 href="/#contact" 
                 onClick={(e) => smoothScroll(e, 'contact')}
                 className="font-medium text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
               >
                  Request an Appointment
               </a>
             </p>
          </div>

          {/* Social & Legal */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-semibold text-zinc-100 text-lg mb-3 md:mb-4">Follow Us</h3>
            <div className="flex space-x-6 mb-4">
              <a
                href={studioInstagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bloodroot Tattoo Collective on Instagram"
                className="hover:opacity-80 transition-opacity"
              >
                {/* Using standard img tag, assuming /instagram.svg is in public folder */}
                <img
                    src="/instagram.svg"
                    alt="Instagram"
                    className="h-6 w-6 invert filter dark:invert-0"
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
        <div className="border-t border-zinc-800/50 pt-6 text-center text-xs text-zinc-400">
          © {new Date().getFullYear()} Bloodroot Tattoo Collective. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 