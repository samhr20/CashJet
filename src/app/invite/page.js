'use client';
import React from 'react';
import LowerFooter from '../components/LowerFooter';
import PageNavigationBar from '../components/PageNavigationBar';
import { generateReferralCode, generateReferralLink } from '@/utils/referralUtils';

const page = () => {
    const userId = 'USER_ID_FROM_DATABASE'; // Replace with actual user ID retrieval

    // Generate referral code and link
    const referralCode = generateReferralCode(userId);
    const referralLink = generateReferralLink(referralCode);

    const copyLink = () => {
        navigator.clipboard.writeText(referralLink)
            .then(() => {
                alert('Referral link copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy the link: ', err);
            });
    };

    const copyCode = () => {
        navigator.clipboard.writeText(referralCode)
            .then(() => {
                alert('Referral code copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy the code: ', err);
            });
    };

    return (
        <div className="min-[411px]:flex min-[411px]:justify-center min-[411px]:items-center relative">
            <PageNavigationBar heading="Invite" />

            <div className='bg-white p-4 pt-[65px] pb-24 relative w-[410px] min-h-screen overflow-hidden'>
                <div className='shadow-lg p-3 rounded-lg'>
                    <h3 className='text-center mt-2 text-xl font-medium'>
                        You will earn 10% of your friend's first deposit
                    </h3>
                </div>

                <div className='mt-5 p-4 bg-gray-100 rounded-lg shadow-inner'>
                    <h4 className='text-center text-lg font-semibold'>Your Referral Link:</h4>
                    <input
                        type="text"
                        value={referralLink}
                        readOnly
                        className='w-full mt-3 p-2 border border-gray-300 rounded-lg text-center'
                    />
                    <p className='text-center mt-2 text-sm text-gray-600'>
                        Share this link with your friends to invite them!
                    </p>
                    <button 
                        className='bg-[#3485FE] text-white font-bold mt-4 p-2 rounded-lg w-full text-lg'
                        onClick={copyLink}>
                        Copy Link
                    </button>
                </div>

                <div className='mt-5 p-4 bg-gray-100 rounded-lg shadow-inner'>
                    <h4 className='text-center text-lg font-semibold'>Your Referral Code:</h4>
                    <input
                        type="text"
                        value={referralCode}
                        readOnly
                        className='w-full mt-3 p-2 border border-gray-300 rounded-lg text-center'
                    />
                    <p className='text-center mt-2 text-sm text-gray-600'>
                        Share this code with your friends to invite them!
                    </p>
                    <button 
                        className='bg-[#3485FE] text-white font-bold mt-4 p-2 rounded-lg w-full text-lg'
                        onClick={copyCode}>
                        Copy Code
                    </button>
                </div>
            </div>

            <LowerFooter />
        </div>
    );
}

export default page;
