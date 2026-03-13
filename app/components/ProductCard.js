import Link from 'next/link';
import styles from './ProductCard.module.css';

function BookIcon({ color = 'var(--teal)' }) {
  return (
    <svg width="64" height="80" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="4" width="48" height="68" rx="4" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5"/>
      <rect x="8" y="4" width="10" height="68" rx="2" fill={color} opacity="0.35"/>
      <line x1="24" y1="22" x2="48" y2="22" stroke={color} strokeWidth="1.5" opacity="0.6"/>
      <line x1="24" y1="32" x2="48" y2="32" stroke={color} strokeWidth="1.5" opacity="0.5"/>
      <line x1="24" y1="42" x2="40" y2="42" stroke={color} strokeWidth="1.5" opacity="0.4"/>
      <circle cx="32" cy="60" r="4" fill={color} opacity="0.5"/>
    </svg>
  );
}

function PackIcon({ color = 'var(--teal)' }) {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="16" width="40" height="56" rx="3" fill={color} opacity="0.1" stroke={color} strokeWidth="1.5"/>
      <rect x="4" y="16" width="8" height="56" rx="2" fill={color} opacity="0.3"/>
      <rect x="14" y="10" width="40" height="56" rx="3" fill={color} opacity="0.12" stroke={color} strokeWidth="1.5"/>
      <rect x="14" y="10" width="8" height="56" rx="2" fill={color} opacity="0.3"/>
      <rect x="24" y="4" width="40" height="56" rx="3" fill={color} opacity="0.2" stroke={color} strokeWidth="1.5"/>
      <rect x="24" y="4" width="8" height="56" rx="2" fill={color} opacity="0.4"/>
      <line x1="38" y1="20" x2="56" y2="20" stroke={color} strokeWidth="1.5" opacity="0.6"/>
      <line x1="38" y1="30" x2="56" y2="30" stroke={color} strokeWidth="1" opacity="0.5"/>
      <line x1="38" y1="40" x2="50" y2="40" stroke={color} strokeWidth="1" opacity="0.4"/>
      <polygon points="40,52 52,46 52,58" fill={color} opacity="0.6"/>
    </svg>
  );
}

export default function ProductCard({ product }) {
  const isPack = product.category === 'Course Packs';
  const savings = product.originalPrice ? product.originalPrice - product.price : 0;

  return (
    <div className={styles.card}>
      {product.badge && (
        <span className={styles.badge}>{product.badge}</span>
      )}

      <div className={styles.imageArea} style={{ '--card-color': product.color }}>
        <div className={styles.iconWrap}>
          {isPack
            ? <PackIcon color={product.color || 'var(--teal)'} />
            : <BookIcon color={product.color || 'var(--teal)'} />
          }
        </div>
        <div className={styles.categoryTag}>{product.category}</div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={`${styles.nameUrdu} arabic-text`}>{product.nameUrdu}</p>
        <p className={styles.desc}>{product.description}</p>

        {isPack && product.includes.length > 0 && (
          <div className={styles.includes}>
            <span className={styles.includesLabel}>Pack includes:</span>
            <ul className={styles.includesList}>
              {product.includes.slice(0, 4).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
              {product.includes.length > 4 && (
                <li className={styles.moreItems}>+{product.includes.length - 4} more items</li>
              )}
            </ul>
          </div>
        )}

        <div className={styles.footer}>
          <div className={styles.priceBlock}>
            <span className={styles.price}>₨ {product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className={styles.originalPrice}>₨ {product.originalPrice.toLocaleString()}</span>
            )}
          </div>
          {savings > 0 && (
            <span className={styles.savings}>Save ₨{savings}</span>
          )}
        </div>

        <button className={styles.orderBtn}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Order on WhatsApp
        </button>
      </div>
    </div>
  );
}
