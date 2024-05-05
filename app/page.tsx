import AboutMe from '@components/sections/about-me'
import Experience from '@components/sections/experience'
import Hello from '@components/sections/hello'
import Projects from '@components/sections/projects'
import WorthyProjects from '@components/sections/worthy-projects'

export default function Home() {
  return (
    <main>
      <Hello />
      <AboutMe />
      <Experience />
      <Projects />
      <WorthyProjects />
    </main>
  )
}
