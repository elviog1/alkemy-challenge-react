import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/Header.css'
import swAlert from 'sweetalert';
import { useNavigate } from 'react-router-dom';
export default function Search() {
    const navigate = useNavigate()
    const handleSubmit = e =>{
        e.preventDefault()
        const SearchInput = e.target.search.value.trim()
        
        if(SearchInput.length === 0){
            swAlert("Error!", "Ingrese el nombre de alguna pelicula!", "warning")
        }else if(SearchInput.length <4){
            swAlert("Sorry!", "Debe ingresar minimo 4 letras!", "warning")
        }else{
            e.target.search.value = ""
            navigate(`/resultados?movie-title=${SearchInput}` )
        }

    }
  return (
    <div>
        <form className='me-5' onSubmit={handleSubmit}>
                <div className=' d-flex'>
                    <input className='login-input' type="search" name="search" placeholder="Buscar..." />
                    <button className='login-button' type='submit'>Send</button>
                </div>
             </form>
    </div>
  )
}
