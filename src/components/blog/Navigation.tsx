'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCallback } from 'react';
import ThemeLayout from './ThemeLayout';
import classes from './Navigation.module.css';

const Navigation: React.FC = () => {
  const responsiveNavHandler = useCallback(() => {
    const humberger = document.getElementById('humberger') as HTMLElement;
    const responsiveNav = document.getElementById('responsiveNav') as HTMLElement;

    if (humberger?.classList.contains(classes.open) && responsiveNav?.classList.contains(classes.open)) {
      humberger.classList.remove(classes.open);
      responsiveNav.classList.remove(classes.open);
    } else {
      humberger?.classList.add(classes.open);
      responsiveNav?.classList.add(classes.open);
    }
  }, []);

  return (
    <div className={classes.container}>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <Link href='/'>
            <Image src='/icons/logo.svg' width={200} height={80} alt='logo' />
          </Link>
        </div>
        <div id='responsiveNav' className={classes.linksButtons}>
          <ul className={classes.links}>
            <li>
              <Link href='/blog' onClick={() => responsiveNavHandler()}>Blog</Link>
            </li>
            <li>
              <Link href='/about' onClick={() => responsiveNavHandler()}>About</Link>
            </li>
          </ul>
          <div className={classes.themeButtons}>
            <ThemeLayout />
          </div>
        </div>
        <div id='humberger' onClick={responsiveNavHandler} className={classes.humberger}>
          <span></span>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
