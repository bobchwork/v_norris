import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const proptypes = {
  toggle: PropTypes.func,
};

const defaultProps = {
  toggle: () => {
  },
};

const Menu = (props) => {
  const [hideBox, toggleBox] = useState(true);
  const list = (
    <div className="card__custom-menu-content">
      <a href="/" alt="link">My pubished jokes</a>
      <a href="/" alt="link">My saved jokes</a>
      <a href="/" alt="link">Account information</a>
      <a href="/" alt="link">Publish new joke</a>
    </div>
  );
  const onCardMouseLeave = () => {
    toggleBox(true);
  };
  return (
    <div className="main-navigation">
      <nav className="main-navigation__desktop">
        <a href="/">SO FUNKTIONIERT&rsquo;S</a>
        <a href="/">SONDERANGEBOTE</a>
        <a href="/" onMouseEnter={() => toggleBox(false)}>
          <img src="/images/man-shape.png" alt="mein bereich" />
          MEIN BEREICH
          <img src="/images/path-down.png" alt="mein berich" />
        </a>
        <Card
          content={list}
          type="menu"
          trianglePosition="right"
          hide={hideBox}
          onMouseCardLeave={onCardMouseLeave}
        />
      </nav>
      <div className="main-navigation__mobile">
        <div
          className="main-navigation__mobile-wrapper"
          onClick={() => (props.toggle())}
          role="button"
        >
          <img className="main-navigation__burger" src="/images/burger.png" alt="menu" />
        </div>
      </div>
    </div>
  );
};

Menu.defaultProps = defaultProps;
Menu.propTypes = proptypes;

export default Menu;
