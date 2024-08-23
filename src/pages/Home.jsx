import line from "../assets/Line.png";
import Collections from "../Components/Collections";
import Hero from "../Components/Hero";
import Howitworks from "../Components/Howitworks";
import Textsection from "../Components/Textsection";

const Home = () => {
  return (
    <div className="w-full h-auto px-4 md:px-20 bg-[#1e1629]">
      <div className="pt-20 text-white">
        <Hero />
      </div>
      <div className="w-full h-[10vh] sm:h-[20vh] md:h-[30vh] relative overflow-hidden">
        <img
          src={line}
          alt="Decorative line"
          className="w-full h-full object-cover object-center absolute top-0 left-0"
        />
      </div>
      <Textsection />
      <Howitworks />
      <Collections/>
    </div>
  );
};

export default Home;
