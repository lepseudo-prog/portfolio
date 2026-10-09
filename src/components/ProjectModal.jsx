import { useEffect, useState } from 'react'
import { STATUS_LABELS } from '../data/projects'

export default function ProjectModal({ project, onClose }) {
  const [reduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const showVideo = project.video && !reduced

  return (
    <div
      className="modal"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Détails du projet ${project.title}`}
    >
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Fermer">
          ×
        </button>
        <div className="modal__head">
          <h3>{project.title}</h3>
          <span className={`status status--${project.status}`}>
            {STATUS_LABELS[project.status]}
          </span>
        </div>
        <p className="modal__tech">{project.tech.join(', ')}</p>
        {showVideo ? (
          <video
            className="modal__img"
            src={project.video}
            poster={project.image}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          project.image && (
            <img
              className="modal__img"
              src={project.image}
              alt={`Aperçu du projet ${project.title}`}
            />
          )
        )}
        <p className="modal__desc">{project.description}</p>
        <h4>Points clés</h4>
        <ul>
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <a
          className="modal__link"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          Voir le code sur GitHub
        </a>
      </div>
    </div>
  )
}