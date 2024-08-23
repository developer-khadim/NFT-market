import React, { useState } from "react";
import nft1 from '../assets/nft1.png';
import nft2 from '../assets/nft2.png';
import nft3 from '../assets/nft3.png';
import nft4 from '../assets/nft4.png';
import nft5 from '../assets/nft5.png';
import nft6 from '../assets/nft6.png';
import nft7 from '../assets/nft7.png';

const Collections = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const images = [nft5, nft3, nft2, nft1, nft4, nft6, nft7];

  return (
    <div className="text-white pt-8 sm:pt-16 lg:pt-24">
      <div className="text-center">
        <p className="text-[13px] sm:text-lg md:text-xl py-4 sm:py-6 md:py-8 bg-gradient-to-r from-white to-[#F81DFB] text-transparent bg-clip-text">
          Explore our newly released NFT collection
        </p>
        <h1 className="font-medium capitalize text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 sm:mb-12 md:mb-16">
          Our collection
        </h1>
      </div>
      <div className="relative mt-20 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`absolute rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-500 ease-in-out
                ${getImageStyles(index)}`}
              style={{ ...getPositionStyles(index), zIndex: getZIndex(index, hoveredIndex) }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img 
                src={img} 
                alt={`NFT ${index + 1}`} 
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function getImageStyles(index) {
  const baseClasses = "shadow-lg transition-transform duration-500 ease-in-out";
  const sizeClasses = [
    "w-32 h-48 sm:w-auto sm:h-auto",  
    "w-40 h-56 sm:w-auto sm:h-auto",  
    "w-48 h-64 sm:w-auto sm:h-auto", 
    "w-56 h-72 sm:w-auto sm:h-auto", 
    "w-48 h-64 sm:w-auto sm:h-auto", 
    "w-40 h-56 sm:w-auto sm:h-auto",  
    "w-32 h-48 sm:w-auto sm:h-auto"   
  ];
  
  return `${baseClasses} ${sizeClasses[index]}`;
}

function getPositionStyles(index) {
  const positions = [
    { top: '18%', left: '14%' },  
    { top: '12%', left: '20%' },
    { top: '6%', left: '28%' },
    { top: '0%', left: '50%', transform: 'translateX(-50%)' },
    { top: '6%', right: '28%'  },
    { top: '12%', right: '20%' },
    { top: '18%', right: '14%' }, 
  ];
  
  return positions[index];
}

function getZIndex(index, hoveredIndex) {
  if (hoveredIndex === index) {
    return 60;
  }
  if (index === 3) {
    return 50;
  }
  if (index === 4) {
    return 40;
  }
  if (index === 5) {
    return 30;
  }
  if (index === 6) {
    return 20;
  }
  return 10;
}

export default Collections;
