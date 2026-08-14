import Nav from './components/Nav'
import Hero from './components/Hero'
import APropos from './components/APropos'
import Competences from './components/Competences'
import Projets from './components/Projets'
import Parcours from './components/Parcours'
import Methode from './components/Methode'
import Contact, { Footer } from './components/Contact'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#apropos">
        Aller au contenu
      </a>
      <Nav />
      <main>
        <Hero />
        <APropos />
        <Competences />
        <Projets />
        <Parcours />
        <Methode />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
