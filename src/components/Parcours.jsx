import { parcours } from '../data'
import Reveal from './Reveal'

export default function Parcours() {
  return (
    <section className="section" id="parcours">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="section-num">04</span>
          <h2 className="section-title">Parcours</h2>
        </Reveal>

        <ul className="timeline">
          {parcours.map((etape, i) => (
            <Reveal
              as="li"
              key={etape.periode + etape.titre}
              className="tl-item"
              data-type={etape.type}
              delay={i * 60}
            >
              <div className="tl-periode">
                {etape.periode}
                <span className="tl-type">{etape.type}</span>
              </div>
              <div>
                <h3 className="tl-titre">{etape.titre}</h3>
                {etape.lieu && <p className="tl-lieu">{etape.lieu}</p>}
                <p className="tl-detail">{etape.detail}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
