import { Link } from 'react-router-dom'




const NavBar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', background: 'aqua', padding: '20px' }}>
            <Link to='/'>Home</Link>
            {/* <Link to='/map'>Map</Link> */}
            {/* <Link to='/addRestaurant'>Add restaurant</Link> */}
            <Link to='/movies'>Movies</Link>
            <Link to='/users'>Users</Link>
            <Link to='/search'>Search</Link>
            <Link to='/addMovie'>Add a Movie</Link>

            {/* <Link to='/deleteMovie'>Delete a Movie</Link> */}


        </div>
    )
}


export default NavBar