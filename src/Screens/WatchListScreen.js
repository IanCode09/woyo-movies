import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MovieContext } from '../context/MovieState'

const WatchlistScreen = () => {
    const { movieWatchList } = useContext(MovieContext)
    
    return (
        <div className="wathclist__container">
            <h2 style={{ textAlign: 'center', marginBottom: 50 }}>Watchlist Movie Item</h2>

            {movieWatchList.length > 0 ? (
                <div className="list-movies">
                    {movieWatchList.map((movie) => (
                        <div key={movie.id} className="movie-info">
                            <Link to={`movie/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} />
                                <p>{movie.title}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (   
                <h2 style={{ textAlign: 'center' }}>You haven't added any movies to your watchlist.</h2>
            )}
        </div>
    )
}

export default WatchlistScreen
