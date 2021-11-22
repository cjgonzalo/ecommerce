import React from 'react'
import Product from '../../components/Product'
import "./home.css"

const home = () => {
    
    return (
        <>
            <div className="container">
                {/* prev btn */}
                <button class="carousel-control-prev bg-dark " type="button" data-bs-target="#recentProducts" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                {/* carousel */}
                <div id="recentProducts" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner row">
                        <div class="carousel-item active col">
                            <Product title = "Titulo" desc = "lorem ipsum" price = {3000} image = {"https:/picsum.photos/250"} />
                        </div>
                        <div class="carousel-item active col">
                            <Product title = "Titulo" desc = "lorem ipsum" price = {200} image = {"https:/picsum.photos/250"} />
                        </div>
                        <div class="carousel-item active col">
                            <Product title = "Titulo" desc = "lorem ipsum" price = {1000} image = {"https:/picsum.photos/250"} />
                        </div>
                        <div class="carousel-item col">
                            <Product title = "Titulo" desc = "lorem ipsum" price = {500} image = {"https:/picsum.photos/250"} />
                        </div>
                    </div>
                </div>
                {/* next btn */}
                <button class="carousel-control-next bg-dark" type="button" data-bs-target="#recentProducts" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
        
    )
}

export default home
