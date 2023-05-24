import React from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <img src="logo.png" alt="Logo" className="logo" />
      <nav className="nav-menu-desktop">
        <a href="#about" className="nav-link">ABOUT</a>
        <a href="#services" className="nav-link">SERVICES</a>
        <a href="#contact" className="nav-link">CONTACT</a>
        <a href="#subscribe" className="nav-link">SUBSCRIBE</a>
      </nav>
      <nav className="nav-menu-mobile">
        <button className="nav-menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'X' : '☰'}
        </button>
        {isOpen && (
          <div className="nav-menu-items">
            <a href="#about" className="nav-link" onClick={closeMenu}>ABOUT</a>
            <a href="#services" className="nav-link" onClick={closeMenu}>SERVICES</a>
            <a href="#contact" className="nav-link" onClick={closeMenu}>CONTACT</a>
            <a href="#subscribe" className="nav-link" onClick={closeMenu}>SUBSCRIBE</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;