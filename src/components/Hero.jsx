import { chiffres, profil } from '../data'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <>
      <header className="hero" id="top">
        <div className="wrap hero-inner">
          <Reveal className="hero-status" as="p">
            {profil.statut}
          </Reveal>

          <Reveal as="h1" className="hero-name" delay={60}>
            {profil.prenom}
            <span className="line-2">
              {profil.nom}
              <span className="period">.</span>
            </span>
          </Reveal>

          <Reveal className="hero-meta" delay={140}>
            <span>{profil.metier}</span>
            <span>{profil.specialite}</span>
            <span>{profil.lieu}</span>
          </Reveal>

          <Reveal as="p" className="hero-accroche" delay={200}>
            {profil.accroche}
          </Reveal>

          <Reveal as="p" className="hero-sub" delay={250}>
            {profil.sousTitre}
          </Reveal>

          <Reveal className="hero-cta" delay={300}>
            <a className="btn btn-primary" href="#projets">
              Voir ce que j'ai fait <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href="#contact">
              Me contacter
            </a>
          </Reveal>
        </div>
      </header>

      <section className="chiffres" aria-label="Chiffres du stage chez Oratis IA">
        <div className="wrap">
          <div className="chiffres-grid">
            {chiffres.map((c, i) => (
              <Reveal className="chiffre" key={c.label} delay={i * 70}>
                <span className="chiffre-val">{c.valeur}</span>
                <span className="chiffre-lab">{c.label}</span>
              </Reveal>
            ))}
          </div>
          <p className="chiffres-note">
            Stage Oratis IA · mai à juin 2026
          </p>
        </div>
      </section>
    </>
  )
}
