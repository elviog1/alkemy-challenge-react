import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/bootstrap.min.css'
export default function Header() {
  return (
    <div>
        <nav className="navbar sticky-top bg-light">
            <ul className="d-flex gap-5 ">
                <li className='list-group'>
                    <Link className='text-decoration-none' to="/">Home</Link>
                </li>
                <li className='list-group' >
                    <Link className='text-decoration-none' to="/listado">Listado</Link>
                </li>
                <li className='list-group'>
                    <Link  className='text-decoration-none' to="/contacto">Contacto</Link>
                </li>
            </ul>
        </nav>


        {/* <nav className="navbar sticky-top bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Sticky top</a>
            </div>
        </nav> */}


    </div>
  )
}
