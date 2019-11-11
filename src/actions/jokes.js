import axios from 'axios';
import * as actionTypes from './actionTypes';

export const updateSelectedCategory = (category) => {
  return {
    type: actionTypes.UPDATE_SELECTED_CATEGORY,
    payload: category,
  };
};

export const getJoke = (jokeId) => {
  return (dispatch, getState) => {
    const { jokes: { list } } = getState();
    if (!list || list.length < 1) {
      return;
    }
    const joke = list.find((j) => (j.id === jokeId));

    dispatch({
      type: actionTypes.GET_JOKE,
      payload: joke,
    });

  }
};

export const vote = (selectedJoke, type) => {

  return (dispatch, getState) => {

    const { jokes: { list } } = getState();
    const newLikes = type === 'like' ? 1 : 0;
    const newDislikes = type === 'dislike' ? 1 : 0;

    const updatedList = list.map((joke) => {
      if (joke.id === selectedJoke.id) {
        return {
          ...joke,
          likes: (selectedJoke.likes + newLikes),
          dislikes: (selectedJoke.dislikes + newDislikes),
        };
      }
      return joke;
    });
    dispatch({
      type: actionTypes.UPDATE_VOTES,
      payload: { updatedList, id: selectedJoke.id },
    });
  }
};

export const getAllJokes = () => {
  return {
    type: actionTypes.GET_ALL_JOKES,
    payload: axios.get('https://api.chucknorris.io/jokes/search?query=all'),
  };
};

export const getCategories = () => {
  return {
    type: actionTypes.GET_CATEGORIES,
    payload: axios.get('https://api.chucknorris.io/jokes/categories'),
  };
};
