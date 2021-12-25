import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            
            <div className="container">
                <p className="text-center">Todos los derechos reservados Mundo Gamer 2021</p>
            </div>
                <div className="container text-center">
                    <span className="text-center">Encontranos en:</span>
                    <ul className="networks list-group list-group-horizontal justify-content-center">
                        <li className="list-item">
                            <a href="https://es-la.facebook.com/" target="_blank"><i className="fab fa-facebook-square fa-2x"></i></a>
                        </li>
                        <li className="list-item">
                            <a href="https://www.instagram.com/?hl=es-la" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
                        </li>
                        <li className="list-item">
                            <a href="https://twitter.com/?lang=es" target="_blank"><i className="fab fa-twitter fa-2x"></i></a>
                        </li>
                    </ul>
                </div>
        </footer>
    )
}

export default Footer
