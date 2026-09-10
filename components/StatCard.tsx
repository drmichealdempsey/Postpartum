import styles from './StatCard.module.css'

type StatCardProps = {
  label: string
  value: string
  tone?: 'primary' | 'muted'
}

export default function StatCard({ label, value, tone = 'primary' }: StatCardProps) {
  return (
    <div className={`${styles.card} ${tone === 'muted' ? styles.muted : ''}`}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}
