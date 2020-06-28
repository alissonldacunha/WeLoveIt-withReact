import React, { Component } from 'react';
import api, { urlImage } from '../../services/api';
import { FiPlay, FiHeart } from 'react-icons/fi';

import './styles.css';

export default class MovieList extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/movies');

    this.setState({ movies: response.data });
  };

  render() {
    const { movies } = this.state

    return (
      <div className="container_films">
        <ul className="films-list" >
          {movies.map(movies => (
            <li className="films-list-item" key={movies.id}>
              <figure className="poster-film">
                <img src={urlImage + '/' + movies.image} alt="" />
                <div className="film-info">
                  <h3>{movies.title}</h3>
                  <a className="film_link">
                    {/* <i className="fa fa-play" aria-hidden="true"></i> */}
                    <FiPlay />
                  </a>
                </div>
              </figure>

              <div className="resume">
                <h3 className="film-resume-title">
                  {movies.title}
                </h3>
                <p className="genero">
                  <span className="film_link">{movies.categories}</span>
                </p>
                <p className="filme-nota">
                  <a href="">
                    <FiHeart />
                  </a>
                  <span> {movies.note} </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}