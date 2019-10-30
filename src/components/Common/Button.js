import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const proptypes = {
  buttonType: PropTypes.string,
  title: PropTypes.string,
  iconPath: PropTypes.string,
  border: PropTypes.bool,
  categoryList: PropTypes.array,
  handleOnClick: PropTypes.func,
  align: PropTypes.string,
};

/*
* button types :
* page-button (border, primary color, transparent background)
* {category}-button
* */

const defaultProps = {
  buttonType: 'page-button',
  title: '',
  categoryList: [],
  border: false,
  iconPath: null,
  handleOnClick: () => {
  },
  align: null
};

const Button = (props) => {
  const categories = [];
  const {
    title,
    iconPosition,
    iconPath,
    border,
    buttonType,
    handleOnClick,
    categoryList,
    align
  } = props;

  if (categoryList && categoryList.length > 0) {
    categories.push(categoryList);
  }
  const isUnknown = !categories.includes(buttonType) && buttonType !== 'page-button';
  const classes = cx({
    'joke-button': true,
    [`joke-button--${buttonType}`]: true,
    'joke-button--unknown': !isUnknown,
    'joke-button--border': border,
    [`joke-button--${align}`]: !!align,
  });

  const btnTitleClasses = cx({
    'joke-button__title': true,
    'joke-button__title--has-icon': iconPath,
  });

  return (
    <button
      type="button"
      className={classes}
      onClick={() => {
        handleOnClick();
      }}
    >
      <span className={btnTitleClasses}>
        {iconPath && iconPosition === 'left'
        && (
        <img className="joke-button__icon joke-button__icon--left" src={iconPath} alt={title} />
        )}
        {title}
        {iconPath && iconPosition === 'right'
        && (
        <img className="joke-button__icon" src={iconPath} alt={title} />
        )}
      </span>
    </button>
  );
};

Button.propTypes = proptypes;
Button.defaultProps = defaultProps;

export default Button;
