import Link from 'next/link'
import { campaign } from '@/lib/campaign'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.pattern} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <div className={styles.brand}>
            <span className={styles.brandMark}>P</span>
            <span>{campaign.name}</span>
          </div>
          <p>{campaign.description}</p>
        </div>

        <div className={styles.column}>
          <h3>Explore</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/campaign">Campaign</Link></li>
            <li><Link href="/impact">Impact</Link></li>
            <li><Link href="/donate">Donate</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Contact</h3>
          <ul>
            <li><a href={`mailto:${campaign.email}`}>{campaign.email}</a></li>
            <li><Link href="/contact">Inquiries</Link></li>
            <li><Link href="/contact">Partnerships</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <span>© {new Date().getFullYear()} {campaign.name}</span>
        <span>Privacy-informed fundraising. Support with dignity.</span>
      </div>
    </footer>
  )
}
