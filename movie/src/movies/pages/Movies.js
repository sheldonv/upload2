import React, {useEffect, useState, useCallback} from 'react'
import MovieList from '../components/MovieList';

const Movies = () => {
    const [isLoading, setIsLoading] = useState()
    const [loadedMovies, setLoadedMovies] = useState();
    const sendRequest = useCallback(async () => {
        const response = await fetch('http://localhost:3000/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const responseData = await response.json();
        console.log(responseData.results);
        setLoadedMovies(responseData.results)
    }, [])
    useEffect(() => {
        setIsLoading(true);
        sendRequest();
        setIsLoading(false)
    }, [sendRequest])
    return (
        <React.Fragment>
            {loadedMovies && !isLoading && <div>
                <MovieList movies={loadedMovies}/>
            </div>}
        </React.Fragment>
        
    )
}

export default Movies
