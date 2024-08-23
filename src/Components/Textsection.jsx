import React from "react";
import metamask from "../assets/metamask.png";
import binance from "../assets/binance.png";
import trust from "../assets/trustwallet.png";
import aplha from "../assets/alpha.png";
import coin from "../assets/coin.png";

const WalletCard = ({ image, name }) => (
  <div className="w-full sm:w-[200px] md:w-[240px] lg:w-[272px] h-[280px] sm:h-[300px] md:h-[332px] bg-gray-300/10 rounded-lg shadow-md flex flex-col items-center justify-center gap-10 md:gap-12 p-4 transition-transform duration-300 ease-in-out hover:scale-110">
    <img src={image} alt={name} className="w-[120px] sm:w-[150px] md:w-[180px]" />
    <p className="text-lg sm:text-xl">{name}</p>
  </div>
);

const Textsection = () => {
  const wallets = [
    { image: metamask, name: "Meta Mask" },
    { image: binance, name: "Binance" },
    { image: trust, name: "Trust Wallet" },
    { image: aplha, name: "Alpha" },
    { image: coin, name: "CoinGecko" },
  ];

  return (
    <div className="text-white py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="flex justify-center flex-col items-center">
        <p className="text-base sm:text-lg md:text-xl py-4 sm:py-6 md:py-8 bg-gradient-to-r from-white to-[#F81DFB] text-transparent bg-clip-text text-center">
          Trade with world's most trusted and fastest wallets
        </p>
        <h1 className="font-medium capitalize text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-8 sm:mb-12 md:mb-16">
          wallets we support
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[100px] w-full max-w-[1600px] justify-items-center">
          {wallets.map((wallet, index) => (
            <WalletCard key={index} {...wallet} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Textsection;