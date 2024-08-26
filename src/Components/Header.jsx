import React from 'react';

const Header = () => {
  return (
    <div className="w-full bg-img h-[400px] flex flex-col items-center justify-center gap-4 p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold text-center py-10">
        Privacy Policy
      </h1>
      <p className="text-gray-400 text-sm md:text-base lg:text-lg text-center">
        Before trading and investment, please have a look at this
      </p>
    </div>
  );
};

export default Header;
