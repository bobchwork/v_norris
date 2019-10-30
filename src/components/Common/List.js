import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { truncateText } from '../../helpers/helper';

const proptypes = {
  type: PropTypes.string,
  title: PropTypes.string, // the data has no title, this will be the joke truncated
  list: PropTypes.array, // {id, value, url}
  customContent: PropTypes.any,
};

/*
  list types : menu, search , display
 */

const defaultProps = {
  type: 'display',
  title: null,
  list: [],
  customContent: '',
};

const List = (props) => {
  const {
    title,
    list,
    type,
    customContent
  } = props;

  const classnames = cx({
    'list__content': true,
    [`list__content--${type}`]: true,
  });
  const linkClassnames = cx({
    'list__link': true,
    'list__link--search': type === 'search',
  });
  let content = null;
  if (list.length > 0) {
    content = list.map((item) => (
      <div className={linkClassnames} key={item.id}>
        <Link to={`/joke/${item.id}`}>
          {truncateText(item.value, 30)}
        </Link>
        <br />
      </div>
    ));
  } else {
    content = customContent;
  }

  return (
    <div className="list">
      {title
      && (
        <h2 className="list__title">
          {title}
        </h2>
      )}
      <div className={classnames}>
        {content}
      </div>
    </div>
  );
};

List.propTypes = proptypes;
List.defaultProps = defaultProps;

export default List;
