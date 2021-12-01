import React, {useRef} from 'react'
import "./Product.css"

const Product = ({title, desc, price, image}) => {

    const productCard = useRef()

    const addShadow = () => {
        productCard.current.classList.add("shadow")
    }

    const removeShadow = () => {
        productCard.current.classList.remove("shadow")
    }

    return (
        <div ref={productCard} onMouseEnter={addShadow} onMouseLeave={removeShadow} class="card">
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
    )
}

export default Product
