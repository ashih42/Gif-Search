import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => {
  const results = props.data;
  const gifs = results.length > 0
    ? results.map(gif => <Gif url={gif.images.fixed_height.url} key={gif.id} />)
    : <NoGifs />;

  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}

export default GifList;
