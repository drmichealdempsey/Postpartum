import { useState } from 'react'
import Button from './Button'
import styles from './DonationForm.module.css'

const tiers = [25, 50, 100, 250, 500, 1000, 2500]

export default function DonationForm() {
  const [donation, setDonation] = useState<number>(100)
  const [recurring, setRecurring] = useState<'once' | 'monthly'>('once')

  return (
    <div className={styles.wrap}>
      <div className={styles.tiers}>
        {tiers.map((amount) => (
          <button
            key={amount}
            type="button"
            className={`${styles.tierButton} ${donation === amount ? styles.selected : ''}`}
            onClick={() => setDonation(amount)}
            aria-pressed={donation === amount}
          >
            ${amount.toLocaleString()}
          </button>
        ))}
        <label className={styles.custom}>
          <span>Custom</span>
          <input
            type="number"
            min="5"
            step="5"
            value={donation}
            onChange={(event) => setDonation(Number(event.target.value) || 0)}
            aria-label="Custom donation amount"
          />
        </label>
      </div>

      <div className={styles.toggleRow} role="tablist" aria-label="Donation frequency">
        <button
          type="button"
          role="tab"
          aria-selected={recurring === 'once'}
          className={`${styles.toggle} ${recurring === 'once' ? styles.active : ''}`}
          onClick={() => setRecurring('once')}
        >
          One-time
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={recurring === 'monthly'}
          className={`${styles.toggle} ${recurring === 'monthly' ? styles.active : ''}`}
          onClick={() => setRecurring('monthly')}
        >
          Monthly
        </button>
      </div>

      <div className={styles.summary}>
        <div>
          <span className={styles.label}>Selected donation</span>
          <strong>${donation.toLocaleString()}</strong>
        </div>
        <div>
          <span className={styles.label}>Schedule</span>
          <strong>{recurring === 'once' ? 'One-time' : 'Monthly'}</strong>
        </div>
      </div>

      <div className={styles.security}>
        <span>Secure processing</span>
        <small>PCI-ready donation experience for a future payment provider integration.</small>
      </div>

      <Button href="/contact" className={styles.cta}>Continue to secure donation</Button>
    </div>
  )
}
