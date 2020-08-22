import React from 'react'
import './App.css'

import moduloRegiones from './apiServer/regiones.json'

import Modulo from './components/Modulo'


function App() {

  return (

    <div className="App">

      <Modulo key='modulo de regiones' modulo={moduloRegiones}/>

    </div>
  );
}

export default App;
