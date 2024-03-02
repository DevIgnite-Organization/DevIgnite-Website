"use client";
import React, { useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useInView } from "react-intersection-observer";

const includedFeatures = [
  "Top 10 teams will get 1 Year of Codedamn Pro Membership",
  "Best use of Orkes Conductor will get special kits from Orkes",
  "125 Domains from XYZ.com ",
  "Chance to get $5,000 worth of API Credits from VERBWIRE",
  "Chance to win $50 and job opportunities from REPLIT",
  "Chance to win $350 from POLYGON",
  "Swags and Goodies",
  "Much more",
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
      className={`bg-white py-24 sm:py-32 ${
        isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8" id="prize">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Prizes
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our hackathon offers exciting rewards and recognition for
            participants who demonstrate outstanding innovation and creativity.
            Throughout the event, participants will have the opportunity to
            compete for various awards and honors.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none lg:flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600 mb-5">
                  1st Place
                </p>
                <div className="flex items-center justify-center flex-col">
                  <img className="h-20 w-auto" src="../../trophy.png" alt="" />
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
                      ₹30K
                    </span>
                  </p>
                </div>
                {/* <p className="mt-6 text-xs leading-5 text-gray-600">
                  <ul className="list-disc">
                    <li className="text-sm mb-1">
                      Chance to get $5,000 worth of API Credits from VERBWIRE
                    </li>
                    <li className="text-sm mb-1">
                      Chance to win $350 from POLYGON
                    </li>
                    <li className="text-sm mb-1">
                      Chance to win $50 and job opportunities from REPLIT
                    </li>
                  </ul>
                </p> */}
              </div>
            </div>

            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600 mb-5">
                  2nd Place
                </p>
                <div className="flex items-center justify-center flex-col">
                  <img className="h-20 w-auto" src="../../trophy.png" alt="" />
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
                      ₹20k
                    </span>
                  </p>
                </div>
                {/* <p className="mt-6 text-xs leading-5 text-gray-600">
                  <ul className="list-disc">
                    <li className="text-sm mb-1">
                      Chance to get $5,000 worth of API Credits from VERBWIRE
                    </li>
                    <li className="text-sm mb-1">
                      Chance to win $350 from POLYGON
                    </li>
                    <li className="text-sm mb-1">
                     
                    </li>
                  </ul>
                </p> */}
              </div>
            </div>

            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600 mb-5">
                  3rd Place
                </p>
                <div className="flex items-center justify-center flex-col">
                  <img className="h-20 w-auto" src="../../trophy.png" alt="" />
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
                      ₹10k
                    </span>
                  </p>
                </div>
                {/* <p className="mt-6 text-xs leading-5 text-gray-600">
                                    Exciting prizes await the winners! Get ready to showcase your skills and compete for the rewards.
                                </p> */}
                {/* <p className="mt-6 text-xs leading-5 text-gray-600">
                  <ul className="list-disc">
                    <li className="text-sm mb-1">
                      Chance to get $5,000 worth of API Credits from VERBWIRE
                    </li>
                    <li className="text-sm mb-1">
                      Chance to win $350 from POLYGON
                    </li>
                    <li className="text-sm mb-1">
                      Chance to win $50 and job opportunities from REPLIT
                    </li>
                  </ul>
                </p> */}
              </div>
            </div>

            {/* Repeat the above divs for the other two cards */}
          </div>

          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Competition Goals
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We encourage all participants to strive for excellence and unleash
              their full potential to be in the running for these prestigious
              accolades!
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prize;
