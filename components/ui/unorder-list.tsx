'use client'

import P1 from '@components/typography/p1'
import { cn } from '@utils/utils'
import { VariantProps, cva } from 'class-variance-authority'

const unorderedListVariants = cva('grid text-slate gap-2', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4'
    }
  },
  defaultVariants: {
    cols: 2
  }
})

export interface UnorderListProps extends VariantProps<typeof unorderedListVariants> {
  items: string[]
  bulletSize: 'sm' | 'md' | 'lg'
  className?: string[]
}

export default function UnorderList({ items, cols, bulletSize, className }: UnorderListProps) {
  const bulletSizeMap = {
    sm: 'before:text-[8px]',
    md: 'before:text-[12px]',
    lg: 'before:text-[16px]'
  }

  return (
    <div className={cn(unorderedListVariants({ cols, className }))}>
      {items.map((item, idx) => (
        <P1
          className={cn(
            'before:content-["▹"] before:text-green before:inline-block before:mr-2',
            bulletSizeMap[bulletSize]
          )}
          key={idx}
        >
          {item}
        </P1>
      ))}
    </div>
  )
}
