import React, { useState, useEffect } from 'react'
import MovieFind from '../Components/MovieFind'

const MovieSearch = () => {
    const moviesSearch = `https://api.themoviedb.org/3/search/movie?api_key=b1fbb59223a6f5e7113c60d079c7c503&language=en-US&query=`

    const [query, setQuery] = useState("")
    const [moviesData, setMoviesData] = useState([])

    const onChangeHandler = async (e) => {
        await setQuery(e.target.value)

        const data = await fetch(`${moviesSearch} + ${e.target.value}&page=1&include_adult=false`)
        const dataJson = await data.json()

        if(!dataJson.errors) {
            setMoviesData(dataJson.results)
        } else {
            setMoviesData([])
        }
    }

    return (
        <div className="moviesearch__container">
            <div className="container">
                <div className="input-wrapper">
                    <input 
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={onChangeHandler}
                    />
                </div>

                {moviesData.length > 0 && (
                    <MovieFind moviesData={moviesData} />
                )}
            </div>
        </div>
    )
}

export default MovieSearch
