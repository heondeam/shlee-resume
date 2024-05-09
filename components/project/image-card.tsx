'use client'

import { cn } from '@utils/utils'
import Image, { StaticImageData } from 'next/image'

type ImageCardProps = {
  image: StaticImageData
  className?: string
}

export default function ImageCard({ image, className }: ImageCardProps) {
  return (
    <div className={cn('relative min-h-[300px] rounded-[4px] flex items-center', className)}>
      <div
        className="absolute z-10 w-full h-full bg-navy filter grayscale brightness-75mix-blend-multiply opacity-50 group-hover:filter-none 
        group-hover:grayscale-0 group-hover:brightness-100 group-hover:blur-0 group-hover:opacity-0 transition-custom"
      ></div>
      <Image src={image} alt="project image" layout="responsive" className="rounded-[4px]" />
    </div>
  )
}
