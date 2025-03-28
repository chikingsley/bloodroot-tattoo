import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center">
      {/* Dark overlay for text contrast over parallax bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-16">
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter">
            Bloodroot Tattoo Collective
          </h1>
          <p className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl text-muted-foreground">
            Your Premier Destination for Custom Tattoos in Morgantown, West Virginia.
            <br className="hidden md:inline" />
            Expert Artists Specializing in Diverse Styles.
          </p>
        </div>
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          {/* Link to Artist Grid section */}
          <Link href="/#artists" legacyBehavior passHref>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[180px]">Meet Our Artists</Button>
          </Link>
          {/* Link to Contact section */}
          <Link href="/#contact" legacyBehavior passHref>
            <Button variant="default" size="lg" className="w-full sm:w-auto min-w-[180px]">Book an Appointment</Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 