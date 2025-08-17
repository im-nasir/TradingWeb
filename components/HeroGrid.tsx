import React from 'react';
import styles from './HeroGrid.module.css';

const HeroGrid = () => {
  return (
    <section className={styles.heroGrid}>
      <div className={styles.parent}>
        {/* Left Top Section */}
        <div className={`${styles.div1} ${styles.gridSection}`}>
          <div className={styles.sectionContent}>
            <div className={styles.iconWrapper}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.sectionTitle}>Lightning Fast</h3>
            <p className={styles.sectionText}>Experience blazing speed with our optimized infrastructure</p>
          </div>
        </div>

        {/* Left Bottom Section */}
        <div className={`${styles.div2} ${styles.gridSection}`}>
          <div className={styles.sectionContent}>
            <div className={styles.metricCard}>
              <span className={styles.metricNumber}>150+</span>
              <span className={styles.metricLabel}>Countries</span>
            </div>
          </div>
        </div>

        {/* Center Main Section */}
        <div className={`${styles.div3} ${styles.gridSection} ${styles.mainSection}`}>
          <div className={styles.mainContent}>
            <h1 className={styles.mainTitle}>
              Revolutionary
              <span className={styles.titleHighlight}> Digital Experience</span>
            </h1>
            <p className={styles.mainSubtitle}>
              Discover the next generation of digital solutions that transform how you work, 
              create, and connect with the world around you.
            </p>
            <div className={styles.mainButtons}>
              <button className={styles.ctaButton}>
                Start Your Journey
                <svg className={styles.arrowIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className={styles.secondaryBtn}>
                Learn More
              </button>
            </div>
            <div className={styles.visualElement}>
              <div className={styles.floatingShape1}></div>
              <div className={styles.floatingShape2}></div>
              <div className={styles.floatingShape3}></div>
            </div>
          </div>
        </div>

        {/* Right Top Section */}
        <div className={`${styles.div4} ${styles.gridSection}`}>
          <div className={styles.sectionContent}>
            <div className={styles.progressCard}>
              <div className={styles.progressHeader}>
                <span className={styles.progressTitle}>Growth</span>
                <span className={styles.progressValue}>+247%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill}></div>
              </div>
              <div className={styles.progressLabels}>
                <span>Q1</span>
                <span>Q4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Bottom Section */}
        <div className={`${styles.div5} ${styles.gridSection}`}>
          <div className={styles.sectionContent}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className={styles.featureText}>Secure & Reliable</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className={styles.backgroundGrid}>
        <div className={styles.gridLine}></div>
        <div className={styles.gridLine}></div>
        <div className={styles.gridLine}></div>
        <div className={styles.gridLine}></div>
      </div>
      
      <div className={styles.backgroundOrbs}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>
    </section>
  );
};

export default HeroGrid;