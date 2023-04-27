import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
  src: string;
  name: string;
};

function Skill({ directionLeft, src, name }: Props) {
  return (
    <div className="card-zoom group relative flex cursor-pointer md items-center justify-center m-0 overflow-hidden w-full h-full rounded-2xl">
      <motion.img
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
        src={src}
        
        className="card-zoom-image rounded-full border border-[transparent] object-cover w-16 h-16 md:h-20 md:w-20 xl:w-20
         xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
        
      />
      <div className="card-zoom-image absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:h-20 md:w-20 xl:w-20 xl:h-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <h3 className="skillText card-zoom-text">{name}</h3>
        </div>
      </div>
    </div>
  );
}

export default Skill;
