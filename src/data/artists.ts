// data/artists.ts

// Define media types
export interface MediaItem {
  src: string;
  type: 'image' | 'video';
  alt: string;
  poster?: string; // For videos
}

// Define the structure for an artist
export interface Artist {
  name: string;
  slug: string; // URL-friendly identifier (e.g., "kelechi-ohaya")
  image: string; // Path to the image in /public
  specialties: string[];
  bio: string; // A short bio for the main grid, maybe a longer one for the profile
  instagram: string; // Full URL
  portfolio: MediaItem[]; // Portfolio media items
}

// Define the list of artists
export const artists: Artist[] = [
  {
    name: "Kelechi Ejimofor",
    slug: "kelechi-Ejimofor", 
    image: "/profile-photos/artist-1-kelechi.webp",
    specialties: ["Illustrative", "Black & Grey", "Fine Line"],
    bio: "Kelechi brings unique visions to life with intricate illustrative and fine line work.",
    instagram: "https://www.instagram.com/kelech/",
    portfolio: [
      // Kelechi's portfolio will be added here
      // Currently no media files available in organized structure
    ],
  },
  {
    name: "Alex Greene", 
    slug: "alex-greene",
    image: "/profile-photos/artist-2-alex.webp",
    specialties: ["Neo-Traditional", "Color Realism", "Botanical"],
    bio: "Alex specializes in vibrant color realism and neo-traditional designs, often inspired by nature.",
    instagram: "https://www.instagram.com/greenewitchtattoo/",
    portfolio: [
      {
        src: "/greenewitchtattoo-alex/alex-tattoo-001.jpg",
        type: "image",
        alt: "Alex Greene tattoo artwork - detailed illustrative piece"
      },
      {
        src: "/greenewitchtattoo-alex/alex-tattoo-002.jpg",
        type: "image", 
        alt: "Alex Greene tattoo artwork - botanical design"
      },
      {
        src: "/greenewitchtattoo-alex/alex-tattoo-003.jpg",
        type: "image",
        alt: "Alex Greene tattoo artwork - neo-traditional style"
      },
      {
        src: "/greenewitchtattoo-alex/alex-tattoo-004.jpg",
        type: "image",
        alt: "Alex Greene tattoo artwork - color realism piece"
      },
      {
        src: "/greenewitchtattoo-alex/alex-tattoo-005.jpg", 
        type: "image",
        alt: "Alex Greene tattoo artwork - nature-inspired design"
      },
      {
        src: "/greenewitchtattoo-alex/alex-video-001.mp4",
        type: "video",
        alt: "Alex Greene tattoo process video - detailed work in progress"
      },
      {
        src: "/greenewitchtattoo-alex/alex-video-002.mp4", 
        type: "video",
        alt: "Alex Greene tattoo process video - artistic technique demonstration"
      }
    ],
  },
  {
    name: "Jameson Quinn",
    slug: "jameson-quinn", 
    image: "/profile-photos/artist-3-jameson.webp",
    specialties: ["American Traditional", "Blackwork", "Japanese Inspired"],
    bio: "Jameson offers bold American Traditional and striking blackwork tattoos.",
    instagram: "https://www.instagram.com/inkbyjameson/",
    portfolio: [
      {
        src: "/jameson-photos/photo-1.jpg",
        type: "image",
        alt: "Jameson Quinn tattoo artwork - American Traditional style"
      },
      {
        src: "/jameson-photos/photo-2.jpg", 
        type: "image",
        alt: "Jameson Quinn tattoo artwork - bold blackwork design"
      },
      {
        src: "/jameson-photos/photo-3.jpg",
        type: "image", 
        alt: "Jameson Quinn tattoo artwork - Japanese-inspired piece"
      },
      {
        src: "/jameson-photos/photo-4.jpg",
        type: "image",
        alt: "Jameson Quinn tattoo artwork - traditional flash"
      },
      {
        src: "/jameson-photos/photo-5.jpg",
        type: "image",
        alt: "Jameson Quinn tattoo artwork - detailed blackwork"
      },
      {
        src: "/jameson-photos/photo-6.jpg",
        type: "image", 
        alt: "Jameson Quinn tattoo artwork - classic American Traditional"
      }
    ],
  },
  // Add more artists here if needed
]; 