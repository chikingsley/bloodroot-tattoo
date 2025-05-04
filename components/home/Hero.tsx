'use client'

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import React, { useEffect, useRef } from "react";
import BloodrootLogo from "../logo/bloodroot-logo";
import Link from "next/link";
import { gsap } from "gsap";

const Hero = () => {
  const arrowWrapperRef1 = useRef<HTMLDivElement>(null);
  const arrowWrapperRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (arrowWrapperRef1.current && arrowWrapperRef2.current) {
      gsap.to([arrowWrapperRef1.current, arrowWrapperRef2.current], {
        y: -8,
        duration: 0.6,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
      });
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen py-4 px-5 sm:px-8 md:px-10 flex flex-col">
      {/* Center logo section */}
      <div className="flex items-center justify-center flex-grow">
        <div id="hero-logo-trigger" className="w-full max-w-3xl text-center">
          <BloodrootLogo 
            fillColor="white" 
            width="100%" 
            height="auto"
            className="w-[90%] sm:w-[80%] md:w-[70%] max-w-[600px] mx-auto"
          />
        </div>
      </div>
      
      {/* Fixed bottom section */}
      <div className="w-full flex justify-center pb-8 mt-auto mb-10 sm:mb-16">
        <div className="flex items-center gap-4">
          <div ref={arrowWrapperRef1}>
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          
          <Link href="/#artists-section" legacyBehavior passHref>
            <Button
              size="lg"
              className="rounded-full text-xs sm:text-sm px-6"
            >
              Meet the Artists 
            </Button>
          </Link>
          
          <div ref={arrowWrapperRef2}>
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
