import React from 'react';
import PropTypes from 'prop-types';
import VoteButton from './VoteButton';

const proptypes = {
  handleClick: PropTypes.func,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
};
const defaultProps = {

  handleClick: () => {
  },
  likes: 0,
  dislikes: 0,
};

const VotesCounter = (props) => {
  const { handleClick, likes, dislikes } = props;
  return (
    <div className="votes-counter">
      <div className="votes-counter__button-wrapper votes-counter__button-wrapper--left">
        <VoteButton
          type="like"
          handleClick={handleClick}
          count={likes}
        />
      </div>
      <div className="votes-counter__button-wrapper">
        <VoteButton
          type="dislike"
          handleClick={handleClick}
          count={dislikes}
        />
      </div>
    </div>
  );
};

VotesCounter.defaultProps = defaultProps;
VotesCounter.propTypes = proptypes;

export default VotesCounter;
