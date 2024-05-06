'use client'

import H1 from '../typography/h1'
import H5 from '../typography/h5'
import P1 from '../typography/p1'
import { Button } from '../ui/button'
import Section from '../ui/section'

export default function Hello() {
  return (
    <Section className="min-h-screen h-screen bg-navy px-16">
      <div className="max-w-[1000px] flex flex-col gap-6">
        <div>
          <H5 className="text-small-heading tracking-wider">
            <span className="text-green">안녕하세요, 저는</span>
          </H5>
        </div>
        <div>
          <H1 className="text-heading">
            <span className="text-white">인상깊고 재미있는 UI/UX를 만드는</span>
            <br />
            <span className="text-slate">프론트엔드 엔지니어 이성헌입니다.</span>
          </H1>
        </div>
        <div className="max-w-[540px]">
          <P1 className="text-slate">
            I’m a software engineer specializing in building (and occasionally designing)
            exceptional digital experiences. Currently, I’m focused on building accessible,
            human-centered products at Upstatement.
          </P1>
        </div>
        <div>
          <Button className="mt-4" variant="career" size="lg">
            Check out my resume!
          </Button>
        </div>
      </div>
    </Section>
  )
}
