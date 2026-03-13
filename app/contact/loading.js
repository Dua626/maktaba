import { Skeleton, SkeletonText } from '../components/Skeleton';
import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <Skeleton height="12px" width="100px" />
        <Skeleton height="52px" width="240px" />
        <Skeleton height="14px" width="380px" />
      </div>

      {/* Contact grid */}
      <div className={styles.grid}>
        {/* Info side */}
        <div className={styles.info}>
          <Skeleton height="32px" width="80%" />
          <Skeleton height="14px" width="55%" />
          <Skeleton height="2px" width="40px" />
          <SkeletonText lines={2} lastLineWidth="75%" />
          {[1,2,3].map(i => (
            <div key={i} className={styles.infoCard}>
              <Skeleton height="44px" width="44px" borderRadius="8px" />
              <div style={{flex:1, display:'flex', flexDirection:'column', gap:'6px'}}>
                <Skeleton height="14px" width="60%" />
                <Skeleton height="12px" width="80%" />
              </div>
            </div>
          ))}
        </div>

        {/* Form side */}
        <div className={styles.formCard}>
          <Skeleton height="28px" width="55%" />
          <Skeleton height="14px" width="40%" />
          <div className={styles.formRow}>
            <Skeleton height="44px" borderRadius="6px" />
            <Skeleton height="44px" borderRadius="6px" />
          </div>
          <Skeleton height="44px" borderRadius="6px" />
          <Skeleton height="44px" borderRadius="6px" />
          <Skeleton height="120px" borderRadius="6px" />
          <Skeleton height="48px" borderRadius="6px" />
        </div>
      </div>
    </div>
  );
}
