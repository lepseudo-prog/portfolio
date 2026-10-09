import { useRef, useState } from 'react'
import { useEffect } from 'react'
import Reveal from './Reveal'
import { STATUS_LABELS } from '../data/projects'

function PersoMedia({ project }) {
  const videoRef = useRef(null)
  const reduced = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    reduced.current ??= window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const start = () => {
    if (reduced.current || !videoRef.current) return
    setPlaying(true)
    try {
      videoRef.current.currentTime = 0
    } catch {
      /* metadata pas encore chargée */
    }
    videoRef.current.play().catch(() => setPlaying(false))
  }

  const stop = () => {
    setPlaying(false)
    videoRef.current?.pause()
  }

  return (
    <div
      className="perso__media"
      onMouseEnter={start}
      onMouseLeave={stop}
      tabIndex={-1}
    >
      {project.image && (
        <img
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          loading="lazy"
          decoding="async"
        />
      )}
      {project.video && (
        <video
          ref={videoRef}
          className={playing ? 'is-playing' : ''}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: playing ? 1 : 0,
            transition: 'opacity 0.35s ease',
            pointerEvents: 'none',
          }}
          src={project.video}
          poster={project.image}
          muted
          loop
          playsInline
          preload="none"
          tabIndex={-1}
          aria-hidden="true"
        />
      )}
    </div>
  )
}

export default function Perso({ projects, onOpen }) {
  return (
    <section id="perso" className="section">
      <div className="section__inner">
        <Reveal>
          <h2 className="section__title">Projets perso.</h2>
          <p className="section__subtitle">
            Sans brief ni deadline : un écrit à la main, l'autre construit avec
            l'IA. Les deux sont encore en chantier, et c'est assumé.
          </p>
        </Reveal>
        {projects.map((project) => (
          <Reveal key={project.id}>
            <div
              className={`perso__row ${project.made === 'vibecode' ? 'perso__row--flip' : ''}`}
            >
              <PersoMedia project={project} />
              <div>
                <p className="perso__made">
                  {project.made === 'vibecode' ? 'Vibecodé' : 'Fait main'}
                </p>
                <div className="perso__head">
                  <h3>{project.title}</h3>
                  <span className={`status status--${project.status}`}>
                    {STATUS_LABELS[project.status]}
                  </span>
                </div>
                <p className="perso__summary">{project.summary}</p>
                <p className="perso__desc">{project.description}</p>
                <p className="perso__tech">{project.tech.join(', ')}</p>
                <div className="hero__cta">
                  <a
                    className="btn btn--ghost"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Voir sur GitHub
                  </a>
                  <button
                    className="btn btn--primary"
                    onClick={() => onOpen(project)}
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}