import React from 'react'
import Product from "../product/Product"
import "./ProductsRow.css"

const ProductsRow = ({title, url}) => {
    return (
        <section className="products-row-container">
            <h1 className="title"><a href={`/${title}`}>{title}</a></h1>
            <div className="row">
            <div className="col-12 col-sm-6 col-lg-3 product d-flex justify-content-center">
                <Product title="titulo" price={1000} desc="description" image="https://via.placeholder.com/300" />
            </div>
            <div className="col-12 col-sm-6 col-lg-3 product d-flex justify-content-center">
                <Product title="titulo" price={2000} desc="description" image="https://via.placeholder.com/300" />
            </div>
            <div className="col-12 col-sm-6 col-lg-3 product d-flex justify-content-center">
                <Product title="titulo" price={3000} desc="description" image="https://via.placeholder.com/300" />
            </div>
            <div className="col-12 col-sm-6 col-lg-3 product d-flex justify-content-center">
                <Product title="titulo" price={4000} desc="description" image="https://via.placeholder.com/300" />
            </div>
            </div>
        </section>
    )
}

export default ProductsRow
