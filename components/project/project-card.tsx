'use client'

import H2 from '@components/typography/h2'
import H5 from '@components/typography/h5'
import P1 from '@components/typography/p1'
import P2 from '@components/typography/p2'

import { StaticImageData } from 'next/image'
import ImageCard from './image-card'
import P5 from '@components/typography/p5'

type CardProps = {
  cnt: number
  belong: string
  title: string
  description: string[]
  stack: string[]
  link: JSX.Element
  image: StaticImageData
}

export default function Card({ cnt, belong, title, description, stack, link, image }: CardProps) {
  const isRightAligned = cnt % 2 === 0

  const renderContent = (isRightAligned: boolean, description: string[], stack: string[], link) => {
    const aligned = isRightAligned ? 'md:items-end' : 'md:items-start'

    return (
      <div className={`w-full flex flex-col gap-4 ${aligned}`}>
        <H5 className="text-green">{belong}</H5>
        <div className="flex items-center gap-4">
          <H2 className="text-white">{title}</H2>
          <div className="flex gap-4">{link}</div>
        </div>
        <div
          className={`md:shadow-custom transition-custom md:p-[25px] rounded-md text-lightSlate bg-transparent md:bg-lightNavy flex flex-col md:items-${
            isRightAligned ? 'end' : 'start'
          } gap-4`}
        >
          {/* feature card */}
          {description.map((desc, idx) => (
            <P1 key={idx}>{desc}</P1>
          ))}
        </div>
        <div className="flex flex-wrap relative z-20 gap-4">
          {/* stack */}
          {stack.map((tech, idx) => (
            <P5
              key={idx}
              className="text-lightSlate whitespace-nowrap font-mono hover:text-green transition-custom"
            >
              {tech}
            </P5>
          ))}
        </div>
      </div>
    )
  }

  const contentCols = (() => {
    if (isRightAligned) {
      return 'col-start-1 col-end-[-1] md:col-start-6 md:col-end-[-1]'
    } else {
      return 'col-start-1 col-end-[-1] md:col-start-1 md:col-end-8'
    }
  })()

  const imageCols = (() => {
    if (isRightAligned) {
      return 'col-start-1 col-end-[-1] md:col-start-1 md:col-end-8'
    } else {
      return 'col-start-1 col-end-[-1] md:col-start-6 md:col-end-[-1]'
    }
  })()

  return (
    <div className="relative items-center grid grid-cols-12 md:items-center">
      <div
        className={`w-full h-full md:h-auto relative z-20 px-[40px] py-[30px] md:p-0 row-start-1 ${contentCols} flex flex-col gap-6 justify-center items-${
          isRightAligned ? 'end' : 'start'
        }`}
      >
        {/* content */}
        {renderContent(isRightAligned, description, stack, link)}
      </div>
      <div
        className={`w-full group row-start-1 shadow-custom opacity-15 md:opacity-100 ${imageCols}`}
      >
        <ImageCard image={image} />
      </div>
    </div>
  )
}
