import React from "react";
import left from "../assets/btn2left.png";
import right from "../assets/btn2right.png";

const ButtonTwo = ({ full, text }) => {
  return (
    <div className="inline-flex items-center">
      <img src={left} width={4} height={4} alt="left arrow" className="w-1 h-auto" />
      <button
        className={`
          font-bold text-sm sm:text-base
          flex items-center justify-center
          transition-all duration-300 
          text-active border-2 border-active
          hover:bg-active hover:text-white 
          ${full ? 'px-[104px] py-3 sm:px-[139px] sm:py-3' : 'px-3 py-1 sm:px-4 sm:py-2'}
        `}
      >
        {text}
      </button>
      <img src={right} width={4} height={4} alt="right arrow" className="w-1 h-auto" />
    </div>
  );
};

export default ButtonTwo;