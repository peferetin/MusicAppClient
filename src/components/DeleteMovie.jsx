import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Card } from 'antd'


const DeleteMovie = () => {

    const { _id } = useParams()
    const [movie, setMovie] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const deletedMovie = async () => {
        try {
            const res = await axios.delete(`http://localhost:5001/movies/${_id}`);
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
        deletedMovie()
    }, [])
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error</h1>

    return (
        <form action="delete">

            <input type="text" id="title" name="title"></input>
            <input type="submit" value="Submit"></input>

        </form>

    )

}
export default DeleteMovie;