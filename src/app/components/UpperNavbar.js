'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';



const UpperNavbar = () => {

  const balance = useSelector((state) => state.balance.balance);

  return (
    <nav className='fixed top-0 w-[410px] flex justify-between items-center p-2 bg-white z-10 border-b-2 rounded-b-xl'>
      <p className='font-semibold text-lg'>&#8377;{balance}</p>
      <Link href="/" passHref>
        <Image
          src="/CashJetLogo.png"
          height={120}
          width={120}
          className='cursor-pointer'
          alt="CashJet Logo"
        />
      </Link>
      <Image
        src="/india.jpeg"
        height={30}
        width={30}
        className='rounded-full cursor-pointer'
        alt="Profile"
      />
    </nav>
  );
};

export default UpperNavbar;
