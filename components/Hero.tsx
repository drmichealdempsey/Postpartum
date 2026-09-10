import Image from 'next/image'
import Button from './Button'
import { images } from '@/lib/images'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrap} aria-hidden="true">
        <Image
          src={images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
        />
      </div>

      <div className={styles.overlay} aria-hidden="true" />

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
            <Image src={images.careSupport} alt="Supportive care and family wellbeing" width={560} height={420} priority />
          </div>
        </div>
      </div>
    </section>
  )
}
