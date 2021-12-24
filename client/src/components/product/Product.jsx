import React, {useRef} from 'react'
import {Link} from "react-router-dom"
import "./Product.css"

const Product = ({id, title, desc, price, image}) => {

    const productCard = useRef()

    const addShadow = () => {
        productCard.current.classList.add("shadow")
    }

    const removeShadow = () => {
        productCard.current.classList.remove("shadow")
    }

    return (
        <Link className="link d-flex justify-content-center" to={`/producto/${id}`}>
            <div ref={productCard} onMouseEnter={addShadow} onMouseLeave={removeShadow} className="card h-70 w-75">
                <img src = {image} class="card-img-top" alt={title}/>
                <div class="card-body">
                    <div className="row">
                        <div className="col-6">
                            <h5 class="product-title">{title}</h5>
                        </div>
                        <div className="col-6">
                            <h5 class="product-price">{price}</h5>
                        </div>
                    </div>
                    <p class="product-desc">{desc}</p>
            </div>
        </div>
    </Link>
    )
}

export default Product
