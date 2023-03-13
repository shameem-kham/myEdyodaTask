import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      movies: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchMovies('war');
  }

  fetchMovies = async (searchQuery) => {
    this.setState({ loading: true });
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=45f0782a&s=${searchQuery}`);
      const data = await response.json();
      if (data.Search) {
        this.setState({ movies: data.Search, error: null });
      } else {
        this.setState({ movies: [], error: data.Error });
      }
    } catch (error) {
      this.setState({ error: error.message });
    }
    this.setState({ loading: false });
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.fetchMovies(this.state.searchQuery);
  }

  render() {
    const { searchQuery, movies, loading, error } = this.state;
    return (
      <div className="App">
        <form className='movie-search' onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={this.handleSearchChange}
            placeholder="Search for movies..."
          />
          <button type="submit">Search</button>
        </form>
        {loading && <p id="loading">Loading movies...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && movies.length === 0 && <p>No movies found.</p>}
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default App;
