import React from 'react'
import ArrowBTN from './ArrowBTN';

const Subscribe = () => {
  return (
    <div className="text-white py-6 px-4 max-w-7xl mx-auto min-h-[580px] flex items-center justify-center">
       <div className='w-full flex flex-col items-center gap-10 text-center'>
        <h1 className='font-bold text-white text-3xl sm:text-4xl md:text-5xl'>Ready for Next NFT Drop?</h1>
        <div className='w-full max-w-[500px] rounded-xl h-[80px] border-2 border-active flex justify-between px-4 items-center'>
            <input 
  type="text" 
  placeholder='info@gmail.com' 
  className='bg-transparent border-none pl-6 flex-grow mr-2 focus:outline-none focus:ring-0'
/>
            <ArrowBTN />
        </div>
       </div>
    </div>
  )
}

export default Subscribe