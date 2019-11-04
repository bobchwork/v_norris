import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Label from './Label';
import JokeContent from '../AllJokes/JokeContent';
import Button from './Button';

const proptypes = {
  cardsContent: PropTypes.array.isRequired,
  viewMoreFunction: PropTypes.func,
  viewMore: PropTypes.bool,
  selectedCategory: PropTypes.string,
};

const defaultProps = {
  viewMore: true,
  viewMoreFunction: () => {
  },
  selectedCategory: ','
};

const Cards = (props) => {
  const {
    cardsContent,
    viewMoreFunction,
    viewMore,
    selectedCategory
  } = props;

  const jokeContents = cardsContent.map((cardContent) => {
    const category = (cardContent.categories.length > 0) ? cardContent.categories : ['Unknown'];
    return (
      <JokeContent
        description={cardContent.value}
        title={category[0]}
        icon={`${process.env.REACT_APP_BASE_PATH}/images/green-light.png`}
        id={cardContent.id}
      />
    );
  });
  const cards = jokeContents.map((jokeContent, index) => {
    const keyIndex = `card-${index}`;
    return (
      <div className="grid__item-col--4 grid__mb-item-col--12" key={keyIndex}>
        <Card
          content={jokeContent}
        />
      </div>
    );
  });
  const categoryHasJokes = cards.length > 1;
  return (
    <div className="cards">
      <Label labelContent={`${selectedCategory} jokes`} type={selectedCategory} />
      {categoryHasJokes
      && (
        <div className="cards__content">
          <div className="grid">
            {cards}
          </div>
        </div>
      )}
      {!categoryHasJokes
      && (
        <div className="cards__message">
          <p>
            No Jokes for &nbsp;
            {selectedCategory}
            ..
          </p>
        </div>
      )}
      {viewMore && categoryHasJokes
      && (
        <div className="cards__more-button">
          <Button
            handleOnClick={viewMoreFunction}
            title="View More"
            iconPath={`${process.env.REACT_APP_BASE_PATH}/images/arrow-d.png`}
          />
        </div>
      )}
    </div>
  );
};

Cards.propTypes = proptypes;
Cards.defaultProps = defaultProps;

export default Cards;
