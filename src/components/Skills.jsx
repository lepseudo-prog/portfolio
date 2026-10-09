import Reveal from './Reveal'

const GROUPS = [
  {
    title: 'Langages',
    items: ['Python', 'C', 'Java', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Bibliothèques & outils',
    items: ['React', 'Vite', 'pandas', 'PyTorch', 'Git', 'Linux'],
  },
  {
    title: 'En cours d’apprentissage',
    items: ['DQN / RL', 'Smart Money Concepts', 'Développement web'],
  },
]

export default function Skills() {
  return (
    <section id="competences" className="section">
      <div className="section__inner">
        <Reveal>
          <h2 className="section__title">Outils du quotidien.</h2>
          <p className="section__subtitle">
            Ce qui tourne sur ma machine, ce qui tourne dans mes projets.
          </p>
        </Reveal>
        <div className="skills__grid">
          {GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div className="skills__group">
                <h3>{group.title}</h3>
                <ul className="chips">
                  {group.items.map((item) => (
                    <li className="chip" key={item} tabIndex={0}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}