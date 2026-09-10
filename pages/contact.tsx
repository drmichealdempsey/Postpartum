import Image from 'next/image'
import Head from 'next/head'
import ContactForm from '@/components/ContactForm'
import SectionHeading from '@/components/SectionHeading'
import { images } from '@/lib/images'
import styles from './contact.module.css'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Postpartum Care Fund</title>
        <meta name="description" content="Get in touch about donations, support, partnerships, or questions about the postpartum care campaign." />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroImage} aria-hidden="true">
          <Image src={images.careSupport} alt="" fill sizes="100vw" className={styles.heroBg} />
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className={styles.container}>
          <SectionHeading
            eyebrow="Contact"
            title="Questions, partnerships, or support requests? We’re here to listen."
            description="Reach out for campaign questions, collaboration opportunities, or media and community conversations."
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.infoCard}>
              <h3>Speak with the campaign team</h3>
              <p>We welcome thoughtful conversations from supporters, collaborators, and community partners.</p>
              <ul>
                <li>Donations and giving questions</li>
                <li>Partnership and outreach inquiries</li>
                <li>Media and advocacy conversations</li>
              </ul>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
