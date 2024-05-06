'use client'

import H2 from '../typography/h2'
import Neon from '../typography/neon'

type TitleProps = {
  title: string
  idx: string
}

export default function Title({ title, idx }: TitleProps) {
  return (
    <div className="w-full flex items-center gap-3">
      <Neon>{idx}.</Neon>
      <H2 className="text-white whitespace-nowrap">{title}</H2>
      {/* line */}
      <div className="min-w-[50px] h-[1px] bg-lightestNavy md:w-[300px]"></div>
    </div>
  )
}
