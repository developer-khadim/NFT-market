import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import Button from './Button';
import { CgMenuMotion ,CgClose} from "react-icons/cg";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 px-4 md:px-16 text-white">
      <div className="flex items-center justify-between">
        <img 
          src={logo} 
          alt="logo" 
          className="h-8 w-auto transition-transform duration-300 hover:scale-110 cursor-pointer" 
        />
        
        {/* Mobile menu icon */}
        <div className="md:hidden">
          {isOpen ? (
            <CgClose onClick={toggleMenu} className="text-2xl cursor-pointer hover:text-gray-300" />
          ) : (
            <CgMenuMotion onClick={toggleMenu} className="text-2xl cursor-pointer hover:text-gray-300" />
          )}
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex px-10 py-4 space-x-6 uppercase bg-active2">
          <li><Link to="/" className="hover:text-gray-300 transition-colors duration-300">Home</Link></li>
          <li className="hover:text-gray-300 transition-colors duration-300 cursor-pointer">Explore</li>
          <li className="hover:text-gray-300 transition-colors duration-300 cursor-pointer">Trending NFTs</li>
          <li><Link to="/about" className="hover:text-gray-300 transition-colors duration-300">About</Link></li>
        </ul>

        {/* Mobile menu */}
        <div className={`absolute top-16 left-0 right-0 bg-active2 md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><Link to="/" onClick={toggleMenu} className="hover:text-gray-300 transition-colors duration-300">Home</Link></li>
            <li onClick={toggleMenu} className="hover:text-gray-300 transition-colors duration-300 cursor-pointer">Explore</li>
            <li onClick={toggleMenu} className="hover:text-gray-300 transition-colors duration-300 cursor-pointer">Trending NFTs</li>
            <li><Link to="/about" onClick={toggleMenu} className="hover:text-gray-300 transition-colors duration-300">About</Link></li>
          </ul>
        </div>

        <div className="hidden md:block">
          <Button text="Connect Wallet" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;