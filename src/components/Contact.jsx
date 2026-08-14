import { contact, profil } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  const externe = (href) => href.startsWith('http')

  return (
      <section className="contact" id="contact">
        <div className="wrap">
          <Reveal as="h2" className="contact-accroche">
            On en parle<em>&nbsp;?</em>
          </Reveal>

          <Reveal as="p" className="contact-intro" delay={80}>
            {contact.intro}
          </Reveal>

          <Reveal className="contact-grid" delay={140}>
            {contact.liens.map((l) => (
              <a
                className="contact-lien"
                key={l.label}
                href={l.href}
                target={externe(l.href) ? '_blank' : undefined}
                rel={externe(l.href) ? 'noreferrer noopener' : undefined}
              >
                <span className="contact-lab">{l.label}</span>
                <span className="contact-val">
                  {l.valeur} <span className="arrow">→</span>
                </span>
              </a>
            ))}
          </Reveal>
        </div>
      </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span className="footer-nom">{profil.nomComplet}</span>
        <span>
          {profil.formation} · {profil.lieu}
        </span>
        <span>Site réalisé en React</span>
      </div>
    </footer>
  )
}
