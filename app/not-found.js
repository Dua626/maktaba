import Link from 'next/link';
import styles from './not-found.module.css';

export const metadata = {
  title: '404 — Page Not Found | Maktaba-e-Iqra',
};

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      {/* Animated background */}
      <div className={styles.bg}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.grid} />
      </div>

      {/* Floating geometric shapes */}
      <div className={styles.shapes}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`${styles.shape} ${styles[`shape${i + 1}`]}`} />
        ))}
      </div>

      <div className={styles.content}>
        {/* Large decorative 404 */}
        <div className={styles.codeWrap}>
          <span className={styles.codeLeft}>4</span>
          <div className={styles.codeCenter}>
            <svg viewBox="0 0 120 120" fill="none" className={styles.hexSvg}>
              <polygon
                points="60,6 114,33 114,87 60,114 6,87 6,33"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="2"
              />
              <polygon
                points="60,20 100,42 100,78 60,100 20,78 20,42"
                fill="rgba(42,124,124,0.12)"
                stroke="var(--teal-light)"
                strokeWidth="1"
                opacity="0.7"
              />
              <text
                x="60" y="68"
                textAnchor="middle"
                fill="var(--gold)"
                fontFamily="Scheherazade New"
                fontSize="38"
                fontWeight="700"
              >
                ؟
              </text>
            </svg>
          </div>
          <span className={styles.codeRight}>4</span>
        </div>

        {/* Message */}
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={`${styles.titleAr} arabic-text`}>صفحہ نہیں ملا</p>

        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" stroke="var(--gold)" strokeWidth="1.5" fill="none"/>
            <circle cx="12" cy="12" r="3" fill="var(--gold)" opacity="0.6"/>
          </svg>
          <span className={styles.dividerLine} />
        </div>

        <p className={styles.desc}>
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>
        <p className={`${styles.descAr} arabic-text`}>
          یہ صفحہ موجود نہیں ہے — واپس جائیں
        </p>

        {/* Navigation options */}
        <div className={styles.links}>
          <Link href="/" className={styles.linkPrimary}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>
            Go Home
          </Link>
          <Link href="/catalogue" className={styles.linkSecondary}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
            </svg>
            Browse Catalogue
          </Link>
          <Link href="/contact" className={styles.linkGhost}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            Contact Us
          </Link>
        </div>

        {/* Breadcrumb hint */}
        <p className={styles.hint}>
          Looking for a book? Try{' '}
          <Link href="/catalogue?category=Course Packs" className={styles.hintLink}>
            Course Packs
          </Link>
          {' '}or{' '}
          <Link href="/catalogue" className={styles.hintLink}>
            All Products
          </Link>
        </p>
      </div>
    </div>
  );
}
