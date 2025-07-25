import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import type { Artist } from '@/data/artists';

interface ArtistCardProps {
  artist: Artist;
}

export function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md dark:hover:shadow-primary/5 group bg-zinc-800/80 backdrop-blur-sm p-0 border-zinc-700/50 border-[3px] border-[#00A86B] rounded-lg">
      <Link to={`/artist/${artist.slug}`}>
        <div className="block relative w-full aspect-square overflow-hidden">
          <img
            src={artist.image}
            alt={`Tattoo artist ${artist.name}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
      </Link>
      <CardContent className="p-4 sm:p-5">
        <Link to={`/artist/${artist.slug}`}>
          <div className="block group-hover:opacity-90 transition-opacity">
            <CardTitle className="text-lg sm:text-xl mb-2 hover:text-purple-400 transition-colors text-zinc-100">{artist.name}</CardTitle>
          </div>
        </Link>
        <p className="text-xs sm:text-sm text-zinc-400 mb-4">{artist.bio}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 sm:p-5 sm:pt-0">
        <Link to={`/artist/${artist.slug}`} className="w-full">
          <Button variant="outline" className="w-full text-sm border-zinc-700 hover:bg-zinc-700">
            View Profile
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
} 