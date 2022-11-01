import { computeHeadingLevel } from '@testing-library/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/bootstrap.min.css'
import '../styles/Listado.css'
import swAlert from 'sweetalert';
export default function Listado(props) {



  const tokenUs = sessionStorage.getItem("token")
  const navigate = useNavigate()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (!tokenUs) {
      navigate("/")
    }
  }, [])

  useEffect(() => {
    const api = "https://api.themoviedb.org/3/discover/movie?api_key=8f2a16d4f0d2593718febacdf7b1d495&language=es-ES&page=1"
    axios.get(api)
      .then(response => {
        const apiResult = response.data
        setMovies(apiResult.results)
      })
      .catch(error => {
        swAlert("Not Found","404","error")
      })
      
  }, [setMovies])

  
  return (
    <>
      <div className=' d-flex listado justify-content-center'>
        {movies.map((movie, index) => {
          return (
            <div className='card ' style={{ width: "18rem" }} key={index}>
              <img className='card-img-top' src={"https://image.tmdb.org/t/p/w500/"+`${movie.poster_path}`} />
              <div className='fav-div'>
                <button onClick={props.addOrRemoveFromFavs}
                 className='button-fav'
                 data-id={movie.id}
                 >{movie.hearth == true ? "❤" :"🖤"}</button>
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
    </>
  )
}
