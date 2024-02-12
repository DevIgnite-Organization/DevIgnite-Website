'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function IkPartners() {
    const ikSponsors = [
        { name: 'Codedamn', src: '../../codedamn.png', alt: 'Codedamn', category: 'Coding Partner', color: 'gray-700' },
        { name: 'BlueLearn', src: '../../blue_learn_1.png', alt: 'BlueLearn', category: 'Submission Partner', color: 'gray-700' },
        { name: '.xyz', src: '../../xyz_logo.png', alt: '.xyz', category: ' Domain Partner', color: 'gray-700' },
        { name: 'GiveMyCertificate', src: '../../gmc.png', alt: 'GiveMyCertificate', category: 'Certificate Partner', color: 'gray-700' },
        { name: 'ScrollJourney', src: '../../sj.png', alt: 'ScrollJourney', category: 'Blogging Partner', color: 'gray-700' },
        { name: 'Interview Buddy ', src: '../../ib.png', alt: 'Interview Buddy ', category: ' Interview Partner', color: 'gray-700' },
        { name: 'echo3D', src: '../../echo3d_1.png', alt: 'echo3D ', category: ' API Partner', color: 'gray-700' },
     
        // Add more sponsor objects as needed
    ];

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <div className="py-15 sm:bg-white sm:py-10">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    In-Kind Sponsor
                </h2>

                <div className="mx-auto mt-10 flex flex-wrap justify-around items-start max-w-lg gap-x-12 gap-y-10 sm:max-w-xl lg:max-w-none">
                    {ikSponsors.map((sponsor, index) => (
                        <IkSponsor key={index} sponsor={sponsor} variants={variants} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function IkSponsor({ sponsor, variants }) {
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
                height={45}
            />
        </motion.div>
    );
}

export default IkPartners;
