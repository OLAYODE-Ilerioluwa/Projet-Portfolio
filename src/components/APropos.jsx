import { aPropos, certifications, langues } from '../data'
import Reveal from './Reveal'

export default function APropos() {
  return (
    <section className="section" id="apropos">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="section-num">01</span>
          <h2 className="section-title">À propos</h2>
        </Reveal>

        <div className="apropos-grid">
          <Reveal className="apropos-text">
            {aPropos.map((paragraphe, i) => (
              <p key={i}>{paragraphe}</p>
            ))}
          </Reveal>

          <Reveal delay={120}>
            <div className="aside-card">
              <h3 className="aside-title">Langues</h3>
              <dl>
                {langues.map((l) => (
                  <div className="aside-row" key={l.langue}>
                    <dt>{l.langue}</dt>
                    <dd>{l.niveau}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="aside-card">
              <h3 className="aside-title">Certifications</h3>
              <dl>
                {certifications.map((c) => (
                  <div className="aside-row" key={c.nom}>
                    <dt>{c.nom}</dt>
                    <dd>{c.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
