import React from 'react';
import Max1 from '../../image/provision0.png';
import Max2 from '../../image/provision1.png';
import Max3 from '../../image/provision2.png';
import Max4 from '../../image/provision3.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import CountUp from 'react-countup';

gsap.registerPlugin(ScrollTrigger);

const Apart = () => {
  useGSAP(() => {
    // Animation for heading and description
    gsap.fromTo(
      '.header-text',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );

    // Animation for feature cards
    gsap.fromTo(
      '.feature-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
    );

    // Animation for counter section
    gsap.fromTo(
      '.counter-item',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.counter-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const features = [
    {
      image: Max1,
      title: 'Flexible',
      description:
        'Our platform adapts to your schedule and requirements, allowing you to find the right service provider when and where you need them.',
    },
    {
      image: Max2,
      title: 'Affordable',
      description:
        'We ensure that you get access to a wide range of services that fit your budget without compromising on quality.',
    },
    {
      image: Max3,
      title: 'Safe and Secure',
      description:
        'We prioritize your safety with verified service providers and secure transactions, ensuring peace of mind.',
    },
    {
      image: Max4,
      title: 'All-in-one',
      description:
        'From skilled to semi-skilled services, our platform offers a comprehensive solution for all your needs in one place.',
    },
  ];

  const counters = [
    { title: 'Available Services', value: 1500, suffix: '+' },
    { title: 'Reliable Vendors', value: 500, suffix: '+' },
    { title: 'Happy Customers', value: 10000, suffix: '+' },
    { title: 'Jobs Posted', value: 2500, suffix: '+' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h1 className="header-text text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A3542] mb-3 sm:mb-4">
          What Sets Us Apart
        </h1>
        <p className="header-text text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          At GYWDE, we are pioneers in providing skilled and semi-skilled services tailored for all
          industries and our mission is to bridge the gap between service consumer and service
          provider.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-12 lg:mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-md p-4 sm:p-6 transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:scale-105"
          >
            <div className="">
              <img
                src={feature.image}
                alt={`${feature.title} Illustration`}
              
                className="w-full h-auto object-contain"
             
              />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0A3542] mb-2">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Counter Section */}
      <div className="counter-section grid p-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {counters.map((counter, index) => (
          <div
            key={index}
            className="counter-item flex flex-col items-center text-center p-4 sm:p-6  rounded-lg shadow-md"
          >
            
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0481EC]">
              <CountUp end={counter.value} duration={2.5} separator="," />
              {counter.suffix}
            </p>
            
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0A3542] mb-2">
              {counter.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apart;