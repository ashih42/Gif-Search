import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  state = {
    gifs: [],
    loading: true,
  };

  componentDidMount() {
    // Use Fetch API to load trending gifs
    // fetch('https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    //   .then(response => response.json())
    //   .then(responseData => this.setState({ gifs: responseData.data, loading: false }))
    //   .catch(error => console.log('Error fetching and parsing data', error));
    
    this.performSearch();
  }

  performSearch = (query = 'doge') => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => this.setState({ gifs: response.data.data, loading: false }))
      .catch(error => console.log('Error fetching and parsing data', error));
  }

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          {
            this.state.loading
            ? <p>Loading...</p>
            : <GifList data={this.state.gifs} />
          }
        </div>
      </div>
    );
  }
}
