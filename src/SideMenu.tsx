import React, { useState } from 'react';
import './SideMenu.css';

interface SideMenuProps {
  onMenuClick: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ onMenuClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    onMenuClick();
    // Scroll to the features section
    const featuresSection = document.querySelector('.features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="side-menu">
      <div 
        className={`menu-rectangle ${isHovered ? 'hovered' : ''}`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src="/menu.png" alt="Menu" className="menu-image" />
      </div>
      <div className="logo-icon">
        <img src="/logo.png" alt="Logo" className="logo-image" />
      </div>
    </div>
  );
};

export default SideMenu;