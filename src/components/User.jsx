import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from './Loader.jsx'



const User = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchUser = async () => {
        try {
            const res = await axios.get(`http://localhost:5001/users/${id}`);
            console.log(res.data);
            setUser(res.data)
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
        fetchUser()
    }, [])

    if (loading) return <h1>{<Loader />}</h1>
    if (error) return <h1>Error</h1>
    console.log();
    return (
        // <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', }}>                             
        <div key={user._id} className='user-div'>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
        </div>
    );

}



export default User;