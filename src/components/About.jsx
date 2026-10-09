import { useEffect, useRef } from 'react'
import Reveal from './Reveal'

function CountUp({ to, suffix = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = `${to}${suffix}`
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        obs.disconnect()
        const start = performance.now()
        const duration = 1100
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1)
          el.textContent = `${Math.round(to * (1 - Math.pow(1 - p, 3)))}${suffix}`
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [to, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const FACTS = [
  { value: 11, suffix: '', label: 'projets présentés' },
  { value: 70, suffix: '+', label: 'mots dans le Pendu' },
  { value: 18, suffix: '', label: 'traitements d’images' },
  { value: 1000000, suffix: '', label: 'frames d’entraînement IA' },
]

export default function About() {
  return (
    <section id="apropos" className="section">
      <div className="section__inner about__grid">
        <div>
          <Reveal>
            <h2 className="section__title">Tout est parti d’un jeu.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="about__text">
              Je m'appelle <strong>Mathieu Phoulchand</strong>, étudiant en{' '}
              <strong>master 2 d'intelligence artificielle</strong> à l'{''}
              <strong>Université des Antilles</strong>. J'ai découvert la
              programmation au lycée avec <strong>Python</strong> : des jeux,
              des simulations, des petits outils… puis en{' '}
              <strong>licence</strong>, j'ai exploré <strong>Java</strong>,{' '}
              <strong>C</strong> et le web avec un éditeur de dessin, du
              traitement d'images et quelques jeux. Aujourd'hui je construis
              des choses pour de vrai, avec l'IA comme alliée et le clavier
              comme outil principal.
            </p>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="facts">
            {FACTS.map((f) => (
              <div className="fact" key={f.label}>
                <span className="fact__num">
                  <CountUp to={f.value} suffix={f.suffix} />
                </span>
                <span className="fact__label">{f.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}