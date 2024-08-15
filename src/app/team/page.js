'use client'
import React, { useState } from 'react'
import LowerFooter from '../components/LowerFooter'
import PageNavigationBar from '../components/PageNavigationBar'

const page = () => {
    const invitationData = [
        { title: "Team size ", number: "0" },
        { title: "Deposit members ", number: "0" },
        { title: "Team size today ", number: "0" },
        { title: "Effective size today ", number: "0" },
        { title: "Team deposit ", number: "0", rs: "₹" },
        { title: "Team withdrawl ", number: "0", rs: "₹" },
    ]

    const incomeData = [
        { title: "Today's income", number: "0", rs: "₹" },
        { title: "Total revenue", number: "0", rs: "₹" }
    ]

    const [activeView, setActiveView] = useState('Level 1')
    return (

        <div className="min-[411px]:flex min-[411px]:justify-center min-[411px]:items-center relative" >
            <PageNavigationBar heading="My Team" />

            <div className='bg-white  pt-[65px] pb-24 relative w-[410px] min-h-screen overflow-hidden'>
                <div className=' w-[410px] p-4  bg-[#6595FD] rounded-lg grid grid-cols-2 '>
                    {invitationData.map((data, i) => (
                        <div key={i} className='grid grid-cols-1 place-items-center text-white'>
                            <h4 className='font-bold' >{data.title}</h4>
                            <span className='font-medium'>
                                {data.rs ? `${data.rs}${data.number}` : data.number}
                            </span>
                        </div>
                    ))}
                </div>
                <div className=' w-[410px] p-2 mt-[1px] bg-[#7ADAEB] rounded-lg grid grid-cols-2 '>
                    {incomeData.map((data, i) => (
                        <div key={i} className='grid grid-cols-1 place-items-center text-white'>
                            <h4 className='font-bold' >{data.title}</h4>
                            <span className='font-medium'>
                                {data.rs}{data.number}
                            </span>
                        </div>
                    ))}
                </div>
                <div className='bg-white p-4 relative w-[410px] overflow-hidden'>
                    <div className='font-semibold text-black flex justify-around text-base'>
                        <button
                            className={`px-4 py-2 ${activeView === 'Level 1' ? 'text-blue-500 ' : 'text-black'}`}
                            onClick={() => setActiveView('Level 1')}
                        >
                            Level 1
                        </button>
                        <button
                            className={`px-4 py-2 ${activeView === 'Level 2' ? 'text-blue-500 ' : 'text-black'}`}
                            onClick={() => setActiveView('Level 2')}
                        >
                            Level 2
                        </button>
                        <button
                            className={`px-4 py-2 ${activeView === 'Level 3' ? 'text-blue-500 ' : 'text-black'}`}
                            onClick={() => setActiveView('Level 3')}
                        >
                            Level 3
                        </button>
                    </div>

                    <hr className='my-3 '/>

                    {activeView === 'Level 1' && (
                        <p className='text-center'>Nothing to show in level 1 </p>
                    )}
                    {activeView === 'Level 2' && (
                        <p className='text-center'>Nothing to show in level 2</p>
                    )}
                    {activeView === 'Level 3' && (
                        <p className='text-center'>Nothing to show in level 3</p>
                    )}
                </div>
            </div>
            <LowerFooter />
        </div>

    )
}

export default page