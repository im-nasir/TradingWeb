'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './HeroGrid.module.css';

const HeroGrid = () => {
  const tradingViewRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure DOM is ready and avoid conflicts
    const timer = setTimeout(() => {
      // Clear any existing content
      if (tradingViewRef.current) {
        tradingViewRef.current.innerHTML = '';
      }

      // Create and load TradingView script
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.type = 'text/javascript';
      script.async = true;
      script.onload = () => setIsLoaded(true);
      script.innerHTML = JSON.stringify({
        width: "100%",
        height: "100%",
        symbol: "NASDAQ:AAPL",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        enable_publishing: false,
        allow_symbol_change: true,
        details: true,
        hotlist: true,
        calendar: false,
        hide_top_toolbar: false,
        hide_legend: false,
        hide_side_toolbar: false,
        save_image: true,
        container_id: `tradingview_widget_${Date.now()}`,
        studies: [],
        show_popup_button: true,
        popup_width: "1000",
        popup_height: "650",
        toolbar_bg: "rgba(15, 23, 42, 0.9)",
        enabled_features: [
          "study_templates",
          "use_localstorage_for_settings",
          "save_chart_properties_to_local_storage",
          "create_volume_indicator_by_default",
          "header_symbol_search",
          "symbol_search_hot_key",
          "header_resolutions",
          "header_chart_type",
          "header_settings",
          "header_indicators",
          "header_compare",
          "header_undo_redo",
          "header_screenshot",
          "header_fullscreen_button",
          "left_toolbar",
          "control_bar",
          "timeframes_toolbar",
          "edit_buttons_in_legend",
          "context_menus",
          "border_around_the_chart"
        ],
        disabled_features: [],
        overrides: {
          "backgroundType": "gradient",
          "backgroundGradientStartColor": "rgba(15, 23, 42, 0.8)",
          "backgroundGradientEndColor": "rgba(30, 58, 138, 0.3)",
          "gridColor": "rgba(59, 130, 246, 0.2)",
          "scalesProperties.textColor": "#cbd5e1",
          "paneProperties.background": "rgba(15, 23, 42, 0.8)",
          "paneProperties.backgroundType": "gradient",
          "mainSeriesProperties.candleStyle.upColor": "#10b981",
          "mainSeriesProperties.candleStyle.downColor": "#ef4444",
          "mainSeriesProperties.candleStyle.borderUpColor": "#10b981",
          "mainSeriesProperties.candleStyle.borderDownColor": "#ef4444",
          "mainSeriesProperties.candleStyle.wickUpColor": "#10b981",
          "mainSeriesProperties.candleStyle.wickDownColor": "#ef4444"
        }
      });

      if (tradingViewRef.current) {
        tradingViewRef.current.appendChild(script);
      }
    }, 200);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (tradingViewRef.current) {
        tradingViewRef.current.innerHTML = '';
      }
      setIsLoaded(false);
    };
  }, []);

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

        {/* Center Main Section - Stable TradingView Widget */}
        <div className={`${styles.div3} ${styles.gridSection} ${styles.mainSection}`}>
          <div className={styles.tradingViewContainer}>
            {!isLoaded && (
              <div className={styles.loadingPlaceholder}>
                <div className={styles.loadingSpinner}></div>
                <span>Loading TradingView Chart...</span>
              </div>
            )}
            <div 
              ref={tradingViewRef}
              className="tradingview-widget-container"
              style={{
                height: '100%',
                width: '100%',
                position: 'relative',
                opacity: isLoaded ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}
            >
              <div 
                className="tradingview-widget-container__widget"
                style={{
                  height: '100%',
                  width: '100%'
                }}
              ></div>
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