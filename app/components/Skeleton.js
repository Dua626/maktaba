import styles from './Skeleton.module.css';

export function Skeleton({ width, height, borderRadius, className = '' }) {
  return (
    <div
      className={`${styles.skeleton} ${className}`}
      style={{
        width: width || '100%',
        height: height || '16px',
        borderRadius: borderRadius || '4px',
      }}
    />
  );
}

export function SkeletonText({ lines = 3, lastLineWidth = '70%' }) {
  return (
    <div className={styles.textBlock}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height="13px"
          width={i === lines - 1 ? lastLineWidth : '100%'}
        />
      ))}
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className={styles.productCard}>
      {/* Image area */}
      <div className={styles.productImage}>
        <Skeleton width="64px" height="80px" borderRadius="4px" />
      </div>
      {/* Body */}
      <div className={styles.productBody}>
        <Skeleton height="18px" width="80%" />
        <Skeleton height="12px" width="55%" />
        <SkeletonText lines={2} lastLineWidth="60%" />
        <div className={styles.productIncludes}>
          {[1,2,3].map(i => (
            <Skeleton key={i} height="11px" width={`${60 + i * 10}%`} />
          ))}
        </div>
        <div className={styles.productFooter}>
          <Skeleton height="22px" width="90px" />
          <Skeleton height="14px" width="60px" />
        </div>
        <Skeleton height="40px" borderRadius="6px" />
      </div>
    </div>
  );
}

export function CataloguePageSkeleton() {
  return (
    <div className={styles.cataloguePage}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <Skeleton height="13px" width="100px" />
        <Skeleton height="52px" width="220px" />
        <Skeleton height="13px" width="280px" />
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.controlsRow}>
          <Skeleton height="44px" borderRadius="6px" />
          <Skeleton height="44px" width="180px" borderRadius="6px" />
        </div>
        <div className={styles.filters}>
          {[80, 55, 100, 80, 110, 90, 110].map((w, i) => (
            <Skeleton key={i} height="32px" width={`${w}px`} borderRadius="100px" />
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

export function HomePageSkeleton() {
  return (
    <div className={styles.homePage}>
      {/* Hero */}
      <div className={styles.heroSkeleton}>
        <div className={styles.heroLeft}>
          <Skeleton height="32px" width="180px" borderRadius="100px" />
          <Skeleton height="72px" width="85%" />
          <Skeleton height="20px" width="50%" />
          <SkeletonText lines={2} lastLineWidth="80%" />
          <div className={styles.heroBtns}>
            <Skeleton height="48px" width="160px" borderRadius="6px" />
            <Skeleton height="48px" width="130px" borderRadius="6px" />
          </div>
        </div>
        <div className={styles.heroRight}>
          <Skeleton height="280px" width="280px" borderRadius="12px" />
        </div>
      </div>

      {/* Featured */}
      <div className={styles.featuredSkeleton}>
        <div className={styles.sectionHead}>
          <Skeleton height="12px" width="120px" />
          <Skeleton height="42px" width="280px" />
          <SkeletonText lines={2} lastLineWidth="65%" />
        </div>
        <div className={styles.grid}>
          {[1,2,3].map(i => <ProductCardSkeleton key={i} />)}
        </div>
      </div>
    </div>
  );
}
