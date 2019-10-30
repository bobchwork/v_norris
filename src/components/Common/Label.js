import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const proptypes = {
  labelContent: PropTypes.string,
  type: PropTypes.string,
  left: PropTypes.bool,
  bullet: PropTypes.bool,
};

const defaultProps = {
  labelContent: '',
  type: 'animal',
  left: false,
  bullet: false,

};

const Label = (props) => {
  const {
    labelContent,
    type,
    left,
    bullet
  } = props;
  const classes = cx({
    'joke-label': true,
    'joke-label--left': left,
    [`joke-label--${type}`]: true,
  });
  return (
    <div className={classes}>
      <p>
        {bullet
        && (
          <span>&bull;</span>
        )}
        {labelContent}
      </p>
    </div>
  );
};

Label.propTypes = proptypes;
Label.defaultProps = defaultProps;

export default Label;
