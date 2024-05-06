'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@utils/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const handleActiveIndexChange = React.useCallback((index) => {
    setActiveIndex(index)
  }, [])

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        'relative flex md:block md:flex-col self-start items-center text-slate',
        className
      )}
      onClick={handleActiveIndexChange}
      {...props}
    />
  )
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'relative inline-flex items-center w-full justify-center whitespace-nowrap border-b md:border-b-0 md:border-l border-lightestNavy transition-custom px-6 py-4 text-sm font-medium hover:text-green hover:bg-lightNavy disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-green focus:bg-lightNavy after:absolute after:md:h-full after:w-full after:h-[1px] after:bottom-0 after:md:w-[1px] after:left-0 after:bg-green  after:origin-top-left after:scale-y-0 data-[state=active]:after:scale-y-100 data-[state=active]:after:origin-top-left after:duration-500',
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn('w-full mt-2', className)} {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
