import React, { useState, useEffect, useContext } from 'react'
import Moment from 'react-moment';
import { MovieContext } from '../context/MovieState'

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

    const { movieWatchList, addMovieToWatchList, removeFromWatchList } = useContext(MovieContext)

    const watchList = movieWatchList.find((movieList) => movieList.id === movie.id)

    // const btnWatchListDisabled = watchList ? true : false

    return (
        <div className="moviedetails__container">
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            ) : (
                <img src="https://images.unsplash.com/photo-1490971588422-52f6262a237a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" />
            )}
            <div className="movie-detail">
                <h1>
                    {movie.title} {" "}
                    <span className="text-light">
                        (<Moment format="YYYY">
                            {movie.release_date}
                        </Moment>)
                    </span>
                </h1>
                
                <p>
                    <Moment format="MM/DD/YYYY">
                        {movie.release_date}
                    </Moment>
                </p>

                <p style={{ color: 'yellow', marginTop: 5, marginBottom: 15 }}>
                    {movie.status ? ( 
                        <>
                            {movie.status}
                        </>
                    ): null }
                </p>

                <i className="fas fa-star" /> {movie.vote_average}

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
                
                {!watchList ? ( 
                    <button 
                        className="btn btn-primary"
                        onClick={() => addMovieToWatchList(movie)}
                    >
                        <i className="far fa-bookmark" /> Add to Watchlist
                    </button>
                ) : (
                    <button 
                        className="btn btn-secondary"
                        onClick={() => removeFromWatchList(movie.id)}
                    >
                        <i className="far fa-bookmark" /> Remove from Watchlist
                    </button>
                )}
                
            </div>
        </div>
    )
}

export default MovieDetailScreen
