import React from 'react'

const MovieList = ({ movies }) => {
    return (
        <div>
            <div className="list-movies">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-info">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} />
                        <p>{movie.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieList
