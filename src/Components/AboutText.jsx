import React from "react";

const sections = [
  {
    title: "About NFTs",
    content:
      "NFTs are individual tokens with valuable information stored in them. Because they hold a value primarily set by the market and demand, they can be bought and sold just like other physical types of art. NFTs' unique data makes it easy to verify and validate their ownership and the transfer of tokens between owners. What You Need to Know. NFTs are unique cryptographic tokens that exist on a blockchain and cannot be replicated. NFTs can represent real-world items like artwork and real estate. 'Tokenizing' these real-world tangible assets makes buying, selling, and trading them more efficient while reducing the probability of fraud.",
  },
  {
    title: "About Blockchain",
    content:
      "NFTs are individual tokens with valuable information stored in them. Because they hold a value primarily set by the market and demand, they can be bought and sold just like other physical types of art. NFTs' unique data makes it easy to verify and validate their ownership and the transfer of tokens between owners. What You Need to Know. NFTs are unique cryptographic tokens that exist on a blockchain and cannot be replicated. NFTs can represent real-world items like artwork and real estate. 'Tokenizing' these real-world tangible assets makes buying, selling, and trading them more efficient while reducing the probability of fraud." +
       "NFTs are individual tokens with valuable information stored in them. Because they hold a value primarily set by the market and demand, they can be bought and sold just like other physical types of art. NFTs' unique data makes it easy to verify and validate their ownership and the transfer of tokens between owners. What You Need to Know. NFTs are unique cryptographic tokens that exist on a blockchain and cannot be replicated. NFTs can represent real-world items like artwork and real estate. 'Tokenizing' these real-world tangible assets makes buying, selling, and trading them more efficient while reducing the probability of fraud.",
    },
  {
    title: "Disclaimer Of Information",
    content:
      "NFTs are individual tokens with valuable information stored in them. Because they hold a value primarily set by the market and demand, they can be bought and sold just like other physical types of art. NFTs' unique data makes it easy to verify and validate their ownership and the transfer of tokens between owners. What You Need to Know. NFTs are unique cryptographic tokens that exist on a blockchain and cannot be replicated.",
  },
  {
    title: "Your Information Is Safe With Us",
    content:
      "NFTs are individual tokens with valuable information stored in them. Because they hold a value primarily set by the market and demand, they can be bought and sold just like other physical types of art. NFTs' unique data makes it easy to verify and validate their ownership and the transfer of tokens between owners. What You Need to Know. NFTs are unique cryptographic tokens that exist on a blockchain and cannot be replicated.",
  },
];

const AboutText = () => {
  return (
    <div className="text-white flex flex-col gap-12 md:gap-16 lg:gap-28 px-4 md:px-8 lg:px-16 py-8">
      {sections.map((section, index) => (
        <div key={index}>
          <h1 className="text-white text-lg md:text-xl lg:text-2xl">
            {section.title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 py-6 md:py-8 lg:py-10">
            {section.content}
          </p>
          {index < sections.length - 1 && (
            <hr className="border-gray-600 border" />
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutText;
