import styles from './about.module.css';

export const metadata = {
  title: 'About | Maktaba-e-Iqra',
};

export default function AboutPage() {
  const values = [
    { icon: '📖', title: 'Knowledge First', urdu: 'علم سب سے پہلے', desc: 'We believe every child deserves access to quality educational resources to build a strong academic foundation.' },
    { icon: '🕌', title: 'Islamic Values', urdu: 'اسلامی اقدار', desc: 'Our catalogue reflects the Iqra curriculum that integrates Islamic teachings with modern education.' },
    { icon: '🤝', title: 'Community Trust', urdu: 'اعتماد کا رشتہ', desc: 'We serve thousands of families across Pakistan who trust us for their children\'s academic needs.' },
    { icon: '✨', title: 'Quality Assured', urdu: 'معیار کی ضمانت', desc: 'Every book and course pack is genuine, sourced directly from publishers with full quality assurance.' },
  ];

  const team = [
    { name: 'Founder', title: 'Educational Consultant', urdu: 'تعلیمی مشیر', initial: 'F' },
    { name: 'Operations', title: 'Fulfilment & Logistics', urdu: 'آپریشنز', initial: 'O' },
    { name: 'Support', title: 'Customer Relations', urdu: 'کسٹمر سپورٹ', initial: 'S' },
  ];

  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerBg} />
        <div className={`container ${styles.headerInner}`}>
          <span className="section-label">Our Story</span>
          <h1 className={styles.headerTitle}>About Maktaba-e-Iqra</h1>
          <p className={`${styles.headerAr} arabic-text`}>مکتبہ اقرا کے بارے میں</p>
          <span className="ornament-center ornament" />
        </div>
      </section>

      {/* Story */}
      <section className={`section ${styles.story}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyLeft}>
              <div className={styles.storyVisual}>
                <div className={styles.storyHex}>
                  <svg width="220" height="254" viewBox="0 0 220 254">
                    <polygon points="110,10 210,65 210,189 110,244 10,189 10,65" fill="none" stroke="var(--gold)" strokeWidth="1.5" opacity="0.4"/>
                    <polygon points="110,30 190,76 190,178 110,224 30,178 30,76" fill="rgba(42,124,124,0.08)" stroke="var(--teal-light)" strokeWidth="1" opacity="0.5"/>
                    <text x="110" y="120" textAnchor="middle" fill="var(--gold)" fontFamily="Scheherazade New" fontSize="40" fontWeight="600">اقرا</text>
                    <text x="110" y="160" textAnchor="middle" fill="var(--cream)" fontFamily="Cormorant Garamond" fontSize="14" fontWeight="500" letterSpacing="3" opacity="0.7">MAKTABA</text>
                    <text x="110" y="180" textAnchor="middle" fill="var(--teal-light)" fontFamily="Cormorant Garamond" fontSize="11" letterSpacing="2" opacity="0.5">E — IQRA</text>
                  </svg>
                </div>
                <div className={styles.storyBadge}>
                  <span className={styles.storyBadgeNum}>100%</span>
                  <span className={styles.storyBadgeLabel}>Authentic</span>
                </div>
              </div>
            </div>
            <div className={styles.storyRight}>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">Built for Pakistani Families</h2>
              <span className="ornament" />
              <p className="section-subtitle" style={{maxWidth:'100%'}}>
                Maktaba-e-Iqra was founded with a single mission — to make quality educational materials easily accessible for Pakistani families following the Iqra curriculum.
              </p>
              <br />
              <p style={{fontSize:'0.9rem', color:'var(--text-muted)', lineHeight:'1.9'}}>
                We understand how stressful school preparation can be. Searching for individual books, running from one shop to another, worrying about stock — we've eliminated all of that. Our carefully curated course packs put everything a student needs into one convenient, fairly priced bundle.
              </p>
              <br />
              <p className={`${styles.storyQuote} arabic-text`}>
                "اقرا بِاسمِ رَبِّکَ الَّذِی خَلَق"
              </p>
              <p style={{fontSize:'0.75rem', color:'var(--text-subtle)', marginTop:'6px'}}>
                — Read in the name of your Lord who created (Surah Al-Alaq, 96:1)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">Our Values</h2>
            <span className="ornament-center ornament" />
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <span className={`${styles.valueUrdu} arabic-text`}>{v.urdu}</span>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { num: '3', label: 'Course Packs', urdu: 'کورس پیک' },
              { num: '18+', label: 'Products', urdu: 'مصنوعات' },
              { num: 'PKR', label: 'Currency', urdu: 'پاکستانی روپیہ' },
              { num: '🇵🇰', label: 'Proudly Pakistani', urdu: 'فخرِ پاکستان' },
            ].map((s, i) => (
              <div key={i} className={styles.statBlock}>
                <span className={styles.statBlockNum}>{s.num}</span>
                <span className={styles.statBlockLabel}>{s.label}</span>
                <span className={`${styles.statBlockUrdu} arabic-text`}>{s.urdu}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-label">The People Behind It</span>
            <h2 className="section-title">Our Team</h2>
            <span className="ornament-center ornament" />
          </div>
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <div key={i} className={styles.teamCard}>
                <div className={styles.teamAvatar}>
                  {member.initial}
                </div>
                <h4 className={styles.teamName}>{member.name}</h4>
                <span className={styles.teamTitle}>{member.title}</span>
                <span className={`${styles.teamUrdu} arabic-text`}>{member.urdu}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
