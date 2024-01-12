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
                    <Link href=''>
                        Tracks
                    </Link>
                </div>
                <div className='link-box'>
                    <Link href=''>
                        Humans
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
                    <Link href=''>
                        About us
                    </Link>
                </div>
                <div className='link-box'>
                    <Link href=''>
                        FAQ
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar