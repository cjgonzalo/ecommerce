import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import ProductsSection from '../../components/ProductsSection/ProductsSection'
import "./Home.css"

const Home = () => {

    return (
        <>
            <h1 className="text-center title">Bienvenido a MundoGamer</h1>
            <Carousel/>
            <ProductsSection title="Destacados" url="http://localhost:4000/api/productos/destacados"/>
            <ProductsSection title="Juegos" url="http://localhost:4000/api/home/juego"/>
            <ProductsSection title="Gabinetes" url="http://localhost:4000/api/home/gabinetes"/>
            <ProductsSection title="Perifericos" url="http://localhost:4000/api/home/perifericos"/>
            <ProductsSection title="Sillas Gamer" url="http://localhost:4000/api/home/sillasGamer"/>
        </>
        
    )
}

export default Home
