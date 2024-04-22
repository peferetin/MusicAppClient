import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'




const SearchMovieByName = () => {
    const [search, setSearch] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState('')

    const fetchByMovieName = async () => {
        try {
            const res = await axios.get(`http://localhost:5001/movies/title/${search}`)
            setMovie(res.data)





        } catch (err) {
            console.log(err);
            setError(err)
        }
        finally {
            setLoading(false)

        }
    }
    // useEffect(() => {
    //     searchMovieByName()
    // }, [])

    if (error) return <h1>Error</h1>
    return (
        <>
            <div className='search-div'>
                <input className='m-10' type="text" placeholder='Search for a movie' required value={search} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={fetchByMovieName} >Search</button>
            </div>
            {movie && (
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-6">
                    <a href="#">
                        <img className="rounded-t-lg" src={`http://localhost:5001${movie.image}`} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
                        </a>
                        <p className="mb- font-normal text-gray-700 dark:text-gray-400">{movie.year}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.duration}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.rate}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.genre}</p>
                        <Link to={`/movies/${movie._id}`}><a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            View
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        </Link>
                    </div>
                </div>

            )}
        </>
    )
}


export default SearchMovieByName