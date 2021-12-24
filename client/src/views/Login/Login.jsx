import React from 'react'
import "./Login.css"

const Login = () => {
    return (
        <div className='justify-content-center d-flex'>
            <form action="" method="post">
                <div className="row">
                    <div className="col-12">
                        <label htmlFor="username">Usuario</label>
                        <input type="text" name="username" id="username" className='form-control' placeholder='Ingrese su usuario' />
                    </div>
                    <div className="col-12">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password" className='form-control' placeholder='Ingrese su contraseña' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
