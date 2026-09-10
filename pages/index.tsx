import Image from 'next/image'
import Head from 'next/head'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import Card from '@/components/Card'
import ImpactCard from '@/components/ImpactCard'
import CampaignProgress from '@/components/CampaignProgress'
import NewsletterSignup from '@/components/NewsletterSignup'
import { campaign } from '@/lib/campaign'
import { images } from '@/lib/images'
import styles from './index.module.css'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Postpartum Care Fund | Support mothers before crisis escalates</title>
        <meta
          name="description"
          content="Support postpartum mental health screening, treatment access, and advocacy through a care-first campaign rooted in dignity and public health."
        />
      </Head>

      <Hero />

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="What we’re changing"
            title="We believe postpartum care should be early, humane, and consistent."
            description="The campaign focuses on the systems that too often miss the warning signs and leave families without timely support."
          />

          <div className={styles.gridFour}>
            {campaign.whatWereChanging.map((item) => (
              <Card key={item.title} className={styles.featureCard}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.editorial}>
            <div>
              <SectionHeading
                eyebrow="Why this matters"
                title="Care gaps often become crises when people are already overwhelmed."
              />
            </div>

            <div className={styles.timeline}>
              {campaign.whyItMatters.map((item) => (
                <div key={item.label} className={styles.timelineItem}>
                  <span>{item.label}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.lindsayWrap}>
            <div className={styles.lindsayImage}> 
              <Image src={images.lindsaySupport} alt="Healthcare support and maternal care" width={700} height={520} />
            </div>

            <div className={styles.lindsayText}>
              <SectionHeading
                eyebrow="A case that changed the conversation"
                title="The Lindsay Clancy case has become part of a national conversation about postpartum mental health, psychiatric care, and the systems surrounding new mothers."
              />

              <div className={styles.lindsayList}>
                <p>It illustrates gaps we’re working to close:</p>
                <ul>
                  <li>Inadequate screening during postpartum care</li>
                  <li>Limited access to mental health treatment</li>
                  <li>Misunderstanding of postpartum psychosis symptoms</li>
                  <li>Legal and criminal justice system response to maternal mental health crisis</li>
                </ul>
                <p>
                  This campaign focuses on preventing future tragedies by funding better screening protocols, treatment access, research on prevention, and advocacy for women in crisis.
                </p>
                <a href="/campaign" className={styles.linkButton}>Read full campaign context</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="The human story"
            title="Respectful, fact-based advocacy for a difficult and deeply personal issue."
            description="The campaign addresses the realities seen in the Lindsay Clancy case while centering the need for better postpartum care, screening, and public understanding."
          />

          <div className={styles.caseStudy}>
            <div className={styles.caseText}>
              <p>
                Postpartum mental health is a public-health issue, not a character flaw. When symptoms are missed or delayed, the consequences can be devastating for mothers, families, and communities.
              </p>
              <p>
                This work is grounded in the reality that better screening, compassionate care, and stronger support structures can reduce harm long before a crisis happens.
              </p>
            </div>
            <div className={styles.callout}>
              <strong>We are funding prevention and support.</strong>
              <span>Not stigma. Not silence. Not a one-size-fits-all response.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Where your donation goes"
            title="Support the parts of the system that need to work better."
          />

          <div className={styles.gridFour}>
            {campaign.impactAreas.map((item) => (
              <ImpactCard
                key={item.title}
                title={item.title}
                description={item.description}
                amount={item.amount}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Progress dashboard"
            title="Live fundraising summary for the campaign."
          />
          <div className={styles.progressWrap}>
            <CampaignProgress />
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Roadmap"
            title="A practical five-stage plan for care and accountability."
          />

          <div className={styles.stageGrid}>
            {campaign.campaignStages.map((stage) => (
              <div key={stage.stage} className={styles.stageCard}>
                <span>{stage.stage}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Support network"
            title="The work is bigger than one moment. It is about changing the system around mothers."
          />

          <div className={styles.quoteBox}>
            <p>
              "We are building a stronger and more humane postpartum care pathway—one that recognizes risk early, responds with dignity, and makes support accessible before crisis deepens."
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <NewsletterSignup />
        </div>
      </section>
    </>
  )
}
