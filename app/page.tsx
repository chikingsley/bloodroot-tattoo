import Hero from "@/components/home/Hero";
import { ArtistGrid } from "@/components/home/ArtistGrid";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Hero />
      </div>
      <div className="relative z-10 mt-[100vh]">
        <ArtistGrid />
        {/* Other home page sections will go here */}
      </div>
    </div>
  );
}
