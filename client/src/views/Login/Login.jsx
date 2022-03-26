import React from 'react'
import "./Login.css"

const Login = () => {
    return (
        <div className="login-form-container container">
            <ul class="nav nav-tabs justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Active</a>
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
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#" role="button">Link</a>
                </li>
            </ul>
            {/* <div className='justify-content-center d-flex'>
                
            </div> */}
        </div>
    )
}

export default Login
