import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Common/Button';
import cx from 'classnames';

const proptypes = {
  type: PropTypes.string,
  handleOnClick: PropTypes.func,
};

const defaultProptypes = {
  type: 'back',
  handleOnClick: () => {
  }
};

const NavButton = (props) => {
  const { type, handleOnClick } = props;

  const navButtonClass = `nav-button nav-button--${type}`;


  return (
    <>
      <div
        className={navButtonClass}
        onClick={() => (handleOnClick())}
        role="button"
      >
        <img src="/images/arrow-left.png" alt={type} />
      </div>
      <div className="nav-button__back-mb-button">
        <Button
          handleOnClick={() => (handleOnClick())}
          title="HOME"
          buttonType="all"
          align="center"
        />
      </div>

    </>
  );
};

NavButton.propTypes = proptypes;
NavButton.defaultProps = defaultProptypes;

export default NavButton;
