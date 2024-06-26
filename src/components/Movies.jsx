import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loader from './Loader.jsx'


function Movies() {
    const [movies, setMovies] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchMovies = async () => {
        try {
            const res = await axios.get('http://localhost:5001/movies')
            console.log(res.data);
            setMovies(res.data)
            setLoading(false)
        } catch (err) {
            console.log(err);
            setError(err)
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchMovies()
    }, [])
    if (loading) return <h1>{<Loader />}</h1>
    if (error) return <h1>Error</h1>
    console.log(movies);
    return (
        <>
            <h1 className='text-4xl text-center m-10 '>Select a Movie to Watch</h1>
            <div className='movies-div'>
                {movies.map(movie => {
                    return (



                        <div key={movie._id} className=" movies max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-6">
                            <a href="#">
                                <img className="rounded-t-lg " src={`http://localhost:5001/${movie.image}`} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
                                </a>
                                <p className="mb- font-normal text-gray-700 dark:text-gray-400">Year: {movie.year}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Duration:  {movie.duration}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rating:  {movie.rate}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Genre: {movie.genre}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Director: {movie.director}</p>
                                <a href={`/movies/${movie._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    View
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>

                            </div>
                        </div>


                    )
                })}
            </div>

        </>
    )
}

export default Movies