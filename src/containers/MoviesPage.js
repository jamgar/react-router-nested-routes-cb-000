import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {fetchMovies} from '../actions'

import MoviesList from '../components/MoviesList';
import MovieShow from './MoviesShow'

class MoviesPage extends Component {
  render() {
    return (
      <div>
        <MoviesList movies={this.props.movies} />
        {this.props.children}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MoviesPage);
