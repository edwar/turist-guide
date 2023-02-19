'use client'
import { GlobeAsiaAustraliaIcon, Bars3Icon, HomeIcon, BookOpenIcon, StarIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { ReactNode, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type Navigator = {
  name: string
  path: string
  icon: ReactNode
}

function Nav () {
  const [toggle, setToggle] = useState(false)
  const pathname = usePathname()
  const nav:Navigator[] = [{
    name: 'Inicio',
    path: '/',
    icon: <HomeIcon className='w-6 h-6' />
  }, {
    name: 'Nosotros',
    path: '/about',
    icon: <BookOpenIcon className='w-6 h-6' />
  }, {
    name: 'Valoración',
    path: '/rating',
    icon: <StarIcon className='w-6 h-6' />
  }]
  return (
    <nav className='fixed shadow-md z-50 w-full bg-primary border-gray-200 px-2 sm:px-4 py-2.5'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <Link href='/' className='flex items-center'>
          <GlobeAsiaAustraliaIcon className='w-10 h-10 text-white' />
          <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>Turist Guide</span>
        </Link>
        <button onClick={() => setToggle(!toggle)} data-collapse-toggle='navbar-default' type='button' className='inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-neutral focus:outline-none focus:ring-2 focus:ring-white' aria-controls='navbar-default' aria-expanded='false'>
          <span className='sr-only'>Open main menu</span>
          <Bars3Icon className='w-6 h-6' />
        </button>
        <div className={`${toggle ? 'block' : 'hidden'} w-full md:block md:w-auto`} id='navbar-default'>
          <ul className='flex gap-y-2 flex-col p-4 mt-4 border border-white rounded-lg bg-primary md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-primary'>
            {nav.map(item => (
              <li key={item.path} className={`flex items-center gap-1 ${pathname === item.path ? 'text-primary bg-secondary font-bold md:text-secondary md:bg-transparent hover:text-white md:hover:text-secondary hover:cursor-pointer py-2 pl-3 p-4 rounded md:hover:bg-transparent md:border-0 md:p-0' : 'text-neutral hover:bg-secondary/70 md:hover:text-secondary hover:text-white hover:cursor-pointer py-2 pl-3 p-4 rounded md:hover:bg-transparent md:border-0 md:p-0'}`}>
                {item.icon}
                <Link href={item.path} className='md:hidden lg:block sm:block py-2 pl-3 pr-4 md:p-0' aria-current='page'>{item.name}</Link>
                {/** text-primary bg-secondary font-bold md:text-secondary class for active */}
              </li>
            ))}
            <li className='flex items-center gap-1 text-neutral hover:bg-secondary/70 md:hover:text-secondary hover:text-white hover:cursor-pointer py-2 pl-3 p-4 rounded md:hover:bg-transparent md:border-0 md:p-0'>
              <UserCircleIcon className='w-6 h-6' />
              <Link href='#' className='md:hidden lg:block sm:block py-2 pl-3 pr-4 md:p-0'>Iniciar sesión</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
