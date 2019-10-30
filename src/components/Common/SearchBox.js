import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';
import List from './List';
import Card from './Card';
import { searchJoke } from '../../helpers/helper';

const proptypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  jokes: PropTypes.array,
};

const defaultProps = {
  title: 'search',
  name: 'searchbox',
  type: 'text',
  placeholder: '',
  jokes: [],
};

const SearchBox = (props) => {
  const {
    handleSubmit,
    placeholder,
    title,
    name,
    type,
    jokes,
  } = props;

  const [jokesList, setJokes] = useState([]);
  const images = {
    white: '/images/search.png',
    black: '/images/search-b.png'
  };
  const [image, setImage] = useState(images.white);
  const [hideCard, setHide] = useState(true);


  const search = (evt) => {
    const newList = searchJoke(evt.target.value, jokes);
    setJokes(newList);
  };

  const showBox = () => {
    const focusClass = 'search-box--focused';
    const unfocusClass = 'search-box--unfocused';
    document.querySelector('.search-box').classList.remove(unfocusClass);
    document.querySelector('.search-box').classList.add(focusClass);
    setImage(images.black);
    setHide(false);
  };

  const hideBox = (evt) => {
    const focusClass = 'search-box--focused';
    const unfocusClass = 'search-box--unfocused';
    document.querySelector('.search-box').classList.remove(focusClass);
    document.querySelector('.search-box').classList.add(unfocusClass);
    setImage(images.white);
    if (evt.target.value === '') {
      setJokes([]);
    }
    setTimeout(() => {
      setHide(true);
    }, 300);
  };
  const list = (jokesList.length > 0 ? <List list={jokesList} type="search" /> : <p> No results </p>);
  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={handleSubmit}>
        <div className="search-box__input-field">
          <InputField
            title={title}
            name={name}
            type={type}
            onChange={(evt) => {
              if (evt.target.value !== '') {
                showBox();
              } else {
                hideBox(evt);
              }
              search(evt);
            }}
            onFocusOut={hideBox}
            placeholder={placeholder}
          />
        </div>
        <div className="search-box__button">
          <img
            src={image}
            onClick={handleSubmit}
            alt="search"
          />
        </div>
      </form>
      <div className="search-box__box-list-container">
        <Card
          content={list}
          type="messagebox"
          trianglePosition="left"
          hide={hideCard}
        />
      </div>
    </div>
  );
};

SearchBox.propTypes = proptypes;
SearchBox.defaultProps = defaultProps;

export default SearchBox;
