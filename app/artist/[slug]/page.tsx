import { artists } from "@/data/artists";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArtistTimeline } from "@/components/artists/ArtistTimeline";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Instagram } from "lucide-react";

// Define proper params type
type Props = {
  params: {
    slug: string;
  };
};

export default async function ArtistPage({ params }: Props) {
  // Await params to comply with Next.js dynamic params usage
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);

  // If artist not found, show 404
  if (!artist) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Artist Header Section */}
      <div className="relative w-full h-[50vh] min-h-[400px] bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 to-zinc-900 z-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-zinc-900 to-blue-900/20 opacity-60" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <Link href="/?scrollToArtists=true" className="mb-6">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Artists
            </Button>
          </Link>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-zinc-800 shadow-xl">
              <Image 
                src={artist.image} 
                alt={artist.name}
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{artist.name}</h1>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {artist.specialties.map((specialty, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              
              <p className="text-zinc-300 max-w-2xl mb-6">{artist.bio}</p>
              
              <a 
                href={artist.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <Instagram className="h-5 w-5" />
                <span>Book on Instagram</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Artist Portfolio Timeline */}
      <ArtistTimeline artistName={artist.name} />
    </div>
  );
}
