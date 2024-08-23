import React from 'react';
import wallet from '../assets/wallet.png';
import collection from '../assets/collection.png';
import collection2 from '../assets/collections2.png';
import sels from '../assets/seals.png';
import line from '../assets/Vector 1.png';

const Howitworks = () => {
  const work = [
    { icon: wallet, name: "Set Up Your Wallet" },
    { icon: collection, name: "Create Your Collection" },
    { icon: collection2, name: "Add Your NFTs" },
    { icon: sels, name: "List Them For Sale" },
  ];

  return (
    <div className='text-white text-center sm:pt-42 sm:py-20  py-10'>
      <h1 className='font-medium text-3xl mb-12'>How it works</h1>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        {work.map((item, index) => (
          <React.Fragment key={index}>
            <div className='flex flex-col items-center mb-8 md:mb-0'>
              <div className='w-24 h-24 rounded-full bg-[#2A2D3A] flex justify-center items-center mb-4'>
                <img src={item.icon} alt={item.name} className='sm:w-12 sm:h-12 h-8 w-8' />
              </div>
              <p className='text-lg max-w-[200px]'>{item.name}</p>
            </div>
            {index < work.length - 1 && (
              <img src={line} alt="connector line" className='hidden md:block mx-4 h-[15px]' />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Howitworks;
