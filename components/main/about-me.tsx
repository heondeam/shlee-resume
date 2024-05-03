'use client'

import Image from 'next/image'
import Title from '../title/title'
import P1 from '../typography/p1'
import Section from '../ui/section'

import Profile from '../../assets/png/profile.png'

export default function AboutMe() {
  return (
    <Section className="h-screen bg-navy px-20">
      <div className="w-4/6 flex flex-col gap-6">
        <Title title="About Me" idx="01" />
        <div className="flex justify-between gap-16">
          <div>
            {/* texts */}
            <P1 className="text-slate">
              Hello! My name is Brittany and I enjoy creating things that live on the internet. My
              interest in web development started back in 2012 when I decided to try editing custom
              Tumblr themes — turns out hacking together a custom reblog button taught me a lot
              about HTML & CSS!
            </P1>
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
