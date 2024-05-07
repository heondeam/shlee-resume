import Footer from '@components/common/footer'
import AboutMe from '@components/sections/about-me'
import Experience from '@components/sections/experience'
import Hero from '@components/sections/hero'
import Projects from '@components/sections/projects'
import WorthyProjects from '@components/sections/worthy-projects'

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <WorthyProjects />
      <Footer />
    </main>
  )
}
