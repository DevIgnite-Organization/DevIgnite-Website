'use client'
import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';

function Banner() {
    const [remainingTime, setRemainingTime] = useState('');

    useEffect(() => {
        const endDate = new Date('2024-03-02T00:00:00');
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = endDate - now;
            if (distance <= 0) {
                clearInterval(timer);
                setRemainingTime('Registration closed');
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setRemainingTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleDismiss = () => {
        // Implement functionality to dismiss the banner
    };

    return (
        <div className="hidden sm:flex sticky top-0 z-50 isolate flex items-center gap-x-6 overflow-hidden bg-gray-900 text-white px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        {/* Timer */}
        <div className="text-sm leading-6">
            <strong className="font-semibold">DevIgnite 2024</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                <circle cx={1} cy={1} r={1} />
            </svg>
            The Schedule is Live!
            {/* Registration closes in: {remainingTime} */}
        </div>
        {/* Register Button */}
        <a
            href='#schedule'
            className="flex-none rounded-full bg-gray-50 text-gray-900 px-3.5 py-1 text-sm font-semibold shadow-sm hover:bg-gray-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
            Open <span aria-hidden="true">&rarr;</span>
        </a>
        {/* Dismiss Button */}
        <div className="flex flex-1 justify-end">
            <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={handleDismiss}>
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
        </div>
    </div>
    

    );
}

export default Banner;
