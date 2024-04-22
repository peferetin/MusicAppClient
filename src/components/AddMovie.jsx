import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'






const AddMovie = () => {
    // let navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [movies, setMovies] = useState([])
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [url, setUrl] = useState('')
    const [year, setYear] = useState('')
    const [duration, setDuration] = useState('')
    const [rate, setRate] = useState('')
    const [genre, setGenre] = useState('')




    const addedMovie = async (e) => {
        e.preventDefault()
        try {
            const newMovie = await axios.post('http://localhost:5001/movies',

                {
                    title: title,
                    image: image,
                    url: url,
                    year: year,
                    duration: duration,
                    rate: rate,
                    genre: genre
                }
            )

            console.log(newMovie);




        } catch (err) {
            console.log(err);

        } finally {
            setTitle('')
            setImage('')
            setUrl('')
            setYear('')
            setDuration('')
            setRate('')
            setGenre('')


        }
    }
    useEffect(() => {
        addedMovie()
    }, [])

    if (error) return <h1>Error</h1>

    return (

        <div>



            <h1>Add a Movie</h1>
            <form onSubmit={addedMovie}>

                <input type="text" placeholder='movie title' value={title} required onChange={(e) => setTitle(e.target.value)} />
                <br />
                <input type="text" placeholder='movie-genre' value={genre} required onChange={(e) => setGenre(e.target.value)} />
                <br />
                <input type="text" placeholder='movie-rate' value={rate} required onChange={(e) => setRate(e.target.value)} />
                <br />
                <input type="text" placeholder='movie-duration' value={duration} required onChange={(e) => setDuration(e.target.value)} />
                <br />

                <input type="submit" />
            </form>


        </div>
    )
}
export default AddMovie