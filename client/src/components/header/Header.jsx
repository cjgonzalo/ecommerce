import React from "react"
import "./Header.css"
import {Link} from "react-router-dom"
import MundoGamerLogo from "./../../assets/images/mundo-gamer-logo.jpeg"

const Navbar = () => {
    return (
        <>
            <header className="header">
                <nav className = "navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={MundoGamerLogo} alt="mundo gamer logo" className="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropDown" aria-controls="navbarNavDropDown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse sections" id="navbarNavDropDown">
                            <ul className="navbar-nav" id="navbarNav">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle navbar-brand" to="#" id="dropdown-products" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</Link>
                                    <ul className="dropdown-menu" aria-labelledby="dropdown-products">
                                        <li><Link className="dropdown-item" to="/juegos">Juegos</Link></li>
                                        <li><Link className="dropdown-item" to="/perifericos">Perifericos</Link></li>
                                        <li><Link className="dropdown-item" to="/gabinetes">Gabinetes</Link></li>
                                        <li><Link className="dropdown-item" to="/sillas-gamer">Sillas Gamer</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contacto" className = "nav-link navbar-brand">Contacto</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className = "nav-link navbar-brand">Sobre nosotros</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className = "nav-link navbar-brand">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
