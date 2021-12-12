import React, {useState, useEffect} from 'react'
import Carousel from '../../components/carousel/Carousel'
import Featured from '../../components/featured/Featured'
import "./home.css"
import axios from "axios"

const home = () => {

    return (
        <>
            <h1 className="text-center title">Bienvenido a MundoGamer</h1>
            <Carousel/>
            <Featured />
        </>
        
    )
}

export default home
