"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './navbar.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="/">
          <span className="logo-icon">🌍</span> VaanEye
        </Link>
      </div>
      <div className="navbar-links">
        <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        <Link href="/explore" className={pathname === '/explore' ? 'active' : ''}>Explore</Link>
        <Link href="/solutions" className={pathname === '/solutions' ? 'active' : ''}>Solutions</Link>
        <Link href="/satquery" className={pathname === '/satquery' ? 'active' : ''}>AI SatQuery</Link>
        <Link href="/alerts" className={pathname === '/alerts' ? 'active' : ''}>Alerts</Link>
        <Link href="/dashboard" className={pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>
      </div>
      <div className="navbar-profile">
        <Link href="/roles" className="role-btn">
          <span className="user-icon">👤</span> Select Role <span className="arrow-down">▾</span>
        </Link>
      </div>
    </nav>
  );
}