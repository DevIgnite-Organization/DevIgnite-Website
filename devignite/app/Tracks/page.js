'use client'
import React, { useState } from 'react';
import './tracks.css';
import Navbar from '@/components/Navbar/Navbar';
import BottomBar from '@/components/bottombar/BottomBar';
import Image from 'next/image';

function TrackAccordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='tracks-main'>
      <div className={`accordion ${isOpen ? 'open' : ''}`}>
        <div className="accordion-header" onClick={toggleAccordion}>
          <h2>{title}</h2>
          <span className={`arrow-icon ${isOpen ? 'rotate' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
          </span>
        </div>
        {isOpen && <div className="accordion-content">{content}</div>}
      </div>
    </div>

  );
}

function TracksPage() {
  return (
    <main className="main">
      <Navbar />
      <div className="heading">Tracks</div>
      <div className='a-main'>
        <TrackAccordion
          title="Generative AI and Machine Learning"
          content="This track focuses on the exciting field of Generative AI and Machine Learning, exploring techniques that allow computers to learn and generate new content, such as images, text, or music."
        />

        <TrackAccordion
          title="Blockchain"
          content="The Blockchain track delves into the revolutionary technology behind cryptocurrencies. Learn about decentralized ledgers, smart contracts, and the potential impact of blockchain on various industries."
        />

        <TrackAccordion
          title="Cybersecurity"
          content="In the Cybersecurity track, participants will explore the world of digital security. Learn about the latest threats, vulnerabilities, and defensive strategies to secure systems and data from cyber attacks."
        />

        <TrackAccordion
          title="Cloud and DevOps"
          content="The Cloud and DevOps track covers cloud computing and development operations. Discover how to deploy, manage, and scale applications in the cloud while incorporating DevOps practices for efficient development workflows."
        />

        <TrackAccordion
          title="Web and App Development"
          content="Participants in this track will dive into the realm of web and app development. Learn about front-end and back-end technologies, frameworks, and best practices for creating modern and responsive applications."
        />

        <TrackAccordion
          title="Open Track : Build For A Good Cause!"
          content="The Open Track invites participants to leverage their skills for a good cause. Collaborate on projects that address social, environmental, or community challenges. Make a positive impact through technology."
        />

      </div>

      <BottomBar />
    </main>
  );
}

export default TracksPage;
