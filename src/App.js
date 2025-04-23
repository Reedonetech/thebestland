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
  );
}

export default App;
