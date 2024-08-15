'use client'
import React from 'react'
import LowerFooter from '../components/LowerFooter'
import PageNavigationBar from '../components/PageNavigationBar'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



const page = () => {
    const [activeView, setActiveView] = useState('BANK');
    const [amount, setAmount] = useState('');
    const [password, setPassword] = useState('');
    const [usdtAmount, setUsdtAmount] = useState(0);

    const conversionRate = 0.012;

    const handleAmountChange = (e) => {
        const value = e.target.value;
        setAmount(value);
        setUsdtAmount(value * conversionRate);
    };
    return (

        <div className="min-[411px]:flex min-[411px]:justify-center min-[411px]:items-center relative" >
            <PageNavigationBar heading="Withdraw" />
            <div className='bg-white p-4 pt-20 pb-24 relative w-[410px] min-h-screen overflow-hidden '>
                <div className='shadow-lg p-3 rounded-lg'>
                    <div className='font-bold text-black flex justify-around text-xl'>
                        <button
                            className={`px-4 py-2 ${activeView === 'BANK' ? 'text-blue-500 ' : 'text-black'}`}
                            onClick={() => setActiveView('BANK')}
                        >
                            INR
                        </button>
                        <button
                            className={`px-4 py-2 ${activeView === 'USDT' ? 'text-blue-500 ' : 'text-black'}`}
                            onClick={() => setActiveView('USDT')}
                        >
                            USDT
                        </button>
                    </div>

                    {activeView === 'BANK' && (
                        <div className='p-3 flex flex-col gap-3'>
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
                            <div className='flex justify-evenly items-center'>
                                <FontAwesomeIcon icon={faLock} height={20} />
                                <input
                                    className="border outline-none rounded-lg p-1 px-3 text-black bg-[#ECF1FF] w-[80%] placeholder-[#999999]"
                                    type="password"
                                    placeholder="Please Enter the password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    )}

                    {activeView === 'USDT' && (
                        <div className='p-2 flex flex-col gap-3'>
                            <div className='flex justify-between items-center'>
                                <FontAwesomeIcon icon={faIndianRupeeSign} height={20} />
                                <input
                                    className="border outline-none rounded-lg p-1 px-3 text-black bg-[#ECF1FF] w-[200px] placeholder-[#999999]"
                                    type="number"
                                    placeholder="Enter amount in Rupees"
                                    value={amount}
                                    onChange={handleAmountChange}
                                />
                                <p className='text-sm font-semibold text-center'>
                                    USDT : {usdtAmount.toFixed(2)}
                                </p>
                            </div>
                            <div className='flex justify-evenly items-center'>
                                <FontAwesomeIcon icon={faLock} height={20} />
                                <input
                                    className="border outline-none rounded-lg p-1 px-3 text-black bg-[#ECF1FF] w-[80%] placeholder-[#999999]"
                                    type="password"
                                    placeholder="Please Enter the password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className='shadow-lg p-3 rounded-lg mt-4'>
                    <p className='text-base font-semibold my-5 '>TIP</p>
                    <div className='bg-red-200 p-3 rounded-lg'>
                        <p> Withdrawal Amount: 300-30000Rs</p>
                        <p> USDT withdrawal limit: 10000-30000Rs</p>
                    </div>
                    <div className='bg-[#EEEEEE] p-3 rounded-lg mt-3'>
                        <p>Withdrawal time: 12:00 am - 11:59 pm</p>
                    </div>

                </div>

                <button className='bg-[#3485FE] text-white font-bold mt-8 p-5 rounded-2xl w-full text-lg'>Confirm</button>

            </div>
            <LowerFooter />
        </div>

    )
}

export default page