import { ADD_MOVIE_TO_WATCHLIST } from '../constants/movieConstants'

export const MovieReducer = (state, action) => {
    switch (action.type) {
        case ADD_MOVIE_TO_WATCHLIST:
            return {
                ...state,
                movieWatchList: [action.payload, ...state.movieWatchList]
            }

        default:
            return state;
    }
}