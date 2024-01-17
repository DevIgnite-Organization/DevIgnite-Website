import React from 'react'
import './prizes.css'
import Navbar from '@/components/Navbar/Navbar'
import BottomBar from '@/components/bottombar/BottomBar'
import Image from 'next/image'
function page() {
  return (
    <main className='main'>
      <Navbar />
      <div className="heading">Prizes</div>
      <div className='prizes-main'>
        <div className='prizes-img'>
          <Image
            src="/prize.png"
            width="500"
            height="500"
            alt="prize"
          />
        </div>
        <div className='prize-alert'>
          Comming Soon...
        </div>
      </div>
      <BottomBar />
    </main>
  )
}

export default page