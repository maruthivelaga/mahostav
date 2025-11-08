import React, { useState } from 'react';
import AnimatedIcon from './AnimatedIcon';
import FloatingBubble from './FloatingBubble';
import FloatingIcons from './FloatingIcons';
import SideMenu from './SideMenu';
import './Dashboard.css';
import './App.css';

const Dashboard: React.FC = () => {
  const [showMenuCards, setShowMenuCards] = useState(false);

  const handleMenuClick = () => {
    setShowMenuCards(!showMenuCards);
  };

  return (
    <div className="single-page-app">
      
      {/* Sticky Side Menu */}
      <SideMenu onMenuClick={handleMenuClick} />
     
      <nav className="header-nav">
          <a href="#home" className="active">Home</a>
          <a href="#events">Events</a>
          <a href="#inductions">Inductions</a>
          <a href="#hospitality">Hospitality</a>
          <a href="#schedule">Schedule</a>
          <a href="#zonal">Zonal</a>
      </nav>
      
      {/* The Icon Component - Fixed position, animates with scroll */}
      <AnimatedIcon iconSrc="/IMG_2037.png" />

      {/* 1. Hero Section (First Fold) */}
      <section className="hero-section">
        <div className="hero-image-container">
          <img src="/image.png" alt="Vignan Mahotsav" className="hero-main-image" />
        </div>
        
        {/* Action Buttons replacing the subtitle */}
        <div className="hero-action-buttons">
          <button className="overview-btn">Overview</button>
          <button className="login-btn">login</button>
        </div>
        
        <div className="scroll-indicator">
          <p>Scroll down to see the magic ✨</p>
        </div>
      </section>

      {/* 2. About Us Section (Second Fold) */}
      <section className="about-us-section">
        <h1>About Us</h1>
        <div className="about-us-content">
          <h2>Welcome to Vignan Mahotsav</h2>
          <p>
            Vignan Mahotsav is an annual celebration that brings together the brightest minds 
            in science, technology, and innovation. Our festival showcases cutting-edge research, 
            interactive exhibitions, and inspiring demonstrations that captivate audiences of all ages.
          </p>
          <p>
            Join us in exploring the wonders of science and discover how innovation shapes our future.
          </p>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="dashboard-section features-section">
        <h2>{showMenuCards ? 'Menu Categories' : 'Event Highlights'}</h2>
        
        {showMenuCards ? (
          // Menu Cards View - Like Reference Image
          <div className="menu-cards-grid">
            <div className="menu-card">
              <h3>HOME</h3>
            </div>
            <div className="menu-card">
              <h3>EVENTS</h3>
            </div>
            <div className="menu-card">
              <h3>PROFILE</h3>
            </div>
            <div className="menu-card">
              <h3>SCHEDULE</h3>
            </div>
            <div className="menu-card">
              <h3>COLLABORATION</h3>
            </div>
            <div className="menu-card">
              <h3>ZONALS</h3>
            </div>
            <div className="menu-card">
              <h3>CRICKET</h3>
            </div>
            <div className="menu-card">
              <h3>HOSPITALITY</h3>
            </div>
            <div className="menu-card">
              <h3>CAMPUS AMBASSADOR</h3>
            </div>
            <div className="menu-card">
              <h3>SPONSORS</h3>
            </div>
            <div className="menu-card">
              <h3>OUR TEAM</h3>
            </div>
            <div className="menu-card">
              <h3>MAP</h3>
            </div>
          </div>
        ) : (
          // Default Features View
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3>Research Showcase</h3>
              <p>Explore groundbreaking research from leading institutions and innovators.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Interactive Demos</h3>
              <p>Hands-on demonstrations that bring scientific concepts to life.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Competitions</h3>
              <p>Engage in exciting challenges and showcase your scientific talents.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Expert Talks</h3>
              <p>Learn from renowned scientists and industry leaders.</p>
            </div>
          </div>
        )}
      </section>

      {/* 4. Stats Section */}
      <section className="dashboard-section stats-section">
        <h2>Mahotsav by the Numbers</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>5000+</h3>
            <p>Participants</p>
          </div>
          <div className="stat-card">
            <h3>100+</h3>
            <p>Exhibitions</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Workshops</p>
          </div>
          <div className="stat-card">
            <h3>30+</h3>
            <p>Expert Speakers</p>
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="dashboard-section cta-section">
        <h2>Ready to Experience the Wonder?</h2>
        <p>Register now and be part of this extraordinary celebration of science!</p>
        <button className="cta-button">Register Now</button>
      </section>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>&copy; 2025 Vignan Mahotsav. All rights reserved.</p>
        <p>Built with React + Vite + TypeScript</p>
      </footer>

      {/* Floating Bubble Menu */}
      <FloatingBubble />
      
      {/* Decorative Floating Icons */}
      <FloatingIcons />

      {/* Side Menu */}
      <SideMenu onMenuClick={handleMenuClick} />
    </div>
  );
};

export default Dashboard;
