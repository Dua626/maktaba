'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/',          label: 'Home' },
  { href: '/about',     label: 'About' },
  { href: '/catalogue', label: 'Catalogue' },
  { href: '/contact',   label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Image
              src="/images/logo.png"
              alt="Maktaba-e-Iqra Logo"
              width={48}
              height={48}
              className={styles.logoImg}
              priority
            />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoEn}>Maktaba-e-Iqra</span>
            <span className={`${styles.logoAr} arabic-text`}>مکتبہ اقرا</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
              <span className={styles.navUnderline} />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link href="/catalogue" className={styles.ctaBtn}>
          <span>Browse Catalogue</span>
        </Link>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.mobileLink} ${pathname === link.href ? styles.active : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/catalogue" className={styles.mobileCta}>Browse Catalogue</Link>
      </div>
    </header>
  );
}
