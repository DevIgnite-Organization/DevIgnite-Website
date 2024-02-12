// HackathonTracks.js

import React from 'react';

const HackathonTracks = () => {
  const tracks = [
    {
      title: 'Generative AI and Machine Learning',
      description: 'Build modern web applications using cutting-edge technologies.',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*H960YADqR9a9jkQldMSeKQ.jpeg',
    },
    {
      title: 'Blockchain',
      description: 'Create innovative mobile apps for iOS and Android platforms.',
      image: 'https://www.analyticsinsight.net/wp-content/uploads/2023/04/How-Can-You-Secure-the-Internet-of-Things-with-Blockchain-Technology.jpg',
    },
    {
      title: 'Cybersecurity',
      description: 'Solve real-world problems using data analysis and machine learning.',
      image: 'https://www.shutterstock.com/image-vector/access-control-fingerprint-security-cybersecurity-600nw-2274134989.jpg',
    },

    {
      title: 'Cloud and DevOps',
      description: 'Build modern web applications using cutting-edge technologies.',
      image: 'https://t4.ftcdn.net/jpg/03/40/60/71/360_F_340607159_4hQZvz4h2tPe9jt7fZRJYIq7x8CWL7GG.jpg',
    },
    {
      title: 'Web and App Development',
      description: 'Create innovative mobile apps for iOS and Android platforms.',
      image: 'https://www.cerebruminfotech.com/blog/wp-content/uploads/2022/08/Build-a-Web-App.png',
    },
    {
      title: 'Open Track: Build For A Good Cause!',
      description: 'Solve real-world problems using data analysis and machine learning.',
      image: 'https://img.freepik.com/free-vector/hand-drawn-innovation-concept_52683-76273.jpg',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:items-center rounded-3xl ring-1 ring-gray-200 py-10 mt-10 px-10" id='tracks'>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hackathon Tracks</h2>
      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track, index) => (
        <div key={index} className="p-4 bg-white rounded-lg flex flex-col items-center relative sm:border-2 sm:border-indigo-500">


            <img className="w-24 h-24 object-cover rounded-full" src={track.image} alt={track.title} />
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
