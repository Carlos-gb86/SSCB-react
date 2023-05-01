import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './NavigationMenu.css'

function NavigationMenu() {
  const location = useLocation();

  const renderLinks = () => {
    if (location.pathname === '/how-it-works') {
      return (
        <>
          <li className="dib mr3">
            <NavLink className="f5 fw4 navlink white-90 no-underline" to="/">Home</NavLink>
          </li>
          <li className="dib">
            <NavLink className="f5 fw4 navlink white-90 no-underline" to="/predictions">Predictions</NavLink>
          </li>
        </>
      );
    } else if (location.pathname === '/predictions') {
      return (
        <>
          <li className="dib mr3">
            <NavLink className="f5 fw4 navlink white-90 no-underline" to="/">Home</NavLink>
          </li>
          <li className="dib">
            <NavLink className="f5 fw4 navlink white-90 no-underline" to="/how-it-works">How It Works</NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="dib mr3">
            <NavLink className="f5 fw4 navlink white-90 no-underline" to="/how-it-works">How It Works</NavLink>
          </li>
          <li className="dib">
            <NavLink className="f5 fw4 navlink white-90 no-underline" to="/predictions">Predictions</NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <nav>
      <ul className="list pa0 ma0">
        {renderLinks()}
      </ul>
    </nav>
  );
}

export default NavigationMenu;
