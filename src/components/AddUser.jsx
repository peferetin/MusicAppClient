import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'



const AddUser = () => {
    let navigate = useNavigate()

    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [image, setImage] = useState(null)


    const addedUser = async (e) => {
        e.preventDefault()

        const postUser = new FormData()
        postUser.append('name', name)
        postUser.append('age', age)
        postUser.append('email', email)
        postUser.append('password', password)
        postUser.append('gender', gender)
        postUser.append('image', image)


        try {
            const newUser = await axios.post('http://localhost:5001/register', postUser,)

            // old method of sending data
            // const newUser = await axios.post('http://localhost:5001/register', { 
            //     name: name,
            //     age: age,
            //     email: email,
            //     password: password,
            //     gender: gender,
            //     image: image

            console.log(newUser);

        } catch (err) {
            console.log(err);
        } finally {
            // old method of setting state
            //     setName('')
            //     setAge('')
            //     setEmail('')
            //     setPassword('')
            //     setGender('')
            //     setImage('')

            navigate('/users')
        }
        // setError(error)

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
                <input type="text" placeholder="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
                {/* <input type="file" placeholder="image" value={image} onChange={(e) => setImage(e.target.files)} /> */}
                <input type="file" placeholder="image" onChange={(e) => setImage(e.target.files[0])} />

                <input type="submit" />
            </form>
        </div>
    )
}
export default AddUser