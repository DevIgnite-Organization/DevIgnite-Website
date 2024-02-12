'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function CommunityPartners() {
  const comSponsors = [
    { name: 'GDSC SIGCE', src: '../../gdsc-sigce.png', alt: 'GDSC SIGCE',  color: 'gray-700' },
    { name: 'TheDevArmy', src: '../../devarmy.png', alt: 'TheDevArmy', color: 'gray-700' },
  
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="py-20 sm:bg-white sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
        Community Partners
        </h2>

        <div className="mx-auto mt-10 flex flex-wrap justify-around max-w-lg gap-x-8 gap-y-10 sm:max-w-xl lg:max-w-none">
          {comSponsors.map((sponsor, index) => (
            <CommunitySponsor key={index} sponsor={sponsor} variants={variants} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CommunitySponsor({ sponsor, variants }) {
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
        className="max-h-[110px] w-full object-contain"
        src={sponsor.src}
        alt={sponsor.alt}
        width={180}
        height={60}
      />
    </motion.div>
  );
}

export default CommunityPartners;
