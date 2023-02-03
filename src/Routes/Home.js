import Navigation from '../components/Navigation';
import Hero from  '../components/Hero';
import Footer from '../components/Footer';
import Specials from '../components/Specials';

function Home() {
    return(
        <>
            <Navigation />
            <Hero />
            <Specials/>
            <Footer />
        </>
    );
}

export default Home;