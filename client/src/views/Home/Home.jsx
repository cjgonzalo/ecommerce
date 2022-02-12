import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import ProductsSection from '../../components/ProductsSection/ProductsSection'
import "./Home.css"

const Home = () => {

    return (
        <>
            <h1 className="text-center title">Bienvenido a MundoGamer</h1>
            <Carousel/>
            <ProductsSection title="Destacados" type="destacados"/>
            <ProductsSection title="Juegos" type="juego"/>
            <ProductsSection title="Gabinetes" type="gabinetes"/>
            <ProductsSection title="Perifericos" type="perifericos"/>
            <ProductsSection title="Sillas Gamer" type="sillasGamer"/>
        </>
        
    )
}

export default Home
