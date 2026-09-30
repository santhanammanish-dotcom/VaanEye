"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Solutions", href: "/solutions" },
    { name: "AI SatQuery", href: "/satquery" },
    { name: "Alerts", href: "/alerts" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <header className="navbar-wrapper">
      <div className="navbar">

        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-globe">🌍</span>
          <span>VaanEye</span>
        </div>

        {/* Navigation */}
        <nav className="navbar-links">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`navbar-link ${
                pathname === item.href ? "active" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Role Button */}
        <button className="role-button">
          <span className="role-icon">♟</span>
          <span>Select Role</span>
          <span className="role-arrow">⌄</span>
        </button>

      </div>
    </header>
  );
}