import React from 'react'
import './MovieItem.scss'

const MovieItem = (props) => {
    return (
        <li className={`movie-item ${props.className}`}>
           <div className={`movie-item__image`}>
                <img src={`https://image.tmdb.org/t/p/original/${props.image}`} alt={props.title}/>
            </div>

        </li>
    )
}

export default MovieItem
