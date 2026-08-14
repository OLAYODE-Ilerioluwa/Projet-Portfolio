import { competences } from '../data'
import Reveal from './Reveal'

export default function Competences() {
  return (
    <section className="section" id="competences">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="section-num">02</span>
          <h2 className="section-title">Compétences</h2>
        </Reveal>

        <Reveal as="p" className="lead" style={{ marginBottom: '2.25rem' }}>
          Ce que j'utilise réellement. Les technologies que je découvre encore sont
          rangées à part. Je préfère que ce soit clair.
        </Reveal>

        <div className="comp-grid">
          {competences.map((groupe, i) => (
            <Reveal
              key={groupe.titre}
              delay={i * 70}
              className={[
                'comp-card',
                groupe.fort ? 'is-fort' : '',
                groupe.encours ? 'is-encours' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <div className="comp-head">
                <h3 className="comp-titre">{groupe.titre}</h3>
                {groupe.fort && <span className="comp-badge">Point fort</span>}
              </div>
              <p className="comp-note">{groupe.note}</p>
              <ul className="tags">
                {groupe.items.map((item) => (
                  <li className="tag" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
