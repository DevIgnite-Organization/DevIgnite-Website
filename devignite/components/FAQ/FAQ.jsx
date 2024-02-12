'use client'
import React, { useState } from 'react';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: 'Team Size?',
            answer: '2-4 Members',
        },
        {
            question: 'Registration costs?',
            answer: 'Free Registration.',
        },
        {
            question: 'Is This Hackathon Beginner Friendly?',
            answer: 'Yes, this hackathon is beginner friendly where we cater to newcomers with a great deal of attention.',
        },
        {
            question: 'How will participating in Devignite benefit?',
            answer: 'DevIgnite will feature sessions by experienced speakers, engaging workshops, and mentors to inspire attendees in all spheres of tech. Participants can contribute to projects in diverse fields, including AI, ML, Web and App development, BlockChain, Social Cause, Cybersecurity, Cloud & DevOps. We support original ideas with free patent assistance, emphasizing scalability.',
        },
        {
            question: 'What are the eligibility criteria for participation in Devignite?',
            answer: 'Anyone and everyone who is a tech enthusiast and an avid learner is encouraged to participate. There are no specific eligibility criteria as such. From students to working professionals, an avid interest in engaging and contributing to the community is all that DevIgnite looks for in its participants. So, if you want to explore, network, and contribute to exciting projects, you are welcome.',
        },
        {
            question: 'When and Where is the event happening?',
            answer: 'DevIgnite is tentatively scheduled to be hosted in the first week of March. The venue is Smt. Indira Gandhi College of Engineering Ghansoli, Navi Mumbai.',
        },
        {
            question: 'Can we Leave the Campus After Hackathon Starts?',
            answer: 'The hackathon is scheduled to last for 24 hours, during which participants are encouraged to stay on campus for an uninterrupted experience. However, if participants choose to go outside the college campus, they do so at their own discretion and assume responsibility for any consequences. Accommodation and meal facilities will be provided on campus, ensuring convenience for those who opt to stay. Team DevIgnite is fully committed to addressing any urgent requirements of participants, aiming to facilitate a smooth and enjoyable experience throughout the event.',
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto px-4 sm: py-20" id='FAQ'>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleAccordion(index)}
                        >
                            <h3 className="text-lg font-semibold">{item.question}</h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-6 w-6 transition-transform transform ${openIndex === index ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                        {openIndex === index && (
                            <p className="text-gray-600 mt-4">{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;
