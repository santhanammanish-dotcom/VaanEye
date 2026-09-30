"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./dashboard.css";

export default function Dashboard() {
  const router = useRouter();

  const sections = [
    {
      title: "Farmer",
      role: "Agriculture",
      image: "/images/farmer.png",
      tagline: "Grow healthy crops with weather & soil guidance",
      points: [
        { icon: "🌱", text: "Check crop health & growth status" },
        { icon: "🌧️", text: "Rain & weather alerts before storms" },
        { icon: "💧", text: "Know when your fields need watering" },
      ],
      route: "/agriculture",
      className: "farmer",
      btnText: "Enter Farmer Dashboard",
    },
    {
      title: "Fisherman",
      role: "Marine & Coastal",
      image: "/images/fisherman.jpg",
      tagline: "Find rich catch zones & sail with safe sea forecasts",
      points: [
        { icon: "🐟", text: "Locate active fishing zones in the ocean" },
        { icon: "🌊", text: "High wave & cyclone safety warnings" },
        { icon: "🧭", text: "Wind speed & safe navigation routes" },
      ],
      route: "/marine",
      className: "fisherman",
      btnText: "Enter Fisherman Dashboard",
    },
    {
      title: "Disaster Management",
      role: "Emergency & Safety",
      image: "/images/disaster.jpg",
      tagline: "Early warnings to protect lives, homes & communities",
      points: [
        { icon: "🌊", text: "Live flood rise & water mapping" },
        { icon: "🔥", text: "Spot forest fires & extreme heat zones" },
        { icon: "⚠️", text: "Instant emergency storm notifications" },
      ],
      route: "/disaster",
      className: "disaster",
      btnText: "Enter Disaster Center",
    },
  ];

  return (
    <div className="dashboard-page">
      <main className="dashboard-main">
        {/* HERO */}
        <section className="hero-section">
          <div className="hero-badge">
            🛰 SATELLITE • AI • EARTH INTELLIGENCE
          </div>

          <h1>
            Discover a Safer
            <br />
            Tomorrow with <span>VaanEye</span>
          </h1>

          <p>
            Real-time satellite updates made simple for everyone. Choose your role below
            to check your crops, navigate safe waters, or prepare for weather emergencies.
          </p>
        </section>

        {/* SECTION SELECTION */}
        <section className="choose-section">
          <div className="section-title">
            <div>
              <span>PERSONALIZED MONITORING</span>
              <h2>Choose Your Section</h2>
            </div>
            <p>Select your role to access your personalized live dashboard.</p>
          </div>

          <div className="cards-container">
            {sections.map((section) => (
              <div
                key={section.title}
                className={`section-card ${section.className}`}
                onClick={() => router.push(section.route)}
              >
                {/* Top Half Portion: High Quality Image */}
                <div className="card-image-half">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="card-half-img"
                  />
                  <div className="card-half-overlay" />
                  <div className="card-top-bar">
                    <span className="card-badge">{section.role}</span>
                    <div className="arrow">→</div>
                  </div>
                </div>

                {/* Bottom Half Portion: Content & Actions */}
                <div className="card-body-half">
                  <div className="card-header-text">
                    <h3>{section.title}</h3>
                    <p className="card-tagline">{section.tagline}</p>
                  </div>

                  <ul className="simple-points-list">
                    {section.points.map((pt, idx) => (
                      <li key={idx}>
                        <span className="point-icon">{pt.icon}</span>
                        <span>{pt.text}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="enter-btn"
                    onClick={(event) => {
                      event.stopPropagation();
                      router.push(section.route);
                    }}
                  >
                    <span>{section.btnText}</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}