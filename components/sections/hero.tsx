'use client'

import { useEffect, useRef, useState } from 'react'
import H1 from '../typography/h1'
import H5 from '../typography/h5'
import P1 from '../typography/p1'
import { Button } from '../ui/button'
import Section from '../ui/section'
import Link from 'next/link'

const text = '프론트엔드 개발자 이성헌입니다.'.split('')

export default function Hero() {
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index === text.length) {
        clearInterval(interval)
        return
      }
      textRef.current!.textContent += text[index]
      index++
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <Section className="h-screen bg-navy px-8">
      <div className="max-w-[1000px] flex flex-col gap-6">
        <div>
          <H5 className="text-small-heading font-sans font-normal">
            <span className="text-green">안녕하세요, 저는</span>
          </H5>
        </div>
        <div>
          <H1 className="text-heading">
            <span className="text-white">성장을 멈추지 않는</span>
          </H1>
          <H1 className="relative text-heading">
            <span className="text-slate">프론트엔드 개발자 이성헌입니다.</span>
            <span className="absolute text-white left-0 top-0" ref={textRef}></span>
          </H1>
        </div>
        <div className="max-w-[540px]">
          <P1 className="text-slate">
            개발자로서의 역량을 키우기 위해 공부하고, 새로운 기술을 배우는 것을 쉬지 않습니다. 어떤
            일이든 포기하지 않고 끝까지 해내는 끈기와 책임감이 제 장점입니다. &#58;&#41;
          </P1>
        </div>
        <Link href="./static/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button className="mt-4 w-fit" variant={'career'} size={'lg'}>
            Check my resume!
          </Button>
        </Link>
      </div>
    </Section>
  )
}
