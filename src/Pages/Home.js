import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import FullMovies from '../FullMovies.json'


class Home extends Component {
  render() {
    return (
      <div>
        <h1>MOVIES STORE</h1>
        <p>Bienvenue chez MoviesStore </p>
        {FullMovies.map(movie =>(
              <Link
              key={`${movie.title}-${movie.id}`}
              to={`/movies/${movie.id}`}
              >
                  <p>{movie.title}</p>
              </Link>
          ) )}
      </div>
    )
  }
}

export default Home