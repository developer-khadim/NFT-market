import React from "react";
import left from "../assets/btn2left.png";
import right from "../assets/btn2right.png";

const ButtonTwo = ({ full, text }) => {
  return (
    <div className="inline-flex items-center">
      <img src={left} alt="left arrow" className="w-[3px] h-auto" />
      <button
        className={`
          font-bold text-xs sm:text-sm md:text-base
          flex items-center justify-center
          transition-all duration-300 
          text-active border-2 border-active
          hover:bg-active hover:text-white 
          ${full 
            ? 'w-full px-20 py-4 ' 
            : 'px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2'}
        `}
      >
        {text}
      </button>
      <img src={right} alt="right arrow" className="w-[3px] h-auto" />
    </div>
  );
};

export default ButtonTwo;