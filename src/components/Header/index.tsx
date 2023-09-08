import './styles.css'

import { Button } from '../Button';
import { InstagramLogo } from '@phosphor-icons/react';
import { MouseEvent } from 'react';

export function Header() {
  const handleMenuClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const menuItems = document.querySelectorAll('.menu a');

    menuItems.forEach((menuItem) => {
      menuItem.classList.remove('menu-active');
    });

    const clickedMenuItem = e.currentTarget;
    clickedMenuItem.classList.add('menu-active');

  }

  return (
    <div className='header'>
      <div className="header-content">
        <img src='/logo-menu.svg' alt="MAIA Logo" />

        <nav id='menu' className="menu">
          <a href="#about-us" onClick={handleMenuClick} className='menu-active'>About Us</a>
          <a href="#selective-process" onClick={handleMenuClick}>Selective Process</a>
        </nav>

        <Button
          href='https://www.instagram.com/maia_facens/'
          text='Instagram'
          icon={<InstagramLogo className="icon" weight='fill' size={20} />}
        />
      </div>
    </div>
  )
}