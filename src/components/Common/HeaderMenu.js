import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import Menu from './Menu';
import List from './List';

const HeaderMenu = () => {
  const [showMbMenu, toggleMbMenu] = useState(false);
  const menuListLv1 = (
    <>
      <a href="/">SO FUNKTIONIERT&lsquo;`S</a>
      <a href="/">SONDERANGEBOTE</a>
      <a href="/">
        MEIN BEREICH
      </a>
    </>
  );
  const mobileClasses = cx({
    'main-navigation__mobile-menu-content': true,
    'main-navigation__mobile-menu-content--show': showMbMenu,
  });

  const toggleMenu = () => {
    toggleMbMenu(!showMbMenu);
  };

  return (
    <>
      <header className="header-menu">
        <div className="container">
          <div className="grid">
            <div className="grid__item-col grid__item-col--2">
              <Link to="/">
                <img
                  className="header-menu header-menu__logo"
                  src={`${process.env.REACT_APP_BASE_PATH}/images/logo-v.png`}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="grid__item-col grid__item-col--10">
              <Menu content={menuListLv1} toggle={toggleMenu} />
            </div>
          </div>
        </div>
      </header>
      <div className={mobileClasses}>
        <List type="menu" customContent={menuListLv1} />
      </div>
    </>
  );
};

export default HeaderMenu;
