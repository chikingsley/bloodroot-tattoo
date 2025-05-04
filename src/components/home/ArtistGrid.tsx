import { artists } from "@/data/artists";
import { ArtistCard } from "@/components/artists/ArtistCard";

export function ArtistGrid() {
  return (
    <section 
      id="artists-section"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-zinc-900/90 backdrop-blur-sm rounded-t-[40px] shadow-2xl -mt-10 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-10 sm:mb-12 md:mb-16 text-zinc-100">
          Meet Our Artists
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {artists.map((artist) => (
            <ArtistCard key={artist.slug} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  );
} 