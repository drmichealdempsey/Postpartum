import styles from './ResourceCard.module.css'

type ResourceCardProps = {
  title: string
  description: string
  href: string
}

export default function ResourceCard({ title, description, href }: ResourceCardProps) {
  return (
    <a href={href} className={styles.card}>
      <span className={styles.label}>Resource</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  )
}
