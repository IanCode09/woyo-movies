import React from 'react'
import { Link } from 'react-router-dom'

const MovieFind = ({ moviesData }) => {
    return (
        <div className="movies">
            {moviesData.map((movie) => (
                <div key={movie.id} className="movie-data">
                    <Link to={`movie/${movie.id}`}>
                        {movie.poster_path ? (
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        ) : (
                            <img src="https://images.unsplash.com/photo-1490971588422-52f6262a237a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" />
                        )}
                    </Link>

                    <div className="movie-data-info">
                        <h3>{movie.title}</h3>
                        <p style={{ marginBottom: 20 }}>{movie.release_date}</p>
                        <i className="fas fa-star" /> {movie.vote_average}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieFind
