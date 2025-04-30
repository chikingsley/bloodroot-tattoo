import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Artist } from '@/data/artists'; // Import the Artist type

interface ArtistCardProps {
  artist: Artist;
}

export function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md dark:hover:shadow-primary/5 group bg-card/80 backdrop-blur-sm p-0">
        <Link href={`/artist/${artist.slug}`} legacyBehavior passHref>
          <a className="block relative w-full aspect-square overflow-hidden rounded-t-lg">
            <Image
              src={artist.image}
              alt={`Tattoo artist ${artist.name}`}
              fill
              className="object-cover transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </a>
        </Link>
      <CardContent className="p-4 sm:p-5">
        <Link href={`/artist/${artist.slug}`} legacyBehavior passHref>
          <a className="block group-hover:opacity-90 transition-opacity">
            <CardTitle className="text-lg sm:text-xl mb-2 hover:text-primary transition-colors">{artist.name}</CardTitle>
          </a>
        </Link>
        <div className="flex flex-wrap gap-1 mb-3">
          {artist.specialties.slice(0, 3).map((specialty) => (
            <Badge key={specialty} variant="secondary" className="text-xs">
              {specialty}
            </Badge>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-2">{artist.bio}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 sm:p-5 sm:pt-0">
        <Link href={`/artist/${artist.slug}`} legacyBehavior passHref>
          <Button variant="outline" className="w-full text-sm">View Profile</Button>
        </Link>
      </CardFooter>
    </Card>
  );
} 