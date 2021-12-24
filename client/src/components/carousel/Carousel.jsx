import React, {useEffect, useRef} from 'react'
import bannerJuegos from "./../../assets/images/banner-juegos.jpg"
import bannerPerifericos from "./../../assets/images/banner-perifericos.jpg"
import bannerGabinetes from "./../../assets/images/banner-gabinetes.jpg"
import bannerSillas from "./../../assets/images/banner-sillas-gamer.jpg"
import {Link} from "react-router-dom"
import "./Carousel.css"


const Carousel = () => {

    return (
        <>
        <div className="container">
            <section className="carousel-container">
                <div id="preview-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={bannerJuegos} className="d-block w-100" alt="banner juegos"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Juegos</h5>
                                <Link to="/juegos" className="see-more">Ver más</Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={bannerPerifericos} className="d-block w-100" alt="banner perisfericos"/>
                            <div className="carousel-caption d-none d-md-block">
                            <h5>Perifericos</h5>
                                <Link to="/perifericos" className="see-more">Ver más</Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={bannerGabinetes} className="d-block w-100" alt="banner gabinetes"/>
                            <div className="carousel-caption d-none d-md-block">
                            <h5>Gabinetes</h5>
                                <Link to="/gabinetes" className="see-more">Ver más</Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={bannerSillas} className="d-block w-100" alt="banner sillas gamer"/>
                            <div className="carousel-caption d-none d-md-block">
                            <h5>Sillas Gamer</h5>
                                <Link to="/sillas-gamer" className="see-more">Ver más</Link>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#preview-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#preview-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
        </>
    )
}

export default Carousel
