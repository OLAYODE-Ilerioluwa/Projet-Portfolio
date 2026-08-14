import { useEffect, useRef, useState } from 'react'

/**
 * Fait apparaître son contenu quand il entre dans le viewport.
 * Si le visiteur a demandé moins d'animations dans son système, on affiche
 * directement sans transition.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={['reveal', visible ? 'is-in' : '', className].filter(Boolean).join(' ')}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
