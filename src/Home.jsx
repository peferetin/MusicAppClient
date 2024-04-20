
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import Loader from './components/Loader.jsx'





function Home() {
  const [movies, setMovies] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const URL = 'https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/10/Shawshank-photo.png?fit=1170%2C645&ssl=1'






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





  return (
    <div className='bg-teal-900 h-80'>

      <h1 className=' text-4xl text-center'>
        Welcome to My Movie Application
      </h1>

    </div>
  )
}

export default Home
