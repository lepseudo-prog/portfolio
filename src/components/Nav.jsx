import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'apropos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'perso', label: 'Perso' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('accueil')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sentinel = document.getElementById('nav-sentinel')
    const obs = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: `-${Math.round(window.innerHeight * 0.05)}px 0px 0px 0px` }
    )
    if (sentinel) obs.observe(sentinel)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a className="nav__logo" href="#accueil" aria-label="Retour à l'accueil">
        mathieu<em>.</em>p
      </a>
      <button
        className={`nav__burger ${open ? 'is-open' : ''}`}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Navigation principale">
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={active === l.id ? 'is-active' : ''}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  )
}