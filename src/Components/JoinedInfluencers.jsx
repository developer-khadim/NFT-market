import React from "react";
import person1 from "../assets/Picture1.png";
import person2 from "../assets/Pictures.png";
import person3 from "../assets/Picture3.png";
import person4 from "../assets/Picture4.png";
import ButtonTwo from "../Components/ButtonTwo";
import { HiMiniCheckBadge } from "react-icons/hi2";


const InfluencerCard = ({ image, index }) => (
  <div
    className="w-full bg-gray-300/10 rounded-lg shadow-md flex flex-col items-center p-3 gap-2
    transition-transform duration-300 ease-in-out hover:scale-105"
  >
    <div className="w-full aspect-[4/3] overflow-hidden rounded-md">
      <img
        src={image}
        alt={`Influencer ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex items-center justify-between w-full px-2 " >
     <div className="" >
         <h3 className="text-lg font-semibold mt-2 flex pb-2 items-center gap-2">
        John Smith <HiMiniCheckBadge color="lightgreen" />
      </h3>
      <p className="text-sm text-gray-300" >@JohnSmith</p>
     </div>
        <button className="py-3 px-8 bg-transparent border-2 border-active rounded-full hover:bg-active hover:text-white hover:border-none cursor-pointer " > Follow </button>
    </div>
  </div>
);

const JoinedInfluencers = () => {
  const influencers = [person1, person2, person3, person4,person1 ,person4,person3,person2];

  return (
    <div className="text-white py-6 px-4 min-h-screen max-w-7xl mx-auto">
      <div className="pb-6 flex flex-col sm:flex-row sm:justify-between sm:items-end">
        <div className="mb-4 sm:mb-0">
          <p className="capitalize text-white/60 text-xs sm:text-sm">
            Watch and follow celebrities to get the best collection of NFTs
          </p>
          <h1 className="capitalize text-3xl sm:text-4xl lg:text-5xl font-medium py-4 bg-clip-text text-white">
            Joined Influencers
          </h1>
        </div>
        <div className="hidden sm:block">
          <ButtonTwo text="View All" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {influencers.map((influencer, index) => (
          <InfluencerCard key={index} image={influencer} index={index} />
        ))}
      </div>
    </div>
  );
};

export default JoinedInfluencers;
