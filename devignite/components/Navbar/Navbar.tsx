'use client'
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Import hamburger and close icons

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  }

  // Navigation links
  const navigation = [
    { name: 'Partners', href: '#partners' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Prize', href: '#prize' },
    { name: 'Team', href: '#teams' },
    { name: 'FAQ', href: '#FAQ' },
    { name: 'About', href: '#about' },
  ];

  // Social links
  const social = [
    { svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#383838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>, href: 'https://www.instagram.com/devignitehacks' },
    { svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#383838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>, href: 'https://twitter.com/devignitehacks' },
    // Add more social items as needed
  ];

  return (
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
        {/* <div className="lg:hidden">
          <button
            type="button"
            className="-m-2.5 z-99 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMobileMenu} // Added onClick event handler here
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="h-6 w-6" aria-hidden="true" />}
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
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={closeMobileMenu}>
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
  );
};

export default Navbar;


