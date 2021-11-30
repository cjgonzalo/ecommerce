import React from "react"
import "./Header.css"
const Navbar = () => {
    return (
        <>
            <header className="header">
                <nav className = "navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a class="navbar-brand" href="/">Inicio(img)</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropDown" aria-controls="navbarNavDropDown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropDown">
                            <ul className="navbar-nav" id="navbarNav">
                                <li className="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle navbar-brand" href="#" id="dropdown-products" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdown-products">
                                        <li><a class="dropdown-item" href="/productos/juegos">Juegos</a></li>
                                        <li><a class="dropdown-item" href="/productos/perifericos">Perifericos</a></li>
                                        <li><a class="dropdown-item" href="/productos/gabinetes">Gabinetes</a></li>
                                        <li><a class="dropdown-item" href="/productos/sillas-gamer">Sillas Gamer</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="/contacto" className = "nav-link navbar-brand">Contacto</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/about" className = "nav-link navbar-brand">Sobre nosotros</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/login" className = "nav-link navbar-brand">Login</a>
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
