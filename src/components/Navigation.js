import './css/Navigation.css'
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <nav className='navigation'>
            <Link to='/'>
                <img src={Logo} alt="Little Lemon" className='logo'/>
            </Link>
            <ul className='nav-lists'>
                <li className='list'><Link to="/">Home</Link></li>
                <li className='list'><Link to="/about">About</Link></li>
                <li className='list'><Link to="/menu">Menu</Link></li>
                <li className='list'><Link to="/reservation">Reservation</Link></li>
                <li className='list'><Link to="/order-online">Order Online</Link></li>
                <li className='list'><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;