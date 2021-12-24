import React, {useEffect, useState, useCallback} from 'react'
import Product from "../product/Product"
import "./ProductsSection.css"
import axios from "axios"

const ProductsSection = ({title, url}) => {

    const [products, setProducts] = useState([])
    
    const fetchData = useCallback(async () => {
        const res = await axios.get(url)
        setProducts(res.data)
    },[])

    useEffect(() => {
        fetchData()
    },[fetchData])

    return (
        <section className="products-row-container">
            <h1 className="title"><a href={`/${title}`}>{title}</a></h1>
            <div className="row">
                {
                    products.map(product => {
                        return(
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 product d-flex justify-content-center">
                                <Product title={product.title} price={product.price} desc={product.description} image={product.images} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ProductsSection