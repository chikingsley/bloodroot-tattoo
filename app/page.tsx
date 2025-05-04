import Hero from "@/components/home/Hero";
import { ArtistGrid } from "@/components/home/ArtistGrid";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div id="artists-section">
        <ArtistGrid />
        {/* Other home page sections will go here */}
      </div>
    </>
  );
}
