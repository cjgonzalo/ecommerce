import React from "react"

const Navbar = () => {
    return (
        <>
            <header className = "row" style={{
                marginBottom: "50px"
            }}>
                <nav className = "navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="col col-12 col-sm nav-item">
                        <a href="/" className = "nav-link navbar-brand">Inicio(img)</a>
                    </div>
                    <div className="col col-12 col-sm nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-end navbar-brand" href="#" id="dropdown-products" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                        <ul class="dropdown-menu" aria-labelledby="dropdown-products">
                            <li><a class="dropdown-item" href="/">Juegos</a></li>
                            <li><a class="dropdown-item" href="/productos/juegos">Auriculares</a></li>
                            <li><a class="dropdown-item" href="/productos/microfonos">Microfonos</a></li>
                            <li><a class="dropdown-item" href="/productos/gabinetes">Gabinetes</a></li>
                            <li><a class="dropdown-item" href="/productos/sillas-gamer">Sillas Gamer</a></li>
                            <li><a class="dropdown-item" href="/productos/tarjetas-regalo">Tarjetas Regalo</a></li>
                        </ul>
                    </div>
                    <div className="col col-12 col-sm nav-item">
                        <a href="/contacto" className = "nav-link text-center navbar-brand">Contacto</a>
                    </div>
                    <div className="col col-12 col-sm nav-item">
                        <a href="/contacto" className = "nav-link text-start navbar-brand">Sobre nosotros</a>
                    </div>
                    <div className="col col-12 col-sm nav-item">
                        <a href="/login" className = "nav-link text-end navbar-brand">Login</a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
