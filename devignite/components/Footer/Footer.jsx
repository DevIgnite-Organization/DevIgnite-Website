import React from 'react';

function Footer() {
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
    { svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#383838" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>, href: 'https://www.instagram.com/devignitehacks/' },
    { svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#383838" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>, href: 'https://twitter.com/devignitehacks' },
    // { svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#383838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>, href: '#' },
    // Add more social items as needed
  ];

  <div className="flex flex-col justify-center items-center space-y-6">
    <div className="space-y-2">
      {social.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          {item.svg}
        </a>
      ))}
    </div>
  </div>

  return (
    <footer className="bg-white-900 text-gray py-8 overflow-hidden">
      <div className='flex flex-col py-5 sm:flex-row justify-around items-center py-10 px-20'>
        <div className="flex items-center gap-4">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-10 w-auto object-contain"
              src="../../sigce.png"
              alt="none"
            />
          </a>
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-10 w-auto object-contain"
              src="../../devignite_logo.png"
              alt="none"
            />
          </a>
        </div>
        <div className="hidden sm:flex flex-row py-6 items-center gap-10 justify-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="py-6 flex items-center gap-10 justify-center">
          {social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              {item.svg}
            </a>
          ))}
        </div>
      </div>

      <div className='px-10 sm:flex justify-cnter items-center text-center text-gray-500'>
        <p className="mx-auto">Design and Developed by Tech Team Devignite 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
