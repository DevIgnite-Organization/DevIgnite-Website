'use client'
import React, { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './hero.css'

function Hero() {
  useEffect(() => {
    const element = document.getElementById('element');
    if (element) {
      element.classList.add('reveal');
    }
    const element1 = document.getElementById('element-1');
    const element2 = document.getElementById('element-2');
    if (element1 && element2) {
      setTimeout(() => {
        element1.classList.add('reveal');
        element2.classList.add('reveal');
      }, 500); // Adjust the delay according to your animation timing
    }
  }, []);



 

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8 " >
        <div
          className="absolute inset-x-0 -top-40 -z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="w-full mx-auto py-0 sm:py-48 lg:py-20">
          <div className="py-10 sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Upcoming Event Schedule.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className='flex justify-between items-center w-full'>
            <div id="element-1" className="hidden sm:flex w-1/2 flex justify-center items-center opacity-0 transform translate-y-4 transition-opacity duration-500 ease-out">
              <img
                className="h-120 w-auto"
                src="../../team-h-01.svg"
                alt=""
              />
              <style jsx>{`
      .reveal {
        opacity: 1;
        transform: translateY(0);
      }
    `}</style>
            </div>

            <div id="element" className="w-1/1 text-center opacity-0 transform translate-y-4">
              <style jsx>{`
      #element {
        transition: opacity 0.5s ease, transform 0.5s ease;
      }
      .reveal {
        opacity: 1;
        transform: translateY(0);
      }
    `}</style>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                DevIgnite Navi Mumbai's First Ever Grand Hackathon
              </h1>
              <h1 className="text-2xl font-bold tracking-tight text-gray-600 sm:text-4xl mt-3">
                2nd - 3rd March
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Join us as we bring together tech enthusiasts from diverse backgrounds to ignite innovation and creativity at Navi Mumbai's inaugural Grand Hackathon.
              </p>

              <div className="flex flex-col items-center gap-5 py-5 sm:mt-10 sm:flex-row sm:justify-center sm:items-center sm:gap-x-6">
                <div className="flex-shrink-0" style={{ width: "fit-content" }}>
                  <a
                    href="https://devignite.devfolio.co/"
                    className="flex gap-2 items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <img
                      className="h-5 w-auto"
                      src="../../Devfolio_Logo-White.png"
                      alt=""
                    />
                    Apply with Devfolio
                  </a>
                </div>
                <div className="flex-shrink-0" style={{ width: "fit-content" }}>
                  <a
                    href="https://discord.gg/MC53yv4M35"
                    className="flex gap-2 items-center rounded-md bg-white-600 px-3.5 py-2.5 text-sm font-semibold text-indigo shadow-sm hover:bg-white-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <img
                      className="h-5 w-auto"
                      src="../../discord.png"
                      alt=""
                    />
                    Join Our Discord
                  </a>
                </div>
              </div>


            </div>
            <div id="element-2" className="hidden sm:flex w-1/2 flex justify-center items-center opacity-0 transform translate-y-4 transition-opacity duration-500 ease-out">
              <img
                className="h-120 w-auto"
                src="../../team-h-02.svg"
                alt=""
              />
              <style jsx>{`
      .reveal {
        opacity: 1;
        transform: translateY(0);
      }
    `}</style>
            </div>
          </div>



        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>

  )
}

export default Hero
