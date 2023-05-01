import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark-gray w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <div className="flex justify-between items-center">
        <div className="f6 white">
          &copy; {new Date().getFullYear()} YourAppName. All rights reserved.
        </div>
        <ul className="list pa0 ma0">
          <li className="dib mr3">
            <a className="f5 fw4 hover-bg-light-green white-90 no-underline pointer" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="dib mr3">
            <a className="f5 fw4 hover-bg-light-green white-90 no-underline pointer" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="dib">
            <a className="f5 fw4 hover-bg-light-green white-90 no-underline pointer" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
