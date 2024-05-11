'use client'

import { useClientWidthHeight } from '@/hooks/useClientWidthHeight'
import usePreventScroll from '@/hooks/usePreventScroll'
import Footer from '@components/common/footer'
import Loading from '@components/common/loading'
import Navbar from '@components/common/navbar'
import Sidebar from '@components/common/sidebar'
import AboutMe from '@components/sections/about-me'
import Experience from '@components/sections/experience'
import Hero from '@components/sections/hero'
import Projects from '@components/sections/projects'
import WorthyProjects from '@components/sections/worthy-projects'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [animationFinished, setAnimationFinished] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  const clientRect = useClientWidthHeight(mainRef)
  const { width, height } = clientRect

  const handleAnimeEnd = () => {
    setAnimationFinished(true)
  }

  usePreventScroll(animationFinished)

  if (!animationFinished) {
    return (
      <div className="w-full h-dvh" ref={mainRef}>
        <Loading canvasWidth={width} canvasHeight={height} onAnimationEnd={handleAnimeEnd} />
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <Sidebar direction="left" />
      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <WorthyProjects />
        <Footer />
      </main>
      <Sidebar direction="right" />
    </>
  )
}
