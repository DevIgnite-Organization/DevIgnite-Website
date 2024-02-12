'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Partners() {
  const sponsors = [
    { name: 'Orkes', src: '../../orkes.svg', alt: 'Orkes', category: 'Powered by', color: 'gray-700' },
    { name: 'Devfolio', src: '../../Devfolio_Logo-Black.png', alt: 'Devfolio', category: 'Gold', color: 'yellow-500' },
    { name: 'Polygon', src: '../../Polygon-logo.png', alt: 'Polygon', category: 'Silver', color: 'gray-500' },
    { name: 'Replit', src: '../../Replit-light-background.png', alt: 'Replit', category: 'Silver', color: 'gray-500' },

    // Add more sponsor objects as needed
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="bg-white py-24 sm:py-10" id='partners'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by our valued sponsors
        </h2>

        <div className="mx-auto mt-10 flex flex-wrap justify-around max-w-lg gap-x-8 gap-y-10 sm:max-w-xl lg:max-w-none">
          {sponsors.map((sponsor, index) => (
            <Sponsor key={index} sponsor={sponsor} variants={variants} />
          ))}
        </div>
      </div>

    </div>


  );
}

function Sponsor({ sponsor, variants }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      className="flex flex-col items-center md:items-left justify-center gap-5"
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <p className={`text-sm font-medium text-${sponsor.color}`}>{sponsor.category}</p>
      <img
        className="max-h-12 w-full object-contain"
        src={sponsor.src}
        alt={sponsor.alt}
        width={158}
        height={48}
      />
    </motion.div>

  );
}

export default Partners;
