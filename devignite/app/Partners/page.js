// partners.js
'use client'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import './partners.css';
import Image from 'next/image';
import BottomBar from '@/components/bottombar/BottomBar';

function Partners() {
    const [activeTab, setActiveTab] = useState('sponsors');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='partners-main'>
            <Navbar />
            <div className='heading'>
                Partners
            </div>
            <div className='partners-container'>
                <div className='tabs-container'>
                    <div
                        className={`tab ${activeTab === 'sponsors' ? 'active' : ''}`}
                        onClick={() => handleTabClick('sponsors')}
                    >
                        Sponsors
                    </div>
                    <div
                        className={`tab ${activeTab === 'communityPartners' ? 'active' : ''}`}
                        onClick={() => handleTabClick('communityPartners')}
                    >
                        Community Partners
                    </div>
                </div>

                <div className='content-container'>
                    {activeTab === 'sponsors' && (
                        // Render content for the Sponsors tab
                        <div className='sponsors-main'>
                            <div className='platinum-div'>
                                <div className='heading-p-d'>
                                    Platinum
                                </div>
                                <div className='platinum-logo-div'>
                                    <Image
                                        src='/Devfolio_Logo-Black.png'
                                        width='500'
                                        height='500'
                                        alt='DEVFOLIO LOGO'
                                    />
                                </div>
                            </div>
                            <div className='gold-div'>
                                <div className='heading-p-d'>
                                    Gold
                                </div>
                                <div className='gold-logo-group'>
                                <div className='gold-logo-div'>
                                    <Image
                                        src='/polygon_Logo-Dark.png'
                                        width='500'
                                        height='500'
                                        alt='DEVFOLIO LOGO'
                                    />
                                </div>
                                <div className='gold-logo-div'>
                                    <Image
                                        src='/Replit-light-background.png'
                                        width='500'
                                        height='500'
                                        alt='DEVFOLIO LOGO'
                                    />
                                </div>
                                </div>
                               
                            </div>
                        </div>
                    )}

                    {activeTab === 'communityPartners' && (
                        // Render content for the Community Partners tab
                        <div>
                            {/* ... */}
                            <p></p>
                        </div>
                    )}
                </div>
            </div>
            <BottomBar />
        </div>
    );
}

export default Partners;
