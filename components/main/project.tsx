'use client'

import Title from '@components/title/title'
import Section from '@components/ui/section'

export default function Project() {
  return (
    <Section className="h-[950px] bg-navy px-4">
      <div className="max-w-[850px] flex flex-col gap-6">
        <Title title="Project" idx="02" />
      </div>
    </Section>
  )
}
