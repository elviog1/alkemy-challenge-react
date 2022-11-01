
import { useEffect, useState } from 'react';
import { Outlet, Route,Routes } from 'react-router-dom';
import DetailMovie from './components/DetailMovie';
import Favoritos from './components/Favoritos';
import Footer from './components/Footer';
import Header from './components/Header';
import Listado from './components/Listado';
import Login from './components/Login';
import Resultados from './components/Resultados';

function App() {

  const [favorite,setFavorite] = useState([])

  
  useEffect(()=>{
    const favMovies = localStorage.getItem("favs") // arranco la app obteniendo los favs 
    if(favMovies){
      let movies = JSON.parse(favMovies)
      setFavorite(movies)

    }
  },[])
  
  const addOrRemoveFromFavs = e=>{ // evento al clickear el corazon, obtengo algunos datos de esa peli
    const favMovies = localStorage.getItem("favs") // arranco la app obteniendo los favs
    let moviesArray;
  
    if (favMovies === null ){ // si no hay nada, me crea un [vacio]
      moviesArray =[]
    }else{
      moviesArray = JSON.parse(favMovies)
    }

    const btn = e.target
    
    const parent = btn.parentElement.parentElement
    const imgURL = parent.querySelector("img").getAttribute("src")
    const titleURL = parent.querySelector("h5").innerText
    const overviewURL = parent.querySelector("p").innerText
    const movieData = {
      imgURL, titleURL,overviewURL,
      id: btn.dataset.id,
      hearth: true
    }
    console.log(movieData)
    
    let movieFilter = moviesArray.find( movie => { return movie.id === movieData.id})
    if(!movieFilter){
      moviesArray.push(movieData) // llevo los datos de la pelicula al localstorage
      localStorage.setItem("favs", JSON.stringify(moviesArray)) // actualizo el localstorage con la peli actualizada
      console.log("se agrego la pelicula:  " + movieData.titleURL)
      console.log(moviesArray)
      setFavorite(moviesArray)
      btn.innerText = "❤"
      // movieData.hearth = true
      // console.log(movieData.hearth)
    }else{
      let movieLeft = moviesArray.filter( movie => { return  movie.id !== movieData.id})
      console.log(movieLeft)
      localStorage.setItem("favs", JSON.stringify(movieLeft))
      console.log("se elimino la pelicula:  "  + movieData.titleURL)
      setFavorite(movieLeft)
      btn.innerText = "🖤"
      // movieData.hearth = false
      // console.log(movieData.hearth)
    }
  }
  return (

    <>
      <Header favorite={favorite} />
      <Routes>
        <Route path='/' element={<Login />}  />
        <Route path='/listado' element={  <Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />}  />
        <Route path='/detail' element={<DetailMovie />}  />
        <Route path='/resultados' element={<Resultados addOrRemoveFromFavs={addOrRemoveFromFavs}  />}  />
        <Route path='/favoritos' element={<Favoritos favorite={favorite} addOrRemoveFromFavs={addOrRemoveFromFavs} />}  />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
