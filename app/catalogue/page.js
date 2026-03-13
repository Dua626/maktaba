'use client';
import { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import styles from './catalogue.module.css';

export default function CataloguePage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.nameUrdu.includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);

    return result;
  }, [search, activeCategory, sortBy]);

  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerBg} />
        <div className={`container ${styles.headerInner}`}>
          <span className="section-label">Our Collection</span>
          <h1 className={styles.headerTitle}>Catalogue</h1>
          <p className={`${styles.headerAr} arabic-text`}>ہمارا کتابی ذخیرہ</p>
          <p className={styles.headerDesc}>
            Browse our complete range of Iqra curriculum books, course packs, diaries and copies.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className={styles.controls}>
        <div className={`container ${styles.controlsInner}`}>
          {/* Search */}
          <div className={styles.searchWrap}>
            <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search books, packs... (کتاب تلاش کریں)"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className={styles.searchInput}
            />
            {search && (
              <button className={styles.clearSearch} onClick={() => setSearch('')}>✕</button>
            )}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className={styles.sortSelect}
          >
            <option value="default">Default Order</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {/* Category Filters */}
        <div className={`container ${styles.filtersWrap}`}>
          <div className={styles.filters}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className={`section ${styles.results}`}>
        <div className="container">
          <div className={styles.resultsHeader}>
            <p className={styles.resultsCount}>
              Showing <strong>{filtered.length}</strong> product{filtered.length !== 1 ? 's' : ''}
              {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
              {search ? ` for "${search}"` : ''}
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className={styles.grid}>
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>📭</div>
              <h3>No products found</h3>
              <p className={styles.emptyAr}>کوئی نتیجہ نہیں ملا</p>
              <p>Try adjusting your search or filter.</p>
              <button
                className="btn-outline"
                onClick={() => { setSearch(''); setActiveCategory('All'); }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Packs Banner */}
      <section className={styles.packsBanner}>
        <div className="container">
          <div className={styles.packsBannerInner}>
            <div>
              <h3 className={styles.packsBannerTitle}>
                💡 Save More with Course Packs
              </h3>
              <p className={styles.packsBannerDesc}>
                Our bundled course packs for Class 1, 2 &amp; 3 include every book, diary and copy — at a discounted price vs buying individually.
              </p>
              <p className={`${styles.packsBannerAr} arabic-text`}>
                کورس پیک میں زیادہ بچت — کتابیں، ڈائری اور کاپیاں سب شامل
              </p>
            </div>
            <button
              className="btn-primary"
              onClick={() => setActiveCategory('Course Packs')}
            >
              <span>View Course Packs</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
