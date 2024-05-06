'use client'

import P1 from '@components/typography/p1'
import P5 from '@components/typography/p5'
import Github from '@svg/github.svg'
import { config } from '@utils/config'
import Link from 'next/link'

type SidebarProps = {
  direction: 'left' | 'right'
}

export default function Sidebar({ direction }: SidebarProps) {
  const { left, right } = config.sidebarLinks

  const iconMap: { [key: string]: JSX.Element } = {
    github: <Github className="w-[20px] h-[20px]" />
  }

  const renderLinks = (links: any[]) => {
    return links.map((link, i) => {
      if (link.type === 'link') {
        return (
          <Link key={i} href={'/'}>
            {iconMap[link.icon]}
          </Link>
        )
      }
    })
  }

  const renderText = (text: string) => {
    return (
      <P5
        style={{
          writingMode: 'vertical-rl'
        }}
        className="tracking-wider"
      >
        {text}
      </P5>
    )
  }

  return (
    <div
      className={`fixed w-[40px] bottom-0 ${
        direction === 'left' ? 'left-[40px]' : 'right-[40px]'
      } z-10 text-lightSlate flex flex-col items-center gap-8`}
    >
      {direction === 'left' ? renderLinks(left) : right.map((link) => renderText(link.text))}
      <div className="w-[1px] h-[90px] bg-lightSlate"></div>
    </div>
  )
}
