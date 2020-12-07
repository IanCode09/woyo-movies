import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="brand">
                    <Link to="/">
                        <h2>MYMovie</h2>
                    </Link>
                </div>

                <ul className="nav-links">
                    <li>
                        <Link to="/searchmovie">
                            Search Movie
                        </Link>
                    </li>

                    <li>
                        <Link to="/searchactor">
                            Search Actor
                        </Link>
                    </li>

                    <li>
                        <Link to="/watchlist">
                            Watchlist
                        </Link>
                    </li>

                    <li>
                        <Link to="/watchlist">
                            Watched
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
