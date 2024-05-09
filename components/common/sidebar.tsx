'use client'

import Link from 'next/link'
import P5 from '@components/typography/p5'
import { SidebarLeftLink, config } from '@utils/config'

import Github from '@svg/github.svg'
import Blog from '@svg/blog.svg'
import Notion from '@svg/notion.svg'

type SidebarProps = {
  direction: 'left' | 'right'
}

export default function Sidebar({ direction }: SidebarProps) {
  const { left, right } = config.sidebarLinks as { left: SidebarLeftLink[]; right: any }

  const iconMap: { [key: string]: JSX.Element } = {
    github: <Github className="w-[20px] h-[20px]" />,
    blog: <Blog className="w-[20px] h-[20px]" />,
    notion: <Notion className="w-[20px] h-[20px]" />
  }

  const renderLinks = (links: SidebarLeftLink[]) => {
    return links.map((link, i) => {
      if (link.type === 'link') {
        return (
          <Link
            className="hover:text-green transition-custom"
            key={i}
            href={link.url}
            target="_blank"
          >
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
        className="font-mono tracking-wider"
      >
        {text}
      </P5>
    )
  }

  return (
    <div
      className={`fixed w-[40px] bottom-0 hidden sm:flex flex-col justify-center 
  ${direction === 'left' ? 'left-[20px] lg:left-[40px]' : 'right-[20px] lg:right-[40px]'}
  z-10 text-lightSlate flex flex-col items-center gap-8`}
    >
      {direction === 'left' ? renderLinks(left) : right.map((link) => renderText(link.text))}
      <div className="w-[1px] h-[90px] bg-lightSlate"></div>
    </div>
  )
}
