'use client'

import Title from '@components/ui/title'
import Section from '@components/ui/section'
import Link from 'next/link'
import Github from '@svg/github.svg'

import Card from '@components/project/project-card'

import ddockddock from '@png/ddockddock.png'

const PROJECT_LIST = [
  {
    belong: '팀 스파르타',
    title: '똑똑 365',
    description: [
      '홈 클리닝 서비스 애플리케이션',
      '',
      '유저 앱 내 서비스 신청, 신청 내역 확인 및 수정 등 주요 기능 개발',
      '백오피스 유저 관리, 클리닝 서비스 관리 기능, 파일 업로드 및 다운로드 기능 개발',
      'RN 웹뷰 환경 및 브릿지 통신을 통한 모바일앱 구축'
    ],
    stack: ['Next.js', 'React Navite', 'TailwindCSS', 'shadcn/ui', 'Zustand', 'SWR'],
    link: (
      <>
        <Link className="w-[20px] h-[20px] text-white" href={''}>
          <Github />
        </Link>
      </>
    ),
    image: ddockddock
  },
  {
    belong: '팀 스파르타',
    title: '똑똑 365',
    description: [
      '홈 클리닝 서비스 애플리케이션',
      '',
      '유저 앱 내 서비스 신청, 신청 내역 확인 및 수정 등 주요 기능 개발',
      '백오피스 유저 관리, 클리닝 서비스 관리 기능, 파일 업로드 및 다운로드 기능 개발',
      'RN 웹뷰 환경 및 브릿지 통신을 통한 모바일앱 구축'
    ],
    stack: ['Next.js', 'React Navite', 'TailwindCSS', 'shadcn/ui', 'Zustand', 'SWR'],
    link: (
      <>
        <Link className="w-[20px] h-[20px] text-white" href={''}>
          <Github />
        </Link>
      </>
    ),
    image: ddockddock
  }
]

export default function Projects() {
  return (
    <Section id="projects" className="bg-navy py-48  px-20">
      <div className="lg:max-w-[950px] md:min-w-[750px] flex flex-col gap-12">
        <Title idx="03" title="Project" />

        {PROJECT_LIST.map((project, idx) => (
          <Card
            key={idx}
            cnt={idx}
            belong={project.belong}
            title={project.title}
            description={project.description}
            stack={project.stack}
            link={project.link}
            image={project.image}
          />
        ))}

        {/* <Card
          belong="팀 스파르타"
          title="똑똑 365"
          description={[
            '홈 클리닝 서비스 애플리케이션',
            '프리랜서로 참여한 프로젝트로, 주요 기능 개발 및 유지보수 담당하였습니다 유저앱과 백오피스 개발에 참여하였습니다.',
            '유저 앱 내 서비스 신청, 신청 내역 확인 및 수정 등 주요 기능 개발',
            '백오피스 유저 관리, 클리닝 서비스 관리 기능, 파일 업로드 및 다운로드 기능 개발',
            'RN 웹뷰 환경 및 브릿지 통신을 통한 모바일앱 구축'
          ]}
          stack={['Next.js', 'React Navite', 'TailwindCSS', 'shadcn/ui', 'Zustand', 'SWR']}
          link={
            <>
              <Link className="w-[20px] h-[20px] text-white" href={''}>
                <Github />
              </Link>
            </>
          }
          image={ddockddock}
        /> */}
      </div>
    </Section>
  )
}
