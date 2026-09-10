import Image from 'next/image'
import Button from './Button'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>A care-first campaign</p>
          <h1>Support mothers before postpartum crisis becomes a public health emergency.</h1>
          <p className={styles.lead}>
            We fund screening, treatment access, and advocacy so families can get care early and without shame.
          </p>
          <div className={styles.actions}>
            <Button href="/donate">Give now</Button>
            <Button href="/campaign" variant="secondary">Learn more</Button>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.cardFrame}>
            <Image src="/hero-illustration.svg" alt="Illustration of support for postpartum care" width={560} height={420} priority />
          </div>
        </div>
      </div>
    </section>
  )
}
