import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <Main>
        <Special/>
        <Testimonial />
        <About />
      </Main>
      <Footer />
    </>
  );
}

export default App;