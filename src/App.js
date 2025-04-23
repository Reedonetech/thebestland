import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/HomeLanding/Home';
import Abouthero from './component/Aboutland/Abouthero';




function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element ={<Home />} />
            <Route path='/about' element ={<Abouthero />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
