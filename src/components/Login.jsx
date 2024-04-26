import { useState, useEffect } from 'react'
import axios from 'axios'




function Login() {

    // const [login, setLogin] = useState('')
    // const [error, setError] = useState('')
    // const [loading, setLoading] = useState(true)

    // const fetchLogin = async () => {
    //     try {
    //         const res = await axios.get('http://localhost:5001/login')
    //         console.log(res.data);
    //         setLogin(res.data)
    //         setLoading(false)

    //     } catch (err) {
    //         console.log(err);
    //         setError(err)
    //     }
    // }

    // fetchLogin()




    // if (error) return <h1>Error</h1>
    return (
        <div>
            <form action="">

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Login</button>





            </form>
        </div>
    )
}


export default Login