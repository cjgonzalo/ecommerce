import React from 'react'
import Product from "../product/Product"
import "./ProductsRow.css"

const ProductsRow = ({title, url}) => {
    return (
        <>
        
        <div className="main-container">
            <div className="row">
            <div className="col-12 col-sm-6 col-lg-3 product">
                <Product title="titulo" price={1000} desc="description" image="https://via.placeholder.com/300" />
            </div>
            <div className="col-12 col-sm-6 col-lg-3 product">
                <Product title="titulo" price={2000} desc="description" image="https://via.placeholder.com/300" />
            </div>
            <div className="col-12 col-sm-6 col-lg-3 product">
                <Product title="titulo" price={3000} desc="description" image="https://via.placeholder.com/300" />
            </div>
            <div className="col-12 col-sm-6 col-lg-3 product">
                <Product title="titulo" price={4000} desc="description" image="https://via.placeholder.com/300" />
            </div>
            </div>
        </div>
        </>
    )
}

export default ProductsRow
