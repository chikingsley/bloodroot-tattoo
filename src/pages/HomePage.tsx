import React, { useRef, useEffect } from 'react';
import BloodrootLogo from '@/components/logo/bloodroot-logo';
import { Button } from '@/components/ui/button'; 
import { ArrowDown } from 'lucide-react'; 
import { gsap } from 'gsap';
import { ArtistGrid } from '@/components/home/ArtistGrid'; 

const HomePage: React.FC = () => {
  const arrowWrapperRef1 = useRef<HTMLDivElement>(null);
  const arrowWrapperRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (arrowWrapperRef1.current && arrowWrapperRef2.current) {
      gsap.to([arrowWrapperRef1.current, arrowWrapperRef2.current], {
        y: -8,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
      });
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '2rem', boxSizing: 'border-box' }}>
        {/* Logo Section */} 
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <BloodrootLogo fillColor="white" style={{ width: '90%', maxWidth: '600px', height: 'auto' }} />
        </div>

        {/* Button Section */} 
        <div style={{ paddingBottom: '6rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 20 }}>
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
              size="lg"
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

      {/* Artists Section - ArtistGrid handles its own container/ID */}
      <ArtistGrid /> 
    </>
  );
};

export default HomePage; 