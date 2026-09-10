import { useState, useEffect } from 'react'
import Head from 'next/head'
import { supabase } from '@/lib/supabase'

interface CampaignStats {
  funds_raised: number
  donor_count: number
  goal_amount: number
}

export default function Home() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [stats, setStats] = useState<CampaignStats>({
    funds_raised: 34500,
    donor_count: 1240,
    goal_amount: 100000,
  })

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const { data, error } = await supabase
        .from('campaign_stats')
        .select('funds_raised, donor_count, goal_amount')
        .single()

      if (error) throw error
      if (data) setStats(data)
    } catch (err) {
      console.log('Using default stats (Supabase not yet configured)')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!email) {
      setError('Email is required')
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.from('campaign_signups').insert([
        {
          email,
          name: name || 'Anonymous',
          message: message || null,
          created_at: new Date().toISOString(),
        },
      ])

      if (error) throw error

      setSubmitted(true)
      setEmail('')
      setName('')
      setMessage('')
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err: any) {
      setError(err.message || 'Failed to sign up. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const progressPercent = Math.round(
    (stats.funds_raised / stats.goal_amount) * 100
  )

  return (
    <>
      <Head>
        <title>Postpartum Depression Support Campaign</title>
        <meta
          name="description"
          content="Funding legal advocacy, treatment access, and systemic change for postpartum mental health."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, sans-serif;
          background: #fafafa;
          color: #1a1a1a;
        }

        body.dark {
          background: #0a0a0a;
          color: #fff;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font-family: inherit;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          overflow: hidden;
        }

        .hero {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: white;
          padding: 4rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          right: -100px;
          width: 300px;
          height: 300px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hero-stat {
          font-size: 48px;
          font-weight: 600;
          line-height: 1.1;
          margin-bottom: 1rem;
          background: linear-gradient(120deg, #60a5fa, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-message {
          font-size: 20px;
          line-height: 1.6;
          opacity: 0.95;
          font-weight: 400;
          max-width: 520px;
        }

        .hero-message strong {
          font-weight: 500;
        }

        .story {
          padding: 3rem 2rem;
          background: #fff;
          border-bottom: 1px solid #e5e5e5;
        }

        .story-label {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #3b82f6;
          margin-bottom: 0.75rem;
        }

        .story-quote {
          font-size: 24px;
          line-height: 1.5;
          font-weight: 500;
          color: #1a1a1a;
          border-left: 4px solid #3b82f6;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .story-meta {
          font-size: 14px;
          color: #666;
          font-style: italic;
        }

        .gap-section {
          padding: 3rem 2rem;
          background: #f3f4f6;
        }

        .gap-title {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 1.5rem;
          color: #1a1a1a;
        }

        .gap-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .gap-item {
          padding: 1.5rem;
          background: #fff;
          border-radius: 12px;
          border: 1px solid #e5e5e5;
        }

        .gap-item h3 {
          font-size: 16px;
          font-weight: 500;
          color: #dc2626;
          margin-bottom: 0.75rem;
        }

        .gap-item p {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
        }

        .solution {
          padding: 3rem 2rem;
          background: #fff;
        }

        .solution-title {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 2rem;
          color: #1a1a1a;
        }

        .solution-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .solution-item {
          padding: 2rem;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.08),
            rgba(139, 92, 246, 0.08)
          );
          border-radius: 12px;
          border: 1px solid #e5e5e5;
        }

        .solution-number {
          display: inline-block;
          font-size: 28px;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 0.5rem;
        }

        .solution-item h3 {
          font-size: 16px;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 0.75rem;
        }

        .solution-item p {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
        }

        .progress-section {
          padding: 3rem 2rem;
          background: #f3f4f6;
          text-align: center;
        }

        .progress-title {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 1.5rem;
          color: #1a1a1a;
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background: #e5e7eb;
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          width: ${progressPercent}%;
          border-radius: 3px;
          transition: width 0.3s ease;
        }

        .progress-stats {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .stat-box {
          padding: 1rem;
          background: #fff;
          border-radius: 8px;
          border: 1px solid #e5e5e5;
        }

        .stat-number {
          display: block;
          font-size: 20px;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 12px;
          color: #666;
          line-height: 1.4;
        }

        .donation-section {
          padding: 3rem 2rem;
          background: #fff;
        }

        .donation-title {
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 1.5rem;
          color: #1a1a1a;
          text-align: center;
        }

        .donation-tiers {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .tier {
          padding: 1.5rem 1rem;
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 12px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s;
        }

        .tier:hover {
          border-color: #3b82f6;
          background: #f0f4ff;
          transform: translateY(-2px);
        }

        .tier-amount {
          display: block;
          font-size: 20px;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 0.5rem;
        }

        .tier-name {
          font-size: 13px;
          color: #666;
          font-weight: 500;
        }

        .form-section {
          margin-bottom: 2rem;
          padding: 2rem;
          background: #f3f4f6;
          border-radius: 12px;
        }

        .form-title {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 1.25rem;
          color: #1a1a1a;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #1a1a1a;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 80px;
        }

        .cta-button {
          display: block;
          width: 100%;
          padding: 1.25rem;
          background: linear-gradient(120deg, #3b82f6, #2563eb);
          color: white;
          font-size: 16px;
          font-weight: 500;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .cta-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
        }

        .cta-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .error-message {
          padding: 0.75rem;
          background: #fee2e2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          color: #dc2626;
          font-size: 14px;
          margin-bottom: 1rem;
        }

        .success-message {
          padding: 0.75rem;
          background: #dcfce7;
          border: 1px solid #bbf7d0;
          border-radius: 8px;
          color: #15803d;
          font-size: 14px;
          margin-bottom: 1rem;
        }

        .footer {
          padding: 2rem;
          background: #f3f4f6;
          text-align: center;
          font-size: 13px;
          color: #666;
          border-top: 1px solid #e5e5e5;
        }

        .footer a {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 500;
        }

        .footer a:hover {
          text-decoration: underline;
        }

        @media (max-width: 640px) {
          .hero-stat {
            font-size: 36px;
          }

          .hero-message {
            font-size: 18px;
          }

          .story-quote {
            font-size: 20px;
          }

          .solution-grid {
            grid-template-columns: 1fr;
          }

          .gap-grid {
            grid-template-columns: 1fr;
          }

          .donation-tiers {
            grid-template-columns: 1fr 1fr;
          }

          .progress-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <div className="hero-stat">1 in 7</div>
            <div className="hero-message">
              Mothers experience postpartum depression.
              <br />
              <strong>Most are never screened.</strong> Some reach crisis. That's
              where the system fails.
            </div>
          </div>
        </div>

        <div className="story">
          <div className="story-label">Real Story</div>
          <div className="story-quote">
            "I felt like I wasn't in my own body. The intrusive thoughts
            terrified me. My OB never asked how I was really doing. I spiraled
            for months."
          </div>
          <div className="story-meta">
            — A mother who experienced postpartum depression (name withheld)
          </div>
        </div>

        <div className="gap-section">
          <div className="gap-title">Why This Keeps Happening</div>
          <div className="gap-grid">
            <div className="gap-item">
              <h3>The Screening Gap</h3>
              <p>
                Only 15% of new mothers are screened for PPD during postpartum
                care—despite simple tests that take 5 minutes.
              </p>
            </div>
            <div className="gap-item">
              <h3>The Treatment Gap</h3>
              <p>
                Access to therapy and medication is limited. Especially for
                low-income women and women of color.
              </p>
            </div>
            <div className="gap-item">
              <h3>The Justice Gap</h3>
              <p>
                Women in mental health crisis are criminalized instead of
                supported. Lindsay Clancy deserves advocacy, not incarceration.
              </p>
            </div>
            <div className="gap-item">
              <h3>The Shame Gap</h3>
              <p>
                Postpartum depression is stigmatized. Mothers suffer in
                silence. We're breaking that silence.
              </p>
            </div>
          </div>
        </div>

        <div className="solution">
          <div className="solution-title">What $100K Funds</div>
          <div className="solution-grid">
            <div className="solution-item">
              <div className="solution-number">1</div>
              <h3>Legal Advocacy</h3>
              <p>
                Support for Lindsay Clancy and women facing criminalization for
                postpartum mental health crises.
              </p>
            </div>
            <div className="solution-item">
              <div className="solution-number">2</div>
              <h3>Screening Programs</h3>
              <p>
                Training hospitals and OB offices on evidence-based postpartum
                depression screening protocols.
              </p>
            </div>
            <div className="solution-item">
              <div className="solution-number">3</div>
              <h3>Treatment Access</h3>
              <p>
                Funding therapy, medication, and support services for mothers
                who can't afford care.
              </p>
            </div>
            <div className="solution-item">
              <div className="solution-number">4</div>
              <h3>Research & Prevention</h3>
              <p>
                Supporting clinical trials on postpartum psychosis prevention
                and early detection.
              </p>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-title">Campaign Progress</div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <div className="progress-stats">
            <div className="stat-box">
              <span className="stat-number">
                ${(stats.funds_raised / 1000).toFixed(1)}K
              </span>
              <span className="stat-label">raised so far</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">{progressPercent}%</span>
              <span className="stat-label">toward goal</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">{stats.donor_count.toLocaleString()}</span>
              <span className="stat-label">supporters</span>
            </div>
          </div>
        </div>

        <div className="donation-section">
          <div className="form-section">
            <div className="form-title">Stay Updated → Get Campaign News</div>

            {error && <div className="error-message">{error}</div>}
            {submitted && (
              <div className="success-message">
                ✓ Thanks for signing up. Check your email for campaign updates.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Name (optional)</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (optional)</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Why this campaign matters to you..."
                />
              </div>

              <button
                type="submit"
                className="cta-button"
                disabled={loading}
              >
                {loading ? 'Signing up...' : 'Sign Up for Updates'}
              </button>
            </form>
          </div>

          <div className="donation-title">Make Your Impact</div>

          <div className="donation-tiers">
            <div className="tier">
              <span className="tier-amount">$25</span>
              <span className="tier-name">Ally</span>
            </div>
            <div className="tier">
              <span className="tier-amount">$100</span>
              <span className="tier-name">Advocate</span>
            </div>
            <div className="tier">
              <span className="tier-amount">$500</span>
              <span className="tier-name">Champion</span>
            </div>
            <div className="tier">
              <span className="tier-amount">$2.5K+</span>
              <span className="tier-name">Guardian</span>
            </div>
          </div>

          <button className="cta-button">
            Donate Now → Help Us Reach $100K
          </button>
        </div>

        <div className="footer">
          <p>
            100% tax-deductible through our nonprofit partner.{' '}
            <a href="#">See how funds are allocated</a> •{' '}
            <a href="#">Questions?</a> • Campaign ends in 16 days
          </p>
        </div>
      </div>
    </>
  )
}
