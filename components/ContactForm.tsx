import { FormEvent, useState } from 'react'
import styles from './ContactForm.module.css'

const inquiryTypes = ['General question', 'Partnership', 'Media inquiry', 'Volunteer', 'Other']

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: inquiryTypes[0],
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className={styles.wrap}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.field}>
          <span>Name</span>
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label className={styles.field}>
          <span>Email</span>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>

        <label className={styles.field}>
          <span>Organization</span>
          <input name="organization" value={form.organization} onChange={handleChange} />
        </label>

        <label className={styles.field}>
          <span>Inquiry type</span>
          <select name="inquiryType" value={form.inquiryType} onChange={handleChange}>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          <span>Message</span>
          <textarea name="message" rows={6} value={form.message} onChange={handleChange} required />
        </label>

        <button type="submit" className={styles.submit}>Send message</button>
      </form>

      {submitted ? <p className={styles.success}>Thank you. Your message has been captured locally for this build.</p> : null}
    </div>
  )
}
