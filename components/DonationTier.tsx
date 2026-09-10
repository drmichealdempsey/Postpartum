import styles from './DonationTier.module.css'

type DonationTierProps = {
  amount: number
  label: string
  selected?: boolean
  onClick?: () => void
}

export default function DonationTier({ amount, label, selected = false, onClick }: DonationTierProps) {
  return (
    <button
      type="button"
      className={`${styles.tier} ${selected ? styles.selected : ''}`}
      onClick={onClick}
      aria-pressed={selected}
    >
      <span className={styles.amount}>${amount.toLocaleString()}</span>
      <span className={styles.label}>{label}</span>
    </button>
  )
}
