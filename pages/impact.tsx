import Image from 'next/image'
import Head from 'next/head'
import SectionHeading from '@/components/SectionHeading'
import Card from '@/components/Card'
import { campaign } from '@/lib/campaign'
import { images } from '@/lib/images'
import styles from './impact.module.css'

export default function ImpactPage() {
  return (
    <>
      <Head>
        <title>Impact | Postpartum Care Fund</title>
        <meta name="description" content="See how the campaign invests in screening, treatment, advocacy, and support for postpartum mental health." />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroImage} aria-hidden="true">
          <Image src={images.impactPattern} alt="" fill sizes="100vw" className={styles.heroBg} />
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className={styles.container}>
          <SectionHeading
            eyebrow="Impact areas"
            title="Funding the work that protects mothers before crisis deepens."
            description="The campaign centers on practical, high-leverage investments that reduce harm and improve early interventions."
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {campaign.impactAreas.map((item) => (
              <Card key={item.title} className={styles.card}>
                <span className={styles.amount}>{item.amount}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="What improved systems look like"
            title="The goal is earlier recognition, faster support, and more compassionate care."
          />

          <div className={styles.benefits}>
            <div className={styles.benefitItem}>
              <span>01</span>
              <h3>Screening becomes routine</h3>
              <p>Questions about postpartum mental health are normalized and integrated into regular care.</p>
            </div>
            <div className={styles.benefitItem}>
              <span>02</span>
              <h3>Referrals are quicker</h3>
              <p>Patients can connect with support sooner, without waiting for a crisis or a missed opportunity.</p>
            </div>
            <div className={styles.benefitItem}>
              <span>03</span>
              <h3>Care is less stigmatized</h3>
              <p>Families get information and access without shame, confusion, or fear of being dismissed.</p>
            </div>
            <div className={styles.benefitItem}>
              <span>04</span>
              <h3>Systems become accountable</h3>
              <p>Better data, better training, and better follow-through strengthen the care path over time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="The evidence gap"
            title="Too often, the system waits until it is too late."
          />

          <div className={styles.quote}>
            <p>
              Many mothers are not screened, not followed up with, or not believed when they report severe symptoms. We are supporting a response that is earlier, more informed, and more humane.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
