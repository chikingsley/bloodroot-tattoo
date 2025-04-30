"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { motion } from "framer-motion";

// Sample tattoo style data - in a real app, this would come from a database
const tattooStyles = {
  "Traditional": [
    "/images/tattoo-traditional-1.jpg",
    "/images/tattoo-traditional-2.jpg",
    "/images/tattoo-traditional-3.jpg",
    "/images/tattoo-traditional-4.jpg",
  ],
  "Neo-Traditional": [
    "/images/tattoo-neo-1.jpg",
    "/images/tattoo-neo-2.jpg",
    "/images/tattoo-neo-3.jpg",
    "/images/tattoo-neo-4.jpg",
  ],
  "Black & Grey": [
    "/images/tattoo-blackgrey-1.jpg",
    "/images/tattoo-blackgrey-2.jpg",
    "/images/tattoo-blackgrey-3.jpg",
    "/images/tattoo-blackgrey-4.jpg",
  ],
  "Fine Line": [
    "/images/tattoo-fineline-1.jpg",
    "/images/tattoo-fineline-2.jpg",
    "/images/tattoo-fineline-3.jpg",
    "/images/tattoo-fineline-4.jpg",
  ],
  "Watercolor": [
    "/images/tattoo-watercolor-1.jpg",
    "/images/tattoo-watercolor-2.jpg",
    "/images/tattoo-watercolor-3.jpg",
    "/images/tattoo-watercolor-4.jpg",
  ]
};

// Fallback images from Unsplash for development
const fallbackImages = [
  "https://images.unsplash.com/photo-1542727365-19732a80dcfd?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543059080-f9b1272213d5?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611501275019-9db9e8bb2b31?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590246814883-351321d40c2d?q=80&w=500&auto=format&fit=crop"
];

// Descriptions for each tattoo style
const styleDescriptions = {
  "Traditional": "Bold lines, vibrant colors, and iconic imagery define the American Traditional style, with designs that stand the test of time.",
  "Neo-Traditional": "Building on traditional foundations with a modern twist, featuring more detailed illustrations and an expanded color palette.",
  "Black & Grey": "Stunning monochromatic pieces with depth and dimension created through various shades of black and grey ink.",
  "Fine Line": "Delicate, precise linework creating intricate designs with a minimalist approach and incredible attention to detail.",
  "Watercolor": "Fluid, painterly designs that mimic watercolor paintings with soft color blends and minimal outlines."
};

export function ArtistTimeline({ artistName }: { artistName: string }) {
  // Create timeline data from tattoo styles
  const timelineData = Object.entries(tattooStyles).map(([style, images]) => ({
    title: style,
    content: (
      <div>
        <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
          {styleDescriptions[style as keyof typeof styleDescriptions] || 
           `${artistName}'s unique take on the ${style} tattoo style showcases their artistic versatility.`}
        </p>
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <Image
                src={fallbackImages[index % fallbackImages.length]} // Use fallback images for now
                alt={`${style} tattoo example ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    ),
  }));

  // Add a special "Explosion" section at the end
  const finalData = [
    ...timelineData,
    {
      title: "Custom Work",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Beyond established styles, {artistName} creates completely custom, one-of-a-kind designs tailored to your vision.
          </p>
          
          <div className="relative h-60 md:h-80 w-full flex items-center justify-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                duration: 0.8,
                delay: 0.2
              }}
              className="absolute"
            >
              <div className="relative w-40 h-40 md:w-60 md:h-60 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-white text-xl md:text-3xl font-bold">Book Now</span>
              </div>
            </motion.div>
            
            {/* Animated circles/balloons */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-${4 + i * 2} h-${4 + i * 2} rounded-full bg-gradient-to-br ${
                  i % 3 === 0 ? 'from-purple-500 to-blue-500' : 
                  i % 3 === 1 ? 'from-pink-500 to-red-500' : 
                  'from-blue-500 to-teal-500'
                }`}
                initial={{ 
                  x: 0, 
                  y: 0, 
                  opacity: 0,
                  scale: 0.5
                }}
                whileInView={{ 
                  x: (i % 2 === 0 ? 1 : -1) * (20 + i * 15), 
                  y: -1 * (20 + i * 10),
                  opacity: 0.8,
                  scale: 1
                }}
                transition={{ 
                  duration: 1.5,
                  delay: 0.1 * i,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </div>
      ),
    }
  ];

  return <Timeline data={finalData} />;
}
