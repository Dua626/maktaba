'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './PageTransition.module.css';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [stage, setStage] = useState('idle'); // idle | exit | enter
  const prevPathname = useRef(pathname);
  const timeouts = useRef([]);

  const clearAllTimeouts = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  };

  useEffect(() => {
    if (pathname === prevPathname.current) return;

    clearAllTimeouts();

    // 1. Start exit animation
    setStage('exit');

    // 2. Swap content mid-transition, start enter
    const t1 = setTimeout(() => {
      setDisplayChildren(children);
      prevPathname.current = pathname;
      setStage('enter');
    }, 320);

    // 3. Return to idle
    const t2 = setTimeout(() => {
      setStage('idle');
    }, 700);

    timeouts.current = [t1, t2];

    return clearAllTimeouts;
  }, [pathname, children]);

  // Keep children fresh when same page re-renders
  useEffect(() => {
    if (pathname === prevPathname.current) {
      setDisplayChildren(children);
    }
  }, [children, pathname]);

  return (
    <>
      {/* Top progress bar */}
      <div className={`${styles.progressBar} ${stage !== 'idle' ? styles.progressActive : ''}`} />

      {/* Page content */}
      <div className={`
        ${styles.page}
        ${stage === 'exit' ? styles.exit : ''}
        ${stage === 'enter' ? styles.enter : ''}
        ${stage === 'idle' ? styles.idle : ''}
      `}>
        {displayChildren}
      </div>
    </>
  );
}
