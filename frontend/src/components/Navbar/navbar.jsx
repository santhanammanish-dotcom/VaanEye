"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const [roleOpen, setRoleOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Select Role");

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

        {/* Actions (Right Side) - ONLY THIS PART IS MODIFIED */}
        <div className="navbar-actions">
          
          {/* Login Button */}
          <button className="login-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="login-icon">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
            Log in
          </button>

          {/* Role Dropdown */}
          <div className="role-dropdown">
            <button
              className="role-button"
              onClick={() => setRoleOpen(!roleOpen)}
            >
              <div className="role-icon-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.1 12.5l1.4 1.41-6.53 6.59L12.5 17l1.4-1.41 2.07 2.08 5.13-5.17M10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h9.08c-.05-.33-.08-.66-.08-1 0-2.08.8-3.97 2.1-5.39-.37-.38-.79-.61-1.1-.61z"/>
                </svg>
              </div>
              <span className="role-text">{selectedRole}</span>
            </button>

            {roleOpen && (
              <div className="role-menu">
                <button
                  onClick={() => {
                    setSelectedRole("Farmer");
                    setRoleOpen(false);
                  }}
                >
                  🌾 Farmer
                </button>

                <button
                  onClick={() => {
                    setSelectedRole("Fisherman");
                    setRoleOpen(false);
                  }}
                >
                  🎣 Fisherman
                </button>

                <button
                  onClick={() => {
                    setSelectedRole("Public");
                    setRoleOpen(false);
                  }}
                >
                  👤 Public
                </button>

                <button
                  onClick={() => {
                    setSelectedRole("Officer");
                    setRoleOpen(false);
                  }}
                >
                  🧑‍💼 Officer
                </button>

                <button
                  onClick={() => {
                    setSelectedRole("Admin");
                    setRoleOpen(false);
                  }}
                >
                  ⚙️ Admin
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
} 