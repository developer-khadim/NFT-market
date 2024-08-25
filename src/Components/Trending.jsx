import React from 'react'
import nft1 from '../assets/NFT1.png';
import nft2 from '../assets/NFT2.png';
import nft3 from '../assets/NFT3.png';
import nft4 from '../assets/NFT4.png'
import user from '../assets/User.png';
import price from '../assets/eth.svg';
import ButtonTwo from '../Components/ButtonTwo';

const NFTCard = ({ nft, index }) => (
  <div className='w-full bg-gray-300/10 rounded-lg shadow-md flex flex-col items-start p-3 gap-2
    transition-transform duration-300 ease-in-out hover:scale-105'>
    <div className="w-full aspect-square overflow-hidden rounded-md">
      <img src={nft} alt={`NFT ${index + 1}`} className="w-full h-full object-cover" />
    </div>
    <div className='flex gap-2 items-center'>
      <img src={user} className="w-6 h-6" alt="User" />
      <p className='font-bold text-sm'>Monkey Ape</p>
    </div>
    <div className='flex justify-between w-full py-2 text-xs'>
      <p>On Sale</p>
      <div>
        <p className='flex items-center justify-end gap-1'>
          <img src={price} alt="ETH" className="w-3 h-3" /> 4.89 ETH
        </p>
        <p className='text-right text-xxs text-gray-400'>($ 654,874.86)</p>
      </div>
    </div>
    <div className='mt-auto w-full flex items-center justify-center'>
      <ButtonTwo full text="Buy Now" />
    </div>
  </div>
)

const Trending = () => {
  const nfts = [nft1, nft2, nft3, nft4];

  return (
    <div className="text-white py-6 px-4 min-h-screen max-w-7xl mx-auto">
      <div className='pb-6 flex flex-col sm:flex-row sm:justify-between sm:items-end'>
        <div className='mb-4 sm:mb-0'>
          <p className="capitalize text-white/60 text-xs">most loved NFTs of the time</p>
          <h1 className='capitalize text-2xl sm:text-3xl lg:text-4xl font-medium py-2'>hot trending nFTs</h1>
        </div>
        <div className='hidden sm:block'>
          <ButtonTwo text="View All" />
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {nfts.map((nft, index) => (
          <NFTCard key={index} nft={nft} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Trending