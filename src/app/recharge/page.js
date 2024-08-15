'use client'
import React, { useState } from 'react';
import LowerFooter from '../components/LowerFooter';
import PageNavigationBar from '../components/PageNavigationBar';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

const Page = () => {
    const quickSelections = [
        1000,
        2000,
        5000,
        10000,
        20000,
        50000,
        100000
    ];

    const [amount, setAmount] = useState('');
    const [activeSelection, setActiveSelection] = useState(null);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleQuickSelection = (value) => {
        setAmount(value);
        setActiveSelection(value);
    };

    return (
        <div className="min-[411px]:flex min-[411px]:justify-center min-[411px]:items-center relative">
            <PageNavigationBar heading="Recharge" />
            <div className='bg-white p-4 pt-20 pb-24 relative w-[410px] min-h-screen overflow-hidden'>
                <div className='shadow-lg p-3 rounded-lg'>
                    <p className='text-base font-semibold my-5'>Amount</p>
                    <div className='flex justify-evenly items-center'>
                        <FontAwesomeIcon icon={faIndianRupeeSign} height={20} />
                        <input
                            className="border outline-none rounded-lg p-1 px-3 text-black bg-[#ECF1FF] w-[80%] placeholder-[#999999]"
                            type="number"
                            placeholder="Please Enter the amount"
                            value={amount}
                            onChange={handleAmountChange}
                        />
                    </div>
                    <p className='text-center my-3 text-sm font-medium text-gray-400'>Quick Selection</p>
                    <div className='grid grid-cols-4 gap-3 p-3'>
                        {quickSelections.map((data, i) => (
                            <button
                                className={`border-2 border-blue-500 rounded-lg p-1 px-2 ${activeSelection === data ? 'bg-blue-500 text-white' : 'bg-white'}`}
                                key={i}
                                onClick={() => handleQuickSelection(data)}
                            >
                                {data}
                            </button>
                        ))}
                    </div>
                </div>
                <button className='bg-[#3485FE] text-white font-bold mt-8 p-5 rounded-2xl w-full text-lg'>Confirm</button>
            </div>
            <LowerFooter />
        </div>
    );
};

export default Page;
