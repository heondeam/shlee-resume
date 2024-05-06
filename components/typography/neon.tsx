import { cn } from '@/utils/utils'
import { cva } from 'class-variance-authority'

type NeonProps = React.HTMLAttributes<HTMLParagraphElement>

export const neonVariants = cva(
  'whitespace-pre-line text-[20px] font-mono font-normal text-green leading-[1.5]'
)

const Neon = (props: NeonProps) => {
  const { className, ...rest } = props
  return <p {...rest} className={cn(neonVariants({ className }))} />
}

export default Neon
