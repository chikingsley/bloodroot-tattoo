import React, { useRef, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'; // Unused
import BloodrootLogo from '../components/logo/bloodroot-logo';
import { Button } from '../components/ui/button';
import { ArrowDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ArtistGrid } from '../components/home/ArtistGrid';
import { useHeaderVisibility } from '@/hooks/useHeaderVisibility'; // Updated import path

const HomePage: React.FC = () => {
  const { setIsHeaderVisible } = useHeaderVisibility(); // Get setter from context
  const [isButtonSectionVisible, setIsButtonSectionVisible] = useState(true); // Local state for buttons
  
  const arrowWrapperRef1 = useRef<HTMLDivElement>(null);
  const arrowWrapperRef2 = useRef<HTMLDivElement>(null);
  const logoTriggerRef = useRef<HTMLDivElement>(null); // Ref for the logo container

  // GSAP Animation for Arrows
  useEffect(() => {
    if (arrowWrapperRef1.current && arrowWrapperRef2.current) {
      gsap.to([arrowWrapperRef1.current, arrowWrapperRef2.current], {
        y: -8, duration: 0.6, ease: "power1.inOut", repeat: -1, yoyo: true, stagger: 0.1,
      });
    }
  }, []);

  // Intersection Observer for Header/Button visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when 25% of the logo is *covered* (i.e., less than 75% is visible)
        const shouldHeaderBeVisible = entry.intersectionRatio < 0.75 && !entry.isIntersecting;
        setIsHeaderVisible(shouldHeaderBeVisible);
        setIsButtonSectionVisible(!shouldHeaderBeVisible); // Buttons hidden when header is visible
      },
      {
        root: null, // relative to document viewport 
        rootMargin: '0px',
        threshold: 0.75, // Trigger callback when visibility crosses 75%
      }
    );

    const currentLogoTrigger = logoTriggerRef.current;
    if (currentLogoTrigger) {
      observer.observe(currentLogoTrigger);
    }

    // Cleanup observer on component unmount
    return () => {
      if (currentLogoTrigger) {
        observer.unobserve(currentLogoTrigger);
      }
    };
  }, [setIsHeaderVisible]); // Rerun if context setter changes (though unlikely)

  return (
    <>
      {/* Hero Section */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center',
          minHeight: '100vh',
          padding: '2rem',
          boxSizing: 'border-box'
        }}
      >
        {/* Logo Area - This is the trigger element */}
        <div 
          ref={logoTriggerRef} // Attach ref here
          style={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            // minHeight: '50vh' // Ensure it has some height to observe
          }}
        >
          <BloodrootLogo 
            fillColor="white" 
            style={{
              width: '90%',
              maxWidth: '600px',
              height: 'auto'
            }}
          />
        </div>

        {/* Button Area - Controlled by local state */}
        <div 
           style={{
            paddingBottom: '6rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            position: 'relative',
            zIndex: 20,
            opacity: isButtonSectionVisible ? 1 : 0, // Control opacity
            visibility: isButtonSectionVisible ? 'visible' : 'hidden', // Control visibility
            transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out' // Smooth transition
          }}
        >
          <div ref={arrowWrapperRef1}>
            <ArrowDown style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
          </div>
          
          <a 
            href="#artists-section" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('artists-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Button
              style={{
                borderRadius: '9999px',
                fontSize: '0.875rem',
                padding: '0.75rem 1.5rem'
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

      {/* Artists Section */} 
      <ArtistGrid /> 
    </>
  );
};

export default HomePage; 