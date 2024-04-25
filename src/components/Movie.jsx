import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Movie.css'


import ReactPlayer from 'react-player'
import Loader from './Loader.jsx'

const Movie = () => {
    const { _id } = useParams()
    // const URL = 'https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/10/Shawshank-photo.png?fit=1170%2C645&ssl=1'

    const [movie, setMovie] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchMovie = async () => {
        try {
            const res = await axios.get(`http://localhost:5001/movies/id/${_id}`);
            console.log(res.data);
            setMovie(res.data)
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
        fetchMovie()
    }, [])

    if (loading) return <h1>{<Loader />}</h1>
    if (error) return <h1>Error</h1>
    console.log(movie);
    return (
        <div className='card-movie' >

            <div className="p-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a className='w-40' href="#">
                    <ReactPlayer
                        width={370}
                        height={370}
                        url={movie.url} />
                    {/* <img className="rounded-t-lg" src={URL} alt="" /> */}
                </a>
                <div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Year: {movie.year}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Duration: {movie.duration}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rating: {movie.rate}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Genre: {movie.genre}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Director: {movie.director}</p>
                    <a href={`https://www.youtube.com/watch?v=nb_jhcuCLxU/${movie.title}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Watch Now
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div >



            {/* <Card className='Cards' key={movie._id} title={movie.title} style={{ width: 300 }}>
                <ReactPlayer url={movie.url} />


                <p>{movie.year}</p>
                <p>{movie.rate}</p>
                <p>{movie.genre}</p>
                <p>{movie.duration}</p>
            </Card> */}
        </div >


    )
}

export default Movie