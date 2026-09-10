import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import styles from './CampaignProgress.module.css'

type CampaignStats = {
  funds_raised: number
  donor_count: number
  goal_amount: number
}

const fallbackStats: CampaignStats = {
  funds_raised: 34500,
  donor_count: 1240,
  goal_amount: 100000,
}

export default function CampaignProgress() {
  const [stats, setStats] = useState<CampaignStats>(fallbackStats)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data, error } = await supabase
          .from('campaign_stats')
          .select('funds_raised, donor_count, goal_amount')
          .single()

        if (!error && data) {
          setStats(data)
        }
      } catch (error) {
        console.log('Using default stats while Supabase config is incomplete')
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const progress = Math.min((stats.funds_raised / stats.goal_amount) * 100, 100)
  const remaining = Math.max(stats.goal_amount - stats.funds_raised, 0)

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Live campaign</p>
          <h3>Campaign goal progress</h3>
        </div>
        <span className={styles.badge}>{loading ? 'Syncing…' : `${Math.round(progress)}%`}</span>
      </div>

      <div className={styles.amount}>${stats.funds_raised.toLocaleString()}</div>
      <p className={styles.meta}>Raised for postpartum care, screening, and advocacy.</p>

      <div className={styles.barTrack} aria-label="Campaign progress">
        <div className={styles.barFill} style={{ width: `${progress}%` }} />
      </div>

      <div className={styles.statsGrid}>
        <div>
          <span className={styles.statValue}>${remaining.toLocaleString()}</span>
          <span className={styles.statLabel}>to goal</span>
        </div>
        <div>
          <span className={styles.statValue}>{stats.donor_count.toLocaleString()}</span>
          <span className={styles.statLabel}>donors</span>
        </div>
        <div>
          <span className={styles.statValue}>${stats.goal_amount.toLocaleString()}</span>
          <span className={styles.statLabel}>goal</span>
        </div>
      </div>
    </div>
  )
}
