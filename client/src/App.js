import React, { useState } from 'react';
import { Route } from 'react-router-dom';


import SavedList from './Movies/SavedList.js';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/:id" component={Movie} />
      </div>
     
    </div>
  );
};

export default App;
