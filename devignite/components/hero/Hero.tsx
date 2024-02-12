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

  const navigation = [
    { name: 'Partners', href: '#partners' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Prize', href: '#prize' },
    { name: 'Team', href: '#teams' },
    // { name: 'Schedule', href: '#' },
    { name: 'FAQ', href: '#FAQ' },
    { name: 'About', href: '#about' },
  ]

  const social = [
    { svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#383838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>, href: 'https://www.instagram.com/devignitehacks' },
    { svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#383838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>, href: 'https://twitter.com/devignitehacks' },
    // { svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#383838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>, href: '#' },
    // Add more social items as needed
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    console.log("Mobile menu close button clicked"); // Debugging statement
    setMobileMenuOpen(false);
  }

  console.log("mobileMenuOpen:", mobileMenuOpen); // Debugging statement

  return (
    <div className="bg-white">
      <header className="top-4 z-10 sm:absolute inset-x-0 top-8 z-0">
        <nav className="flex items-center justify-center p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1 items-center gap-4">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-9 sm:h-12 w-auto object-contain"
                src="../../sigce.png"
                alt="none"
              />
            </a>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-9 sm:h-12 w-auto object-contain"
                src="../../devignite_logo.png"
                alt="none"
              />
            </a>
          </div>
          {/* <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 z-99 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div> */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm cursor-pointer font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden py-6 flex items-center gap-10 justify-center">
            {social.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.svg}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="py-6 flex items-center gap-10 justify-center">
              {social.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.svg}
                </a>
              ))}
            </div>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-center">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="devignite_logo.png"
                  alt=""
                />
              </a>
              {/* <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button> */}
            </div>
            <div className="py-6 flex flex-col gap-6">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-base font-semibold leading-6 text-gray-900 hover:text-gray-700" onClick={closeMobileMenu}>
                  {item.name}
                </a>
              ))}
              {social.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={closeMobileMenu}
                >
                  {item.svg}
                </a>
              ))}
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
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
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Devignite Navi Mumbai's First Ever Grand Hackathon
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
                      src="../../Devfolio_Logo-white.png"
                      alt=""
                    />
                    Apply with Devfolio
                  </a>
                </div>
                <div className="flex-shrink-0" style={{ width: "fit-content" }}>
                  <a
                    href="https://discord.gg/tu2thmhG"
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