// HackathonTracks.js

import React from 'react';

const HackathonTracks = () => {
  const tracks = [
    {
      title: 'Generative AI and Machine Learning',
      description: 'Build modern web applications using cutting-edge technologies.',
      image: 'path/to/web-development-image.jpg',
    },
    {
      title: 'Blockchain',
      description: 'Create innovative mobile apps for iOS and Android platforms.',
      image: 'path/to/mobile-app-development-image.jpg',
    },
    {
      title: 'Cybersecurity',
      description: 'Solve real-world problems using data analysis and machine learning.',
      image: 'path/to/data-science-image.jpg',
    },

    {
      title: 'Cloud and DevOps',
      description: 'Build modern web applications using cutting-edge technologies.',
      image: 'path/to/web-development-image.jpg',
    },
    {
      title: 'Web and App Development',
      description: 'Create innovative mobile apps for iOS and Android platforms.',
      image: 'path/to/mobile-app-development-image.jpg',
    },
    {
      title: 'Open Track: Build For A Good Cause!',
      description: 'Solve real-world problems using data analysis and machine learning.',
      image: 'path/to/data-science-image.jpg',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:items-center rounded-3xl ring-1 ring-gray-200 py-10 mt-10 px-10" id='tracks'>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hackathon Tracks</h2>
      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track, index) => (
          <div key={index} className="p-4 bg-white rounded-lg flex flex-col items-center relative border-2 border-indigo-500">
          
            <img className="w-24 h-24 object-cover rounded-md" src={track.image} alt={track.title} />
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-center text-gray-900">{track.title}</h3>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default HackathonTracks;
