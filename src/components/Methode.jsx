import { methode } from '../data'
import Reveal from './Reveal'

export default function Methode() {
  return (
    <section className="section methode" id="methode">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="section-num">05</span>
          <h2 className="section-title">Ma façon de travailler</h2>
        </Reveal>

        <Reveal as="p" className="lead">
          Tout ce qui suit vient de choses que j'ai réellement faites pendant mon
          stage ou mes projets. Pas de méthode théorique.
        </Reveal>

        <ul className="methode-liste">
          {methode.map((bloc, i) => (
            <Reveal as="li" key={bloc.num} className="methode-item" delay={i * 50}>
              <span className="methode-num">{bloc.num}</span>
              <h3 className="methode-q">{bloc.question}</h3>
              <p className="methode-a">{bloc.reponse}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
