import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Movie from './components/Movie.jsx';







const MovieRouterApp = () => {




  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:_id" element={<Movie />} />

      </Routes>
    </>
  );
}

export default MovieRouterApp;

