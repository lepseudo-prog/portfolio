import { useRef, useState } from 'react'
import { STATUS_LABELS } from '../data/projects'

export default function ProjectCard({ project, onOpen, compact = false }) {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const reduced = useRef(null)
  const [playing, setPlaying] = useState(false)

  const startVideo = () => {
    reduced.current ??= window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced.current || !videoRef.current) return
    setPlaying(true)
    try {
      videoRef.current.currentTime = 0
    } catch {
      /* metadata pas encore chargée */
    }
    videoRef.current.play().catch(() => setPlaying(false))
  }

  const stopVideo = () => {
    setPlaying(false)
    videoRef.current?.pause()
  }

  const onMove = (e) => {
    if (compact) return
    reduced.current ??= window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced.current) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.setProperty('--rx', `${(-y * 5).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(x * 6).toFixed(2)}deg`)
  }

  const onLeave = () => {
    stopVideo()
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  const open = () => onOpen(project)

  return (
    <article
      ref={ref}
      className="card"
      onMouseMove={onMove}
      onMouseEnter={startVideo}
      onMouseLeave={onLeave}
      onBlur={stopVideo}
      onClick={open}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          open()
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`En savoir plus sur ${project.title}`}
    >
      {project.image && (
        <div className="card__media">
          <img
            className="card__img"
            src={project.image}
            alt={`Aperçu du projet ${project.title}`}
            loading="lazy"
            decoding="async"
          />
          {project.video && (
            <video
              ref={videoRef}
              className={`card__video ${playing ? 'is-playing' : ''}`}
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
      )}
      <div className="card__body">
        <div className="card__head">
          <h3>{project.title}</h3>
          <span className={`status status--${project.status}`}>
            {STATUS_LABELS[project.status]}
          </span>
        </div>
        {!compact && <p className="card__summary">{project.summary}</p>}
        <p className="card__tech">{project.tech.join(', ')}</p>
      </div>
    </article>
  )
}