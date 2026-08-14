import { useEffect, useState } from 'react'
import { profil, sections } from '../data'

export default function Nav() {
  const [stuck, setStuck] = useState(false)
  const [active, setActive] = useState('')

  // Fine ligne sous la nav dès qu'on quitte le haut de page.
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Surligne le lien de la section en cours de lecture.
  useEffect(() => {
    const cibles = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)

    if (!cibles.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const vue = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (vue) setActive(vue.target.id)
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    )

    cibles.forEach((c) => io.observe(c))
    return () => io.disconnect()
  }, [])

  return (
    <nav className={`nav${stuck ? ' is-stuck' : ''}`} aria-label="Navigation principale">
      <div className="wrap nav-inner">
        <a className="nav-brand" href="#top">
          <span className="nav-dot" aria-hidden="true" />
          {profil.prenom} {profil.nom}
        </a>
        <ul className="nav-links">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={active === s.id ? 'is-active' : undefined}
                aria-current={active === s.id ? 'true' : undefined}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
