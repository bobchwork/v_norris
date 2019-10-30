import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { getPopularityLabel } from '../../helpers/helper';

const propTypes = {
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  align: PropTypes.string,
  bullet: PropTypes.bool,
};

const defaultProps = {
  likes: 0,
  dislikes: 0,
  align: 'left',
  bullet: true,
};

const PopularityLabel = (props) => {
  const {
    likes,
    dislikes,
    align,
    bullet
  } = props;
  const labelValue = getPopularityLabel(likes, dislikes);
  const classes = cx({
    'popularity-label': true,
    [`popularity-label--${labelValue.modifier}`]: true,
    [`popularity-label--${align}`]: true,
  });
  return (
    <div className={classes}>
      {bullet
      && (
        <span>&bull;</span>
      )}
      {labelValue.label}
    </div>
  );
};

PopularityLabel.defaultProps = defaultProps;
PopularityLabel.propTypes = propTypes;

export default PopularityLabel;
