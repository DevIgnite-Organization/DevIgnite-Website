import React from 'react'
import './tracks.css'
import Navbar from '@/components/Navbar/Navbar'
import BottomBar from '@/components/bottombar/BottomBar'
function page() {
  return (
    <main className='main'>
        <Navbar />

        <BottomBar />
    </main>
  )
}

export default page