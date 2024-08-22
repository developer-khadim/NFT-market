import React from "react";
import left from "../assets/btnleft.png";
import right from "../assets/btnright.png";

const Button = ({ black, text }) => {
  return (
    <div className="flex items-center justify-center">
      <img src={left} width={14} alt="left arrow" />
      <button
        className={`font-bold px-4 py-2 flex items-center justify-center transition-all duration-300 ${
          black
            ? "bg-transparent border border-active text-active hover:bg-active hover:text-white"
            : "bg-active text-white hover:bg-transparent hover:text-active hover:border hover:border-active"
        }`}
      >
        {text}
      </button>
      <img src={right} width={14} alt="right arrow" />
    </div>
  );
};

export default Button;
