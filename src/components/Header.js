import React from 'react';
import './Header.css';
import NavigationMenu from './NavigationMenu';

function Header() {
  return (
    <header className="header bg-dark-gray w-100 ph3 pv1 pv1-ns ph4-m ph5-l">
      <div className="flex justify-between items-center">
      <div className="logo-and-name flex items-center">
          <img src="/logo.png" alt="Logo" className="logo" />
          <h2 className="white ma0 ml2">Data-Informed Design</h2>
        </div>
        <NavigationMenu />
      </div>
    </header>
  );
}

export default Header;
