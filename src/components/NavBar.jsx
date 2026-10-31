import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">My Receipe</div>
            <ul className="nav-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/addrecipe">Add Recipe</NavLink></li>                
            </ul>
        </nav>

    )
}
export default NavBar