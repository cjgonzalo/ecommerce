import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import ProductsRow from '../../components/productsRow/ProductsRow'
import "./home.css"

const home = () => {
    
    return (
        <>
            <h1 className="text-center title">MundoGamer</h1>
            <Carousel/>
            <ProductsRow title="Juegos"/>
            <ProductsRow title="Perifericos"/>
            <ProductsRow title="Gabinetes"/>
            <ProductsRow title="Sillas Gamer"/>
        </>
        
    )
}

export default home
