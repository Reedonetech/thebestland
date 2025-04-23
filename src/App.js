import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/HomeLanding/Home';
import Abouthome from './component/Aboutland/Abouthome';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element ={<Home />} />
            <Route path='/about' element ={<Abouthome />} />
        </Routes>
    </BrowserRouter>
// import Nav from './component/Nav';
// import Hero from './component/Hero';
// import AboutUs from './component/AboutUs';
// import Product from './component/Product';
// import Footer from './component/Footer';

// function App() {
//   return (
//     <div>
//       <Nav />
//       <Hero />
//       <AboutUs />
//       <Product />
//       <Footer/>
//     </div>
// >>>>>>> main
  );
}

export default App;
