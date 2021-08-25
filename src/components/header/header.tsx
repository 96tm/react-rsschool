import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './header.css';

export default function Header(): JSX.Element {
  const location = useLocation();
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/"
              exact
              isActive={() =>
                location.pathname === '/' ||
                location.pathname.startsWith('/detail')
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
