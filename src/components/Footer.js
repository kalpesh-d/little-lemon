import './css/Footer.css'

function Footer() {
    return (
        <footer>
            <img src={require('../assets/footer logo.png')} alt="Little Lemon" className='foot-logo'/>

            {/* Doormat Navigation */}
            <ul className='foot-lists'>
                <h4 className='foot-heading'>Doormat<br/> Navigation</h4>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>

            {/* Contact */}
            <ul className='foot-lists'>
                <h4 className='foot-heading'>Contact</h4>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>

            {/* Social Media */}
            <ul className='foot-lists'>
                <h4 className='foot-heading'>Social Media Links</h4>
                <li><a href="/">Address</a></li>
                <li><a href="/">Phone Number</a></li>
                <li><a href="/">Email</a></li>
            </ul>
        </footer>
    );
}

export default Footer;