import { Skeleton, SkeletonText } from '../components/Skeleton';
import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <Skeleton height="12px" width="100px" />
        <Skeleton height="52px" width="320px" />
        <Skeleton height="14px" width="200px" />
      </div>

      {/* Story */}
      <div className={styles.story}>
        <div className={styles.storyLeft}>
          <Skeleton height="240px" width="220px" borderRadius="50%" />
        </div>
        <div className={styles.storyRight}>
          <Skeleton height="12px" width="80px" />
          <Skeleton height="38px" width="70%" />
          <Skeleton height="2px" width="50px" />
          <SkeletonText lines={4} lastLineWidth="55%" />
        </div>
      </div>

      {/* Values */}
      <div className={styles.values}>
        {[1,2,3,4].map(i => (
          <div key={i} className={styles.valueCard}>
            <Skeleton height="56px" width="56px" borderRadius="50%" />
            <Skeleton height="18px" width="80%" />
            <Skeleton height="12px" width="55%" />
            <SkeletonText lines={2} lastLineWidth="70%" />
          </div>
        ))}
      </div>
    </div>
  );
}
