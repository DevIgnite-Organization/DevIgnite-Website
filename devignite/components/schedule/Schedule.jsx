import React from 'react';

const Schedule = ({ events }) => {
  return (
    <div className="bg-white mt-8 shadow overflow-hidden sm:rounded-md" id='schedule'>
      {events.map((day, index) => (
        <div key={index} className={`${index !== 0 ? 'mt-8' : ''}`}>
          <h2 className="text-xl font-bold px-4 pt-4 text-center">{day.date}</h2>
          {day.events.map((event, index) => (
            <div key={index} className="border-b border-gray-200">
              <div className="px-4 py-5 sm:px-6 flex justify-center items-center flex-col">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{event.time}</h3>
                <p className="mt-1 max-w-2xl text-base text-center text-gray-500">{event.name}</p>

              </div>

            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const HackathonSchedule = () => {
  const days = [
    {
      date: 'Day 1',
      events: [
        { time: '08:00 AM - 10:00 AM', name: 'Morning Registration' },
        { time: '10:00 AM - 11:00 AM', name: 'Opening Ceremony' },
        { time: '11:00 AM', name: 'Hackathon Kickoff' },
        { time: '01:00 PM - 02:30 PM', name: 'Lunch' },
        { time: '05:00 PM - 06:00 PM', name: 'Snack & Tea' },
        { time: '09:00 PM - 10:00 PM', name: 'Dinner' },
      ]
    },
    {
      date: 'Day 2',
      events: [
        { time: '03:00 AM - 04:00 AM', name: 'Mid-Night Snack' },
        { time: '8:00 AM - 9:00 AM', name: 'Breakfast' },
        { time: '10:50 AM - 11.00 AM', name: 'Hackathon Submission' },
        { time: '12.30 PM - 01.30 PM', name: 'Lunch' },
        { time: '01.30 PM onwards ', name: 'Final Round, Results and Closing Ceremony' },
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center">
      <div className="w-full lg:w-2/3">
        <h2 className="text-3xl  text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Hackathon Schedule</h2>
        <Schedule events={days} />
      </div>
    </div>
  );
};

export default HackathonSchedule;
