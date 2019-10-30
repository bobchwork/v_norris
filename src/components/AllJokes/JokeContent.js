import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const proptypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,

};

const JokeContent = (props) => {
  const {
    description,
    title,
    icon,
    id
  } = props;
  return (
    <div className="joke-content">
      <h2 className="joke-content__title">
        <img className="joke-content__joke-icon" src={icon} alt={title} />
        {title}
      </h2>
      <p className="joke-content__description">
        {description}
      </p>
      <div className="joke-content__stat-link">
        <Link to={`/joke/${id}`}>
          SEE STAT
          <span>
            <img src="/images/arrow-r.png" alt="see stat" />
          </span>
        </Link>

      </div>

    </div>
  );
};

JokeContent.propTypes = proptypes;

export default JokeContent;
