import React from 'react'
import LowerFooter from '../components/LowerFooter'
import PageNavigationBar from '../components/PageNavigationBar'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
    const services = [
        { href : "https://telegram.me/sambetshere" , src : '/telegramlogo.png' , height : 30 , width : 30, text : "Recharge Question"},
        { href : "https://telegram.me/sambetshere" , src : '/telegramlogo.png' , height : 30 , width : 30, text : "Withdrawal Question"},
        { href : "https://telegram.me/sambetshere" , src : '/telegramlogo.png' , height : 30 , width : 30, text : "Bank Change"},
        { href : "https://telegram.me/sambetshere" , src : '/telegramlogo.png' , height : 30 , width : 30, text : "Password Change"},
        { href : "https://telegram.me/sambetshere" , src : '/telegramlogo.png' , height : 30 , width : 30, text : "CashJet Salary Application"},
        { href : "https://telegram.me/sambetshere" , src : '/telegramlogo.png' , height : 30 , width : 30, text : "CashJet Telegram Channel"},
    ]
    return (

        <div className="min-[411px]:flex min-[411px]:justify-center min-[411px]:items-center relative" >
            <PageNavigationBar heading="Service" />
            <div className='bg-white p-4 pt-20 pb-24 relative w-[410px] min-h-screen overflow-hidden'>
                <div className='shadow-lg p-3 rounded-lg'>
                    {services.map((data , i )=>(
                        <Link href={data.href} className='flex gap-3 p-2 '>
                            <Image src={data.src} 
                            height={data.height}
                            width={data.width}
                            className='rounded-full'/>
                            <p>{data.text}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <LowerFooter />
        </div>

    )
}

export default page