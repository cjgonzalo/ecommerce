import React, {useRef} from 'react'

const Product = ({title, desc, price, image}) => {

    const productCard = useRef()

    const addShadow = () => {
        productCard.current.classList.add("shadow-sm")
    }

    const removeShadow = () => {
        productCard.current.classList.remove("shadow-sm")
    }

    return (
        <div ref={productCard} onMouseEnter={addShadow} onMouseLeave={removeShadow} class="card" style={
            {maxWidth: "300px"}
        }>
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
