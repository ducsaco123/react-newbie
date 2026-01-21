import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <>
            <div className='header'>
                <ul>
                    <li><Link class="active" to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Header;