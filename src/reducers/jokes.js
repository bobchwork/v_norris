import * as actionTypes from '../actions/actionTypes';
// eslint-disable-next-line
import { addRandomVotes, sortByPopularity } from '../helpers/helper';

/*
jokes = [ {..jokes, position, dislikes, likes } ];
 */
const initialState = {
  list: [],
  selectedJoke: null,
  categories: [],
  popularity: [],
  isLoading: false,
  selectedCategory: 'animal',
  votedIds: [],
};

function jokes(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_FULFILLED: {
      const categories = action.payload.data;
      return { ...state, categories };
    }

    case actionTypes.UPDATE_SELECTED_CATEGORY: {
      return { ...state, selectedCategory: action.payload };
    }

    case actionTypes.GET_ALL_JOKES:
      return { ...state, isLoading: true };

    case actionTypes.GET_ALL_JOKES_FULFILLED: {
      const appJokes = addRandomVotes(action.payload.data.result);
      const jokesSortedByPopularity = sortByPopularity(appJokes);
      return {
        ...state,
        isLoading: false,
        list: jokesSortedByPopularity,
      };
    }

    case actionTypes.GET_JOKE: {
      // we are not getting the joke from the endpoint, but from the list of jokes
      return {
        ...state,
        selectedJoke: action.payload,
        isLoading: false,
      };
    }

    case actionTypes.UPDATE_VOTES: {
      const newSelectedJoke = action.payload.updatedList.find(
        (joke) => (joke.id === action.payload.id),
      );
      return {
        ...state,
        list: [...action.payload.updatedList],
        votedIds: [...state.votedIds, action.payload.id],
        selectedJoke: newSelectedJoke,
      };
    }
    default:
      return state;
  }
}

export default jokes;
