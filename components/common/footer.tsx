import P5 from '@components/typography/p5'
import Section from '@components/ui/section'
import Link from 'next/link'
import { SidebarLeftLink, config } from '@utils/config'

import Github from '@svg/github.svg'
import Blog from '@svg/blog.svg'
import Notion from '@svg/notion.svg'

export default function Footer() {
  const { left, right } = config.sidebarLinks as { left: SidebarLeftLink[]; right: any }

  const iconMap: { [key: string]: JSX.Element } = {
    github: <Github className="w-[20px] h-[20px]" />,
    blog: <Blog className="w-[20px] h-[20px]" />,
    notion: <Notion className="w-[20px] h-[20px]" />
  }

  return (
    <Section className="py-8 px-6">
      <footer className="flex flex-col gap-4">
        <div className="flex gap-4 justify-center md:hidden">
          {left.map((link, i) => {
            return (
              <Link
                className="hover:text-green text-slate transition-custom"
                key={i}
                href={link.url}
                target="_blank"
              >
                {iconMap[link.icon]}
              </Link>
            )
          })}
        </div>
        <P5 className="text-slate font-mono hover:text-green transition-custom">
          Designed by Brittany Chiang & Built by seoungheon Lee
        </P5>
      </footer>
    </Section>
  )
}
