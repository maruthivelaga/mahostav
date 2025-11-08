import React, { useState } from 'react';
import './FloatingBubble.css';

const FloatingBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (item: string) => {
    console.log(`Clicked on ${item}`);
    // Add your navigation logic here
    setIsOpen(false); // Close menu after selection
  };

  return (
    <div className="floating-bubble-container">
      {/* Main floating button */}
      <div 
        className={`floating-bubble ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <img src="/logo.png" alt="Menu" className="bubble-logo" />
        <div className={`close-icon ${isOpen ? 'visible' : ''}`}>✕</div>
      </div>

      {/* Expandable menu items */}
      <div className={`bubble-menu ${isOpen ? 'expanded' : ''}`}>
        <div 
          className="bubble-menu-item item-1"
          onClick={() => handleMenuItemClick('Calendar')}
        >
          <div className="menu-icon">📅</div>
        </div>
        
        <div 
          className="bubble-menu-item item-2"
          onClick={() => handleMenuItemClick('Announcement')}
        >
          <div className="menu-icon">📢</div>
        </div>
        
        <div 
          className="bubble-menu-item item-3"
          onClick={() => handleMenuItemClick('Book')}
        >
          <div className="menu-icon">📚</div>
        </div>
        
        <div 
          className="bubble-menu-item item-4"
          onClick={() => handleMenuItemClick('Settings')}
        >
          <div className="menu-icon">⚙️</div>
        </div>
      </div>

      {/* Backdrop overlay */}
      <div 
        className={`bubble-backdrop ${isOpen ? 'visible' : ''}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </div>
  );
};

export default FloatingBubble;