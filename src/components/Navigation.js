import './css/Navigation.css'
import Logo from '../assets/Logo.svg';

function Navigation() {
    return(
        <nav className='navigation'>
            <img src={Logo} alt="Little Lemon" className='logo'/>
            <ul className='nav-lists'>
                <li className='list'><a href="">Home</a></li>
                <li className='list'><a href="">About</a></li>
                <li className='list'><a href="">Menu</a></li>
                <li className='list'><a href="">Reservation</a></li>
                <li className='list'><a href="">Order Online</a></li>
                <li className='list'><a href="">Login</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;