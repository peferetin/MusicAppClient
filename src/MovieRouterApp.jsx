import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Movie from './components/Movie.jsx';
import Movies from './components/Movies.jsx';
import NavBar from './components/NavBar.jsx';
import Loader from './components/Loader.jsx';









const MovieRouterApp = () => {




  return (

    <>

      <NavBar />

      <Routes>

        <Route path="/loader" element={<Loader />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:_id" element={<Movie />} />


      </Routes>
    </>
  );
}

export default MovieRouterApp;

