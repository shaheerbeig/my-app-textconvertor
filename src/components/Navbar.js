import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar({title, about, currMode,toggleMode}) {
  return (
    <>
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${currMode} bg-${currMode} `}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${currMode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Turn to Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    </>
  )
}

Navbar.prototype ={
    title: PropTypes.string,
    about: PropTypes.string
}
