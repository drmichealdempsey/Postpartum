import styles from './ImpactCard.module.css'

type ImpactCardProps = {
  title: string
  description: string
  amount?: string
}

export default function ImpactCard({ title, description, amount }: ImpactCardProps) {
  return (
    <article className={styles.card}>
      {amount ? <span className={styles.amount}>{amount}</span> : null}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
