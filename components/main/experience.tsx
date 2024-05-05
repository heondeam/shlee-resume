'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
import Title from '../ui/title'
import Section from '../ui/section'
import H3 from '@components/typography/h3'
import P5 from '@components/typography/p5'
import UnorderList from '@components/ui/unorder-list'

export default function Experience() {
  return (
    <Section className="h-[550px] bg-navy px-20">
      <div className="max-w-[850px] flex flex-col gap-6">
        <Title title="Work Experience" idx="02" />
        <Tabs className="flex gap-6" defaultValue="team-sparta">
          <TabsList>
            <TabsTrigger value="team-sparta">팀스파르타</TabsTrigger>
            <TabsTrigger value="dsntech">디에스앤텍</TabsTrigger>
            <TabsTrigger value="the-buildsoft">더빌드소프트</TabsTrigger>
          </TabsList>

          <TabsContent value="team-sparta">
            <div className="flex flex-col gap-4">
              <div className="space-y-1">
                <H3 className="text-white">외주팀/프리랜서 @ 팀스파르타</H3>
                <P5 className="text-slate">July - Decenber 2016</P5>
              </div>
              <UnorderList
                items={[
                  'Developed and styled interactive web applications for Apple Music using Ember and SCSS',
                  'Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations',
                  'Architected and implemented the user interface of Apple Music"s embeddable web player widget for in-browser user authorization and full song playback',
                  'Collaborated with designers and product managers to define and implement new features and user experiences'
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
                <H3 className="text-white">연구소/팀원 @ 디에스엔텍</H3>
                <P5 className="text-slate">July - Decenber 2016</P5>
              </div>
              <UnorderList
                items={[
                  'Developed and styled interactive web applications for Apple Music using Ember and SCSS',
                  'Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations',
                  'Architected and implemented the user interface of Apple Music"s embeddable web player widget for in-browser user authorization and full song playback',
                  'Collaborated with designers and product managers to define and implement new features and user experiences'
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
                <H3 className="text-white">개발1팀/인턴 @ 더빌드소프트</H3>
                <P5 className="text-slate">July - Decenber 2016</P5>
              </div>
              <UnorderList
                items={[
                  '퍼블리셔로 입사하여, 프론트엔드 엔지니어로 성장하였고 공새로라는 프로젝트를 진행하였습니다.',
                  'Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations',
                  'Architected and implemented the user interface of Apple Music"s embeddable web player widget for in-browser user authorization and full song playback',
                  'Collaborated with designers and product managers to define and implement new features and user experiences'
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
