import React from 'react'
import Link from 'next/link'

const LowerFooter = () => {
  const UlList = [
    { href: "/", src: "/home.mp4", height: 35, width: 35, text: "Home" },
    { href: "/earning", src: "/money.mp4", height: 35, width: 35, text: "Earnings" },
    { href: "/team", src: "/team.mp4", height: 35, width: 35, text: "Team" },
    { href: "/profile", src: "/avatar.mp4", height: 35, width: 35, text: "Profile" },
  ]

  return (

    <div className='fixed bottom-0 w-[410px] flex justify-between items-center p-2 bg-white z-10 border-t-2  rounded-t-xl   '>
      {UlList.map((data, i) => (
        <Link
          key={i}
          href={data.href}
          className={`flex flex-col items-center ${i < UlList.length - 1 ? 'border-r-2 border-gray-300' : ''} px-4`}
          >
          <video
            src={data.src}
            height={data.height}
            width={data.width}
            className='cursor-pointer'
            autoPlay
            loop
            muted
          />
          <p>{data.text}</p>
        </Link>
      ))}
    </div>
  )
}

export default LowerFooter
