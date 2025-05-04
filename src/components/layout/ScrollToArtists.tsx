"use client";

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function ScrollToArtists() {
  const [searchParams] = useSearchParams();
  const scrollToArtists = searchParams.get("scrollToArtists");

  useEffect(() => {
    if (scrollToArtists === "true") {
      const artistsSection = document.getElementById("artists-section");
      if (artistsSection) {
        // Add a small delay to ensure page is fully loaded
        setTimeout(() => {
          artistsSection.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [scrollToArtists]);

  return null; // This component doesn't render anything
} 