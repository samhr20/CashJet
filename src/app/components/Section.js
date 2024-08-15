import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const imageData = [
    { href: "/recharge", src: '/recharge.jpg', height: 185, width: 185 },
    { href: "withdraw", src: '/withdraw.jpeg', height: 185, width: 185 },
    { href: "service", src: '/service.jpeg', height: 185, width: 185 },
    { href: "https://telegram.me/sambetshere", src: '/telegram.avif', height: 185, width: 185 },
];

const Section = () => {
    return (
        <div className='grid grid-cols-2 gap-3 mt-5'>
            {imageData.map((image, i) => (
                <Link href={image.href} key={i}>
                    <Image
                        src={image.src}
                        height={image.height}
                        width={image.width}
                        className='rounded-md cursor-pointer'
                    />
                </Link>
            ))}
        </div>
    );
};

export default Section;
