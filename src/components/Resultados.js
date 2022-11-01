import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/bootstrap.min.css'
import '../styles/Resultado.css'

export default function Resultados(props) {
    let query = new URLSearchParams(window.location.search)
    let movieID = query.get("movie-title")
    const [movies,setMovies] = useState([])
    
    useEffect(()=>{
        const api = `https://api.themoviedb.org/3/search/movie/?api_key=8f2a16d4f0d2593718febacdf7b1d495&language=es-ES&query=${movieID}`
        axios.get(api)
            .then(response => {setMovies(response.data.results)})
            .catch(error =>{
                console.log(error)
            })
    },[movies])

  return (
    <div className='resultado'>
    <h2 className='transparent'>Buscaste : <em>{movieID}</em></h2>
    {movies.length === 0 && <h2 className='text-center fs-1 transparent'>No hay peliculas con ese nombre</h2>}
    <div className='d-flex listado justify-content-center'>
        {movies.map((movie, index) => {
            return (
            <div className='card ' style={{ width: "18rem" }} key={index}>
              <img className='card-img-top' src={"https://image.tmdb.org/t/p/w500/"+`${movie.poster_path}`} />
              <div className='fav-div'>
                <button onClick={props.addOrRemoveFromFavs}
                 className='button-fav'
                 data-id={movie.id}
                 >{movie.hearth ? "❤" :"🖤"}</button>
              </div> 
              <div className='card-body d-flex flex-column justify-content-between'>
                <h5 className='card-title fs-4 fw-bold'>{movie.title}</h5>
                <p className='card-text fs-5'>{movie.overview.length > 100 ? movie.overview.substring(0,100) + "..." : movie.overview}</p>
                <Link to={`/detail?id=${movie.id}` }className='card-button'>Detail</Link>
              </div>
            </div>
          )
        })}
    </div>
          </div>
  )
}
