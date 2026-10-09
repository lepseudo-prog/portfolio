import bashBuildShot from '../assets/projects/bash-build.webp'
import calculShot from '../assets/projects/calcul-mental.webp'

export default function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Étudiant M2 IA · Université des Antilles</p>
        <h1 className="hero__title">Mathieu Phoulchand</h1>
        <p className="hero__sub">
          Neuf projets faits main, du jeu Tkinter au robot en carton. Le code,
          les démos et les vidéos sont là.
        </p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#projets">
            Voir les projets
          </a>
          <a
            className="btn btn--ghost"
            href="https://github.com/lepseudo-prog"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <img
          className="hero__img hero__img--main"
          src={bashBuildShot}
          alt=""
          loading="eager"
        />
        <img
          className="hero__img hero__img--small"
          src={calculShot}
          alt=""
          loading="eager"
        />
      </div>
    </section>
  )
}