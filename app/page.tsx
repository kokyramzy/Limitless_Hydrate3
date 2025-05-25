'use client';

import React from 'react';
import styles from './page.module.css';
const HomePage = () => {
  return (
    <div className={styles.homepage}>
      {/* Header */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#products" className={styles.navLink}>Products</a>
          <a href="#about" className={styles.navLink}>About us</a>
          <a href="#community" className={styles.navLink}>Community</a>
        </nav>
        <img src="/logo.png" alt="Limitless Hydrate Logo" className={styles.logo} />
        <button className={styles['buy-button']}>Buy Now</button>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles['hero-content']}>
          <h2>Water+</h2>
          <p>
            Limitless Hydrate redefines hydration with <br />
            advanced electrolytes and clean <br />ingredients.
            Designed for performance,<br /> recovery, and everyday wellness, our <br />
             formulas keep you at your best—no matter your lifestyle.
          </p>
          <button className={styles['learn-button']}>Learn More</button>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        {/* Yellow Text Block */}
        <div className={styles.yellowBlock}>
          <h3 className={styles.hh}>LIMITLESS</h3>
          <h3 className={styles.h4}> HYDRATE</h3>
          <p className={styles.p}>
            Fuel your body with essential electrolytes, <br/>vitamins, and great taste.
            Whether you’re<br/> working out or on the go, Limitless Hydrate<br/>
             keeps you refreshed, replenished, and<br/> energized.
          </p>
          <div className={styles.iconRow}>
       <img src="\Isolation_Mode.png" alt="Products" />

          </div>
        </div>

        {/* Product Image */}
        <div className={styles.imageBlock}>
          <img src="/products.png" alt="Products" />
        </div>

        {/* Hand Image */}
        <div className={styles.imageBlock}>
          <img src="/hand.png" alt="Hand holding product" />
        </div>

        {/* Blue Text Block */}
        <div className={styles.blueBlock}>
          <h4>Stay hydrated, feel elevated</h4>
          <p>
            With a refreshing blend of electrolytes, vitamins, and natural flavors,
            Limitless Hydrate helps you stay focused and boost your day.
          </p>
          <div className={styles.iconRow}>
            <div>🔄<p>Hydration, Elevated</p></div>
            <div>🌟<p>Tailored for Your Lifestyle</p></div>
            <div>⚙️<p>Electrolyte Balance</p></div>
            <div>💊<p>Vitamin-Rich Tablets</p></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
