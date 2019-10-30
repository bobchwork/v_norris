import React from 'react';
import PropTypes from 'prop-types';

const proptypes = {
  type: PropTypes.string,
  handleOnClick: PropTypes.func,
};

const defaultProptypes = {
  type: 'back',
  handleOnClick: () => {}


};

const NavButton = (props) => {
  const { type, handleOnClick } = props;

  const navButtonClass = `nav-button nav-button--${type}`;

  return (
    <div
      className={navButtonClass}
      onClick={() => (handleOnClick())}
      role="button"
    >
      <img src="/images/arrow-left.png" alt={type} />
    </div>
  );
};

NavButton.propTypes = proptypes;
NavButton.defaultProps = defaultProptypes;

export default NavButton;
