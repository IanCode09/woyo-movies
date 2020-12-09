import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo.png'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="brand">
                    <Link to="/">
                        <img src={Logo} />
                    </Link>
                </div>

                <ul className="nav-links">
                    <li>
                        <Link to="/searchmovie">
                            Search Movie
                        </Link>
                    </li>

                    <li>
                        <Link to="/watchlist">
                            Watchlist
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
