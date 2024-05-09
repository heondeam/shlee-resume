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
    const aligned = isRightAligned ? 'lg:items-end' : 'lg:items-start'

    return (
      <div className={`lg:flex lg:flex-col lg:gap-4 ${aligned}`}>
        <H5 className="text-green">{belong}</H5>
        <H2 className="text-white">{title}</H2>
        <div
          className={`shadow-custom transition-custom p-[25px] rounded-md text-lightSlate bg-lightNavy flex flex-col items-${
            isRightAligned ? 'end' : 'start'
          } gap-4`}
        >
          {/* feature card */}
          {description.map((desc, idx) => (
            <P1 key={idx}>{desc}</P1>
          ))}
        </div>
        <div className="flex relative z-20 gap-4">
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
        <div className="flex gap-4">{link}</div>
      </div>
    )
  }

  const contentCols = (() => {
    if (isRightAligned) {
      return 'col-start-1 col-end-[-1] lg:col-start-6 lg:col-end-[-1]'
    } else {
      return 'col-start-1 col-end-[-1] lg:col-start-1 lg:col-end-8'
    }
  })()

  const imageCols = (() => {
    if (isRightAligned) {
      return 'col-start-1 col-end-[-1] lg:col-start-1 lg:col-end-8'
    } else {
      return 'col-start-1 col-end-[-1] lg:col-start-6 lg:col-end-[-1]'
    }
  })()

  return (
    <div className="relative flex flex-col items-center lg:grid lg:grid-cols-12 lg:items-center">
      <div
        className={`relative z-20 row-start-1 ${contentCols} flex flex-col gap-6 items-${
          isRightAligned ? 'end' : 'start'
        }`}
      >
        {/* content */}
        {renderContent(isRightAligned, description, stack, link)}
      </div>
      <div className={`group row-start-1 shadow-custom ${imageCols}`}>
        <ImageCard image={image} />
      </div>
    </div>
  )
}
