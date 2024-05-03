'use client'

import P1 from '@components/typography/p1'

type UnorderListProps = {
  items: string[]
}

export default function UnorderList({ items }: UnorderListProps) {
  return (
    <div className="grid grid-cols-2 gap-2 text-slate">
      {items.map((item, idx) => (
        <P1
          key={idx}
          className="before:content-['▹'] before:text-green before:inline-block before:text-[10px] before:mr-2"
        >
          {item}
        </P1>
      ))}
    </div>
  )
}
