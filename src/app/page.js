'use client'
import React, { useState, useEffect } from 'react';
import UpperNavbar from './components/UpperNavbar';
import Swiper from './components/swiper/Swiper';
import Section from './components/Section';
import Banner from './components/Banner';
import LowerFooter from './components/LowerFooter';
import WelcomePopup from './components/homePopup/WelcomePopup';
import { Provider } from 'react-redux';
import store from '@/store/store';



const Page = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        setPopupVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setPopupVisible(false);
    setTimeout(() => setShowPopup(false), 500);
    sessionStorage.setItem('hasSeenPopup', 'true');
  };

  return (
    <Provider store={store}>
    <div className="min-[411px]:flex min-[411px]:justify-center min-[411px]:items-center">
      <UpperNavbar />
      <div className='bg-white p-4 pb-24 relative w-[410px] min-h-screen overflow-hidden'>
        <div className='relative'>
          <Swiper />
          <Section />
          <Banner />
        </div>
      </div>
      
      <LowerFooter />
      {showPopup && <WelcomePopup onClose={handleClosePopup} />}
    </div>
    </Provider>
  );
};

export default Page;
