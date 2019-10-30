import axios from 'axios';
import store from '../config/store';
import * as actionTypes from './actionTypes';

export const updateSelectedCategory = (category) => {
  store.dispatch({
    type: actionTypes.UPDATE_SELECTED_CATEGORY,
    payload: category,
  });
};

const selectJoke = (joke) => {
  store.dispatch({
    type: actionTypes.GET_JOKE,
    payload: joke,
  });
};

export const getJoke = (jokeId) => {
  const { jokes: { list } } = store.getState();
  if (!list || list.length < 1) {
    return;
  }
  const joke = list.find((j) => (j.id === jokeId));
  selectJoke(joke);
};

export const vote = (selectedJoke, type) => {
  const { jokes: { list } } = store.getState();
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
  store.dispatch({
    type: actionTypes.UPDATE_VOTES,
    payload: { updatedList, id: selectedJoke.id },
  });
};

export const getAllJokes = () => {
  store.dispatch({
    type: actionTypes.GET_ALL_JOKES,
    payload: axios.get('/api/jokes/search?query=all'),
  });
};

export const getCategories = () => {
  store.dispatch({
    type: actionTypes.GET_CATEGORIES,
    payload: axios.get('/api/jokes/categories'),
  });
};
