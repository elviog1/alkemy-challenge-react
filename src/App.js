
import { Route,Routes } from 'react-router-dom';
import DetailMovie from './components/DetailMovie';
import Footer from './components/Footer';
import Header from './components/Header';
import Listado from './components/Listado';
import Login from './components/Login';
import Resultados from './components/Resultados';

function App() {
  return (

    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login />}  />
        <Route path='/listado' element={<Listado />}  />
        <Route path='/detail' element={<DetailMovie />}  />
        <Route path='/resultados' element={<Resultados />}  />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
