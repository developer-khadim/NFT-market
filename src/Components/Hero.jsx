import Button from "./Button";
import Heroimg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between gap-20">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase mb-6">
          Explore, create and <br/>
          sell your nft's on <br/> shihami
        </h1>
        <p className="text-gray-300 capitalize max-w-md mx-auto lg:mx-0 mb-8">
          shihami is the world's first and largest NFT/Avatar marketplace
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-6">
          <Button text="Explore More" />
          <Button black text="Create" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <img src={Heroimg} alt="Hero" className="h-auto" />
      </div>
    </section>
  );
};

export default Hero;