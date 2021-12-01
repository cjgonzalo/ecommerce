import React, {useEffect, useRef} from 'react'
import bannerJuegos from "./../../assets/images/banner-juegos.jpg"
import bannerPerifericos from "./../../assets/images/banner-perifericos.jpg"
import bannerGabinetes from "./../../assets/images/banner-gabinetes.jpg"
import bannerSillas from "./../../assets/images/banner-sillas-gamer.jpg"
import "./Carousel.css"


const Carousel = () => {

    return (
        <>
        <section class="carousel-container">
            <div id="preview-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={bannerJuegos} class="d-block w-100" alt="banner juegos"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Juegos</h5>
                            <a href="/productos/juegos" className="see-more">Ver más</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={bannerPerifericos} class="d-block w-100" alt="banner perisfericos"/>
                        <div class="carousel-caption d-none d-md-block">
                        <h5>Perifericos</h5>
                            <a href="/productos/perifericos" className="see-more">Ver más</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={bannerGabinetes} class="d-block w-100" alt="banner gabinetes"/>
                        <div class="carousel-caption d-none d-md-block">
                        <h5>Gabinetes</h5>
                            <a href="/productos/gabinetes" className="see-more">Ver más</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={bannerSillas} class="d-block w-100" alt="banner sillas gamer"/>
                        <div class="carousel-caption d-none d-md-block">
                        <h5>Sillas Gamer</h5>
                            <a href="/productos/sillas-gamer" className="see-more">Ver más</a>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#preview-carousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#preview-carousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
        </>
    )
}

export default Carousel
