'use client'
import React from 'react';

const PageNavigationBar = (props) => {
  const handleBack = () => {
    window.history.back(); 
  };

  return (
    <nav className='fixed top-0 w-[410px] p-4 bg-custom-gradient z-10 text-center text-2xl rounded-b-xl'>
      <button
        onClick={handleBack}
        className='text-white bg-transparent border-0 cursor-pointer absolute left-4'
      >
        &larr;
      </button>
      <h2 className='text-white'>{props.heading}</h2>
    </nav>
  );
};

export default PageNavigationBar;
