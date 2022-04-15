import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { Button } from '@/elements/Button/Button'
import { NextImage } from '@/elements/NextImage/NextImage'

import { HamburgerMenu } from './HamburgerMenu'
import { NavItem } from './NavItem'

export const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const drawerRef = useRef<HTMLUListElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const closeDrawer = (event: any) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return
      }
      setOpenDrawer(false)
    }
    document.addEventListener('scroll', () => {
      const scroll = window.scrollY > 5
      if (scroll) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    })
    document.addEventListener('mousedown', closeDrawer)
    return () => document.removeEventListener('mousedown', closeDrawer)
  }, [])

  return (
    <nav className={`fixed z-40 w-full bg-[#fdfdfd] ${scrolled && 'drop-shadow-lg'}`}>
      <div className='layout flex items-center justify-between'>
        <div className='w-48'>
          <Link href='/'>
            <a>
              <NextImage
                className='relative h-[70px] w-full'
                src='/assets/images/logo-text.png'
                layout='fill'
                objectFit='contain'
              />
            </a>
          </Link>
        </div>
        <HamburgerMenu onClick={() => setOpenDrawer(true)} />
        <ul
          ref={drawerRef}
          className={`fixed top-0 right-0 flex h-screen translate-x-full flex-col bg-primary-400 px-10 transition
          lg:relative lg:h-full lg:translate-x-0 lg:flex-row lg:items-center lg:bg-transparent lg:px-0
          ${openDrawer && 'translate-x-0'}`}
        >
          <NavItem href='/#about'>About</NavItem>
          <NavItem href='/#division'>Division</NavItem>
          <NavItem href='/#events'>Events</NavItem>
          <NavItem href='/#article'>Articles</NavItem>
          <NavItem href='/#achievements'>Achievements</NavItem>
          <NavItem href='/certificates'>Certificate</NavItem>
          <NavItem href='/#contact'>
            <Button variant='secondary'>Contact Us</Button>
          </NavItem>
        </ul>
      </div>
    </nav>
  )
}
