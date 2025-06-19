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
  bio: string; // A short bio for the main grid, maybe a longer one for the profile
  instagram: string; // Full URL
  portfolio: MediaItem[]; // Portfolio media items
  bookingLink?: string;
  email?: string;
}

// Define the list of artists
export const artists: Artist[] = [
  {
    name: "Kelechi",
    slug: "kelechi",
    image: "/profile-photos/artist-1-kelechi.webp",
    bio: "Interested in black and grey and color tattoos. Styles: illustrative, realism, surrealism, sacred geometry, nature, & push board Pop culture related",
    instagram: "https://www.instagram.com/kelech/",
    portfolio: [
      // Kelechi's portfolio will be added here
      // Currently no media files available in organized structure
    ],
  },
  {
    name: "Alex",
    slug: "alex",
    image: "/profile-photos/artist-2-alex.webp",
    bio: "Interested in black and grey fine line, botanical, neo traditional, realism",
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
    name: "Jameson",
    slug: "jameson",
    image: "/profile-photos/artist-3-jameson.webp",
    bio: "Jameson offers bold American-Traditional and striking blackwork tattoos. Nature tattoos (birds, bugs, reptiles & amphibians, flora & fauna), black and gray",
    instagram: "https://www.instagram.com/inkbyjameson/",
    bookingLink: "https://forms.gle/tVswQkUybfLgfyj79",
    email: "catbyjameson@gmail.com",
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