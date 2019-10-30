import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const proptypes = {
  handleClick: PropTypes.func,
  type: PropTypes.string,
  count: PropTypes.number,
};
const defaultProps = {
  handleClick: () => {
  },
  type: 'like',
  count: 0,
};

const VoteButton = (props) => {
  const { type, handleClick, count } = props;
  const imagePath = type === 'like' ? '/images/tup.svg' : '/images/tdown.svg';
  const handClassnames = cx({
    'vote-button__hand': true,
    'vote-button__hand--dislike': type === 'dislike',
  });
  return (
    <div
      className={`vote-button vote-button--${type}`}
      onClick={() => handleClick(type)}
      role="button"
    >
      <img className={handClassnames} src={imagePath} alt={type} />
      <p className="vote-button__count">
        {count}
      </p>
    </div>
  );
};

VoteButton.defaultProps = defaultProps;
VoteButton.propTypes = proptypes;

export default VoteButton;
