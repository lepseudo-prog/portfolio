import Reveal from './Reveal'

export default function Contact() {
  return (
    <footer id="contact" className="footer">
      <Reveal>
        <h2>Une question, une idée ?</h2>
        <p>Le plus simple reste de passer sur GitHub.</p>
        <div className="footer__cta">
          <a
            className="btn btn--primary"
            href="https://github.com/lepseudo-prog"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <p className="footer__copy">© 2026 Mathieu Phoulchand</p>
      </Reveal>
    </footer>
  )
}