import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/bootstrap.min.css'
import '../styles/Header.css'
import Search from './Search'
export default function Header(props) {
  return (
    <div className='d-flex justify-content-between'>

        <nav className="navbar sticky-top bg-light header ">
            <ul className="d-flex  gap-5 ">
                <li className='list-group'>
                    <Link className='text-decoration-none link' to="/">Home</Link>
                </li>
                <li className='list-group' >
                    <Link className='text-decoration-none link' to="/listado">Listado</Link>
                </li>
                <li className='list-group'>
                    <Link  className='text-decoration-none link' to="/favoritos">Favoritos</Link>
                    {props.favorite.length >0 && <><p className='text-success carrito'>{props.favorite.length}</p></>}
                </li>

            </ul>
            <Search />

        </nav>


        {/* <nav className="navbar sticky-top bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Sticky top</a>
            </div>
        </nav> */}


    </div>
  )
}
