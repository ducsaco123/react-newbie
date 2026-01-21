import { Link, NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <>
            <div className='header'>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/user">Users</NavLink></li>
                    <li><NavLink to="/Book">Books</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Header;