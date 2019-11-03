import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';
import {
  vote,
  getAllJokes,
  getJoke,
} from '../actions/jokes';
import Card from '../components/Common/Card';
import List from '../components/Common/List';
import NavButton from '../components/Common/NavButton';
import Loading from '../components/Common/Loading';
import JokeStatContent from '../components/SingleJoke/JokeStatContent';
import VotesCounter from '../components/SingleJoke/VotesCounter';
import NavigationButtons from '../components/SingleJoke/NavigationButtons';
import {
  sortByPopularity,
  truncateText,
  getJokeNextIndex,
  getJokePrevIndex,
} from '../helpers/helper';

class SingleJokeContainer extends Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
    this.nextJoke = this.nextJoke.bind(this);
    this.previousJoke = this.previousJoke.bind(this);
    this.voteJoke = this.voteJoke.bind(this);
  }

  componentDidMount() {
    const { match, jokes: { list } } = this.props;
    const id = match.params.id;
    if (list.length < 1) {
      getAllJokes();
    }
    getJoke(id);
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    const id = match.params.id;
    if (prevProps.jokes.list < 1 || (prevProps.match.params.id !== id)) {
      getJoke(id);
    }
  }

  goBack() {
    const { history } = this.props;
    history.push('/');
  }

  nextJoke() {
    const { selectedJoke, history, jokes: { list } } = this.props;
    const index = getJokeNextIndex(selectedJoke.id);
    if (index) {
      const jokeId = list[index].id;
      history.push(`/joke/${jokeId}`);
    }
  }

  previousJoke() {
    const { selectedJoke, history, jokes: { list } } = this.props;
    const index = getJokePrevIndex(selectedJoke.id);
    if (index) {
      const jokeId = list[index].id;
      history.push(`/joke/${jokeId}`);
    }
  }

  voteJoke(type) {
    const { votedIds, selectedJoke } = this.props;
    if (!votedIds.includes(selectedJoke.id)) {
      vote(selectedJoke, type);
      toastr.success('Voted', 'Cool! this joke has your vote.');
    } else {
      toastr.error('Error', 'You already voted for this joke.');
    }
  }

  render() {
    const { selectedJoke, jokes: { list } } = this.props;
    const updatedList = sortByPopularity(list.slice(0, 10));
    const topList = (
      <List
        title="the top 10 jokes this week"
        list={updatedList}
      />
    );

    if (!selectedJoke) {
      return (
        <Loading />
      );
    }

    // NO TITLE IN THE DATA
    const title = truncateText(selectedJoke.value, 14);
    const joke = (
      <JokeStatContent
        description={selectedJoke.value}
        categoryList={selectedJoke.categories}
        title={title}
        selectedJoke={selectedJoke}
      />
    );

    return (
      <div className="grid grid--items-top">
        <div className="grid__item-col grid__item-col--12">
          <NavButton
            type="back"
            handleOnClick={this.goBack}
          />
        </div>
        <div className="grid__item-col grid__item-col--8 grid__item-col--padding-right-30 grid__mb-item-col--12">
          <Card type="display" content={joke} />
          <div className="grid">
            <div className="grid__item-col grid__item-col--6 grid__mb-item-col--12">
              <VotesCounter
                handleClick={this.voteJoke}
                likes={selectedJoke.likes}
                dislikes={selectedJoke.dislikes}
              />
            </div>
            <div className="grid__item-col grid__item-col--6 grid__mb-item-col--12">
              <NavigationButtons nextJoke={this.nextJoke} previousJoke={this.previousJoke} />
            </div>

          </div>
        </div>
        <div className="grid__item-col grid__item-col--4 grid__mb-item-col--12">
          <Card content={topList} type="display" />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(
  (state) => ({
    jokes: state.jokes,
    votedIds: state.jokes.votedIds,
    selectedJoke: state.jokes.selectedJoke,
    isLoading: state.isLoading,
  }), {
    getJoke,
    vote,
    getAllJokes,
  }
)(SingleJokeContainer));
