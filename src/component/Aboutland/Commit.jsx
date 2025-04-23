import React from 'react';
import Max from '../../image/commitment-DjNetEWd (1).svg';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Commit = () => {
  useGSAP(() => {
    // Animation for text content
    gsap.fromTo(
      '.mission-text',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: 'power3.out' }
    );

    // Animation for image
    gsap.fromTo(
      '.mission-image',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
      <div className="flex flex-col-reverse lg:flex-row-reverse justify-center items-center gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="mission-image w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]">
          <img
            src={Max}
            alt="About Us Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:max-w-[600px]">
          <div className="mission-text">
            <h1 className=" text-base sm:text-lg lg:text-4xl  text-gray-700 mb-3 sm:mb-4">
            _____Our Commitment
            </h1>
            <p className=" text-2xl sm:text-3xl font-bold text-[#0A3542]  leading-relaxed">
                We want to put a stop to the challenges associated with finding reliable and top-notch services
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Commit;