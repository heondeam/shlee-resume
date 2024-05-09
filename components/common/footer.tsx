import H5 from '@components/typography/h5'
import P5 from '@components/typography/p5'
import Section from '@components/ui/section'
import Link from 'next/link'

export default function Footer() {
  return (
    <Section className="py-8">
      <footer>
        <P5 className="text-slate font-mono hover:text-green transition-custom">
          Designed by Brittany Chiang & Built by seoungheon Lee
        </P5>
      </footer>
    </Section>
  )
}
