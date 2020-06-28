import React, { Component } from 'react';
import api from './services/api';

import './global.css';

import Header from './components/Header';
import MovieList from './pages/Movies'

const App = () => (
  <div className="App">
    <Header />
    <MovieList />
  </div>
);

export default App;
