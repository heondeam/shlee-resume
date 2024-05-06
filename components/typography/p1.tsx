import { cn } from '@/utils/utils'
import { cva } from 'class-variance-authority'

type P1Props = React.HTMLAttributes<HTMLParagraphElement>

export const p1Variants = cva('whitespace-pre-line text-[16px] font-normal leading-[1.6]')

const P1 = (props: P1Props) => {
  const { className, ...rest } = props
  return <p {...rest} className={cn(p1Variants({ className }))} />
}

export default P1
