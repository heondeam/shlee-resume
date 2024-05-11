'use client'

import H2 from '@components/typography/h2'
import P1 from '@components/typography/p1'
import Section from '@components/ui/section'
import WorthyCard from '@components/project/worthy-card'

export default function WorthyProjects() {
  return (
    <Section id="worthy-projects" className="h-auto bg-navy px-12 py-36">
      <div className="max-w-[950px]">
        <div className="flex flex-col items-center gap-4">
          <H2 className="text-white whitespace-nowrap">Other Noteworthy Projects</H2>
          {/* <P1 className="text-green">view the archive</P1> */}
        </div>

        <div className="grid grid-cols-3 grid-flow-row auto-rows-max mt-28 gap-[15px]">
          <WorthyCard
            title="포트폴리오 사이트"
            description="포트폴리오 용도로 제작한 사이트로 Next.js를 사용하여 제작하였으며, shadcn/ui 라이브러리를 사용하여 디자인을 구성하였습니다. useCanvas 훅을 사용하여 캔버스를 사용한 애니메이션을 직접 구현하였습니다."
            stack={['Next.js', 'shadcn/ui', 'canvas']}
            link="https://github.com/heondeam/shlee-resume"
          />
          <WorthyCard
            title="알고리즘 문제풀이"
            description="알고리즘 문제풀이를 위한 저장소로 JavaScript와 Python을 사용하여 문제를 풀고 풀이를 정리해가고 있습니다. 문제 풀이에 대한 내용은 블로그에 정리하고 있습니다."
            stack={['JavaScript', 'Python']}
            link="https://github.com/heondeam/algorithm"
          />
          <WorthyCard
            title="Dev-Profile"
            description="채용담당자를 위한 개발자 Github 분석 플랫폼으로 사용자의 Github를 Chat GPT로 분석하여 결과를 제공하고 분석된 데이터를 다양한 조건으로 필터링하여 갤러리 형태로 제공하는 서비스입니다."
            stack={['React', 'TypeScript', 'Emotion', 'RTK-Query']}
            link="https://github.com/DevProfiIe/Dev-Profile-Frontend"
          />
        </div>
      </div>
    </Section>
  )
}
