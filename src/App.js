import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Hero from './component/Hero';
import AboutUs from './component/AboutUs';
import Product from './component/Product';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <AboutUs />
      <Product />
      <Footer/>
    </div>
  );
}

export default App;
