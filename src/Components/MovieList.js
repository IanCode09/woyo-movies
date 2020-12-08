import React from 'react'
import { Link } from 'react-router-dom'

const MovieList = ({ movies }) => {
    return (
        <div>
            <div className="list-movies">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-info">
                        <Link to={`movie/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} />
                            <p>{movie.title}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieList
