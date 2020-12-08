import React, { useState, useEffect } from 'react'

const MovieDetailScreen = ({ match }) => {
    const movieId = match.params.id

    const movieById = `https://api.themoviedb.org/3/movie/${movieId}?api_key=b1fbb59223a6f5e7113c60d079c7c503&append_to_response=videos`

    const [movie, setMovie] = useState("")

    const getMovie = async () => {
        const data = await fetch(movieById)
        const dataJson = await data.json()

        setMovie(dataJson)
    }

    useEffect(() => {
        getMovie()
    }, [])    

    return (
        <div className="moviedetails__container">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-detail">
                <h1>{movie.title} ({movie.release_date})</h1>
                
                <p>{movie.release_date}</p>

                <p style={{ color: 'yellow', marginTop: 5, marginBottom: 15 }}>
                    {movie.status ? ( 
                        <>
                            {movie.status}
                        </>
                    ): null }
                </p>

                <p className="tagline">
                    {movie.tagline}
                </p>

                <h2>Overview</h2>

                <p 
                    className="text-light" 
                    style={{ marginTop: 10 }}
                >
                    {movie.overview}
                </p>
            </div>
        </div>
    )
}

export default MovieDetailScreen
