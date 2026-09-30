import React from 'react';
import Link from 'next/link';
import './home.css';
import Footer from '../../components/Footer/footer';

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-subtitle">SATELLITE INTELLIGENCE FOR A BETTER TOMORROW</span>
          <h1 className="hero-title">
            See Earth.<br />
            <span className="text-highlight">Make Better Decisions.</span>
          </h1>
          <p className="hero-description">
            VaanEye uses satellite data, AI and geospatial intelligence to monitor our planet and support better decisions.
          </p>
          <div className="hero-buttons">
            <Link href="/explore" className="btn btn-primary">Explore Now &rarr;</Link>
            <Link href="/solutions" className="btn btn-secondary">View Solutions</Link>
          </div>
        </div>
        <div className="hero-image-placeholder">
          <div className="satellite-img-placeholder"></div>
        </div>
      </section>

      {/* Features Row */}
      <section className="features-row">
        <div className="feature-item">
          <div className="feature-icon-wrapper">
             <span className="feature-icon">🛰️</span>
          </div>
          <div className="feature-text">
            <h3>Real-Time Satellite Data</h3>
            <p>Access up-to-date satellite imagery and geospatial data.</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon-wrapper">
             <span className="feature-icon">🧠</span>
          </div>
          <div className="feature-text">
            <h3>AI Powered Analysis</h3>
            <p>Turn data into actionable insights with AI.</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon-wrapper">
             <span className="feature-icon">🌍</span>
          </div>
          <div className="feature-text">
            <h3>Global Coverage</h3>
            <p>Monitor every region, across the globe.</p>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <span className="section-subtitle">ABOUT VAANEYE</span>
          <h2 className="section-title">What is VaanEye?</h2>
          <p className="section-description">
            VaanEye is a unified geospatial platform that uses satellite data, AI and advanced analytics to help you understand, monitor and protect our planet. From agriculture to disaster management, VaanEye provides the insights you need for a safer, smarter and more sustainable future.
          </p>
          <Link href="/explore" className="btn btn-primary">Learn More &rarr;</Link>
        </div>
        <div className="about-video-placeholder">
          <div className="play-button">▶</div>
        </div>
        <div className="about-domains">
           <div className="domain-item">
              <span className="domain-icon">🌱</span>
              <div>
                <h4>Agriculture</h4>
                <p>Crop health &amp; yield</p>
              </div>
           </div>
           <div className="domain-item">
              <span className="domain-icon">⚠️</span>
              <div>
                <h4>Disaster</h4>
                <p>Risk &amp; early warning</p>
              </div>
           </div>
           <div className="domain-item">
              <span className="domain-icon">🌊</span>
              <div>
                <h4>Marine</h4>
                <p>Ocean &amp; fishing zones</p>
              </div>
           </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}