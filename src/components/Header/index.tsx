import './styles.css'

import { Button } from '../Button';
import { InstagramLogo, List, X } from '@phosphor-icons/react';
import { MouseEvent, useState } from 'react';

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const menuItems = document.querySelectorAll('.navbar a');

    menuItems.forEach((menuItem) => {
      menuItem.classList.remove('item-active');
    });

    const clickedMenuItem = e.currentTarget;
    clickedMenuItem.classList.add('item-active');

    const menuToggle = document.getElementById("menu-toggle") as HTMLInputElement;

    if(menuToggle) menuToggle.checked = false;
    setShowMenu(false)
  }

  const handleToggleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className='header'>
      <div className="header-content">
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <div className="header-top">
          <a href="#hero">
            <img src='/logo-menu.svg' alt="MAIA Logo" />
          </a>
          <label htmlFor="menu-toggle" className="mobile" onClick={handleToggleMenuClick}>
            {
              showMenu ? 
              <X id='menu-close' size={22} /> :
              <List id='menu-icon' weight='fill' size={20} />
            }
          </label>
        </div>

        <nav id='navbar' className="navbar">
          <a href="#about-us" onClick={handleMenuClick} className='item-active'>About Us</a>
          <a href="#selective-process" onClick={handleMenuClick}>Selective Process</a>
          <Button
            href='https://www.instagram.com/maia_facens/'
            text='Instagram'
            icon={<InstagramLogo className="icon" weight='fill' size={20} />}
          />
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