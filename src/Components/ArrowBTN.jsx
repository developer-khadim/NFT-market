import React from 'react'
import arrow from '../assets/Arrow.png';

const ArrowBTN = () => {
  return (
    <div>
     <button className='py-6 px-2 bg-active rounded-md hover:border-2 hover:border-active hover:bg-transparent cursor-pointer hover:duration-300 ' ><img src={arrow} width={40} /> </button>
    </div>
  )
}

export default ArrowBTN