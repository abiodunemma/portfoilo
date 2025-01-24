"use client"
import { NAV_LINKS } from '@/constants/Nav'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'



const Navbar = () => {

  //state mnagement and functionality
  const [isMenuOpen, setMenuOpen] = useState(false);

  //Toogle

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  };
  return (
 <nav className=' flexBetween max-container
 padding-container min-w-full py-5 border-2 border-black bg-gray-950 text-white '>

<Link href='#'>
Abiodun
</Link>

<ul className='hidden h-full gap-12 lg:flex'>
{NAV_LINKS.map((link) =>(
    <Link href={link.href} key={link.key}
    className='regular-16 text-white fill-current
    cursor-pointer pb-1.5 h-full transition-all hover:font-bold'>
        {link.label}
    </Link>
   ))}
   </ul>

   <Image
   src="menu.svg"
   alt='menu'
   width={32}
   height={32}
   onClick={toggleMenu}
   className='inline-block cursor-pointer lg:hidden'
   />


</nav>


  )
}

export default Navbar