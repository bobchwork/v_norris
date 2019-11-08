import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import Footer from './components/Common/Footer';
import Header from './components/Common/Header';
import AllJokesContainer from './containers/AllJokesContainer';
import SingleJokeContainer from './containers/SingleJokeContainer';

const proptypes = {
  jokes: PropTypes.array,
};

const defaultProps = {
  jokes: [],
};

const App = (props) => {
  const { jokes } = props;
  return (
    <Router>
      <div className="page-container">
        <Header jokes={jokes} />
        <div className="container container--full">
          <Switch>
            <Route path="/joke/:id" component={SingleJokeContainer} />
            <Route path="/" component={AllJokesContainer} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

App.propTypes = proptypes;
App.defaultProps = defaultProps;

export default connect(
  (state) => ({
    jokes: state.jokes.list,
  }),
  {},
)(App);
