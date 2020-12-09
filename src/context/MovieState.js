import React, { createContext, useReducer, useEffect } from 'react'
import { MovieReducer } from '../reducer/MovieReducer'
import { ADD_MOVIE_TO_WATCHLIST } from '../constants/movieConstants'

const initialState = {
    movieWatchList: localStorage.getItem("movieWatchList") 
                    ? JSON.parse(localStorage.getItem("movieWatchList")) 
                    : [],
}

export const MovieContext = createContext(initialState)

export const MovieProvider = props => {
    const [state, dispatch] = useReducer(MovieReducer, initialState)

    useEffect(() => {
        localStorage.setItem("movieWatchList", JSON.stringify(state.movieWatchList))
    }, [state])

    const addMovieToWatchList = (movie) => {
        dispatch({
            type: ADD_MOVIE_TO_WATCHLIST,
            payload: movie
        })
    }

    return (
        <MovieContext.Provider
            value={{ 
                movieWatchList: state.movieWatchList,
                movieWatched: state.movieWatched,
                addMovieToWatchList
             }}
        >
            {props.children}
        </MovieContext.Provider>
    )
}