import React from 'react'
import arrow from '../assets/Arrow.png';

const ArrowBTN = ({full}) => {
  return (
    <div>
     <button 
     className={` py-6 px-2 bg-active rounded-md hover:border-2 hover:border-active 
     hover:bg-transparent cursor-pointer hover:duration-300 ${full ? ' rounded-full py-4 px-4 ' : 'py-6 px-2 rounded-md' }  `}
      ><img src={arrow} width={40} />
       </button>
    </div>
  )
}

export default ArrowBTN