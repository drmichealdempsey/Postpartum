export const campaign = {
  name: 'Postpartum Care & Justice Fund',
  title: 'Support mothers, families, and care systems before crisis becomes catastrophe.',
  mission:
    'We fund early screening, timely treatment, and compassionate advocacy for postpartum mental health so families can access support before crisis escalates.',
  description:
    'This campaign supports direct outreach, clinical screening, and legal advocacy for women navigating postpartum mental health challenges. The goal is practical support rooted in dignity, evidence, and accountability.',
  email:
    process.env.NEXT_PUBLIC_CAMPAIGN_EMAIL || 'hello@postpartumcarefund.org',
  socialLinks: {
    instagram: '#',
    x: '#',
    linkedin: '#',
    newsletter: '#',
  },
  whatWereChanging: [
    {
      title: 'Screening before crisis',
      text: 'Increase postpartum mental-health screening and follow-up in primary care and OB settings so symptoms are addressed early.',
    },
    {
      title: 'Faster access to care',
      text: 'Support therapy, medication access, care navigation, and recovery planning for mothers navigating postpartum depression and psychosis.',
    },
    {
      title: 'Systemic accountability',
      text: 'Push for safer, more informed care pathways and stronger community protections for pregnant and postpartum people.',
    },
    {
      title: 'Public understanding',
      text: 'Uplift honest conversations about postpartum mental health so families are supported instead of isolated.',
    },
  ],
  whyItMatters: [
    {
      label: '1. Early detection',
      text: 'Symptoms are often missed during postpartum visits. Earlier screening creates a clearer path to treatment and support.',
    },
    {
      label: '2. Access and follow-up',
      text: 'When care is delayed or inconsistent, problems worsen. Funding helps bridge the gap between recognition and treatment.',
    },
    {
      label: '3. Safety and dignity',
      text: 'Women deserve compassionate care and clear protections, not stigma or criminalization when they reach crisis.',
    },
  ],
  timeline: [
    'Community listening and research review',
    'Care pathway design and partner outreach',
    'Screening tool rollout and education',
    'Support access and follow-up services',
    'Impact review and continued advocacy',
  ],
  impactAreas: [
    {
      title: 'Screening support',
      description: 'Funding for intake, screening tools, and care coordination.',
      amount: '$18K',
    },
    {
      title: 'Treatment access',
      description: 'Support for therapy, medication navigation, and referral pathways.',
      amount: '$26K',
    },
    {
      title: 'Community education',
      description: 'Training, materials, and public education for families and providers.',
      amount: '$14K',
    },
    {
      title: 'Advocacy & response',
      description: 'Legal, policy, and public-interest support for better care systems.',
      amount: '$42K',
    },
  ],
  campaignStages: [
    {
      stage: 'Phase 1',
      title: 'Listen and assess',
      text: 'Gather lived experience, identify care gaps, and shape a practical response.',
    },
    {
      stage: 'Phase 2',
      title: 'Build access',
      text: 'Fund screening, referrals, and follow-up support for mothers in need.',
    },
    {
      stage: 'Phase 3',
      title: 'Support families',
      text: 'Connect families to care, advocacy, and recovery plans that reduce barriers.',
    },
    {
      stage: 'Phase 4',
      title: 'Strengthen systems',
      text: 'Work with providers and advocates to improve postpartum care quality and response.',
    },
    {
      stage: 'Phase 5',
      title: 'Measure progress',
      text: 'Track impact, share learnings, and refine support strategies over time.',
    },
  ],
  donationTiers: [
    { amount: 25, label: 'Supporter', description: 'Help fund screening and referral support for mothers in need.' },
    { amount: 50, label: 'Care Partner', description: 'Expand access to postpartum support services and follow-up care.' },
    { amount: 100, label: 'Advocate', description: 'Contribute to education, community outreach, and care navigation.' },
    { amount: 250, label: 'Guardian', description: 'Fuel a stronger safety net for mothers facing postpartum mental-health challenges.' },
    { amount: 500, label: 'Champion', description: 'Back systems-level advocacy and more responsive clinical pathways.' },
    { amount: 1000, label: 'Catalyst', description: 'Accelerate practical support and substantial community impact.' },
    { amount: 2500, label: 'Leadership Circle', description: 'Create lasting momentum for prevention, treatment, and care accountability.' },
  ],
  resources: [
    {
      title: 'Postpartum mental health basics',
      description: 'Practical information on symptoms, risk factors, and screening.',
      href: '#',
    },
    {
      title: 'Care pathway guide',
      description: 'What to ask for and where to begin when symptoms show up.',
      href: '#',
    },
    {
      title: 'Family support checklist',
      description: 'A simple guide for partners, family members, and care teams.',
      href: '#',
    },
  ],
  partners: [
    'Clinicians and postpartum advocates',
    'Mental-health care teams',
    'Public-health practitioners',
    'Community organizers',
  ],
  faqs: [
    {
      question: 'How will funds be used?',
      answer:
        'Funds support screening, treatment access, public education, and advocacy work designed to help families before crisis deepens.',
    },
    {
      question: 'Is this a donation campaign or a legal campaign?',
      answer:
        'It is a broad campaign for postpartum mental-health support, care pathways, public education, and advocacy tied to the systems that failed too many mothers.',
    },
    {
      question: 'Can I give monthly?',
      answer:
        'Yes. The donation flow includes both one-time and recurring options, with secure processing handled through a future payment integration.',
    },
  ],
}

export type CampaignContent = typeof campaign
