'use client'

import UnorderList from '@components/list/unorder-list'
import Title from '@components/title/title'
import P1 from '@components/typography/p1'
import Section from '@components/ui/section'
import Image from 'next/image'

import Profile from '@png/profile.png'

const TEXTS = [
  'Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!',
  'Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.',
  'I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.',
  'Here are a few technologies I’ve been working with recently:'
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
    <Section className="h-screen bg-navy px-20">
      <div className="max-w-[850px] flex flex-col gap-6">
        <Title title="About Me" idx="01" />
        <div className="flex justify-between gap-8">
          <div className="flex flex-col gap-4 w-[50%]">
            {/* texts */}
            {TEXTS.map((text, idx) => (
              <P1 key={idx} className="text-slate">
                {text}
              </P1>
            ))}

            <UnorderList items={SKILLS} />
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
