import React from 'react'
import MovieItem from '../components/MovieItem';
import './MovieList.css';

const MovieList = (props) => {
    return (
        <ul>
            {props.movies.map(movie => {
                return <MovieItem 
                        title={movie.title}
                        key={movie.id}
                        id={movie.id}
                        image={movie.poster_path}/>
            })}
        </ul>
    )
}

export default MovieList
