import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'
import { campaign } from '@/lib/campaign'
import { images } from '@/lib/images'
import styles from './donate.module.css'

export default function DonatePage() {
  return (
    <>
      <Head>
        <title>Donate | Postpartum Care Fund</title>
        <meta name="description" content="Support postpartum mental health screening, treatment access, and advocacy through the Postpartum Care Fund." />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroImage} aria-hidden="true">
          <Image src={images.donateHope} alt="" fill sizes="100vw" className={styles.heroBg} />
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className={styles.container}>
          <SectionHeading
            eyebrow="Give today"
            title="Your support helps fund earlier care, stronger systems, and more humane responses."
            description="Every contribution helps move this work forward, from screening and treatment access to advocacy and family support."
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {campaign.donationTiers.map((tier) => (
              <div key={tier.label} className={styles.tierCard}>
                <span className={styles.amount}>{tier.amount}</span>
                <h3>{tier.label}</h3>
                <p>{tier.description}</p>
                <Button href="/contact" variant="primary" size="md">
                  Choose {tier.amount}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.supportBox}>
            <div>
              <SectionHeading
                eyebrow="How funds are used"
                title="We are focused on care, not overhead-heavy noise."
              />
            </div>

            <div className={styles.list}>
              {campaign.impactAreas.map((item) => (
                <div key={item.title} className={styles.listItem}>
                  <strong>{item.amount}</strong>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h3>Ready to take action?</h3>
            <p>Support the campaign and help create a more compassionate postpartum care system.</p>
            <div className={styles.actions}>
              <Button href="/contact" variant="primary" size="lg">Donate</Button>
              <Link href="/campaign" className={styles.secondaryLink}>Learn about the campaign</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
