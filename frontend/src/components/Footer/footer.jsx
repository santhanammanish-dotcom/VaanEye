import React from 'react';
import Link from 'next/link';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="logo-icon">🌿</span> VaanEye
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} VaanEye. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/satquery">AI SatQuery</Link>
          <Link href="/alerts">Alerts</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
        <div className="footer-right">
          <span className="footer-note">Satellite Data | AI | A Sustainable Future</span>
        </div>
      </div>
    </footer>
  );
}