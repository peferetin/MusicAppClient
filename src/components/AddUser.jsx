import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'






const AddUser = () => {
    let navigate = useNavigate()

    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')





    const addedUser = async (e) => {
        e.preventDefault()
        try {
            const newUser = await axios.post('http://localhost:5001/register',

                {
                    name: name,
                    age: age,
                    email: email,
                    password: password

                }
            )

            console.log(newUser);




        } catch (err) {
            console.log(err);

        } finally {
            setName('')
            setAge('')
            setEmail('')
            setPassword('')
            navigate('/users')


        }
    }

    if (error) return <h1>Error</h1>

    return (

        <div>



            <h1 className="mb-10 text-center bg-orange-600">Add a User </h1>
            <form className="flex" onSubmit={(e) => addedUser(e)}>

                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />


                <input type="submit" />
            </form>


        </div>
    )
}
export default AddUser