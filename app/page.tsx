import { Hero } from "@/components/home/Hero";
import { ArtistGrid } from "@/components/home/ArtistGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full mx-auto">
        <ArtistGrid />
        {/* Other home page sections will go here */}
      </div>
    </>
  );
}
