'use client'
import React, { useState, useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { useInView } from 'react-intersection-observer';

const includedFeatures = [
    'Cash Prizes',
    'Sponsored Prizes',
    'Swags and Goodies',
    'Much more',
];

function Prize() {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.2, // Change threshold as per requirement
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <div
            ref={ref}
            className={`bg-white py-24 sm:py-32 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-16'}`}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8" id='prize'>
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Prizes</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our hackathon offers exciting rewards and recognition for participants who demonstrate outstanding innovation and creativity. Throughout the event, participants will have the opportunity to compete for various awards and honors.
                        
                    </p>

                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Competition Goals</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                        We encourage all participants to strive for excellence and unleash their full potential to be in the running for these prestigious accolades!
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 flex items-center justify-center">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600 mb-5">Prize Pool Upto</p>
                                <div className='flex items-center justify-center flex-col'>
                                    <img
                                        className="h-20 w-auto"
                                        src="../../trophy.png"
                                        alt=""
                                    />
                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                        <span className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">₹2Lakh +</span>
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">INR</span>
                                    </p>
                                </div>

                                {/* <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get access
                </a> */}
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                Terms and conditions apply. Please refer to the official rules for more details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prize;
