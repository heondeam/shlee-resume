'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
import Title from '../title/title'
import Section from '../ui/section'
import H3 from '@components/typography/h3'
import P5 from '@components/typography/p5'
import UnorderList from '@components/list/unorder-list'

export default function Experience() {
  return (
    <Section className="h-[950px] bg-navy px-4">
      <div className="max-w-[850px] flex flex-col gap-6">
        <Title title="Where I've Worked" idx="02" />
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

          <TabsContent value="the-buildsoft">
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
        </Tabs>
      </div>
    </Section>
  )
}
