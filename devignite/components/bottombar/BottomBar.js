import React from 'react'
import './Bottombar.css'
import Link from 'next/link'
function BottomBar() {
    return (
        <div className='bottom-bar-main'>
            <div className='social_meadia_main'>
                <Link href=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </Link>
            </div>
            <div className='copy-right-main'>
                Design and Developed by team Devignite
            </div>
        </div>
    )
}

export default BottomBar
