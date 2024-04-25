import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Movie from './components/Movie.jsx';
import Movies from './components/Movies.jsx';
import NavBar from './components/NavBar.jsx';
import Loader from './components/Loader.jsx';
import SearchMovieByName from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
import Users from './components/Users.jsx';
import User from './components/User.jsx';
import AddUser from './components/AddUser.jsx';


// import DeleteMovie from './components/DeleteMovie.jsx';

const MovieRouterApp = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/loader" element={<Loader />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:_id" element={<Movie />} />
        <Route path="/search" element={<SearchMovieByName />} />
        <Route path="/addMovie" element={<AddMovie />} />
        <Route path="/users" element={<Users />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/users/:id" element={<User />} />


        {/* <Route path="/deleteMovie" element={<DeleteMovie />} /> */}
      </Routes>
    </>
  );
}

export default MovieRouterApp;

