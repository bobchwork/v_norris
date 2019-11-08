import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getAllJokes,
  getCategories,
  updateSelectedCategory
} from '../actions/jokes';
import CategoryFilter from '../components/AllJokes/CategoryFilter';
import Cards from '../components/Common/Cards';
import Loading from '../components/Common/Loading';
import { filterJokes } from '../helpers/helper';


class AllJokesContainer extends Component {
  constructor(props) {
    super(props);
    this.filterJoke = this.filterJoke.bind(this);
    this.viewMore = this.viewMore.bind(this);
    this.resetDisplayIndex = this.resetDisplayIndex.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.state = {
      categoryList: [],
      displayJokeIndex: 3,
      jokesToDisplay: null,
    };
  }

  componentDidMount() {
    this.props.getAllJokes();
    this.props.getCategories();
  }

  componentDidUpdate(prevProps) {
    const { categoryList, jokes } = this.props;
    if (categoryList !== prevProps.categoryList) {
      this.updateCategory(categoryList);
    }
    if (this.state.jokesToDisplay === null && prevProps.jokes.list !== jokes.list) {
      this.filterJoke('all');
    }
  }

  updateCategory(categoryList) {
    this.setState({
      categoryList,
    });
  }

  resetDisplayIndex() {
    this.setState(() => ({ displayJokeIndex: 3 }));
    return this.state.displayJokeIndex;
  }

  filterJoke(type, viewMore = false) {
    const { jokes } = this.props;
    const jokeIndex = viewMore ? this.state.displayJokeIndex + 3 : this.resetDisplayIndex();
    const filteredList = type === 'all' ? jokes.list : filterJokes(type, jokes.list);
    const slicedJokesList = filteredList.slice(0, jokeIndex);
    this.props.updateSelectedCategory(type);
    this.setState({
      jokesToDisplay: slicedJokesList,
      displayJokeIndex: jokeIndex,
    });
  }

  viewMore() {
    const { selectedCategory } = this.props;
    this.filterJoke(selectedCategory, true);
  }

  render() {
    const { isLoading, selectedCategory } = this.props;

    if (isLoading) {
      return (
        <Loading />
      );
    }
    return (
      <div className="grid">
        <div className="grid__item-col grid__item-col--12">
          <CategoryFilter handleOnClick={this.filterJoke} categoryList={this.state.categoryList} />
        </div>
        <div className="grid__item-col grid__item-col--12">
          {this.state.jokesToDisplay
          && (
            <Cards
              cardsContent={this.state.jokesToDisplay}
              viewMoreFunction={this.viewMore}
              selectedCategory={selectedCategory}
            />
          )}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ updateSelectedCategory, getCategories, getAllJokes }, dispatch)
  }
}


export default connect(
  (state) => ({
    jokes: state.jokes,
    isLoading: state.isLoading,
    categoryList: state.jokes.categories,
    selectedCategory: state.jokes.selectedCategory,
  }),
  mapDispatchToProps,
)(AllJokesContainer);
