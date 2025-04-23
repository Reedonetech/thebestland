import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import img1 from '../../image/portrait.jpg';
import img2 from '../../image/serious.jpg';
import Nav from '../Nav';
import Mission from './Mission';
import Commit from './Commit';
import Apart from './Apart';
import Footer from '../Footer';

const Abouthero = () => {
  const backgroundImages = [img1, img2];
  const [currentIndex, setCurrentIndex] = useState(0);
  // const navigate = useNavigate();

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
    <div>
      <Nav />
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
          <h1 className='text-[45px] lg:text-[45px] w-[35vw] font-bold text-white drop-shadow-lg'>
            We are Redefining Service Connections
          </h1>
          <h1 className='text-[20px] lg:text-[20px] font-bold text-white drop-shadow-lg'>
            ________Experience a new era of service connections
          </h1>
        </div>
      </div>

      {/* This line was causing infinite recursion */}
      {/* <Abouthero /> */}

      <Mission />
      <Commit />
      <Apart />
      <Footer />
    </div>
  );
};

export default Abouthero;
