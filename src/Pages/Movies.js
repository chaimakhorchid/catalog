import React, { Component } from 'react'

import FullMovies from '../FullMovies.json'


class Movies extends Component {
    render() {
        const movie = FullMovies.find( film => film.id == this.props.match.params.id)
        console.log(movie)
        return (
            <div>
             <h1> {movie.title}</h1>
             <p><strong>Director :</strong> {movie.director}</p>
             <ul style={{listStyle: "none"}}> <strong>Stars :</strong> 
                 <li>{movie.stars[0]}</li>
                 <li>{movie.stars[1]}</li>
                 <li>{movie.stars[2]}</li>
             </ul>
             <img className="" src={movie.image}></img>
             <p> <strong>Description : </strong> {movie.description}</p>
            </div>
        )
    }
}

export default Movies
