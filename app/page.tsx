import AboutMe from '@components/sections/about-me'
import Experience from '@components/sections/experience'
import Hello from '@components/sections/hello'
import Project from '@components/sections/project'

export default function Home() {
  return (
    <main>
      <Hello />
      <AboutMe />
      <Experience />
      <Project />
    </main>
  )
}
