import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Common/Button';

const proptypes = {
  nextJoke: PropTypes.func.isRequired,
  previousJoke: PropTypes.func.isRequired,
};

const NavigationButtons = (props) => (
  <div className="navigation-buttons">
    <Button
      buttonType="joke-nav"
      title="prev joke"
      iconPath="/images/arrow-left.svg"
      iconPosition="left"
      border
      handleOnClick={props.previousJoke}
      align="left"
    />
    <Button
      buttonType="joke-nav"
      title="next joke"
      iconPath="/images/arrow-right.svg"
      iconPosition="right"
      border
      handleOnClick={props.nextJoke}
      align="right"
    />
  </div>
);

NavigationButtons.propTypes = proptypes;

export default NavigationButtons;
