import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isSubtitleAnimating, setIsSubtitleAnimating] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    // Start animation after 10 seconds
    const initialTimeout = setTimeout(() => {
      setIsAnimating(true)
      
      // Stop animation after 2 seconds (duration of one cycle)
      setTimeout(() => {
        setIsAnimating(false)
      }, 2000)
      
      // Repeat every 30 seconds
      const interval = setInterval(() => {
        setIsAnimating(true)
        setTimeout(() => {
          setIsAnimating(false)
        }, 2000)
      }, 30000)
      
      return () => clearInterval(interval)
    }, 10000)
    
    return () => clearTimeout(initialTimeout)
  }, [])

  useEffect(() => {
    // Start subtitle animation after 60 seconds
    const initialTimeout = setTimeout(() => {
      setIsSubtitleAnimating(true)
      
      // Stop animation after 2 seconds (duration of one cycle)
      setTimeout(() => {
        setIsSubtitleAnimating(false)
      }, 2000)
      
      // Repeat every 20 seconds
      const interval = setInterval(() => {
        setIsSubtitleAnimating(true)
        setTimeout(() => {
          setIsSubtitleAnimating(false)
        }, 2000)
      }, 20000)
      
      return () => clearInterval(interval)
    }, 60000)
    
    return () => clearTimeout(initialTimeout)
  }, [])

  return (
    <>
      <Head>
        <title>Xonno - Get Xonno Get Paid</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap" rel="stylesheet" />
      </Head>

      {/* Mobile Menu */}
      <aside className={`fixed top-0 left-0 h-full w-full bg-[#0C1A46] z-50 shadow-lg p-4 transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'translate-x-0 opacity-100' 
          : '-translate-x-full opacity-0'
      }`}>
        <div className="flex justify-between items-center mb-[30px]">
          <Image src="/xonno-logo.svg" className="w-[125px] md:w-60" alt="logo" width={240} height={60} />
          <button onClick={closeMobileMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <nav>
          <ul className="space-y-[30px]">
            <li>
              <a className="text-lg text-white" href="#">Read Our Litepaper</a>
            </li>
            <li>
              <a className="text-lg text-white" href="#">Community</a>
            </li>
          </ul>
        </nav>
      </aside>

      <section className="min-h-screen relative bg-[linear-gradient(107.1deg,#121212_4.36%,#0C1D49_105.71%)]">
        <div className="sm:bg-[url('/bg-pattern.svg')] bg-none w-full h-full inset-0 absolute"></div>
        
        <div className="bg-[linear-gradient(180deg,rgba(11,23,83,0)_0%,rgba(11,23,83,0.64)_43.94%)] -rotate-180 absolute inset-0 z-10"></div>

        <div className="sm:px-5 xl:px-0">
          <div className="px-[20px] sm:max-w-[1315px] relative z-20 pt-2.5 w-full mx-auto">
            <div className="flex justify-between items-center sm:h-[5.8125rem] gap-3 sm:gap-5 mb-[33px] sm:mb-0 mt-[20px] sm:mt-0">
              <a href="/">
                <Image src="/xonno-logo.svg" className="w-[125px] md:w-60" alt="logo" width={240} height={60} />
              </a>
              <div className="flex items-center gap-[20px] sm:gap-5 grow sm:grow-0 md:gap-[1.875rem] justify-end sm:justify-baseline">
                <a className="text-white !hidden lg:!block font-semibold hover-underline-animation left text-[17px] hover:scale-105 transition-all duration-300" href="#">
                  Read Our Litepaper
                </a>
              
                <a className="rounded-full border hidden lg:flex border-white w-[38px] h-[38px] flex justify-center items-center hover:scale-105 transition-all duration-300" href="https://x.com/">
                  <Image src="/icon-x.svg" alt="twitter" width={16} height={16} />
                </a>

                <a className="rounded-full hidden lg:flex cursor-pointer border border-white w-[38px] h-[38px] flex justify-center items-center hover:scale-105 transition-all duration-300" href="https://web.telegram.org/">
                  <Image src="/icon-telegram.svg" alt="telegram" width={16} height={16} />
                </a>

                <a className="tracking-wide text-[#CB8D02] text-[12px] sm:text-[17px] font-semibold hover:bg-[#CB8D02] border transition duration-100 border-[#CB8D02] py-[8px] px-[8px] sm:px-[17px] rounded-full hover:text-white" href="#">
                  Presale Coming Soon
                </a>
                
                <button onClick={toggleMobileMenu} className="lg:hidden">
                  <Image src="/humburger.svg" alt="menu" className="w-[30px]" width={30} height={30} />
                </button>
              </div>
            </div>
          
            <div className="flex flex-col justify-between gap-[30px]">
              <div className="flex flex-col items-center md:gap-0">
                <h1 className={`text-center sm:leading-[5.75rem] md:leading-[7.1875rem] leading-[70px] text-[64px] sm:text-[4.75rem] md:text-[5.9375rem] font-semibold bg-[linear-gradient(90deg,#75767A_0%,#FFFFFF_31%,_#FFFFFF_69%,#75767A_100%)] ${styles.gradientText} transition-all duration-1000 ease-in-out ${
                  isAnimating 
                    ? 'animate-pulse scale-[1.02] drop-shadow-[0_0_20px_rgba(203,141,2,0.3)]' 
                    : 'scale-100'
                }`}>
                  Get Xonno <br /> Get Paid
                </h1>

                <div className={`font-semibold text-center mb-[36px] md:mb-[63px] mt-[36px] md:mt-[41px] text-[18px] sm:text-[1.65rem] lg:text-[2rem] text-white transition-all duration-1000 ease-in-out ${
                  isSubtitleAnimating 
                    ? 'animate-pulse scale-[1.02] drop-shadow-[0_0_20px_rgba(203,141,2,0.3)]' 
                    : 'scale-100'
                }`}>
                  Predict, trade, or stake to grow your wallet.
                </div>
        
                <div className="relative block md:hidden w-[123px] mx-auto mb-[19px]">
                  <Image src="/arrow-mobile-down.svg" alt="vector-1" width={123} height={20} />
                </div>
            
                <div className="flex flex-col items-center gap-[25px] lg:mt-[15px] md:mt-0">
                  <div className="flex flex-col mx-auto justify-center items-center gap-0.5 md:gap-[15px]">
                    <h2 className={`font-semibold text-[20px] md:mx-0 max-w-[16rem] sm:max-w-[23rem] lg:max-w-[17.75rem] w-full text-[#CB8D02] sm:text-[1.45rem] lg:text-[1.8125rem] text-center relative ${styles.linePattern}`}>
                      Unlock 30% Bonus
                    </h2>
                    <div className="text-base sm:text-lg text-center leading-[33px] text-[#FFFFFFCC]">
                      Enter your email to get presale alert
                    </div>
                  </div>
                </div>
                
                <div className="max-w-[352px] sm:max-w-[460px] w-full mt-[24px] md:mt-[46px] lg:pb-[72px]">
                  <div className="border-1 sm:border-2 max-w-[460px] border-white rounded-full w-full justify-between flex p-1.5 sm:p-2.5">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="grow px-2 sm:text-lg outline-none sm:placeholder:text-lg text-white placeholder:text-white bg-transparent"
                    />
                    <div className="text-[#CB8D02] font-semibold text-sm sm:text-base hover:bg-[#CB8D02] cursor-pointer max-w-[125px] w-full text-center py-2 px-0 sm:px-4 rounded-full border transition duration-100 border-[#CB8D02] hover:text-white">
                      Notify Me
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center md:hidden gap-[1.875rem] mt-[30px]">
                  <a className="rounded-full border border-white w-[50px] h-[50px] flex justify-center items-center hover:scale-105 transition-all duration-300" href="https://x.com/">
                    <Image src="/icon-x.svg" alt="twitter" width={20} height={20} />
                  </a>
      
                  <a className="rounded-full cursor-pointer border border-white w-[50px] h-[50px] flex justify-center items-center hover:scale-105 transition-all duration-300" href="https://web.telegram.org/">
                    <Image src="/icon-telegram.svg" alt="telegram" width={20} height={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="">
          <div className="h-[7px] bg-[#D9D9D9] block inset-x-0 md:bottom-[87px] md:mt-0 mt-[30px] z-10"></div>
        </div>

        <Image src="/arrow-right.svg" className="fixed z-10 left-0 top-[156px] hidden md:block" alt="" width={40} height={40} />
      </section>
    </>
  )
} 