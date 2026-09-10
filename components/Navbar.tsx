import Link from 'next/link'
import { useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '/', label: 'Home' },
  { href: '/campaign', label: 'Campaign' },
  { href: '/impact', label: 'Impact' },
  { href: '/donate', label: 'Donate' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Home">
          <span className={styles.brandMark}>P</span>
          <span>Postpartum Care Fund</span>
        </Link>

        <nav aria-label="Main navigation" className={`${styles.nav} ${open ? styles.open : ''}`}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/donate" className={styles.cta} onClick={() => setOpen(false)}>
            Donate
          </Link>
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
