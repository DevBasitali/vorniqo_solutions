"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ArtShowcaseCardProps {
  image: string;
  title?: string;
  index?: number;
}

export default function ArtShowcaseCard({
  image,
  title,
  index = 0,
}: ArtShowcaseCardProps) {
  return (
    <motion.div
      className="relative"
      initial={{ y: 0, rotate: 0 }}
      animate={{ 
        y: [-8, 8, -8],        
        rotate: [-1, 1, -1],   
      }}
      transition={{ 
        duration: 5,           
        repeat: Infinity,      
        delay: index * 0.3,    
        ease: "easeInOut",     
      }}
    >
      <Image
        src={image}
        alt={title || "Showcase Image"}
        width={350}
        height={500}
        className="object-center object-cover w-full xs:w-[350px] rounded-xl"
        loading="lazy"
      />
       <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 rounded-xl" />
    </motion.div>
  );
}