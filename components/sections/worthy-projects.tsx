'use client'

import H2 from '@components/typography/h2'
import P1 from '@components/typography/p1'
import Section from '@components/ui/section'
import WorthyCard from '@components/project/worthy-card'

export default function WorthyProjects() {
  return (
    <Section id="worthy-projects" className="h-auto p-32 bg-navy px-4">
      <div className="max-w-[950px]">
        <div className="flex flex-col items-center gap-4">
          <H2 className="text-white whitespace-nowrap">Other Noteworthy Projects</H2>
          <P1 className="text-green">view the archive</P1>
        </div>

        <div className="grid grid-cols-3 mt-28 gap-[15px]">
          <WorthyCard
            title="Project Title"
            description="A brief description of the project goes here."
            stack={['React', 'TypeScript', 'TailwindCSS']}
            link="#"
          />
        </div>
      </div>
    </Section>
  )
}
