import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Perso from './components/Perso'
import Contact from './components/Contact'
import ProjectModal from './components/ProjectModal'
import { PROJECTS, PERSO_PROJECTS } from './data/projects'

export default function App() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <Nav />
      <div id="nav-sentinel" aria-hidden="true" />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects projects={PROJECTS} onOpen={setSelected} />
        <Perso projects={PERSO_PROJECTS} onOpen={setSelected} />
      </main>
      <Contact />
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}