import React, { Component } from 'react';
import api, { urlImage } from '../../services/api';

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
    return (
      <div className="container_films">
        {this.state.movies.map(movies => (
          <ul className="films-list" key={movies.id}>
            <li className="films-list-item">
              <figure className="poster-film">
                <img src={urlImage + '/' + movies.image} alt="" />
                <div className="film-info">
                  <h3>{movies.title}</h3>
                  <a href="#" className="film_link">
                    <i className="fa fa-play" aria-hidden="true"></i>
                  </a>
                </div>
              </figure>

              <div className="resume">
                <h3 className="film-resume-title">
                  {movies.title}
                </h3>
                <p className="genero">
                  <a href="#" className="film_link">{movies.categories}</a>
                </p>
                <p className="filme-nota">
                  <i className="fa fa-heart" aria-hidden="true"></i> {movies.note}
                </p>
              </div>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}