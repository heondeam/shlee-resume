'use client'

import P5 from '@components/typography/p5'
import Link from 'next/link'

import { config } from '@config'

export default function Navbar() {
  const { navLinks } = config

  return (
    <nav className="fixed h-[100px] w-full top-0 left-0 bg-navbar z-[100] flex justify-between items-center px-[50px] backdrop-blur-sm">
      <div>
        <Link href="/">아이콘</Link>
      </div>
      <div>
        <ul className="flex gap-6">
          {navLinks.map((link, idx) => (
            <Link href={link.link} aria-label={link.link} key={idx}>
              <li className="group flex gap-2 cursor-pointer">
                <P5 className="text-green">{`0${idx + 1}.`}</P5>
                <P5 className="text-slate group-hover:text-green transition-custom">{link.name}</P5>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}
