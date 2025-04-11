import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import React from "react";
import BloodrootLogo from "../logo/bloodroot-logo";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center px-3 sm:px-6">
      <div className="flex items-center justify-center w-full">
        <div className="text-center w-full max-w-3xl">
          <div className="flex justify-center py-4 sm:py-6">
            <BloodrootLogo 
              fillColor="white" 
              width="100%" 
              height="auto"
              className="w-[90%] sm:w-[80%] md:w-[70%] max-w-[600px]"
            />
          </div>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground px-1 sm:px-4">
            Your tattoo artwork should be as unique as you are. At Bloodroot Tattoo Collective,
            our talented artists bring your vision to life with exceptional skill and creativity.
            From bold traditional designs to intricate fine line work, we create custom art
            that becomes a permanent part of your story.
          </p>
          <div className="mt-6 sm:mt-8 md:mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
            <Link href="/#artists" legacyBehavior passHref>
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full text-sm sm:text-base"
              >
                Meet the Artists <ArrowDown className="!h-4 !w-4 sm:!h-5 sm:!w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
