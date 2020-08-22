import React from 'react';
import './styles/DescripcionModulo.css';

function DescripcionModulo({titulo, descripcion}) {

  return (

    <div className="DescripcionModulo mb-5">

      <h1>{titulo}</h1>
      <h3>{descripcion}</h3>
      
    </div>
  );
}

export default DescripcionModulo;
