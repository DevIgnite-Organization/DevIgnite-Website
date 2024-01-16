import Navbar from '@/components/Navbar/Navbar';
import './page.css'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import BottomBar from '@/components/bottombar/BottomBar';
export default function Home() {
  return (
    <main className='main'>
      {/* navbar component */}
      <Navbar />
      <div className='homepage-master'>
        {/* <div className='image-div_l'>
          <Image
            className='metallic-1'
            src='/metallic-1.png'
            width='500'
            height='500'
            alt='devignite'
          />
        </div>
        <div className='image-div_r'>
          <Image
            className='metallic-2'
            src='/metallic-2.png'
            width='500'
            height='500'
            alt='devignite'
          />
        </div> */}
      </div>
      <div className='hero'>
        <div className='hero-col'>
          <div className='for-logos'>
            <div className='devig_logo'>
              <Image
                src='/dev_ig.png'
                width='500'
                height='500'
                alt='Dev_ig'
              />
            </div>
            <div className='sigce_logo'>
              <Image
                src='/sigce.png'
                width='500'
                height='500'
                alt='Dev_ig'
              />
            </div>
          </div>
        </div>
        <div className='hero-col-text-1'>
          Smt. Indira Gandhi College of Engineering
        </div>
        <div className='hero-col-text-2'>
          Presents
        </div>
        <div className='hero-col'>
          <div className='main-title'>
            DEVIGNITE
          </div>
        </div>
        <div className='hero-col-slogan'>
          "Where Code Ignite Innovation"
        </div>
        <div className='hero-col-date'>
          2nd - 3rd March 2024
        </div>
        <div className='hero-col-link'>
          <Link href='https://devignite.devfolio.co/'>
          <div className='dev-f-logo'>
            <Image
              src='/Devfolio_Logo-White.png'
              width='500'
              height='500'
              alt='DEVFOLIO LOGO'
            />
            </div>
            Apply with Devfolio
                    
          </Link>
        </div>

        <h2>

        </h2>
      </div>
      <BottomBar />
    </main>
    
  )
}
