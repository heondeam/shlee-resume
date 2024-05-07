import H5 from '@components/typography/h5'
import P5 from '@components/typography/p5'
import Section from '@components/ui/section'
import Link from 'next/link'

export default function Footer() {
  return (
    <Section>
      <footer>
        <P5 className="text-slate font-mono">
          Designed by Brittany Chiang & Built by seoungheon Lee
        </P5>
      </footer>
    </Section>
  )
}
