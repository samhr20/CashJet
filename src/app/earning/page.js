import React from 'react'
import LowerFooter from '../components/LowerFooter'
import PageNavigationBar from '../components/PageNavigationBar'


const page = () => {
    return (
        
            <div className="min-[411px]:flex min-[411px]:justify-center min-[411px]:items-center relative" >
                <PageNavigationBar heading="Earning" />
                <div className='bg-white p-4 pt-14 pb-24 relative w-[410px] min-h-screen overflow-hidden'>
                
                </div>
                <LowerFooter />
            </div>
        
    )
}

export default page