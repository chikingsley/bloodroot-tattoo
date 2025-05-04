import React, { useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Unused
import BloodrootLogo from '../components/logo/bloodroot-logo';
import { Button } from '../components/ui/button'; // Assuming button exists
import { ArrowDown } from 'lucide-react'; // Assuming lucide-react is installed
import { gsap } from 'gsap';
import { ArtistGrid } from '../components/home/ArtistGrid'; // Import ArtistGrid

const HomePage: React.FC = () => {
  const arrowWrapperRef1 = useRef<HTMLDivElement>(null);
  const arrowWrapperRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animation for arrows
    if (arrowWrapperRef1.current && arrowWrapperRef2.current) {
      gsap.to([arrowWrapperRef1.current, arrowWrapperRef2.current], {
        y: -8, // Move up 8px
        duration: 0.6,
        ease: "power1.inOut",
        repeat: -1, // Repeat indefinitely
        yoyo: true, // Animate back and forth
        stagger: 0.1, // Slight delay between arrows
      });
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column', // Stack logo and button vertically
          justifyContent: 'center', // Center logo vertically initially
          alignItems: 'center',
          minHeight: '100vh', // Use full viewport height
          padding: '2rem',
          boxSizing: 'border-box'
        }}
      >
        {/* Logo Section */} 
        <div 
          style={{
            flexGrow: 1, // Allow logo section to take up available space
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <BloodrootLogo 
            fillColor="white" 
            style={{
              width: '90%', // Responsive width
              maxWidth: '600px', // Max size
              height: 'auto'
            }}
          />
        </div>

        {/* Button Section */} 
        <div 
          style={{
            paddingBottom: '6rem', // Increased padding to account for overlapping ArtistGrid
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            position: 'relative', // Needed for z-index
            zIndex: 20 // Ensure button is above the ArtistGrid overlap
          }}
        >
          <div ref={arrowWrapperRef1}>
            <ArrowDown style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
          </div>
          
          {/* Use regular anchor for hash link scrolling */}
          <a 
            href="#artists-section" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('artists-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Button
              // size="lg" // Assuming Button component takes size prop
              // className="rounded-full text-xs sm:text-sm px-6" // Use inline styles or Tailwind if configured
              style={{
                borderRadius: '9999px',
                fontSize: '0.875rem', // sm text size
                padding: '0.75rem 1.5rem' // Corresponds to px-6 py-3 roughly
              }}
            >
              Meet the Artists 
            </Button>
          </a>
          
          <div ref={arrowWrapperRef2}>
            <ArrowDown style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
          </div>
        </div>
      </div>

      {/* Artists Section - ArtistGrid handles its own container/ID */}
      <ArtistGrid /> 
    </>
  );
};

export default HomePage; 