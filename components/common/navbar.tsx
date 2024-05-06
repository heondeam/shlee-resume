'use client'

import P5 from '@components/typography/p5'
import Link from 'next/link'

import { config } from '@config'
import { useState } from 'react'
import { Drawer, DrawerContent, DrawerTrigger } from '@components/ui/drawer'
import P1 from '@components/typography/p1'

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const { navLinks } = config

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  return (
    <nav
      className={`fixed h-[100px] w-full top-0 left-0 z-50 flex justify-between items-center px-[50px] backdrop-blur-sm transition-custom ${
        mobileMenu ? 'backdrop-blur-none bg-transparent' : 'bg-navbar'
      }`}
    >
      <div>
        <Link href="/">아이콘</Link>
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-6">
          {navLinks.map((link, idx) => (
            <Link href={link.link} aria-label={link.link} key={idx}>
              <li className="group flex gap-2 cursor-pointer font-mono">
                <P5 className="text-green">{`0${idx + 1}.`}</P5>
                <P5 className="text-slate group-hover:text-green transition-custom">{link.name}</P5>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <Drawer open={mobileMenu} onOpenChange={setMobileMenu}>
        <DrawerTrigger asChild>
          <button
            className={`relative w-[48px] h-[28px] z-40 flex flex-col items-end justify-between lg:hidden`}
            onClick={handleMobileMenu}
          >
            <div
              className={`h-[2px] bg-green rounded-[4px] ${
                mobileMenu
                  ? 'absolute w-[32px] rotate-225 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] transition-beforeActive'
                  : 'w-full transition-before'
              }`}
            />
            <div
              className={`w-[80%] h-[2px] bg-green rounded-[4px] ${mobileMenu ? 'hidden' : ''}`}
            />
            <div
              className={`h-[2px] bg-green rounded-[4px] ${
                mobileMenu
                  ? 'absolute w-[32px] -rotate-225 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] transition-afterActive'
                  : 'w-[60%] transition-after'
              }`}
            />
          </button>
        </DrawerTrigger>
        <DrawerContent>
          <ul className="w-full flex flex-col gap-4 p-4">
            {navLinks.map((link, idx) => (
              <Link href={link.link} aria-label={link.link} key={idx} onClick={handleMobileMenu}>
                <li className="group gap-2 cursor-pointer flex flex-col items-center font-mono">
                  <P1 className="text-green">{`0${idx + 1}.`}</P1>
                  <P1 className="text-slate group-hover:text-green transition-custom">
                    {link.name}
                  </P1>
                </li>
              </Link>
            ))}
          </ul>
        </DrawerContent>
      </Drawer>
    </nav>
  )
}
