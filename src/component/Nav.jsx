import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();

  const handleEnrollClick = () => {
    // navigate('/enroll'); // Navigate to the enroll page
  }
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <div className="text-black-500 text-[18px] lg:text-[22px] font-extrabold tracking-wide">
          THE BESTPRICE
        </div>

        {/* Toggle Button (Mobile) */}
        <div className="lg:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-800">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Nav */}
      
        <div className='hidden lg:flex gap-4'>
          <button className='bg-black text-white px-[30px] rounded-lg py-[10px]'>Login</button>
          <button className='bg-black text-white px-[30px] rounded-lg py-[10px]'>Sign up</button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-black px-6 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen py-10' : 'max-h-0'
        }`}
      >
        <div className='flex flex-col gap-4'>
          <button className='bg-yellow-300 px-[20px] py-[10px]'>Login</button>
          <button className='bg-yellow-300 px-[20px] py-[10px]'>Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
