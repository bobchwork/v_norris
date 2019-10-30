import store from '../config/store';

const generateRandomInt = (max) => (Math.floor(Math.random() * Math.floor(max))
);

export const sortByPopularity = (jokesList) => (jokesList.sort((a, b) => (
  (a.likes < b.likes) ? 1 : -1
)));

export const addRandomVotes = (jokesList) => jokesList.map((joke) => ({
  ...joke,
  likes: generateRandomInt(1000),
  dislikes: generateRandomInt(1000),
}));

export const getPopularityLabel = (likes, dislikes) => {
  const votes = typeof likes === 'number' && typeof dislikes === 'number';
  if (!votes) {
    return { label: 'chesnut', modifier: 'chesnut' };
  }

  switch (votes) {
    case (dislikes > likes):
      return { label: 'chesnut', modifier: 'chesnut' };
    case (likes >= 0 && likes <= 50):
      return { label: 'New in town', modifier: 'new-in-town' };
    case (likes >= 51 && likes <= 100):
      return { label: 'Trending', modifier: 'trending' };
    case (likes >= 101):
      return { label: 'Hall of fame', modifier: 'hall-of-fame' };
    default:
      return '';
  }
};

export const getJokeIndexById = (id) => {
  const { jokes: { list } } = store.getState();
  return list.findIndex((joke) => (joke.id === id));
};

export const truncateText = (text, value = 30) => (`${text.slice(0, value)}...`);

export const getFromLocalStorage = () => {
  const jokes = localStorage.get('jokes');
  return JSON.parse(jokes);
};

export const saveInLocalStorage = (data) => {
  const stringJokes = JSON.stringify(data);
  localStorage.setItem('jokes', stringJokes);
};

export const getCategory = (catArray) => (catArray.length > 0 ? catArray[0] : 'Uncategorized');

export const searchJoke = (str, list) => {
  const searched = list.filter((joke) => {
    const val = joke.value.toLowerCase().search(str.toLowerCase());
    return (val !== -1);
  });
  return searched;
};

export const filterJokes = (category, jokesList) => (jokesList.filter((joke) => (
  joke.categories[0] === category
)));

export const getJokeNextIndex = (currentJokeId) => {
  const { jokes: { list } } = store.getState();
  let jokeIndex = null;

  list.forEach((item, index) => {
    if (currentJokeId === item.id) {
      jokeIndex = index;
    }
  });
  jokeIndex += 1;
  if (list[jokeIndex]) {
    return jokeIndex;
  }
  return null;
};

export const getJokePrevIndex = (currentJokeId) => {
  const { jokes: { list } } = store.getState();
  let jokeIndex = null;

  list.forEach((item, index) => {
    if (currentJokeId === item.id) {
      jokeIndex = index;
    }
  });
  jokeIndex -= 1;
  if (list[jokeIndex]) {
    return jokeIndex;
  }
  return null;
};
