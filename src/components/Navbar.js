import React from 'react'
import { Link  } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar">
             <Link to="/" className="navbar-brand">Ethnus</Link>
            <div className="nav">
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/blog" className="nav-link">Blog</Link>
                <Link to="#" className="nav-link">Contact</Link>
            </div>
        </nav>

        </>
    )
}

export default Navbar
