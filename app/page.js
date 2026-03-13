import Link from 'next/link';
import { products } from './data/products';
import ProductCard from './components/ProductCard';
import styles from './page.module.css';

const featured = products.filter(p => p.category === 'Course Packs');

const testimonials = [
  {
    name: 'Fatima Malik',
    nameUrdu: 'فاطمہ ملک',
    location: 'Lahore',
    text: 'The Class 1 course pack saved me so much time! Everything was perfectly bundled and the quality of books is excellent. My daughter is very happy.',
    textUrdu: 'جماعت اول کا کورس پیک بہت کام آیا۔ سب کچھ ایک جگہ ملا اور کتابوں کا معیار بھی بہترین ہے۔',
    stars: 5,
  },
  {
    name: 'Ahmed Raza',
    nameUrdu: 'احمد رضا',
    location: 'Karachi',
    text: 'Maktaba-e-Iqra has made school preparation stress-free. The course packs are complete and priced very fairly. Highly recommend!',
    textUrdu: 'مکتبہ اقرا نے اسکول کی تیاری بہت آسان کر دی۔ کورس پیک مکمل اور قیمت بھی مناسب ہے۔',
    stars: 5,
  },
  {
    name: 'Sara Qureshi',
    nameUrdu: 'سارہ قریشی',
    location: 'Islamabad',
    text: 'Ordered course packs for both my children. Delivery was quick and the books are exactly as described. Will order again next year!',
    textUrdu: 'دونوں بچوں کے لیے کورس پیک منگوائے۔ ڈیلیوری جلدی ہوئی اور کتابیں بالکل ویسی تھیں جیسا بتایا گیا تھا۔',
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
          <div className={styles.heroPattern} />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>
              <span className={styles.labelDot} />
              اقرا — Read &amp; Learn
            </span>

            <h1 className={styles.heroTitle}>
              Maktaba<span className={styles.heroAccent}>-e-</span>Iqra
            </h1>
            <p className={`${styles.heroTitleAr} arabic-text`}>مکتبہ اقرا</p>

            <p className={styles.heroTagline}>
              Comprehensive information, facilities &amp; services<br />
              related to the Iqra Education System
            </p>
            <p className={`${styles.heroTaglineAr} arabic-text`}>
              اقرا نظامِ تعلیم سے متعلق جامع معلومات، سہولیات و خدمات
            </p>

            <div className={styles.heroCtas}>
              <Link href="/catalogue" className="btn-primary">
                <span>Browse Catalogue</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/about" className="btn-outline">
                <span>About Us</span>
              </Link>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>3</span>
                <span className={styles.statLabel}>Course Packs</span>
              </div>
              <span className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>18+</span>
                <span className={styles.statLabel}>Products</span>
              </div>
              <span className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>Authentic</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroBook}>
              <div className={styles.bookStack}>
                {['#2a7c7c','#c9a84c','#8fad9a'].map((c, i) => (
                  <div key={i} className={styles.bookItem} style={{ '--bc': c, '--bi': i }}>
                    <div className={styles.bookSpine} />
                    <div className={styles.bookCover} />
                  </div>
                ))}
              </div>
              <div className={styles.hexBadge}>
                <svg width="100" height="115" viewBox="0 0 100 115">
                  <polygon points="50,5 95,30 95,85 50,110 5,85 5,30" fill="var(--teal-dark)" stroke="var(--gold)" strokeWidth="2"/>
                  <text x="50" y="52" textAnchor="middle" fill="var(--cream)" fontFamily="Scheherazade New" fontSize="18" fontWeight="600">اقرا</text>
                  <text x="50" y="75" textAnchor="middle" fill="var(--gold)" fontFamily="Jost" fontSize="8" letterSpacing="2" textTransform="uppercase">IQRA</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.heroScroll}>
          <span />
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className={`section ${styles.featuredSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-label">Course Packs</span>
            <h2 className="section-title">Complete Class Bundles</h2>
            <span className="ornament-center ornament" />
            <p className="section-subtitle">
              Save time and money with our all-in-one course packs — every book, diary and homework copy your child needs, bundled perfectly.
            </p>
            <p className={`${styles.sectionSubAr} arabic-text`}>
              ایک ہی جگہ سب کچھ — کتابیں، ڈائری اور کاپیاں
            </p>
          </div>

          <div className={styles.productsGrid}>
            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className={styles.viewAll}>
            <Link href="/catalogue" className="btn-outline">
              View All Products &nbsp;→
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyLeft}>
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title">Quality You Can<br />Trust</h2>
              <span className="ornament" />
              <p className="section-subtitle">
                Maktaba-e-Iqra is dedicated to providing authentic, high-quality educational material for Pakistani students following the Iqra curriculum.
              </p>
            </div>
            <div className={styles.whyRight}>
              {[
                { icon: '📚', title: 'Authentic Books', urdu: 'مستند کتابیں', desc: 'Only genuine Iqra curriculum books — no reproductions.' },
                { icon: '💰', title: 'Fair Pricing', urdu: 'مناسب قیمت', desc: 'Competitive prices with bundle discounts on course packs.' },
                { icon: '📦', title: 'Complete Packs', urdu: 'مکمل پیکیج', desc: 'Everything in one order — no last-minute running around.' },
                { icon: '🚀', title: 'Fast Delivery', urdu: 'تیز ڈیلیوری', desc: 'Quick dispatch across Pakistan via trusted courier.' },
              ].map((item, i) => (
                <div key={i} className={styles.whyCard}>
                  <span className={styles.whyIcon}>{item.icon}</span>
                  <div>
                    <h4 className={styles.whyTitle}>{item.title}</h4>
                    <span className={`${styles.whyUrdu} arabic-text`}>{item.urdu}</span>
                    <p className={styles.whyDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={`section ${styles.testSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-label">Customer Reviews</span>
            <h2 className="section-title">What Parents Say</h2>
            <span className="ornament-center ornament" />
          </div>
          <div className={styles.testGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.testCard}>
                <div className={styles.testStars}>
                  {'★'.repeat(t.stars)}
                </div>
                <p className={styles.testText}>"{t.text}"</p>
                <p className={`${styles.testTextAr} arabic-text`}>"{t.textUrdu}"</p>
                <div className={styles.testAuthor}>
                  <div className={styles.testAvatar}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <span className={styles.testName}>{t.name}</span>
                    <span className={`${styles.testNameAr} arabic-text`}>{t.nameUrdu}</span>
                    <span className={styles.testLocation}>{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg} />
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaDecor}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <polygon points="40,4 76,22 76,58 40,76 4,58 4,22" stroke="var(--gold)" strokeWidth="1.5" fill="none" opacity="0.4"/>
              <polygon points="40,14 66,27 66,53 40,66 14,53 14,27" stroke="var(--teal-light)" strokeWidth="1" fill="none" opacity="0.3"/>
              <circle cx="40" cy="40" r="8" fill="var(--gold)" opacity="0.2"/>
              <circle cx="40" cy="40" r="3" fill="var(--gold)" opacity="0.6"/>
            </svg>
          </div>
          <h2 className={styles.ctaTitle}>Ready to Order?</h2>
          <p className={`${styles.ctaTitleAr} arabic-text`}>آج ہی آرڈر کریں</p>
          <p className={styles.ctaDesc}>
            Get in touch via WhatsApp or our contact form — we're here to help you find the right books for your child.
          </p>
          <div className={styles.ctaBtns}>
            <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className={styles.ctaWhatsapp}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <Link href="/contact" className="btn-outline">Contact Form</Link>
          </div>
        </div>
      </section>
    </>
  );
}
