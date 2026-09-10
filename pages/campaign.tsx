import Image from 'next/image'
import Head from 'next/head'
import SectionHeading from '@/components/SectionHeading'
import Card from '@/components/Card'
import { campaign } from '@/lib/campaign'
import { images } from '@/lib/images'
import styles from './campaign.module.css'

export default function CampaignPage() {
  return (
    <>
      <Head>
        <title>Campaign | Postpartum Care Fund</title>
        <meta name="description" content="Learn about the postpartum care campaign mission, roadmap, and the work we are supporting." />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroImage} aria-hidden="true">
          <Image src={images.careSupport} alt="" fill sizes="100vw" className={styles.heroBg} />
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className={styles.container}>
          <SectionHeading
            eyebrow="Our mission"
            title="A care-first campaign rooted in prevention, dignity, and accountability."
            description={campaign.mission}
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Campaign roadmap"
            title="A clear pathway from awareness to meaningful support."
          />

          <div className={styles.grid}>
            {campaign.campaignStages.map((stage) => (
              <Card key={stage.stage} className={styles.card}>
                <span className={styles.stage}>{stage.stage}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="30-day goal"
            title="What this campaign is trying to move quickly in the next month."
          />

          <div className={styles.goalGrid}>
            <div className={styles.goalPanel}>
              <h3>1. Increase visibility</h3>
              <p>Make postpartum care and screening a more common conversation among caregivers, families, and communities.</p>
            </div>
            <div className={styles.goalPanel}>
              <h3>2. Expand support access</h3>
              <p>Fund practical referral pathways and recovery support for mothers who need timely care and guidance.</p>
            </div>
            <div className={styles.goalPanel}>
              <h3>3. Strengthen accountability</h3>
              <p>Push for more humane, informed systems that recognize symptoms earlier instead of waiting for crisis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Who we serve"
            title="Families, caregivers, and providers who need better postpartum support."
          />

          <div className={styles.listGrid}>
            <div className={styles.listPanel}>
              <h3>Mothers and families</h3>
              <p>Women navigating postpartum mental-health symptoms and the daily burden of care, recovery, and family life.</p>
            </div>
            <div className={styles.listPanel}>
              <h3>Clinicians and care teams</h3>
              <p>Providers who need better pathways to screening, referral protocols, and follow-up support.</p>
            </div>
            <div className={styles.listPanel}>
              <h3>Community advocates</h3>
              <p>Organizers and supporters working to shift the culture around postpartum care and mental health.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Transparency"
            title="We are committed to making the work visible and accountable."
          />

          <div className={styles.transparency}>
            <p>
              We will share progress, spending priorities, and impact updates as the campaign moves forward. The goal is a funding model that is clear, responsible, and grounded in direct support rather than vague appeals.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Partners"
            title="We work with people and organizations who care about practical support."
          />

          <ul className={styles.partnerList}>
            {campaign.partners.map((partner) => (
              <li key={partner}>{partner}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
