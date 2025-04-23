import React from 'react';
import Nav from '../Nav';
import Abouthero from './Abouthero'
import Mission from './Mission';
import Commit from './Commit';
import Apart from './Apart';

const Abouthome = () => {
  return (
    <div>
         <Nav />  
        <Abouthero />
        <Mission />
        <Commit />
        <Apart />
    </div>
  )
}

export default Abouthome