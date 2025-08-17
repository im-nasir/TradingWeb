import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Left side - Logo */}
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#3B82F6"/>
            <path d="M8 12L16 8L24 12V20L16 24L8 20V12Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M16 8V24" stroke="white" strokeWidth="2"/>
            <path d="M8 12L24 20" stroke="white" strokeWidth="2"/>
            <path d="M24 12L8 20" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      {/* Center - Navigation Icons */}
      <div className={styles.navIcons}>
        {/* Trading Icon */}
        <button className={styles.navButton} title="Trading">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 9L12 6L16 10L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 6V10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Dashboard Icon */}
        <button className={styles.navButton} title="Dashboard">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
            <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
            <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
            <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </div>

      {/* Right side - Action Icons */}
      <div className={styles.actionIcons}>
        {/* Settings Icon */}
        <button className={styles.actionButton} title="Settings">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
            <path d="M19.4 15A1.65 1.65 0 0 0 18 13.34L18 10.66A1.65 1.65 0 0 0 19.4 9L20.85 8.13A1.65 1.65 0 0 0 21.64 6.64L21.64 5.36A1.65 1.65 0 0 0 20.85 3.87L19.4 3A1.65 1.65 0 0 0 18 4.66L18 7.34A1.65 1.65 0 0 0 19.4 9L20.85 9.87A1.65 1.65 0 0 0 21.64 11.36L21.64 12.64A1.65 1.65 0 0 0 20.85 14.13L19.4 15A1.65 1.65 0 0 0 18 16.66L18 19.34A1.65 1.65 0 0 0 19.4 21L20.85 21.87A1.65 1.65 0 0 0 21.64 20.36L21.64 19.64A1.65 1.65 0 0 0 20.85 18.13L19.4 15Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M4.6 15A1.65 1.65 0 0 1 6 13.34L6 10.66A1.65 1.65 0 0 1 4.6 9L3.15 8.13A1.65 1.65 0 0 1 2.36 6.64L2.36 5.36A1.65 1.65 0 0 1 3.15 3.87L4.6 3A1.65 1.65 0 0 1 6 4.66L6 7.34A1.65 1.65 0 0 1 4.6 9L3.15 9.87A1.65 1.65 0 0 1 2.36 11.36L2.36 12.64A1.65 1.65 0 0 1 3.15 14.13L4.6 15A1.65 1.65 0 0 1 6 16.66L6 19.34A1.65 1.65 0 0 1 4.6 21L3.15 21.87A1.65 1.65 0 0 1 2.36 20.36L2.36 19.64A1.65 1.65 0 0 1 3.15 18.13L4.6 15Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>

        {/* Contact Icon */}
        <button className={styles.actionButton} title="Contact">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
            <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;