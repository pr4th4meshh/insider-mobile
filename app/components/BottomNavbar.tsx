'use client'
import Link from 'next/link'
import React from 'react'

const BottomNavbar = () => {
  return (
    <nav className="fixed z-[999] bottom-0 w-full bg-white text-[#EC1066] py-3 xxs:block sm:hidden">
        <ul className='flex justify-evenly ' >
            <li><Link href='/'>HOME</Link></li>
            <li><a href="">EVENTS</a></li>
            <li><a href="">PROFILE</a></li>
        </ul>
    </nav>
  )
}

export default BottomNavbar