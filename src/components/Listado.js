import { computeHeadingLevel } from '@testing-library/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/bootstrap.min.css'
export default function Listado() {
    const tokenUs = localStorage.getItem("token")
    const navigate = useNavigate()
    const [movies , setMovies] = useState([])
    useEffect(()=>{
        if(!tokenUs){
            navigate("/")
        }
    }, [])

    useEffect(()=>{
      const api = "https://api.themoviedb.org/3/discover/movie?api_key=8f2a16d4f0d2593718febacdf7b1d495&language=es-ES&page=1"
      axios.get(api)
      .then(response => {
        const apiResult = response.data
        setMovies(apiResult.results)
      })
      
      
    },[setMovies]) 
console.log(movies)
  return (
    <>

              <div className='container'>
            <div className='card' style={{width:"18rem"}}>
              <img className='card-img-top'  src='https://tierragamer.com/wp-content/uploads/2022/06/Saitama-one-punch-man.jpg'/>
              <div className='card-body'>
                <p className='card-title'>title</p>
                <p className='card-text'>description</p>
              <Link to="/" className='card-button'>Detail</Link>
              </div>
            </div>
    </div>
    </>
  )
}
