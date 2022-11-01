import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate,useParams } from "react-router-dom"
import '../styles/Detail.css'
function DetailMovie (){
    const token = sessionStorage.getItem("token")
    const navigate = useNavigate()
    let query = new URLSearchParams(window.location.search)
    let movieID = query.get("id")
    const [detailMovie, setDetailMovie] = useState(null)
    useEffect(()=>{
        if(!token){
            navigate("/")
        }
    }, [navigate])
    
    useEffect(()=>{
        const api = `https://api.themoviedb.org/3/movie/${movieID}?api_key=8f2a16d4f0d2593718febacdf7b1d495&language=es-ES`
        axios.get(api)
            .then(response => setDetailMovie(response.data))
            .catch(error =>{
                console.log(error)
            })
    },[movieID])
    console.log(detailMovie)


    return (
        <div className=" detail">
        {!detailMovie && <h2 className="text-center">Cargando...</h2>}
        {detailMovie && 
            <>
                    <div className="container-card d-flex">
                        <img src={"https://image.tmdb.org/t/p/w500/"+`${detailMovie.poster_path}`} />
                        <div className="ms-3">
                            <h2 className="text-center fs-1 fw-bold">{detailMovie.title}</h2>
                            <p className="fs-4"><span className="fw-bold">Descripcion: </span> {detailMovie.overview}</p>
                            <p className="fs-4"><span className="fw-bold">Fecha de estreno: </span>{detailMovie.release_date}</p>
                            <p className="fs-4"><span className="fw-bold">Generos:</span> {detailMovie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}</p>
                            <p className="fs-4"><span className="fw-bold">Duracion:</span> {detailMovie.runtime} Min.</p>
                            <p className="fs-4 fw-bold"><span className="fw-bold">Votacion:</span> {"⭐".repeat(detailMovie.vote_average)} 
                            {Math.floor(detailMovie.vote_average) >5 ?
                             <span className="green">{Math.floor(detailMovie.vote_average)}</span> :
                             <span className="red">{Math.floor(detailMovie.vote_average)}</span>}/10</p>
                        </div>
                    </div>
        </>
        }
                </div>
    )
}

export default DetailMovie