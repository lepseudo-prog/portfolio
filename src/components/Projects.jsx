import Reveal from './Reveal'
import ProjectCard from './ProjectCard'

const GROUPS = [
  {
    id: 'licence',
    label: 'Licence : Java, C, web et un peu de robotique',
    variant: 'large',
    levels: ['licence'],
  },
  {
    id: 'lycee',
    label: 'Lycée : là où tout a commencé, en Python',
    variant: 'compact',
    levels: ['lycee'],
  },
]

export default function Projects({ projects, onOpen }) {
  return (
    <section id="projets" className="section">
      <div className="section__inner">
        <Reveal>
          <h2 className="section__title">Les projets de cours.</h2>
          <p className="section__subtitle">
            Survolez une carte pour voir le projet tourner, cliquez pour les
            détails.
          </p>
        </Reveal>
        {GROUPS.map((group) => {
          const items = projects.filter((p) => group.levels.includes(p.level))
          if (!items.length) return null
          return (
            <div className="projects__group" key={group.id}>
              <Reveal>
                <p className="projects__group-label">{group.label}</p>
              </Reveal>
              <div className={`projects__grid projects__grid--${group.variant}`}>
                {items.map((p, i) => (
                  <Reveal key={p.id} delay={i * 70}>
                    <ProjectCard project={p} onOpen={onOpen} compact={group.variant === 'compact'} />
                  </Reveal>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
