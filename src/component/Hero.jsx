import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import img1 from '../image/image1.jpeg';
import img2 from '../image/pic.avif';


const Hero = () => {
  const backgroundImages = [img1, img2,];
  const [currentIndex, setCurrentIndex] = useState(0);
//   const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleEnrollClick = () => {
    // navigate('/enroll'); // <-- route to enroll page
  };

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center transition-all duration-1000'
        style={{
          backgroundImage: `url(${backgroundImages[currentIndex]})`,
        }}
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-60'></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col gap-5 justify-center items-center text-center w-full h-full px-4'>
        <h1 className='text-[25px] lg:text-[35px] w-[35vw] font-bold text-white drop-shadow-lg'>
            Find quality service vendors and Get Your Work Done
            ...Effortlessly
        </h1>
        <div className='flex gap-[20px] lg:gap-[40px] pt-[10px] lg:pt-[20px]'>
          <button className='bg-amber-600 text-white px-[35px] py-[10px] rounded hover:bg-inherit border-orange border-solid border-[3px] hover:text-black' onClick={handleEnrollClick}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
