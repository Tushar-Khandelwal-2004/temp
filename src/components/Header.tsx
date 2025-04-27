import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/img/logo.png'
import usImage from '../assets/img/us.jpg'
import israelImage from '../assets/img/Israel.jpg'

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isHebrew = currentPath.includes('/hebrew');
  
  let basePath = currentPath;
  if (isHebrew) {
    basePath = currentPath.replace('/hebrew', '');
  }
  
  if (basePath === '/index') {
    basePath = '/index';
  } else if (basePath === '/login') {
    basePath = '/login';
  } else if (basePath === '/signup') {
    basePath = '/signup';
  }

  const logoLink = isHebrew ? "/index/hebrew" : "/index";

  return (
    <header className="position-absolute">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="logo" to={logoLink}>
          <img src={logoImage} alt="Logo" />
        </Link>

        <div className="header-right d-flex justify-content-between align-items-center">
          <div className="dropdown language">
            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
              {isHebrew ? (
                <>
                  <img src={israelImage} alt="Israel" /> Hebrew
                </>
              ) : (
                <>
                  <img src={usImage} alt="US" /> English
                </>
              )}
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <Link to={basePath} className="dropdown-item">
                <img src={usImage} alt="US" /> English
              </Link>
              <Link to={`${basePath}/hebrew`} className="dropdown-item">
                <img src={israelImage} alt="Israel" /> Hebrew
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 