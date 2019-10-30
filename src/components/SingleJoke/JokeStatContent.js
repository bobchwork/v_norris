import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Common/Label';
import PopularityLabel from './PopularityLabel';
import { getCategory, getJokeIndexById } from '../../helpers/helper';

const proptypes = {
  title: PropTypes.string.isRequired,
  categoryList: PropTypes.array,
  description: PropTypes.string,
  selectedJoke: PropTypes.object,
};

const defaultProps = {
  categoryList: [],
  description: 'No description',
  selectedJoke: {}
};

const JokeStatContent = (props) => {
  const {
    title,
    categoryList,
    description,
    selectedJoke: { likes, dislikes, id }
  } = props;

  const category = getCategory(categoryList);
  const index = getJokeIndexById(id) + 1;

  return (
    <div className="joke-stat-content">
      <div className="joke-stat-content__category">
        <Label
          labelContent={category}
          type={category}
          left
          bullet
        />
        <PopularityLabel align="right" likes={likes} dislikes={dislikes} />
      </div>
      <div className="joke-stat-content__wrapper">
        <div className="joke-stat-content__title">
          <h1 className="joke-stat-content__title-text">
            {title}
          </h1>
          <div className="joke-stat-content__number">
            <div className="joke-stat-content__divider" />
            <span>
              NO #
              {index}
            </span>
          </div>
        </div>
      </div>
      <div className="joke-stat-content__description">
        <p>
          {description}
        </p>
      </div>

    </div>
  );
};

JokeStatContent.propTypes = proptypes;
JokeStatContent.defaultProps = defaultProps;

export default JokeStatContent;
