function Footer() {
    return (
        <footer>
            <img src={require('../assets/footer logo.png')} alt="Little Lemon" />

            {/* Doormat Navigation */}
            <ul>
                <h4>Doormat Navigation</h4>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>

            {/* Contact */}
            <ul>
                <h4>Contact</h4>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>

            {/* Social Media */}
            <ul>
                <h4>Social Media Links</h4>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </footer>
    );
}

export default Footer;