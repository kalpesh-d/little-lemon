import './css/About.css'

function About() {
    return(
        <section className="about">
            <div className='about-text'>
                <h1 className='heading'>Little Lemon</h1>
                <p className='city'>Chicago</p>
                <p className='paragraph'>At Little Lemon, every dish is made with care and passion, Whether you are in the mood for juicy lamb kebabs, crispy falafel, or a classic Greek salad, the menu has something for everyone. The family owners take great pride in their restaurant and are dedicated to creating an inviting atmosphere where customers can relax, enjoy a meal, and celebrate the flavors of the Mediterranean. Little Lemon is a must-visit for anyone in Chicago looking for delicious, wholesome food in a welcoming environment.</p>
            </div>
            <div className='image-sec'>
                <div className="about-image img1">
                    <img src={require('../assets/M&A1.jpeg')} alt='M&A'/>
                </div>
                <div className="about-image img2">
                    <img src={require('../assets/M&A2.jpg')} alt='M&A'/>
                </div>
            </div>
        </section>
    );
}

export default About;