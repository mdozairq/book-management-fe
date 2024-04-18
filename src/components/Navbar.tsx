"use client"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  
  return (
    <header className='w-full absolute z-10 bg-black'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center
      sm:px-16 px-6 py-4'>
        <Link href='/' className='flex justify-center items-center no-underline'><h2 className='font-bold text-lg text-white font-serif'>MERN Challenge</h2></Link>
        <div className='flex flex-row align-middle justify-center'>
          <div className='sm:px-16 px-6 py-4'>  
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar