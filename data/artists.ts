// data/artists.ts

// Define the structure for an artist
export interface Artist {
  name: string;
  slug: string; // URL-friendly identifier (e.g., "kelechi-ohaya")
  image: string; // Path to the image in /public
  specialties: string[];
  bio: string; // A short bio for the main grid, maybe a longer one for the profile
  instagram: string; // Full URL
  // Add portfolio images later if needed for individual pages
  // portfolio: string[];
}

// Define the list of artists
export const artists: Artist[] = [
  {
    name: "Kelechi Ohaya",
    slug: "kelechi-ohaya",
    image: "/images/artist-1-kelechi.webp",
    specialties: ["Illustrative", "Black & Grey", "Fine Line"],
    bio: "Kelechi brings unique visions to life with intricate illustrative and fine line work.",
    instagram: "https://www.instagram.com/kelech/",
  },
  {
    name: "Alex Greene",
    slug: "alex-greene",
    image: "/images/artist-2-alex.webp",
    specialties: ["Neo-Traditional", "Color Realism", "Botanical"],
    bio: "Alex specializes in vibrant color realism and neo-traditional designs, often inspired by nature.",
    instagram: "https://www.instagram.com/greenewitchtattoo/",
  },
  {
    name: "Jameson Quinn",
    slug: "jameson-quinn",
    image: "/images/artist-3-jameson.webp",
    specialties: ["American Traditional", "Blackwork", "Japanese Inspired"],
    bio: "Jameson offers bold American Traditional and striking blackwork tattoos.",
    instagram: "https://www.instagram.com/inkbyjameson/",
  },
  // Add more artists here if needed
]; 