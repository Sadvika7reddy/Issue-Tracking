'use client';
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Navbar = () => {
    const currentPath=usePathname();
    const links=[
        {label:'Dashboard',href:'/'},
        {label:'Issues',href:'/issues'}
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href='/'>Logo</Link>
        <ul className='flex space-x-6'>
            {links.map(link=>
                  <Link key='link.href' className={`${link.href===currentPath?'text-zinc-900':'text-zinc-500'} hover:text-zinc-800`}
                   href={link.href}>{link.label}</Link>
            )}
            
            
        </ul>
    </nav>
  )
}

export default Navbar