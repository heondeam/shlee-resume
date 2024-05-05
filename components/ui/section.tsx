'use client'
import { cn } from '@/utils/utils'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'

const sectionVariants = cva('flex flex-col justify-center items-center')

export interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {}

export default function Section(props: SectionProps) {
  const { children, className, ...rest } = props

  return (
    <div className={cn(sectionVariants({ className }))} {...rest}>
      {children}
    </div>
  )
}
