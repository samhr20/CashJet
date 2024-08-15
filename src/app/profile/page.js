'use client'
import React, { useState, useEffect } from 'react';
import LowerFooter from '../components/LowerFooter';
import Image from 'next/image';
import Link from 'next/link';
import { generateReferralCode } from '@/utils/referralUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faBars, faArrowRight, faBolt ,faArrowUp , faBank ,faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Page = () => {
    const balance = useSelector((state) => state.balance.balance);

    const [daysLeft, setDaysLeft] = useState(180);
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [isLastDay, setIsLastDay] = useState(false);

    const userId = 'USER_ID_FROM_DATABASE';
    const referralCode = generateReferralCode(userId);

    const copyCode = () => {
        navigator.clipboard.writeText(referralCode)
            .then(() => {
                alert('Referral Code copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy the Code: ', err);
            });
    }

    useEffect(() => {
        const storedDaysLeft = localStorage.getItem('daysLeft');
        const lastSaveTime = localStorage.getItem('lastSaveTime');

        if (storedDaysLeft && lastSaveTime) {
            const elapsedTime = Date.now() - new Date(lastSaveTime).getTime();
            const daysElapsed = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
            const remainingDays = Math.max(parseInt(storedDaysLeft) - daysElapsed, 1);
            setDaysLeft(remainingDays);

            if (remainingDays === 1) {
                setIsLastDay(true);
            }
        }

        if (daysLeft > 1) {
            const calculateDaysLeft = () => {
                setDaysLeft((prevDays) => {
                    const newDays = prevDays > 1 ? prevDays - 1 : 1;
                    localStorage.setItem('daysLeft', newDays);
                    localStorage.setItem('lastSaveTime', new Date().toISOString());
                    return newDays;
                });
            };
            const dayTimer = setInterval(calculateDaysLeft, 86400000); // 24 hours per day
            return () => clearInterval(dayTimer); // Clean up the interval on component unmount
        } else {
            setIsLastDay(true);
        }
    }, [daysLeft]);

    useEffect(() => {
        if (isLastDay) {
            const storedTimeLeft = localStorage.getItem('timeLeft');
            const lastSaveTime = localStorage.getItem('lastSaveTime');

            if (storedTimeLeft && lastSaveTime) {
                const parsedTimeLeft = JSON.parse(storedTimeLeft);
                const elapsedTime = Date.now() - new Date(lastSaveTime).getTime();

                const secondsElapsed = Math.floor(elapsedTime / 1000);
                let newHours = parsedTimeLeft.hours;
                let newMinutes = parsedTimeLeft.minutes;
                let newSeconds = parsedTimeLeft.seconds - secondsElapsed;

                if (newSeconds < 0) {
                    newMinutes -= Math.ceil(Math.abs(newSeconds) / 60);
                    newSeconds = (newSeconds % 60 + 60) % 60;
                }
                if (newMinutes < 0) {
                    newHours -= Math.ceil(Math.abs(newMinutes) / 60);
                    newMinutes = (newMinutes % 60 + 60) % 60;
                }
                if (newHours < 0) {
                    newHours = 0;
                    newMinutes = 0;
                    newSeconds = 0;
                }
                setTimeLeft({ hours: newHours, minutes: newMinutes, seconds: newSeconds });
            } else {
                setTimeLeft({ hours: 23, minutes: 59, seconds: 59 });
            }

            const calculateTimeLeft = () => {
                setTimeLeft((prevTime) => {
                    const newTime = {
                        hours: prevTime.hours,
                        minutes: prevTime.minutes,
                        seconds: prevTime.seconds - 1
                    };
                    if (newTime.seconds < 0) {
                        newTime.seconds = 59;
                        newTime.minutes -= 1;
                    }
                    if (newTime.minutes < 0) {
                        newTime.minutes = 59;
                        newTime.hours -= 1;
                    }
                    if (newTime.hours < 0) {
                        newTime.hours = 0;
                        newTime.minutes = 0;
                        newTime.seconds = 0;
                    }
                    localStorage.setItem('timeLeft', JSON.stringify(newTime));
                    localStorage.setItem('lastSaveTime', new Date().toISOString());
                    return newTime;
                });
            };

            const timeTimer = setInterval(calculateTimeLeft, 1000); // Update every second

            return () => clearInterval(timeTimer); // Clean up the interval on component unmount
        }
    }, [isLastDay]);

    const buttonsSetion = [
        { href: "/rechargeRecord", icon: faBolt, title: "Recharge record", arrow: faArrowRight },
        { href: "/withdrawlRecord", icon: faArrowUp, title: "Withdrawl record", arrow: faArrowRight },
        { href: "/bankCard", icon: faBank, title: "Bank card", arrow: faArrowRight },
        { href: "/invite", icon: faPeopleGroup, title: "Invite friends", arrow: faArrowRight }
    ];
    

    return (
        <div className="min-[411px]:flex min-[411px]:justify-center min-[411px]:items-center relative">
            <div className='bg-custom-gradient fixed top-0 z-10 w-[410px] py-6 pb-5  p-4 overflow-hidden rounded-b-xl'>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <Image src={"/favicon.png"} height={50} width={50} className='rounded-full' alt="Profile Picture" />
                        <div className='text-white text-xl'>
                            <p>8278568770</p>
                            <p>Invite: {referralCode} <FontAwesomeIcon icon={faCopy} className='cursor-pointer' onClick={copyCode} /></p>
                        </div>
                    </div>
                    <div>
                        <Link href={"/setting"}>
                            <FontAwesomeIcon icon={faBars} className='cursor-pointer text-white text-2xl' />
                        </Link>
                    </div>
                </div>

                <div className='flex justify-around mt-7 text-white text-lg text-center'>
                    <div>
                        {isLastDay ? (
                            <p>Lock in for : {`${timeLeft.hours}H ${timeLeft.minutes}M ${timeLeft.seconds}S`}</p>
                        ) : (
                            <p>Lock in for : {daysLeft} days</p>
                        )}
                        <p>&#8377;{balance}</p>
                    </div>
                    <div>
                        <p>Balance</p>
                        <p>&#8377;12000</p>
                    </div>
                </div>
            </div>
            <div className='bg-white p-2 pt-[185px] pb-24 relative w-[410px] min-h-screen overflow-hidden text-black'>
                {buttonsSetion.map((data, i) => (
                    <Link key={i} href={data.href} >
                        <button className='flex justify-between items-center w-full border-b-2 p-4'>
                            <span className='text-lg flex gap-3 items-center'><FontAwesomeIcon icon={data.icon} className='cursor-pointer' />{data.title}</span>
                            <FontAwesomeIcon icon={data.arrow} className='cursor-pointer' />
                        </button>
                    </Link>
                ))}
            </div>
            <LowerFooter />
        </div>
    );
}

export default Page;
