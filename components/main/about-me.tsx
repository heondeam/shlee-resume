'use client'

import UnorderList from '@components/list/unorder-list'
import Title from '@components/title/title'
import P1 from '@components/typography/p1'
import Section from '@components/ui/section'
import Image from 'next/image'

import Profile from '@png/profile.png'

const TEXTS = [
  '안녕하세요. 2년차 프론트엔드 엔지니어 이성헌입니다. 저는 대학 동아리에서 코딩을 접한 뒤, 웹 개발에 관심을 가지게 되어 웹퍼블리셔로 커리어를 시작했고, 현재는 프론트엔드 엔지니어로 일하고 있습니다.',
  '저는 외주 프로젝트에 참여, 정보보안관리 솔루션 회사에 근무하며 다양한 프로젝트를 경험했습니다. 이를 통해 다양한 기술을 배우고, 다양한 문제를 해결하는 방법을 배웠습니다.',
  '일을 하며 전산학 기초지식 공부의 중요성을 느끼고, 약 5개월 간 크래프톤 정글에 입소하여 자료구조와 알고리즘, 네트워크, 운영체제 등을 공부하며 전산학 기초지식을 쌓았습니다. 이를 통해 프로그래밍에 대한 이해도를 높이고, 문제해결 능력을 키웠습니다.',
  '저는 주로 아래와 같은 기술을 사용해서 개발합니다 :)'
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
    <Section className="h-[950px] bg-navy px-20">
      <div className="max-w-[850px] flex flex-col gap-6">
        <Title title="About Me" idx="01" />
        <div className="flex justify-between gap-8">
          <div className="flex flex-col gap-4 w-1/2">
            {/* texts */}
            {TEXTS.map((text, idx) => (
              <P1 key={idx} className="text-slate">
                {text}
              </P1>
            ))}

            <UnorderList items={SKILLS} cols={2} bulletSize="sm" />
          </div>
          <div className="image-before group">
            <div className="image-wrapper">
              <Image src={Profile} alt="Picture of the author" layout="fill" className="profile" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
