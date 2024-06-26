'use client'

import H5 from '@components/typography/h5'
import P5 from '@components/typography/p5'
import Folder from '@svg/folder.svg'
import LinkIcon from '@svg/link.svg'
import Link from 'next/link'

type WorthyCardProps = {
  title: string
  description: string
  stack: string[]
  link: string
}

export default function WorthyCard({ title, description, stack, link }: WorthyCardProps) {
  return (
    <Link
      className="group shadow-custom flex flex-col gap-4 py-8 px-7 bg-lightNavy hover:translate-y-[-5px] transition-custom"
      href={link}
      target="_blank"
    >
      <div className="flex justify-between items-center mb-[35px]">
        <Folder className="text-green w-[40px] h-[40px]" />
        <LinkIcon className="text-slate w-[22px] h-[22px] group-hover:text-green transition-custom" />
      </div>
      <div className="space-y-2 flex-1">
        <H5 className="text-white">{title}</H5>
        <P5 className="text-slate">{description}</P5>
      </div>
      <div>
        <ul className="flex flex-wrap gap-2">
          {stack.map((item, idx) => (
            <P5
              key={idx}
              className="text-slate font-mono text-[11px] hover:text-green transition-custom"
            >
              {item}
            </P5>
          ))}
        </ul>
      </div>
    </Link>
  )
}
