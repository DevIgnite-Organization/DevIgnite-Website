import React from 'react';

function AboutUs() {
  return (
    <>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 " id='about'>About DevIgnite Hackathon</h2>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center rounded-3xl ring-1 ring-gray-200 py-10 px-10">
      <div className="lg:w-1/2 lg:pr-8">

        <p className="text-lg leading-8 text-gray-600 mb-6">
          DevIgnite is a 24-hour Hackathon at SIGCE offering students a dynamic platform to collaborate and devise tech solutions for real-world challenges.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Address:</h3>
        <p className="text-lg leading-8 text-gray-600 mb-6">
          SIGCE, Sector 8, Plot 1, Ghansoli, Navi Mumbai, Maharashtra 400701
        </p>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Date and Time:</h3>
        <p className="text-lg leading-8 text-gray-600 mb-6">
          2nd - 3rd March 
        </p>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Registration:</h3>
        <p className="text-lg leading-8 text-blue-600 mb-6">
          <a href='https://devignite.devfolio.co/'>Click here to Register</a>
        </p>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact</h3>
        <p className="text-lg leading-8 text-gray-600 mb-6">
        contact@devignite.tech
        </p>
      </div>

      <div className="hidden sm:flex lg:w-1/2 lg:pl-8">
        <iframe
          title="SIGCE Location"
          width="100%"
          height="600"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7161623431716!2d72.99809968512017!3d19.120103909392636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0b5f2b2f115%3A0x61de8771901c2056!2sSmt.%20Indira%20Gandhi%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1707708867813!5m2!1sen!2sin"
        ></iframe>
      </div>

      <div className="flex sm:hidden lg:w-1/2 lg:pl-8">
        <iframe
          title="SIGCE Location"
          width="100%"
          height="400"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7161623431716!2d72.99809968512017!3d19.120103909392636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0b5f2b2f115%3A0x61de8771901c2056!2sSmt.%20Indira%20Gandhi%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1707708867813!5m2!1sen!2sin"
        ></iframe>
      </div>
    </div>
    </>
   
  );
}

export default AboutUs;
