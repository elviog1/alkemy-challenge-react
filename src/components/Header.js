import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/bootstrap.min.css'
import '../styles/Header.css'
import Search from './Search'
export default function Header(props) {
    const tokenUs = sessionStorage.getItem("token")
    const navigate = useNavigate()
    useEffect(() => {
    if (!tokenUs) {
      navigate("/")
    }
    }, [])
  return (
    <div className='d-flex justify-content-between'>
        <nav className="navbar sticky-top bg-light header ">
            <ul className="d-flex header-ul  gap-5 ">
                <li className='list-group'>
                    <Link className='text-decoration-none link' to="/">Home</Link>
                </li>
                {tokenUs ? 
                <>
                    <li className='list-group' >
                        <Link className='text-decoration-none link' to="/listado">Listado</Link>
                    </li>
                    <li className='list-group'>
                        <Link  className='text-decoration-none link' to="/favoritos">Favoritos
                        {props.favorite.length >0 && <><p className='text-success carrito'>🎞{props.favorite.length}</p></>}
                        </Link>
                    </li>
                </>
                : null }
                

            </ul>
            {tokenUs ? <Search /> : null}
            

        </nav>
    </div>
  )
}
