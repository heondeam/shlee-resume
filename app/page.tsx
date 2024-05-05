import AboutMe from '@/components/main/about-me'
import Experience from '@/components/main/experience'
import Hello from '@/components/main/hello'
import Project from '@components/main/project'

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
