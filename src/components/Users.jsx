import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

const { Meta } = Card;
const Users = () => {


    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    // const navigate = useNavigate()

    const fetchUsers = async () => {
        try {
            const res = await axios.get('http://localhost:5001/users');
            console.log(res.data);
            setUsers(res.data)
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
        fetchUsers()
    }, [])

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error</h1>
    console.log(users);
    return (

        // <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', }}>
        <>
            <h1>Users</h1>
            <div className='flex flex-wrap bg-slate-900'>
                {users.map(user => {
                    return (
                        <div key={user._id}>
                            <Link to={`/users/${user._id}`}>
                                <Card
                                    hoverable
                                    style={{ width: 240, margin: '10px' }}
                                >
                                    <Meta title={user.name} description={user.age} />
                                    <p>{user.email}</p>
                                    <p>{user.password}</p>
                                    image: <img src={`http://localhost:5001${user.image}`} alt="" />

                                </Card>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Users;