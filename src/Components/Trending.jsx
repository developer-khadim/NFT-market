import React from 'react'
import nft1 from '../assets/NFT1.png';
import nft2 from '../assets/NFT2.png';
import nft3 from '../assets/NFT3.png';
import nft4 from '../assets/NFT4.png'
import user from '../assets/User.png';
import price from '../assets/eth.svg';
import ButtonTwo from '../Components/ButtonTwo';

const NFTCard = ({ nft, index }) => (
  <div className='w-full max-w-[400px] mx-auto bg-gray-300/10 rounded-lg shadow-md flex flex-col items-start p-3 sm:p-4 md:p-5 gap-2 sm:gap-3 
    transition-transform duration-300 ease-in-out hover:scale-105'>
    <div className="w-full aspect-square overflow-hidden rounded-md">
      <img src={nft} alt={`NFT ${index + 1}`} className="w-[400px] h-[350px] object-fit" />
    </div>
   <div className='flex gap-4 items-center' >
    <img src={user} width={30} height={30}  />
        <p className='font-bold' >Monkey Ape </p>
   </div>
    <div className='flex justify-between w-full py-2 text-sm sm:text-base' >
        <p>On Sale</p>
        <div>
            <p className='flex items-center justify-end gap-1'> <img src={price} alt="" className="w-4 h-4" /> 4.89 ETH </p>
            <p className='text-right text-xs sm:text-sm text-gray-400'>($ 654,874.86) </p>
        </div>
    </div>
    <div className='mt-auto w-full'>
      <ButtonTwo full text="Buy Now" />
    </div>
  </div>
)

const Trending = () => {
  const nfts = [nft1, nft2, nft3, nft4];

  return (
    <div className="text-white py-6 sm:py-8 md:py-32 px-3 sm:px-4 md:px-6 lg:px-8 min-h-screen">
      <div className='pb-6 sm:pb-8 md:pb-12 flex flex-col md:flex-row md:justify-between md:items-end'>
        <div className='mb-4 md:mb-0'>
          <p className="capitalize text-white/60 text-xs sm:text-sm md:text-base">most loved NFTs of the time</p>
          <h1 className='capitalize text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium py-2 sm:py-3'>hot trending nFTs</h1>
        </div>
        <div className='md:block hidden'>
          <ButtonTwo text="View All" />
        </div>
      </div>
      <div className='flex flex-col gap-6 sm:gap-8 md:gap-12'>
        {[0, 1].map((rowIndex) => (
          <div key={rowIndex} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6'>
            {nfts.map((nft, index) => (
              <NFTCard key={rowIndex * 4 + index} nft={nft} index={rowIndex * 4 + index} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trending