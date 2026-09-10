import { FormEvent, useState } from 'react'
import { supabase } from '@/lib/supabase'
import styles from './NewsletterSignup.module.css'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    if (!email.trim()) {
      setError('Please enter an email address.')
      setLoading(false)
      return
    }

    try {
      const { error: insertError } = await supabase.from('campaign_signups').insert([
        {
          email: email.trim(),
          name: name.trim() || 'Anonymous',
          message: message.trim() || null,
          created_at: new Date().toISOString(),
        },
      ])

      if (insertError) throw insertError

      setSuccess(true)
      setEmail('')
      setName('')
      setMessage('')
    } catch (err: any) {
      setError(err?.message || 'Unable to save your signup right now. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.panel}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>Stay informed</p>
        <h3>Get campaign updates and care resources.</h3>
      </div>

      {error ? <p className={styles.error}>{error}</p> : null}
      {success ? (
        <p className={styles.success}>Thanks for signing up. We’ll be in touch with campaign updates.</p>
      ) : null}

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.field}>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="your@email.com"
            aria-label="Email"
            required
          />
        </label>

        <label className={styles.field}>
          <span>Name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            aria-label="Name"
          />
        </label>

        <label className={styles.field}>
          <span>Message</span>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Why does this matter to you?"
            aria-label="Message"
          />
        </label>

        <button type="submit" className={styles.submit} disabled={loading}>
          {loading ? 'Signing up…' : 'Sign up for updates'}
        </button>
      </form>
    </div>
  )
}
