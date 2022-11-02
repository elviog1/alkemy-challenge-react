import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Favoritos(props) {

  const tokenUs = sessionStorage.getItem("token")
  const navigate = useNavigate()
  useEffect(() => {
    if (!tokenUs) {
      navigate("/")
    }
  }, [])

  return (
      <div className=' d-flex listado justify-content-center'>
        {props.favorite.length <1 && <p className='align-self-center text-danger fs-1'>No tienes ninguna pelicula agregada a favorito.</p>}
        {props.favorite.map((movie, index) => {
          return (
            <div className='card ' style={{ width: "18rem" }} key={index}>
              <img className='card-img-top' src={movie.imgURL} />
              <div className='fav-div'>
                <button onClick={props.addOrRemoveFromFavs}
                 className='button-fav'
                 data-id={movie.id}
                 > {movie.hearth ? "❤" :"❤"}
                  </button>
              </div>  
              <div className='card-body d-flex flex-column justify-content-between'>
                <h5 className='card-title fs-4 fw-bold'>{movie.titleURL}</h5>
                <p className='card-text fs-5'>{movie.overviewURL.length > 100 ? movie.overviewURL.substring(0,100) + "..." : movie.overviewURL}</p>
                <Link to={`/detail?id=${movie.id}` }className='card-button'>Detail</Link>
              </div>
            </div>
          )
        })}

      </div>

  )
}
