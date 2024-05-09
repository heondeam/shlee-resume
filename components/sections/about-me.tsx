'use client'

import UnorderList from '@components/ui/unorder-list'
import Title from '@components/ui/title'
import P1 from '@components/typography/p1'
import Section from '@components/ui/section'
import Image from 'next/image'

import Profile from '@png/profile.png'
import Link from 'next/link'

const TEXTS = [
  <>
    안녕하세요. 프론트엔드 개발자 이성헌입니다. 저는 대학교 동아리에서 코딩을 접한 뒤, UI/UX를
    구현하는 것에 큰 흥미를 느껴 웹 퍼블리셔로 커리어를 시작했습니다. 이후 프론트엔드 개발자로
    전향하여 현재까지 2년간 프론트엔드 개발자로 일하고 있습니다.
  </>,
  <>
    저는 외주 프로젝트에 참여하여 3개의 프로젝트를 성공적으로 완수해낸 경험이 있고, 정보보안 관리
    솔루션 회사에 근무하며 2개의 프로젝트를 안정적으로 유지보수한 경험이 있습니다.
  </>,
  <>
    업무를 하며 전산학 기초지식 공부의 중요성 및 필요성을 느끼고,{' '}
    <Link
      className="text-green hover:underline hover:underline-offset-2"
      href={'https://jungle.krafton.com/main'}
      target="_blank"
    >
      크래프톤 정글
    </Link>
    에 입소하여 약 5개월 간 자료구조와 알고리즘, 네트워크, 운영체제 등의 기초지식을 깊이있게 공부한
    경험 또한 가지고 있습니다.
  </>,
  <>
    체계적으로 정리 하는 것을 좋아하기 때문에,{' '}
    <Link
      className="text-green hover:underline hover:underline-offset-2"
      href={'https://heondeam.notion.site/Steady-Study-853240f5fe874921ab8aa6822fc67652?pvs=4'}
      target="_blank"
    >
      노션
    </Link>
    을 활용하여 업무나 학습 관련 내용을 지속적으로 정리해나가고 있습니다.
  </>,
  <>제가 사용할 수 있는 기술 스택은 아래와 같습니다. 😀</>
]

const SKILLS = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Angular2',
  'Next.js',
  'HTML/CSS',
  'Git'
]

export default function AboutMe() {
  return (
    <Section id="about" className="bg-navy px-8 py-48">
      <div className="max-w-[900px] flex flex-col gap-6">
        <Title title="About Me" idx="01" />
        <div className="flex flex-col gap-8 md:flex-row justify-between">
          <div className="flex flex-col gap-4 md:w-[calc(100%-350px)]">
            {/* texts */}
            {TEXTS.map((text, idx) => (
              <P1 key={idx} className="text-slate">
                {text}
              </P1>
            ))}

            <UnorderList items={SKILLS} cols={2} bulletSize="sm" />
          </div>
          <div className="flex justify-center px-4">
            <div className="group relative min-w-[280px] max-w-[300px] h-fit">
              <Image
                src={Profile}
                alt="Picture of the author"
                layout="responsive"
                className="profile"
              />
              <div className="absolute w-full h-full bg-black left-3 top-3 border border-green rounded-[4px] z-0 group-hover:left-4 group-hover:top-4 group-hover:transition-custom"></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
