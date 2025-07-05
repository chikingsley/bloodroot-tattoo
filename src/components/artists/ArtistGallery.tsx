import { useState, useEffect } from "react";

interface MediaItem {
  src: string;
  type: 'image' | 'video';
}

export function ArtistGallery({ artistName }: { artistName: string }) {
  const [showAllMedia, setShowAllMedia] = useState(false);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll simulate fetching the media list
    const loadMedia = async () => {
      setLoading(true);
      
      // Get artist slug from name
      const artistSlug = artistName.toLowerCase();
      
      // For demonstration, we'll hardcode the media counts
      // In production, this would come from an API or be generated at build time
      const mediaCounts: Record<string, { images: number; videos: number }> = {
        'kelechi': { images: 21, videos: 4 },
        'alex': { images: 5, videos: 2 },
        'jameson': { images: 20, videos: 0 }
      };
      
      const counts = mediaCounts[artistSlug] || { images: 0, videos: 0 };
      const items: MediaItem[] = [];
      
      // Add images
      for (let i = 1; i <= counts.images; i++) {
        items.push({
          src: `/artists/${artistSlug}/portfolio/tattoo-${String(i).padStart(3, '0')}.jpg`,
          type: 'image'
        });
      }
      
      // Add videos
      for (let i = 1; i <= counts.videos; i++) {
        items.push({
          src: `/artists/${artistSlug}/portfolio/video-${String(i).padStart(3, '0')}.mp4`,
          type: 'video'
        });
      }
      
      setMediaItems(items);
      setLoading(false);
    };
    
    loadMedia();
  }, [artistName]);

  const displayedMedia = showAllMedia ? mediaItems : mediaItems.slice(0, 6);

  if (loading) {
    return (
      <div className="w-full bg-zinc-900 dark:bg-neutral-950 font-sans md:px-10 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg aspect-square bg-zinc-800 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-zinc-900 dark:bg-neutral-950 font-sans md:px-10 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {displayedMedia.map((media, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg aspect-square shadow-md hover:shadow-lg transition-shadow duration-300">
              {media.type === 'video' ? (
                <div className="relative h-full w-full bg-black flex items-center justify-center">
                  <video 
                    className="h-full w-full object-contain"
                    controls
                    preload="metadata"
                  >
                    <source src={media.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-10 w-10 text-white" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative h-full w-full bg-zinc-800">
                  <img 
                    src={media.src}
                    alt={`${artistName}'s tattoo work`}
                    className="object-cover h-full w-full transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      // Hide broken images
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {mediaItems.length > 6 && !showAllMedia && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAllMedia(true)}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
            >
              <span>Show More</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="ml-2 transition-transform duration-300 group-hover:translate-y-1"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}