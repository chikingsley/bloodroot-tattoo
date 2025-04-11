import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import React from "react";
import BloodrootLogo from "../logo/bloodroot-logo";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center px-6">
      <div className="md:mt-6 flex items-center justify-center">
        <div className="text-center max-w-3xl">
          <div className="mt-6 flex justify-center py-6">
            <BloodrootLogo fillColor="white" width={600} />
          </div>
          <p className="mt-6 max-w-[70ch] xs:text-lg text-muted-foreground">
            Your tattoo artwork should be as unique as you are. At Bloodroot Tattoo Collective,
            our talented artists bring your vision to life with exceptional skill and creativity.
            From bold traditional designs to intricate fine line work, we create custom art
            that becomes a permanent part of your story.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
            <Link href="/#artists" legacyBehavior passHref>
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full text-base"
              >
                Meet the Artists <ArrowDown className="!h-5 !w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
