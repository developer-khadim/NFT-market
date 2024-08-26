import React from 'react';
import logo from '../assets/Logo.png';
import { FaYoutube, FaTwitter, FaFacebookF, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='flex flex-col items-center sm:items-start'>
            <img src={logo} alt="Logo" className="w-48 max-w-full mb-4" />
          </div>
          <div className='text-center sm:text-left'>
            <p className='text-base sm:text-lg font-medium text-gray-400 mb-6'>Shihami is the world's leading NFTs marketplace where you can discover, sell and bid NFTs and get rich</p>
            <div className='flex justify-center sm:justify-start gap-6 mb-6'>
              <FaYoutube size={24} className="text-purple-500 hover:text-purple-400 transition-colors" />
              <FaTwitter size={24} className="text-purple-500 hover:text-purple-400 transition-colors" />
              <FaFacebookF size={24} className="text-purple-500 hover:text-purple-400 transition-colors" />
              <FaGoogle size={24} className="text-purple-500 hover:text-purple-400 transition-colors" />
            </div>
            <p className='text-sm font-bold'>
  Designed By <span className='text-purple-500'>@Faizansayani</span> && Developed By <span className='text-purple-500'>@Khadim Ali</span>
</p>
          </div>
          <div className='text-center sm:text-left'>
            <h2 className='text-xl font-bold mb-4'>About</h2>
            <ul>
              <li className='text-gray-400 hover:text-white transition-colors py-2'>About NFT</li>
              <li className='text-gray-400 hover:text-white transition-colors py-2'>Live Auctions</li>
              <li className='text-gray-400 hover:text-white transition-colors py-2'>NFT Blog</li>
              <li className='text-gray-400 hover:text-white transition-colors py-2'>Activity</li>
            </ul>
          </div>
          <div className='text-center sm:text-left'>
            <h2 className='text-xl font-bold mb-4'>Support</h2>
            <ul>
              <li className='text-gray-400 hover:text-white transition-colors py-2'>Help & Support</li>
              <li className='text-gray-400 hover:text-white transition-colors py-2'>Item Details</li>
              <li className='text-gray-400 hover:text-white transition-colors py-2'>Author Profile</li>
              <li className='text-gray-400 hover:text-white transition-colors py-2'>Collection</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer