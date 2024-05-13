'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
import Title from '../ui/title'
import Section from '../ui/section'
import P5 from '@components/typography/p5'
import UnorderList from '@components/ui/unorder-list'
import H5 from '@components/typography/h5'

export default function Experience() {
  return (
    <Section id="experience" className="bg-navy px-8 py-48">
      <div className="w-full md:max-w-[750px] flex flex-col gap-10 justify-center">
        <Title title="Work Experience" idx="02" />
        <Tabs
          className="w-full block space-y-6 md:space-y-0 md:flex md:flex-row md:gap-6"
          defaultValue="team-sparta"
        >
          <TabsList className="max-w-[1000px] overflow-auto md:w-[150px]">
            <TabsTrigger value="team-sparta">팀스파르타</TabsTrigger>
            <TabsTrigger value="dsntech">디에스앤텍</TabsTrigger>
            <TabsTrigger value="the-buildsoft">더빌드소프트</TabsTrigger>
          </TabsList>

          <TabsContent value="team-sparta">
            <div className="flex flex-col gap-4">
              <div className="space-y-1">
                <H5 className="text-white">FE Developer @ 팀스파르타</H5>
                <P5 className="text-slate">2023.10 ~ 2024.04</P5>
              </div>
              <UnorderList
                items={[
                  <>
                    홈 클리닝 서비스 &#39;똑똑 365&#39; 프로젝트와 전자책 구독 서비스
                    &#39;Knowhow.zip&#39; 프로젝트에 프리랜서 FE 개발자로 참여하여, 주요 기능들을
                    개발하였습니다.
                  </>,
                  <>
                    Headless UI를 기반으로한 shadcn/ui를 활용해서 공유 컴포넌트를 작성하고, 이를
                    통해 프로젝트 별 디자인 시스템을 구축하였습니다.
                  </>,
                  <>
                    zod와 react-hook-form을 활용하여 런타임에 타입 체킹을 수행하였고 Form
                    Validation과 관련한 코드를 효율적으로 구현하여 DX 향상에 기여하였습니다.
                  </>
                ]}
                cols={1}
                bulletSize="lg"
                className={['gap-4']}
              />
            </div>
          </TabsContent>

          <TabsContent value="dsntech">
            <div className="flex flex-col gap-4">
              <div className="space-y-1">
                <H5 className="text-white">FE Developer @ 디에스엔텍</H5>
                <P5 className="text-slate">2022.01 ~ 2023.03</P5>
              </div>
              <UnorderList
                items={[
                  <>
                    Angular2를 활용하여 통합로그관리 솔루션인 Logsaver와 업무용 시스템 이상 징후
                    탐지/자료 영상 확보 솔루션인 B2SAVER의 신규 기능들을 개발하고 유지보수
                    하였습니다.
                  </>,
                  <>
                    기존 jQuery로 구성된 레거시 코드를 Angular2로 마이그레이션하는 작업을 총괄하여
                    수행하였습니다.
                  </>,
                  <>
                    온프레미스 환경에서의 서비스를 클라우드로 이전하는 프로젝트에 참여하여, AWS EC2
                    및 S3를 활용하여 서비스를 클라우드로 이전하였습니다.
                  </>,
                  <>
                    PHP CodeIgniter 프레임워크를 활용하여 일부 API 개발 및 DB 구조 변경에 대응하는
                    등의 백엔드 업무 또한 마다하지 않고 수행하였습니다.
                  </>
                ]}
                cols={1}
                bulletSize="lg"
                className={['gap-4']}
              />
            </div>
          </TabsContent>

          <TabsContent value="the-buildsoft">
            <div className="flex flex-col gap-4">
              <div className="space-y-1">
                <H5 className="text-white">Web Publisher, FE Developer @ 더빌드소프트</H5>
                <P5 className="text-slate">2021.07 ~ 2021.12</P5>
              </div>
              <UnorderList
                items={[
                  <>
                    퍼블리셔로 입사한 후, 다양한 디자인의 반응형 웹페이지를 제작하였습니다. 웹표준
                    및 웹접근성을 준수하며, 프론트엔드 개발자에게 더 나은 코드를 제공하기 위해
                    노력하였습니다.
                  </>,
                  <>
                    능력과 노력을 인정받아 프론트엔드 개발자로 전향하여, 건설현장 맞춤형 자재 조달
                    플랫폼 &#39;공새로&#39; 프로젝트에 참여하였습니다. 디자이너 및 백엔드 개발자와
                    협업하면서 랜딩•고객사•공급사•백오피스 페이지의 주요 기능들을 개발하였습니다.{' '}
                  </>
                ]}
                cols={1}
                bulletSize="lg"
                className={['gap-4']}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  )
}
