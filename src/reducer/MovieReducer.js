import { ADD_MOVIE_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from '../constants/movieConstants'

export const MovieReducer = (state, action) => {
    switch (action.type) {
        case ADD_MOVIE_TO_WATCHLIST:
            return {
                ...state,
                movieWatchList: [action.payload, ...state.movieWatchList]
            }
        
        case REMOVE_FROM_WATCHLIST:
            return {
                ...state,
                movieWatchList: state.movieWatchList.filter(
                    (movie) => movie.id !== action.payload
                )
            }

        default:
            return state;
    }
}