'use client'

import P5 from '@components/typography/p5'
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
  items: Array<string | JSX.Element>
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
        <P5
          className={cn(
            'flex items-center tracking-normal before:content-["▹"] before:text-green before:block before:mr-2',
            bulletSizeMap[bulletSize]
          )}
          key={idx}
        >
          <span className="font-mono">{item}</span>
        </P5>
      ))}
    </div>
  )
}
