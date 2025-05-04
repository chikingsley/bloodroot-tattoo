import Hero from "@/components/home/Hero";
import { ArtistGrid } from "@/components/home/ArtistGrid";
import ScrollToArtists from "@/components/layout/ScrollToArtists";

export default function Home() {
  return (
    <>
      <ScrollToArtists />
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
