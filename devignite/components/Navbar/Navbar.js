'use client'
import React, { useState } from 'react';
import './Navbar.css'
import Link from 'next/link'
import HamButton from './HamButton'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className='navbar-main'>

            <HamButton onClick={toggleMenu} />
            <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className='link-box'>
                    <Link href='/'>
                        Home
                    </Link>
                </div>
                <div className='link-box'>
                    <Link href='/Partners'>
                        Partners
                    </Link>
                </div>
                <div className='link-box'>
                    <Link href='/Tracks'>
                        Tracks
                    </Link>
                </div>
                <div className='link-box'>
                    <Link href='/Prizes'>
                        Prizes
                    </Link>
                </div>
                <div className='link-box'>
                    <Link href='/Teams'>
                        Teams
                    </Link>
                </div>
                <div className='link-box'>
                    <Link href=''>
                        Schedule
                    </Link>
                </div>
                {/* <div className='link-box'>
                    <Link href=''>
                        Swag
                    </Link>
                </div> */}
                <div className='link-box'>
                    <Link href='/Aboutus'>
                        About us
                    </Link>
                </div>
                <div className='link-box'>
                    <Link href='/FAQ'>
                        FAQ
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar