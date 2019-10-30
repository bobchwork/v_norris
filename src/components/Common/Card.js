import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const proptypes = {
  type: PropTypes.string,
  content: PropTypes.any,
  trianglePosition: PropTypes.string,
  hide: PropTypes.bool,
  onMouseCardLeave: PropTypes.func,

};

/*
  card types: simple, messagebox, menu
  trianglePosition: right, left, center
 */
const defaultProps = {
  type: 'simple',
  content: '',
  trianglePosition: 'right',
  hide: false,
  onMouseCardLeave: () => {},
};

const Card = (props) => {
  const {
    type,
    content,
    hide,
    trianglePosition,
    onMouseCardLeave
  } = props;
  const isMessageBox = type === 'messagebox';
  const isMenu = type === 'menu';

  const cardclasses = cx({
    'card': true,
    [`card--${type}`]: true,
    [`card--triangle-${trianglePosition}`]: isMessageBox || isMenu,
    'card--hide': isMessageBox || isMenu,
    'card--show': (isMessageBox || isMenu) && !hide,
  });

  const cardContentClasses = cx({
    'card__content': true,
    'card__content--display': type === 'display',
  });
  return (
    <div className={cardclasses} onMouseLeave={(evt) => onMouseCardLeave(evt)}>
      <div className={cardContentClasses}>
        {content}
      </div>
    </div>
  );
};

Card.propTypes = proptypes;
Card.defaultProps = defaultProps;
export default Card;
