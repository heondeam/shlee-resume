'use client'

import H2 from '@components/typography/h2'
import H5 from '@components/typography/h5'
import P1 from '@components/typography/p1'
import P2 from '@components/typography/p2'

import Image, { StaticImageData } from 'next/image'
import ImageCard from './image-card'

type CardProps = {
  belong: string
  title: string
  description: string[]
  stack: string[]
  link: JSX.Element
  image: StaticImageData
}

export default function Card({ belong, title, description, stack, link, image }: CardProps) {
  return (
    <div className="relative grid grid-cols-12 gap-[10px] items-center">
      <div className="row-start-1 col-start-7 col-end-[-1] flex flex-col gap-4 items-end relative z-20">
        {/* content */}
        <div className="flex flex-col gap-2 items-end">
          <H5 className="text-green">팀 스파르타</H5>
          <H2 className="text-white">똑똑 365</H2>
        </div>
        <div className="shadow-custom transition-custom p-[25px] rounded-md text-lightSlate bg-lightNavy">
          {/* feature card */}
          {description.map((desc, idx) => (
            <P1 key={idx}>{desc}</P1>
          ))}
        </div>
        <div className="flex relative z-20 gap-4">
          {/* stack */}
          {stack.map((tech, idx) => (
            <P2 key={idx} className="text-lightSlate whitespace-nowrap">
              {tech}
            </P2>
          ))}
        </div>
        <div className="flex gap-4">{link}</div>
      </div>
      <div className="group row-start-1 col-start-1 col-end-8 shadow-custom">
        <ImageCard image={image} className="w-[600px] h-[300px]" />
      </div>
    </div>
  )
}
