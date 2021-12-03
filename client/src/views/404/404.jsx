import React from 'react'
import { Link } from 'react-router-dom'

const notFound = () => {
    return (
        <>
            <h1>No pudimos encontrar esta ruta</h1>
            <Link to="/">Volver al inicio</Link>
        </>
    )
}

export default notFound
