import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                <Link className="navbar-brand" to="/#">
                    Code for Tomorrow
                </Link>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/card">
                                CARD
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav