import { projetPrincipal as p, projets, projetsPerso } from '../data'
import Reveal from './Reveal'

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li className="tag" key={t}>
          {t}
        </li>
      ))}
    </ul>
  )
}

export default function Projets() {
  return (
    <section className="section" id="projets">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="section-num">03</span>
          <h2 className="section-title">Projets</h2>
        </Reveal>

        {/* ---------- Projet principal : le stage ---------- */}
        <Reveal className="projet-featured">
          <div className="projet-featured-head">
            <span className="projet-tag">{p.tag}</span>
            <h3 className="projet-nom">{p.nom}</h3>
            <p className="projet-contexte">{p.contexte}</p>
          </div>

          <div className="projet-body">
            <div className="projet-bloc">
              <p className="bloc-label">Objectif</p>
              <p className="bloc-texte">{p.objectif}</p>
              <div style={{ marginTop: '1.5rem' }}>
                <p className="bloc-label">Technologies</p>
                <Tags items={p.technos} />
              </div>
            </div>

            <div className="projet-bloc">
              <p className="bloc-label">Ce que j'ai fait</p>
              <ul className="bloc-liste">
                {p.realise.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="projet-bloc is-full">
              <p className="bloc-label">Difficultés rencontrées</p>
              <ul className="diff-liste">
                {p.difficultes.map((d) => (
                  <li key={d.titre}>
                    <h4 className="diff-titre">{d.titre}</h4>
                    <p className="diff-texte">{d.texte}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="montre">
              <p className="bloc-label">Ce que ce projet dit de ma façon de travailler</p>
              <p>{p.montre}</p>
            </div>
          </div>
        </Reveal>

        {/* ---------- Projets d'école ---------- */}
        {projets.map((pr) => (
          <Reveal className="projet-carte" key={pr.nom}>
            <h3 className="projet-nom">{pr.nom}</h3>
            <p className="projet-contexte">{pr.contexte}</p>

            {pr.lien && (
              <a
                className="projet-lien"
                href={pr.lien.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {pr.lien.label} <span className="arrow">→</span>
              </a>
            )}

            <div className="projet-carte-grid">
              <div>
                <p className="bloc-label">Objectif</p>
                <p className="bloc-texte">{pr.objectif}</p>
                <div style={{ marginTop: '1.5rem' }}>
                  <p className="bloc-label">Technologies</p>
                  <Tags items={pr.technos} />
                </div>
              </div>
              <div>
                <p className="bloc-label">Ce que j'ai fait</p>
                <ul className="bloc-liste">
                  {pr.realise.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="montre-inline">{pr.montre}</p>
            {pr.suite && <p className="projet-suite">{pr.suite}</p>}
          </Reveal>
        ))}

        {/* ---------- Projets personnels ---------- */}
        <Reveal as="h3" className="perso-titre">
          Projets personnels et scolaires
        </Reveal>

        <div className="perso-grid">
          {projetsPerso.map((pp, i) => (
            <Reveal className="perso-carte" key={pp.nom} delay={i * 55}>
              <div className="perso-head">
                <h4 className="perso-nom">{pp.nom}</h4>
                {pp.etat && <span className="perso-etat">{pp.etat}</span>}
              </div>
              <p className="perso-desc">{pp.desc}</p>
              <Tags items={pp.technos} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
