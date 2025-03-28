import { artists } from "@/data/artists";
import { ArtistCard } from "@/components/artists/ArtistCard";

export function ArtistGrid() {
  return (
    <section id="artists" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-8 sm:mb-10 md:mb-14">
          Meet Our Artists
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {artists.map((artist) => (
            <ArtistCard key={artist.slug} artist={artist} />
          ))}
        </div>
      </div>
      {/* Optional: Add a button to view all artists if the list grows */}
      {/* <div className="text-center mt-12">
        <Button>View All Artists</Button> 
      </div> */}
    </section>
  );
} 