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
    belong: '@ 팀스파르타',
    title: '똑똑 365',
    description: [
      '홈 클리닝 서비스 애플리케이션',
      '',
      '유저 앱 내 서비스 신청, 신청 내역 확인 및 수정 등 주요 기능 개발',
      '백오피스 유저 관리, 클리닝 서비스 관리 기능, 파일 업로드 및 다운로드 기능 개발'
    ],
    stack: ['Next.js', 'React Navite', 'TailwindCSS', 'shadcn/ui', 'Zustand', 'SWR'],
    link: (
      <>
        <Link
          className="w-[20px] h-[20px] text-white hover:text-green transition-custom"
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
    belong: '@ 팀스파르타',
    title: 'knowhow.zip',
    description: [
      '전자책 구독 B2C SaaS 플랫폼으로 Google Docs로 작성한 문서를 전자책 형태로 변환하여 제공하는 서비스.',
      'HTML 형식의 Google Docs 문서를 직접 파싱하여 전자책 형태로 변환하는 라이브러리를 개발하여 서비스에 적용하고, 이를 모노레포로 관리히도록 구조화.',
      '해외 PG사인 Stripe를 사용하여 구독 결제 기능을 구현하고 i18n을 적용하여 다국어를 지원하도록 함. 이를 통해 해외유저 유입을 증가시킴.',
      'shadcn/ui를 사용하여 공통 컴포넌트를 사용할 수 있도록 디자인 시스템을 구축하고, Zustand를 사용하여 전역 상태를 관리하여 컴포넌트 간의 의존성을 줄임.'
    ],
    stack: ['Next.js', 'TailwindCSS', 'shadcn/ui', 'Zustand'],
    link: (
      <>
        <Link
          className="w-[20px] h-[20px] text-white hover:text-green transition-custom"
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
      '대량으로 수집되는 로그데이터에 대해 정책 기반의 실시간 모니터링 및 이상징후 검출, 고속검색, 데이터간 상관분석을 제공하는 대용량 로그 데이터 분석 시스템으로 여러 기업의 온프레미스 환경에서 사용되는 웹 솔루션.',
      'jQuery로 이루어진 레거시 코드를 Angular2로 리팩토링 및 유지보수하여 고객사들의 만족도를 높임.',
      '고객사 별로 다른 크기와 구조를 가진 로그 데이터들을 정형화된 데이터로 가공한 뒤 Google Chart API를 사용하여 일관된 분석 차트로 시각화.',
      '조건식을 통한 데이터 필터링 및 검색, 검색 결과 창 조인 기능, 엑셀 다운로드 기능 등 다양한 기능을 구현.',
      '기존 온프레미스 환경에서 사용되던 로그 데이터 분석 시스템을 클라우드 환경으로 이전하는 작업을 수행하여 고객사들의 편의성을 높임.'
    ],
    stack: ['Angular2', 'Bootstrap', 'jQuery', 'RxJS'],
    link: <></>,
    image: logsaver
  },
  {
    belong: '@ 디에스앤텍',
    title: 'B2SAVER',
    description: [
      '단말 환경에서 일어나는 모든 행위 실시간 모니터링 및 저장을 통한 보안사고 사전 예방, 사후 증거 확보를 위한 Compliance 시스템.',
      'jQuery로 이루어진 레거시 코드를 Angular2로 리팩토링 및 유지보수하여 고객사들의 만족도를 높임.',
      '연속적으로 기록된 화면 이미지를 재생할 수 있는 자체적인 동영상 플레이어 구현하여 PC CCTV와 유사한 기능 제공.'
    ],
    stack: ['Angular2', 'Bootstrap', 'jQuery', 'RxJS'],
    link: <></>,
    image: b2saver
  },
  {
    belong: '@ 더빌드소프트',
    title: '공새로',
    description: [
      '기존에 불투명하고 비효율적인 건자재 조달과정을 디지털로 전환한 건설현장 맞춤형 자재 조달 B2B SaaS 플랫폼',
      '랜딩·고객사·공급사·백오피스 페이지로 구성된 프로젝트의 프론트엔드를 디렉토리 구조 설계부터 인터페이스 개발까지 전반적인 업무 수행.',
      '모든 페이지에 반응형 웹 디자인을 적용하여 모바일 환경에서도 사용이 가능하도록 구현.',
      '서비스 신청부터 결제까지의 흐름을 구현하고, 자재 검색과 추천 장바구니 기능을 구현.',
      '서비스 전반에 걸쳐 사용되는 전역 관심사는 Redux를 사용하여 상태관리를 하고, 일부분은 Context API를 사용하여 의존성을 주입하여 상태를 관리.'
    ],
    stack: ['React', 'styled-components', 'Redux'],
    link: (
      <>
        <Link
          className="w-[20px] h-[20px] text-white hover:text-green"
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
    <Section id="projects" className="bg-navy py-36 px-8">
      <div className="w-full lg:max-w-[950px] flex flex-col gap-12">
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
