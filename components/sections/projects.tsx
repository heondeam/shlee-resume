'use client'

import Title from '@components/ui/title'
import Section from '@components/ui/section'
import Link from 'next/link'

import Card from '@components/project/project-card'

import LinkIcon from '@svg/link.svg'

import ddockddock from '@png/ddockddock.png'
import knowhowzip from '@png/knowhouzip.png'
import gongsaero from '@png/gongsaero.png'
import logsaver from '@png/logsaver.png'
import b2saver from '@png/b2saver.png'

const PROJECT_LIST = [
  {
    belong: '@ 팀 스파르타',
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
        <Link
          className="w-[20px] h-[20px] text-white"
          href={'https://www.ttokttok365.com'}
          target="_blank"
        >
          <LinkIcon />
        </Link>
      </>
    ),
    image: ddockddock
  },
  {
    belong: '@ 팀 스파르타',
    title: 'knowhow.zip',
    description: [
      '홈 클리닝 서비스 애플리케이션',
      '',
      '유저 앱 내 서비스 신청, 신청 내역 확인 및 수정 등 주요 기능 개발',
      '백오피스 유저 관리, 클리닝 서비스 관리 기능, 파일 업로드 및 다운로드 기능 개발',
      'RN 웹뷰 환경 및 브릿지 통신을 통한 모바일앱 구축'
    ],
    stack: ['Next.js', 'TailwindCSS', 'shadcn/ui', 'Zustand'],
    link: (
      <>
        <Link
          className="w-[20px] h-[20px] text-white"
          href={'https://www.knowhowzip.com'}
          target="_blank"
        >
          <LinkIcon />
        </Link>
      </>
    ),
    image: knowhowzip
  },
  {
    belong: '@ 디에스앤텍',
    title: 'Logsaver',
    description: [
      '홈 클리닝 서비스 애플리케이션',
      '',
      '유저 앱 내 서비스 신청, 신청 내역 확인 및 수정 등 주요 기능 개발',
      '백오피스 유저 관리, 클리닝 서비스 관리 기능, 파일 업로드 및 다운로드 기능 개발',
      'RN 웹뷰 환경 및 브릿지 통신을 통한 모바일앱 구축'
    ],
    stack: ['Angular2', 'Bootstrap', 'jQuery', 'RxJS'],
    link: <></>,
    image: logsaver
  },
  {
    belong: '@ 디에스앤텍',
    title: 'B2SAVER',
    description: [
      '홈 클리닝 서비스 애플리케이션',
      '',
      '유저 앱 내 서비스 신청, 신청 내역 확인 및 수정 등 주요 기능 개발',
      '백오피스 유저 관리, 클리닝 서비스 관리 기능, 파일 업로드 및 다운로드 기능 개발',
      'RN 웹뷰 환경 및 브릿지 통신을 통한 모바일앱 구축'
    ],
    stack: ['Angular2', 'Bootstrap', 'jQuery', 'RxJS'],
    link: <></>,
    image: b2saver
  },
  {
    belong: '@ 더빌드소프트',
    title: '공새로',
    description: [
      '홈 클리닝 서비스 애플리케이션',
      '',
      '유저 앱 내 서비스 신청, 신청 내역 확인 및 수정 등 주요 기능 개발',
      '백오피스 유저 관리, 클리닝 서비스 관리 기능, 파일 업로드 및 다운로드 기능 개발',
      'RN 웹뷰 환경 및 브릿지 통신을 통한 모바일앱 구축'
    ],
    stack: ['React', 'styled-components', 'Redux'],
    link: (
      <>
        <Link
          className="w-[20px] h-[20px] text-white"
          href={'https://www.gongsaero.com/'}
          target="_blank"
        >
          <LinkIcon />
        </Link>
      </>
    ),
    image: gongsaero
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
      </div>
    </Section>
  )
}
