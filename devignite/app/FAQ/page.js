'use client'
import React, { useState } from 'react';
import './faq.css';
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
      <div className="heading">FAQ</div>
      <div className='a-main'>
        <TrackAccordion
          title="Team Size?"
          content="3-4"
        />
        <TrackAccordion
          title="Registration costs??"
          content="Nada."
        />
        <TrackAccordion
          title="Is This Hackathon Biginner Friendly?"
          content="Yes, this hackathon is beginner friendly where we cater to new comers with a great deal of attention."
        />

        <TrackAccordion
          title="How will participating in Devignite benefit?"
          content="DevIgnite will feature sessions by experienced speakers, engaging workshops, and mentors to inspire attendees in all spheres of tech. Participants can contribute to projects in diverse fields, including AI, ML, Web and App development, BlockChain, Social Cause, Cybersecurity, Cloud & DevOps. We support original ideas with free patent assistance, emphasizing scalability."
        />

        <TrackAccordion
          title="What are the eligibility criteria for participation in Devignite?"
          content="Anyone and everyone who is a tech enthusiast and an avid learner is encouraged to participate. There are no specific eligibility criteria as such. From students to working professionals, an avid interest in engaging and contributing to the community is all that DevIgnite looks for in its participants.
          So, if you want to explore, network, and contribute to exciting projects, you are welcome."
        />

        <TrackAccordion
          title="When and Where is the event happening?"
          content="DevIgnite is tentatively scheduled to be hosted in the first week of March. The venue is Smt. Indira Gandhi College of Engineering Ghansoli, Navi Mumbai."
        />

        <TrackAccordion
          title="How is the Cost to Participate?"
          content="DevIgnite always will be a free event. You won't need to pay anything to participate in this hackathon."
        />

        <TrackAccordion
          title="Can we Leave the campus After Hackathon starts?"
          content="The hackathon is scheduled to last for 24 hours, during which participants are encouraged to stay on campus for an uninterrupted experience. However, if participants choose to go outside the college campus, they do so at their own discretion and assume responsibility for any consequences. Accommodation and meal facilities will be provided on campus, ensuring convenience for those who opt to stay. Team DevIgnite is fully committed to addressing any urgent requirements of participants, aiming to facilitate a smooth and enjoyable experience throughout the event."
        />

      </div>

      <BottomBar />
    </main>
  );
}

export default TracksPage;
