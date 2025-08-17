import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Build the Future with
            <span className={styles.highlight}> Innovation</span>
          </h1>
          <p className={styles.subtitle}>
            Transform your ideas into reality with cutting-edge technology and seamless user experiences. 
            Join thousands of creators who trust our platform to bring their vision to life.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>
              Get Started
              <svg className={styles.buttonIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.secondaryButton}>
              <svg className={styles.playIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.66667 5L13.3333 10L6.66667 15V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Watch Demo
            </button>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10K+</span>
              <span className={styles.statLabel}>Active Users</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>99.9%</span>
              <span className={styles.statLabel}>Uptime</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Support</span>
            </div>
          </div>
        </div>
        <div className={styles.visualContent}>
          <div className={styles.heroImage}>
            <div className={styles.floatingCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardDots}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.chartBars}>
                  <div className={styles.bar} style={{height: '60%'}}></div>
                  <div className={styles.bar} style={{height: '80%'}}></div>
                  <div className={styles.bar} style={{height: '45%'}}></div>
                  <div className={styles.bar} style={{height: '90%'}}></div>
                  <div className={styles.bar} style={{height: '70%'}}></div>
                </div>
              </div>
            </div>
            <div className={styles.floatingCard2}>
              <div className={styles.notification}>
                <div className={styles.notificationIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 5.33333L6 12.6667L2.66667 9.33333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.notificationText}>
                  <span className={styles.notificationTitle}>Success!</span>
                  <span className={styles.notificationMessage}>Task completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gridPattern}></div>
      </div>
    </section>
  );
};

export default Hero;