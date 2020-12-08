import React, { useState, useEffect } from 'react'
import MovieList from '../Components/MovieList'

const HomeScreen = () => {
    const movieDiscover = `https://api.themoviedb.org/3/discover/movie?api_key=b1fbb59223a6f5e7113c60d079c7c503&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    // console.log(movieDiscover)

    const [movies, setMovies] = useState([])

    const getMovieRequest = async () => {
        const data = await fetch(movieDiscover)
        const dataJson = await data.json()

        setMovies(dataJson.results)
    }

    useEffect(() => {
        getMovieRequest()
    }, [])

    return (
        <div className="home__container">
            <MovieList movies={movies} />
        </div>
    )
}

export default HomeScreen
