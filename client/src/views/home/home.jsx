import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import ProductsRow from '../../components/productsRow/ProductsRow'
import "./home.css"

const home = () => {
    
    return (
        <>
            <h1 className="text-center">MundoGamer</h1>
            <Carousel/>
            <ProductsRow />
            <ProductsRow />
            <ProductsRow />
            <ProductsRow />
        </>
        
    )
}

export default home
