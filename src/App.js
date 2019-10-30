import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

const LIMIT = 24;  // This API sets a hard-limit to 25
const API_KEY = 'dc6zaTOxFJmzC';

export default class App extends Component {
  state = {
    gifs: [],
    loading: true,
  };

  componentDidMount() {
    // Use Fetch API to load trending gifs
    // fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`)
    //   .then(response => response.json())
    //   .then(responseData => this.setState({ gifs: responseData.data, loading: false }))
    //   .catch(error => console.log('Error fetching and parsing data', error));
    
    this.performSearch();
  }

  performSearch = (query = 'doge') => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=${LIMIT}&api_key=${API_KEY}`)
      .then(response =>
        this.setState({
          gifs: response.data.data,
          loading: false
        })
      ).catch(error =>
        console.log('Error fetching and parsing data', error)
      );
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
