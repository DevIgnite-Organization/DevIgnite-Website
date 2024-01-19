import Navbar from '@/components/Navbar/Navbar'
import BottomBar from '@/components/bottombar/BottomBar'
import React from 'react'
import './about.css'

function page() {
  return (
    <main>
      <Navbar />
      <div className='heading'>
        About us
      </div>
      <div className='about-us-main'>
        <div className='about-us-col'>
          <div className='about-content'>
            <div className='count'>1</div>
            DevIgnite is a 24-hour Hackathon at SIGCE offering students a dynamic platform
            to collaborate and devise tech solutions for real-world challenges
          </div>
          <div className='about-content'>
          <div className='count'>2</div>

            It will serve a valuable opportunity for learning, networking and showcasing
            talent by providing participants with a chance to bring innovative ideas to life in
            just one day
          </div>
          <div className='Location'>
          <div className='count'>3</div>
            Address:<br/>
            SIGCE, Sector 8, Plot 1, Ghansoli,
            Navi Mumbai, Maharashtra 400701
          </div>

        </div>
        <div className='about-us-col'>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7257576668458!2d72.99810505011881!3d19.119683224538345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0b5f2b2f115%3A0x61de8771901c2056!2sSmt.%20Indira%20Gandhi%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1705517815060!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <BottomBar />
    </main>
  )
}

export default page
