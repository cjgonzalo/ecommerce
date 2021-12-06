import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            
            <div className="container">
                        <p className="text-center"><b>Todos los derechos reservados Mundo Gamer 2021</b></p>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="container text-center">
                        <span className="text-center"><b>Encontranos en:</b></span>
                        <ul className="networks list-group list-group-horizontal justify-content-center">
                            <li className="list-item">
                                <a href="https://es-la.facebook.com/" target="_blank"><i class="fab fa-facebook-square fa-2x"></i></a>
                            </li>
                            <li className="list-item">
                                <a href="https://www.instagram.com/?hl=es-la" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
                            </li>
                            <li className="list-item">
                                <a href="https://twitter.com/?lang=es" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-6">    
                    <span className="text-center"><b>Código del proyecto</b></span>
                    <ul className="list-group list-group-horizontal justify-content-start">
                        <li className="list-item">
                            <a href="https://github.com/cjgonzalo/ecommerce" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            
            
        </footer>
    )
}

export default Footer
