"use client";

import React, { useState } from "react";
import Image from "next/image";

// Alex's photos and videos from greenewitchtattoo-alex directory
const alexMedia = [
  "/greenewitchtattoo-alex/491442189_17967288176857359_5851982922737860351_n..jpg",
  "/greenewitchtattoo-alex/490921324_17967288194857359_6960696791354276941_n..jpg",
  "/greenewitchtattoo-alex/473782836_17956677182857359_7802665515808243724_n..jpg",
  "/greenewitchtattoo-alex/480771488_17960622038857359_942849471317206278_n..jpg",
  "/greenewitchtattoo-alex/480463125_17960622047857359_6731574584812778976_n..jpg",
  // Videos
  "/greenewitchtattoo-alex/AQOatIayNZ8fmt0KgvoCPeWFfkwRHqRgD8Frlny1NJgxwtJKJR4dOAKcEBAwUybGEoRfVMUvLRi4j7hlmeGJes1iH5waTwkxdaoaqZs..mp4",
  "/greenewitchtattoo-alex/AQMM1asWfgDK9VisPXWZUjiEMUNyoqDoIUFt1UQY5HXDcyM-GqrGTJQmcewr2EKh9Pk4ptG5615QFemUDvnPwASl3PHm4gTfcAtT5fw..mp4",
];

// Kelechi's photos and videos from kelech-kelechi directory
const kelechiMedia = [
  "/kelech-kelechi/424619748_3687309291556979_1276848626695262025_n..jpg",
  "/kelech-kelechi/424979691_1562739214504134_470086442395254345_n..jpg",
  "/kelech-kelechi/442421427_1180038173411072_2400359735866250490_n..jpg",
  "/kelech-kelechi/453898351_1016943826551741_7113920439882123767_n..jpg",
  "/kelech-kelechi/452547972_1560453297837619_4354846702792815712_n..jpg",
  "/kelech-kelechi/453707283_2143279446058391_1103642908522932741_n..jpg",
  "/kelech-kelechi/453738491_479043011407654_6698278784449116261_n..jpg",
  "/kelech-kelechi/453974645_1543885226546693_4187659559240183618_n..jpg",
  "/kelech-kelechi/459193912_1499680227388745_4985407448557382234_n..jpg",
  "/kelech-kelechi/459285572_1674266283305479_5179787496760874717_n..jpg",
  "/kelech-kelechi/462807541_1083328623383829_7628584059879599505_n..jpg",
  "/kelech-kelechi/463162344_969098298584308_2457100601994730046_n..jpg",
  "/kelech-kelechi/468566327_1256364225568122_8567280025168653551_n..jpg",
  "/kelech-kelechi/463150556_548183881033968_6274044262022417715_n..jpg",
  "/kelech-kelechi/472085051_1154446906388882_8281236536734587641_n..jpg",
  "/kelech-kelechi/472346116_458477853784073_4338937689208865318_n..jpg",
  "/kelech-kelechi/441006850_1916305545488358_2030130465928506928_n..jpg",
  "/kelech-kelechi/396672113_865329848530759_2862340739226046634_n..jpg",
  "/kelech-kelechi/397269801_1715981965588329_7645474389832689094_n..jpg",
  "/kelech-kelechi/396729288_295748793336533_8868832976727260930_n..jpg",
  "/kelech-kelechi/397875683_1369849106951909_8636789684774808438_n..jpg",
  // Videos
  "/kelech-kelechi/AQNmagEN4g-xDtsB3ky9eSrQc0SoDKG80lT5ee2XVh5ipzxVAkt51gl7FiSivGPEwa-MKQOzZWRuWGUXC6HFNySC_yqkO4ua_g493vI..mp4",
  "/kelech-kelechi/AQOVa4LMjTk6CbGT3BEa4p7DuTn1j63N977NtDsvnpTdL-aSENxP1MDElQKRPDsmuUQMEhkoDxaHIQWdkNFl0muT..mp4",
  "/kelech-kelechi/AQO4_4VAmdxksUdKFCMvBAASn1v5--Iannbv_qrYQPvWVtd9Y_1x2NBAjWdD6Wu2o4UWwrnbR7RBWvV4cfbOsFjx..mp4",
  "/kelech-kelechi/AQNP52T8wk7pwUCsKrzQ3wzdYbZcfM96y4Qwvvx1wniJN8WY5_fLsmgwgFAGJyJdRpZBBtnzXqoittlWGS9YlZIe..mp4",
];

// Using simpler filenames for Jameson's images
const jamesonMedia = [
  "/jameson-photos/photo-1.jpg",
  "/jameson-photos/photo-2.jpg",
  "/jameson-photos/photo-3.jpg",
  "/jameson-photos/photo-4.jpg",
  "/jameson-photos/photo-5.jpg",
  "/jameson-photos/photo-6.jpg",
  "/jameson-photos/photo-7.jpg",
  "/jameson-photos/photo-8.jpg",
  "/jameson-photos/photo-9.jpg",
  "/jameson-photos/photo-10.jpg",
  "/jameson-photos/photo-11.jpg",
  "/jameson-photos/photo-12.jpg",
  "/jameson-photos/photo-13.jpg",
  "/jameson-photos/photo-14.jpg",
  "/jameson-photos/photo-15.jpg",
  "/jameson-photos/photo-16.jpg",
  "/jameson-photos/photo-17.jpg",
  "/jameson-photos/photo-18.jpg",
  "/jameson-photos/photo-19.jpg",
  "/jameson-photos/photo-20.jpg",
];

// Use this to determine if a file is a video
const isVideo = (filename: string) => filename.toLowerCase().endsWith('.mp4');

export function ArtistTimeline({ artistName }: { artistName: string }) {
  const [showAllMedia, setShowAllMedia] = useState(false);
  
  // Determine which media array to use based on the artist name
  const getArtistMedia = () => {
    const lowerCaseName = artistName.toLowerCase();
    if (lowerCaseName.includes('alex')) {
      return alexMedia;
    } else if (lowerCaseName.includes('kelechi')) {
      return kelechiMedia;
    } else if (lowerCaseName.includes('jameson')) {
      return jamesonMedia;
    }
    // Default to Alex if no match is found
    return alexMedia;
  };
  
  const artistMedia = getArtistMedia();
  
  // Display only 6 items initially or all if showAllMedia is true
  const displayedMedia = showAllMedia ? artistMedia : artistMedia.slice(0, 6);

  return (
    <div className="w-full bg-zinc-900 dark:bg-neutral-950 font-sans md:px-10 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {displayedMedia.map((mediaPath, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg aspect-square shadow-md hover:shadow-lg transition-shadow duration-300">
              {isVideo(mediaPath) ? (
                <div className="relative h-full w-full bg-black flex items-center justify-center">
                  {/* Video element for mp4 files */}
                  <video 
                    className="h-full w-full object-contain"
                    controls
                    preload="metadata"
                  >
                    <source src={mediaPath} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Play button overlay */}
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
                  <Image
                    src={mediaPath}
                    alt={`${artistName}&apos;s tattoo work`}
                    width={500}
                    height={500}
                    className="object-cover h-full w-full transition-transform duration-300 hover:scale-105"
                    unoptimized={artistName.toLowerCase().includes('jameson')}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {artistMedia.length > 6 && !showAllMedia && (
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
