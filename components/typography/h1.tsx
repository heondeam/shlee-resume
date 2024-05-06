import { cn } from '@/utils/utils'
import { cva } from 'class-variance-authority'

type H1Props = React.HTMLAttributes<HTMLHeadingElement>

const h1Variants = cva('whitespace-pre-line text-[64px] font-bold leading-[1.2]')

const H1 = (props: H1Props) => {
  const { className, ...rest } = props
  return <h1 {...rest} className={cn(h1Variants({ className }))} />
}

export default H1
