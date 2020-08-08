import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import styles from './style.module.scss';
import logo from 'assets/logo.svg';
import logoLight from 'assets/logo_light.svg';
import { mobileBreakpoint } from 'common.scss';
import { useEffect } from 'react';
import MenuIcon from './MenuIcon';

const defaultMobileBreakpoint = parseFloat(mobileBreakpoint);

const links = [
  { text: 'Mentors', to: '/mentors' },
  { text: 'Prizes', to: '/prizes' },
  { text: 'Schedule', to: '/schedule' },
  { text: 'Resources', to: '/resources' },
];

const linksWithHome = [{ text: 'Home', to: '/' }].concat(links);

const NavBar = ({ dark, light, blueLink, blueMenu, mobileBreakpoint = defaultMobileBreakpoint }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSpecialMobile, setIsSpecialMobile] = useState(false);

  useEffect(() => {
    const callback = () => {
      setIsMobile(window.innerWidth <= mobileBreakpoint);
      setIsSpecialMobile(window.innerWidth > defaultMobileBreakpoint && window.innerWidth <= mobileBreakpoint);
    }
    window.addEventListener('resize', callback); // TODO: debounce maybe?
    callback();
    return () => window.removeEventListener('resize', callback);
  }, [mobileBreakpoint]);

  const navLinkColor = blueLink ? '#3C519C' : 'white';

  return (
    <header>
      <nav className={clsx(styles.navbar, isMobile && styles.mobile)}>
        <Link to="/">
          <img className={styles.logo} src={light ? logoLight : logo} alt="HackThis Logo" />
          <img className={styles.logoMobile} src={dark ? logo : logoLight} alt="HackThis Logo" />
        </Link>

        <div className={styles.spacer} />

        {linksWithHome.map(link => (
          <NavLink
            to={link.to}
            className={styles['nav-link']}
            activeClassName={styles.active}
            style={{ color: navLinkColor, borderColor: navLinkColor }}
            key={link.text}
            exact
          >
            {link.text}
            <div className={styles.line} style={{ backgroundColor: navLinkColor }} />
          </NavLink>
        ))}
        
        <button
          type="button"
          className={styles['side-nav-toggle']}
          onClick={() => setIsSideNavOpen(true)}
          aria-label="Open Side Nav"
        >
          <MenuIcon color={(blueMenu || isSpecialMobile) ? '#3C519C' : 'white'} />
        </button>
      </nav>

      <div className={clsx(styles['side-nav'], isSideNavOpen && styles.open)}>
        <Link to="/">
          <img src={logoLight} className={styles.logo} alt="HackThis Logo" />
        </Link>

        <nav>
          {linksWithHome.map(link => (
            <NavLink to={link.to} className={styles.link} activeClassName={styles.active} exact>
              {link.text}
              <div className={styles.highlight} />
            </NavLink>
          ))}
        </nav>
      </div>

      {isSideNavOpen && (
        <button
          type="button"
          className={styles['side-nav-background']}
          onClick={() => setIsSideNavOpen(false)}
          aria-label="Close Side Nav"
        />
      )}
    </header>
  );
}

export default NavBar;