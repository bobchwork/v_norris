import React from 'react';
import PropTypes from 'prop-types';
import SearchBox from './SearchBox';
import HeaderMenu from './HeaderMenu';

const proptypes = {
  jokes: PropTypes.array,
};

const defaultProps = {
  jokes: [],
};

const Header = (props) => (
  <>
    <HeaderMenu />
    <div className="header">
      <h1 className="header__title"> The Joke Bible</h1>
      <h2 className="header__subtitle">Daily Laughs for you and yours</h2>
      <SearchBox
        jokes={props.jokes}
        placeholder="How can we make you laugh today?"
      />
    </div>
  </>
);

Header.propTypes = proptypes;
Header.defaultProps = defaultProps;

export default Header;
