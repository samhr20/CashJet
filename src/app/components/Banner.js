import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
    const imageData = [
        { id: 1, href: "/invite", src: '/invitebanner.png', height: 700, width: 700 },
        { id: 2, href: "/team", src: '/invitebanner.png', height: 700, width: 700 }
    ]
    return (
        <div className='grid grid-cols-1 gap-2 mt-5'>
            {imageData.map((image) => (
                <Link href={image.href}>
                    <Image
                        key={image.id}
                        src={image.src}
                        height={image.height}
                        width={image.width}
                        className='rounded-md cursor-pointer'
                        alt={`Banner ${image.id}`}
                    />
                </Link>
            ))}
        </div>
    )
}

export default Banner